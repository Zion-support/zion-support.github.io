import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  facebookAppId?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  bingWebmasterTools?: string;
  yandexVerification?: string;
  baiduVerification?: string;
}

export function SEO({
  title,
  description,
  canonical,
  url,
  image = '/images/zion-tech-group-og.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false,
  twitterCard = 'summary_large_image',
  facebookAppId,
  googleAnalyticsId,
  googleTagManagerId,
  bingWebmasterTools,
  yandexVerification,
  baiduVerification
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/images/zion-tech-group-logo.png`,
    "description": "Leading AI & Technology Solutions provider specializing in innovative technology services, AI solutions, and digital transformation.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Business Intelligence",
            "description": "Advanced analytics and insights powered by artificial intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud DevOps",
            "description": "Modern infrastructure and automation solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "End-to-end digital transformation consulting and implementation"
          }
        }
      ]
    }
  };

  // Merge with custom structured data
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  // Add page-specific structured data
  if (type === 'article' && publishedTime) {
    finalStructuredData['@type'] = 'Article';
    finalStructuredData['headline'] = title;
    finalStructuredData['description'] = description;
    finalStructuredData['image'] = fullImageUrl;
    finalStructuredData['author'] = {
      "@type": "Person",
      "name": author
    };
    finalStructuredData['publisher'] = {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/zion-tech-group-logo.png`
      }
    };
    finalStructuredData['datePublished'] = publishedTime;
    if (modifiedTime) {
      finalStructuredData['dateModified'] = modifiedTime;
    }
    if (section) {
      finalStructuredData['articleSection'] = section;
    }
    if (tags.length > 0) {
      finalStructuredData['keywords'] = tags.join(', ');
    }
  }

  // Performance optimization: Preload critical resources
  useEffect(() => {
    // Preload critical images
    if (image && !image.startsWith('data:')) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = fullImageUrl;
      document.head.appendChild(link);
    }

    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical third-party origins
    const criticalOrigins = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalOrigins.forEach(origin => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      document.head.appendChild(link);
    });
  }, [image, fullImageUrl]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Facebook App ID */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Keywords */}
      <meta name="keywords" content={tags.join(', ')} />
      
      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      
      {/* Verification Meta Tags */}
      {googleAnalyticsId && <meta name="google-site-verification" content={googleAnalyticsId} />}
      {bingWebmasterTools && <meta name="msvalidate.01" content={bingWebmasterTools} />}
      {yandexVerification && <meta name="yandex-verification" content={yandexVerification} />}
      {baiduVerification && <meta name="baidu-site-verification" content={baiduVerification} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_title: '${title}',
                page_location: '${fullUrl}'
              });
            `}
          </script>
        </>
      )}
      
      {/* Google Tag Manager */}
      {googleTagManagerId && (
        <>
          <script>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
            `}
          </script>
        </>
      )}
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
}

export const SEOPresets = {
  home: {
    title: 'Zion Tech Group | Leading Technology Solutions & Digital Transformation',
    description: 'Transform your business with Zion Tech Group\'s cutting-edge AI, cybersecurity, cloud services, and digital transformation solutions. Expert IT consulting for the modern enterprise.',
    keywords: ['Technology Solutions', 'Digital Transformation', 'AI Services', 'Cybersecurity', 'Cloud Services', 'IT Consulting'],
    type: 'website' as const,
    structuredData: {
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  services: {
    title: 'Our Services | Zion Tech Group | Comprehensive Technology Solutions',
    description: 'Explore Zion Tech Group\'s comprehensive suite of technology services including AI solutions, cybersecurity, cloud migration, and digital transformation consulting.',
    keywords: ['AI Solutions', 'Cybersecurity Services', 'Cloud Migration', 'Digital Transformation', 'IT Infrastructure'],
    type: 'website' as const
  },
  about: {
    title: 'About Us | Zion Tech Group | Technology Innovation & Excellence',
    description: 'Learn about Zion Tech Group\'s mission to drive technological innovation and digital transformation. Discover our expertise, values, and commitment to excellence.',
    keywords: ['About Zion Tech Group', 'Technology Innovation', 'Company Mission', 'Team Expertise', 'Company Values'],
    type: 'website' as const
  },
  contact: {
    title: 'Contact Us | Zion Tech Group | Get in Touch for Technology Solutions',
    description: 'Contact Zion Tech Group for expert technology consulting, AI solutions, cybersecurity services, and digital transformation support. Let\'s discuss your technology needs.',
    keywords: ['Contact Zion Tech Group', 'Technology Consulting', 'AI Solutions', 'Cybersecurity Services', 'Digital Transformation'],
    type: 'website' as const
  }
};
