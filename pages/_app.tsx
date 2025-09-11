import React from 'react';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
// DYNAMIC IMPORTS - Load heavy providers only when needed
// ===================================================================

// Load non-critical providers dynamically to reduce initial bundle
const WhitelabelProvider = dynamic(() => 
  import('@/context/WhitelabelContext').then(mod => ({ default: mod.WhitelabelProvider })), {
  ssr: true,
  loading: () => null
});

const WalletProvider = dynamic(() => 
  import('@/context/WalletContext').then(mod => ({ default: mod.WalletProvider })), {
  ssr: false, // Wallet is client-side only
  loading: () => null
});

const AnalyticsProvider = dynamic(() => 
  import('@/context/AnalyticsContext').then(mod => ({ default: mod.AnalyticsProvider })), {
  ssr: false, // Analytics is client-side only
  loading: () => null
});

const CartProvider = dynamic(() => 
  import('@/context/CartContext').then(mod => ({ default: mod.CartProvider })), {
  ssr: true,
  loading: () => null
});

const FeedbackProvider = dynamic(() => 
  import('@/context/FeedbackContext').then(mod => ({ default: mod.FeedbackProvider })), {
  ssr: false, // Feedback is client-side only
  loading: () => null
});

const ThemeProvider = dynamic(() => 
  import('@/components/ThemeProvider').then(mod => ({ default: mod.ThemeProvider })), {
  ssr: true,
  loading: () => null
});

const AppLayout = dynamic(() => 
  import('@/layout/AppLayout').then(mod => ({ default: mod.AppLayout })), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-lg">Loading layout...</div>
    </div>
  )
});

// Load utility components dynamically
const ToastContainer = dynamic(() => 
  import('@/components/ToastContainer').then(mod => ({ default: mod.ToastContainer })), {
  ssr: false,
  loading: () => null
});

const OfflineIndicator = dynamic(() => 
  import('@/components/OfflineIndicator').then(mod => ({ default: mod.OfflineIndicator })), {
  ssr: false,
  loading: () => null
});

const RouteChangeHandler = dynamic(() => 
  import('@/components/RouteChangeHandler').then(mod => ({ default: mod.RouteChangeHandler })), {
  ssr: false,
  loading: () => null
});

const RouteSEO = dynamic(() => 
  import('@/components/RouteSEO'), {
  ssr: true,
  loading: () => null
});

// ===================================================================
// FONT CONFIGURATION - Optimized loading
// ===================================================================

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
  preload: true,
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-poppins',
  preload: true,
});

// ===================================================================
// LIGHTWEIGHT LANGUAGE WRAPPER
// ===================================================================

const LanguageProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, isAuthenticated } = useAuth();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const safeAuthState = React.useMemo(
    () => ({
      isAuthenticated: isClient ? !!isAuthenticated : false,
      user: isClient ? user : null,
    }),
    [isClient, isAuthenticated, user],
  );
=======
import { HelmetProvider } from 'react-helmet-async';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/globals.css';
>>>>>>> main

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Zion Tech Group — AI, IT & Micro SaaS</title>
        </Head>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
<<<<<<< HEAD
}

if (process.env.NODE_ENV === 'development') {
  console.log('[App] MyApp component initialized with loading fix');
=======
import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
=======
}
>>>>>>> main
