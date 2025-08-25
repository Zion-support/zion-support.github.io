import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
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
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
  structuredData?: object;
=======
  title?: string;
  description?: string;
  keywords?: string[] | string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
  noindex?: boolean;
  nofollow?: boolean;
}

<<<<<<< HEAD
export const SEO: React.FC<SEOProps> = ({
<<<<<<< HEAD
  title,
  description,
  keywords = [],
  canonical,
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
  const fullUrl = canonical || url;
  
  // Handle keywords - convert string to array if needed
  const keywordsArray = Array.isArray(keywords) ? keywords : keywords.split(',').map(k => k.trim());
  
  // Structured data for organization
  const organizationSchema = {
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
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "logo": "https://ziontechgroup.com/images/zion-logo.png",
    "description": "Leading technology solutions provider specializing in AI, micro SAAS, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
<<<<<<< HEAD
            "name": "AI Business Intelligence",
            "description": "Advanced analytics and insights powered by artificial intelligence"
=======
            "name": "AI-Powered CRM Solutions",
            "description": "Intelligent customer relationship management with predictive analytics"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Platform",
            "description": "Comprehensive threat detection and response system"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Cost Optimization",
            "description": "AI-driven cloud cost management solutions"
          }
        }
      ]
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
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
<<<<<<< HEAD
    "description": "AI-powered innovation and enterprise IT solutions",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
      },
=======
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
      "query-input": "required name=search_term_string"
    }
  };

<<<<<<< HEAD
  // Structured data for breadcrumbs
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

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
<<<<<<< HEAD
<<<<<<< HEAD
      <meta name="description" content={description} />
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
      
<<<<<<< HEAD
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
<<<<<<< HEAD
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
<<<<<<< HEAD
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
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
      <meta property="og:locale" content="en_US" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
      
      {/* Twitter Card Meta Tags */}
<<<<<<< HEAD
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
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
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
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
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
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
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
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
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.ziontechgroup.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
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
=======
export default SEO;

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-60a2
