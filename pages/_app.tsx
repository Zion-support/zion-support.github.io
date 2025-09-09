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
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout'; // Default AppLayout
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import '../src/index.css'; // Global Tailwind styles
import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import { validateProductionEnvironment, initializeServices } from '@/utils/environmentConfig';

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
  const [queryClient] = React.useState(() => new QueryClient());

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
    <ProductionErrorBoundary>
      <RootErrorBoundary>
        <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <GlobalErrorBoundary>
            <QueryClientProvider client={queryClient}>
              <ApiErrorBoundary>
                <ReduxProvider store={store}>
                  <HelmetProvider>
                    <ErrorProvider>
                      <AuthProvider>
                        <WhitelabelProvider>
                          <I18nextProvider i18n={i18n}>
                            <WalletProvider>
                              <CartProvider>
                                <AnalyticsProvider>
                                  <ThemeProvider>
                                    {getLayout(
                                      <>
                                        {/* ErrorBoundary now wraps only the Component */}
                                        <ErrorBoundary>
                                          <Component {...pageProps} />
                                        </ErrorBoundary>
                                        <ErrorResetOnRouteChange />
                                        <Toaster />
                                        <OfflineIndicator />
                                      </>
                                    )}
                                  </ThemeProvider>
                                </AnalyticsProvider>
                              </CartProvider>
                            </WalletProvider>
                          </I18nextProvider>
                        </WhitelabelProvider>
                      </AuthProvider>
                    </ErrorProvider>
                  </HelmetProvider>
                </ReduxProvider>
              </ApiErrorBoundary>
            </QueryClientProvider>
          </GlobalErrorBoundary>
        </React.Suspense>
      </RootErrorBoundary>
    </ProductionErrorBoundary>
  );
}

function Footer(): any {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b, #334155)', color: 'white',
      padding: '40px 20px', marginTop: 'auto'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ 
            fontSize: '1.5rem', fontWeight: 700, marginBottom: 10,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Zion Tech Group</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Innovative IT Solutions & AI Services
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap',
          marginBottom: 20
        }}>
          <Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Services</Link>
          <Link href="/pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing</Link>
          <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
          <Link href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Terms</Link>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #334155', paddingTop: 20, color: '#64748b', fontSize: '0.8rem'
        }}>
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}