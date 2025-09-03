<<<<<<< HEAD
import React, { useEffect } from 'react';
import '../src/index.css';
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
  );
}
