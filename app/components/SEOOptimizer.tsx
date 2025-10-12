'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  keywords = 'AI solutions, artificial intelligence, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Add structured data to page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [structuredData]);

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = pathSegments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: `https://ziontechgroup.com/${pathSegments.slice(0, index + 1).join('/')}`
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        },
        ...breadcrumbItems
      ]
    };
  };

  // Generate FAQ structured data
  const generateFAQStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zion Tech Group offers comprehensive AI solutions, IT services, 5G implementation, cloud migration, cybersecurity, mobile development, and micro SAAS platforms for businesses of all sizes.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us at +1 (302) 464-0950, email us at kleber@ziontechgroup.com, or visit our office at 364 E Main St STE 1008, Middletown, DE 19709.'
          }
        },
        {
          '@type': 'Question',
          name: 'What makes Zion Tech Group different?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We combine cutting-edge AI technology with deep industry expertise, offering 99.8% client satisfaction, 24/7 support, and proven track record of successful implementations across various industries.'
          }
        }
      ]
    };
  };

  // Generate organization structured data
  const generateOrganizationStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: description,
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
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup'
      ]
    };
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || window.location.href} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(generateOrganizationStructuredData())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(generateBreadcrumbStructuredData())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(generateFAQStructuredData())}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;