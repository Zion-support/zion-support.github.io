import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  ogImage?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: Record<string, any>;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string }>;
}

export function SEO({
  title,
  description,
  keywords,
  image,
  canonical,
  ogImage,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  noindex = false,
  nofollow = false,
  structuredData,
  twitterCard = 'summary_large_image',
  twitterCreator,
  twitterSite,
  additionalMeta = [],
  additionalLinks = []
}: SEOProps) {
  const location = useLocation();
  
  // Generate canonical URL
  const canonicalUrl = useMemo(() => {
    if (canonical) return canonical;
    if (url) return url;
    return `${window.location.origin}${location.pathname}`;
  }, [canonical, url, location.pathname]);

  // Generate Open Graph image URL
  const ogImageUrl = useMemo(() => {
    if (ogImage) return ogImage;
    if (image) return image;
    return `${window.location.origin}/og-image.jpg`;
  }, [ogImage, image]);

  // Generate structured data
  const generateStructuredData = useMemo(() => {
    if (structuredData) return structuredData;

    const baseData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      name: title,
      description,
      url: canonicalUrl,
      image: ogImageUrl,
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: `${window.location.origin}/logo.png`
        }
      }
    };

    if (type === 'article') {
      return {
        ...baseData,
        '@type': 'Article',
        headline: title,
        description,
        image: ogImageUrl,
        author: author ? { '@type': 'Person', name: author } : undefined,
        datePublished: publishedTime,
        dateModified: modifiedTime,
        articleSection: section,
        keywords: tags?.join(', ')
      };
    }

    if (type === 'product' || type === 'service') {
      return {
        ...baseData,
        '@type': type === 'product' ? 'Product' : 'Service',
        name: title,
        description,
        image: ogImageUrl,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock'
        }
      };
    }

    return baseData;
  }, [
    structuredData,
    type,
    title,
    description,
    canonicalUrl,
    ogImageUrl,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags
  ]);

  // Update meta tags when props change
  useEffect(() => {
    // Update document title for better UX
    document.title = title;
    
    // Update meta description for dynamic content
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', ogImageUrl);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
  }, [title, description, ogImageUrl, canonicalUrl]);

  // Generate robots meta content
  const robotsContent = useMemo(() => {
    const parts = [];
    if (noindex) parts.push('noindex');
    if (nofollow) parts.push('nofollow');
    if (parts.length === 0) parts.push('index', 'follow');
    return parts.join(', ');
  }, [noindex, nofollow]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      
      {/* Article-specific meta tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional meta tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}
      
      {/* Additional link tags */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS prefetch for common external domains */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
    </Helmet>
  );
}

// Hook for managing SEO state
export const useSEO = (defaultProps: Partial<SEOProps> = {}) => {
  const [seoProps, setSEOProps] = React.useState<SEOProps>({
    title: 'Zion Tech Group',
    description: 'Leading the future of technology with cutting-edge AI solutions, innovative micro SAAS platforms, and next-generation IT infrastructure.',
    ...defaultProps
  });

  const updateSEO = React.useCallback((updates: Partial<SEOProps>) => {
    setSEOProps(prev => ({ ...prev, ...updates }));
  }, []);

  const resetSEO = React.useCallback(() => {
    setSEOProps({
      title: 'Zion Tech Group',
      description: 'Leading the future of technology with cutting-edge AI solutions, innovative micro SAAS platforms, and next-generation IT infrastructure.',
      ...defaultProps
    });
  }, [defaultProps]);

  return {
    seoProps,
    updateSEO,
    resetSEO
  };
};

// Predefined SEO configurations for common page types
export const seoConfigs = {
  home: {
    title: 'Zion Tech Group - Leading the Future of Technology',
    description: 'Empowering businesses with cutting-edge AI solutions, innovative micro SAAS platforms, and next-generation IT infrastructure that drives growth and transformation.',
    keywords: 'AI solutions, micro SAAS, IT infrastructure, technology consulting, digital transformation',
    type: 'website' as const,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading the future of technology with cutting-edge AI solutions and innovative platforms.',
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup'
      ]
    }
  },
  
  services: {
    title: 'Our Services - Zion Tech Group',
    description: 'Discover our comprehensive range of AI-powered solutions, micro SAAS platforms, and IT infrastructure services designed to transform your business.',
    keywords: 'AI services, micro SAAS platforms, IT solutions, business transformation, technology services',
    type: 'service' as const
  },
  
  about: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission to revolutionize technology and empower businesses with innovative solutions for the future.',
    keywords: 'about Zion Tech Group, company history, mission, vision, technology leadership',
    type: 'website' as const
  },
  
  contact: {
    title: 'Contact Us - Zion Tech Group',
    description: 'Get in touch with Zion Tech Group. We\'re here to help you transform your business with cutting-edge technology solutions.',
    keywords: 'contact Zion Tech Group, support, consultation, business inquiry',
    type: 'website' as const
  },
  
  blog: {
    title: 'Blog - Zion Tech Group',
    description: 'Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group\'s expert team.',
    keywords: 'technology blog, AI insights, tech trends, innovation news',
    type: 'website' as const
  }
};

// Utility function to generate SEO props for dynamic content
export const generateSEOProps = (
  pageType: keyof typeof seoConfigs,
  customProps: Partial<SEOProps> = {}
): SEOProps => {
  const baseConfig = seoConfigs[pageType];
  return {
    ...baseConfig,
    ...customProps
  };
};

// Utility function to generate article SEO props
export const generateArticleSEO = (
  article: {
    title: string;
    description: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
    image?: string;
  }
): SEOProps => ({
  title: `${article.title} - Zion Tech Group Blog`,
  description: article.description,
  keywords: article.tags?.join(', '),
  image: article.image,
  type: 'article',
  author: article.author,
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
  tags: article.tags,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: article.author ? { '@type': 'Person', name: article.author } : undefined,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime,
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png'
      }
    }
  }
});
