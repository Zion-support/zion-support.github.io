import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile' | 'book';
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/images/zion-tech-group-og.jpg',
  ogImageAlt = 'Zion Tech Group - Revolutionary AI & Tech Solutions',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
  noFollow = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  additionalMeta = [],
  additionalLinks = []
}) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://ziontechgroup.com';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/images/zion-tech-group-logo.png`,
    "description": "Revolutionary AI services, quantum computing, and innovative tech solutions",
    "foundingDate": "2020",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "San Francisco",
      "addressRegion": "CA"
    }
  };

  // Merge with custom structured data
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      <meta 
        name="robots" 
        content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} 
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      
      {/* Article-specific meta tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}
      
      {/* Additional Links */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* PWA Meta Tags */}
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Helmet>
  );
};

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
