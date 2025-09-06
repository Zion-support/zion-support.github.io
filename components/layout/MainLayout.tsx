<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Layout from './Layout';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import Layout from './Layout';
=======
=======
import React from 'react';
import Layout from './Layout';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import React, { ReactNode } from 'react';
=======
import React from 'react';
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
import Head from 'next/head';
import Header from '../Header';
import Footer from './Footer';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
=======
import Layout from './Layout';
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React from 'react';
import Layout from './Layout';


>>>>>>> origin/automation-improvements-final

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface MainLayoutProps {
=======
interface MainLayoutProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  children: ReactNode, title?: string,  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;}

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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





  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

const MainLayout: React.FC < MainLayoutProps> = ({
=======
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
</>
  );

}
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
const MainLayout: React.FC<MainLayoutProps> = ({

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

  title = 'Zion Tech Group - Leading Technology Solutions Provider'
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services'

=======
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
<<<<<<< HEAD

<<<<<<< HEAD
        {keywords && <meta name="keywords" content={keywords} />}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
<<<<<<< HEAD
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
      <div className="min-h-screen bg-gray-50">
=======


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
      </Head>
<<<<<<< HEAD
      

<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
<<<<<<< HEAD
    </>
<<<<<<< HEAD
=======
  );
};

export default MainLayout;
=======
</>
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20

=======
</>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );

export default MainLayout;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  og_image = '/og - image.jpg';
}) => {
  return (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        <meta property="og:image" content={og_image} />;
        <meta property="og:type" content="website" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;

        <meta name="twitter:image" content={og_image} />;
        <link rel="canonical" href="https://ziontechgroup.com" />;

      </Head>;
      <div className="min - h-screen bg - white">;
        {children}
      </div>;
    </>;
  );
}
export default MainLayout;
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/main
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
