import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { WalletProvider } from '@/context/WalletContext';
import { AnalyticsProvider } from '@/context/AnalyticsContext';
import { CartProvider } from '@/context/CartContext';
import { ErrorProvider } from '@/context/ErrorContext';
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import ErrorBoundary from '@/components/ErrorBoundary'; // Generic ErrorBoundary
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { OfflineIndicator } from '@/components/OfflineIndicator';
// import { BetaBanner } from '@/components/BetaBanner'; // Unused
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout'; // Default AppLayout
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import dynamic from 'next/dynamic';
// import { PerformanceMonitor } from '@/components/ui/performance-monitor'; // Unused
// import { BundleAnalyzer } from '@/components/ui/bundle-analyzer'; // Unused
// import { QuickActions } from '@/components/ui/quick-actions'; // Unused
import { logInfo, logWarn, logError } from '@/utils/productionLogger';


// Dynamically load heavy components to improve initial load time
// const IntercomChat = dynamic(() => import('@/components/IntercomChat'), { // IntercomChat variable unused
//   ssr: false,
//   loading: () => null
// });
dynamic(() => import('@/components/IntercomChat'), { // Import for side effects if needed, or remove if not used
  ssr: false,
  loading: () => null
});
import { HydrationErrorBoundary } from '@/components/HydrationErrorBoundary';
// Import Next.js fonts for optimal loading and CLS prevention
import { Inter, Poppins } from 'next/font/google';
import Head from 'next/head';
// Import global Tailwind styles so they load before the app renders
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
// import getConfig from 'next/config'; // Unused
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import {
  validateProductionEnvironment,
  initializeServices,
} from '@/utils/environmentConfig';
import {
  initializePerformanceOptimizations,
  initializePerformance,
} from '@/utils/performance';
import '@/utils/globalFetchInterceptor';
import '@/utils/consoleErrorToast';
import { initConsoleLogCapture } from '@/utils/consoleLogCapture';
import { RouteChangeHandler } from '@/components/RouteChangeHandler';
import RouteSEO from '@/components/RouteSEO';
import { registerServiceWorker } from '@/serviceWorkerRegistration';
// import PageTransition from '@/components/PageTransition'; // Unused
// import { AnimatePresence } from 'framer-motion'; // Unused

// Define types for getLayout pattern
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log('[App] MyApp component rendering started.');
  const router = useRouter();
  // console.log('Current route:', router.asPath, router.pathname); // Removed for linting
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        retry: false, // Disable retries for faster error handling
      },
    },
  }));
  const [isInitialized, setIsInitialized] = React.useState(false);

  React.useEffect(() => {
    console.log('[App] MyApp main useEffect hook started.');
    try {
      validateProductionEnvironment();
      initializeServices();
      initializeGlobalErrorHandlers();
      
      const { publicRuntimeConfig } = getConfig();
      console.log('[App] Public Runtime Config:', publicRuntimeConfig);
      
      if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE) {
        Sentry.setTag('release', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE);
      }
      if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT) {
        Sentry.setTag('environment', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT);
      }
    } catch (error) {
      console.error('[App] Critical initialization error:', error);
      try {
        Sentry.captureException(error);
      } catch (sentryError) {
        console.warn('[App] Could not send error to Sentry:', sentryError);
      }
    }
  }, []);

  React.useEffect(() => {
    Sentry.setTag('route', router.pathname);
    Sentry.setContext('query', router.query);
  }, [router.pathname, router.query]); // Added router.query as dependency

  console.log('[App] Attempting to render component:', Component.displayName || Component.name || 'UnnamedComponent');

  // Use the getLayout defined on the page component, or default to AppLayout
  const getLayout = Component.getLayout ?? ((page) => <AppLayout>{page}</AppLayout>);

  return (
    <>
      <Head>
        {/* Next.js font optimization handles preloading automatically */}
        {/* Font optimization CSS to prevent CLS */}
        <style jsx global>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }

          /* Optimized fallback font adjustments */
          @font-face {
            font-family: 'Inter Fallback';
            src: local('Arial'), local('system-ui');
            size-adjust: 107%;
            ascent-override: 90%;
            descent-override: 25%;
            line-gap-override: 0%;
          }

          @font-face {
            font-family: 'Poppins Fallback';
            src: local('Arial'), local('system-ui');
            size-adjust: 102%;
            ascent-override: 92%;
            descent-override: 24%;
            line-gap-override: 0%;
          }

          /* Performance optimizations */
          .font-inter { font-family: var(--font-inter), 'Inter Fallback', system-ui, sans-serif; }
          .font-poppins { font-family: var(--font-poppins), 'Poppins Fallback', system-ui, sans-serif; }
        `}</style>
      </Head>
      <div className={`${inter.variable} ${poppins.variable}`}>
        <ProductionErrorBoundary>
          <RootErrorBoundary>
            <HydrationErrorBoundary>
              <React.Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-pulse text-lg">Loading...</div>
                  </div>
                }
              >
                <GlobalErrorBoundary>
                  <QueryClientProvider client={queryClient}>
                    <ApiErrorBoundary>
                      <ReduxProvider store={store}>
                        <I18nextProvider i18n={i18n}>
                          <ErrorProvider>
                            <AuthProvider>
                              <WhitelabelProvider>
                                <LanguageProviderWrapper>
                                  <WalletProvider>
                                    <CartProvider>
                                      <AnalyticsProvider>
                                        <FeedbackProvider>
                                          <ThemeProvider>
                                            <AppLayout>
                                              <RouteSEO />
                                              <RouteChangeHandler
                                                resetScrollOnChange={true}
                                                forceRerender={false} // Keep false as per original, true didn't seem to have a listener
                                              />
                                              <ErrorBoundary>
                                                <Component
                                                  key={router.asPath}
                                                  {...pageProps}
                                                />
                                              </ErrorBoundary>
                                              <ErrorResetOnRouteChange />
                                              <ToastContainer />
                                              <OfflineIndicator />
                                              {/* IntercomChat is dynamically imported but not rendered here explicitly */}
                                              {/* PerformanceMonitor, BundleAnalyzer, QuickActions were commented out/removed */}
                                            </AppLayout>
                                          </ThemeProvider>
                                        </FeedbackProvider>
                                      </AnalyticsProvider>
                                    </CartProvider>
                                  </WalletProvider>
                                </LanguageProviderWrapper>
                              </WhitelabelProvider>
                            </AuthProvider>
                          </ErrorProvider>
                        </I18nextProvider>
                      </ReduxProvider>
                    </ApiErrorBoundary>
                  </QueryClientProvider>
                </GlobalErrorBoundary>
              </React.Suspense>
            </HydrationErrorBoundary>
          </RootErrorBoundary>
        </ProductionErrorBoundary>
      </div>
    </>
  );
}
