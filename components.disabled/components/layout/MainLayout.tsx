<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';
interface MainLayoutProps  {children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}const MainLayout: React.FC<MainLayoutProps> = ({children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',ogImage = '/og-image.jpg'}) => {return (<>;
      <SEOEnhancer;
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />;
      <PerformanceOptimizer;
        preloadImages={['/hero-bg.jpg', '/services-bg.jpg', '/team-bg.jpg']}
        preloadFonts={[;
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap']}
      />;
      <AccessibilityEnhancer>;
        <div className="min-h-screen flex flex-col">;
          <Header />;
          <main id="main-content" className="flex-grow" role="main">;
            {children}
<<<<<<< HEAD
          </main>
          <Footer />
        </div>
      </AccessibilityEnhancer>
    </>
  );
};

export default MainLayout;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
          </main>;
          <Footer />;
        </div>;
      </AccessibilityEnhancer>;
    </>;
  )}export default MainLayout;
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
