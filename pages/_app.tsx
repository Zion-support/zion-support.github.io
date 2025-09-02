import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceMonitor from '../src/components/PerformanceMonitor';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PerformanceMonitor />
      <Navigation />
      <main className="flex-grow pt-16">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
