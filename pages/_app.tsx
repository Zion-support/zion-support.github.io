import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from "react-helmet-async";
import Head from 'next/head';
import dynamic from 'next/dynamic';

const AccessibilityAuditor = dynamic(() => import('../src/components/AccessibilityAuditor'), { ssr: false });
const PerformanceOptimizer = dynamic(() => import('../src/components/PerformanceOptimizer'), { ssr: false });
const WebVitals = dynamic(() => import("../src/components/WebVitals"), { ssr: false });
import '../styles/animations.css';
import '../src/styles/accessibility.css';
import '../src/styles/improvements.css';

export default function App({ Component, pageProps }: AppProps) {
  // Register service worker for performance optimization
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration)})
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError)})})}
  }, []);

  return (
    <HelmetProvider>
      <Head>
        <title>Zion App - Advanced Technology Solutions</title>
        <meta name="description" content="Leading provider of AI-powered business solutions, cloud infrastructure and digital transformation services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/* Temporarilydisabled forbuild
      <AccessibilityAuditor />
      <PerformanceOptimizer />
      <WebVitals />
        */}
    </HelmetProvider>
  )}