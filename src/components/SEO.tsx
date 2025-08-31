import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Innovation • Technology • Growth',
  description = 'Leading provider of innovative AI-powered business solutions, IT services, and micro SaaS platforms. Transform your business with cutting-edge technology including AI, Quantum Computing, Cybersecurity, and Digital Transformation.',
  keywords = 'AI services, IT solutions, cybersecurity, quantum computing, digital transformation, micro SaaS, business automation, enterprise solutions, healthcare technology, financial technology, manufacturing technology',
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup'
}) => {
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "alternateName": "Zion Tech",
    "description": "Leading provider of innovative AI-powered business solutions, IT services, and micro SaaS platforms.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo512.png",
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "serviceType": [
      "AI Services",
      "IT Solutions", 
      "Cybersecurity",
      "Quantum Computing",
      "Digital Transformation",
      "Micro SaaS Platforms"
    ],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Enterprise Automation Platform",
            "description": "Comprehensive AI-powered business automation solutions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "AI Cybersecurity Platform",
            "description": "Advanced AI-driven cybersecurity solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "AI Healthcare Platform",
            "description": "AI-powered healthcare analytics and solutions"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* PWA Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      
      {/* Article Meta Tags (if applicable) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo180.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/logo152.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/logo144.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/logo120.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/logo114.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/logo76.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/logo72.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/logo60.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/logo57.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* DNS Prefetch and Preconnect */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Business Information */}
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Verification Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="AI-Powered Business Solutions & Quantum Computing | Zion Tech Group"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity."
      keywords="AI business solutions, quantum computing, autonomous operations, digital transformation, IT services, cybersecurity, machine learning, neural networks"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Zion Tech Group - AI-Powered Business Solutions",
        "description": "Leading provider of AI-powered business solutions, quantum computing, and innovative IT services for digital transformation.",
        "url": "https://ziontechgroup.com",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "AI-powered business solutions and quantum computing services"
        }
      }}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Technology Services",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": "AI Solutions, Quantum Computing, IT Services",
        "description": "Comprehensive technology services including AI, quantum computing, and IT infrastructure"
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions"
      description="Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation."
      keywords="contact Zion Tech Group, AI consulting, quantum computing consulting, IT consulting, digital transformation consulting"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Zion Tech Group",
        "description": "Get in touch with Zion Tech Group for technology consulting and solutions",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          }
        }
      }}
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  author, 
  publishedDate, 
  image, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}) {
  return (
    <SEO
      title={title}
      description={description}
      author={author}
      canonical={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
      ogImage={image}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
          }
        },
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ziontechgroup.com/blog/${slug}`
        }
      }}
    />
  );
}
