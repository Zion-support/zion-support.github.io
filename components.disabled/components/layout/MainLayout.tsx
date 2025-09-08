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
  ogImage?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  ogImage = '/og-image.jpg',
}) => {
  return (
    <>
      <SEOEnhancer
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      <PerformanceOptimizer
        preloadImages={['/hero-bg.jpg', '/services-bg.jpg', '/team-bg.jpg']}
        preloadFonts={[
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
        ]}
      />
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


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
