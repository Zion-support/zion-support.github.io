import React from 'react';
<<<<<<< HEAD
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';
=======
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
>>>>>>> origin/merge-pr-10614

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}
<<<<<<< HEAD
=======

>>>>>>> origin/merge-pr-10614
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
<<<<<<< HEAD
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
        preloadImages={[
          '/hero-bg.jpg',
          '/services-bg.jpg',
          '/team-bg.jpg',
        ]}
        preloadFonts={[
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
        ]}
      />
      <AccessibilityEnhancer>
        <div className='min-h-screen flex flex-col'>
          <Header  />
          <main id='main-content' className='flex-grow' role='main'>
            {children}
          </main>
          <Footer  />
        </div>
      </AccessibilityEnhancer>
    </>
  )
}

export default MainLayout
=======
  keywords = 'technology solutions, AI development, cloud architecture, web development, mobile apps, blockchain, IoT, cybersecurity',
  ogImage = '/og-image.jpg'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
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
>>>>>>> origin/merge-pr-10614
