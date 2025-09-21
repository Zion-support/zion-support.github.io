import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import PerformanceMonitor from '../components/PerformanceMonitor';
import { ThemeProvider } from '../components/ThemeProvider';
import ErrorBoundary from '../components/ErrorBoundary';
import { NotificationProvider } from '../components/NotificationSystem';
import CookieConsent from '../components/CookieConsent';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/favicon.ico" as="image" />
      </Head>
      
      <ErrorBoundary>
        <ThemeProvider>
          <NotificationProvider>
            <Component {...pageProps} />
            <PerformanceMonitor />
            <CookieConsent />
          </NotificationProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}