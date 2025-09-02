import React from 'react';
import dynamic from 'next/dynamic';

// Lazy load components to avoid SSR issues
const PerformanceMonitor = dynamic(() => import('../components/PerformanceMonitor'), {
  ssr: false,
});

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
