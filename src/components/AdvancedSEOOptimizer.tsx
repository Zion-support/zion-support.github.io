'use client';
import React, { useEffect } from 'react';

interface AdvancedSEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
  robots?: string;
  noindex?: boolean;
  nofollow?: boolean;
  breadcrumbs?: { name: string; url: string }[];
  faqData?: { question: string; answer: string }[];
  organizationData?: any;
  websiteData?: any;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime = new Date().toISOString(),
  section = 'Technology',
  tags = [],
  locale = 'en_US',
  alternateLocales = [],
  robots = 'index, follow',
  noindex = false,
  nofollow = false,
  breadcrumbs = [],
  faqData = [],
  organizationData,
  websiteData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('author', author);
    updateMetaTag('robots', noindex ? 'noindex' : robots);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Zion Tech Group', 'property');
    updateMetaTag('og:locale', locale, 'property');
    
    if (publishedTime) {
      updateMetaTag('og:published_time', publishedTime, 'property');
    }
    if (modifiedTime) {
      updateMetaTag('og:modified_time', modifiedTime, 'property');
    }
    if (section) {
      updateMetaTag('og:section', section, 'property');
    }
    if (tags.length > 0) {
      updateMetaTag('og:tag', tags.join(', '), 'property');
    }
    
    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    updateMetaTag('twitter:site', '@ziontechgroup', 'name');
    updateMetaTag('twitter:creator', '@ziontechgroup', 'name');
    
    // Update canonical URL
    updateCanonicalUrl(canonicalUrl);
    
    // Add alternate language links
    if (alternateLocales.length > 0) {
      addAlternateLanguageLinks(alternateLocales);
    }
    
    // Add breadcrumbs structured data
    if (breadcrumbs.length > 0) {
      addBreadcrumbStructuredData(breadcrumbs);
    }
    
    // Add FAQ structured data
    if (faqData.length > 0) {
      addFAQStructuredData(faqData);
    }
    
    // Add organization structured data
    if (organizationData) {
      addStructuredData(organizationData);
    }
    
    // Add website structured data
    if (websiteData) {
      addStructuredData(websiteData);
    }
    
    // Add custom structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
    // Add additional SEO meta tags
    addAdditionalSEOTags();
    
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, author, publishedTime, modifiedTime, section, tags, locale, alternateLocales, robots, noindex, nofollow, breadcrumbs, faqData, organizationData, websiteData]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  };

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  };

  const addAlternateLanguageLinks = (locales: { locale: string; url: string }[]) => {
    locales.forEach(({ locale, url }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = locale;
      link.href = url;
      document.head.appendChild(link);
    });
  };

  const addBreadcrumbStructuredData = (breadcrumbs: { name: string; url: string }[]) => {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
    addStructuredData(breadcrumbData);
  };

  const addFAQStructuredData = (faqData: { question: string; answer: string }[]) => {
    const faqStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
    addStructuredData(faqStructuredData);
  };

  const addStructuredData = (data: any) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  const addAdditionalSEOTags = () => {
    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
      document.head.appendChild(viewport);
    }

    // Add theme color
    updateMetaTag('theme-color', '#4f46e5');
    updateMetaTag('msapplication-TileColor', '#4f46e5');
    
    // Add mobile app meta tags
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', 'Zion Tech Group');
    
    // Add format detection
    updateMetaTag('format-detection', 'telephone=no,address=no,email=no');
    
    // Add referrer policy
    updateMetaTag('referrer', 'strict-origin-when-cross-origin');
    
    // Add content security policy
    updateMetaTag('content-security-policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';");
  };

  return null;
};

export default AdvancedSEOOptimizer;