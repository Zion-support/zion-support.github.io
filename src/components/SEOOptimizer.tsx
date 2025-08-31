import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const defaultSEO: SEOData = {
  title: 'Zion Tech Group - Innovation • Technology • Growth',
  description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud computing, and digital transformation. Empowering businesses with cutting-edge technology solutions.',
  keywords: 'AI, artificial intelligence, cybersecurity, cloud computing, digital transformation, technology solutions, business automation, IT services',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud computing, and digital transformation.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'Delaware'
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
  data?: Partial<SEOData>;
  children?: React.ReactNode;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ data = {}, children }) => {
  const seoData = { ...defaultSEO, ...data };

  useEffect(() => {
    // Update document title for better UX
    document.title = seoData.title;
    
    // Add structured data to page
    if (seoData.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [seoData]);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
        {seoData.author && <meta name="author" content={seoData.author} />}
        
        {/* Canonical URL */}
        {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
        
        {/* Robots Meta */}
        {seoData.noindex && <meta name="robots" content="noindex" />}
        {seoData.nofollow && <meta name="robots" content="nofollow" />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:url" content={seoData.canonical || 'https://ziontechgroup.com'} />
        {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        {seoData.ogImage && <meta name="twitter:image" content={seoData.ogImage} />}
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Article Meta Tags (for blog posts, news, etc.) */}
        {seoData.publishedTime && <meta property="article:published_time" content={seoData.publishedTime} />}
        {seoData.modifiedTime && <meta property="article:modified_time" content={seoData.modifiedTime} />}
        {seoData.section && <meta property="article:section" content={seoData.section} />}
        {seoData.tags && seoData.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      </Helmet>
      
      {children}
    </>
  );
};

// Enhanced SEO component for specific page types
export const PageSEO: React.FC<SEOOptimizerProps & { pageType: 'home' | 'service' | 'blog' | 'about' | 'contact' }> = ({ 
  pageType, 
  data = {}, 
  children 
}) => {
  const pageSpecificSEO: Record<string, SEOData> = {
    home: {
      title: 'Zion Tech Group - Leading AI & Technology Solutions',
      description: 'Transform your business with Zion Tech Group\'s cutting-edge AI, cybersecurity, and digital transformation solutions. Expert technology consulting and implementation.',
      keywords: 'AI solutions, cybersecurity, digital transformation, cloud computing, technology consulting, business automation',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ziontechgroup.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    },
    service: {
      title: `${data.title || 'AI & Technology Services'} - Zion Tech Group`,
      description: data.description || 'Professional AI and technology services from Zion Tech Group. Expert solutions for modern business challenges.',
      keywords: `${data.keywords || 'AI services, technology solutions'}, Zion Tech Group, professional services`,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.title || 'Technology Services',
        description: data.description || 'Professional technology services',
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        }
      }
    },
    blog: {
      title: `${data.title || 'Technology Insights'} - Zion Tech Group Blog`,
      description: data.description || 'Latest insights on AI, cybersecurity, and technology trends from Zion Tech Group experts.',
      keywords: `${data.keywords || 'technology blog, AI insights, cybersecurity news'}, Zion Tech Group`,
      ogType: 'article',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.title || 'Technology Insights',
        description: data.description || 'Latest technology insights',
        author: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/logo.png'
          }
        }
      }
    },
    about: {
      title: 'About Zion Tech Group - Our Mission & Vision',
      description: 'Learn about Zion Tech Group\'s mission to empower businesses with innovative technology solutions. Discover our expertise in AI, cybersecurity, and digital transformation.',
      keywords: 'about Zion Tech Group, company mission, technology expertise, AI specialists, cybersecurity experts',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Zion Tech Group',
        description: 'Learn about our mission and expertise in technology solutions'
      }
    },
    contact: {
      title: 'Contact Zion Tech Group - Get Expert Technology Consultation',
      description: 'Ready to transform your business? Contact Zion Tech Group for expert technology consultation, AI solutions, and digital transformation services.',
      keywords: 'contact Zion Tech Group, technology consultation, AI solutions, digital transformation services, IT consulting',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Zion Tech Group',
        description: 'Get expert technology consultation and solutions'
      }
    }
  };

  const pageSEO = { ...pageSpecificSEO[pageType], ...data };
  
  return (
    <SEOOptimizer data={pageSEO}>
      {children}
    </SEOOptimizer>
  );
};

// SEO component for service pages
export const ServiceSEO: React.FC<SEOOptimizerProps & { 
  serviceName: string;
  serviceDescription: string;
  serviceCategory: string;
  pricing?: string;
  features?: string[];
}> = ({ 
  serviceName, 
  serviceDescription, 
  serviceCategory, 
  pricing, 
  features = [], 
  data = {}, 
  children 
}) => {
  const serviceSEO: SEOData = {
    title: `${serviceName} - ${serviceCategory} Services | Zion Tech Group`,
    description: serviceDescription,
    keywords: `${serviceName}, ${serviceCategory}, AI services, technology solutions, Zion Tech Group`,
    ogType: 'service',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: serviceDescription,
      category: serviceCategory,
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com'
      },
      ...(pricing && {
        offers: {
          '@type': 'Offer',
          price: pricing,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      }),
      ...(features.length > 0 && {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${serviceName} Features`,
          itemListElement: features.map(feature => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: feature
            }
          }))
        }
      })
    }
  };

  return (
    <SEOOptimizer data={{ ...serviceSEO, ...data }}>
      {children}
    </SEOOptimizer>
  );
};
