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
  structuredData?: object;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTag?: string[];
  organization?: {
    name: string;
    url: string;
    logo: string;
    sameAs: string[];
  };
  website?: {
    name: string;
    url: string;
    potentialAction: {
      type: string;
      target: string;
      queryInput: string;
    };
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  localBusiness?: {
    name: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo: {
      latitude: number;
      longitude: number;
    };
    telephone: string;
    email: string;
    url: string;
    sameAs: string[];
  };
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/images/zion-tech-group-og.jpg',
  canonical,
  noindex = false,
  structuredData,
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleTag,
  organization,
  website,
  breadcrumbs,
  faq,
  localBusiness
}) => {
  // Default organization data
  const defaultOrganization = {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/favicon.svg',
    sameAs: [
      'https://www.linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  };

  // Default website data
  const defaultWebsite = {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    potentialAction: {
      type: 'SearchAction',
      target: 'https://ziontechgroup.com/search?q={search_term_string}',
      queryInput: 'required name=search_term_string'
    }
  };

  // Generate structured data
  const generateStructuredData = () => {
    const data: any[] = [];

    // Organization schema
    if (organization || defaultOrganization) {
      const orgData = organization || defaultOrganization;
      data.push({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: orgData.name,
        url: orgData.url,
        logo: orgData.logo,
        sameAs: orgData.sameAs,
        description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
        brand: {
          '@type': 'Brand',
          name: orgData.name
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'info@ziontechgroup.com'
        }
      });
    }

    // Website schema
    if (website || defaultWebsite) {
      const webData = website || defaultWebsite;
      data.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: webData.name,
        url: webData.url,
        potentialAction: webData.potentialAction
      });
    }

    // Article schema (if applicable)
    if (ogType === 'article' && articleAuthor) {
      data.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        author: {
          '@type': 'Person',
          name: articleAuthor
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/favicon.svg'
          }
        },
        ...(articlePublishedTime && { datePublished: articlePublishedTime }),
        ...(articleModifiedTime && { dateModified: articleModifiedTime }),
        ...(articleSection && { articleSection }),
        ...(articleTag && { keywords: articleTag.join(', ') })
      });
    }

    // Breadcrumb schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      data.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      });
    }

    // FAQ schema
    if (faq && faq.length > 0) {
      data.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      });
    }

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
