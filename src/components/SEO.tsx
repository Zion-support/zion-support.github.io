import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  facebookAppId?: string;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
  baiduVerification?: string;
  viewport?: string;
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
    name: string;
    content: string;
    property?: string;
  }>;
  additionalLinkTags?: Array<{
    rel: string;
    href: string;
    type?: string;
    sizes?: string;
    media?: string;
  }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Technology Solutions',
  description = 'Leading provider of AI-powered technology solutions, cloud infrastructure, and innovative services. Transform your business with cutting-edge AI technology.',
  keywords = [
    'AI technology',
    'artificial intelligence',
    'cloud computing',
    'digital transformation',
    'machine learning',
    'automation',
    'cybersecurity',
    'data analytics',
    'IoT solutions',
    'quantum computing',
    'space technology',
    'enterprise solutions',
    'healthcare technology',
    'financial technology',
    'smart cities',
    'sustainability',
    'innovation',
    'technology consulting',
    'software development',
    'IT services'
  ],
  image = '/images/zion-tech-group-og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonical,
  noindex = false,
  nofollow = false,
  robots,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  facebookAppId,
  googleSiteVerification,
  bingSiteVerification,
  yandexVerification,
  baiduVerification,
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor = '#3B82F6',
  msapplicationTileColor = '#3B82F6',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  manifest = '/manifest.json',
  appleMobileWebAppTitle = 'Zion Tech Group',
  appleMobileWebAppCapable = true,
  appleMobileWebAppStatusBarStyle = 'default',
  formatDetection = {
    telephone: false,
    date: false,
    address: false,
    email: false
  },
  additionalMetaTags = [],
  additionalLinkTags = []
}) => {
  // Default structured data for organization
  const defaultStructuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of AI-powered technology solutions and innovative services',
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-ZION-TECH',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'San Francisco',
      addressRegion: 'CA'
    },
    founder: {
      '@type': 'Person',
      name: 'Zion Tech Group Team'
    },
    foundingDate: '2020',
    numberOfEmployees: '100+',
    industry: 'Technology',
    serviceType: [
      'AI Solutions',
      'Cloud Computing',
      'Cybersecurity',
      'Data Analytics',
      'Digital Transformation',
      'IoT Solutions',
      'Quantum Computing',
      'Space Technology'
    ]
  }), []);

  // Merge custom structured data with default
  const finalStructuredData = useMemo(() => {
    if (structuredData) {
      return { ...defaultStructuredData, ...structuredData };
    }
    return defaultStructuredData;
  }, [structuredData, defaultStructuredData]);

  // Generate robots meta tag
  const robotsContent = useMemo(() => {
    if (robots) return robots;
    
    const parts = [];
    if (noindex) parts.push('noindex');
    if (nofollow) parts.push('nofollow');
    
    return parts.length > 0 ? parts.join(',') : 'index, follow';
  }, [robots, noindex, nofollow]);

  // Generate canonical URL
  const canonicalUrl = useMemo(() => {
    if (canonical) return canonical;
    return url;
  }, [canonical, url]);

  // Enhanced meta tags for better SEO
  const enhancedMetaTags = useMemo(() => [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: author },
    { name: 'robots', content: robotsContent },
    { name: 'viewport', content: viewport },
    { name: 'theme-color', content: themeColor },
    { name: 'msapplication-TileColor', content: msapplicationTileColor },
    
    // Open Graph meta tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: ogType },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card meta tags
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:site', content: twitterSite },
    { name: 'twitter:creator', content: twitterCreator },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    
    // Article specific meta tags
    ...(type === 'article' ? [
      { property: 'article:author', content: author },
      { property: 'article:published_time', content: publishedTime },
      { property: 'article:modified_time', content: modifiedTime },
      { property: 'article:section', content: section },
      ...tags.map(tag => ({ property: 'article:tag', content: tag }))
    ] : []),
    
    // Additional meta tags
    ...additionalMetaTags
  ], [
    title, description, keywords, author, robotsContent, viewport, themeColor,
    msapplicationTileColor, image, url, ogType, twitterCard, twitterSite,
    twitterCreator, type, publishedTime, modifiedTime, section, tags,
    additionalMetaTags
  ]);

  // Enhanced link tags for better performance
  const enhancedLinkTags = useMemo(() => [
    // Favicon and app icons
    { rel: 'icon', href: favicon },
    { rel: 'apple-touch-icon', href: appleTouchIcon },
    { rel: 'manifest', href: manifest },
    
    // Canonical and alternate links
    { rel: 'canonical', href: canonicalUrl },
    
    // Preconnect for performance
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://cdn.gpteng.co' },
    
    // DNS prefetch for performance
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: '//cdn.gpteng.co' },
    
    // Additional link tags
    ...additionalLinkTags
  ], [
    favicon, appleTouchIcon, manifest, canonicalUrl, additionalLinkTags
  ]);

  // Inject structured data
  useEffect(() => {
    if (typeof window !== 'undefined' && finalStructuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(finalStructuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [finalStructuredData]);

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      
      {/* Enhanced meta tags */}
      {enhancedMetaTags.map((tag, index) => (
        <meta
          key={`meta-${index}`}
          {...(tag.property ? { property: tag.property } : { name: tag.name })}
          content={tag.content}
        />
      ))}
      
      {/* Enhanced link tags */}
      {enhancedLinkTags.map((tag, index) => (
        <link
          key={`link-${index}`}
          rel={tag.rel}
          href={tag.href}
          {...(tag.type && { type: tag.type })}
          {...(tag.sizes && { sizes: tag.sizes })}
          {...(tag.media && { media: tag.media })}
          {...(tag.crossOrigin && { crossOrigin: tag.crossOrigin })}
        />
      ))}
      
      {/* Apple mobile web app meta tags */}
      <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} />
      <meta name="apple-mobile-web-app-capable" content={appleMobileWebAppCapable ? 'yes' : 'no'} />
      <meta name="apple-mobile-web-app-status-bar-style" content={appleMobileWebAppStatusBarStyle} />
      
      {/* Format detection */}
      <meta name="format-detection" content={Object.entries(formatDetection)
        .filter(([_, value]) => value)
        .map(([key]) => key)
        .join(',')} />
      
      {/* Site verification */}
      {googleSiteVerification && (
        <meta name="google-site-verification" content={googleSiteVerification} />
      )}
      {bingSiteVerification && (
        <meta name="msvalidate.01" content={bingSiteVerification} />
      )}
      {yandexVerification && (
        <meta name="yandex-verification" content={yandexVerification} />
      )}
      {baiduVerification && (
        <meta name="baidu-site-verification" content={baiduVerification} />
      )}
      
      {/* Facebook App ID */}
      {facebookAppId && (
        <meta property="fb:app_id" content={facebookAppId} />
      )}
      
      {/* Additional structured data for specific page types */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: image,
            author: {
              '@type': 'Organization',
              name: author
            },
            publisher: {
              '@type': 'Organization',
              name: 'Zion Tech Group',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png'
              }
            },
            datePublished: publishedTime,
            dateModified: modifiedTime,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': url
            }
          })}
        </script>
      )}
      
      {/* Breadcrumb structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ziontechgroup.com'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: title,
              item: url
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
