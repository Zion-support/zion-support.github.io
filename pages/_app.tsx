import type { AppProps } from 'next/app';
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

// Header component is now replaced by Navigation component

// Footer component is now replaced by Footer component

export default function App({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Navigation />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
}
