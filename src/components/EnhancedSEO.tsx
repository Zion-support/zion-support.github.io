<<<<<<< HEAD
export const EnhancedSEO: React.FC<SEOProps> = ({;
  title = 'Zion Tech Group - Leading AI Solutions & Technology Services',;
  description = 'Transform your business with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Expert technology consulting and digital transformation.',;
  keywords = 'AI solutions, quantum computing, micro SAAS, digital transformation, technology consulting, machine learning, cybersecurity, cloud services',;
  image = '/images/zion-tech-group-og.jpg',;
  url = 'https://ziontechgroup.com',;
  type = 'website',;
  image,;
  url,;
  author = 'Zion Tech Group',;
  publishedTime,;
  modifiedTime,;
  author = 'Zion Tech Group',;
  section,;
  tags = [],;
    'AI solutions',cloud computing',cybersecurity',digital transformation',machine learning',quantum computing',IoT',blockchain',micro-SaaS',enterprise software',Zion Tech Group';
  ];
;
  // Combine all structured data;
  // Generate meta keywords;
  const defaultStructuredData = {;
  "@context": "https://schema.org",";"@type": "Organization",";"name": "Zion Tech Group",";"url": "https://ziontechgroup.com",";"logo": "https://ziontechgroup.com/images/zion-logo.png",";"description": "Leading provider of AI-powered technology solutions, cloud computing, and cybersecurity services.",;
  noindex = false,;
  canonical}) => {;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;`;"
  // Structured data for better SEO;""
  const structuredData = {";";""
    "@context": "https://schema.org",";"@type": type === 'website' ? "Organization" : "Article",";"name": "Zion Tech Group",";"url": url,"`";"logo": `${url}/images/zion-tech-group-logo.png`,";"description": description,";"foundingDate": "2020",";"address": {";";""
      "@type": "PostalAddress",";"streetAddress": "123 Tech Street",";"addressLocality": "Digital City",";"addressRegion": "Tech State",";"postalCode": "12345",";"addressCountry": "US";""
    },";""
    "contactPoint": {";";""
      "@type": "ContactPoint",";"telephone": "+1-555-123-4567",";"contactType": "customer service","`";"url": `${url}/contact`";""
    },";"sameAs": [";"https://linkedin.com/company/ziontechgroup",";"https://twitter.com/ziontechgroup",";"https://github.com/ziontechgroup";""
    ],";""
    "serviceType": [";"AI Solutions",";"Quantum Computing",";"Micro SAAS Services",";"Digital Transformation",";"Technology Consulting";""
    ]";""
    "sameAs": [;";"https://twitter.com/ziontechgroup",";"https://linkedin.com/company/ziontechgroup","https://facebook.com/ziontechgroup";""
    ],";"foundingDate": "2020",";"numberOfEmployees": "100+",";"serviceArea": "Worldwide",";"hasOfferCatalog": {";";""
      "@type": "OfferCatalog",";"name": "Technology Services",";"itemListElement": [;""
        {";";""
          "@type": "Offer",";"itemOffered": {";";""
            "@type": "Service",";"name": "AI Solutions",";"description": "Artificial Intelligence and Machine Learning services";
          };"
        },;""
        {";";""
          "@type": "Offer",";"itemOffered": {";";""
            "@type": "Service",";"name": "Cloud Computing",";"description": "Cloud infrastructure and DevOps services";
          };"
        },;""
        {";";""
          "@type": "Offer",";"itemOffered": {";";""
            "@type": "Service",";"name": "Cybersecurity",";"description": "Security and compliance solutions";
          };
        };
      ];
    };
  };
