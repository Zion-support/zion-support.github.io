import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: any[];
  alternateLanguages?: Array<{ hreflang: string; href: string }>;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  appleTouchIcon?: string;
  favicon?: string;
}

interface AdvancedSEOOptimizerProps extends SEOData {
  children?: React.ReactNode;
  pageType?: 'website' | 'article' | 'product' | 'service' | 'organization';
  publishedTime?: string;
  modifiedTime?: string;
  category?: string;
  tags?: string[];
  autoOptimize?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  children,
  title = "Zion Tech Group - Revolutionary AI, Quantum Computing & Neural Interface Solutions",
  description = "Leading provider of advanced AI consciousness systems, quantum neural networks, and brain-computer interfaces. Transform your business with cutting-edge technology solutions.",
  keywords = [
    "AI consciousness systems",
    "quantum computing",
    "neural interfaces",
    "brain-computer interfaces",
    "artificial intelligence",
    "quantum neural networks",
    "autonomous AI systems",
    "neural prosthetics",
    "cognitive augmentation",
    "quantum cryptography",
    "AI research",
    "technology solutions"
  ],
  author = "Zion Tech Group",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "/images/zion-tech-og-image.jpg",
  ogType = "website",
  ogUrl,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterSite = "@ZionTechGroup",
  twitterCreator = "@ZionTechGroup",
  structuredData = [],
  alternateLanguages = [],
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  viewport = "width=device-width, initial-scale=1.0, viewport-fit=cover",
  themeColor = "#1e40af",
  appleTouchIcon = "/icons/apple-touch-icon.png",
  favicon = "/favicon.ico",
  pageType = "website",
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  autoOptimize = true
}) => {
  const [optimizedSEO, setOptimizedSEO] = useState<SEOData>({});
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (autoOptimize) {
      // Auto-generate optimized SEO data
      const optimized: SEOData = {
        title: title.length > 60 ? title.substring(0, 57) + '...' : title,
        description: description.length > 160 ? description.substring(0, 157) + '...' : description,
        keywords: keywords.slice(0, 15), // Limit to 15 keywords
        ogTitle: ogTitle || title,
        ogDescription: ogDescription || description,
        ogUrl: ogUrl || currentUrl,
        twitterTitle: twitterTitle || title,
        twitterDescription: twitterDescription || description,
        twitterImage: twitterImage || ogImage,
        canonical: canonical || currentUrl,
      };
      setOptimizedSEO(optimized);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl, currentUrl, twitterTitle, twitterDescription, twitterImage, canonical, autoOptimize]);

  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = [
      // Organization Schema
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://zion.app",
        "logo": "https://zion.app/images/zion-logo.png",
        "description": "Revolutionary AI, Quantum Computing & Neural Interface Solutions",
        "foundingDate": "2020",
        "industry": "Technology",
        "numberOfEmployees": "50-100",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US",
          "addressLocality": "Silicon Valley",
          "addressRegion": "CA"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-ZION-TECH",
          "contactType": "customer service",
          "email": "contact@zion.app"
        },
        "sameAs": [
          "https://twitter.com/ZionTechGroup",
          "https://linkedin.com/company/zion-tech-group",
          "https://github.com/Zion-Holdings"
        ]
      },
      // Website Schema
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Zion Tech Group",
        "url": "https://zion.app",
        "description": description,
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://zion.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ];

    // Add page-specific structured data
    if (pageType === 'article') {
      baseStructuredData.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Organization",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://zion.app/images/zion-logo.png"
          }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "image": ogImage,
        "articleSection": category,
        "keywords": keywords.join(', ')
      });
    }

    if (pageType === 'service') {
      baseStructuredData.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": "Technology Solutions",
        "areaServed": "Worldwide"
      });
    }

    return [...baseStructuredData, ...structuredData];
  };

  const finalSEO = autoOptimize ? { ...optimizedSEO } : {
    title,
    description,
    keywords,
    ogTitle: ogTitle || title,
    ogDescription: ogDescription || description,
    ogUrl: ogUrl || currentUrl,
    twitterTitle: twitterTitle || title,
    twitterDescription: twitterDescription || description,
    twitterImage: twitterImage || ogImage,
    canonical: canonical || currentUrl,
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{finalSEO.title}</title>
        <meta name="description" content={finalSEO.description} />
        <meta name="keywords" content={finalSEO.keywords?.join(', ')} />
        <meta name="author" content={author} />
        <meta name="robots" content={robots} />
        <meta name="viewport" content={viewport} />
        <meta name="theme-color" content={themeColor} />
        
        {/* Canonical URL */}
        {finalSEO.canonical && <link rel="canonical" href={finalSEO.canonical} />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={finalSEO.ogTitle} />
        <meta property="og:description" content={finalSEO.ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={finalSEO.ogUrl} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Article specific Open Graph tags */}
        {pageType === 'article' && publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {pageType === 'article' && modifiedTime && (
          <meta property="article:modified_time" content={modifiedTime} />
        )}
        {pageType === 'article' && category && (
          <meta property="article:section" content={category} />
        )}
        {pageType === 'article' && tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={finalSEO.twitterTitle} />
        <meta name="twitter:description" content={finalSEO.twitterDescription} />
        <meta name="twitter:image" content={finalSEO.twitterImage} />
        <meta name="twitter:site" content={twitterSite} />
        <meta name="twitter:creator" content={twitterCreator} />
        
        {/* Icons */}
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        
        {/* Alternate Languages */}
        {alternateLanguages.map((lang, index) => (
          <link key={index} rel="alternate" hrefLang={lang.hreflang} href={lang.href} />
        ))}
        
        {/* Additional Meta Tags for Better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Structured Data */}
        {generateStructuredData().map((data, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(data)}
          </script>
        ))}
        
        {/* Additional Performance and Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Content Security Policy */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" />
        
        {/* Geo Location */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Silicon Valley" />
        
        {/* Business/Industry specific meta tags */}
        <meta name="industry" content="Technology" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* Rich Snippets Support */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
      
      {children}
      
      {/* SEO Debug Info (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ display: 'none' }}>
          <div data-seo-title={finalSEO.title} />
          <div data-seo-description={finalSEO.description} />
          <div data-seo-keywords={finalSEO.keywords?.join(', ')} />
          <div data-seo-canonical={finalSEO.canonical} />
          <div data-seo-og-image={ogImage} />
        </div>
      )}
    </>
  );
};

export default AdvancedSEOOptimizer;