<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {}
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

<<<<<<< HEAD
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced IT & AI Solutions',
  description = 'Leading provider of cutting-edge IT services, AI solutions, and digital transformation services. Expert cybersecurity, cloud migration, and custom software development.',
  keywords = 'IT services, AI solutions, cybersecurity, cloud migration, software development, digital transformation, micro SaaS, mobile development',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com');

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
=======
const SEOHead: React.FC<SEOHeadProps> = ({'
  title = 'Zion Tech Group - Advanced Technology Solutions','
  description = 'Leading AI & Technology Solutions for a Smarter Future. We provide comprehensive AI services, cybersecurity, cloud infrastructure, and custom software development.','
  keywords = 'AI, technology, cybersecurity, cloud, software development, machine learning, automation','
  ogImage = '/og-image.jpg','
  canonical = 'https://ziontechgroup.com'
}) => {}
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:image" content={ogImage} />"
      <meta property="og:url" content={canonical} />"
      <meta property="og:type" content="website" />
      
      {/* Twitter */}"
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}"
      <meta name="robots" content="index, follow" />"
      <meta name="author" content="Zion Tech Group" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

<<<<<<< HEAD
export default SEOHead;
=======
 import { Helmet } from 'react - helmet - async'  interface SEOHeadProps {;
   title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;""
   type?: 'website' | 'article' | 'service';""
   structuredData?: object} export function SEOHead ({ title = 'Zion Tech Group - Leading AI, Quantum Computing & Advanced Technology Solutions', description = 'Transform your business with cutting - edge AI, quantum computing, cybersecurity, and digital transformation solutions. Trusted by 1000 + companies worldwide.', keywords = 'AI solutions, quantum computing, cybersecurity, digital transformation, cloud services, DevOps, machine learning, space technology', image = '/images / zion - tech - group - og.jpg', url = 'https: '''
}
 import { Helmet } from 'react - helmet - async'  interface SEOHeadProps {
   title?: string
   description?: string
   keywords?: string
   image?: string
   url?: string
   type?: 'website' | 'article' | 'service'
   structuredData?: object
} export function SEOHead ({ title = 'Zion Tech Group - Leading AI, Quantum Computing & Advanced Technology Solutions', description = 'Transform your business with cutting - edge AI, quantum computing, cybersecurity, and digital transformation solutions. Trusted by 1000 + companies worldwide.', keywords = 'AI solutions, quantum computing, cybersecurity, digital transformation, cloud services, DevOps, machine learning, space technology', image = '/images / zion - tech - group - og.jpg', url = 'https:'''
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export default SEOHead;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
