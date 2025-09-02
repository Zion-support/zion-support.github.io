import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import SEOEnhancer from '../SEOEnhancer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import ErrorBoundary from '../ErrorBoundary';
import PerformanceMonitor from '../PerformanceMonitor';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  ogImage = '/og-image.jpg'
}) => {
  return (
    <ErrorBoundary>
      <PerformanceOptimizer />
      <SEOEnhancer 
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <AccessibilityEnhancer />
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );
};

export default MainLayout;