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
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
  ogType?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogLocaleAlternate?: string[];
  robots?: string;
  viewport?: string;
  charset?: string;
  themeColor?: string;
  msapplicationTileColor?: string;
  appleTouchIcon?: string;
  favicon?: string;
  manifest?: string;
  appleMobileWebAppTitle?: string;
  appleMobileWebAppCapable?: boolean;
  appleMobileWebAppStatusBarStyle?: 'default' | 'black' | 'black-translucent';
  formatDetection?: {
    telephone?: boolean;
    date?: boolean;
    address?: boolean;
    email?: boolean;
  };
  additionalMetaTags?: Array<{
    property?: string;
    name?: string;
    content: string;
    httpEquiv?: string;
  }>;
  additionalLinkTags?: Array<{
    rel: string;
    href: string;
    sizes?: string;
    type?: string;
    crossOrigin?: string;
  }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Technology Solutions',
  description = 'Leading provider of AI-powered technology solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge AI and automation.',
  keywords = [
    'AI solutions',
    'technology consulting',
    'cloud infrastructure',
    'digital transformation',
    'automation',
    'machine learning',
    'data analytics',
    'cybersecurity',
    'blockchain',
    'quantum computing'
  ],
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  ogType,
  ogSiteName = 'Zion Tech Group',
  ogLocale = 'en_US',
  ogLocaleAlternate = ['es_ES', 'fr_FR', 'de_DE', 'zh_CN'],
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  charset = 'utf-8',
  themeColor = '#1e293b',
  msapplicationTileColor = '#1e293b',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  manifest = '/manifest.json',
  appleMobileWebAppTitle = 'Zion Tech',
  appleMobileWebAppCapable = true,
  appleMobileWebAppStatusBarStyle = 'default',
  formatDetection = {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  additionalMetaTags = [],
  additionalLinkTags = [],
}) => {
  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of AI-powered technology solutions and digital transformation services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Tech City',
      addressRegion: 'CA',
      postalCode: '90210',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://www.facebook.com/ziontechgroup'
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Sarah Johnson',
      jobTitle: 'CEO & Chief Technology Officer'
    },
    foundingDate: '2020',
    numberOfEmployees: '500+',
    industry: 'Technology',
    serviceType: [
      'AI Solutions',
      'Cloud Infrastructure',
      'Digital Transformation',
      'Cybersecurity',
      'Data Analytics'
    ]
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  // Generate canonical URL
  const canonicalUrl = canonical || url;

  // Generate robots meta tag
  const robotsContent = noindex 
    ? 'noindex, nofollow' 
    : nofollow 
      ? 'index, nofollow' 
      : robots;

  // Generate format detection meta tag
  const formatDetectionContent = Object.entries(formatDetection)
    .filter(([_, value]) => value === false)
    .map(([key]) => key)
    .join(', ');

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: '/css/index.css', as: 'style' },
        { href: '/js/chunk-vendors.js', as: 'script' },
        { href: image, as: 'image' }
      ];

      criticalResources.forEach(resource => {
        if (!document.querySelector(`link[href="${resource.href}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource.href;
          link.as = resource.as;
          document.head.appendChild(link);
        }
      });
    };

    // DNS prefetch for external domains
    const dnsPrefetch = () => {
      const domains = [
        '//fonts.googleapis.com',
        '//fonts.gstatic.com',
        '//www.google-analytics.com',
        '//cdn.jsdelivr.net'
      ];

      domains.forEach(domain => {
        if (!document.querySelector(`link[href="${domain}"]`)) {
          const link = document.createElement('link');
          link.rel = 'dns-prefetch';
          link.href = domain;
          document.head.appendChild(link);
        }
      });
    };

    // Preconnect to critical domains
    const preconnect = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      domains.forEach(domain => {
        if (!document.querySelector(`link[href="${domain}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = domain;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    };

    preloadCriticalResources();
    dnsPrefetch();
    preconnect();
  }, [image]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content={viewport} />
      <meta charSet={charset} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msapplicationTileColor} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType || type} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={ogLocale} />
      {ogLocaleAlternate.map(locale => (
        <meta key={locale} property="og:locale:alternate" content={locale} />
      ))}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:site" content={twitterSite} />

      {/* Article-specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))
      )}

      {/* Favicon and App Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />

      {/* Apple Mobile Web App Meta Tags */}
      <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} />
      <meta name="apple-mobile-web-app-capable" content={appleMobileWebAppCapable ? 'yes' : 'no'} />
      <meta name="apple-mobile-web-app-status-bar-style" content={appleMobileWebAppStatusBarStyle} />

      {/* Format Detection */}
      {formatDetectionContent && (
        <meta name="format-detection" content={formatDetectionContent} />
      )}

      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta
          key={index}
          property={tag.property}
          name={tag.name}
          content={tag.content}
          httpEquiv={tag.httpEquiv}
        />
      ))}

      {/* Additional Link Tags */}
      {additionalLinkTags.map((tag, index) => (
        <link
          key={index}
          rel={tag.rel}
          href={tag.href}
          sizes={tag.sizes}
          type={tag.type}
          crossOrigin={tag.crossOrigin}
        />
      ))}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
