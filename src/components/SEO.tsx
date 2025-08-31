<<<<<<< HEAD
import React, { useEffect, useCallback } from 'react';
=======
import React from 'react';
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
import { Helmet } from 'react-helmet-async';

interface SEOProps {
<<<<<<< HEAD
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  canonicalUrl?: string;
  robots?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  enableStructuredData?: boolean;
  enableSocialMedia?: boolean;
  enableAnalytics?: boolean;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Solutions & Digital Transformation',
  description = 'Transform your business with cutting-edge AI solutions, quantum computing, and digital transformation services. Expert IT consulting and innovative technology solutions.',
  keywords = [
    'AI solutions',
    'quantum computing',
    'digital transformation',
    'IT consulting',
    'cybersecurity',
    'cloud services',
    'machine learning',
    'artificial intelligence',
    'business technology',
    'enterprise solutions'
  ],
  image = '/images/zion-tech-group-og.jpg',
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = [],
  structuredData,
  canonicalUrl,
  robots = 'index, follow',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  enableStructuredData = true,
  enableSocialMedia = true,
  enableAnalytics = true,
  noindex = false,
  nofollow = false,
  language = 'en'
}) => {
  const location = useLocation();
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const currentUrl = url || `${siteUrl}${location.pathname}`;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  
  // Generate structured data for the page
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData) return null;
    
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'WebPage',
      "name": fullTitle,
      "description": description,
      "url": currentUrl,
      "image": image,
      "author": {
        "@type": "Organization",
        "name": author,
        "url": siteUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/zion-tech-group-logo.png`
        }
      }
    };

    if (type === 'article' && publishedTime) {
      baseStructuredData["@type"] = "Article";
      baseStructuredData["datePublished"] = publishedTime;
      if (modifiedTime) {
        baseStructuredData["dateModified"] = modifiedTime;
      }
    }

    if (structuredData) {
      return { ...baseStructuredData, ...structuredData };
    }

    return baseStructuredData;
  }, [enableStructuredData, type, fullTitle, description, currentUrl, image, author, siteUrl, siteName, publishedTime, modifiedTime, structuredData]);

  // Generate meta robots content
  const generateRobotsContent = useCallback(() => {
    let robotsContent = robots;
    
    if (noindex) {
      robotsContent = 'noindex';
    } else if (nofollow) {
      robotsContent = robotsContent ? `${robotsContent}, nofollow` : 'nofollow';
    }
    
    return robotsContent;
  }, [robots, noindex, nofollow]);

  // Generate canonical URL
  const generateCanonicalUrl = useCallback(() => {
    return canonicalUrl || currentUrl;
  }, [canonicalUrl, currentUrl]);

  // Generate Open Graph data
  const generateOpenGraphData = useCallback(() => {
    if (!enableSocialMedia) return {};
    
    return {
      "og:title": fullTitle,
      "og:description": description,
      "og:image": image,
      "og:url": currentUrl,
      "og:type": ogType,
      "og:site_name": siteName,
      "og:locale": language,
      ...(author && { "og:author": author }),
      ...(publishedTime && { "article:published_time": publishedTime }),
      ...(modifiedTime && { "article:modified_time": modifiedTime }),
      ...(section && { "article:section": section }),
      ...(tags && tags.length > 0 && { "article:tag": tags.join(', ') })
    };
  }, [enableSocialMedia, fullTitle, description, image, currentUrl, ogType, siteName, language, author, publishedTime, modifiedTime, section, tags]);

  // Generate Twitter Card data
  const generateTwitterCardData = useCallback(() => {
    if (!enableSocialMedia) return {};
    
    return {
      "twitter:card": twitterCard,
      "twitter:site": twitterSite,
      "twitter:creator": twitterCreator,
      "twitter:title": fullTitle,
      "twitter:description": description,
      "twitter:image": image,
      "twitter:url": currentUrl
    };
  }, [enableSocialMedia, twitterCard, twitterSite, twitterCreator, fullTitle, description, image, currentUrl]);

  // Generate additional meta tags
  const generateAdditionalMetaTags = useCallback(() => {
    const additionalTags = [
      { name: "keywords", content: keywords.join(', ') },
      { name: "author", content: author },
      { name: "robots", content: generateRobotsContent() },
      { name: "language", content: language },
      { name: "revisit-after", content: "7 days" },
      { name: "distribution", content: "global" },
      { name: "rating", content: "general" },
      { name: "theme-color", content: "#0ea5e9" },
      { name: "msapplication-TileColor", content: "#0ea5e9" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: siteName },
      { name: "application-name", content: siteName },
      { name: "msapplication-config", content: "/browserconfig.xml" }
    ];

    if (publishedTime) {
      additionalTags.push({ name: "article:published_time", content: publishedTime });
    }
    if (modifiedTime) {
      additionalTags.push({ name: "article:modified_time", content: modifiedTime });
    }
    if (section) {
      additionalTags.push({ name: "article:section", content: section });
    }
    if (tags && tags.length > 0) {
      additionalTags.push({ name: "article:tag", content: tags.join(', ') });
    }

    return additionalTags;
  }, [keywords, author, generateRobotsContent, language, publishedTime, modifiedTime, section, tags, siteName]);

  // Generate preconnect and DNS prefetch links
  const generateResourceHints = useCallback(() => {
    const hints = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
      { rel: "dns-prefetch", href: "https://www.googletagmanager.com" }
    ];

    if (enableAnalytics) {
      hints.push(
        { rel: "preconnect", href: "https://www.google-analytics.com" },
        { rel: "preconnect", href: "https://www.googletagmanager.com" }
      );
    }

    return hints;
  }, [enableAnalytics]);

  // Generate favicon and icon links
  const generateIconLinks = useCallback(() => {
    return [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#0ea5e9" }
    ];
  }, []);

  // Generate alternate language links
  const generateAlternateLinks = useCallback(() => {
    const languages = ['en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'ja', 'ko', 'zh', 'ar', 'hi'];
    return languages.map(lang => ({
      rel: "alternate",
      hreflang: lang,
      href: `${siteUrl}/${lang}${location.pathname}`
    }));
  }, [siteUrl, location.pathname]);

  // Generate JSON-LD structured data
  const generateJsonLd = useCallback(() => {
    const data = generateStructuredData();
    if (!data) return null;
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data)
        }}
      />
    );
  }, [generateStructuredData]);

  // Generate Google Analytics script
  const generateAnalyticsScript = useCallback(() => {
    if (!enableAnalytics) return null;
    
    return (
      <>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `
          }}
        />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `
          }}
        />
      </>
    );
  }, [enableAnalytics]);

  // Generate Google Tag Manager noscript
  const generateGTMNoscript = useCallback(() => {
    if (!enableAnalytics) return null;
    
    return (
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    );
  }, [enableAnalytics]);

  // Generate performance optimization links
  const generatePerformanceLinks = useCallback(() => {
    return [
      { rel: "preload", href: "/fonts/inter-var.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: image, as: "image" },
      { rel: "modulepreload", href: "/js/main.js" }
    ];
  }, [image]);

  // Generate security headers
  const generateSecurityHeaders = useCallback(() => {
    return [
      { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
      { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
      { httpEquiv: "X-Frame-Options", content: "SAMEORIGIN" },
      { httpEquiv: "X-XSS-Protection", content: "1; mode=block" },
      { httpEquiv: "Referrer-Policy", content: "strict-origin-when-cross-origin" },
      { httpEquiv: "Permissions-Policy", content: "camera=(), microphone=(), geolocation=()" }
    ];
  }, []);

  // Generate viewport and mobile optimization meta tags
  const generateMobileMetaTags = useCallback(() => {
    return [
      { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
      { name: "format-detection", content: "telephone=no" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: siteName }
    ];
  }, [siteName]);

  // Generate social media meta tags
  const generateSocialMediaTags = useCallback(() => {
    if (!enableSocialMedia) return [];
    
    const openGraphTags = Object.entries(generateOpenGraphData()).map(([property, content]) => ({
      property,
      content
    }));
    
    const twitterTags = Object.entries(generateTwitterCardData()).map(([name, content]) => ({
      name,
      content
    }));
    
    return [...openGraphTags, ...twitterTags];
  }, [enableSocialMedia, generateOpenGraphData, generateTwitterCardData]);

  // Generate all meta tags
  const generateAllMetaTags = useCallback(() => {
    return [
      ...generateAdditionalMetaTags(),
      ...generateSocialMediaTags(),
      ...generateSecurityHeaders(),
      ...generateMobileMetaTags()
    ];
  }, [generateAdditionalMetaTags, generateSocialMediaTags, generateSecurityHeaders, generateMobileMetaTags]);

  // Generate all link tags
  const generateAllLinkTags = useCallback(() => {
    return [
      { rel: "canonical", href: generateCanonicalUrl() },
      ...generateResourceHints(),
      ...generateIconLinks(),
      ...generateAlternateLinks(),
      ...generatePerformanceLinks()
    ];
  }, [generateCanonicalUrl, generateResourceHints, generateIconLinks, generateAlternateLinks, generatePerformanceLinks]);

  // Effect to update document title and meta tags
  useEffect(() => {
    document.title = fullTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', generateCanonicalUrl());
    
    // Update Open Graph tags
    if (enableSocialMedia) {
      Object.entries(generateOpenGraphData()).forEach(([property, content]) => {
        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if (!ogTag) {
          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', property);
          document.head.appendChild(ogTag);
        }
        ogTag.setAttribute('content', content);
      });
    }
  }, [fullTitle, description, generateCanonicalUrl, enableSocialMedia, generateOpenGraphData]);

=======
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = `${title} | Zion Tech Group - AI & Technology Solutions`;
  const defaultKeywords = 'AI, artificial intelligence, technology solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group';
  
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      
      {/* All Meta Tags */}
      {generateAllMetaTags().map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* All Link Tags */}
      {generateAllLinkTags().map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {/* Structured Data */}
      {generateJsonLd()}
      
      {/* Analytics Scripts */}
      {generateAnalyticsScript()}
      
      {/* Google Tag Manager Noscript */}
      {generateGTMNoscript()}
=======
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
          "description": "Leading provider of AI-powered technology solutions, cybersecurity, cloud computing, and digital transformation services.",
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
            "https://linkedin.com/company/zion-tech-group",
            "https://twitter.com/ziontechgroup",
            "https://facebook.com/ziontechgroup"
          ]
        })}
      </script>
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    </Helmet>
  );
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="AI-Powered Business Solutions & Quantum Computing | Zion Tech Group"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity."
      keywords="AI business solutions, quantum computing, autonomous operations, digital transformation, IT services, cybersecurity, machine learning, neural networks"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="Comprehensive AI & IT Services | Zion Tech Group"
      description="Explore our comprehensive suite of AI services, quantum computing solutions, cybersecurity, and digital transformation services. Expert IT consulting and innovative technology solutions."
      keywords="AI services, quantum computing, cybersecurity, digital transformation, IT consulting, cloud services, machine learning, enterprise solutions"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get Expert AI & IT Solutions"
      description="Contact Zion Tech Group for expert AI solutions, quantum computing, and digital transformation services. Get in touch with our technology experts today."
      keywords="contact Zion Tech Group, AI solutions, IT consulting, technology services, digital transformation, quantum computing"
      enableStructuredData={true}
      enableSocialMedia={true}
      enableAnalytics={true}
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  author, 
  publishedDate, 
  image, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}) {
  return (
    <SEO
      title={title}
      description={description}
      author={author}
      canonical={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
      ogImage={image}
      structuredData={{
        "@context": "https://schema.org",
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
            "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
          }
        },
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ziontechgroup.com/blog/${slug}`
        }
      }}
    />
  );
}
