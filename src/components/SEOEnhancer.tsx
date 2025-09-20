import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  enableAnalytics?: boolean;
  enableSitemap?: boolean;
  className?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion - Tech & AI Marketplace',
  description = 'Discover top AI and tech talent, services, and equipment in one place. Connect with experts, find innovative solutions, and grow your business.',
  keywords = ['AI', 'technology', 'marketplace', 'talent', 'services', 'equipment', 'innovation'],
  canonicalUrl = window.location.href,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  enableAnalytics = true,
  enableSitemap = true,
  className = ''
}) => {
  const [pageData, setPageData] = useState({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogType,
    twitterCard
  });

  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion - Tech & AI Marketplace',
      description: description,
      url: canonicalUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${window.location.origin}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Holdings',
        url: 'https://zion.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://zion.app/logo.png'
        }
      }
    };

    return structuredData || baseStructuredData;
  };

  // Generate sitemap entry
  const generateSitemapEntry = () => {
    if (!enableSitemap) return;

    const sitemapEntry = {
      url: canonicalUrl,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.8
    };

    // In a real implementation, this would be sent to a sitemap service
    console.log('Sitemap entry:', sitemapEntry);
  };

  // Initialize analytics
  useEffect(() => {
    if (!enableAnalytics) return;

    // Google Analytics 4
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageData.title,
        page_location: pageData.canonicalUrl
      });
    }

    // Custom analytics
    const analyticsData = {
      page: window.location.pathname,
      title: pageData.title,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    // Send analytics data (in real implementation, this would be sent to analytics service)
    console.log('Analytics data:', analyticsData);
  }, [pageData, enableAnalytics]);

  // Generate sitemap entry on mount
  useEffect(() => {
    generateSitemapEntry();
  }, [canonicalUrl, enableSitemap]);

  // Update page data when props change
  useEffect(() => {
    setPageData({
      title,
      description,
      keywords,
      canonicalUrl,
      ogImage,
      ogType,
      twitterCard
    });
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard]);

  return (
    <div className={`seo-enhancer ${className}`}>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
        <meta name="keywords" content={pageData.keywords.join(', ')} />
        <link rel="canonical" href={pageData.canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:url" content={pageData.canonicalUrl} />
        <meta property="og:type" content={pageData.ogType} />
        <meta property="og:image" content={pageData.ogImage} />
        <meta property="og:site_name" content="Zion - Tech & AI Marketplace" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={pageData.twitterCard} />
        <meta name="twitter:title" content={pageData.title} />
        <meta name="twitter:description" content={pageData.description} />
        <meta name="twitter:image" content={pageData.ogImage} />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
        
        {/* Additional Meta Tags for Better SEO */}
        <meta name="author" content="Zion Holdings" />
        <meta name="copyright" content="Zion Holdings" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
    </div>
  );
};

export default SEOEnhancer;