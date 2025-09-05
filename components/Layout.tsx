import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Zion Tech Group - AI-Powered IT Solutions",
  description = "Leading provider of AI-powered IT services, micro SaaS solutions, and cutting-edge technology consulting. Transform your business with our innovative approach.",
  keywords = "AI services, IT consulting, micro SaaS, technology solutions, artificial intelligence, business automation",
  canonical,
  ogTitle,
  ogDescription
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = ogDescription || description;
  const fullOgTitle = ogTitle || fullTitle;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content={fullOgTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com" />
        <meta property="twitter:title" content={fullOgTitle} />
        <meta property="twitter:description" content={fullDescription} />
        <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
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
              "description": "Leading provider of AI-powered IT services and micro SaaS solutions",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://twitter.com/ziontechgroup",
                "https://linkedin.com/company/ziontechgroup"
              ]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;