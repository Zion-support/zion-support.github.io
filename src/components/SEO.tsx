<<<<<<< HEAD
import React, { useEffect, useCallback } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce
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
<<<<<<< HEAD
  structuredData?: any;
  canonicalUrl?: string;
  robots?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  enableStructuredData?: boolean;
  enableSocialMedia?: boolean;
  enableAnalytics?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Solutions & Digital Transformation',
  description = 'Transform your business with cutting-edge AI solutions, quantum computing, and digital transformation services. Expert IT consulting and innovative technology solutions.',
  keywords = [
    'AI solutions',
    'quantum computing',
    'digital transformation',
    'IT consulting',
    'cybersecurity',
    'cloud services',
    'machine learning',
    'artificial intelligence',
    'business technology',
    'enterprise solutions'
  ],
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
=======
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
  structuredData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI, Quantum Computing & Micro SAAS Solutions',
  description = 'Transform your business with cutting-edge AI solutions, quantum computing platforms, and innovative micro SAAS services. Expert digital transformation and technology consulting.',
  keywords = ['AI Solutions', 'Quantum Computing', 'Micro SAAS', 'Digital Transformation', 'Cybersecurity', 'Cloud Computing', 'Technology Consulting'],
  image = '/images/zion-tech-group-og.jpg',
  url,
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
<<<<<<< HEAD
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  robots = 'index, follow',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  enableStructuredData = true,
  enableSocialMedia = true,
  enableAnalytics = true
}) => {
  // Generate structured data for the page
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData) return null;
=======
  section = 'Technology',
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  language = 'en',
  structuredData
}) => {
  const location = useLocation();
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const currentUrl = url || `${siteUrl}${location.pathname}`;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : currentUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Update document meta tags dynamically
  useEffect(() => {
    // Update title
    document.title = fullTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);
    
    // Update robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    const robotsContent = [];
    if (noindex) robotsContent.push('noindex');
    if (nofollow) robotsContent.push('nofollow');
    if (robotsContent.length === 0) robotsContent.push('index', 'follow');
    robotsMeta.setAttribute('content', robotsContent.join(', '));
  }, [fullTitle, description, keywords, fullCanonical, noindex, nofollow]);
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'Organization',
      name: title,
      description: description,
      url: url,
      logo: `${url}/images/zion-tech-group-logo.png`,
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://www.facebook.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        email: 'info@ziontechgroup.com'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Innovation Drive',
        addressLocality: 'Tech City',
        addressRegion: 'TC',
        postalCode: '12345',
        addressCountry: 'US'
      }
    };

<<<<<<< HEAD
    if (type === 'article') {
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: title,
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: `${url}/images/zion-tech-group-logo.png`
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        articleSection: section,
        keywords: keywords.join(', '),
        image: image,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url
        }
      };
    }

    return baseStructuredData;
  }, [
    enableStructuredData,
    type,
    title,
    description,
    url,
    author,
    publishedTime,
    modifiedTime,
    section,
    keywords,
    image
  ]);

  // Generate FAQ structured data if applicable
  const generateFAQStructuredData = useCallback(() => {
    if (!enableStructuredData || type !== 'article') return null;

    // This would be populated with actual FAQ data
    const faqData = [
      {
        question: 'What services does Zion Tech Group offer?',
        answer: 'Zion Tech Group offers comprehensive AI solutions, quantum computing services, digital transformation consulting, IT infrastructure, and cybersecurity services.'
      },
      {
        question: 'How can AI transform my business?',
        answer: 'AI can automate processes, provide insights from data, improve customer experience, optimize operations, and create new business opportunities.'
      }
    ];

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }, [enableStructuredData, type]);

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableStructuredData) return null;

    const breadcrumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: url
      }
    ];

    if (section) {
      breadcrumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: section,
        item: `${url}/${section.toLowerCase().replace(/\s+/g, '-')}`
      });
    }

    breadcrumbs.push({
      '@type': 'ListItem',
      position: breadcrumbs.length + 1,
      name: title,
      item: url
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs
    };
  }, [enableStructuredData, url, section, title]);

  // Add performance optimization hints
  const addPerformanceHints = useCallback(() => {
    if (!enableAnalytics) return;

    // Preconnect to external domains
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    preconnectLinks.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for additional domains
    const dnsPrefetchDomains = [
      'https://cdn.jsdelivr.net',
      'https://unpkg.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enableAnalytics]);

  // Effect for performance hints
  useEffect(() => {
    addPerformanceHints();
  }, [addPerformanceHints]);

  // Generate meta tags
  const generateMetaTags = useCallback(() => {
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: author },
      { name: 'robots', content: robots },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3B82F6' }
    ];

    if (canonicalUrl) {
      metaTags.push({ name: 'canonical', content: canonicalUrl });
    }

    return metaTags;
  }, [description, keywords, author, robots, canonicalUrl]);

  // Generate Open Graph tags
  const generateOpenGraphTags = useCallback(() => {
    if (!enableSocialMedia) return [];

    return [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' }
    ];
  }, [enableSocialMedia, title, description, ogType, url, image]);

  // Generate Twitter Card tags
  const generateTwitterTags = useCallback(() => {
    if (!enableSocialMedia) return [];

    return [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:site', content: twitterSite },
      { name: 'twitter:creator', content: twitterCreator },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];
  }, [enableSocialMedia, twitterCard, twitterSite, twitterCreator, title, description, image]);

  // Generate additional meta tags
  const generateAdditionalMetaTags = useCallback(() => {
    const additionalTags = [
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'msapplication-TileColor', content: '#3B82F6' },
      { name: 'msapplication-config', content: '/browserconfig.xml' }
    ];

    if (publishedTime) {
      additionalTags.push({ property: 'article:published_time', content: publishedTime });
    }

    if (modifiedTime) {
      additionalTags.push({ property: 'article:modified_time', content: modifiedTime });
    }

    if (tags.length > 0) {
      tags.forEach(tag => {
        additionalTags.push({ property: 'article:tag', content: tag });
      });
    }

    return additionalTags;
  }, [publishedTime, modifiedTime, tags]);

  // Generate link tags
  const generateLinkTags = useCallback(() => {
    const linkTags = [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3B82F6' }
    ];

    if (canonicalUrl) {
      linkTags.push({ rel: 'canonical', href: canonicalUrl });
    }

    return linkTags;
  }, [canonicalUrl]);

  // Generate analytics script
  const generateAnalyticsScript = useCallback(() => {
    if (!enableAnalytics) return null;

    return (
      <>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </script>
        
        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </script>
      </>
    );
  }, [enableAnalytics]);

  // Generate Google Tag Manager noscript
  const generateGTMNoscript = useCallback(() => {
    if (!enableAnalytics) return null;

    return (
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    );
  }, [enableAnalytics]);
