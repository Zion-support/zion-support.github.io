import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEOHead from '../seo/SEOHead';
import AccessibilityEnhancer from '../accessibility/AccessibilityEnhancer';
import PerformanceMonitor from '../performance/PerformanceMonitor';
import ErrorBoundary from '../error/ErrorBoundary';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: object;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  ogImage = '/og-image.svg',
  canonical,
  noindex = false,
  structuredData
}) => {
  return (
    <AccessibilityEnhancer>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogImage={ogImage}
        noindex={noindex}
        structuredData={structuredData}
      />
      
      <PerformanceMonitor />
      
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow" role="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </AccessibilityEnhancer>
  );
};

export default MainLayout;