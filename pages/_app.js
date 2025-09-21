import React from 'react';
import Head from 'next/head';
<<<<<<<< HEAD:pages/_app.js
========
import PerformanceOptimizer from '../components/PerformanceOptimizer.tsx';
import MobileOptimizer from '../components/MobileOptimizer.tsx';
import EnhancedAnalytics from '../components/EnhancedAnalytics.tsx';
import ErrorBoundary from '../components/ErrorBoundary.tsx';
>>>>>>>> 8c3523662b30e8937eabdd7a7ce8f5bc1ebedcec:pages/_app.jsx
import '../styles/globals.css';

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
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}