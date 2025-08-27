import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  children?: React.ReactNode;
}

export function SEO({
  title,
  description,
  keywords = [],
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  children,
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url || window.location.href;
  const fullImage = image.startsWith('http') ? image : `${window.location.origin}${image}`;

  const metaKeywords = [
    'Zion Tech Group',
    'AI Solutions',
    'Cybersecurity',
    'Cloud Services',
    'Digital Transformation',
    'IT Consulting',
    'Technology Services',
    ...keywords
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'Organization',
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@ziontechgroup.com"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://facebook.com/ziontechgroup"
          ],
          ...(type === 'article' && {
            "headline": title,
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "author": {
              "@type": "Organization",
              "name": author
            }
          })
        })}
      </script>

      {/* Additional children meta tags */}
      {children}
    </Helmet>
  );
}

// Predefined SEO configurations for common pages
export const SEOPresets = {
  home: {
    title: 'Zion Tech Group - AI-Powered Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions, cybersecurity services, cloud infrastructure, and digital transformation consulting from Zion Tech Group.',
    keywords: ['AI Solutions', 'Cybersecurity', 'Cloud Services', 'Digital Transformation', 'IT Consulting'],
    type: 'website' as const,
  },
  services: {
    title: 'Our Services - AI, Cybersecurity, Cloud & More',
    description: 'Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, IoT, quantum computing, and digital transformation consulting.',
    keywords: ['AI Services', 'Cybersecurity Services', 'Cloud Solutions', 'IoT Services', 'Quantum Computing'],
    type: 'website' as const,
  },
  about: {
    title: 'About Zion Tech Group - Leading Technology Innovators',
    description: 'Learn about Zion Tech Group\'s mission to revolutionize business technology through AI, innovation, and sustainable solutions.',
    keywords: ['About Us', 'Company History', 'Mission', 'Vision', 'Leadership'],
    type: 'website' as const,
  },
  contact: {
    title: 'Contact Zion Tech Group - Get Started Today',
    description: 'Ready to transform your business? Contact Zion Tech Group for AI solutions, cybersecurity services, and technology consulting.',
    keywords: ['Contact Us', 'Get Quote', 'Support', 'Consultation', 'Partnership'],
    type: 'website' as const,
  },
  blog: {
    title: 'Zion Tech Group Blog - Technology Insights & Updates',
    description: 'Stay updated with the latest technology trends, AI insights, cybersecurity updates, and industry news from Zion Tech Group.',
    keywords: ['Technology Blog', 'AI News', 'Cybersecurity Updates', 'Tech Insights', 'Industry News'],
    type: 'website' as const,
  },
};
