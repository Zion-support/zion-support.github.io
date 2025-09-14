"use client";
'use client';

import React{ useEffect } from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - AI & Technology Solutions",
  description = "Transform your business with cutting-edge AIcloud infrastructureand micro SaaS solutions. Expert consulting and implementation services.",
  keywords = "AI automationcloud computingmicro SaaStechnology consultingenterprise solutionsdigital transformation",
  canonicalUrl = "https://zion.app",
  ogImage = "https://zion.app/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title;
    }

    // Add or update meta tags
    const updateMetaTag = (name: stringcontent: stringproperty?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property'name);
        } else {
          meta.setAttribute('name'name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content'content);
    };

    // Basic meta tags
    updateMetaTag('description'description);
    updateMetaTag('keywords'keywords);
    updateMetaTag('author'Zion Tech Group');
    updateMetaTag('robots'indexfollow');
    updateMetaTag('viewport'width=device-widthinitial-scale=1.0');
    updateMetaTag('theme-color'#1e40af');

    // Open Graph tags
    updateMetaTag('og:title'titletrue);
    updateMetaTag('og:description'descriptiontrue);
    updateMetaTag('og:url'canonicalUrltrue);
    updateMetaTag('og:image'ogImagetrue);
    updateMetaTag('og:type'ogTypetrue);
    updateMetaTag('og:site_name'Zion Tech Group'true);

    // Twitter Card tags
    updateMetaTag('twitter:card'twitterCard);
    updateMetaTag('twitter:title'title);
    updateMetaTag('twitter:description'description);
    updateMetaTag('twitter:image'ogImage);

    // Additional SEO tags
    updateMetaTag('language'en');
    updateMetaTag('revisit-after'7 days');
    updateMetaTag('distribution'global');
    updateMetaTag('rating'general');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://zion.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Solutions",
          "item": "https://zion.app/ai-solutions"
        }
      ]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(breadcrumbScript);

    // Add organization structured data
    const organizationStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://zion.app",
      "logo": "https://zion.app/images/logo.png",
      "description": description,
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/zion-tech-group",
        "https://github.com/zion-tech-group"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    };

    const organizationScript = document.createElement('script');
    organizationScript.type = 'application/ld+json';
    organizationScript.textContent = JSON.stringify(organizationStructuredData);
    document.head.appendChild(organizationScript);

  }[titledescriptionkeywordscanonicalUrlogImageogTypetwitterCardstructuredData]);

  return null; // This component doesn't render anything visible
};

export default SEOEnhancer;