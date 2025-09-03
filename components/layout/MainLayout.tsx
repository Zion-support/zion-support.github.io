<<<<<<< HEAD
import React from 'react;
import Header from './Header;
import Footer from './Footer;
import PerformanceOptimizer from '../PerformanceOptimizer;
import AccessibilityEnhancer from '../AccessibilityEnhancer;
import SEOEnhancer from '../SEOEnhancer;
=======
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
=======
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
>>>>>>> origin/main
>>>>>>> main

interface MainLayoutProps {children: React.ReactNode;title?: string;
  description?: string;
  keywords?: string;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({
<<<<<<< HEAD
children, title = 'Zion Tech Group - Leading Technology Solutions Provider','  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.','  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services','  ogImage = '/og-image.jpg
}) => {'  return (<>
      <SEOEnhancer 
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      
      <PerformanceOptimizer 
        preloadImages={[
'/hero-bg.jpg', '/services-bg.jpg','          '/team-bg.jpg
        ]}'        preloadFonts={[
          'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap
        ]}'      />
      
      <AccessibilityEnhancer>
<div className="min-h-screen flex flex-col>          <Header />"          <main id="main-content" className="flex-grow role=main">"            {children}"          </main>
          <Footer />
        </div></AccessibilityEnhancer>
</>);

};
=======
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Transform your business with our AI services, micro SaaS solutions, and IT infrastructure.',
  keywords = 'AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
=======
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
=======
import React from "react"
interface MainLayoutProps {;
>>>>>>> main

  children: React.ReactNode,
  title?: string,,
  description?: string,
  keywords?: string,
const MainLayout: React.FC<MainLayoutProps> = ({ children,"
  title = "Zion Tech Group","
  description = "Leading technology solutions and AI services","
  keywords = "technology, AI, software development, consulting"
}) => {
>>>>>>> main
  return (
    <div className="min-h-screen flex flex-col">"
      <SEOEnhancer title="{title}" description="{description}" keywords="{keywords}"  />
      <PerformanceOptimizer  />
      <AccessibilityEnhancer  />
      <Header  />"
      <main className="flex-grow">
        {children}
<<<<<<< HEAD
      </main>
      <EnhancedFooter />
    </div>
>>>>>>> origin/main
  );
};
=======
>>>>>>> main

      </main>
      <Footer  />
    </div>
  )
}
""export default MainLayout