;
    // Preload critical images;
    if (ogImage) {;
      imageLink.rel = 'preload';
      imageLink.as = 'image';
      imageLink.href = ogImage;
      document.head.appendChild (imageLink) };
    // DNS prefetch for external domains;
    dnsPrefetchDomains.forEach(domain => {;
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link)});"
  }, [ogImage]);'  if (type === 'article') {;""
    Object.assign(structuredData, {";";""
      "@type": "Article",";"headline": title,";"author": {";";""
        "@type": "Person",";"name": author";""
      },";"publisher": {";";""
        "@type": "Organization",";"name": "Zion Tech Group",";"logo": {";";""
          "@type": "ImageObject","`";"url": `${url}/images/zion-tech-group-logo.png`;""
        }";""
      },";"datePublished": publishedTime,";"dateModified": modifiedTime,";"mainEntityOfPage": {";";""
        "@type": "WebPage",";"@id": fullUrl;
      };
    }) };"
  return();""
    <Helmet>";""
      {/* Basic Meta Tags */}";""
      <meta name="author" content="Zion Tech Group" / / / />";""
      <meta name="robots" content="index, follow" / / / />;";""
      {/* Canonical URL */}";""
      {canonical && <link rel="canonical" href={canonical} / / / />};";""
      {/* Open Graph Meta Tags */}";""
      <meta property="og:title" content={title} / / / />";""
      <meta property="og:description" content={description} / / / />";""
      <meta property="og:type" content={type} / / / />";""
      <meta property="og:url" content={url} / / / />";""
      <meta property="og:image" content={image} / / / />";""
      <meta property="og:site_name" content="Zion Tech Group" / / / />";""
      <meta property="og:locale" content="en_US" / / / />;";""
      {/* Twitter Card Meta Tags */}";""
      <meta name="twitter:card" content={twitterCard} / / / />";""
      <meta name="twitter:title" content={title} / / / />";""
      <meta name="twitter:description" content={description} / / / />";""
      <meta name="twitter:image" content={ogImage} / / / />";""
      <meta name="twitter:site" content="@ziontechgroup" / / / />;""
      {/* Additional SEO Meta Tags */}";""
      <title>{fullTitle}</title>";""
      <meta name="description" content={description} / / / />";""
      <meta name="keywords" content={keywords} / / / />";""
      <meta name="author" content={author} / / / />;";""
      {/* Robots */}";""
      {noindex && <meta name="robots" content="noindex, nofollow" / / / />};";""
      {/* Canonical URL */}";""
      <link rel="canonical" href={fullUrl} / / / />;";""
      {/* Open Graph */}";""
      <meta property="og:title" content={fullTitle} / / / />";""
      <meta property="og:description" content={description} / / / />";""
      <meta property="og:type" content={type} / / / />";""
      <meta property="og:url" content={fullUrl} / / / />'"`";""
      <meta property="og:image" content={image.startsWith('http') ? image : `${url}${image}`} / / / />";""
      <meta property="og:site_name" content="Zion Tech Group" / / / />";""
      <meta property="og:locale" content="en_US" / / / />;";""
      {/* Twitter Card */}";""
      <meta name="twitter:card" content="summary_large_image" / / / />";""
      <meta name="twitter:site" content="@ziontechgroup" / / / />";""
      <meta name="twitter:creator" content="@ziontechgroup" / / / />";""
      <meta name="twitter:title" content={fullTitle} / / / />";""
      <meta name="twitter:description" content={description} / / / />'"`";""
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${url}${image}`} / / / />;";""
      {/* Additional Meta Tags */}";""
      <meta name="viewport" content="width=device-width, initial-scale=1.0" / / / />";""
      <meta name="theme-color" content="#22ddd2" / / / />";""
      <meta name="msapplication-TileColor" content="#22ddd2" / / / />;";""
      {/* Preconnect to external domains for performance */}";""
      <link rel="preconnect" href="https://fonts.googleapis.com" / / / />";""
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" / / / />;";""
      {/* Additional SEO Meta Tags */}";""
      {publishedTime && <meta property="article:published_time" content={publishedTime} / / / />}";""
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} / / / />}";""
      {author && <meta property="article:author" content={author} / / / />}";""
      {section && <meta property="article:section" content={section} / / / />}";""
      {tags.map((tag, index) => (";""
        <meta key={index} property="article:tag" content={tag} / / / />;
      ))};
    </Helmet>;"
  )}}}}};";""
      {/* Favicon */}";""
      <link rel="icon" type="image/x-icon" href="/favicon.ico" / / / />";""
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" / / / />";""
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" / / / />";""
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" / / / />;";""
      {/* Manifest */}";""
      <link rel="manifest" href="/site.webmanifest" / / / />;";""
      {/* Structured Data */}";""
      <script type="application/ld+json">;
        {JSON.stringify(structuredData)};"
      </script>;";""
      {/* Additional SEO Meta Tags */}";""
      <meta name="application-name" content="Zion Tech Group" / / / />";""
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" / / / />";""
      <meta name="apple-mobile-web-app-capable" content="yes" / / / />";""
      <meta name="apple-mobile-web-app-status-bar-style" content="default" / / / />;";""
      {/* Security Headers */}";""
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" / / / />";""
      <meta httpEquiv="X-Frame-Options" content="DENY" / / / />";""
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" / / / />;";""
      {/* Performance Optimizations */}";""
      <meta name="format-detection" content="telephone=no" / / / />";""
      <meta name="mobile-web-app-capable" content="yes" / / / />;"
    </Helmet>;""
  )};";""
'"`";""
=======
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: any;
  noIndex?: boolean;
  noFollow?: boolean;
  language?: string;
  alternateLanguages?: { [key: string]: string };
  robots?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  msTileColor?: string;
  msConfig?: string;
}

