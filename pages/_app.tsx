import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // Monitor performance metrics
  usePerformanceMonitor();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Zion Tech Group - Advanced AI and Technology Solutions" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>
        <div className="min-h-screen bg-white flex flex-col">
          <header className="bg-slate-900 text-white p-4 shadow-lg">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-slate-300 mt-1">Advanced AI & Technology Solutions</p>
            </div>
          </header>
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
          <footer className="bg-slate-900 text-white p-4 text-center border-t border-slate-700">
            <div className="max-w-7xl mx-auto">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-slate-400 mt-1">
                Empowering businesses with cutting-edge technology solutions
              </p>
            </div>
          </footer>
        </div>
      </ErrorBoundary>
    </>
  );
}