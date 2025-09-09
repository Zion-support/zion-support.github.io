import React, { useEffect } from 'react';
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
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. Transform your business with cutting-edge technology.',
  keywords = [
    'AI Services',
    'Quantum Computing',
    'Cybersecurity',
    'Digital Transformation',
    'IT Consulting',
    'Machine Learning',
    'Blockchain Solutions',
    'Cloud Services',
    'Zion Tech Group'
  ],
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || `${url}${window.location.pathname}`;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;

  useEffect(() => {
    // Update document title for better UX
    document.title = fullTitle;
    
    // Add structured data for better search engine understanding
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/images/zion-logo.png',
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
        email: 'kleber@ziontechgroup.com',
        contactType: 'customer service'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://facebook.com/ziontechgroup'
      ],
      ...(type === 'article' && {
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
            url: 'https://ziontechgroup.com/images/zion-logo.png'
          }
        },
        ...(publishedTime && { datePublished: publishedTime }),
        ...(modifiedTime && { dateModified: modifiedTime }),
        ...(section && { articleSection: section }),
        ...(tags.length > 0 && { keywords: tags.join(', ') })
      })
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [fullTitle, description, type, author, publishedTime, modifiedTime, section, tags]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="React + Vite" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Business Information */}
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Contact Information */}
      <meta name="contact:phone" content="+1-302-464-0950" />
      <meta name="contact:email" content="kleber@ziontechgroup.com" />
      <meta name="contact:address" content="364 E Main St STE 1008, Middletown DE 19709" />
      
      {/* Service Categories */}
      <meta name="service:ai" content="AI Services, Machine Learning, Neural Networks" />
      <meta name="service:quantum" content="Quantum Computing, Quantum Algorithms" />
      <meta name="service:cybersecurity" content="Cybersecurity, Threat Detection, Security Compliance" />
      <meta name="service:it" content="IT Consulting, Digital Transformation, Cloud Services" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Zion Tech Group',
          image: 'https://ziontechgroup.com/images/zion-tech-group-building.jpg',
          '@id': 'https://ziontechgroup.com',
          url: 'https://ziontechgroup.com',
          telephone: '+1-302-464-0950',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 39.4496,
            longitude: -75.7163
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            opens: '09:00',
            closes: '18:00'
          },
          sameAs: [
            'https://linkedin.com/company/zion-tech-group',
            'https://twitter.com/ziontechgroup',
            'https://facebook.com/ziontechgroup'
          ]
        })}
      </script>
    </Helmet>
  );
};