interface EnhancedSEOProps {
  data: SEOData;
  children?: React.ReactNode;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ data, children }) => {
  const {
    title,
    description,
    keywords,
    author = 'Zion Tech Group',
    ogImage = '/images/zion-tech-group-og.jpg',
    ogUrl,
    canonicalUrl,
    twitterCard = 'summary_large_image',
    structuredData,
    noIndex = false,
    noFollow = false,
    language = 'en',
    alternateLanguages = {},
    robots,
    viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
    themeColor = '#3b82f6',
    manifest = '/manifest.json',
    appleTouchIcon = '/images/apple-touch-icon.png',
    favicon = '/favicon.ico',
    msTileColor = '#3b82f6',
    msConfig = '/browserconfig.xml'
  } = data;

  // Generate robots meta tag
  const robotsContent = robots || `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`;

  // Generate structured data for Zion Tech Group
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Leading provider of AI-powered technology solutions, digital transformation, and innovative business solutions.',
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
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    founder: {
      '@type': 'Person',
      name: 'Kleber',
      jobTitle: 'CEO & Founder'
    },
    foundingDate: '2020',
    numberOfEmployees: '10-50',
    industry: 'Technology',
    serviceType: [
      'AI & Machine Learning',
      'Digital Transformation',
      'Cloud Solutions',
      'Cybersecurity',
      'IT Consulting',
      'Software Development'
    ]
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  // Generate alternate language links
  const generateAlternateLinks = () => {
    if (Object.keys(alternateLanguages).length === 0) return null;
    
    return Object.entries(alternateLanguages).map(([lang, url]) => (
      <link key={lang} rel="alternate" hrefLang={lang} href={url} />
    ));
  };

  // Generate meta keywords
  const metaKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // Enhanced title with brand
  const enhancedTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;

  // Enhanced description
  const enhancedDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  useEffect(() => {
    // Update document title for better UX
    document.title = enhancedTitle;

    // Add meta description if not present
    if (!document.querySelector('meta[name="description"]')) {
      const metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = enhancedDescription;
      document.head.appendChild(metaDesc);
    }

    // Add viewport meta if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = viewport;
      document.head.appendChild(viewportMeta);
    }

    // Add structured data to page
    if (finalStructuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(finalStructuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [enhancedTitle, enhancedDescription, viewport, finalStructuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content={viewport} />
      <meta name="language" content={language} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msTileColor} />
      <meta name="msapplication-config" content={msConfig} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Alternate Languages */}
      {generateAlternateLinks()}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || canonicalUrl || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={enhancedTitle} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Favicon and App Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Business-specific meta tags */}
      <meta name="business:contact:phone" content="+1-302-464-0950" />
      <meta name="business:contact:email" content="kleber@ziontechgroup.com" />
      <meta name="business:contact:address" content="364 E Main St STE 1008, Middletown, DE 19709" />
      <meta name="business:contact:website" content="https://ziontechgroup.com" />
      <meta name="business:contact:social:twitter" content="@ziontechgroup" />
      <meta name="business:contact:social:linkedin" content="ziontechgroup" />
      <meta name="business:contact:social:facebook" content="ziontechgroup" />

      {/* Service-specific meta tags */}
      <meta name="service:type" content="Technology Solutions" />
      <meta name="service:category" content="AI, Digital Transformation, Cloud, Cybersecurity" />
      <meta name="service:location" content="Delaware, USA" />
      <meta name="service:availability" content="24/7 Support Available" />

      {/* Security and Privacy Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Performance Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Additional Open Graph Tags for Business */}
      <meta property="og:image:alt" content="Zion Tech Group - AI-Powered Technology Solutions" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content={ogImage.replace('http://', 'https://')} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="pt_BR" />

      {/* Additional Twitter Tags */}
      <meta name="twitter:image:alt" content="Zion Tech Group - AI-Powered Technology Solutions" />
      <meta name="twitter:domain" content="ziontechgroup.com" />

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Zion Tech Group',
          image: 'https://ziontechgroup.com/images/logo.png',
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
            closes: '17:00'
          },
          sameAs: [
            'https://twitter.com/ziontechgroup',
            'https://linkedin.com/company/ziontechgroup',
            'https://facebook.com/ziontechgroup'
          ]
        })}
      </script>

      {/* Structured Data for WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered technology solutions and digital transformation services.',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ziontechgroup.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>

      {children}
    </Helmet>
  );
};
>>>>>>> origin/cursor/enhance-zion-website-2025
