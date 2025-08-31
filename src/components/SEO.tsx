import React, { useEffect, useCallback } from 'react';
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
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
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

  return (
    <Helmet>
      {/* Basic Meta Tags */}
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
