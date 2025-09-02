import React from 'react';
<<<<<<< HEAD
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';
=======
  'react';
import Header from
  './Header';
import Footer from
  './Footer';
import PerformanceOptimizer from
  '../PerformanceOptimizer';
import AccessibilityEnhancer from
  '../AccessibilityEnhancer';
import SEOEnhancer from
  '../SEOEnhancer';
>>>>>>> origin/main

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
<<<<<<< HEAD
  return (
    <>
=======
  return (<>
>>>>>>> origin/main
      <SEOEnhancer 
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      
      <PerformanceOptimizer 
        preloadImages={[
<<<<<<< HEAD
          '/hero-bg.jpg', 
          '/services-bg.jpg',
          '/team-bg.jpg'
        ]}
        preloadFonts={[
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
        ]}
      />
=======
  '/hero-bg.jpg',
  '/services-bg.jpg',
  '          '/team-bg.jpg'
  '        ]}'        preloadFonts={[
  'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'        ]}'      />
>>>>>>> origin/main
      
      <AccessibilityEnhancer>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </AccessibilityEnhancer>
    </>
  );
};

export default MainLayout;