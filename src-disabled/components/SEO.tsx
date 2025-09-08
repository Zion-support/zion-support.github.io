import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';



  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = website'}: SEOProps) => {
  const fullTitle = `${title} | Zion Tech Group`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com;
  const fullImage = image || https://ziontechgroup.com/og-image.jpg';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description content={description} />
      <meta name=keywords" content={keywords} />
      <meta name="viewport content=width=device-width, initial-scale=1" />
      <meta name="robots content=index, follow" />
      <link rel="canonical href={fullUrl} />

      {/* Open Graph */}
      <meta property=og:title" content={fullTitle} />
      <meta property="og:description content={description} />
      <meta property=og:image" content={fullImage} />
      <meta property="og:url content={fullUrl} />
      <meta property=og:type" content={type} />
      <meta property="og:site_name content=Zion Tech Group" />

      {/* Twitter */}
      <meta name="twitter:card content=summary_large_image" />
      <meta name="twitter:title content={fullTitle} />
      <meta name=twitter:description" content={description} />
      <meta name="twitter:image content={fullImage} />

      {/* Additional SEO */}
      <meta name=author" content="Zion Tech Group />
      <meta name=theme-color" content="#000000 />
    </Head>

  url?: string;
  image?: string;
  type?: string;
}
export function SEO({
  title = Zion Tech Group - AI & Technology Solutions","
  description = Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability.,"
  keywords = "AI, artificial intelligence, technology solutions, digital transformation, enterprise software, cloud computing, cybersecurity, automation,
  url = "https://ziontechgroup.com",
  image = https://ziontechgroup.com/og-image.jpg","
  type = website,"
  className
}:,  SEOProps) {
  const structuredData = {
    "@context: https://schema.org","
    @type: "Organization",
    name": "Zion Tech Group,
    "description": description,
    url": url,"
    logo: "https://ziontechgroup.com/logo.png",
    image": image,"
    contactPoint: {"
      "@type: ContactPoint","
      telephone: "+1-302-464-0950",
      contactType": "customer service,
      "email": kleber@ziontechgroup.com"
    },
    "address: {
      "@type": PostalAddress,"
      "streetAddress: 364 E Main St STE 1008","
      addressLocality: "Middletown",
      addressRegion": "DE,
      "postalCode": 19709,"
      "addressCountry: US""
    },
    sameAs: [",
      "https://linkedin.com/company/zion-tech-group,
      "https://twitter.com/ziontechgroup",
      https://facebook.com/ziontechgroup""
    ],
    offers: {"
      "@type: AggregateOffer","
      offerCount: "6",,
      offers": ["
        {
          @type: "Offer",
          name": "AI Services,
          "description": Custom AI solutions powered by machine learning and deep learning technologies"
        },
        {
          "@type: Offer","
          name: "IT Services",
          description": "Comprehensive IT infrastructure and digital transformation solutions
        },
        {
          "@type": Offer,"
          "name: Cybersecurity","
          description: "Advanced security solutions to protect your digital assets"
        }
      ]

const SEO: React.FC<SEOProps> = ({}) => {
  const siteName = 'Zion Tech Group;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';



  }
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description content={description} />
      <meta name="keywords" content={keywords} />
      <meta name=author" content="Zion Tech Group />
      <meta name="robots" content=index, follow />"
      <meta name="viewport content=width=device-width, initial-scale=1.0" />"
      {/* Open Graph / Facebook */}
      <meta property=og:type content={type} />"
      <meta property="og:url content={url} />
      <meta property="og:title" content={title} />
      <meta property=og:description" content={description} />"
      <meta property=og:image content={image} />"
      <meta property="og:site_name content=Zion Tech Group" />"
      {/* Twitter */}
      <meta property=twitter:card content="summary_large_image" />
      <meta property=twitter:url" content={url} />"
      <meta property=twitter:title content={title} />"
      <meta property="twitter:description content={description} />
      <meta property="twitter:image" content={image} />
      {/* Additional SEO */}
      <meta name=theme-color" content="#06b6d4 />
      <meta name="msapplication-TileColor" content=#06b6d4 />"
      <link rel="canonical href={url} />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}

  // Service-specific structured data
  const getServiceStructuredData = () => {
    if (type === 'service && section) {
      return {
        @context": "https://schema.org,
        @type": "Service,
        name": title,
        "description: description,
        provider": {
          "@type: Organization",
          "name: Zion Tech Group"
        },
        "serviceType: section,
        areaServed": "Worldwide,
        availableChannel": {
          "@type: ServiceChannel",
          "serviceUrl: currentUrl
        }
      }
    }
    return null;
  }

  // Article structured data
  const getArticleStructuredData = () => {
    if (type === article' && publishedTime) {
      return {
        @context": "https://schema.org,
        @type": "Article,
        headline": title,
        "description: description,
        image": image,
        "author: {
          @type": "Organization,
          name": author
        },
        "publisher: {
          @type": "Organization,
          name": "Zion Tech Group,
          logo": {
            "@type: ImageObject",
            "url: https://ziontechgroup.com/images/zion-tech-group-logo.png"
          }
        },
        "datePublished: publishedTime,
        dateModified": modifiedTime || publishedTime,
        "mainEntityOfPage: {
          @type": "WebPage,
          @id": currentUrl
        }
      }
    }
    return null;
  }

  // Breadcrumb structured data
  const getBreadcrumbStructuredData = () => {
    const pathSegments = location.pathname.split('/).filter(Boolean);
    if (pathSegments.length > 0) {
      const breadcrumbItems = [
        {
          "@type: ListItem",
          "position: 1,
          name": "Home,
          item": "https://ziontechgroup.com
        }
      ];

      let currentPath = ';
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        breadcrumbItems.push({
          @type": "ListItem,
          position": index + 2,
          "name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ),
          item": `https://ziontechgroup.com${currentPath}`
        });
      });

      return {
        "@context: https://schema.org",
        "@type: BreadcrumbList",
        "itemListElement: breadcrumbItems
      }
    }
    return null;
  }

  // FAQ structured data for relevant pages
  const getFAQStructuredData = () => {
    if (location.pathname.includes(/faq') || location.pathname.includes('/help)) {
      return {
        @context": "https://schema.org,
        @type": "FAQPage,
        mainEntity": [
          {
            "@type: Question",
            "name: What services does Zion Tech Group offer?",
            "acceptedAnswer: {
              @type": "Answer,
              text": "Zion Tech Group offers comprehensive technology solutions including AI and machine learning, quantum computing, cybersecurity, cloud infrastructure, digital transformation, and custom software development.
            }
          },
          {
            @type": "Question,
            name": "How can I get started with Zion Tech Group?,
            acceptedAnswer": {
              "@type: Answer",
              "text: You can get started by contacting us through our website, scheduling a consultation, or requesting a quote for your specific technology needs."
            }
          }
        ]
      }
    }
    return null;
  };



  // Combine all structured data
  const combinedStructuredData = [
    defaultStructuredData,
    getServiceStructuredData(),
    getArticleStructuredData(),
    getBreadcrumbStructuredData(),
    getFAQStructuredData(),
    structuredData
  ].filter(Boolean);

  // Performance optimization: Preload critical resources
  useEffect(() => {
    // Preload critical fonts
    const fontLinks = [
      { rel: preload', href: '/fonts/orbitron-v16-latin-400.woff2, as: font', type: 'font/woff2, crossOrigin: anonymous' },
      { rel: 'preload, href: /fonts/orbitron-v16-latin-600.woff2', as: 'font, type: font/woff2', crossOrigin: 'anonymous }
    ];

    fontLinks.forEach(link => {
      const linkElement = document.createElement(link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Preload critical images
    const imageLinks = [
      { rel: 'preload, href: image, as: image' }
    ];

    imageLinks.forEach(link => {
      const linkElement = document.createElement('link);
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      https://fonts.googleapis.com',
      'https://fonts.gstatic.com,
      https://www.google-analytics.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link);
      link.rel = dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [image]);
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;

const SEO: React.FC<SEOProps> = ({
pr-12325

    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />



      <meta property=og:type" content={type} />
      <meta property="og:url content={fullUrl} />
      <meta property=og:title" content={fullTitle} />

      <meta property="og: type content={type} />
      <meta property=og:url" content={url} />
      <meta property="og:title content={title} />

      <meta property=og:description" content={description} />
      <meta property="og:image content={image} />

      {/* Twitter */}
      <meta property=twitter:card" content="summary_large_image />
      <meta property=twitter:url" content={fullUrl} />
      <meta property="twitter:title content={fullTitle} />
      <meta property=twitter:description" content={description} />
      <meta property="twitter:image content={image} />

      <meta name=author" content="Zion Tech Group />
      <meta name=viewport" content="width=device-width, initial-scale=1.0 />
      <meta httpEquiv=Content-Type" content="text/html; charset=utf-8 />
      
      {/* Favicon */}
      <link rel=icon" type="image/x-icon href=/favicon.ico" />
      <link rel="apple-touch-icon sizes=180x180" href="/apple-touch-icon.png />
      <link rel=icon" type="image/png sizes=32x32" href="/favicon-32x32.png />
      <link rel=icon" type="image/png sizes=16x16" href="/favicon-16x16.png />
      
      {/* Structured Data */}
      <script type=application/ld+json">
        {JSON.stringify({
          "@context: https://schema.org",
          "@type: Organization",
          "name: Zion Tech Group",
          "url: https://ziontechgroup.com",
          "logo: https://ziontechgroup.com/logo.png",
          "description: Leading provider of AI-powered technology solutions and enterprise services",
          "address: {
            @type": "PostalAddress,
            addressLocality": "San Francisco,
            addressRegion": "CA,
            addressCountry": "US
          },
          contactPoint": {
            "@type: ContactPoint",
            "telephone: +1-555-123-4567",
            "contactType: customer service",
            "email: contact@ziontechgroup.com"
          },
          "sameAs: [
            https://facebook.com/ziontechgroup",
            "https://twitter.com/ziontechgroup,
            https://linkedin.com/company/ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
};



      <meta name=author" content={author} />
      <meta name="robots content={noindex ? 'noindex, nofollow : index, follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel=canonical" href={canonical} />}
      


