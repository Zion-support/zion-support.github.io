import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from "react-helmet-async";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import AccessibilityAuditor from '../src/components/AccessibilityAuditor';
import PerformanceOptimizer from '../src/components/PerformanceOptimizer';
import { reportWebVitals } from "../src/components/WebVitals";
import '../styles/animations.css';
import '../src/styles/accessibility.css';
import '../src/styles/improvements.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Register service worker for performance optimization
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw-performance.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration)})
        .catch((error) => {
          console.log('Service Worker registration failed:', error)})}
  }, []);

  useEffect(() => {
    setIsLoading(false)}, []);

  if (isLoading) {
    return <div>Loading...</div>}

  if (error) {
    return <div>Error: {error}</div>}

  return (
    <HelmetProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <PerformanceOptimizer />
      <AccessibilityAuditor />
      <WebVitals />
      
      <Component {...pageProps} />
    </HelmetProvider>
  )}