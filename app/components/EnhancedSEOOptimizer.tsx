import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface EnhancedSEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: any;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, cybersecurity services, and digital transformation expertise. 99.9% uptime SLA, 24/7 support.",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, Zion Tech Group, machine learning, 5G solutions, micro SaaS, enterprise software",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  noIndex = false,
  structuredData,
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime = new Date().toISOString(),
  section = "Technology",
  tags = ["AI", "IT Services", "Technology", "Digital Transformation"]
}) => {
  const location = useLocation();
  const currentUrl = `https://ziontechgroup.com${location.pathname}`;
  const finalCanonical = canonical || currentUrl;

  // Generate enhanced structured data
  const generateEnhancedStructuredData = () => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png",
        "width": 200,
        "height": 60
      },
      "description": description,
      "foundingDate": "2020",
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
          "contactType": "technical support",
          "areaServed": "US",
          "availableLanguage": "English",
          "email": "support@ziontechgroup.com"
        }
      ],
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/ziontechgroup",
        "https://facebook.com/ziontechgroup"
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
            "category": "Software Solutions"
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
              "name": "AI Analytics",
              "description": "Advanced AI-powered analytics solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity Solutions",
              "description": "Comprehensive cybersecurity protection services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure",
              "description": "Scalable cloud infrastructure solutions"
            }
          }
        ]
      }
    };

    // Add page-specific structured data
    const path = location.pathname;
    
    if (path === '/') {
      return {
        ...baseStructuredData,
        "@type": "WebSite",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ziontechgroup.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "AI Solutions",
              "url": "https://ziontechgroup.com/ai-services"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "IT Services",
              "url": "https://ziontechgroup.com/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Micro SaaS",
              "url": "https://ziontechgroup.com/micro-saas"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "5G Solutions",
              "url": "https://ziontechgroup.com/5g-solutions"
            }
          ]
        }
      };
    }
    
    if (path === '/about') {
      return {
        ...baseStructuredData,
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI and IT solutions",
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology"
        }
      };
    }
    
    if (path === '/contact') {
      return {
        ...baseStructuredData,
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com",
            "areaServed": "US"
          }
        }
      };
    }
    
    if (path.startsWith('/services') || path.startsWith('/ai-') || path.startsWith('/zion-') || path.startsWith('/5g-')) {
      return {
        ...baseStructuredData,
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
          "category": "Technology Services",
          "validFrom": "2024-01-01",
          "validThrough": "2025-12-31"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": "AI and IT Solutions",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${title} Services`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": title,
                "description": description
              }
            }
          ]
        }
      };
    }
    
    return baseStructuredData;
  };

  // Generate FAQ structured data
  const generateFAQStructuredData = () => {
    const faqs = [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "Zion Tech Group offers comprehensive AI solutions, IT services, micro SaaS products, and 5G implementation services. We specialize in digital transformation, cybersecurity, cloud computing, and business automation."
      },
      {
        question: "How can I contact Zion Tech Group?",
        answer: "You can contact us by phone at +1 (302) 464-0950, email at kleber@ziontechgroup.com, or visit our office at 364 E Main St STE 1008, Middletown, DE 19709."
      },
      {
        question: "What is the uptime guarantee for your services?",
        answer: "We provide a 99.9% uptime SLA guarantee for all our services, ensuring maximum reliability and availability for your business operations."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we provide 24/7 technical support to ensure your systems are always running smoothly and any issues are resolved quickly."
      },
      {
        question: "What makes Zion Tech Group different?",
        answer: "We combine cutting-edge AI technology with proven IT expertise to deliver innovative solutions that drive real business results. Our team of experts provides personalized service and ongoing support."
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
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

  const finalStructuredData = structuredData || generateEnhancedStructuredData();
  const faqStructuredData = generateFAQStructuredData();
  const breadcrumbStructuredData = generateBreadcrumbStructuredData();

  // Track page views and SEO metrics
  useEffect(() => {
    // Track page view in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: currentUrl,
        custom_map: {
          'custom_parameter_1': 'seo_optimized'
        }
      });
    }

    // Track SEO performance
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'seo_optimization', {
        event_category: 'SEO',
        event_label: 'page_loaded',
        value: 1
      });
    }
  }, [title, currentUrl]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Zion Tech Group`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-tooltip" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-navbutton-color" content="#8b5cf6" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Language and Geo Tags */}
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/assets/index-Dq8n7JAm.css" as="style" />
      <link rel="preload" href="/assets/index-DApGEc-z.js" as="script" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default EnhancedSEOOptimizer;