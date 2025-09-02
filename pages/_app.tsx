import React from 'react';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { PerformanceMonitor } from '../src/components/PerformanceMonitor';
import '../src/index.css';

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
