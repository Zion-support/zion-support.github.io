import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  canonical?: string;
  structuredData?: Record<string, unknown>[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  siteName?: string;
}

interface SEOOptimizerProps {
  seoData: SEOData;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  seoData
}) => {
  const {
    title,
    description,
    keywords,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonicalUrl,
    structuredData,
    author,
    publishedTime,
    modifiedTime,
    siteName = 'Zion Tech Group'
  } = seoData;

  const fullUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const fullOgImage = ogImage || (typeof window !== 'undefined' ? `${window.location.origin}/og-image.png` : '');

  useEffect(() => {
    // Update document title and meta description
    if (typeof document !== 'undefined') {
      document.title = title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }
  }, [title, description, keywords]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author || 'Zion Tech Group'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#1e293b" />
      
      {/* Time-based Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading AI & Technology Solutions for modern enterprises",
          "url": typeof window !== 'undefined' ? window.location.origin : '',
          "logo": fullOgImage,
          "sameAs": [
            "https://linkedin.com/company/zion-tech-group",
            "https://twitter.com/ziontechgroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-ZION-TECH",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

/**
 * Hook for generating SEO data based on route
 */
export function useSEOData(pathname: string): SEOData {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  // Default SEO data
  const defaultSEO: SEOData = {
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    ogImage: `${baseUrl}/og-image.png`,
    ogUrl: `${baseUrl}${pathname}`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonicalUrl: `${baseUrl}${pathname}`,
    author: 'Zion Tech Group',
    siteName: 'Zion Tech Group'
  };

  // Route-specific SEO data
  const routeSEO: Record<string, Partial<SEOData>> = {
    '/': {
      title: 'Zion Tech Group - Leading AI & Technology Solutions',
      description: 'Transform your business with cutting-edge AI, quantum computing, and digital transformation solutions. Expert consulting and innovative technology implementations.',
      keywords: ['AI solutions', 'digital transformation', 'quantum computing', 'enterprise technology', 'machine learning', 'automation']
    },
    '/services': {
      title: 'AI & Technology Services - Zion Tech Group',
      description: 'Comprehensive AI and technology services including machine learning, quantum computing, cloud migration, and digital transformation solutions.',
      keywords: ['AI services', 'machine learning', 'quantum computing', 'cloud migration', 'digital transformation', 'enterprise solutions']
    },
    '/about': {
      title: 'About Zion Tech Group - AI & Technology Experts',
      description: 'Learn about Zion Tech Group\'s mission to revolutionize business through cutting-edge AI and technology solutions. Meet our expert team.',
      keywords: ['about zion tech', 'AI experts', 'technology team', 'company mission', 'leadership']
    },
    '/contact': {
      title: 'Contact Zion Tech Group - Get Started Today',
      description: 'Ready to transform your business? Contact Zion Tech Group for AI and technology solutions. Free consultation available.',
      keywords: ['contact zion tech', 'AI consultation', 'technology solutions', 'get started', 'free consultation']
    },
    '/blog': {
      title: 'AI & Technology Blog - Zion Tech Group Insights',
      description: 'Stay updated with the latest AI and technology insights, trends, and innovations from Zion Tech Group experts.',
      keywords: ['AI blog', 'technology insights', 'industry trends', 'innovation', 'tech news']
    }
  };

  const currentRouteSEO = routeSEO[pathname] || {};
  
  return {
    ...defaultSEO,
    ...currentRouteSEO,
    ogUrl: `${baseUrl}${pathname}`,
    canonicalUrl: `${baseUrl}${pathname}`
  };
}

export default SEOOptimizer;