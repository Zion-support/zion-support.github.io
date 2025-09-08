import React, { useEffect, useMemo } from 'react';
import { Helmet  } from 'react-helmet-async.ts';
import { useLocation  } from 'react-router-dom.ts';

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
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  ogType?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'business.business' | 'website';
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
  noindex?: boolean;
  canonical?: string;
  ogLocale?: string;
  twitterCreator?: string;
  twitterSite?: string;
}

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: string;
  section: string;
}

export const SEO: React.FC<SEOProps> = ({
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
  structuredData,
  noindex = false,
  canonical,
  ogLocale = 'en_US',
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const currentImage = image || `${window.location.origin}/og-image.jpg`;

  // Default metadata for different routes
  const defaultMetadata: Record<string, any> = {
    '/': {
      title: 'Zion Tech Group - Innovative Technology Solutions & AI Services',
      description: 'Leading provider of cutting-edge technology solutions, AI services, and digital transformation. Expert consulting, development, and innovation services.',
      keywords: ['technology solutions', 'AI services', 'digital transformation', 'consulting', 'development', 'innovation'],
      image: '/images/homepage-og.jpg',
      type: 'website',
      section: 'Technology',
    },
    '/services': {
      title: 'Our Services - Zion Tech Group',
      description: 'Comprehensive technology services including AI, cloud computing, cybersecurity, digital transformation, and custom software development.',
      keywords: ['AI services', 'cloud computing', 'cybersecurity', 'digital transformation', 'software development'],
      image: '/images/services-og.jpg',
      type: 'website',
      section: 'Services',
    },
    '/about': {
      title: 'About Us - Zion Tech Group',
      description: 'Learn about Zion Tech Group\'s mission, team, and commitment to delivering innovative technology solutions that drive business success.',
      keywords: ['about us', 'mission', 'team', 'technology company', 'innovation'],
      image: '/images/about-og.jpg',
      type: 'website',
      section: 'Comp',
    },
    '/contact': {
      title: 'Contact Us - Zion Tech Group',
      description: 'Get in touch with Zion Tech Group for technology consulting, project inquiries, or partnership opportunities.',
      keywords: ['contact', 'consulting', 'inquiry', 'partnership', 'support'],
      image: '/images/contact-og.jpg',
      type: 'website',
      section: 'Contact',
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

  // Get metadata for current route
  const routeMetadata = defaultMetadata[location.pathname] || defaultMetadata['/'];
  
  // Merge provided props with route defaults
  const finalMetadata = useMemo(() => ({
    title: title || routeMetadata.title,
    description: description || routeMetadata.description,
    keywords: [...new Set([...keywords, ...routeMetadata.keywords])],
    image: currentImage,
    type,
    section: section || routeMetadata.section,
  }), [title, description, keywords, currentImage, type, section, routeMetadata]);

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
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@ziontechgroup.com',
      },
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://www.facebook.com/ziontechgroup',
      ],
    };

    // Add page-specific structured data
    if (type === 'article' && publishedTime) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: finalMetadata.title,
        description: finalMetadata.description,
        image: finalMetadata.image,
        author: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: `${window.location.origin}/logo.png`,
          },
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
      }}

    if (type === 'product' || type === 'service') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: finalMetadata.title,
        description: finalMetadata.description,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
        },
        areaServed: 'Worldwide',
        serviceType: finalMetadata.section,
      }}

    return baseStructuredData};

  // Generate meta tags
  const generateMetaTags = () => {
    const metaTags = [
      // Basic meta tags
      { name: 'description', content: finalMetadata.description },
      { name: 'keywords', content: finalMetadata.keywords.join(', ') },
      { name: 'author', content: author || 'Zion Tech Group' },
      { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },

      // Open Graph meta tags
      { property: 'og:title', content: finalMetadata.title },
      { property: 'og:description', content: finalMetadata.description },
      { property: 'og:image', content: finalMetadata.image },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: finalMetadata.type },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: ogLocale },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: finalMetadata.title },

      // Twitter Card meta tags
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:site', content: twitterSite },
      { name: 'twitter:creator', content: twitterCreator },
      { name: 'twitter:title', content: finalMetadata.title },
      { name: 'twitter:description', content: finalMetadata.description },
      { name: 'twitter:image', content: finalMetadata.image },
      { name: 'twitter:image:alt', content: finalMetadata.title },

      // Additional meta tags
      { name: 'theme-color', content: '#007bff' },
      { name: 'msapplication-TileColor', content: '#007bff' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
    ];

    // Add article-specific meta tags
    if (type === 'article' && publishedTime) {
      metaTags.push(
        { property: 'article:published_time', content: publishedTime },
        { property: 'article:modified_time', content: modifiedTime || publishedTime },
        { property: 'article:author', content: author || 'Zion Tech Group' },
        { property: 'article:section', content: finalMetadata.section }
      );

      // Add article tags
      tags.forEach(tag  => {
        metaTags.push({ property: 'article:tag', content: tag })})}

    return metaTags};

  // Generate link tags
  const generateLinkTags = () => {
    const linkTags = [
      // Canonical URL
      { rel: 'canonical', href: canonical || currentUrl },
      
      // Alternate languages (if you have multiple language versions)
      { rel: 'alternate', hreflang: 'en', href: currentUrl },
      { rel: 'alternate', hreflang: 'x-default', href: currentUrl },
      
      // Preconnect to external domains
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      
      // DNS prefetch
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      
      // Favicon and app icons
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      
      // RSS feed
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/rss.xml' },
    ];

    return linkTags};

  // Update page title and meta tags when route changes
  useEffect(()  => {
    // Update document title
    document.title = finalMetadata.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription)}
    metaDescription.setAttribute('content', finalMetadata.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords)}
    metaKeywords.setAttribute('content', finalMetadata.keywords.join(', '));

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || currentUrl);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string)  => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);

    updateOGTag('og:title', finalMetadata.title);
    updateOGTag('og:description', finalMetadata.description);
    updateOGTag('og:image', finalMetadata.image);
    updateOGTag('og:url', currentUrl);
    updateOGTag('og:type', finalMetadata.type);

    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string)  => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);

    updateTwitterTag('twitter:title', finalMetadata.title);
    updateTwitterTag('twitter:description', finalMetadata.description);
    updateTwitterTag('twitter:image', finalMetadata.image);

    // Add structured data
    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData || generateStructuredData());
    document.head.appendChild(script);

    // Track page view for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: finalMetadata.title,
        page_location: currentUrl,
      });
    }

  }, [finalMetadata, currentUrl, canonical, structuredData, type, publishedTime, modifiedTime, author, tags]);

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


  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
