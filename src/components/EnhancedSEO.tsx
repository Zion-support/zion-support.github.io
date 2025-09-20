import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  alternateLanguages?: { href: string; hrefLang: string }[];
  structuredData?: any;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  facebookAppId?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  customMeta?: Array<{ name: string; content: string; property?: string }>;
};

export const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion - Advanced Technology Solutions',
  description = 'Leading provider of AI, quantum computing, space technology, and blockchain solutions. Transform your business with cutting-edge innovation.',
  keywords = ['AI', 'Quantum Computing', 'Space Technology', 'Blockchain', 'Cybersecurity', 'Cloud Computing'],
  image = '/images/zion-tech-group-og-image.jpg',
  url,
  type = 'website',
  siteName = 'Zion Tech Group',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical,
  alternateLanguages = [],
  structuredData,
  locale = 'en_US',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  facebookAppId,
  googleAnalyticsId,
  googleTagManagerId,
  customMeta = []
}) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const canonicalUrl = canonical || currentUrl;
  const imageUrl = image.startsWith('http') ? image : `${currentUrl}${image}`;

  // Generate structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
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
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "Artificial Intelligence",
      "Quantum Computing",
      "Space Technology",
      "Blockchain Solutions",
      "Cybersecurity",
      "Cloud Computing"
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": "https://ziontechgroup.com",
    "description": description,
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
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zion Tech Group",
    "description": description,
    "url": "https://ziontechgroup.com",
    "telephone": "+1-302-464-0950",
    "email": "kleber@ziontechgroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.4500,
      "longitude": -75.7167
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
    "currenciesAccepted": "USD"
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blockchain Development"
          }
        }
      ]
    }
  };

  // Combine structured data
  const finalStructuredData = structuredData || [
    defaultStructuredData,
    websiteStructuredData,
    localBusinessStructuredData,
    serviceStructuredData
  ];

  // Enhanced meta tags for better SEO
  const enhancedAdditionalMeta = [
    { name: "robots", content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
    { name: "googlebot", content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
    { name: "bingbot", content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
    { name: "theme-color", content: "#8B5CF6" },
    { name: "msapplication-TileColor", content: "#8B5CF6" },
    { name: "msapplication-config", content: "/browserconfig.xml" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    { name: "apple-mobile-web-app-title", content: siteName },
    { name: "application-name", content: siteName },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "format-detection", content: "telephone=no" },
    { name: "revisit-after", content: "7 days" },
    { name: "distribution", content: "global" },
    { name: "rating", content: "general" },
    { name: "language", content: "English" },
    { name: "geo.region", content: "US-DE" },
    { name: "geo.placename", content: "Middletown, Delaware" },
    { name: "geo.position", content: "39.4500;-75.7167" },
    { name: "ICBM", content: "39.4500, -75.7167" },
    ...customMeta
  ];

  // Enhanced links for better SEO
  const enhancedAdditionalLinks = [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: "https://ziontechgroup.com", hreflang: "en" },
    { rel: "alternate", href: "https://ziontechgroup.com", hreflang: "x-default" },
    { rel: "manifest", href: "/manifest.json" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#8B5CF6" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
    { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
    ...alternateLanguages.map(lang => ({
      rel: "alternate",
      href: lang.href,
      hreflang: lang.hrefLang
    }))
  ];

  // Add Google Analytics
  useEffect(() => {
    if (googleAnalyticsId && typeof window !== 'undefined') {
      // Load Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: title,
        page_location: currentUrl,
        custom_map: { dimension1: 'page_type' }
      });

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [googleAnalyticsId, title, currentUrl]);

  // Add Google Tag Manager
  useEffect(() => {
    if (googleTagManagerId && typeof window !== 'undefined') {
      // Load Google Tag Manager
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${googleTagManagerId}');
      `;
      document.head.appendChild(gtmScript);

      // Add noscript fallback
      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      document.body.appendChild(noscript);

      return () => {
        document.head.removeChild(gtmScript);
        document.body.removeChild(noscript);
      };
    }
  }, [googleTagManagerId]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${title} - ${description}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${title} - ${description}`} />

      {/* Additional Meta Tags */}
      {enhancedAdditionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}

      {/* Additional Links */}
      {enhancedAdditionalLinks.map((link, index) => (
        <link key={index} {...link} />
      ))}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/hero-bg.jpg" as="image" />
      
      {/* Prefetch important pages */}
      <link rel="prefetch" href="/services" />
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/contact" />
    </Helmet>
  );
};

// Blog Post SEO Component
export const BlogPostSEO: React.FC<SEOProps & {
  postTitle: string;
  postDescription: string;
  postImage: string;
  postUrl: string;
  postDate: string;
  postModified: string;
  postAuthor: string;
  postTags: string[];
  postCategory: string;
  readingTime: number;
}> = ({
  postTitle,
  postDescription,
  postImage,
  postUrl,
  postDate,
  postModified,
  postAuthor,
  postTags,
  postCategory,
  readingTime,
  ...seoProps
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postTitle,
    "description": postDescription,
    "image": postImage,
    "url": postUrl,
    "datePublished": postDate,
    "dateModified": postModified,
    "author": {
      "@type": "Person",
      "name": postAuthor
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "articleSection": postCategory,
    "keywords": postTags.join(', '),
    "wordCount": Math.ceil(readingTime * 200), // Estimate word count
    "timeRequired": `PT${readingTime}M`
  };

  return (
    <EnhancedSEO
      {...seoProps}
      title={postTitle}
      description={postDescription}
      image={postImage}
      url={postUrl}
      type="article"
      publishedTime={postDate}
      modifiedTime={postModified}
      author={postAuthor}
      section={postCategory}
      tags={postTags}
      structuredData={structuredData}
    />
  );
};

// Service Page SEO Component
export const ServicePageSEO: React.FC<SEOProps & {
  serviceName: string;
  serviceDescription: string;
  servicePrice: string;
  serviceCategory: string;
  serviceFeatures: string[];
  serviceBenefits: string[];
}> = ({
  serviceName,
  serviceDescription,
  servicePrice,
  serviceCategory,
  serviceFeatures,
  serviceBenefits,
  ...seoProps
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": servicePrice,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "category": serviceCategory,
    "serviceType": "Professional Services",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceCategory,
      "itemListElement": serviceFeatures.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    }
  };

  return (
    <EnhancedSEO
      {...seoProps}
      title={`${serviceName} - Professional Services | Zion Tech Group`}
      description={serviceDescription}
      type="service"
      section={serviceCategory}
      tags={serviceFeatures}
      structuredData={structuredData}
    />
  );
};

export default EnhancedSEO;
