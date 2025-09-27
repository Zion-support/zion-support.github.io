import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import Head from 'next/head';
import dynamic from 'next/dynamic';
// import PerformanceMetrics from '../src/components/PerformanceMetrics';
// import PerformanceMonitor from '../src/components/PerformanceMonitor';
import AccessibilityAuditor from '../src/components/AccessibilityAuditor';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
// import EnhancedErrorBoundary from '../src/components/EnhancedErrorBoundary';
// import { AnalyticsProvider } from '../src/components/EnhancedAnalytics';
import PerformanceOptimizer from '../src/components/PerformanceOptimizer';
// import AdvancedErrorHandler from '../src/components/AdvancedErrorHandler';
import { WebVitals } from '../src/components/WebVitals';
import { setupGlobalErrorHandling } from '../src/utils/errorHandling';
import '../styles/animations.css';
import '../src/styles/accessibility.css';
import '../src/styles/improvements.css';

// Lazy load heavy components
// const PerformanceTracker = dynamic(() => import('../src/components/PerformanceTracker'), {
//   ssr: false
// });

export default function App({ Component, pageProps }: AppProps) {
  // Setup global error handling
  React.useEffect(() => {
    setupGlobalErrorHandling()}, []);

  // Register service worker for performance optimization
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw-performance.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration)})
        .catch((error) => {
          console.log('Service Worker registration failed:', error)})}
  }, []);
	return (
    <HelmetProvider>
			<Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index  follow" />
            <meta name="author" content="Zion App" />
            <meta name="theme-color" content="#2563eb" />
            <meta name="viewport" content="width=device-width  initial-scale=1, maximum-scale=5" />
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
          box-sizing: border-box}
        
        html {
          scroll-behavior: smooth}
        
        body {
          margin: 0;
         ,
		padding: 0;
          font-family: 'Inter', system-ui  -apple-system  BlinkMacSystemFont  'Segoe UI', Roboto  sans-serif;
          line-height: 1.6;
          color: #1e293b;
          background-color: #ffffff;
         ,
		transition: background-color 0.3s ease  color 0.3s ease}
        
        .dark body {
          background-color: #0f172a;
         ,
		color: #f1f5f9}
        
        h1  h2  h3  h4  h5  h6 {
          margin: 0 0 1rem 0;
          font-weight: 600;
          line-height: 1.2}
        
        p {
          margin: 0 0 1rem 0}
        
        button {
          font-family: inherit}
        
        button: hover {
         ,
		opacity: 0.9}
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto}
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important}
        }
        
        @media (max-width: 768px) {
          body {
            font-size: 14px}
        }
        
        /* Accessibility Styles */
        .high-contrast {
          filter: contrast(150%) brightness(120%)}
        
        .large-text {
          font-size: 1.2em}
        
        .large-text h1 { font-size: 2.5em}
        .large-text h2 { font-size: 2em}
        .large-text h3 { font-size: 1.75em}
        .large-text h4 { font-size: 1.5em}
        .large-text h5 { font-size: 1.25em}
        .large-text h6 { font-size: 1.1em}
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important}
        
        .focus-visible *:focus {
          outline: 3px solid #2563eb !important;
          outline-offset: 2px !important}
        
        .screen-reader-optimized {
          /* Enhanced focus indicators */
        }
        
        .screen-reader-optimized *:focus {
          outline: 4px solid #ff6b35 !important;
          outline-offset: 4px !important}
        
        .keyboard-navigation button: focus 
        .keyboard-navigation a:focus 
        .keyboard-navigation input:focus 
        .keyboard-navigation textarea:focus 
        .keyboard-navigation select:focus {
         ,
		outline: 2px solid #2563eb !important;
          outline-offset: 2px !important}
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
         ,
		clip: rect(0, 0, 0, 0);
          white-space: nowrap;
         ,
		border: 0}
      `}</style>
          <PerformanceOptimizer>
            <Component {...pageProps} />
          </PerformanceOptimizer>
          {/* <PerformanceMetrics /> */}
          {/* <PerformanceMonitor />
          <PerformanceTracker /> */}
          <WebVitals />
          <AccessibilityAuditor />
          <AccessibilityEnhancer enableKeyboardShortcuts={true} enableVoiceCommands={false} />
          {/* <AdvancedErrorHandler 
            enableAutoRetry={true}
            maxRetries={3}
            enablePerformanceMonitoring={true}
            enableErrorReporting={true}
            enableUserFeedback={true}
          /> */}
        </HelmetProvider>
  )}