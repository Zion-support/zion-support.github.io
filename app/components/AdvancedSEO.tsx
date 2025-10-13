import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqData?: Array<{ question: string; answer: string }>;
  articleData?: {
    author: string;
    publishedTime: string;
    modifiedTime: string;
    section: string;
    tags: string[];
  };
  productData?: {
    name: string;
    description: string;
    price: string;
    currency: string;
    availability: string;
    brand: string;
    category: string;
    images: string[];
  };
  organizationData?: {
    name: string;
    url: string;
    logo: string;
    description: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    contactPoint: {
      telephone: string;
      contactType: string;
      email: string;
    };
    sameAs: string[];
  };
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  breadcrumbs = [],
  faqData = [],
  articleData,
  productData,
  organizationData,
}) => {
  const finalCanonical = useMemo(() => {
    if (canonical) return canonical;
    return `https://ziontechgroup.com${window.location.pathname}`;
  }, [canonical]);

  // Enhanced structured data
  const enhancedStructuredData = useMemo(() => {
    const baseData = {
      "@context": "https://schema.org",
      "@graph": [
        // Organization data
        {
          "@type": "Organization",
          "@id": "https://ziontechgroup.com/#organization",
          "name": organizationData?.name || "Zion Tech Group",
          "url": organizationData?.url || "https://ziontechgroup.com",
          "logo": {
            "@type": "ImageObject",
            "url": organizationData?.logo || "https://ziontechgroup.com/logo.png",
            "width": 512,
            "height": 512
          },
          "description": organizationData?.description || "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
          "address": organizationData?.address ? {
            "@type": "PostalAddress",
            "streetAddress": organizationData.address.street,
            "addressLocality": organizationData.address.city,
            "addressRegion": organizationData.address.state,
            "postalCode": organizationData.address.zipCode,
            "addressCountry": organizationData.address.country
          } : {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": organizationData?.contactPoint ? {
            "@type": "ContactPoint",
            "telephone": organizationData.contactPoint.telephone,
            "contactType": organizationData.contactPoint.contactType,
            "email": organizationData.contactPoint.email
          } : {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": organizationData?.sameAs || [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ]
        },
        // Website data
        {
          "@type": "WebSite",
          "@id": "https://ziontechgroup.com/#website",
          "url": "https://ziontechgroup.com",
          "name": "Zion Tech Group",
          "description": "Advanced AI and IT Solutions",
          "publisher": {
            "@id": "https://ziontechgroup.com/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        },
        // WebPage data
        {
          "@type": "WebPage",
          "@id": `${finalCanonical}#webpage`,
          "url": finalCanonical,
          "name": title,
          "description": description,
          "isPartOf": {
            "@id": "https://ziontechgroup.com/#website"
          },
          "about": {
            "@id": "https://ziontechgroup.com/#organization"
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US"
        }
      ]
    };

    // Add breadcrumbs
    if (breadcrumbs.length > 0) {
      baseData["@graph"].push({
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }

    // Add FAQ data
    if (faqData.length > 0) {
      baseData["@graph"].push({
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    }

    // Add article data
    if (articleData) {
      baseData["@graph"].push({
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Person",
          "name": articleData.author
        },
        "publisher": {
          "@id": "https://ziontechgroup.com/#organization"
        },
        "datePublished": articleData.publishedTime,
        "dateModified": articleData.modifiedTime,
        "articleSection": articleData.section,
        "keywords": articleData.tags.join(", "),
        "image": ogImage,
        "url": finalCanonical
      });
    }

    // Add product data
    if (productData) {
      baseData["@graph"].push({
        "@type": "Product",
        "name": productData.name,
        "description": productData.description,
        "brand": {
          "@type": "Brand",
          "name": productData.brand
        },
        "category": productData.category,
        "offers": {
          "@type": "Offer",
          "price": productData.price,
          "priceCurrency": productData.currency,
          "availability": productData.availability,
          "seller": {
            "@id": "https://ziontechgroup.com/#organization"
          }
        },
        "image": productData.images,
        "url": finalCanonical
      });
    }

    // Merge with custom structured data
    if (structuredData) {
      return { ...baseData, ...structuredData };
    }

    return baseData;
  }, [title, description, finalCanonical, ogImage, structuredData, breadcrumbs, faqData, articleData, productData, organizationData]);

  // Performance monitoring
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: finalCanonical,
      });
    }

    // Track Core Web Vitals
    if (typeof window !== 'undefined' && window.gtag) {
      const trackWebVitals = (metric: any) => {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      };

      // Import and track web vitals
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(trackWebVitals);
        onFID(trackWebVitals);
        onFCP(trackWebVitals);
        onLCP(trackWebVitals);
        onTTFB(trackWebVitals);
      });
    }
  }, [title, finalCanonical]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Zion Tech Group`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Language and Geo Tags */}
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(enhancedStructuredData)}
      </script>
      
      {/* Additional Page-specific Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default AdvancedSEO;