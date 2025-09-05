import * as React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Header from '../Header';
import Footer from '../Footer';
>>>>>>> pr-11914
import Header from '../Header';
import Footer from '../Footer';
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
  title = "Zion Tech Group - Leading Technology Solutions Provider",
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.",
<<<<<<< HEAD
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development",
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical
=======
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development"
}) => {
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
  canonical 
>>>>>>> pr-11914
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
<<<<<<< HEAD
        
        {/* SEO Meta Tags */}
        <meta name="robots" content={noindex ? "noindex" : nofollow ? "nofollow" : "index, follow"} />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
=======
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
>>>>>>> pr-11914
        
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title || 'Zion Tech Group'} />
        <meta property="og:description" content={description || 'Leading technology solutions provider'} />
<<<<<<< HEAD
        <meta property="og:site_name" content="Zion Tech Group" />
=======
>>>>>>> pr-11914
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'Zion Tech Group'} />
        <meta name="twitter:description" content={description || 'Leading technology solutions provider'} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen flex flex-col bg-gray-50">
=======
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      <div className="min-h-screen flex flex-col">
>>>>>>> pr-11914
        <Header />
        <main className="flex-grow">
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
export default MainLayout;
=======
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
>>>>>>> pr-11914
