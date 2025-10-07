import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';

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
    <>
      <SEOEnhancer 
        title={title} 
        description={description} 
        keywords={keywords} 
        ogImage={ogImage} 
      />
      <AccessibilityEnhancer>
        <div className="text-left">
          <Header />
          <main id="main-content" className="text-left" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </AccessibilityEnhancer>
    </>
  );
};

export default MainLayout;