import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
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

export function SEO({
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
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
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
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com');

  // Default structured data for organization
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

  // Merge with custom structured data
  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{fullTitle}</title>
<<<<<<< HEAD
<<<<<<< HEAD
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={fullCanonical} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Additional meta tags */}
      <meta name="robots" content={noindex || nofollow ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` : 'index, follow'} />
      <meta name="author" content={author || siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Business Solutions',
  description = 'Transform your business with Zion Tech Group\'s cutting-edge AI solutions, autonomous operations, and comprehensive digital transformation services.',
  keywords = 'AI, artificial intelligence, business automation, digital transformation, Zion Tech Group',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>

}) => {
  return (

    <Head>

      
      {/* Additional SEO */}""
      <link rel="canonical" href={url} /" >"
      <meta name="robots" content="index, follow" /" >"
      <meta name="author" content="Zion Tech Group" /" >"


    </Head>
  )};


  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
