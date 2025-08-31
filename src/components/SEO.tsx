import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  links?: Array<{ rel: string; href: string }>;
  scripts?: Array<{ src: string; type?: string; async?: boolean; defer?: boolean }>;
}

const defaultSEO = {
  title: 'Zion Tech Group - AI, IT & Micro SaaS Solutions',
  description: 'Leading provider of AI-powered solutions, IT services, and innovative micro SaaS platforms. Transform your business with cutting-edge technology.',
  keywords: 'AI, artificial intelligence, IT services, micro SaaS, cybersecurity, cloud computing, digital transformation, business automation',
  author: 'Zion Tech Group',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@ziontechgroup',
  twitterCreator: '@ziontechgroup',
  lang: 'en'
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author,
  canonical,
  ogImage,
  ogType,
  twitterCard,
  twitterSite,
  twitterCreator,
  structuredData,
  noindex = false,
  nofollow = false,
  lang,
  meta = [],
  links = [],
  scripts = []
}) => {
  const seoTitle = title ? `${title} | Zion Tech Group` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoAuthor = author || defaultSEO.author;
  const seoLang = lang || defaultSEO.lang;

  // Default Open Graph image
  const defaultOgImage = ogImage || 'https://ziontechgroup.com/og-image.jpg';

  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": seoDescription,
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
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "serviceType": [
      "AI Solutions",
      "IT Services", 
      "Micro SaaS Platforms",
      "Cybersecurity",
      "Cloud Computing",
      "Digital Transformation"
    ]
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  // Generate meta tags
  const metaTags = [
    // Basic meta tags
    { name: 'description', content: seoDescription },
    { name: 'keywords', content: seoKeywords },
    { name: 'author', content: seoAuthor },
    { name: 'robots', content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
    
    // Open Graph meta tags
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { property: 'og:type', content: ogType || defaultSEO.ogType },
    { property: 'og:url', content: canonical || window.location.href },
    { property: 'og:image', content: defaultOgImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: seoLang },
    
    // Twitter Card meta tags
    { name: 'twitter:card', content: twitterCard || defaultSEO.twitterCard },
    { name: 'twitter:site', content: twitterSite || defaultSEO.twitterSite },
    { name: 'twitter:creator', content: twitterCreator || defaultSEO.twitterCreator },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
    { name: 'twitter:image', content: defaultOgImage },
    
    // Additional meta tags
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#6B46C1' },
    { name: 'msapplication-TileColor', content: '#6B46C1' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
    
    // Performance and security
    { name: 'referrer', content: 'strict-origin-when-cross-origin' },
    { name: 'format-detection', content: 'telephone=no' },
    
    // Custom meta tags
    ...meta
  ];

  // Generate link tags
  const linkTags = [
    // Canonical URL
    { rel: 'canonical', href: canonical || window.location.href },
    
    // Favicon and app icons
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6B46C1' },
    
    // Manifest and theme
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    
    // Custom link tags
    ...links
  ];

  // Generate script tags
  const scriptTags = [
    // Google Analytics (if enabled)
    // { src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID', async: true },
    
    // Custom script tags
    ...scripts
  ];

  // Add structured data to page
  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(finalStructuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [finalStructuredData]);

  return (
    <Helmet>
      {/* Basic HTML attributes */}
      <html lang={seoLang} />
      <title>{seoTitle}</title>
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Link tags */}
      {linkTags.map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {/* Script tags */}
      {scriptTags.map((script, index) => (
        <script key={index} {...script} />
      ))}
      
      {/* Additional head content */}
      <noscript>
        <div style={{ 
          backgroundColor: '#f44336', 
          color: 'white', 
          padding: '1rem', 
          textAlign: 'center' 
        }}>
          This website requires JavaScript to function properly. Please enable JavaScript in your browser.
        </div>
      </noscript>
    </Helmet>
  );
};

export default SEO;

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="AI-Powered Business Solutions & Quantum Computing | Zion Tech Group"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity."
      keywords="AI business solutions, quantum computing, autonomous operations, digital transformation, IT services, cybersecurity, machine learning, neural networks"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Zion Tech Group - AI-Powered Business Solutions",
        "description": "Leading provider of AI-powered business solutions, quantum computing, and innovative IT services for digital transformation.",
        "url": "https://ziontechgroup.com",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "AI-powered business solutions and quantum computing services"
        }
      }}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Technology Services",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": "AI Solutions, Quantum Computing, IT Services",
        "description": "Comprehensive technology services including AI, quantum computing, and IT infrastructure"
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions"
      description="Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation."
      keywords="contact Zion Tech Group, AI consulting, quantum computing consulting, IT consulting, digital transformation consulting"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
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
          }
        }
      }}
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
