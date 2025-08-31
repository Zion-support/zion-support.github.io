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
        keywords: [...keywords, ...tags].join(', '),
        image: image
      };
    }

    if (type === 'product' || type === 'service') {
      return {
        ...baseStructuredData,
        '@type': type === 'product' ? 'Product' : 'Service',
        name: title,
        description: description,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
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
    tags,
    image
  ]);

  // Generate breadcrumb structured data
  const generateBreadcrumbData = useCallback(() => {
    if (!enableStructuredData) return null;

    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: url
      }
    ];

    let currentUrl = url;
    pathSegments.forEach((segment, index) => {
      currentUrl += `/${segment}`;
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: currentUrl
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    };
  }, [enableStructuredData, url]);

  // Generate FAQ structured data
  const generateFAQData = useCallback(() => {
    if (!enableStructuredData) return null;

    const faqs = [
      {
        question: 'What AI services does Zion Tech Group offer?',
        answer: 'We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics for businesses.'
      },
      {
        question: 'How can Zion Tech Group help with digital transformation?',
        answer: 'Our digital transformation services include cloud migration, DevOps implementation, security enhancement, and compliance management to modernize your infrastructure.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve healthcare, financial services, manufacturing, retail, transportation, logistics, education, and government sectors with tailored solutions.'
      }
    ];

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }, [enableStructuredData]);

  // Generate organization structured data
  const generateOrganizationData = useCallback(() => {
    if (!enableStructuredData) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      alternateName: 'Zion Tech',
      description: 'Leading provider of AI-powered solutions and digital transformation services',
      url: url,
      logo: `${url}/images/zion-tech-group-logo.png`,
      foundingDate: '2020',
      numberOfEmployees: '100-500',
      industry: 'Technology',
      serviceType: [
        'AI Solutions',
        'Digital Transformation',
        'IT Consulting',
        'Cybersecurity',
        'Cloud Services'
      ],
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Solutions',
              description: 'Comprehensive artificial intelligence services'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Transformation',
              description: 'End-to-end digital transformation consulting'
            }
          }
        ]
      }
    };
  }, [enableStructuredData, url]);

  // Analytics tracking
  useEffect(() => {
    if (enableAnalytics && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: url,
        page_path: window.location.pathname
      });
    }
  }, [enableAnalytics, title, url]);

  const structuredDataArray = [
    generateStructuredData(),
    generateBreadcrumbData(),
    generateFAQData(),
    generateOrganizationData()
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      {enableSocialMedia && (
        <>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content={ogType} />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta property="og:locale" content="en_US" />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      {enableSocialMedia && (
        <>
          <meta name="twitter:card" content={twitterCard} />
          <meta name="twitter:site" content={twitterSite} />
          <meta name="twitter:creator" content={twitterCreator} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      {structuredDataArray.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Custom structured data if provided */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
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
