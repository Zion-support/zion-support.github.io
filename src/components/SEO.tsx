import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  links?: Array<{ rel: string; href: string }>;
  scripts?: Array<{ type: string; innerHTML: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI & Technology Solutions Provider',
  description = 'Transform your business with cutting-edge AI, cybersecurity, cloud infrastructure, and digital transformation solutions from Zion Tech Group.',
  keywords = ['AI', 'artificial intelligence', 'technology solutions', 'cybersecurity', 'cloud computing', 'digital transformation', 'Zion Tech Group'],
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  lang = 'en',
  meta = [],
  links = [],
  scripts = []
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.';
  const fullKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords || 'AI, artificial intelligence, technology solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group';

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions, cloud infrastructure, and innovative technology services.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  };

  // Merge custom structured data with defaults
  const finalStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;

  // Update document title and meta description for better SEO
  useEffect(() => {
    if (title) {
      document.title = fullTitle;
    }
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', fullDescription);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', fullKeywords);
  }, [title, fullTitle, fullDescription, fullKeywords]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={lang} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={lang} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      {meta.map((metaTag, index) => (
        <meta key={index} name={metaTag.name} content={metaTag.content} />
      ))}
      
      {/* Additional Links */}
      {links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Scripts */}
      {scripts.map((script, index) => (
        <script key={index} type={script.type} dangerouslySetInnerHTML={{ __html: script.innerHTML }} />
      ))}
    </Helmet>
  );
};

export default SEO;
