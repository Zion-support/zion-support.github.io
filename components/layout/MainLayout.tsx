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
  title = 'Zion Tech Group', 
  description = 'Leading technology solutions and AI services',
  keywords = 'technology, AI, software development, consulting'
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOEnhancer 
        title={title}
        description={description}
        keywords={keywords}
      />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;