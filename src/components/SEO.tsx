import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string }>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  canonicalUrl,
  noindex = false,
  nofollow = false,
  structuredData,
  additionalMeta = [],
  additionalLinks = [],
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  // Default values
  const defaultOgImage = ogImage || '/images/zion-tech-group-og-image.jpg';
  const defaultOgUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const defaultCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  // Enhanced meta tags
  const enhancedAdditionalMeta = [
    { name: 'robots', content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
    { name: 'author', content: author },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#8B5CF6' },
    { name: 'msapplication-TileColor', content: '#8B5CF6' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ...additionalMeta
  ];

  // Enhanced additional links
  const enhancedAdditionalLinks = [
    { rel: 'canonical', href: defaultCanonicalUrl },
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.json' },
    ...additionalLinks
  ];

  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of AI-powered business solutions, quantum computing services, and IT consulting",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Kleber Mota"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com",
      "areaServed": "US",
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
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/zion-tech-group",
      "https://github.com/zion-tech-group"
    ]
  };

  // Website structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "AI-powered business solutions and quantum computing services",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Local business structured data
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zion Tech Group",
    "image": "https://ziontechgroup.com/logo.png",
    "telephone": "+1-302-464-0950",
    "email": "kleber@ziontechgroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  // Add font preloading
  useEffect(() => {
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

    return () => {
      fontLinks.forEach(href => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:url" content={defaultOgUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOgImage} />
      
      {/* Additional meta tags */}
      {enhancedAdditionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}
      
      {/* Additional links */}
      {enhancedAdditionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessStructuredData)}
      </script>
    </Helmet>
  );
};

export function HomePageSEO() {
  return (
    <SEO
      title="Zion Tech Group | AI-Powered Business Solutions & Quantum Computing"
      description="Transform your business with cutting-edge AI solutions, quantum computing services, and IT consulting. Expert digital transformation and technology implementation."
      keywords="AI solutions, quantum computing, IT consulting, digital transformation, business automation, machine learning, artificial intelligence"
      type="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Zion Tech Group Homepage",
        "description": "Leading provider of AI-powered business solutions and quantum computing services",
        "url": "https://ziontechgroup.com",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        }
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
      type="website"
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
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
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
  publishedTime, 
  modifiedTime, 
  section, 
  tags 
}: {
  title: string;
  description: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}) {
  return (
    <SEO
      title={`${title} | Zion Tech Group Blog`}
      description={description}
      keywords={tags?.join(', ')}
      ogType="article"
      author={author}
      publishedTime={publishedTime}
      modifiedTime={modifiedTime}
      section={section}
      tags={tags}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Person",
          "name": author || "Zion Tech Group"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ziontechgroup.com/logo.png"
          }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "articleSection": section,
        "keywords": tags?.join(', ')
      }}
    />
  );
}