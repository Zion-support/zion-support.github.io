import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
}

// Backwards compatible prop to support { seoData: { title, description, canonical } }
type SEOOptimizerBackwardProps =
  | SEOOptimizerProps
  | { seoData: { title: string; description: string; canonical?: string } };

const SEOOptimizer: React.FC<SEOOptimizerBackwardProps> = (props) => {
  const isBackward = (p: any): p is { seoData: { title: string; description: string; canonical?: string } } =>
    !!p && typeof p === 'object' && 'seoData' in p;

  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = '/api/placeholder/1200/630',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
    noindex = false
  } = isBackward(props)
    ? {
        title: props.seoData.title,
        description: props.seoData.description,
        keywords: undefined,
        canonicalUrl: props.seoData.canonical,
        ogImage: '/api/placeholder/1200/630',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: undefined,
        noindex: false
      }
    : (props as SEOOptimizerProps);

  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  const defaultKeywords = 'AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation, business automation, data analytics';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Helmet>
  );
};

// Utility function to generate structured data for different page types
export const generateStructuredData = {
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading AI and IT solutions provider specializing in digital transformation, cybersecurity, and business automation.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://ziontechgroup.com/contact"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  }),

  service: (serviceData: any) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "category": serviceData.category,
    "offers": {
      "@type": "Offer",
      "price": serviceData.pricing?.starting,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }),

  article: (articleData: any) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {
      "@type": "Person",
      "name": articleData.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png"
      }
    },
    "datePublished": articleData.publishDate,
    "dateModified": articleData.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ziontechgroup.com${articleData.url}`
    }
  }),

  breadcrumb: (breadcrumbs: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://ziontechgroup.com${crumb.url}`
    }))
  }),

  faq: (faqs: Array<{question: string, answer: string}>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  })
};

export default SEOOptimizer;