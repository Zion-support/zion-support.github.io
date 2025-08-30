import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

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
  structuredData?: object;
  noindex?: boolean;
  canonical?: string;
  ogLocale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
}

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: string;
  section: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = [],
  structuredData,
  noindex = false,
  canonical,
  ogLocale = 'en_US',
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const currentImage = image || `${window.location.origin}/og-image.jpg`;

  // Default metadata for different routes
  const defaultMetadata: Record<string, PageMetadata> = {
    '/': {
      title: 'Zion Tech Group - Innovative Technology Solutions & AI Services',
      description: 'Leading provider of cutting-edge technology solutions, AI services, and digital transformation. Expert consulting, development, and innovation services.',
      keywords: ['technology solutions', 'AI services', 'digital transformation', 'consulting', 'development', 'innovation'],
      image: '/images/homepage-og.jpg',
      type: 'website',
      section: 'Technology',
    },
    '/services': {
      title: 'Our Services - Zion Tech Group',
      description: 'Comprehensive technology services including AI, cloud computing, cybersecurity, digital transformation, and custom software development.',
      keywords: ['AI services', 'cloud computing', 'cybersecurity', 'digital transformation', 'software development'],
      image: '/images/services-og.jpg',
      type: 'website',
      section: 'Services',
    },
    '/about': {
      title: 'About Us - Zion Tech Group',
      description: 'Learn about Zion Tech Group\'s mission, team, and commitment to delivering innovative technology solutions that drive business success.',
      keywords: ['about us', 'mission', 'team', 'technology company', 'innovation'],
      image: '/images/about-og.jpg',
      type: 'website',
      section: 'Company',
    },
    '/contact': {
      title: 'Contact Us - Zion Tech Group',
      description: 'Get in touch with Zion Tech Group for technology consulting, project inquiries, or partnership opportunities.',
      keywords: ['contact', 'consulting', 'inquiry', 'partnership', 'support'],
      image: '/images/contact-og.jpg',
      type: 'website',
      section: 'Contact',
    },
  };

  // Get metadata for current route
  const routeMetadata = defaultMetadata[location.pathname] || defaultMetadata['/'];
  
  // Merge provided props with route defaults
  const finalMetadata = useMemo(() => ({
    title: title || routeMetadata.title,
    description: description || routeMetadata.description,
    keywords: [...new Set([...keywords, ...routeMetadata.keywords])],
    image: currentImage,
    type,
    section: section || routeMetadata.section,
  }), [title, description, keywords, currentImage, type, section, routeMetadata]);

  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      description: finalMetadata.description,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@ziontechgroup.com',
      },
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://www.facebook.com/ziontechgroup',
      ],
    };

    // Add page-specific structured data
    if (type === 'article' && publishedTime) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: finalMetadata.title,
        description: finalMetadata.description,
        image: finalMetadata.image,
        author: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: `${window.location.origin}/logo.png`,
          },
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
      };
    }

    if (type === 'product' || type === 'service') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: finalMetadata.title,
        description: finalMetadata.description,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
        },
        areaServed: 'Worldwide',
        serviceType: finalMetadata.section,
      };
    }

    return baseStructuredData;
  };

  // Generate meta tags
  const generateMetaTags = () => {
    const metaTags = [
      // Basic meta tags
      { name: 'description', content: finalMetadata.description },
      { name: 'keywords', content: finalMetadata.keywords.join(', ') },
      { name: 'author', content: author || 'Zion Tech Group' },
      { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },

      // Open Graph meta tags
      { property: 'og:title', content: finalMetadata.title },
      { property: 'og:description', content: finalMetadata.description },
      { property: 'og:image', content: finalMetadata.image },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: finalMetadata.type },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: ogLocale },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: finalMetadata.title },

      // Twitter Card meta tags
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:site', content: twitterSite },
      { name: 'twitter:creator', content: twitterCreator },
      { name: 'twitter:title', content: finalMetadata.title },
      { name: 'twitter:description', content: finalMetadata.description },
      { name: 'twitter:image', content: finalMetadata.image },
      { name: 'twitter:image:alt', content: finalMetadata.title },

      // Additional meta tags
      { name: 'theme-color', content: '#007bff' },
      { name: 'msapplication-TileColor', content: '#007bff' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
    ];

    // Add article-specific meta tags
    if (type === 'article' && publishedTime) {
      metaTags.push(
        { property: 'article:published_time', content: publishedTime },
        { property: 'article:modified_time', content: modifiedTime || publishedTime },
        { property: 'article:author', content: author || 'Zion Tech Group' },
        { property: 'article:section', content: finalMetadata.section }
      );

      // Add article tags
      tags.forEach(tag => {
        metaTags.push({ property: 'article:tag', content: tag });
      });
    }

    return metaTags;
  };

  // Generate link tags
  const generateLinkTags = () => {
    const linkTags = [
      // Canonical URL
      { rel: 'canonical', href: canonical || currentUrl },
      
      // Alternate languages (if you have multiple language versions)
      { rel: 'alternate', hreflang: 'en', href: currentUrl },
      { rel: 'alternate', hreflang: 'x-default', href: currentUrl },
      
      // Preconnect to external domains
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      
      // DNS prefetch
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      
      // Favicon and app icons
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      
      // RSS feed
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/rss.xml' },
    ];

    return linkTags;
  };

  // Update page title and meta tags when route changes
  useEffect(() => {
    // Update document title
    document.title = finalMetadata.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', finalMetadata.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', finalMetadata.keywords.join(', '));

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || currentUrl);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:title', finalMetadata.title);
    updateOGTag('og:description', finalMetadata.description);
    updateOGTag('og:image', finalMetadata.image);
    updateOGTag('og:url', currentUrl);
    updateOGTag('og:type', finalMetadata.type);

    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:title', finalMetadata.title);
    updateTwitterTag('twitter:description', finalMetadata.description);
    updateTwitterTag('twitter:image', finalMetadata.image);

    // Add structured data
    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData || generateStructuredData());
    document.head.appendChild(script);

    // Track page view for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: finalMetadata.title,
        page_location: currentUrl,
      });
    }

  }, [finalMetadata, currentUrl, canonical, structuredData, type, publishedTime, modifiedTime, author, tags]);

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{finalMetadata.title}</title>
      <meta name="description" content={finalMetadata.description} />
      <meta name="keywords" content={finalMetadata.keywords.join(', ')} />
      <meta name="author" content={author || 'Zion Tech Group'} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || currentUrl} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={finalMetadata.title} />
      <meta property="og:description" content={finalMetadata.description} />
      <meta property="og:image" content={finalMetadata.image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={finalMetadata.type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={finalMetadata.title} />
      <meta name="twitter:description" content={finalMetadata.description} />
      <meta name="twitter:image" content={finalMetadata.image} />
      
      {/* Additional meta tags */}
      <meta name="theme-color" content="#007bff" />
      <meta name="msapplication-TileColor" content="#007bff" />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || generateStructuredData())}
      </script>
    </Helmet>
  );
};

// Export default component
export default SEO;
