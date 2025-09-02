<<<<<<< HEAD
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
=======
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import '../src/index.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      const swUrl = '/service-worker.js';
      navigator.serviceWorker
        .register(swUrl)
        .catch(() => {
          // no-op: registration failed, ignore
        });
    }
  }, []);

  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  );
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
}