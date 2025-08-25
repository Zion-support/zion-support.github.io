import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
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
    };
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
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
    </Helmet>
  );
};

export default EnhancedSEO;