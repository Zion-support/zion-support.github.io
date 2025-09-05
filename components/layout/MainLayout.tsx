<<<<<<< HEAD
import React from 'react';';
import Head from 'next/head';';
import Header from './Header';';
import Footer from './Footer';';
import PerformanceOptimizer from '../PerformanceOptimizer';';
import AccessibilityEnhancer from '../AccessibilityEnhancer';';
import SEOEnhancer from '../SEOEnhancer';';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
const React from "react";"const Head from "next/head";interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string;} children, title = "Zion Tech Group", " description = "Leading technology solutions provider"," keywords = "technology, AI, cloud, micro SaaS"}: MainLayoutProps) { return ( <> <Head> <title>{title}</title>" <meta name="description" content={description} />" <meta name="keywords" content={keywords} />" <meta name="viewport" content="width=device-width, initial-scale=1" />" <link rel="icon" href="/favicon.ico" /> </Head> {children} </> );}"""
=======
>>>>>>> main
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Header from '../Header';
import Footer from '../Footer';
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main

interface MainLayoutProps {;
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  ogImage?: string;,
}
const MainLayout: React.FC<MainLayoutProps> = ({;
  children,;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',';
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',';
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',';
  ogImage = '/og-image.jpg',';,
}) => {;
  return (;
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />";
        <meta name="keywords" content={keywords} />";

        <meta property="og:title" content={title} />";
        <meta property="og:description" content={description} />";
        <meta property="og:image" content={ogImage} />";
        <meta name="viewport" content="width=device-width, initial-scale=1" />";
      </Head>;
      <SEOEnhancer;
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
       />;
      <PerformanceOptimizer;
        preloadImages={[;
          '/hero-bg.jpg',';
          '/services-bg.jpg',';
          '/team-bg.jpg',';,
]}
        preloadFonts={[;
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',';,
]}
      />;
      <AccessibilityEnhancer>;
        <div className='min-h-screen flex flex-col'>';
          <Header />;
          <main id='main-content' className='flex-grow' role='main'>';
            {children}
          </main>;
          <Footer />;
        </div>;
      </AccessibilityEnhancer>;
    </>;
  );,
=======
}

<<<<<<< HEAD
export default function MainLayout({ 
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function MainLayout({
>>>>>>> main
  children, 
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: MainLayoutProps) {
=======
>>>>>>> main
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: MainLayoutProps) => {
>>>>>>> main
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
>>>>>>> main
};
;
export default MainLayout;
>>>>>>> main
