import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
// import { store } from '@/store/store';
// import { I18nextProvider } from 'react-i18next';
// import i18n from '@/i18n/index';
import { Inter, Poppins } from 'next/font/google';
import Head from 'next/head';
// import '../app/globals.css';
import * as Sentry from '@sentry/nextjs';

// Initialize Sentry
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  debug: false,
});

// Font configuration
const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReduxProvider store={store}> */}
        {/* <I18nextProvider i18n={i18n}> */}
          <Head>
            <title>Zion Tech Group - AI & Technology Solutions</title>
            <meta name="description" content="Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`${inter.className} ${poppins.className}`}>
            <Component {...pageProps} />
          </main>
        {/* </I18nextProvider> */}
      {/* </ReduxProvider> */}
    </QueryClientProvider>
  );
}