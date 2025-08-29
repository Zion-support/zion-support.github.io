import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  canonicalUrl?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI-Powered Technology Solutions',
  description = 'Transform your business with Zion Tech Group\'s cutting-edge AI solutions, cybersecurity services, quantum computing, and innovative Micro SaaS platforms. 60+ services with proven ROI up to 800%.',
  keywords = [
    'AI Solutions', 'Cybersecurity', 'Quantum Computing', 'Micro SaaS',
    'Digital Twin', 'IoT Services', 'Edge Computing', 'Data Analytics',
    'Machine Learning', 'Business Intelligence', 'Cloud Services',
    'Blockchain', 'Space Technology', 'Sustainability Tech'
  ],
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  canonical,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`;
  const fullDescription = description.length > 160 ? `${description.substring(0, 157)}...` : description;
  const fullUrl = canonical || canonicalUrl || `${url}${window.location.pathname}`;
  
  const defaultKeywords = [
    'AI Solutions',
    'IT Services',
    'Digital Transformation',
    'Cloud Computing',
    'Cybersecurity',
    'Business Intelligence',
    'Technology Consulting',
    'Zion Tech Group',
    ...keywords
  ];

  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading AI-Powered Technology Solutions Provider',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://www.facebook.com/ziontechgroup'
    ]
  };

  // Merge custom structured data with defaults
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  // Generate meta tags for social media
  const socialMetaTags = {
    // Open Graph
    'og:title': fullTitle,
    'og:description': fullDescription,
    'og:image': image,
    'og:url': fullUrl,
    'og:type': type,
    'og:site_name': 'Zion Tech Group',
    'og:locale': 'en_US',
    
    // Twitter Card
    'twitter:card': 'summary_large_image',
    'twitter:title': fullTitle,
    'twitter:description': fullDescription,
    'twitter:image': image,
    'twitter:site': '@ziontechgroup',
    'twitter:creator': '@ziontechgroup',
    
    // Additional Open Graph tags
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': fullTitle,
  };

  // Add article-specific meta tags if applicable
  if (type === 'article' && publishedTime) {
    socialMetaTags['article:published_time'] = publishedTime;
    if (modifiedTime) {
      socialMetaTags['article:modified_time'] = modifiedTime;
    }
    if (section) {
      socialMetaTags['article:section'] = section;
    }
    if (tags.length > 0) {
      socialMetaTags['article:tag'] = tags.join(', ');
    }
  }

  // Generate meta robots tag
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  if (nofollow) robotsContent.push('nofollow');
  if (robotsContent.length === 0) robotsContent.push('index, follow');

  useEffect(() => {
    // Update page title for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: fullTitle,
        page_location: fullUrl
      });
    }
  }, [fullTitle, fullUrl]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={defaultKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Social Media Meta Tags */}
      {Object.entries(socialMetaTags).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO optimizations */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Security headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" />
      
      {/* Performance optimizations */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Manifest for PWA */}
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default EnhancedSEO;