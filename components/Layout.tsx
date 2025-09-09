import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PerformanceMonitor from './ui/PerformanceMonitor';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <PerformanceMonitor showMetrics={process.env.NODE_ENV === 'development'} />
    </div>
  );
}