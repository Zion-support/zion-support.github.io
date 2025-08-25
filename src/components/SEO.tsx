<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { Helmet } from 'react-helmet-async';

interface SEOProps {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  title: string;
  description: string;
  keywords?: string[] | string;
  canonical?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
=======
=======
import React from 'react';

interface SEOProps {
>>>>>>> origin/cursor/build-and-fix-errors-e276
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
  ogUrl?: string;
  canonical?: string;
  ogType?: string;
  twitterCard?: string;
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  structuredData?: object;
=======
  title?: string;
  description?: string;
  keywords?: string[] | string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
=======
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
  noindex?: boolean;
  nofollow?: boolean;
=======
  ogType?: string;
  twitterCard?: string;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
}

<<<<<<< HEAD
export const SEO: React.FC<SEOProps> = ({
<<<<<<< HEAD
  title,
  description,
  keywords = [],
  canonical,
<<<<<<< HEAD
  ogImage = '/images/zion-og-image.jpg',
=======
export function SEO({
  title = 'Zion Tech Group - AI-Powered Innovation & Enterprise IT Solutions',
  description = 'Transform your business with cutting-edge AI solutions, enterprise IT services, and innovative technology consulting. Expert cybersecurity, cloud solutions, and digital transformation.',
  keywords = [
    'AI solutions',
    'artificial intelligence',
    'enterprise IT',
    'cybersecurity',
    'cloud computing',
    'digital transformation',
    'machine learning',
    'micro SAAS',
    'IT consulting',
    'technology services',
    'business automation',
    'data analytics',
    'quantum technology',
    'blockchain solutions',
    'IoT platforms'
  ],
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
  ogType = 'website',
  twitterCard = 'summary_large_image',
<<<<<<< HEAD
  structuredData,
  noindex = false,
<<<<<<< HEAD
  nofollow = false,
}) => {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const defaultKeywords = 'AI, technology, marketplace, services, talent, micro SAAS, cloud computing, digital transformation';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  
=======
  nofollow = false
=======
  article = false,
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = []
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  
  // Default structured data for organization
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
  const defaultStructuredData = {
=======
  title = 'Zion Tech Group - AI-Powered Innovation & Enterprise IT Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cybersecurity, cloud computing, and enterprise IT services. Expert technology consulting for modern businesses.',
  keywords = [
    'AI solutions',
    'artificial intelligence',
    'cybersecurity',
    'cloud computing',
    'enterprise IT',
    'digital transformation',
    'machine learning',
    'IT consulting',
    'business technology',
    'Zion Tech Group'
  ],
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
=======
  image = '/images/zion-og-image.jpg',
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
<<<<<<< HEAD
<<<<<<< HEAD
  tags = [],
  canonical,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || url;
=======
  tags = []
}: SEOProps) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const fullTitle = title?.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = canonical || ogUrl || `${siteUrl}${window.location.pathname}`;
  const fullOgImage = ogImage?.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  
  // Handle keywords - convert string to array if needed
  const keywordsArray = Array.isArray(keywords) ? keywords : keywords.split(',').map(k => k.trim());
  
  // Structured data for organization
  const organizationSchema = {
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

<<<<<<< HEAD
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image = '/images/zion-tech-group-og.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = []
}) => {
  const siteName = 'Zion Tech Group';
  const fullTitle = `${title} | ${siteName}`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  // Structured data for organization
  const organizationSchema = {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======
  title: string;
  description: string;
  url: string;
  keywords?: string;
  ogImage?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export function SEO({ 
  title, 
  description, 
  url, 
  keywords, 
  ogImage, 
  twitterCard = "summary_large_image",
  canonicalUrl,
  structuredData 
}: SEOProps) {
  const defaultOgImage = ogImage || "https://ziontechgroup.com/og-image.jpg";
  const canonical = canonicalUrl || url;
  
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
=======
  // Enhanced structured data
  const organizationSchema = {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "logo": "https://ziontechgroup.com/images/zion-logo.png",
    "description": "Leading technology solutions provider specializing in AI, micro SAAS, and digital transformation services.",
=======
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Transform your business with cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services.",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
=======
    "logo": {
      "@type": "ImageObject",
      "url": "https://ziontechgroup.com/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Leading technology solutions provider specializing in AI, cloud computing, micro SAAS services, and digital transformation for modern enterprises.",
    "foundingDate": "2020",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
<<<<<<< HEAD
<<<<<<< HEAD
=======
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered solutions, enterprise IT services, and innovative technology consulting.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "DE",
      "addressLocality": "Middletown"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered innovation and enterprise IT solutions",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Delaware"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Transform Your Business With AI & Tech - Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
<<<<<<< HEAD
      "https://github.com/ziontechgroup"
    ]
=======
      "https://www.linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://www.youtube.com/@ziontechgroup"
    ],
    "serviceType": [
      "AI & Machine Learning Solutions",
      "Cybersecurity Services",
      "Cloud & DevOps",
      "Enterprise IT Solutions",
      "Digital Transformation",
      "Micro SAAS Development"
    ],
    "areaServed": "Worldwide",
=======
      "https://github.com/Zion-Holdings"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.3185,
        "longitude": -75.5071
      },
      "geoRadius": "50000"
    },
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com",
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://facebook.com/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://instagram.com/ziontechgroup",
      "https://github.com/ziontechgroup",
      "https://youtube.com/@ziontechgroup"
    ],
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
<<<<<<< HEAD
<<<<<<< HEAD
            "name": "AI Business Intelligence",
            "description": "Advanced analytics and insights powered by artificial intelligence"
=======
            "name": "AI-Powered CRM Solutions",
            "description": "Intelligent customer relationship management with predictive analytics"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
            "name": "AI & Machine Learning Solutions",
            "description": "Cutting-edge AI solutions for business transformation"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
<<<<<<< HEAD
            "name": "Cybersecurity Platform",
            "description": "Comprehensive threat detection and response system"
=======
            "name": "Micro SAAS Services",
            "description": "Scalable software solutions for growing businesses"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
<<<<<<< HEAD
            "name": "Cloud Cost Optimization",
            "description": "AI-driven cloud cost management solutions"
          }
        }
      ]
