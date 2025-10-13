import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;
  wordCount?: number;
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.",
  keywords = "AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noIndex = false,
  noFollow = false,
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  readingTime,
  wordCount,
}) => {
  const location = useLocation();
  const currentUrl = `https://ziontechgroup.com${location.pathname}`;
  const finalCanonical = canonical || currentUrl;

  // Generate comprehensive structured data
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png",
        "width": 300,
        "height": 300
      },
      "description": description,
      "foundingDate": "2020",
      "numberOfEmployees": "50-100",
      "industry": "Information Technology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "English",
          "email": "kleber@ziontechgroup.com"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "sales",
          "areaServed": "US",
          "availableLanguage": "English",
          "email": "kleber@ziontechgroup.com"
        }
      ],
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup",
        "https://github.com/ziontechgroup"
      ],
      "service": [
        {
          "@type": "Service",
          "name": "AI Solutions",
          "description": "Cutting-edge artificial intelligence solutions for business automation and optimization",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "category": "Technology Services"
          }
        },
        {
          "@type": "Service",
          "name": "IT Services",
          "description": "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and custom development",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "category": "Technology Services"
          }
        },
        {
          "@type": "Service",
          "name": "5G Implementation",
          "description": "Next-generation connectivity and infrastructure services for modern businesses",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "category": "Technology Services"
          }
        },
        {
          "@type": "Service",
          "name": "Micro SaaS Solutions",
          "description": "Ready-to-use software solutions for immediate deployment and business growth",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "category": "Software"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Analytics Dashboard"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Content Generation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Cybersecurity Suite"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "5G Network Implementation"
            }
          }
        ]
      }
    };

    // Page-specific structured data
    if (location.pathname === '/') {
      return {
        ...baseData,
        "@type": "WebSite",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ziontechgroup.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
    }

    if (location.pathname === '/about') {
      return {
        ...baseData,
        "@type": "AboutPage"
      };
    }

    if (location.pathname === '/contact') {
      return {
        ...baseData,
        "@type": "ContactPage"
      };
    }

    if (location.pathname.startsWith('/ai-') || location.pathname.startsWith('/zion-') || location.pathname.startsWith('/5g-')) {
      return {
        ...baseData,
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "category": "Technology Services"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": "AI and IT Solutions"
      };
    }

    return baseData;
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbData = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [
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
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://ziontechgroup.com${currentPath}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
  };

  // Generate FAQ structured data for service pages
  const generateFAQData = () => {
    if (!location.pathname.startsWith('/ai-') && !location.pathname.startsWith('/zion-') && !location.pathname.startsWith('/5g-')) {
      return null;
    }

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `What is ${title}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": description
          }
        },
        {
          "@type": "Question",
          "name": "How can I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact our team at kleber@ziontechgroup.com or call +1 (302) 464-0950 to discuss your requirements and get started with our solutions."
          }
        },
        {
          "@type": "Question",
          "name": "What is the pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing varies based on your specific requirements. Contact us for a customized quote that fits your budget and needs."
          }
        }
      ]
    };
  };

  const finalStructuredData = structuredData || generateStructuredData();
  const breadcrumbData = generateBreadcrumbData();
  const faqData = generateFAQData();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={finalCanonical} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Zion Tech Group`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Reading time and word count */}
      {readingTime && <meta name="reading-time" content={`${readingTime} minutes`} />}
      {wordCount && <meta name="word-count" content={wordCount.toString()} />}
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#00ffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      
      {/* FAQ Structured Data */}
      {faqData && (
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      )}
      
      {/* Additional Performance Optimizations */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/hero-bg.webp" as="image" />
      <link rel="preload" href="/images/logo.webp" as="image" />
    </Helmet>
  );
};

export default AdvancedSEO;