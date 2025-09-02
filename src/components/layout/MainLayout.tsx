import React from 'react';
import Head from 'next/head';
import { EnhancedHeader } from '../EnhancedHeader';
import EnhancedFooter from '../EnhancedFooter';

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
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations for businesses worldwide.',
  keywords = 'technology solutions, AI services, IT services, software development, cloud migration, cybersecurity',
  image = '/api/placeholder/1200/630',
  url = 'https://ziontechgroup.com',
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || url;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://facebook.com/ziontechgroup"
              ]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <EnhancedHeader />
        <main className="flex-1">
          {children}
        </main>
        <EnhancedFooter />
      </div>
    </>
  );
};

export default MainLayout;