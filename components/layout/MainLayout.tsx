<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/main
import React from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD


;
}

const MainLayout: React.FC<MainLayoutProps /> = ({ children,title,description,keywords,image,url,type = 'website',noindex = false,nofollow = false,canonical;}
   }) => {

return (<>;}
      <Head />;}
        <title />{title || 'Zion Tech Group'}</title>;
        <meta name=\"description\" content={description || 'Leading technology solutions provider'} />;"
        {keywords && <meta name=\"keywords\" content={keywords} />}
=======
import React from 'react';
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import Layout from './Layout';

import React, { ReactNode } from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import Head from 'next/head';
import Header from '../Header';
import Footer from './Footer';

interface MainLayoutProps {
<<<<<<< HEAD
  title: string,
  description: string,
  children: React.ReactNode,
=======
<<<<<<< HEAD
  title: string;
  description: string;
  children: React.ReactNode;
>>>>>>> origin/main
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({
  children;
  title = "Zion Tech Group - Leading Technology Solutions Provider";
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.";
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development";
  image;
  url;
  type = 'website';
  noindex = false;
  nofollow = false;
  canonical;
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
=======
export default function MainLayout({ 
  title, 
  description, 
  children, 
  keywords = "AI solutions, IT services, micro SaaS, technology consulting",
  canonical 
}: MainLayoutProps) {

=======
  children: ReactNode, title?: string,  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;}
const MainLayout: React.FC<MainLayoutProps> = ({

  children
  title = 'Zion Tech Group - Technology Solutions'
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.'
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions'
  canonical
  noindex = false
  nofollow = false
  type = 'website'
  image = '/og-image.jpg'
  url
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
  children,
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website',
  image = '/og - image.jpg',
  url;
  return (



        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
        {image && <meta name="twitter:image" content={image} />}
  ogImage = '/og-image.jpg';
}) => {return (;
const MainLayout: React.FC<MainLayoutProps> = ({;
  children,;
  title = 'Zion Tech Group - Technology Solutions',;
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',;
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',;
  canonical,;
  noindex = false,;
  nofollow = false,;
  type = 'website',;
  image = '/og-image && image.jpg',;
  url;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon && favicon.ico" />;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        <meta property="og:type" content={type} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
        {image && <meta name="twitter:image" content={image} />}
<<<<<<< HEAD
      </Head>;
        <Header />;
        <main className="flex-1">;
=======
      </Head>
        <Header />
        <main className="flex-1">
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          {children}
        </main>;
        <Footer />;
      </div>;
    </>;
  );
<<<<<<< HEAD
export default MainLayout;
      </Head>;
        <Header />;
        <main className="flex - 1">;
          {children}
        </main>;
        <Footer />;
      </div>;
</>);
;
export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  og_image = '/og - image.jpg';
}) => {
  return (
=======
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}

        {/* Open Graph */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>

  );

};

<<<<<<< HEAD
export default MainLayout;"
=======
{keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        {/* Open Graph */}
        <meta property="og: type" content={type} />
        <meta property="og: title" content={title || 'Zion Tech Group'} />
        <meta property="og: description" content={description || 'Leading technology solutions provider'} />
        {image && <meta property="og: image" content={image} />}
        {url && <meta property="og: url" content={url} />}
        {/* Twitter */}
        <meta name="twitter: card" content="summary_large_image" />
        <meta name="twitter: title" content={title || 'Zion Tech Group'} />
        <meta name="twitter: description" content={description || 'Leading technology solutions provider'} />
        {image && <meta name="twitter: image" content={image} />}
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider'
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services'
  ogImage = '/og-image.jpg';
}) => {return (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
<<<<<<< HEAD
        <meta property="og:image" content={og_image} />;
=======
        <meta property="og:image" content={ogImage} />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        <meta property="og:type" content="website" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
<<<<<<< HEAD
      </Head>;
      <div className="min - h-screen bg - white">;
        {children}
      </div>;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg'}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg']} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
    </>);
}
export default MainLayout;


        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
>>>>>>> origin/main
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title || 'Zion Tech Group'} />
        <meta property="og:description" content={description || 'Leading technology solutions provider'} />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'Zion Tech Group'} />
        <meta name="twitter:description" content={description || 'Leading technology solutions provider'} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
=======
      

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <SEOHead title={title} description={description} />


      <div className="min-h-screen flex flex-col">
>>>>>>> origin/main
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

<<<<<<< HEAD
export default MainLayout;
=======
        {keywords && <meta name="keywords" content={keywords} />};
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon.ico" />;
        {canonical && <link rel="canonical" href={canonical} />};
        {noindex && <meta name="robots" content="noindex" />};
        {nofollow && <meta name="robots" content="nofollow" />};
        {/* Open Graph */};
        <meta property="og: type" content={type,} />;
        <meta property="og: title" content={title || 'Zion Tech Group',} />;
        <meta property="og: description" content={description || 'Leading technology solutions provider',} />;
        {image && <meta property="og: image" content={image,} />};
        {url && <meta property="og: url" content={url,} />};
        {/* Twitter */};
        <meta name="twitter: card" content="summary_large_image" />;
        <meta name="twitter: title" content={title || 'Zion Tech Group',} />;
        <meta name="twitter: description" content={description || 'Leading technology solutions provider',} />;
        {image && <meta name="twitter: image" content={image,} />};
      </Head>;
      <div className=" min-h-screenbg-gray-50">;
        <Header />;
        <main className=" flex-1">;
          {children};
>>>>>>> origin/merge-automation-changes
=======
}

=======
        <meta name="twitter:image" content={ogImage} />;
        <link rel="canonical" href="https://ziontechgroup.com" />;
      </Head>;
      <div className="min-h-screen bg-white">;
        {children}
      </div>;
    </>;
  );
}
export default MainLayout;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
