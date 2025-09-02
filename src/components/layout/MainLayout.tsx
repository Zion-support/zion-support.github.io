import React from 'react';
import Head from 'next/head';
import ModernNavigation from '../navigation/ModernNavigation';
import { EnhancedFooter } from './EnhancedFooter';

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
  title = 'Zion Tech Group', 
  description = 'Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.',
  keywords = 'AI, technology, cybersecurity, cloud, digital transformation',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
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
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical || url} />
        
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* SEO */}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        {noindex && nofollow && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <ModernNavigation />
        <main className="pt-16">
          {children}
        </main>
        <EnhancedFooter />
      </div>
    </>
  );
};

export default MainLayout;