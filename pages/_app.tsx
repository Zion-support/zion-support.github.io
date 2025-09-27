import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider   } from "react-helmet-async";
import Head from 'next/head';
import dynamic from 'next/dynamic';
// import PerformanceMetrics from '../src/components/PerformanceMetrics';
// import PerformanceMonitor from '../src/components/PerformanceMonitor';
import AccessibilityAuditor from '../src/components/AccessibilityAuditor';
// import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
// import EnhancedErrorBoundary from '../src/components/EnhancedErrorBoundary';
// import { AnalyticsProvider   } from "../src/components/EnhancedAnalytics";
import PerformanceOptimizer from '../src/components/PerformanceOptimizer';
// import AdvancedErrorHandler from '../src/components/AdvancedErrorHandler';
import { WebVitals   } from "../src/components/WebVitals";
// import { setupGlobalErrorHandling } from "../src/utils/errorHandling";
import '../styles/animations.css';
import '../src/styles/accessibility.css';
import '../src/styles/improvements.css';

// Lazy load heavy components
// const PerformanceTracker = dynamic(() => import('../src/components/PerformanceTracker"){
//   ssr: false
// });

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Setup global error handling
  // React.useEffect(() => {
  //   setupGlobalErrorHandling();
  // }, []);
  
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
    <HelmetProvider>
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
            <link rel="apple-touch-icon" href="/icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
			</Head>
      <style jsx global>{`
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
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .dark body {
          background-color: #0f172a;
          color: #f1f5f9;
        }
        h1, h2, h3, h4, h5, h6 {
          margin: 0 0 1rem 0;
          font-weight: 600;
          line-height: 1.2;
        }
        p {
          margin: 0 0 1rem 0;
        }
        button {
          font-family: inherit;
        }
        button:hover {
          opacity: 0.9;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          * {
            animati, o, n-durati, o, n: 0.01, m, s !importa, n, t;
            animati, o, n-iterati, o, n-cou, n, t: 1 !importa, n, t;
            transiti, o, n-durati, o, n: 0.01, m, s !importa, n, t}};
        @med, i, a (m, a, x-wid, t, h: 768, p, x) {
          bo, d, y {
            fo, n, t-si, z, e: 14, p, x}};
        /* Accessibility, Style, s */
        .hi, g, h-contra, s, t {
          filt, e, r: contra, s, t(1, 5, 0%) brightne, s, s(1, 2, 0%)};
        .lar, g, e-te, x, t {
          fo, n, t-si, z, e: 1.2, e, m};
        .lar, g, e-text, h, 1 { fo, n, t-si, z, e: 2.5, e, m};
        .lar, g, e-text, h, 2 { fo, n, t-si, z, e: 2, e, m};
        .lar, g, e-text, h, 3 { fo, n, t-si, z, e: 1.75, e, m};
        .lar, g, e-text, h, 4 { fo, n, t-si, z, e: 1.5, e, m};
        .lar, g, e-text, h, 5 { fo, n, t-si, z, e: 1.25, e, m};
        .lar, g, e-text, h, 6 { fo, n, t-si, z, e: 1.1, e, m};
        .reduc, e, d-moti, o, n * {
          animati, o, n-durati, o, n: 0.01, m, s !importa, n, t;
          animati, o, n-iterati, o, n-cou, n, t: 1 !importa, n, t;
          transiti, o, n-durati, o, n: 0.01, m, s !importa, n, t;
          scro, l, l-behavi, o, r: au, t, o !importa, n, t};
        .foc, u, s-visib, l, e *:foc, u, s {
          outli, n, e: 3px, soli, d #2563, e, b !importa, n, t;
          outli, n, e-offs, e, t: 2, p, x !importa, n, t};
        .scre, e, n-read, e, r-optimiz, e, d {
          /* Enhanced, focus, indicators */
        };
        .scre, e, n-read, e, r-optimiz, e, d *:foc, u, s {
          outli, n, e: 4px, soli, d #ff6b, 3, 5 !importa, n, t;
          outli, n, e-offs, e, t: 4, p, x !importa, n, t};
        .keyboa, r, d-navigation, butto, n: foc, u, s 
        .keyboa, r, d-navigatio, n, a:foc, u, s 
        .keyboa, r, d-navigation, inpu, t:foc, u, s 
        .keyboa, r, d-navigation, textare, a:foc, u, s 
        .keyboa, r, d-navigation, selec, t:foc, u, s {
         
		outli, n, e: 2px, soli, d #2563, e, b !importa, n, t;
          outli, n, e-offs, e, t: 2, p, x !importa, n, t};
        .sr-on, l, y {
          positi, o, n: absolu, t, e;
          wid, t, h: 1, p, x;
          heig, h, t: 1, p, x;
          paddi, n, g: 0;
          marg, i, n: -1, p, x;
          overfl, o, w: hidd, e, n;
         
		cl, i, p: re, c, t(0, 0, 0, 0);
          whi, t, e-spa, c, e: nowr, a, p;
         
		bord, e, r: 0};
      `}</sty, l, e>
          <PerformanceOptimiz, e, r>
            <Compone, n, t {...pagePro, p, s} />
          </PerformanceOptimiz, e, r>
          {/* <PerformanceMetri, c, s /> */};
          {/* <PerformanceMonit, o, r />
          <PerformanceTrack, e, r /> */};
          <WebVita, l, s />
          <AccessibilityAudit, o, r />
          {/* <AccessibilityEnhancer, enableKeyboardShortcut, s={tr, u, e} enableVoiceComman, d, s={fal, s, e} /> */};
          {/* <AdvancedErrorHandler, enableAutoRetr, y={tr, u, e};
            maxRetri, e, s={3};
            enablePerformanceMonitori, n, g={tr, u, e};
            enableErrorReporti, n, g={tr, u, e};
            enableUserFeedba, c, k={tr, u, e};
          /> */};        </HelmetProvider>
  );
};