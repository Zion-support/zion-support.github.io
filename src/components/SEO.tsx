import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
  alternateLanguages?: Array<{ lang: string; url: string }>;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  msTileColor?: string;
  msConfig?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/images/zion-tech-group-og.jpg',
  canonical,
  noindex = false,
  nofollow = false,
  language = 'en',
  alternateLanguages = [],
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  viewport = 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor = '#22ddd2',
  manifest = '/manifest.json',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  msTileColor = '#22ddd2',
  msConfig = '/browserconfig.xml',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) {
  
  // Generate canonical URL
  const canonicalUrl = React.useMemo(() => {
    if (canonical) return canonical;
    if (typeof window !== 'undefined') {
      return window.location.origin + window.location.pathname;
    }
  }, [canonical]);
    }
  };



    // Local Business schema
    if (localBusiness) {
      data.push({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: localBusiness.name,
        address: {
          '@type': 'PostalAddress',
          ...localBusiness.address
        },
        geo: {
          '@type': 'GeoCoordinates',
          ...localBusiness.geo
        },
        telephone: localBusiness.telephone,
        email: localBusiness.email,
        url: localBusiness.url,
        sameAs: localBusiness.sameAs
      });
    }

    // Custom structured data
    if (structuredData) {
      data.push(structuredData);
    }

    return data;
  };

  // Generate meta description with optimal length
  const generateOptimalDescription = (desc: string) => {
    if (desc.length <= 160) return desc;
    
    // Try to cut at sentence boundary
    const sentences = desc.split(/[.!?]+/);
    let optimalDesc = '';
    
    for (const sentence of sentences) {
      const testDesc = optimalDesc + sentence + '.';
      if (testDesc.length <= 160) {
        optimalDesc = testDesc;
      } else {
        break;
      }
    }
    
    return optimalDesc || desc.substring(0, 157) + '...';
  };

  // Generate optimal title
  const generateOptimalTitle = (titleText: string) => {
    if (titleText.length <= 60) return titleText;
    return titleText.substring(0, 57) + '...';
  };

  const optimalTitle = generateOptimalTitle(title);
  const optimalDescription = generateOptimalDescription(description);
  const structuredDataArray = generateStructuredData();

  // Update document title for better UX
  useEffect(() => {
    document.title = optimalTitle;
  }, [optimalTitle]);

  // Add meta viewport for better mobile SEO
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{optimalTitle}</title>
      <meta name="description" content={optimalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={optimalTitle} />
      <meta property="og:description" content={optimalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {ogType === 'article' && (
        <>
          {articleAuthor && <meta property="article:author" content={articleAuthor} />}
          {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
          {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
          {articleTag && articleTag.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={optimalTitle} />
      <meta name="twitter:description" content={optimalDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="color-scheme" content="dark light" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      {structuredDataArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="React + Vite" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Language and region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.country" content="United States" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance and PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Additional Open Graph tags for better social sharing */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Zion Tech Group`} />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="de_DE" />
      
      {/* Twitter additional tags */}
      <meta name="twitter:image:alt" content={`${title} - Zion Tech Group`} />
      
      {/* Business specific meta tags */}
      <meta name="business:contact:street_address" content="123 Tech Street" />
      <meta name="business:contact:locality" content="San Francisco" />
      <meta name="business:contact:region" content="CA" />
      <meta name="business:contact:postal_code" content="94105" />
      <meta name="business:contact:country_name" content="United States" />
      <meta name="business:contact:phone_number" content="+1-555-123-4567" />
      <meta name="business:contact:email" content="info@ziontechgroup.com" />
      <meta name="business:contact:website" content="https://ziontechgroup.com" />
      
      {/* Industry specific meta tags */}
      <meta name="industry" content="Technology, AI, Cybersecurity, Cloud Computing" />
      <meta name="category" content="Technology Services" />
      <meta name="classification" content="Business Services" />
      
      {/* Content type and format */}
      <meta name="content-type" content="text/html" />
      <meta name="content-language" content="en" />
      <meta name="content-format" content="text/html" />
      
      {/* Cache control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=3600" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />

  // Enhanced structured data with more comprehensive information
  const defaultStructuredData = React.useMemo((): Record<string, any> => {
    const baseUrl = 'https://ziontechgroup.com';
    
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: baseUrl,
      logo: `${baseUrl}/images/zion-logo.png`,
      description: 'Revolutionary AI & Technology Solutions Provider',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1 302 464 0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
        availableLanguage: ['English', 'Spanish']
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://facebook.com/ziontechgroup',
        'https://instagram.com/ziontechgroup'
      ],
      founder: {
        '@type': 'Person',
        name: 'Kleber',
        jobTitle: 'CEO & Founder'
      },
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      serviceType: [
        'AI Services',
        'Cloud Computing',
        'Digital Transformation',
        'Cybersecurity',
        'Data Analytics'
      ],
      areaServed: ['United States', 'Global'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI-Powered Solutions'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Infrastructure'
            }
          }
        ]
      }
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: baseUrl,
      description: 'Revolutionary AI & Technology Solutions',
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    return structuredData || {
      '@context': 'https://schema.org',
      '@graph': [organizationSchema, websiteSchema]
    };
  }, [structuredData]);

  // Enhanced meta tags for better SEO
  const metaTags = [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: author },
    { name: 'robots', content: robots },
    { name: 'viewport', content: viewport },
    { name: 'theme-color', content: themeColor },
    { name: 'msapplication-TileColor', content: msTileColor },
    
    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: title },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: language },
    
    // Twitter Card tags
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:site', content: '@ziontechgroup' },
    { name: 'twitter:creator', content: '@ziontechgroup' },
    
    // Additional meta tags for better SEO
    { name: 'application-name', content: 'Zion Tech Group' },
    { name: 'apple-mobile-web-app-title', content: 'Zion Tech' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    
    // Security and performance
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
    { 'http-equiv': 'X-Frame-Options', content: 'SAMEORIGIN' },
    { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
    { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
  ];

  // Add article-specific meta tags if available
  if (publishedTime) {
    metaTags.push(
      { property: 'article:published_time', content: publishedTime },
      { property: 'og:article:published_time', content: publishedTime }
    );
  }

  if (modifiedTime) {
    metaTags.push(
      { property: 'article:modified_time', content: modifiedTime },
      { property: 'og:article:modified_time', content: modifiedTime }
    );
  }

  if (section) {
    metaTags.push(
      { property: 'article:section', content: section },
      { property: 'og:article:section', content: section }
    );
  }

  if (tags.length > 0) {
    metaTags.push(
      { property: 'article:tag', content: tags.join(', ') },
      { property: 'og:article:tag', content: tags.join(', ') }
    );
  }

  // Add language alternates if available
  const linkTags = [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'icon', type: 'image/x-icon', href: favicon },
    { rel: 'apple-touch-icon', href: appleTouchIcon },
    { rel: 'manifest', href: manifest },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
  ];

  // Add language alternates
  alternateLanguages.forEach(({ lang, url }) => {
    linkTags.push({ rel: 'alternate', hrefLang: lang, href: url });
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Link tags */}
      {linkTags.map((tag, index) => (
        <link key={index} {...tag} />
      ))}
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      {/* Additional meta tags for noindex/nofollow */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/zion-logo.png" as="image" />
      
      {/* Security headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />

    </Helmet>
  );
};

// SEO hook for dynamic updates
export const useSEO = (seoProps: SEOProps) => {
  useEffect(() => {
    // Update meta tags dynamically
    const updateMetaTags = () => {
      // Update title
      if (document.title !== seoProps.title) {
        document.title = seoProps.title;
      }
      
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && metaDesc.getAttribute('content') !== seoProps.description) {
        metaDesc.setAttribute('content', seoProps.description);
      }
      
      // Update canonical
      if (seoProps.canonical) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', seoProps.canonical);
      }
    };

    updateMetaTags();
  }, [seoProps]);

  return null;
};

// SEO optimization utilities
export const SEOUtils = {
  // Generate meta description from content
  generateDescription: (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    
    const sentences = cleanContent.split(/[.!?]+/);
    let result = '';
    
    for (const sentence of sentences) {
      const testResult = result + sentence + '.';
      if (testResult.length <= maxLength) {
        result = testResult;
      } else {
        break;
      }
    }
    
    return result || cleanContent.substring(0, maxLength - 3) + '...';
  },

  // Generate keywords from content
  generateKeywords: (content: string, maxKeywords: number = 10): string => {
    const words = content.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);
    
    const wordCount: { [key: string]: number } = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word)
      .join(', ');
  },

  // Validate meta description length
  validateDescription: (description: string): { isValid: boolean; length: number; maxLength: number } => {
    const maxLength = 160;
    return {
      isValid: description.length <= maxLength,
      length: description.length,
      maxLength
    };
  },

  // Validate title length
  validateTitle: (title: string): { isValid: boolean; length: number; maxLength: number } => {
    const maxLength = 60;
    return {
      isValid: title.length <= maxLength,
      length: title.length,
      maxLength
    };
  }
};

export function HomePageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      type="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Technology Services",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": "AI Solutions, Quantum Computing, IT Services",
        "description": "Comprehensive technology services including AI, quantum computing, and IT infrastructure"
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions"
      description="Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation."
      keywords="contact Zion Tech Group, AI consulting, quantum computing consulting, IT consulting, digital transformation consulting"
      type="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Zion Tech Group",
        "description": "Get in touch with Zion Tech Group for technology consulting and solutions",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          }
        }
      }}
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  author, 
  publishedDate, 
  image, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}) {
  return (
    <SEO
      title={title}
      description={description}
      image={image}
      url={`https://ziontechgroup.com/blog/${slug}`}
      type="article"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
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
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ziontechgroup.com/blog/${slug}`
        }
      }}
    />
  );
}
