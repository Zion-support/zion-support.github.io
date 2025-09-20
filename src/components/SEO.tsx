import React, { useEffect } from "react"
import { Helmet } from "react-helmet-async"
interface SEOProps {
  tit,
  l: e: string,descripti,
  o: n: string
  keywords?: string,
  ogType?: string,
  ogImage?: string,
  ogUrl?: string,
  twitterCard?: string,
  twitterSite?: string,
  twitterCreator?: string,
  canonicalUrl?: string,
  noindex?: boolean,
  nofollow?: boolean,
  structuredData?: object,
  additionalMeta?: Array<{ na,
  m: e: string, conte,
  n: t: string }>
  additionalLinks?: Array<{ r,
  e: l: string, hr,
  e: f: string }>
  author?: string,
  publishedTime?: string,
  modifiedTime?: string,
  section?: string,
  tags?: string[],
}

export,
  const: SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  canonicalUrl,
  noindex = false,
  nofollow = false,
  structuredData,
  additionalMeta = [],
  additionalLinks = [],
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  }) () => {
  // Default values
  const defaultOgImage = ogImage || '/images/zion-tech-group-og-image.jpg'
const defaultOgUrl = ogUrl || window.location.href
const defaultCanonicalUrl = canonicalUrl || window.location.href
  // Enhanced title with brand
  const enhancedTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  // Enhanced description
  const enhancedDescription = description.length > 160 
    ? `${description.substring(0, 157)}...` 
    : description
  // Default keywords if not provided
  const defaultKeywords = keywords || 'AI, artificial intelligence, technology, business solutions, Zion Tech Group, digital transformation, cloud computing, data analytics, IT infrastructure, micro SaaS, digital twin, enterprise software, machine learning, cybersecurity, DevOps, cloud infrastructure'
  // Generate structured data for organization
  const organizationStructuredData = {
    "@context": "htt,
  p: s://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "alternateName": "Zion Tech",
    "url": "htt,
  p: s://ziontechgroup.com",
    "logo": {
      "@type": "ImageObject",
      "url": "htt,
  p: s://ziontechgroup.com/images/zion-tech-group-logo.png",
      "width": "300",
      "height": "100"
    },
    "description": "Leading provider of AI-powered business solutions and comprehensive technology services for enterprise digital transformation",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States",
      "addressRegion": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "htt,
  p: s://linkedin.com/company/zion-tech-group",
      "htt,
  p: s://twitter.com/ziontechgroup",
      "htt,
  p: s://facebook.com/ziontechgroup",
      "htt,
  p: s://github.com/ziontechgroup"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Data Analytics",
      "Digital Transformation",
      "Cybersecurity",
      "DevOps",
      "Enterprise Software"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Business Intelligence"
          },
  },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & DevOps"
          },
  },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity"
          },
  },
  ],
  },
  }
  // Generate structured data for website
  const websiteStructuredData = {
    "@context": "htt,
  p: s://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "htt,
  p: s://ziontechgroup.com",
    "description": "AI-powered business solutions and comprehensive technology services for enterprise digital transformation",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "htt,
  p: s://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
  }
  // Generate structured data for local business
  const localBusinessStructuredData = {
    "@context": "htt,
  p: s://schema.org",
    "@type": "LocalBusiness",
    "name": "Zion Tech Group",
    "description": "AI-powered business solutions and technology services",
    "url": "htt,
  p: s://ziontechgroup.com",
    "telephone": "+1-800-ZION-TECH",
    "email": "info@ziontechgroup.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services"
    },
  }
  // Combine structured data
  const combinedStructuredData = [
    organizationStructuredData,
    websiteStructuredData,
    localBusinessStructuredData,
    ...(structuredData ? [structuredData] : [])
  ]
  // Additional meta tags for better SEO
  const enhancedAdditionalMeta = [
    ...additionalMeta,
    { na,
  m: e: 'robots', conte,
  n: t: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
    { na,
  m: e: 'author', conte,
  n: t: author },
    { na,
  m: e: 'language', conte,
  n: t: 'English' },
    { na,
  m: e: 'revisit-after', conte,
  n: t: '7 days' },
    { na,
  m: e: 'distribution', conte,
  n: t: 'global' },
    { na,
  m: e: 'rating', conte,
  n: t: 'general' },
    { na,
  m: e: 'theme-color', conte,
  n: t: '#06b6d4' },
    { na,
  m: e: 'msapplication-TileColor', conte,
  n: t: '#06b6d4' },
    { na,
  m: e: 'apple-mobile-web-app-capable', conte,
  n: t: 'yes' },
    { na,
  m: e: 'apple-mobile-web-app-status-bar-style', conte,
  n: t: 'default' },
    { na,
  m: e: 'apple-mobile-web-app-title', conte,
  n: t: 'Zion Tech Group' },
    { na,
  m: e: 'application-name', conte,
  n: t: 'Zion Tech Group' },
    { na,
  m: e: 'format-detection', conte,
  n: t: 'telephone=no' },
    ...(tags.map(tag => ({ na,
  m: e: 'articl,
  e:tag', conte,
  n: t: tag }))),
    ...(section ? [{ na,
  m: e: 'articl,
  e:section', conte,
  n: t: section },
  ] : []),
    ...(publishedTime ? [{ na,
  m: e: 'articl,
  e:published_time', conte,
  n: t: publishedTime },
  ] : []),
    ...(modifiedTime ? [{ na,
  m: e: 'articl,
  e:modified_time', conte,
  n: t: modifiedTime },
  ] : [])
  ]
  // Additional links for better SEO and performance
  const enhancedAdditionalLinks = [
    ...additionalLinks,
    { r,
  e: l: 'preconnect', hr,
  e: f: 'http,
  s://fonts.googleapis.com' },
    { r,
  e: l: 'preconnect', hr,
  e: f: 'http,
  s://fonts.gstatic.com' },
    { r,
  e: l: 'dns-prefetch', hr,
  e: f: 'http,
  s://www.google-analytics.com' },
    { r,
  e: l: 'dns-prefetch', hr,
  e: f: 'http,
  s://www.googletagmanager.com' },
    { r,
  e: l: 'manifest', hr,
  e: f: '/manifest.json' },
    { r,
  e: l: 'icon', ty,
  p: e: 'image/x-icon', hr,
  e: f: '/favicon.ico' },
    { r,
  e: l: 'icon', ty,
  p: e: 'image/png', siz,
  e: s: '32x32', hr,
  e: f: '/favicon-32x32.png' },
    { r,
  e: l: 'icon', ty,
  p: e: 'image/png', siz,
  e: s: '16x16', hr,
  e: f: '/favicon-16x16.png' },
    { r,
  e: l: 'apple-touch-icon', siz,
  e: s: '180x180', hr,
  e: f: '/apple-touch-icon.png' },
    { r,
  e: l: 'mask-icon', hr,
  e: f: '/safari-pinned-tab.svg', col,
  o: r: '#06b6d4' },
  ]
  // Performance optimization
  useEffect(() () => {
    // Preload critical resources
    const preloadCriticalResources = () () => {
      // Preload critical fonts
      const fontLinks = [
        'htt,
  p: s: //fonts.googleapis.com/css2?family=Orbitro,
  n:wght@400,500,600,700,800,900&display=swap',
        'htt,
  p: s: //fonts.googleapis.com/css2?family=Rajdhan,
  i:wght@300,400,500,600,700&display=swap'
      ]
      fontLinks.forEach(href () => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = href
        link.as = 'style'
        document.head.appendChild(link)
})
      // Preload critical images
      const criticalImages = [
        '/images/zion-tech-group-logo.png',
        '/images/hero-background.jpg'
      ]
      criticalImages.forEach(src () => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = src
        link.as = 'image'
        document.head.appendChild(link)
})
}
    // Add resource hints
    const addResourceHints = () () => {
      const hints = [
        { r,
  e: l: 'preconnect', hr,
  e: f: 'http,
  s://cdn.jsdelivr.net' },
        { r,
  e: l: 'dns-prefetch', hr,
  e: f: '//cdn.jsdelivr.net' },
  ]
      hints.forEach(hint () => {
        const link = document.createElement('link')
        link.rel = hint.rel
        link.href = hint.href
        document.head.appendChild(link)
})
}
    // Initialize optimizations
    preloadCriticalResources()
    addResourceHints()
    // Cleanup function
    return () () => {
      // Remove any dynamically added resource hints
      const dynamicLinks = document.querySelectorAll('link[rel="preload"], link[rel="preconnect"], link[rel="dns-prefetch"]')
      dynamicLinks.forEach(link () => {
        if (link.getAttribute('data-dynamic')) {
          link.remove()
},
  })
},
  }, [])
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={defaultCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={defaultOgUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og: ima,
  g: e:width" content="1200" />
      <meta property="og:ima,
  g: e:height" content="630" />
      <meta property="og:ima,
  g: e:alt" content="Zion Tech Group - AI-Powered Business Solutions" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="o,
  g:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitt,
  e: r:card" content={twitterCard} />
      <meta name="twitt,
  e: r:site" content={twitterSite} />
      <meta name="twitt,
  e: r:creator" content={twitterCreator} />
      <meta name="twitt,
  e: r:title" content={enhancedTitle} />
      <meta name="twitt,
  e: r:description" content={enhancedDescription} />
      <meta name="twitt,
  e: r:image" content={defaultOgImage} />
      <meta name="twitt,
  e: r: imag,
  e:alt" content="Zion Tech Group - AI-Powered Business Solutions" />
      
      {/* Additional Meta Tags */},
  {enhancedAdditionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))},
  {/* Additional Links */},
  {enhancedAdditionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href},
  {...(link.type && { ty,
  p: e: link.type })},
  {...(link.sizes && { siz,
  e: s: link.sizes })},
  {...(link.color && { col,
  o: r: link.color })} />
      ))},
  {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedStructuredData)}
      </script>
      
      {/* Performance Optimizations */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self', script-src 'self' 'unsafe-inline' 'unsafe-eval' htt,
  p: s: //www.googletagmanager.com http,
  s://www.google-analytics.com, style-src 'self' 'unsafe-inline' htt,
  p: s://fonts.googleapis.com, font-src 'self' htt,
  p: s://fonts.gstatic.com, img-src 'self' da,
  t: a: http,
  s:, connect-src 'self' htt,
  p: s://www.google-analytics.com, frame-src 'self'," />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1, mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  )
}
export function HomePageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      type="website"
      structuredData={
        "@context": "htt,
  p: s://schema.org",
        "@type": "Service",
        "name": "Technology Services",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": "AI Solutions, Quantum Computing, IT Services",
        "description": "Comprehensive technology services including AI, quantum computing, and IT infrastructure"
      },
  }
    />
  )
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions"
      description="Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation."
      keywords="contact Zion Tech Group, AI consulting, quantum computing consulting, IT consulting, digital transformation consulting"
      type="website"
      structuredData={
        "@context": "htt,
  p: s://schema.org",
        "@type": "ContactPage",
        "name": "Contact Zion Tech Group",
        "description": "Get in touch with Zion Tech Group for technology consulting and solutions",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          },
  },
  },
  }
    />
  )
}

export function BlogPostSEO({ 
  title, 
  description, 
  author,
  publishedDate,
  image,
  slug 
}: {
  tit,
  l: e: string,
  descriptio: n: string,
  autho: r: string,
  publishedDat: e: string,
  imag: e: string
  slu,
  g: string
}) {
  return (
    <SEO
      title={title}
      description={description}
      image={image}
      url={`htt,
  p: s://ziontechgroup.com/blog/${slug}`}
      type="article"
      structuredData={
        "@context": "htt,
  p: s://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "htt,
  p: s://ziontechgroup.com/images/zion-tech-group-logo.png"
          },
  },
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `htt,
  p: s://ziontechgroup.com/blog/${slug}`
        },
  },
  }
    />
  )
}
