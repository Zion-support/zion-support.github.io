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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>EnhancedSEOOptimizer - Zion Tech Group</title>
        <meta name="description" content="Professional enhancedseooptimizer services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            EnhancedSEOOptimizer</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional enhancedseooptimizer solutions tailored to your business needs.</p>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions;
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge enhancedseooptimizer solutions.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation;
              </h3>
              <p className="text-green-700">
                Tailored enhancedseooptimizer implementations for your specific requirements.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support;
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your enhancedseooptimizer needs.</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today,
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
            EnhancedSEOOptimizer</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional enhancedseooptimizer solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge enhancedseooptimizer solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored enhancedseooptimizer implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your enhancedseooptimizer needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
)}
            </button>
          </div>
        </div>
      </div>
    </div>
)}
};
