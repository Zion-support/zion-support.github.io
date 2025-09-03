import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import '../src/index.css';
import PerformanceMonitor from '../src/components/PerformanceMonitor';
import ErrorBoundary from '../src/components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zion Tech Group — AI, IT & Micro SaaS</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <PerformanceMonitor />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
      </div>
    </ErrorBoundary>
  );
}