<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
<<<<<<< HEAD
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 text-center mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-600 text-center mb-4">
          We apologize for the inconvenience. Please try refreshing the page.
        </p>
        <div className="flex space-x-3">
          <button
            onClick={resetErrorBoundary}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#0a0a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </ErrorBoundary>
    </>
=======
<<<<<<< HEAD
import React, { useEffect } from 'react';
import '../src/index.css';
>>>>>>> main
import { Header } from '../src/components/Header';
import Footer from '../components/Footer';
import PerformanceMonitor from '../src/components/PerformanceMonitor';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PerformanceMonitor />
      <Header />
      <main className="flex-grow pt-16">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
=======
import React from 'react';
import '../src/index.css';
import PerformanceMonitor from '../src/components/PerformanceMonitor';
import ErrorBoundary from '../src/components/ErrorBoundary';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <PerformanceMonitor />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
      </div>
    </ErrorBoundary>
>>>>>>> main
>>>>>>> main
  );
}
