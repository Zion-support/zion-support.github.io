import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
  children?: React.ReactNode;
}

export const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title,
  description,
  keywords,
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false,
  children,
}) => {
  // Generate canonical URL
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "AI-powered marketplace delivering cutting-edge technology solutions and intelligent automation systems",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-ZION-TECH",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "100+",
    "industry": "Technology",
    "knowsAbout": [
      "Artificial Intelligence",
      "Cloud Computing",
      "Cybersecurity",
      "Data Analytics",
      "Machine Learning",
      "Blockchain",
      "IoT",
      "Quantum Computing"
    ]
  };

  // Merge with provided structured data
  const finalStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;

  // Add breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": canonicalUrl
      }
    ]
  };

  // Add FAQ structured data if children contain FAQ content
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Zion Tech Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zion Tech Group offers comprehensive AI, cloud computing, cybersecurity, data analytics, and automation services to help businesses transform and scale."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with Zion Tech Group?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get started by contacting our team through our website, exploring our services, or scheduling a consultation to discuss your specific needs."
        }
      }
    ]
  };

  // Performance optimization
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: ogImage, as: 'image' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    ];

    preloadLinks.forEach(({ rel, href, as, type, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (as) link.setAttribute('as', as);
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    // Add meta viewport for mobile optimization
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1, shrink-to-fit=no';
      document.head.appendChild(meta);
    }

    // Add theme color meta
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#1e1b4b';
      document.head.appendChild(meta);
    }
  }, [ogImage]);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content={author} />
        <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional Meta Tags */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(finalStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* Security Meta Tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Performance Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Additional Performance Optimizations */}
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
      </Head>
      
      {children}
    </>
  );
};

export default SEOEnhancer;