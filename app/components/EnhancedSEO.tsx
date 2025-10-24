<<<<<<< HEAD
'use client'
import Footer from './Footer'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain } from 'lucide-react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { Phone, Mail, ArrowRight } from 'lucide-react'
  const benefits = [
    "Advanced AI technology integration",
      "Real-time processing and analytics",
      "Enterprise-grade security and compliance",
      "Scalable and flexible solutions"
    "2 4/7 technical support",
      "Easy integration with existing systems",
      "Cost-effective pricing plans",
      "Proven track record of success"
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
                <Phone className=&quot;mr-2 h-5 w-5&quot; />
                Call Now
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
                <Mail className=&quot;mr-2 h-5 w-5&quot; />
                Email Us
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
export default EnhancedSEOPage
                </div>
              ))}
            </div>
          </div>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>{benefits.map((benefit, index) => (</div>
              <div key={index} className=&quot;flex items-start space-x-3&quot;></div>
                <CheckCircle className=&quot;h-6 w-6 text-purple-400 mt-1 flex-shrink-0&quot; />
                <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm: px-6 lg:px-8&quot;></section>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <div className=&quot;bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12&quot;></div>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-4&quot;>Ready to Get Started?</h2>h2>
            <p className=&quot;text-xl text-purple-100 mb-8&quot;>Contact our experts to discuss your enhancedseo needs and get a customized solution.</p>p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
            </div>
          </div>
=======
<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e

interface EnhancedSEOProps {
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

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, cybersecurity services, and digital transformation expertise. 99.9% uptime SLA, 24/7 support.",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, Zion Tech Group, machine learning, 5G solutions, micro SaaS, enterprise software",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  noIndex = false,
  structuredData,
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology",
  tags = ["AI", "Technology", "IT Services", "Cybersecurity"]
}) => {
  const location = useLocation();
  const currentUrl = `https://ziontechgroup.com${location.pathname}`;
  const finalCanonical = canonical || currentUrl;
  const currentTime = new Date().toISOString();

  // Generate enhanced structured data
  const generateEnhancedStructuredData = useCallback(() => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/ziontechgroup"
      ],
      "service": [
        {
          "@type": "Service",
          "name": "AI Solutions",
          "description": "Cutting-edge artificial intelligence solutions for business automation and optimization"
        },
        {
          "@type": "Service", 
          "name": "IT Services",
          "description": "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and custom development"
        },
        {
          "@type": "Service",
          "name": "5G Implementation",
          "description": "Next-generation connectivity and infrastructure services for modern businesses"
        },
        {
          "@type": "Service",
          "name": "Micro SaaS Solutions",
          "description": "Ready-to-use software solutions for immediate deployment and business growth"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Analytics Dashboard",
              "description": "Advanced AI-powered analytics and business intelligence platform"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity Solutions",
              "description": "Comprehensive cybersecurity protection and monitoring services"
            }
          }
        ]
      }
    };

    // Page-specific enhancements
    if (location.pathname === '/') {
      return {
        ...baseData,
        "@type": "WebSite",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ziontechgroup.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "Featured Services",
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
            }
          ]
        }
      };
    }

    if (location.pathname === '/about') {
      return {
        ...baseData,
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": description,
          "foundingDate": "2020",
          "numberOfEmployees": "10-50",
          "industry": "Technology"
        }
      };
    }

    if (location.pathname === '/contact') {
      return {
        ...baseData,
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English",
            "email": "kleber@ziontechgroup.com"
          }
        }
      };
    }

    if (location.pathname.startsWith('/services') || location.pathname.startsWith('/ai-') || location.pathname.startsWith('/zion-')) {
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
        "serviceType": "AI and IT Solutions",
        "audience": {
          "@type": "Audience",
          "audienceType": "Business"
        }
      };
    }

    return baseData;
  }, [location.pathname, title, description]);

  // Generate FAQ structured data
  const generateFAQStructuredData = useCallback(() => {
    const faqs = [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "Zion Tech Group offers AI solutions, IT services, cybersecurity, cloud computing, 5G implementation, and micro SaaS solutions for businesses of all sizes."
      },
      {
        question: "How can AI solutions benefit my business?",
        answer: "Our AI solutions can automate processes, improve decision-making, enhance customer experience, and increase operational efficiency by up to 40%."
      },
      {
        question: "Do you provide 24/7 support?",
        answer: "Yes, we provide 24/7 support with a 99.9% uptime SLA guarantee for all our services."
      },
      {
        question: "What is your pricing model?",
        answer: "We offer flexible pricing models including subscription-based micro SaaS solutions starting from $9/month and custom enterprise solutions."
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
  }, []);

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = useCallback(() => {
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
  }, [location.pathname]);

  // Track page views and events
  useEffect(() => {
    // Enhanced analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: currentUrl,
        custom_map: {
          'custom_parameter_1': 'page_type',
          'custom_parameter_2': 'section'
        }
      });

      // Track page view event
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: currentUrl,
        page_path: location.pathname,
        content_group1: section,
        content_group2: tags.join(', ')
      });
    }
  }, [title, currentUrl, location.pathname, section, tags]);

  const finalStructuredData = structuredData || generateEnhancedStructuredData();
  const faqStructuredData = generateFAQStructuredData();
  const breadcrumbStructuredData = generateBreadcrumbStructuredData();

  return (
    <Helmet>
      {/* Enhanced Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Enhanced Open Graph / Facebook */}
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
      <meta property="og:updated_time" content={modifiedTime || currentTime} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="article:section" content={section} />
      {tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - Zion Tech Group`} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Language and Geo Tags */}
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta name="business:contact_data:locality" content="Middletown" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19709" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
      
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
      
      {/* Additional Page-specific Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//cdn.gpteng.co" />
    </Helmet>
  );
};

export default EnhancedSEO;
>>>>>>> main
