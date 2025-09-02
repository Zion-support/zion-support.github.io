import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud architecture, and innovative development services.',
  keywords = 'AI solutions, cloud architecture, DevOps, cybersecurity, digital transformation'
}) => {
  return (
    <>
      <SEOEnhancer
        title={title}
        description={description}
        keywords={keywords}
      />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;