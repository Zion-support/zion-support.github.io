import React from 'react';
import '../src/index.css';
import PerformanceMonitor from '../src/components/PerformanceMonitor';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PerformanceMonitor />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