=======
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
      areaServed: 'Worldwide'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      streetAddress: '364 E Main St STE 1008'
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
  };

=======
  };

  // Structured data for website
=======
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings"
    ]
  };

  // Website schema
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======
            "name": "Cloud & DevOps Solutions",
            "description": "Infrastructure optimization and automated deployment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "Complete business modernization services"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.4496,
        "longitude": -75.7163
      },
      "geoRadius": "50000"
    }
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
<<<<<<< HEAD
<<<<<<< HEAD
    "description": "AI-powered innovation and enterprise IT solutions",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
<<<<<<< HEAD
=======
    "description": "Your comprehensive marketplace for all things technology and AI",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
      },
<<<<<<< HEAD
=======
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
      "query-input": "required name=search_term_string"
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  // Structured data for breadcrumbs
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      }
    ]
  };

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
=======
  tags = []
}: SEOProps) {
  const siteUrl = 'https://ziontechgroup.com';
  const fullTitle = `${title} | Zion Tech Group`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebSite',
    "name": fullTitle,
    "description": description,
    "url": fullCanonical,
    "image": fullImage,
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/zion-logo.png`
      }
    },
    ...(type === 'article' && {
      "author": {
        "@type": "Person",
        "name": author
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "articleSection": section,
      "keywords": tags.join(', ')
    })
  };

>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <meta name="description" content={description} />
<<<<<<< HEAD
<<<<<<< HEAD
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
=======
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
      <meta name="keywords" content={keywordsArray.join(', ')} />
      <meta name="author" content={author} />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
=======
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonical} />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      
<<<<<<< HEAD
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
=======
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
<<<<<<< HEAD
<<<<<<< HEAD
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
<<<<<<< HEAD
<<<<<<< HEAD
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
=======
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
=======
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
=======
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      <meta property="og:locale" content="en_US" />
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
      
<<<<<<< HEAD
=======
      {article && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
      {/* Twitter Card Meta Tags */}
<<<<<<< HEAD
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
<<<<<<< HEAD
<<<<<<< HEAD
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00e5ff" />
      <meta name="msapplication-TileColor" content="#00e5ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
=======
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
=======
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl
    },
    ...(section && { articleSection: section }),
    ...(tags.length > 0 && { keywords: tags.join(', ') })
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
<<<<<<< HEAD
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Article-specific meta tags */}
=======
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Keywords */}
      {tags.length > 0 && (
        <meta name="keywords" content={tags.join(', ')} />
      )}
      
      {/* Article specific meta tags */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
=======
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional Meta Tags for Tech Companies */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
<<<<<<< HEAD
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<<<<<<< HEAD
<<<<<<< HEAD
      <link rel="preconnect" href="https://api.ziontechgroup.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//api.ziontechgroup.com" />
=======
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data */}
      <script type="application/ld+json">
<<<<<<< HEAD
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteName} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
<<<<<<< HEAD
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
=======
      
      {/* Security Headers */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
<<<<<<< HEAD
      {/* Performance and Accessibility */}
      <meta name="color-scheme" content="dark light" />
      <meta name="supported-color-schemes" content="dark light" />
=======
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
=======
      
      {/* Structured Data */}
      <script type="application/ld+json">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="theme-color" content="#172d67" />
      <meta name="msapplication-TileColor" content="#172d67" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
=======
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Additional SEO optimizations */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Security headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
      
      {/* Performance optimizations */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="modulepreload" href="/js/react-vendor.js" />
      <link rel="modulepreload" href="/js/ui-vendor.js" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
=======
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "serviceType": [
      "AI Services",
      "Micro SAAS Solutions", 
      "IT Infrastructure",
      "Cybersecurity",
      "Digital Transformation"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance and Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<<<<<<< HEAD
      <link rel="preconnect" href="https://api.ziontechgroup.com" />
      
      {/* Favicon */}
=======
      
      {/* Favicon and App Icons */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    </Helmet>
  );
}

<<<<<<< HEAD
// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="Zion - The Tech & AI Marketplace"
      description="Discover top AI and tech talent, services, and equipment in one place. Connect with experts, find innovative solutions, and accelerate your tech projects."
      keywords="AI marketplace, tech talent, IT services, tech equipment, AI experts, developers, tech consulting, innovation"
      canonical="/"
      ogImage="/images/zion-homepage-og.jpg"
      structuredData={{
        "@type": "WebSite",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ziontechgroup.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }}
    />
  );
}

export function ServicePageSEO({ 
  serviceName, 
  description, 
  category 
}: { 
  serviceName: string;
  description: string;
  category: string;
}) {
  return (
    <SEO
      title={`${serviceName} - Zion Tech Group`}
      description={description}
      keywords={`${serviceName}, ${category}, tech services, IT solutions, Zion Tech Group`}
      canonical={`/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
      ogImage="/images/zion-services-og.jpg"
      structuredData={{
        "@type": "Service",
        "name": serviceName,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "category": category,
        "areaServed": "Worldwide"
      }}
    />
  );
}

