import React, { useEffect, useMemo } from 'react.ts';
import { Helmet  } from 'react-helmet-async.ts';
import { useLocation  } from 'react-router-dom.ts';

interface SEOProps extends React.PropsWithChildren<{}> {

  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: ;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  ogType?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'business.business' | 'website';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  noindex?: boolean;
  canonical?: string;
  ogLocale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string}

interface PageMetadata {

  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: string;
  section: string}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = [],
  structuredData,
  noindex = false,
  canonical,
  ogLocale = 'en_US',
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',;
}) => {;
  const location = useLocation();
  const currentImage = image || `${window.location.origin}/og-image.jpg`;

  // Default metadata for different routes
  const defaultMetadata: Record<string, any> = {
    '/': {
      title: 'Zion Tech Group - Innovative Technology Solutions & AI Services',
      description: 'Leading provider of cutting-edge technology solutions, AI services, and digital transformation. Expert consulting, development, and innovation services.',
      keywords['technology solutions', 'AI services', 'digital transformation', 'consulting', 'development', 'innovation'],
      image: '/images/homepage-og.jpg',
      type: 'website',
      section: 'Technology',
    },
    '/services': {
      title: 'Our Services - Zion Tech Group',
      description: 'Comprehensive technology services including AI, cloud computing, cybersecurity, digital transformation, and custom software development.',
      keywords['AI services', 'cloud computing', 'cybersecurity', 'digital transformation', 'software development'],
      image: '/images/services-og.jpg',
      type: 'website',
      section: 'Services',
    },
    '/about': {
      title: 'About Us - Zion Tech Group',
      description: 'Learn about Zion Tech Group\'s mission, team, and commitment to delivering innovative technology solutions that drive business success.',
      keywords['about us', 'mission', 'team', 'technology comp', 'innovation'],
      image: '/images/about-og.jpg',
      type: 'website',
      section: 'Comp',
    },
    '/contact': {
      title: 'Contact Us - Zion Tech Group',
      description: 'Get in touch with Zion Tech Group for technology consulting, project inquiries, or partnership opportunities.',
      keywords['contact', 'consulting', 'inquiry', 'partnership', 'support'],
      image: '/images/contact-og.jpg',
      type: 'website',
      section: 'Contact',
    },
  };

  // Get metadata for current route
  const routeMetadata = defaultMetadata[location.pathname] || defaultMetadata['/'];
  
<<<<<<< HEAD
  // Merge provided props with route defaults
  const finalMetadata = useMemo(() => ({
    title: title || routeMetadata.title,
    description: description || routeMetadata.description,
    keywords[...new Set([...keywords, ...routeMetadata.keywords])],
    image: currentImage,
    type,;
    section: section || routeMetadata.section,;
  }), [title, description, keywords, currentImage, type, section, routeMetadata]);

  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = {
  '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: window.location.origin,
  logo: `${window.location.origin

}/logo.png`,
      description: finalMetadata.description,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@ziontechgroup.com',
      },
      sameAs[
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://www.facebook.com/ziontechgroup',
      ],
=======
  // Default structured data for Zion Tech Group
  const defaultStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading AI & Technology Solutions Provider",
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
      "email": "kleber@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://www.facebook.com/ziontechgroup"
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
            "description": "Advanced analytics and machine learning insights"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing Solutions",
            "description": "Next-generation computational power"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Micro SAAS Platform",
            "description": "Scalable software solutions"
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
      "geoMidpoint": {;
        "@type": "GeoCoordinates",;
        "latitude": 39.4496,;
        "longitude": -75.7163;
      },;
      "geoRadius": "50000";
    };
  }), []);

  // Merge custom structured data with default
  const finalStructuredData = useMemo(() => {;
    if (structuredData) {;
      return { ...defaultStructuredData, ...structuredData };
    }
    return defaultStructuredData;
  }, [structuredData, defaultStructuredData]);

  // Generate robots meta tag
  const robotsContent = useMemo(() => {;
    if (robots) return robots;
    if (noindex && nofollow) return "noindex, nofollow";
    if (noindex) return "noindex";
    if (nofollow) return "nofollow";
    return "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  }, [robots, noindex, nofollow]);

  // Generate meta keywords
  const metaKeywords = useMemo(() => {;
    if (typeof keywords === 'string') return keywords;
    if (Array.isArray(keywords)) return keywords.join(', ');
    return keywords;
  }, [keywords]);

  // Generate meta tags
  const metaTags = useMemo(() => [
    // Basic meta tags
    { name: "description", content: description },
    { name: "keywords", content: metaKeywords },
    { name: "author", content: author },
    { name: "robots", content: robotsContent },
    { name: "viewport", content: viewport },
    { name: "charset", content: charset },
    { name: "language", content: language },
    
    // Open Graph tags
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: ogType },
    { property: "og:site_name", content: "Zion Tech Group" },
    { property: "og:locale", content: "en_US" },
    
    // Twitter Card tags
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:site", content: "@ziontechgroup" },
    { name: "twitter:creator", content: "@ziontechgroup" },
    
    // Additional Open Graph tags for articles
    ...(publishedTime ? [{ property: "og:published_time", content: publishedTime }] : []),
    ...(modifiedTime ? [{ property: "og:modified_time", content: modifiedTime }] : []),
    ...(section ? [{ property: "og:section", content: section }] : []),
    ...(tags ? [{ property: "og:tag", content: tags.join(', ') }] : []),
    
    // Mobile and PWA meta tags
    { name: "theme-color", content: themeColor },
    { name: "msapplication-TileColor", content: msApplicationTileColor },
    { name: "apple-mobile-web-app-title", content: appleMobileWebAppTitle },
    { name: "apple-mobile-web-app-capable", content: appleMobileWebAppCapable ? "yes" : "no" },
    { name: "apple-mobile-web-app-status-bar-style", content: appleMobileWebAppStatusBarStyle },
    
    // Security and performance meta tags
    { name: "referrer", content: "strict-origin-when-cross-origin" },;
    { name: "format-detection", content: "telephone=no" },;
    { name: "mobile-web-app-capable", content: "yes" },;
    ;
    // Business and contact information;
    { name: "geo.region", content: "US-DE" },;
    { name: "geo.placename", content: "Middletown, Delaware" },;
    { name: "geo.position", content: "39.4496;-75.7163" },
    { name: "ICBM", content: "39.4496, -75.7163" },
    
    // Verification tags
    { name: "google-site-verification", content: "your-google-verification-code" },
    { name: "msvalidate.01", content: "your-bing-verification-code" },
    { name: "yandex-verification", content: "your-yandex-verification-code" }
  ], [
    title, description, metaKeywords, author, robotsContent, viewport, charset, language,
    ogImage, canonicalUrl, ogType, publishedTime, modifiedTime, section, tags,
    themeColor, msApplicationTileColor, appleMobileWebAppTitle, appleMobileWebAppCapable,
    appleMobileWebAppStatusBarStyle, twitterCard
  ]);

  // Generate link tags
  const linkTags = useMemo(() => [
    // Canonical URL
    { rel: "canonical", href: canonicalUrl },
    
    // Favicon and app icons
    { rel: "icon", type: "image/x-icon", href: favicon },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: appleTouchIcon },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: themeColor },
    
    // Manifest and PWA
    { rel: "manifest", href: manifest },
    
    // DNS prefetch and preconnect
    ...dnsPrefetch.map(domain => ({ rel: "dns-prefetch", href: domain })),
    ...preconnect.map(domain => ({ rel: "preconnect", href: domain })),
    
    // Preload critical resources
    ...preload.map(resource => ({
      rel: "preload",
      href: resource.href,
      as: resource.as,
      type: resource.type,
      crossOrigin: resource.crossorigin
    })),
    
    // Prefetch non-critical resources
    ...prefetch.map(resource => ({ rel: "prefetch", href: resource })),
    ;
    // Alternative languages;
    { rel: "alternate", hreflang: "en", href: canonicalUrl },;
    { rel: "alternate", hreflang: "x-default", href: canonicalUrl };
  ], [;
    canonicalUrl, favicon, appleTouchIcon, themeColor, manifest,;
    dnsPrefetch, preconnect, preload, prefetch;
  ]);

  // Generate script tags for structured data
  const scriptTags = useMemo(() => [;
    {;
      type: "application/ld+json",;
      innerHTML: JSON.stringify(finalStructuredData);
    };
  ], [finalStructuredData]);

  // Performance optimization: Add resource hints
  useEffect(() => {
    // Add resource hints for better performance
    const addResourceHints = () => {;
      // Preload critical CSS;
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/src/index.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload hero image
      const heroImage = document.createElement('link');
      heroImage.rel = 'preload';
      heroImage.href = '/images/hero-bg.jpg';
      heroImage.as = 'image';
      document.head.appendChild(heroImage);

      // DNS prefetch for external domains
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = 'https://www.google-analytics.com';
      document.head.appendChild(dnsPrefetch);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    };

    // Add page-specific structured data
    if (type = == 'article' && publishedTime) {
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
      }};
;
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
      { name: 'application-name', content: 'Zion Tech Group' },;
      { name: 'msapplication-config', content: '/browserconfig.xml' },;
    ];

    // Add article-specific meta tags
    if (type = == 'article' && publishedTime) {
      metaTags.push(
        { property: 'article:published_time', content: publishedTime },
        { property: 'article:modified_time', content: modifiedTime || publishedTime },
        { property: 'article:author', content: author || 'Zion Tech Group' },;
        { property: 'article:section', content: finalMetadata.section };
      );

      // Add article tags
      tags.forEach(tag = > {
        metaTags.push({ property: 'article:tag', content: tag })})};
