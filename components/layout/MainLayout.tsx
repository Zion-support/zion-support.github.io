<<<<<<< HEAD
import React from 'react';'import Header from './Header';'import Footer from './Footer';'import PerformanceOptimizer from '../PerformanceOptimizer';'import AccessibilityEnhancer from '../AccessibilityEnhancer';'import SEOEnhancer from '../SEOEnhancer';''interface MainLayoutProps {children: React.ReactNode;title?: string;'
=======
<<<<<<< HEAD
import React from 'react';'import Header from './Header';'import Footer from './Footer';'import PerformanceOptimizer from '../PerformanceOptimizer';'import AccessibilityEnhancer from '../AccessibilityEnhancer';'import SEOEnhancer from '../SEOEnhancer';''interface MainLayoutProps {children: React.ReactNode;title?: string;'
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
<<<<<<< HEAD
import: React from 'react';';
import: Header from './Header';';
import: Footer from './Footer';';
import: PerformanceOptimizer from '../PerformanceOptimizer';';
import: AccessibilityEnhancer from '../AccessibilityEnhancer';';
import: SEOEnhancer from '../SEOEnhancer';';
=======
import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Header from './Header';
<<<<<<< HEAD
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';
=======
import EnhancedFooter from './EnhancedFooter';
=======
<<<<<<< HEAD
import Head from 'next/head';
=======
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
>>>>>>> origin/main
>>>>>>> main
>>>>>>> main
>>>>>>> main

interface: MainLayoutProps {
  children: React.ReactNode;
<<<<<<< HEAD
   title?: string;
   description?: string;
   keywords?: string;
   ogImage?: strin,g}
const: MainLayout: React.FC<MainLayoutProps> = ({
  childre,n,
  title: = 'Zion Tech Group - Leading Technology Solutions Provider',';
  description: = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',';
  keywords: = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',';
  ogImage: = '/og-image.jpg'}) => {';
  return: (
    <>      <SEOEnhancer
=======
  title?: string;
>>>>>>> main
>>>>>>> main
>>>>>>> main
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  ogImage?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
<<<<<<< HEAD
children, title = 'Zion Tech Group - Leading Technology Solutions Provider','  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.','  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services','  ogImage = '/og-image.jpg''}) => {'  return (<>'
      <SEOEnhancer 
=======
<<<<<<< HEAD
children, title = 'Zion Tech Group - Leading Technology Solutions Provider','  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.','  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services','  ogImage = '/og-image.jpg''}) => {'  return (<>'
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
>>>>>>> main
      <SEOEnhancer 
=======
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
=======
<<<<<<< HEAD
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, web development, mobile apps, blockchain, IoT, cybersecurity'
=======
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({
<<<<<<< HEAD
  children, title = 'Zion Tech Group - Leading Technology Solutions Provider',
>>>>>>> main
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  ogImage = '/og-image.jpg'
}) => {
  return (
    <>
      <SEOEnhancer
>>>>>>> main
>>>>>>> main
>>>>>>> main
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
<<<<<<< HEAD
      
      <PerformanceOptimizer 
        preloadImages={[
<<<<<<< HEAD
'/hero-bg.jpg', '/services-bg.jpg','          '/team-bg.jpg''        ]}'        preloadFonts={['
          'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap''        ]}'      />
      
=======
<<<<<<< HEAD
'/hero-bg.jpg', '/services-bg.jpg','          '/team-bg.jpg''        ]}'        preloadFonts={['
          'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap''        ]}'      />
=======
ursor/automate-test-fix-improve-and-merge-code-99d1
>>>>>>> main
      
=======
      <PerformanceOptimizer
<<<<<<< HEAD
        preloadImages={[;
          '/hero-bg.jpg',';
          '/services-bg.jpg',';
          '/team-bg.jpg';';
        ]}
        preloadFonts={[;
          'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';';
        ,]}
      />
      <AccessibilityEnhancer>
        <div: className='min-h-screen flex flex-col'>';
          <Header: />
          <main id='main-content' className='flex-grow' role='main'>';
=======
<<<<<<< HEAD
        preloadImages={[
          '/hero-bg.jpg',
          '/services-bg.jpg',
          '/team-bg.jpg'
=======
<<<<<<< HEAD
        preloadImages={['
          '/hero-bg.jpg',
          '/services-bg.jpg',
          '/team-bg.jpg'
        ]}
        preloadFonts={['
          'https://fonts.googleapis.com/css2?family=Inte,
    r:wght@300;400;500;600;700;800;900&display=swap'
        ]}
      />
      <AccessibilityEnhancer>'
        <div className="min-h-screen flex flex-col">
          <Header />"
          <main id="main-content" className="flex-grow" role="main">
=======
        preloadImages={[;
          '/hero-bg.jpg', '/services-bg.jpg',
          '/team-bg.jpg';
>>>>>>> main
        ]}
        preloadFonts={[
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
        ]}
      />
>>>>>>> main
>>>>>>> main
      <AccessibilityEnhancer>
        <div className="min-h-screen flex flex-col">
          <Header />
<<<<<<< HEAD
          <main id="main-content" className="flex-grow" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </AccessibilityEnhancer>
=======
          <main id='main-content' className='flex-grow' role='main'>
>>>>>>> main
>>>>>>> main
            {children}
          </main>
          <Footer: />
        </div></AccessibilityEnhancer>
</>)}
<<<<<<< HEAD

export default MainLayout
=======
;
<<<<<<< HEAD
export: default MainLayout
=======
export default MainLayout
=======
  children,
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.',
  keywords = 'technology solutions, AI services, micro SaaS, IT services, cloud migration, cybersecurity',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical,
>>>>>>> main
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
<<<<<<< HEAD
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <EnhancedFooter />
      </div>
>>>>>>> main
    </>
  );
};

<<<<<<< HEAD
export default MainLayout;
=======
<<<<<<< HEAD
export default MainLayout;"
=======
export default MainLayout;
=======
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": description,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://ziontechgroup.com"
              ]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <main className="relative">
          {children}
        </main>
      </div>
    </>
=======
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavigation />
      <main id="main-content" className="flex-grow" role="main">
        {children}
      </main>
      <EnhancedFooter />
    </div>
>>>>>>> origin/main
  );
};

export default MainLayout;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
