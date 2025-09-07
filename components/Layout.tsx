import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PerformanceMonitor from './PerformanceMonitor';
import Analytics from './Analytics';
import ErrorBoundary from './ErrorBoundary';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Layout({ 
  children, 
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions'
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Analytics />
        <PerformanceMonitor />
        <ErrorBoundary>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </div>
    </>
  );
}