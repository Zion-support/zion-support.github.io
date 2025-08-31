import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  msTileColor?: string;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string; type?: string; sizes?: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, quantum computing, cybersecurity, and digital transformation services. Leading innovation in technology.',
  keywords = 'AI, artificial intelligence, quantum computing, cybersecurity, digital transformation, technology solutions, machine learning, automation',
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  language = 'en',
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor = '#1e293b',
  manifest = '/manifest.json',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  msTileColor = '#1e293b',
  additionalMeta = [],
  additionalLinks = []
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'AI-Powered Technology Solutions and Digital Transformation Services',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Tech City',
      addressRegion: 'CA',
      postalCode: '90210',
      addressCountry: 'US'
    },
    offers: {
      '@type': 'Offer',
      description: 'AI-Powered Technology Solutions',
      category: 'Technology Services'
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update document title for better UX
    document.title = title;
    
    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(finalStructuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, finalStructuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="language" content={language} />
      <meta name="robots" content={noindex ? 'noindex' : robots} />
      {nofollow && <meta name="robots" content="nofollow" />}
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msTileColor} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Favicon and Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}

      {/* Additional Link Tags */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} type={link.type} sizes={link.sizes} />
      ))}

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS prefetch for additional performance */}
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="//unpkg.com" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Mobile and PWA Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="bing-verification" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />

      {/* Social Media Verification */}
      <meta name="facebook-domain-verification" content="your-verification-code" />
      <meta name="pinterest-verification" content="your-verification-code" />

      {/* Business Information */}
      <meta name="business:contact:phone" content="+1-555-0123" />
      <meta name="business:contact:email" content="info@ziontechgroup.com" />
      <meta name="business:contact:address" content="123 Innovation Drive, Tech City, CA 90210" />

      {/* Content Language and Region */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Tech City" />
      <meta name="geo.position" content="34.0522;-118.2437" />
      <meta name="ICBM" content="34.0522, -118.2437" />

      {/* Copyright Information */}
      <meta name="copyright" content="Zion Tech Group. All rights reserved." />
      <meta name="rights" content="Zion Tech Group" />

      {/* Content Classification */}
      <meta name="rating" content="General" />
      <meta name="classification" content="Technology Services" />
      <meta name="category" content="Technology" />

      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content="31536000" />

      {/* Additional Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />

      {/* Accessibility Meta Tags */}
      <meta name="accessibility" content="WCAG 2.1 AA compliant" />
      <meta name="accessibility-feature" content="high-contrast, large-text, screen-reader" />

      {/* Analytics and Tracking Meta Tags */}
      <meta name="google-analytics" content="GA_TRACKING_ID" />
      <meta name="google-tag-manager" content="GTM_TRACKING_ID" />
      <meta name="facebook-pixel" content="FB_PIXEL_ID" />

      {/* Content Security Policy */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;" />

      {/* Structured Data for Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://ziontechgroup.com'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Services',
              'item': 'https://ziontechgroup.com/services'
            }
          ]
        })}
      </script>

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          'name': 'Zion Tech Group',
          'image': 'https://ziontechgroup.com/images/office.jpg',
          'telephone': '+1-555-0123',
          'email': 'info@ziontechgroup.com',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '123 Innovation Drive',
            'addressLocality': 'Tech City',
            'addressRegion': 'CA',
            'postalCode': '90210',
            'addressCountry': 'US'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 34.0522,
            'longitude': -118.2437
          },
          'openingHours': 'Mo-Fr 09:00-17:00',
          'priceRange': '$$',
          'sameAs': [
            'https://linkedin.com/company/ziontechgroup',
            'https://twitter.com/ziontechgroup'
          ]
        })}
      </script>
    </Helmet>
  );
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="AI-Powered Business Solutions & Quantum Computing | Zion Tech Group"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity."
      keywords="AI business solutions, quantum computing, autonomous operations, digital transformation, IT services, cybersecurity, machine learning, neural networks"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="Comprehensive AI & IT Services | Zion Tech Group"
      description="Explore our comprehensive suite of AI services, quantum computing solutions, cybersecurity, and digital transformation services. Expert IT consulting and innovative technology solutions."
      keywords="AI services, quantum computing, cybersecurity, digital transformation, IT consulting, cloud services, machine learning, enterprise solutions"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get Expert AI & IT Solutions"
      description="Contact Zion Tech Group for expert AI solutions, quantum computing, and digital transformation services. Get in touch with our technology experts today."
      keywords="contact Zion Tech Group, AI solutions, IT consulting, technology services, digital transformation, quantum computing"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  author, 
  publishedDate, 
  image, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}) {
  return (
    <SEO
      title={title}
      description={description}
      author={author}
      canonical={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
      ogImage={image}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
          }
        },
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ziontechgroup.com/blog/${slug}`
        }
      }}
    />
  );
}
