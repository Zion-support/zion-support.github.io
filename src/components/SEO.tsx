import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Innovative AI & Technology Solutions',
  description = 'Leading provider of cutting-edge AI solutions, micro SAAS services, and innovative technology services. Transform your business with Zion Tech Group.',
  keywords = 'AI solutions, micro SAAS, technology services, artificial intelligence, business automation, cloud computing, cybersecurity, digital transformation',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}) => {
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-logo.png',
    description: 'Leading provider of innovative AI solutions and technology services',
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
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    offers: {
      '@type': 'Offer',
      category: 'Technology Services',
      description: 'AI solutions, micro SAAS services, and innovative technology services'
    }
  };

  // Service-specific structured data
  const serviceStructuredData = type === 'service' ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group'
    },
    areaServed: 'Worldwide',
    serviceType: 'Technology Services'
  } : null;

  // Article-specific structured data
  const articleStructuredData = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Organization',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/images/zion-logo.png'
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  } : null;

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ziontechgroup.com'
      },
      ...(section ? [{
        '@type': 'ListItem',
        position: 2,
        name: section,
        item: url
      }] : [])
    ]
  };

  // FAQ structured data for relevant pages
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Zion Tech Group offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zion Tech Group offers a comprehensive range of AI solutions, micro SAAS services, cloud computing, cybersecurity, and digital transformation services.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I contact Zion Tech Group?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact us at +1-302-464-0950 or email us at kleber@ziontechgroup.com. We\'re located at 364 E Main St STE 1008, Middletown DE 19709.'
        }
      },
      {
        '@type': 'Question',
        name: 'What makes Zion Tech Group unique?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in innovative AI-powered solutions, offer cutting-edge micro SAAS services, and provide personalized technology consulting to help businesses transform and grow.'
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.gpteng.co" />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>

      {serviceStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(serviceStructuredData)}
        </script>
      )}

      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>

      {/* Custom structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Additional Meta Tags for Business */}
      <meta name="business:contact:phone" content="+1-302-464-0950" />
      <meta name="business:contact:email" content="kleber@ziontechgroup.com" />
      <meta name="business:contact:address" content="364 E Main St STE 1008, Middletown DE 19709" />
      <meta name="business:contact:website" content="https://ziontechgroup.com" />
      <meta name="business:category" content="Technology Services" />
      <meta name="business:services" content="AI Solutions, Micro SAAS, Cloud Computing, Cybersecurity, Digital Transformation" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Performance Optimization */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.gpteng.co" />
      
      {/* Critical CSS for above-the-fold content */}
      <style>
        {`
          /* Critical CSS for performance */
          body { margin: 0; font-family: 'Orbitron', sans-serif; }
          .loading-spinner { display: flex; justify-content: center; align-items: center; min-height: 100vh; }
          .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
        `}
      </style>
    </Helmet>
  );
};
