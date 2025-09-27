import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import AccessibilityAuditor from '../src/components/AccessibilityAuditor';
import PerformanceOptimizer from '../src/components/PerformanceOptimizer';
import WebVitals from "../src/components/WebVitals";
import '../styles/animations.css';
import '../src/styles/accessibility.css';
import '../src/styles/improvements.css';

// Lazy load heavy components
// const PerformanceTracker = dynamic(() => import('../src/components/PerformanceTracker'), {
//   ssr: false
// });

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Register service worker for performance optimization
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw-performance.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Zion App" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion App" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --primary-color: #2563eb;
              --secondary-color: #7c3aed;
              --accent-color: #06b6d4;
              --text-color: #1f2937;
              --bg-color: #ffffff;
              --surface-color: #f8fafc;
              --border-color: #e5e7eb;
              --shadow-color: rgba(0, 0, 0, 0.1);
            }
            
            [data-theme="dark"] {
              --primary-color: #3b82f6;
              --secondary-color: #8b5cf6;
              --accent-color: #06b6d4;
              --text-color: #f9fafb;
              --bg-color: #111827;
              --surface-color: #1f2937;
              --border-color: #374151;
              --shadow-color: rgba(0, 0, 0, 0.3);
            }
            
            * {
              box-sizing: border-box;
            }
            
            html {
              scroll-behavior: smooth;
            }
            
            body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: var(--bg-color);
              color: var(--text-color);
              line-height: 1.6;
            }
            
            #__next {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }
            
            main {
              flex: 1;
            }
            
            /* Performance optimizations */
            img {
              max-width: 100%;
              height: auto;
            }
            
            /* Accessibility improvements */
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
            
            /* Focus styles */
            *:focus {
              outline: 2px solid var(--primary-color);
              outline-offset: 2px;
            }
            
            /* Skip link */
            .skip-link {
              position: absolute;
              top: -40px;
              left: 6px;
              background: var(--primary-color);
              color: white;
              padding: 8px;
              text-decoration: none;
              z-index: 1000;
            }
            
            .skip-link:focus {
              top: 6px;
            }
          `
        }} />
      </Head>
      
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <main id="main-content">
        <Component {...pageProps} />
      </main>
      
      <PerformanceOptimizer />
      <WebVitals />
      <AccessibilityAuditor />
    </>
  );
}