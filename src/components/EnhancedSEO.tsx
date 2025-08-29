import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  organization?: {
    name: string;
    url: string;
    logo: string;
    description: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint: {
      telephone: string;
      contactType: string;
      email: string;
    };
    sameAs: string[];
  };
  service?: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
    price: string;
    priceCurrency: string;
  };
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  image = '/images/zion-tech-group-og.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  organization = {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of AI-powered technology solutions, cloud services, and digital transformation consulting.',
    address: {
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Tech City',
      addressRegion: 'CA',
      postalCode: '90210',
      addressCountry: 'US'
    },
    contactPoint: {
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://www.facebook.com/ziontechgroup'
    ]
  },
  service
}) => {
  useEffect(() => {
    // Inject structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        // Organization schema
        {
          '@type': 'Organization',
          '@id': `${organization.url}#organization`,
          name: organization.name,
          url: organization.url,
          logo: {
            '@type': 'ImageObject',
            url: organization.logo
          },
          description: organization.description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: organization.address.streetAddress,
            addressLocality: organization.address.addressLocality,
            addressRegion: organization.address.addressRegion,
            postalCode: organization.address.postalCode,
            addressCountry: organization.address.addressCountry
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: organization.contactPoint.telephone,
            contactType: organization.contactPoint.contactType,
            email: organization.contactPoint.email
          },
          sameAs: organization.sameAs,
          foundingDate: '2020',
          numberOfEmployees: '100-500',
          industry: 'Technology',
          serviceArea: 'Worldwide'
        },
        // Website schema
        {
          '@type': 'WebSite',
          '@id': `${organization.url}#website`,
          url: organization.url,
          name: organization.name,
          description: organization.description,
          publisher: {
            '@id': `${organization.url}#organization`
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${organization.url}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        }
      ]
    };

    // Add service schema if provided
    if (service) {
      structuredData['@graph'].push({
        '@type': 'Service',
        '@id': `${organization.url}#service`,
        name: service.name,
        description: service.description,
        provider: {
          '@id': `${organization.url}#organization`
        },
        areaServed: service.areaServed,
        serviceType: service.serviceType,
        offers: {
          '@type': 'Offer',
          price: service.price,
          priceCurrency: service.priceCurrency,
          availability: 'https://schema.org/InStock'
        }
      });
    }

    // Add article schema if type is article
    if (type === 'article' && publishedTime) {
      structuredData['@graph'].push({
        '@type': 'Article',
        '@id': `${canonical || window.location.href}#article`,
        headline: title,
        description: description,
        image: image,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
          '@id': `${organization.url}#organization`
        },
        publisher: {
          '@id': `${organization.url}#organization`
        },
        mainEntityOfPage: {
          '@id': `${canonical || window.location.href}#webpage`
        },
        articleSection: section,
        keywords: tags?.join(', '),
        inLanguage: 'en-US'
      });
    }

    // Add breadcrumb schema
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const breadcrumbItems = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: organization.url
        }
      ];

      let currentUrl = organization.url;
      pathSegments.forEach((segment, index) => {
        currentUrl += `/${segment}`;
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: index + 2,
          name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          item: currentUrl
        });
      });

      structuredData['@graph'].push({
        '@type': 'BreadcrumbList',
        '@id': `${canonical || window.location.href}#breadcrumb`,
        itemListElement: breadcrumbItems
      });
    }

    // Inject the structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, canonical, image, type, publishedTime, modifiedTime, author, section, tags, organization, service]);

  const fullTitle = `${title} | ${organization.name}`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={organization.name} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={organization.name} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={organization.name} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.gpteng.co" />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'self';" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default EnhancedSEO;