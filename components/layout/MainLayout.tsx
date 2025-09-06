
import React, { ReactNode } from 'react';
import React from 'react';

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
import Layout from './Layout';

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

import React from 'react';
import Layout from './Layout';
import React from 'react';
import Layout from './Layout';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final

interface MainLayoutProps {
interface MainLayoutProps {;
  children: ReactNode, title?: string,  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;}

export default function MainLayout({ title, description, children, keywords, canonical }: MainLayoutProps) {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>
  );
}
origin/automation-improvements-final
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

ursor/integrate-build-improve-and-re-verify-8f7d
export default function MainLayout({ title, description, children, keywords, canonical }: MainLayoutProps) {
origin/main
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
}
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

    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
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

        <meta name="twitter:image" content={og_image} />;
        <link rel="canonical" href="https://ziontechgroup.com" />;

      </Head>;
      <div className="min - h-screen bg - white">;
        {children}
      </div>;




import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
    </>);
}
export default MainLayout;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
