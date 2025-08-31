import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading AI & Technology Solutions Provider',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Tech City',
      addressRegion: 'CA',
      postalCode: '90210',
      addressCountry: 'US'
    },
    founder: {
      '@type': 'Person',
      name: 'John Doe',
      jobTitle: 'CEO & Founder'
    },
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    serviceType: [
      'AI Solutions',
      'Quantum Computing',
      'Micro SAAS',
      'Technology Consulting',
      'Digital Transformation'
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update document title for better UX
    document.title = title;
    
    // Add meta description to document head if not present
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Add keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Add canonical URL if provided
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots Meta Tags */}
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Solutions',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          description: 'Advanced AI solutions for business transformation',
          category: 'Technology Services',
          areaServed: 'Worldwide',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI Services Catalog',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Business Intelligence',
                  description: 'Advanced business intelligence powered by artificial intelligence'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Compliance Assistant',
                  description: 'Automated compliance monitoring and reporting'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Sales Copilot',
                  description: 'Intelligent sales automation and optimization'
                }
              }
            ]
          }
        })}
      </script>
      
      {/* FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What services does Zion Tech Group offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Zion Tech Group offers comprehensive AI solutions, quantum computing services, micro SAAS platforms, and technology consulting services.'
              }
            },
            {
              '@type': 'Question',
              name: 'How can AI solutions benefit my business?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'AI solutions can automate processes, provide insights from data, improve customer experience, and drive operational efficiency.'
              }
            },
            {
              '@type': 'Question',
              name: 'What industries do you serve?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We serve various industries including healthcare, finance, manufacturing, retail, and technology sectors.'
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
