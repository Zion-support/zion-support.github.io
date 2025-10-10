'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    if (typeof document !== 'undefined') {
      document.title = title;
    }

    // Add structured data
    if (structuredData && typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      script.id = 'structured-data';
      
      // Remove existing structured data
      const existing = document.getElementById('structured-data');
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data
    if (typeof document !== 'undefined') {
      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ziontechgroup.com'
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(breadcrumbData);
      script.id = 'breadcrumb-structured-data';
      
      // Remove existing breadcrumb structured data
      const existing = document.getElementById('breadcrumb-structured-data');
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    }
  }, [title, structuredData]);
    if (structuredData) {
      addStructuredData(structuredData);
    // Add breadcrumb structured data
    addBreadcrumbStructuredData();
    // Add organization structured data
    addOrganizationStructuredData()}, [title, description, keywords, canonicalUrl, ogImage, structuredData]);
const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {;
let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    meta.setAttribute('content', content);
const updateCanonicalUrl = (url: string) => {;
let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    canonical.setAttribute('href', url);
const addStructuredData = (data: Record<string, unknown>) => {;
const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    // Remove existing structured data;
const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    document.head.appendChild(script);
const addBreadcrumbStructuredData = () => {const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://ziontechgroup.com'
        }
      ]
    }
const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    // Remove existing breadcrumb data;
const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {
      existing.remove();
    document.head.appendChild(script);
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  structuredData?: any;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string}
;
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {;
const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOOptimizer;