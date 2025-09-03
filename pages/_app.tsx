import React from 'react';
import '../src/index.css';
import PerformanceMonitor from '../src/components/PerformanceMonitor';
import ErrorBoundary from '../src/components/ErrorBoundary';
import Navigation from '../src/components/Navigation';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <PerformanceMonitor />
        <Navigation />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
