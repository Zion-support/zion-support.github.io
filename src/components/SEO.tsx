import React from 'react';
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
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
  facebookAppId?: string;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexSiteVerification?: string;
  baiduSiteVerification?: string;
  robots?: string;
  viewport?: string;
  charset?: string;
  language?: string;
  alternateLanguages?: { [key: string]: string };
}

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: 'website' | 'article' | 'product' | 'service';
  section?: string;
  tags?: string[];
}
}

export function SEO({
  title,
  description,
  keywords = ['AI', 'Technology', 'IT Services', 'Digital Transformation', 'Innovation'],
  image = '/og-image.svg',
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags,
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  facebookAppId,
  googleSiteVerification,
  bingSiteVerification,
  yandexSiteVerification,
  baiduSiteVerification,
  robots,
  viewport = 'width=device-width, initial-scale=1',
  charset = 'utf-8',
  language = 'en',
  alternateLanguages,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = url || location.pathname;
  const fullTitle = title ? `${title} - Zion Tech Group` : 'Zion Tech Group - Leading AI & Technology Solutions';
  const fullUrl = currentUrl.startsWith('http') ? currentUrl : `https://ziontechgroup.com${currentUrl}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading AI & Technology Solutions Provider",
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive",
      "addressLocality": "Tech City",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`https://ziontechgroup.com${canonical}`} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      

  keywords = [],
  image,
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  facebookAppId,
  googleSiteVerification,
  bingSiteVerification,
  yandexSiteVerification,
  baiduSiteVerification,
  robots,
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  charset = 'utf-8',
  language = 'en',
  alternateLanguages = {},
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const currentImage = image || `${window.location.origin}/images/zion-tech-group-og.jpg`;

  // Default metadata for Zion Tech Group
  const defaultMetadata: PageMetadata = {
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Expert AI implementation, cloud infrastructure, and digital transformation services.',
    keywords: [
      'AI solutions',
      'artificial intelligence',
      'technology consulting',
      'IT services',
      'digital transformation',
      'cloud infrastructure',
      'machine learning',
      'data analytics',
      'cybersecurity',
      'DevOps',
      'business intelligence',
      'enterprise software',
      'innovation',
      'technology strategy',
      'AI consulting',
      'tech solutions',
      'digital innovation',
      'business technology',
      'AI implementation',
      'tech consulting'
    ],
    image: currentImage,
    type: 'website',
    section: 'Technology Services',
    tags: ['AI', 'Technology', 'Consulting', 'Digital Transformation', 'Innovation']
  };

  // Merge provided props with defaults
  const metadata: PageMetadata = {
    ...defaultMetadata,
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,
    keywords: keywords.length > 0 ? keywords : defaultMetadata.keywords,
    image: currentImage,
    type: type || defaultMetadata.type,
    section: section || defaultMetadata.section,
    tags: tags.length > 0 ? tags : defaultMetadata.tags,
  };

  // Generate structured data
  const generateStructuredData = (): object => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': metadata.type === 'website' ? 'WebSite' : 'Organization',
      name: metadata.title,
      description: metadata.description,
      url: currentUrl,
      logo: `${window.location.origin}/images/zion-tech-group-logo.png`,
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://www.facebook.com/ziontechgroup',
        'https://github.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Spanish', 'French', 'German', 'Chinese']
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'United States',
        addressLocality: 'San Francisco',
        addressRegion: 'CA'
      },
      founder: {
        '@type': 'Person',
        name: 'Zion Tech Group Team',
        jobTitle: 'Technology Innovators'
      },
      foundingDate: '2020',
      numberOfEmployees: '100+',
      industry: 'Technology',
      keywords: metadata.keywords.join(', '),
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Cloud Computing',
        'Cybersecurity',
        'Data Analytics',
        'Digital Transformation',
        'Enterprise Software',
        'DevOps',
        'Business Intelligence',
        'Innovation Strategy'
      ]
    };

    // Add specific structured data based on type
    if (metadata.type === 'article') {
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: metadata.title,
        author: {
          '@type': 'Organization',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: `${window.location.origin}/images/zion-tech-group-logo.png`
          }
        },
        datePublished: publishedTime || new Date().toISOString(),
        dateModified: modifiedTime || new Date().toISOString(),
        articleSection: metadata.section,
        keywords: metadata.keywords.join(', '),
        image: metadata.image,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl
        }
      };
    }

    if (metadata.type === 'product' || metadata.type === 'service') {
      return {
        ...baseStructuredData,
        '@type': 'Service',
        serviceType: metadata.title,
        description: metadata.description,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Technology Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Solutions'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'IT Consulting'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Transformation'
              }
            }
          ]
        }
      };
    }

    return baseStructuredData;
  };

  // Generate robots meta tag
  const generateRobotsMeta = (): string => {
    if (robots) return robots;
    
    const directives = [];
    if (noindex) directives.push('noindex');
    if (nofollow) directives.push('nofollow');
    
    if (directives.length === 0) {
      directives.push('index', 'follow', 'max-snippet:-1', 'max-image-preview:large', 'max-video-preview:-1');
    }
    
    return directives.join(', ');
  };

  // Generate alternate language links
  const generateAlternateLanguages = (): JSX.Element[] => {
    return Object.entries(alternateLanguages).map(([lang, url]) => (
      <link key={lang} rel="alternate" hrefLang={lang} href={url} />
    ));
  };

  // Update meta tags when component mounts or props change
  useEffect(() => {
    // Update document title
    document.title = metadata.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', metadata.keywords.join(', '));
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || currentUrl);
  }, [metadata, currentUrl, canonical]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={generateRobotsMeta()} />
      <meta name="viewport" content={viewport} />
      <meta charSet={charset} />
      <meta httpEquiv="Content-Language" content={language} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || currentUrl} />
      
      {/* Alternate Languages */}
      {generateAlternateLanguages()}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {metadata.section && <meta property="article:section" content={metadata.section} />}
      {metadata.tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />
      <meta name="twitter:url" content={currentUrl} />
      
      {/* Facebook Meta Tags */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Search Engine Verification */}
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
      {bingSiteVerification && <meta name="msvalidate.01" content={bingSiteVerification} />}
      {yandexSiteVerification && <meta name="yandex-verification" content={yandexSiteVerification} />}
      {baiduSiteVerification && <meta name="baidu-site-verification" content={baiduSiteVerification} />}
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || generateStructuredData())}
      </script>
      
      {/* Additional structured data for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: window.location.origin,
          logo: `${window.location.origin}/images/zion-tech-group-logo.png`,
          description: 'Leading AI & Technology Solutions Provider',
          foundingDate: '2020',
          numberOfEmployees: '100+',
          industry: 'Technology',
          knowsAbout: [
            'Artificial Intelligence',
            'Machine Learning',
            'Cloud Computing',
            'Cybersecurity',
            'Data Analytics',
            'Digital Transformation'
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Technology Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Solutions',
                  description: 'Cutting-edge artificial intelligence solutions for businesses'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'IT Consulting',
                  description: 'Comprehensive IT consulting and strategy services'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Digital Transformation',
                  description: 'End-to-end digital transformation services'
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
}

export const SEOPresets = {
  home: {
    title: 'Zion Tech Group | Leading Technology Solutions & Digital Transformation',
    description: 'Transform your business with Zion Tech Group\'s cutting-edge AI, cybersecurity, cloud services, and digital transformation solutions. Expert IT consulting for the modern enterprise.',
    keywords: ['Technology Solutions', 'Digital Transformation', 'AI Services', 'Cybersecurity', 'Cloud Services', 'IT Consulting'],
    type: 'website' as const,
    structuredData: {
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  services: {
    title: 'Our Services | Zion Tech Group | Comprehensive Technology Solutions',
    description: 'Explore Zion Tech Group\'s comprehensive suite of technology services including AI solutions, cybersecurity, cloud migration, and digital transformation consulting.',
    keywords: ['AI Solutions', 'Cybersecurity Services', 'Cloud Migration', 'Digital Transformation', 'IT Infrastructure'],
    type: 'website' as const
  },
  about: {
    title: 'About Us | Zion Tech Group | Technology Innovation & Excellence',
    description: 'Learn about Zion Tech Group\'s mission to drive technological innovation and digital transformation. Discover our expertise, values, and commitment to excellence.',
    keywords: ['About Zion Tech Group', 'Technology Innovation', 'Company Mission', 'Team Expertise', 'Company Values'],
    type: 'website' as const
  },
  contact: {
    title: 'Contact Us | Zion Tech Group | Get in Touch for Technology Solutions',
    description: 'Contact Zion Tech Group for expert technology consulting, AI solutions, cybersecurity services, and digital transformation support. Let\'s discuss your technology needs.',
    keywords: ['Contact Zion Tech Group', 'Technology Consulting', 'AI Solutions', 'Cybersecurity Services', 'Digital Transformation'],
    type: 'website' as const
  }
};
