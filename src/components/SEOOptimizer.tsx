import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOData {
  title: string;
  description: string;
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
  robots?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: object;
}

export const defaultSEO: SEOData = {
  title: 'Zion Tech Group - Leading AI & Technology Solutions',
  description: 'Zion Tech Group delivers cutting-edge AI, cloud, and technology solutions that drive innovation and accelerate digital transformation for enterprises worldwide.',
  keywords: ['AI', 'artificial intelligence', 'technology', 'cloud computing', 'digital transformation', 'enterprise solutions', 'automation', 'cybersecurity'],
  author: 'Zion Tech Group',
  image: '/images/zion-tech-group-og.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website',
  canonical: 'https://ziontechgroup.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@ziontechgroup',
  twitterCreator: '@ziontechgroup',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Leading AI & Technology Solutions Provider',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'Wilmington',
      addressRegion: 'DE'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup'
    ]
  }
};

interface SEOOptimizerProps {
  seo?: Partial<SEOData>;
  children?: React.ReactNode;
}

export function SEOOptimizer({ seo = {}, children }: SEOOptimizerProps) {
  const mergedSEO = { ...defaultSEO, ...seo };
  
  // Generate structured data
  const generateStructuredData = () => {
    if (mergedSEO.structuredData) {
      return mergedSEO.structuredData;
    }

    // Default structured data based on page type
    const baseData = {
      '@context': 'https://schema.org',
      '@type': mergedSEO.type === 'article' ? 'Article' : 'WebPage',
      name: mergedSEO.title,
      description: mergedSEO.description,
      url: mergedSEO.url || mergedSEO.canonical,
      author: {
        '@type': 'Organization',
        name: mergedSEO.author || 'Zion Tech Group'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ziontechgroup.com/images/logo.png'
        }
      }
    };

    if (mergedSEO.type === 'article') {
      return {
        ...baseData,
        '@type': 'Article',
        headline: mergedSEO.title,
        datePublished: mergedSEO.publishedTime,
        dateModified: mergedSEO.modifiedTime,
        articleSection: mergedSEO.section,
        keywords: mergedSEO.keywords?.join(', '),
        image: mergedSEO.image ? {
          '@type': 'ImageObject',
          url: mergedSEO.image
        } : undefined
      };
    }

    if (mergedSEO.type === 'product' || mergedSEO.type === 'service') {
      return {
        ...baseData,
        '@type': mergedSEO.type === 'product' ? 'Product' : 'Service',
        name: mergedSEO.title,
        description: mergedSEO.description,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        }
      };
    }

    return baseData;
  };

  // Generate meta robots content
  const generateRobotsContent = () => {
    if (mergedSEO.noindex && mergedSEO.nofollow) return 'noindex, nofollow';
    if (mergedSEO.noindex) return 'noindex';
    if (mergedSEO.nofollow) return 'nofollow';
    if (mergedSEO.robots) return mergedSEO.robots;
    return 'index, follow';
  };

  // Generate Open Graph data
  const generateOpenGraphData = () => {
    const ogData: Record<string, string> = {
      'og:title': mergedSEO.title,
      'og:description': mergedSEO.description,
      'og:type': mergedSEO.ogType || mergedSEO.type || 'website',
      'og:url': mergedSEO.url || mergedSEO.canonical || 'https://ziontechgroup.com',
      'og:site_name': 'Zion Tech Group',
      'og:locale': 'en_US'
    };

    if (mergedSEO.image) {
      ogData['og:image'] = mergedSEO.image;
      ogData['og:image:width'] = '1200';
      ogData['og:image:height'] = '630';
      ogData['og:image:alt'] = mergedSEO.title;
    }

    if (mergedSEO.author) {
      ogData['og:author'] = mergedSEO.author;
    }

    if (mergedSEO.publishedTime) {
      ogData['og:published_time'] = mergedSEO.publishedTime;
    }

    if (mergedSEO.modifiedTime) {
      ogData['og:modified_time'] = mergedSEO.modifiedTime;
    }

    return ogData;
  };

  // Generate Twitter Card data
  const generateTwitterCardData = () => {
    const twitterData: Record<string, string> = {
      'twitter:card': mergedSEO.twitterCard || 'summary_large_image',
      'twitter:site': mergedSEO.twitterSite || '@ziontechgroup',
      'twitter:title': mergedSEO.title,
      'twitter:description': mergedSEO.description
    };

    if (mergedSEO.twitterCreator) {
      twitterData['twitter:creator'] = mergedSEO.twitterCreator;
    }

    if (mergedSEO.image) {
      twitterData['twitter:image'] = mergedSEO.image;
      twitterData['twitter:image:alt'] = mergedSEO.title;
    }

    return twitterData;
  };

  const structuredData = generateStructuredData();
  const ogData = generateOpenGraphData();
  const twitterData = generateTwitterCardData();

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{mergedSEO.title}</title>
        <meta name="description" content={mergedSEO.description} />
        {mergedSEO.keywords && <meta name="keywords" content={mergedSEO.keywords.join(', ')} />}
        {mergedSEO.author && <meta name="author" content={mergedSEO.author} />}
        <meta name="robots" content={generateRobotsContent()} />
        
        {/* Canonical URL */}
        {mergedSEO.canonical && <link rel="canonical" href={mergedSEO.canonical} />}

        {/* Open Graph Meta Tags */}
        {Object.entries(ogData).map(([property, content]) => (
          <meta key={property} property={property} content={content} />
        ))}

        {/* Twitter Card Meta Tags */}
        {Object.entries(twitterData).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Performance Hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      {children}
    </>
  );
}

// Hook for dynamic SEO updates
export function useSEO(seo: Partial<SEOData>) {
  React.useEffect(() => {
    // Update document title
    if (seo.title) {
      document.title = seo.title;
    }

    // Update meta description
    if (seo.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seo.description);
      }
    }

    // Update canonical URL
    if (seo.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', seo.canonical);
    }
  }, [seo]);
}

// Component for page-specific SEO
export function PageSEO({ seo, children }: SEOOptimizerProps) {
  return (
    <SEOOptimizer seo={seo}>
      {children}
    </SEOOptimizer>
  );
}

// Component for article SEO
export function ArticleSEO({ 
  title, 
  description, 
  publishedTime, 
  modifiedTime, 
  author, 
  image, 
  section, 
  tags, 
  children 
}: {
  title: string;
  description: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  image?: string;
  section?: string;
  tags?: string[];
  children: React.ReactNode;
}) {
  const articleSEO: SEOData = {
    title,
    description,
    type: 'article',
    publishedTime,
    modifiedTime,
    author,
    image,
    section,
    tags,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      author: {
        '@type': 'Organization',
        name: author || 'Zion Tech Group'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ziontechgroup.com/images/logo.png'
        }
      },
      datePublished: publishedTime,
      dateModified: modifiedTime,
      articleSection: section,
      keywords: tags?.join(', '),
      image: image ? {
        '@type': 'ImageObject',
        url: image
      } : undefined
    }
  };

  return (
    <SEOOptimizer seo={articleSEO}>
      {children}
    </SEOOptimizer>
  );
}
