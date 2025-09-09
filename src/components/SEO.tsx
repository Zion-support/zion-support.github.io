import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  ogImage?: string;
  url?: string; // For backward compatibility
}

export function SEO({ title, description, keywords, image, canonical, ogImage, url }: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = ogImage || image || '/og-image.jpg';
  const canonicalUrl = canonical || url;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

export default SEO;
