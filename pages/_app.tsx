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
  );
}
