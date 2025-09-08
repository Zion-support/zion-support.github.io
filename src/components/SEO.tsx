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
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords,
  image = '/images/zion-tech-group-og.jpg',
  url = window.location.href,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  structuredData
}: SEOProps) {
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
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions, IT services, and digital transformation consulting.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
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

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || pageStructuredData)}
      </script>
      
      {/* Organization Structured Data */}
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