export function TalentPageSEO({ 
  talentName, 
  skills, 
  description 
}: { 
  talentName: string;
  skills: string[];
  description: string;
}) {
  return (
    <SEO
      title={`${talentName} - Tech Talent | Zion Tech Group`}
      description={description}
      keywords={`${talentName}, ${skills.join(', ')}, tech talent, AI expert, developer, Zion Tech Group`}
      canonical={`/talent/${talentName.toLowerCase().replace(/\s+/g, '-')}`}
      ogImage="/images/zion-profile-og.jpg"
      structuredData={{
        "@type": "Person",
        "name": talentName,
        "description": description,
        "knowsAbout": skills,
        "worksFor": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        }
      }}
    />
  );
}
<<<<<<< HEAD
=======
export default SEO;
=======
  canonical?: string;
}
>>>>>>> origin/cursor/build-and-fix-errors-e276

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Zion Tech Group Services",
          "description": "Comprehensive AI and technology services",
          "url": "https://ziontechgroup.com/services",
          "itemListElement": [
            {
              "@type": "Service",
              "position": 1,
              "name": "AI Autonomous Systems",
              "description": "Intelligent automation solutions for business processes"
            },
            {
              "@type": "Service", 
              "position": 2,
              "name": "Quantum Technology",
              "description": "Next-generation quantum computing solutions"
            },
            {
              "@type": "Service",
              "position": 3, 
              "name": "Cybersecurity",
              "description": "Advanced security and compliance solutions"
            },
            {
              "@type": "Service",
              "position": 4,
              "name": "IT Infrastructure",
              "description": "Robust and scalable IT infrastructure solutions"
            },
            {
              "@type": "Service",
              "position": 5,
              "name": "Micro SAAS Solutions",
              "description": "Custom software-as-a-service applications"
            }
          ]
        })}
