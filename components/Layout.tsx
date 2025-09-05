import React, { useState } from 'react';
import Head from 'next/head';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',
  keywords = 'AI solutions, cloud services, technology consulting, digital transformation, IT services, machine learning, cybersecurity',
  ogImage = '/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* SEO */}
        <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
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
                "streetAddress": "123 Technology Drive",
                "addressLocality": "Innovation City",
                "addressRegion": "IC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://facebook.com/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://linkedin.com/company/ziontechgroup",
                "https://instagram.com/ziontechgroup",
                "https://github.com/ziontechgroup"
              ]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex-1 flex flex-col lg:ml-80">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}