=======
  // Website structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteUrl,
    "description": "Leading technology solutions provider specializing in AI, quantum computing, and micro SAAS services",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Current page structured data
  const currentPageStructuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebPage',
    "name": title,
    "description": description,
    "url": currentUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/zion-tech-group-logo.png`
      }
    },
    "author": {
      "@type": "Organization",
      "name": author
    },
    ...(publishedTime && { "datePublished": publishedTime }),
    ...(modifiedTime && { "dateModified": modifiedTime }),
    ...(section && { "articleSection": section }),
    ...(tags.length > 0 && { "keywords": tags.join(', ') })
  };

  // Merge custom structured data with defaults
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : [defaultStructuredData, websiteStructuredData, currentPageStructuredData];
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce

  return (
    <Helmet>
      {/* Basic Meta Tags */}
<<<<<<< HEAD
      <title>{title}</title>
      {generateMetaTags().map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* Open Graph Tags */}
      {generateOpenGraphTags().map((tag, index) => (
        <meta key={`og-${index}`} {...tag} />
      ))}

      {/* Twitter Card Tags */}
      {generateTwitterTags().map((tag, index) => (
        <meta key={`twitter-${index}`} {...tag} />
      ))}

      {/* Additional Meta Tags */}
      {generateAdditionalMetaTags().map((tag, index) => (
        <meta key={`additional-${index}`} {...tag} />
      ))}

      {/* Link Tags */}
      {generateLinkTags().map((tag, index) => (
        <link key={index} {...tag} />
      ))}

      {/* Structured Data */}
      {enableStructuredData && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(generateStructuredData())}
          </script>
          {generateFAQStructuredData() && (
            <script type="application/ld+json">
              {JSON.stringify(generateFAQStructuredData())}
            </script>
          )}
          {generateBreadcrumbStructuredData() && (
            <script type="application/ld+json">
              {JSON.stringify(generateBreadcrumbStructuredData())}
            </script>
          )}
        </>
      )}

      {/* Analytics Scripts */}
      {generateAnalyticsScript()}
      {generateGTMNoscript()}
=======
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="language" content={language} />
      <meta name="robots" content={noindex || nofollow ? `${noindex ? 'noindex' : ''}${nofollow ? ',nofollow' : ''}`.replace(/^,/, '') : 'index,follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect and DNS Prefetch */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce
    </Helmet>
  );
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="AI-Powered Business Solutions & Quantum Computing | Zion Tech Group"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity."
      keywords="AI business solutions, quantum computing, autonomous operations, digital transformation, IT services, cybersecurity, machine learning, neural networks"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Zion Tech Group - AI-Powered Business Solutions",
        "description": "Leading provider of AI-powered business solutions, quantum computing, and innovative IT services for digital transformation.",
        "url": "https://ziontechgroup.com",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "AI-powered business solutions and quantum computing services"
        }
      }}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      ogType="website"
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
      ogType="website"
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
      author={author}
      canonical={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
      ogImage={image}
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
