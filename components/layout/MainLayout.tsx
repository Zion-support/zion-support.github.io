<<<<<<< HEAD
import React from
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
=======
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PerformanceOptimizer from '../PerformanceOptimizer'
import AccessibilityEnhancer from '../AccessibilityEnhancer'
import SEOEnhancer from '../SEOEnhancer';
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({
<<<<<<< HEAD
  children, 
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  ogImage = '/og-image.jpg'
}) => {
  return (<>
=======
children, title = 'Zion Tech Group - Leading Technology Solutions Provider','  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.','  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services','  ogImage = '/og-image.jpg''}) => {'  return (<>'
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
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
  '          '/team-bg.jpg'
  '        ]}'        preloadFonts={[
  'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'        ]}'      />
=======
'/hero-bg.jpg/services-bg.jpg          '/team-bg.jpg''        ]}'        preloadFonts={['
          'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800900&display=swap''        ]}'      />
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
      
      <AccessibilityEnhancer>
<div className="min-h-screen flex flex-col">"          <Header />"          <main id="main-content" className="flex-grow" role="main">"            {children}"          </main>
          <Footer />
        </div></AccessibilityEnhancer>
</>);
};

export default MainLayout;