import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
}

export function SEO({
  title,
  description,
  keywords,
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  ogType,
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup'
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const fullUrl = url || window.location.href;
  const fullCanonicalUrl = canonicalUrl || fullUrl;

  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions, IT services, and digital transformation consulting.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Business Intelligence",
            "description": "AI-powered analytics and business intelligence solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & DevOps",
            "description": "Cloud infrastructure and DevOps automation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity",
            "description": "Advanced cybersecurity and threat intelligence solutions"
          }
        }
      ]
    }
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType || type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      
      {/* Article Specific Meta Tags */}
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
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.ziontechgroup.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional Performance Optimizations */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Service Worker Registration */}
      <script>
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>
    </Helmet>
  );
}

// Specialized SEO components for different page types
export const HomePageSEO: React.FC = () => (
  <SEO
    title="Revolutionary AI & Tech Solutions"
    description="Discover cutting-edge AI services, quantum computing, and innovative tech solutions from Zion Tech Group. Transform your business with our advanced technology expertise."
    keywords="AI services, quantum computing, tech solutions, artificial intelligence, machine learning, digital transformation, Zion Tech Group"
    ogType="website"
    structuredData={{
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }}
  />
);

export const ServicesPageSEO: React.FC = () => (
  <SEO
    title="AI Services & Tech Solutions"
    description="Explore our comprehensive range of AI-powered services including contract analysis, supply chain optimization, cybersecurity, and healthcare diagnostics."
    keywords="AI services, contract analysis, supply chain optimization, cybersecurity, healthcare diagnostics, tech solutions"
    ogType="website"
    structuredData={{
      "@type": "Service",
      "name": "AI Services & Tech Solutions",
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "serviceType": "Artificial Intelligence Services",
      "areaServed": "Worldwide"
    }}
  />
);

export const BlogPostSEO: React.FC<{
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  tags: string[];
  image?: string;
}> = ({ title, description, publishedTime, modifiedTime, author, tags, image }) => (
  <SEO
    title={title}
    description={description}
    keywords={tags.join(', ')}
    ogType="article"
    ogImage={image || '/images/blog-default-og.jpg'}
    publishedTime={publishedTime}
    modifiedTime={modifiedTime}
    author={author}
    section="Technology"
    tags={tags}
    structuredData={{
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
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
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ziontechgroup.com/blog"
      }
    }}
  />
);

// SEO Hook for dynamic updates
export function useSEO(seoProps: SEOProps) {
  const [currentSEO, setCurrentSEO] = React.useState(seoProps);

  const updateSEO = React.useCallback((newProps: Partial<SEOProps>) => {
    setCurrentSEO(prev => ({ ...prev, ...newProps }));
  }, []);

  return { currentSEO, updateSEO };
}

// SEO Analytics Hook
export function useSEOAnalytics() {
  const trackPageView = React.useCallback((page: string, title: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: window.location.href,
        page_path: page
      });
    }
  }, []);

  const trackEvent = React.useCallback((action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }, []);

  return { trackPageView, trackEvent };
}