=======
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3bbb
      </script>
    </Helmet>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
=======
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="Zion Tech Group - Revolutionary Micro SaaS & AI Solutions"
      description="Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services. Transform your business with our innovative solutions."
      keywords="micro SaaS, AI solutions, cloud infrastructure, cybersecurity, machine learning, React, Node.js, AWS, Azure, business automation"
      canonical="/"
      ogImage="/images/zion-homepage-og.jpg"
      ogType="website"
    />
  );
}

export function ServicePageSEO({ 
  serviceName, 
  description, 
  category 
}: { 
  serviceName: string;
  description: string;
  category: string;
}) {
  return (
    <SEO
      title={`${serviceName} - Zion Tech Group`}
      description={description}
      keywords={`${serviceName}, ${category}, tech services, IT solutions, Zion Tech Group`}
      canonical={`/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
      ogType="product"
    />
  );
}

export function TalentPageSEO({ 
  talentName, 
  skills, 
  description 
}: { 
  talentName: string;
  skills: string[];
  description: string;
}) {
  return (
    <SEO
      title={`${talentName} - Tech Talent | Zion Tech Group`}
      description={description}
      keywords={`${talentName}, ${skills.join(', ')}, tech talent, AI expert, developer, Zion Tech Group`}
      canonical={`/talent/${talentName.toLowerCase().replace(/\s+/g, '-')}`}
      ogType="profile"
    />
  );
}
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
  noindex?: boolean;
<<<<<<< HEAD
  nofollow?: boolean;
  language?: string;
  author?: string;
=======
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
<<<<<<< HEAD
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  noindex = false,
  nofollow = false,
  language = 'en',
  author = 'Zion Tech Group'
}: SEOProps) {
  const robotsValue = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

=======
  noindex,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = "https://ziontechgroup.com";
  const fullCanonical = canonical || `${siteUrl}${window.location.pathname}`;
  
  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "The world's first free marketplace dedicated to high-tech and artificial intelligence",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-ZION-TECH",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish", "Portuguese", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global",
      "addressLocality": "Worldwide"
    }
  };

  // Structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech & AI Marketplace",
    "url": siteUrl,
    "description": "Discover top AI and tech talent, services, and equipment in one place",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Structured data for the specific page
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "headline": fullTitle,
    "description": description,
    "url": fullCanonical,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonical
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png"
      }
    },
    ...(type === "article" && {
      "author": {
        "@type": "Person",
        "name": author || "Zion Tech Group"
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "articleSection": section,
      "keywords": tags?.join(", ")
    })
  };
  
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
<<<<<<< HEAD
      <meta name="author" content={author} />
      <meta name="robots" content={robotsValue} />
      <meta name="language" content={language} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:site" content={twitterSite} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of innovative IT solutions, AI services, and comprehensive tech services",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://facebook.com/ziontechgroup",
            "https://github.com/ziontechgroup"
          ]
        })}
=======
      
      {/* Enhanced meta tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Additional SEO links */}
      <link rel="alternate" hrefLang="en" href={fullCanonical} />
      <link rel="alternate" hrefLang="es" href={`https://es.ziontechgroup.com${window.location.pathname}`} />
      <link rel="alternate" hrefLang="pt" href={`https://pt.ziontechgroup.com${window.location.pathname}`} />
      <link rel="alternate" hrefLang="ar" href={`https://ar.ziontechgroup.com${window.location.pathname}`} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </script>
    </Helmet>
  );
}
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
      {/* Additional Performance Optimizations */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
