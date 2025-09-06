<<<<<<< HEAD

import React, { ReactNode } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode, title?: string,
=======
interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
>>>>>>> origin/automation-fixes
  description?: string;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  keywords?: string;
<<<<<<< HEAD
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;
=======
  ogImage?: string;
>>>>>>> origin/automation-fixes
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
<<<<<<< HEAD
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website',
  image = '/og-image.jpg',
  url

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}) => {
  return (
    <>
      <Head>

        <title>{title}</title>
        <meta name="description" content={description} />

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}

        
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>

  );

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};

export default MainLayout;
=======
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  ogImage = '/og-image.jpg';
}) => {;
  return (;
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        <meta property="og:image" content={ogImage} />;
        <meta property="og:type" content="website" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
        <meta name="twitter:image" content={ogImage} />;
        <link rel="canonical" href="https://ziontechgroup.com" />;
      </Head>;
      <div className="min-h-screen bg-white">;
        {children}
      </div>;
    </>;
  );
};
export default MainLayout;
>>>>>>> origin/automation-fixes
=======
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
>>>>>>> origin/automation-improvements
