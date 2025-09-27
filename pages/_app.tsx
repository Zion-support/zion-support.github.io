import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Lazy load heavy components to reduce initial bundle size
const AccessibilityAuditor = dynamic(() => import('../src/components/AccessibilityAuditor'), {
  ssr: false
});

const PerformanceOptimizer = dynamic(() => import('../src/components/PerformanceOptimizer'), {
  ssr: false
});

const WebVitals = dynamic(() => import("../src/components/WebVitals"), {
  ssr: false
});

import '../styles/animations.css';
import '../src/styles/accessibility.css';
import '../src/styles/improvements.css';

export default function App({ Component, pageProps }: AppProps) {
  // Register service worker for performance optimization
  React.useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
      <AccessibilityAuditor />
      <PerformanceOptimizer />
      <WebVitals />
    </>
  );
}