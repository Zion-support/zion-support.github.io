import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '../components/ThemeProvider.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import { PerformanceMonitor } from '../components/PerformanceMonitor.jsx';
import { EnhancedAnalytics } from '../components/EnhancedAnalytics.jsx';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(savedTheme);
    
    // Add performance monitoring in development
    if (process.env.NODE_ENV === 'development') {
      // Enable performance monitoring
      console.log('🚀 Performance monitoring enabled');
    }
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#0ea5e9" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          
          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        </Head>
        
        <EnhancedAnalytics />
        <PerformanceMonitor />
        
        <div id="root">
          <Component {...pageProps} />
        </div>
        
        {/* Global loading indicator */}
        <div id="loading-indicator" className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-300 z-50" />
      </ThemeProvider>
    </ErrorBoundary>
  );
}