import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
}

const SEOOptimizer: React.FC<{ seoData?: Partial<SEOData> }> = ({ seoData }) => {
  const location = useLocation();

  const defaultSEOData: SEOData = {
    title: 'Zion - Advanced AI & Technology Solutions',
    description: 'Discover cutting-edge AI solutions, quantum computing breakthroughs, and revolutionary technology innovations. Transform your business with Zion\'s advanced technology platform.',
    keywords: ['AI', 'artificial intelligence', 'quantum computing', 'technology', 'innovation', 'machine learning', 'automation'],
    canonical: `https://zion.app${location.pathname}`,
    ogImage: 'https://zion.app/og-image.jpg',
    ogType: 'website',
    ...seoData
  };

  useEffect(() => {
    // Update document title
    document.title = defaultSEOData.title;

    // Update meta description
    updateMetaTag('description', defaultSEOData.description);
    updateMetaTag('keywords', defaultSEOData.keywords.join(', '));

    // Update Open Graph tags
    updateMetaTag('og:title', defaultSEOData.title, 'property');
    updateMetaTag('og:description', defaultSEOData.description, 'property');
    updateMetaTag('og:image', defaultSEOData.ogImage, 'property');
    updateMetaTag('og:url', defaultSEOData.canonical, 'property');
    updateMetaTag('og:type', defaultSEOData.ogType, 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', defaultSEOData.title);
    updateMetaTag('twitter:description', defaultSEOData.description);
    updateMetaTag('twitter:image', defaultSEOData.ogImage);

    // Update canonical URL
    updateCanonicalURL(defaultSEOData.canonical);

    // Add structured data
    addStructuredData();

    // Add breadcrumb structured data
    addBreadcrumbStructuredData();

  }, [location.pathname, defaultSEOData]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  };

  const updateCanonicalURL = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  };

  const addStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion",
      "url": "https://zion.app",
      "logo": "https://zion.app/logo.png",
      "description": defaultSEOData.description,
      "sameAs": [
        "https://twitter.com/zion",
        "https://linkedin.com/company/zion",
        "https://github.com/zion-holdings"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-ZION-APP",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  const addBreadcrumbStructuredData = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbItems = pathSegments.map((segment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      "item": `https://zion.app/${pathSegments.slice(0, index + 1).join('/')}`
    }));

    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    // Remove existing breadcrumb structured data
    const existingBreadcrumb = document.querySelector('script[data-type="breadcrumb"]');
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }

    // Add new breadcrumb structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'breadcrumb');
    script.textContent = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything visible
};

export default SEOOptimizer;