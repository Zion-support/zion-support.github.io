import React, { useEffect } from 'react';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
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
  );
}
