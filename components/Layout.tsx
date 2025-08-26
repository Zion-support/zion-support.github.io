import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PerformanceMonitor from './ui/PerformanceMonitor';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <PerformanceMonitor showMetrics={process.env.NODE_ENV === 'development'} />
    </div>
  );
}
