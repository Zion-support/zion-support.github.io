import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { useLocation } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d

interface SEOProps {
  title: string;
  description: string;
<<<<<<< HEAD
  keywords: string;
  type: 'website' | 'article' | 'product' | 'service';
  url: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  type,
  url,
  image = '/images/zion-tech-group-og.jpg',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonicalUrl,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const fullUrl = canonicalUrl || `https://ziontechgroup.com${url}`;
  const ogImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  // Generate structured data for organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Wilmington",
      "addressRegion": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions",
            "description": "AI-powered business solutions and machine learning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Technology",
            "description": "Quantum computing and quantum technology solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity",
            "description": "Advanced cybersecurity and compliance services"
          }
        }
      ]
    }
  };

  // Generate structured data for the current page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebPage',
    "headline": title,
    "description": description,
    "url": fullUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
      }
    },
    "author": {
      "@type": "Organization",
      "name": author
    },
    "image": {
      "@type": "ImageObject",
      "url": ogImage,
      "width": 1200,
      "height": 630
    },
    "datePublished": publishedTime || new Date().toISOString(),
    "dateModified": modifiedTime || new Date().toISOString(),
    "keywords": keywords,
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Add article-specific structured data
  if (type === 'article' && section) {
    (pageStructuredData as any).articleSection = section;
  }

  // Add tags if available
  if (tags.length > 0) {
    (pageStructuredData as any).keywords = [...tags, keywords].join(', ');
  }

  // Merge custom structured data
  const finalStructuredData = structuredData 
    ? { ...pageStructuredData, ...structuredData }
    : pageStructuredData;

  // Preload critical resources
  useEffect(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/src/index.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.href = '/fonts/inter-var.woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    // DNS prefetch for external domains
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = '//fonts.googleapis.com';
    document.head.appendChild(dnsPrefetch);

    // Preconnect to external domains
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);

    return () => {
      document.head.removeChild(criticalCSS);
      document.head.removeChild(fontPreload);
      document.head.removeChild(dnsPrefetch);
      document.head.removeChild(preconnect);
=======
  keywords: string[];
  image?: string;
  url: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

interface EnhancedSEOProps {
  data: SEOData;
  structuredData?: object;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  data,
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false
}) => {
  const location = useLocation();
  const baseUrl = 'https://ziontechgroup.com';
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
  
  // Default meta tags
  const defaultMeta = {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    'theme-color': '#0f172a',
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Zion Tech Group',
    'application-name': 'Zion Tech Group',
    'msapplication-TileColor': '#0f172a',
    'msapplication-config': '/browserconfig.xml',
  };

  // Open Graph meta tags
  const openGraphMeta = {
    'og:title': data.title,
    'og:description': data.description,
    'og:type': data.type || 'website',
    'og:url': fullUrl,
    'og:image': data.image || `${baseUrl}/images/zion-tech-group-og.jpg`,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': data.title,
    'og:site_name': 'Zion Tech Group',
    'og:locale': 'en_US',
  };

  // Twitter Card meta tags
  const twitterMeta = {
    'twitter:card': 'summary_large_image',
    'twitter:site': '@ziontechgroup',
    'twitter:creator': '@ziontechgroup',
    'twitter:title': data.title,
    'twitter:description': data.description,
    'twitter:image': data.image || `${baseUrl}/images/zion-tech-group-twitter.jpg`,
    'twitter:image:alt': data.title,
  };

  // Article-specific meta tags
  const articleMeta = data.type === 'article' ? {
    'article:published_time': data.publishedTime,
    'article:modified_time': data.modifiedTime,
    'article:author': data.author,
    'article:section': data.section,
    'article:tag': data.tags?.join(', '),
  } : {};

  // Robots meta tag
  const robotsMeta = noindex || nofollow ? {
    'robots': `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`,
  } : {};

  // Performance and security meta tags
  const performanceMeta = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };

  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/images/zion-tech-group-logo.svg', as: 'image' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        if (value) linkElement.setAttribute(key, value);
      });
      document.head.appendChild(linkElement);
    });

    // Cleanup function
    return () => {
      preloadLinks.forEach(link => {
        const existingLink = document.querySelector(`link[href="${link.href}"]`);
        if (existingLink) {
          existingLink.remove();
        }
      });
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
    };
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
<<<<<<< HEAD
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Optimizations */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="React + Vite" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance Optimizations */}
      <link rel="preload" href="/src/index.css" as="style" />
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Wilmington, Delaware" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Your Street Address" />
      <meta name="business:contact_data:locality" content="Wilmington" />
      <meta name="business:contact_data:administrative_area" content="DE" />
      <meta name="business:contact_data:postal_code" content="Your Postal Code" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
=======
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords.join(', ')} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Default Meta Tags */}
      {Object.entries(defaultMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* Open Graph Meta Tags */}
      {Object.entries(openGraphMeta).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      {Object.entries(twitterMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* Article Meta Tags */}
      {Object.entries(articleMeta).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Robots Meta Tag */}
      {Object.entries(robotsMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* Performance and Security Meta Tags */}
      {Object.entries(performanceMeta).map(([httpEquiv, content]) => (
        <meta key={httpEquiv} httpEquiv={httpEquiv} content={content} />
      ))}
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional SEO Enhancements */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      
      {/* Mobile and PWA Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Social Media Verification */}
      <meta name="facebook-domain-verification" content="your-verification-code" />
      <meta name="p:domain_verify" content="your-verification-code" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* Critical CSS */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .critical-content {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          
          .loading {
            opacity: 0;
            transform: translateY(20px);
          }
        `}
      </style>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
    </Helmet>
  );
};

export default EnhancedSEO;