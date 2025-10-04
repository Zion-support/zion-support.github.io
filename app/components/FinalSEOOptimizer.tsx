import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FinalSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  robots?: string;
  language?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  breadcrumbs?: Array<{name: string, url: string}>;
  faqData?: Array<{question: string, answer: string}>;
  localBusiness?: boolean;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
    hours?: string;
  };
  performanceOptimizations?: {
    preload?: string[];
    prefetch?: string[];
    dnsPrefetch?: string[];
  };
  accessibility?: {
    skipLinks?: boolean;
    ariaLabels?: boolean;
    keyboardNavigation?: boolean;
  };
}

const FinalSEOOptimizer: React.FC<FinalSEOProps> = ({
  title = "Zion Tech Group - AI-Powered Business Solutions",
  description = "Transform your business with cutting-edge AI micro SaaS services, cloud automation, and enterprise IT solutions. Contact us at +1 302 464 0950.",
  keywords = "AI solutions, micro SaaS, cloud automation, enterprise IT, business transformation, artificial intelligence, machine learning, automation, digital transformation",
  canonical = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  robots = "index, follow",
  language = "en-US",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  breadcrumbs = [],
  faqData = [],
  localBusiness = true,
  contactInfo = {
    phone: "+1-302-464-0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown, DE 19709",
    hours: "Mon-Fri 9AM-6PM EST"
  },
  performanceOptimizations = {
    preload: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'],
    prefetch: ['https://www.google-analytics.com'],
    dnsPrefetch: ['//fonts.googleapis.com', '//www.google-analytics.com']
  },
  accessibility = {
    skipLinks: true,
    ariaLabels: true,
    keyboardNavigation: true
  }
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactInfo.phone,
      "contactType": "customer service",
      "email": contactInfo.email,
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
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI-powered business solutions and automation services",
      "category": "Technology Services"
    }
  };

  // Add FAQ structured data if provided
  const faqStructuredData = faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Add breadcrumb structured data if provided
  const breadcrumbStructuredData = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="language" content={language} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Local Business SEO */}
      {localBusiness && (
        <>
          <meta name="geo.region" content="US-DE" />
          <meta name="geo.placename" content="Middletown" />
          <meta name="geo.position" content="39.4496;-75.7163" />
          <meta name="ICBM" content="39.4496, -75.7163" />
        </>
      )}
      
      {/* Performance Optimizations */}
      {performanceOptimizations.preload?.map((url, index) => (
        <link key={index} rel="preload" href={url} as="style" />
      ))}
      {performanceOptimizations.prefetch?.map((url, index) => (
        <link key={index} rel="prefetch" href={url} />
      ))}
      {performanceOptimizations.dnsPrefetch?.map((url, index) => (
        <link key={index} rel="dns-prefetch" href={url} />
      ))}
      
      {/* Accessibility */}
      {accessibility.skipLinks && (
        <style>
          {`.skip-link { position: absolute; top: -40px; left: 6px; background: #000; color: #fff; padding: 8px; text-decoration: none; z-index: 1000; } .skip-link:focus { top: 6px; }`}
        </style>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {faqStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      )}
      
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default FinalSEOOptimizer;