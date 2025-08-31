import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Innovation • Technology • Growth',
  description = 'Leading provider of innovative AI-powered business solutions, IT services, and micro SaaS platforms. Transform your business with cutting-edge technology including AI, Quantum Computing, Cybersecurity, and Digital Transformation.',
  keywords = 'AI services, IT solutions, cybersecurity, quantum computing, digital transformation, micro SaaS, business automation, enterprise solutions, healthcare technology, financial technology, manufacturing technology',
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
}) => {
  const fullTitle = `${title} | Zion Tech Group - Innovation • Technology • Growth`;
  const fullDescription = description || 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.';
  const fullKeywords = keywords || 'AI, artificial intelligence, technology solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group';

  // Update document title and meta description for better SEO
  useEffect(() => {
    if (title) {
      document.title = fullTitle;
    }
    
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', fullDescription);
    }
  }, [title, fullTitle, fullDescription]);

  // Generate structured data for better search engine understanding
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": url,
      "logo": "https://ziontechgroup.com/logo.png",
      "description": fullDescription,
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressLocality": "United States"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://ziontechgroup.com/contact"
      },
      "sameAs": [
        "https://www.linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
        "https://github.com/Zion-Holdings"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Artificial Intelligence and Machine Learning Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity",
              "description": "Advanced Security and Threat Protection Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure",
              "description": "Scalable Cloud Computing and DevOps Solutions"
            }
          }
        ]
      }
    };

    // Merge with custom structured data if provided
    return structuredData ? { ...baseData, ...structuredData } : baseData;
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbData = () => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return null;

    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        "item": `https://ziontechgroup.com${currentPath}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };

  // Generate FAQ structured data
  const generateFAQData = () => {
    const faqs = [
      {
        "@type": "Question",
        "name": "What services does Zion Tech Group provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zion Tech Group provides comprehensive AI solutions, cybersecurity services, cloud infrastructure, digital transformation, and micro SaaS platforms for businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with Zion Tech Group services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get started by contacting our team through our website, scheduling a consultation, or exploring our service catalog to find the right solution for your business needs."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Zion Tech Group serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve multiple industries including healthcare, finance, manufacturing, retail, education, and government sectors with tailored technology solutions."
        }
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs
    };
  };

  // Generate organization structured data
  const generateOrganizationData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": fullDescription,
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://ziontechgroup.com/contact"
      },
      "sameAs": [
        "https://www.linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };
  };

  // Generate article structured data if applicable
  const generateArticleData = () => {
    if (type === 'article' && publishedTime) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Organization",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ziontechgroup.com/logo.png"
          }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl || url
        }
      };
    }
    return null;
  };

  // Generate local business structured data
  const generateLocalBusinessData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Zion Tech Group",
      "description": fullDescription,
      "url": url,
      "telephone": "+1-555-0123",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    };
  };

  // Generate web site structured data
  const generateWebSiteData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "description": fullDescription,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };
  };

  // Generate all structured data
  const allStructuredData = [
    generateStructuredData(),
    generateBreadcrumbData(),
    generateFAQData(),
    generateOrganizationData(),
    generateLocalBusinessData(),
    generateWebSiteData(),
    generateArticleData()
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo180.png" />
      <link rel="mask-icon" href="/logo.svg" color="#7c3aed" />
      
      {/* Manifest for PWA */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileImage" content="/logo144.png" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="React + Vite" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
      
      {/* Performance Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - Innovation • Technology • Growth" />
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="123 Technology Drive" />
      <meta name="business:contact_data:locality" content="Tech City" />
      <meta name="business:contact_data:postal_code" content="12345" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-555-0123" />
      <meta name="business:contact_data:email" content="contact@ziontechgroup.com" />
      
      {/* Verification Meta Tags */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="/css/index.css" as="style" />
      <link rel="preload" href="/js/main.js" as="script" />
      <link rel="modulepreload" href="/js/main.js" />
      
      {/* Service Worker Registration */}
      <script>
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>
    </Helmet>
  );
};
// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="AI-Powered Business Solutions & Quantum Computing | Zion Tech Group"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity."
      keywords="AI business solutions, quantum computing, autonomous operations, digital transformation, IT services, cybersecurity, machine learning, neural networks"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="Comprehensive AI & IT Services | Zion Tech Group"
      description="Explore our comprehensive suite of AI services, quantum computing solutions, cybersecurity, and digital transformation services. Expert IT consulting and innovative technology solutions."
      keywords="AI services, quantum computing, cybersecurity, digital transformation, IT consulting, cloud services, machine learning, enterprise solutions"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get Expert AI & IT Solutions"
      description="Contact Zion Tech Group for expert AI solutions, quantum computing, and digital transformation services. Get in touch with our technology experts today."
      keywords="contact Zion Tech Group, AI solutions, IT consulting, technology services, digital transformation, quantum computing"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  author, 
  publishedDate, 
  image, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}) {
  return (
    <SEO
      title={title}
      description={description}
      author={author}
      canonical={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
      ogImage={image}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
          }
        },
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ziontechgroup.com/blog/${slug}`
        }
      }}
    />
  );
}

