<<<<<<< HEAD
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
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

=======
import type { AppProps } from
  'next/app';
import
  '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
>>>>>>> origin/main
  return <Component {...pageProps} />;
}