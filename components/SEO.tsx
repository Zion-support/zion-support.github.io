import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
=======
>>>>>>> origin/content/blog-sept12

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
<<<<<<< HEAD
  title = 'Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions',
  description = 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge services in AI, cybersecurity, space tech, and quantum solutions.',
  keywords = 'AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics',
  image = '/images/zion-tech-group-og-image.jpg',
=======
  title = 'Zion Tech Group - Pioneering the Future of Technology',
  description = 'Leading technology solutions provider specializing in AI, quantum computing, space technology, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords = ['technology', 'AI', 'quantum computing', 'space technology', 'business solutions', 'innovation'],
  image = 'https://ziontechgroup.com/og-image.jpg',
>>>>>>> origin/content/blog-sept12
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
<<<<<<< HEAD
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  return (
    <Head>
=======
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const fullUrl = canonical || url;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with innovative solutions that drive business transformation",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup',
      'https://facebook.com/ziontechgroup',
      'https://instagram.com/ziontechgroup',
      'https://youtube.com/@ziontechgroup'
    ],
    founder: {
      '@type': 'Person',
      name: 'Kleber',
      email: 'kleber@ziontechgroup.com',
      jobTitle: 'Founder & CEO'
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50+",
    "industry": "Technology",
    "knowsAbout": [
      "Artificial Intelligence",
      "Quantum Computing",
      "Space Technology",
      "Business Automation",
      "Cloud Infrastructure",
      "Cybersecurity"
    ]
  };

  // Service-specific structured data
  const getServiceStructuredData = () => {
    if (type === 'service' && title) {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": fullDescription,
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": section || "Technology Service",
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": fullUrl
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Technology Services"
        }
      };
    }
    return null;
  };

  // Article structured data
  const getArticleStructuredData = () => {
    if (type === 'article' && publishedTime) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": fullDescription,
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
          "@id": fullUrl
        }
      };
    }
    return null;
  };

  // Breadcrumb structured data
  const getBreadcrumbStructuredData = () => {
    const pathSegments = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean) : [];
    if (pathSegments.length > 0) {
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
    }
    return null;
  };

  // FAQ structured data
  const getFAQStructuredData = () => {
    // This could be dynamically generated based on page content
    const faqs = [
      {
        "question": "What services does Zion Tech Group offer?",
        "answer": "Zion Tech Group offers comprehensive technology solutions including AI development, quantum computing, space technology, business automation, and enterprise IT services."
      },
      {
        "question": "How can I get started with Zion Tech Group?",
        "answer": "You can get started by contacting us at +1-302-464-0950 or emailing kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs."
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

  // Combine all structured data
  const allStructuredData = [
    defaultStructuredData,
    getServiceStructuredData(),
    getArticleStructuredData(),
    getBreadcrumbStructuredData(),
    getFAQStructuredData(),
    structuredData
  ].filter(Boolean);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track page view
      if ('gtag' in window) {
        (window as any).gtag('config', 'G-XXXXXXXXXX', {
          page_title: fullTitle,
          page_location: fullUrl,
          custom_map: {
            custom_dimension1: type,
            custom_dimension2: section || 'general'
          }
        });
      }

      // Track Core Web Vitals
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              // Track LCP
              if ('gtag' in window) {
                (window as any).gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'LCP',
                  value: Math.round(entry.startTime),
                  non_interaction: true
                });
              }
            }
          }
        });
        
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // Fallback for older browsers
        }
      }
    }
  }, [fullTitle, fullUrl, type, section]);

  return (
    <>
>>>>>>> origin/content/blog-sept12
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : 'index'} />
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
<<<<<<< HEAD
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
=======
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
      {/* Open Graph Meta Tags */}
>>>>>>> origin/content/blog-sept12
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
<<<<<<< HEAD
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
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
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
=======
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Article-specific meta tags */}
      {type === 'article' && publishedTime && (
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
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
<<<<<<< HEAD
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'Organization',
          "name": fullTitle,
          "description": description,
          "url": fullUrl,
          "image": fullImage,
          "author": type === 'article' ? {
            "@type": "Organization",
            "name": author,
            "url": "https://zion.app"
          } : undefined,
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://zion.app",
            "logo": {
              "@type": "ImageObject",
              "url": "https://zion.app/images/zion-tech-group-logo.png",
              "width": 600,
              "height": 60
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@zion.app",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://twitter.com/ZionTechGroup",
              "https://linkedin.com/company/zion-tech-group",
              "https://github.com/Zion-Holdings"
            ]
          },
          "datePublished": publishedTime,
          "dateModified": modifiedTime || publishedTime,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullUrl
          },
          "breadcrumb": type === 'article' ? {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://zion.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://zion.app/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": fullUrl
              }
            ]
          } : undefined
        })}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Performance and UX */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Helmet>
=======
>>>>>>> origin/content/blog-sept12
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
<<<<<<< HEAD
    </Head>
=======
      
      {/* Default Structured Data if none provided */}
      {!structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
              "description": description,
              "foundingDate": "2020",
              "sameAs": [
                "https://www.linkedin.com/company/zion-tech-group",
                "https://twitter.com/ziontechgroup",
                "https://github.com/Zion-Holdings"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Machine Learning Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Quantum Computing Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Space Technology Solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      )}
    </>
>>>>>>> cursor/create-and-deploy-new-content-d63f
>>>>>>> origin/content/blog-sept12
  );
};

export default SEO;