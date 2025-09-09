import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  image = '/images/zion-og-image.jpg',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  noindex = false,
  nofollow = false,
  structuredData
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com');
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-logo.png",
    "description": "The premier marketplace for AI and tech talent, services, and equipment",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    }
  };

  // Merge with custom structured data
  const finalStructuredData = structuredData || defaultStructuredData;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || 'Zion Tech Group'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional structured data if provided */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {section && (
        <meta property="article:section" content={section} />
      )}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="Zion - The Tech & AI Marketplace"
      description="Discover top AI and tech talent, services, and equipment in one place. Connect with experts, find innovative solutions, and accelerate your digital transformation."
      keywords="AI, technology, marketplace, services, talent, innovation, digital transformation"
      canonical="https://ziontechgroup.com/"
      ogImage="/images/zion-homepage-og.jpg"
      structuredData={{
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ziontechgroup.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }}
    />
  );
}

export function ServicePageSEO({ serviceName, serviceDescription }: { serviceName: string; serviceDescription: string }) {
  return (
    <SEO
      title={`${serviceName} - Zion Tech Group`}
      description={serviceDescription}
      keywords={`${serviceName}, AI services, tech solutions, Zion Tech Group`}
      canonical={`https://ziontechgroup.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
      ogType="product"
      structuredData={{
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "category": "Technology Services",
        "areaServed": "Worldwide"
      }}
    />
  );
}

export function ProfilePageSEO({ profileName, profileBio }: { profileName: string; profileBio: string }) {
  return (
    <SEO
      title={`${profileName} - Zion Tech Group`}
      description={profileBio}
      keywords={`${profileName}, tech talent, AI expert, Zion Tech Group`}
      canonical={`https://ziontechgroup.com/profile/${profileName.toLowerCase().replace(/\s+/g, '-')}`}
      ogType="profile"
      structuredData={{
        "@type": "Person",
        "name": profileName,
        "description": profileBio,
        "knowsAbout": ["Artificial Intelligence", "Technology", "Innovation"],
        "worksFor": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        }
      }}
    />
  );
}
