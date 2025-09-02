import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import SEOOptimizer from '../SEOOptimizer';
import PerformanceEnhancer from '../PerformanceEnhancer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import AnalyticsManager from '../AnalyticsManager';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';

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
    <EnhancedErrorBoundary>
      <SEOOptimizer
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      
      <AnalyticsManager />
      <PerformanceEnhancer />
      <AccessibilityEnhancer />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </EnhancedErrorBoundary>
  );
};

export default MainLayout;