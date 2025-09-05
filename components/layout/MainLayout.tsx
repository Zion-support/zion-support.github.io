import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
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
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.',
  keywords = 'technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development',
  image, 
  url, 
  type = 'website', 
  noindex = false, 
  nofollow = false, 
  canonical 
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        
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
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;