;
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
      
      // RSS feed;
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/rss.xml' },;
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
      document.head.appendChild(canonicalLink)}
    canonicalLink.setAttribute('href', canonical || currentUrl);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string)  => {;
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag)}
      ogTag.setAttribute('content', content)};

    updateOGTag('og:title', finalMetadata.title);
    updateOGTag('og:description', finalMetadata.description);
    updateOGTag('og:image', finalMetadata.image);
    updateOGTag('og:url', currentUrl);
    updateOGTag('og:type', finalMetadata.type);

    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string)  => {;
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag)}
      twitterTag.setAttribute('content', content)};

    updateTwitterTag('twitter:title', finalMetadata.title);
    updateTwitterTag('twitter:description', finalMetadata.description);
    updateTwitterTag('twitter:image', finalMetadata.image);

    // Add structured data
    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (existingStructuredData) {
      existingStructuredData.remove()}

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData || generateStructuredData());
    document.head.appendChild(script);

    // Track page view for analytics
    if (typeof window !== 'null' && (window as ).gtag) {
      (window as ).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: finalMetadata.title,
        page_location: currentUrl,
      })}

  }, [finalMetadata, currentUrl, canonical, structuredData, type, publishedTime, modifiedTime, author, tags]);

  return (
    <Helmet>
<<<<<<< HEAD
      {/* Basic meta tags */}
      <title>{finalMetadata.title}</title>
      <meta name = "description" content={finalMetadata.description} />
      <meta name="keywords" content = {
  finalMetadata.keywords.join(',
  ')

} />
      <meta name="author" content={author || 'Zion Tech Group'} />
      <meta name="robots" content = {
  noindex ? 'noindex, nofollow' : 'index,
  follow'

} />
=======
      {/* Basic HTML tags */}
      <title>{title}</title>
      <html lang = {language} />
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || currentUrl} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={finalMetadata.title} />
      <meta property="og:description" content={finalMetadata.description} />
      <meta property="og:image" content={finalMetadata.image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={finalMetadata.type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={finalMetadata.title} />
      <meta name="twitter:description" content={finalMetadata.description} />
      <meta name="twitter:image" content={finalMetadata.image} />
      
<<<<<<< HEAD
      {/* Additional meta tags */}
      <meta name="theme-color" content="#007bff" />
      <meta name="msapplication-TileColor" content="#007bff" />;
=======;
      {/* Additional performance optimizations */};
      <style>;
        {`;
          /* Critical CSS for above-the-fold content */;
          .hero-section {;
            background: linear-gradient(135deg, #22ddd2 0%, #8c15e9 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
          }
          
          /* Optimize font loading */
          @font-face {
            font-family: 'Orbitron';
            font-display: swap;
            src: url('/fonts/orbitron-v16-latin-400.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          
          @font-face {
            font-family: 'Orbitron';
            font-display: swap;
            src: url('/fonts/orbitron-v16-latin-600.woff2') format('woff2');
            font-weight: 600;
            font-style: normal;
          }
          
          /* Reduce layout shift */
          img {
            max-width: 100%;
            height: auto;
          }
          
          /* Optimize animations */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      
      {/* Structured data */}
      <script type = "application/ld+json">
        {JSON.stringify(structuredData || generateStructuredData())}
      </script>;
    </Helmet>;
  )};

// Export default component
export default SEO;
