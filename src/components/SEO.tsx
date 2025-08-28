import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean;
  noFollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function SEO({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl,
  structuredData,
  twitterCard = 'summary_large_image',
  noIndex = false,
  noFollow = false,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (canonicalUrl) {
      canonical.setAttribute('href', canonicalUrl);
    }
    
    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, canonicalUrl, structuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {author && <meta property="og:author" content={author} />}
      {publishedTime && <meta property="og:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="og:modified_time" content={modifiedTime} />}
      {section && <meta property="og:section" content={section} />}
      {tags.length > 0 && <meta property="og:tag" content={tags.join(', ')} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Predefined structured data schemas
export const structuredDataSchemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading AI & Technology Solutions Provider specializing in artificial intelligence, quantum computing, and digital transformation",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo512.png",
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://www.facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94025",
      "addressCountry": "US"
    }
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "description": "Leading AI & Technology Solutions",
    "url": "https://ziontechgroup.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  
  service: (serviceName: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "areaServed": "Worldwide",
    "serviceType": "Technology Solutions"
  }),
  
  article: (title: string, description: string, author: string, publishedTime: string, modifiedTime?: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo512.png"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  }),
  
  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),
  
  faq: (questions: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  }),
  
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zion Tech Group",
    "description": "Leading AI & Technology Solutions Provider",
    "url": "https://ziontechgroup.com",
    "telephone": "+1-555-123-4567",
    "email": "contact@ziontechgroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94025",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.4419",
      "longitude": "-122.1430"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  }
};

// Utility function to generate meta tags for different page types
export const generateMetaTags = {
  home: () => ({
    title: "Zion Tech Group - Leading AI & Technology Solutions",
    description: "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Expert IT consulting and digital transformation.",
    keywords: "AI solutions, quantum computing, digital transformation, IT consulting, micro SAAS, technology services",
    structuredData: structuredDataSchemas.organization
  }),
  
  services: () => ({
    title: "Our Services - Zion Tech Group",
    description: "Comprehensive technology services including AI solutions, quantum computing, IT consulting, and digital transformation. Expert guidance for modern businesses.",
    keywords: "AI services, quantum computing services, IT consulting, digital transformation, technology solutions",
    structuredData: structuredDataSchemas.website
  }),
  
  about: () => ({
    title: "About Zion Tech Group - Our Mission & Vision",
    description: "Learn about Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and innovative solutions. Discover our story and expertise.",
    keywords: "about Zion Tech Group, company mission, technology expertise, AI innovation, quantum computing",
    structuredData: structuredDataSchemas.organization
  }),
  
  contact: () => ({
    title: "Contact Zion Tech Group - Get in Touch",
    description: "Contact Zion Tech Group for expert technology solutions, AI consulting, and digital transformation services. Reach out to our team of experts.",
    keywords: "contact Zion Tech Group, technology consulting, AI services, get quote, support",
    structuredData: structuredDataSchemas.localBusiness
  }),
  
  blog: () => ({
    title: "Blog - Zion Tech Group Insights & Updates",
    description: "Stay updated with the latest insights in AI, quantum computing, and technology trends. Expert analysis and industry updates from Zion Tech Group.",
    keywords: "technology blog, AI insights, quantum computing news, tech trends, industry updates",
    structuredData: structuredDataSchemas.website
  })
};
