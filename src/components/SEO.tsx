import React, { useEffect } from 'react';
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
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

interface StructuredData {
  '@context': string;
  '@type': string;
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': string;
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  address?: {
    '@type': string;
    addressCountry: string;
    addressLocality: string;
    addressRegion: string;
  };
  founder?: {
    '@type': string;
    name: string;
  };
  foundingDate?: string;
  numberOfEmployees?: string;
  industry?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Business Solutions & IT Services',
  description = 'Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Expert cloud, DevOps, and digital transformation services.',
  keywords = [
    'AI solutions',
    'business intelligence',
    'IT services',
    'cloud computing',
    'DevOps',
    'digital transformation',
    'machine learning',
    'data analytics',
    'cybersecurity',
    'enterprise software'
  ],
  image = '/images/zion-tech-group-og.jpg',
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  // Default structured data for Zion Tech Group
  const defaultStructuredData: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered business solutions and comprehensive IT services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-ZION-TECH',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'San Francisco',
      addressRegion: 'CA'
    },
    founder: {
      '@type': 'Person',
      name: 'Zion Tech Group Team'
    },
    foundingDate: '2020',
    numberOfEmployees: '100+',
    industry: 'Technology'
  };

  // Generate structured data based on page type
  const generateStructuredData = (): StructuredData => {
    switch (type) {
      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          name: title,
          description,
          url: currentUrl,
          author: {
            '@type': 'Organization',
            name: author
          },
          publisher: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            logo: {
              '@type': 'ImageObject',
              url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png'
            }
          },
          datePublished: publishedTime,
          dateModified: modifiedTime,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl
          }
        } as any;
      
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: title,
          description,
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          areaServed: 'Worldwide',
          serviceType: section || 'Technology Service'
        } as any;
      
      default:
        return defaultStructuredData;
    }
  };

  // Add breadcrumb structured data
  const generateBreadcrumbData = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return null;

    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ziontechgroup.com'
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name,
        item: `https://ziontechgroup.com${currentPath}`
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    };
  };

  // Add FAQ structured data if on FAQ page
  const generateFAQData = () => {
    if (location.pathname === '/faq') {
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does Zion Tech Group offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Zion Tech Group offers comprehensive AI solutions, IT services, cloud computing, DevOps, cybersecurity, and digital transformation services.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can AI improve my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI can automate processes, provide insights from data, improve customer experience, and drive innovation across your organization.'
            }
          }
        ]
      };
    }
    return null;
  };

  // Add organization structured data
  const generateOrganizationData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      alternateName: 'Zion Tech',
      description: 'AI-powered business solutions and IT services provider',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-ZION-TECH',
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: 'English'
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressLocality: 'San Francisco',
        addressRegion: 'CA'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://facebook.com/ziontechgroup'
      ]
    };
  };

  // Generate all structured data
  const structuredData = [
    generateStructuredData(),
    generateBreadcrumbData(),
    generateFAQData(),
    generateOrganizationData()
  ].filter(Boolean);

  // Add meta tags for social media
  useEffect(() => {
    // Add Open Graph meta tags
    const addMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Add Twitter Card meta tags
    const addTwitterMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Open Graph tags
    addMetaTag('og:title', title);
    addMetaTag('og:description', description);
    addMetaTag('og:image', image);
    addMetaTag('og:url', currentUrl);
    addMetaTag('og:type', type);
    addMetaTag('og:site_name', 'Zion Tech Group');

    // Twitter Card tags
    addTwitterMetaTag('twitter:card', 'summary_large_image');
    addTwitterMetaTag('twitter:title', title);
    addTwitterMetaTag('twitter:description', description);
    addTwitterMetaTag('twitter:image', image);
    addTwitterMetaTag('twitter:site', '@ziontechgroup');

    // Additional meta tags
    addMetaTag('article:author', author);
    if (publishedTime) addMetaTag('article:published_time', publishedTime);
    if (modifiedTime) addMetaTag('article:modified_time', modifiedTime);
    if (section) addMetaTag('article:section', section);
    tags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'article:tag');
      meta.setAttribute('content', tag);
      document.head.appendChild(meta);
    });
  }, [title, description, image, currentUrl, type, author, publishedTime, modifiedTime, section, tags]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Theme and Color */}
      <meta name="theme-color" content="#2e73ea" />
      <meta name="msapplication-TileColor" content="#2e73ea" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Helmet>
  );
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
