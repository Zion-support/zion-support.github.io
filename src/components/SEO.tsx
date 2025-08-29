import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string }>;
}

export const SEO: React.FC<SEOProps> = ({
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
  additionalLinks = []
}) => {
  // Default values
  const defaultOgImage = ogImage || '/images/zion-tech-group-og-image.jpg';
  const defaultOgUrl = ogUrl || window.location.href;
  const defaultCanonicalUrl = canonicalUrl || window.location.href;
  
  // Enhanced title with brand
  const enhancedTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  // Enhanced description
  const enhancedDescription = description.length > 160 
    ? `${description.substring(0, 157)}...` 
    : description;

  // Default keywords if not provided
  const defaultKeywords = keywords || 'AI, artificial intelligence, technology, business solutions, Zion Tech Group, digital transformation, cloud computing, data analytics, IT infrastructure, micro SaaS, digital twin';

  // Generate structured data for organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions and technology services",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States"
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
    ]
  };

  // Generate structured data for website
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "AI-powered business solutions and technology services",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Combine structured data
  const combinedStructuredData = [
    organizationStructuredData,
    websiteStructuredData,
    ...(structuredData ? [structuredData] : [])
  ];

  // Enhanced meta tags
  const enhancedMetaTags = [
    // Basic SEO
    { name: 'description', content: enhancedDescription },
    { name: 'keywords', content: defaultKeywords },
    { name: 'author', content: 'Zion Tech Group' },
    { name: 'robots', content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
    { name: 'language', content: 'English' },
    { name: 'revisit-after', content: '7 days' },
    { name: 'rating', content: 'General' },
    
    // Open Graph
    { property: 'og:title', content: enhancedTitle },
    { property: 'og:description', content: enhancedDescription },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: defaultOgUrl },
    { property: 'og:image', content: defaultOgImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:site', content: twitterSite },
    { name: 'twitter:creator', content: twitterCreator },
    { name: 'twitter:title', content: enhancedTitle },
    { name: 'twitter:description', content: enhancedDescription },
    { name: 'twitter:image', content: defaultOgImage },
    
    // Additional meta tags
    ...additionalMeta
  ];

  // Enhanced link tags
  const enhancedLinkTags = [
    // Canonical URL
    { rel: 'canonical', href: defaultCanonicalUrl },
    
    // Preconnect to external domains
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    
    // DNS prefetch
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    
    // Additional links
    ...additionalLinks
  ];

  // Performance optimization
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
        'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
      ];

      fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'style';
        document.head.appendChild(link);
      });

      // Preload critical images
      const criticalImages = [
        '/images/zion-tech-group-logo.png',
        '/images/hero-background.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Add resource hints
    const addResourceHints = () => {
      const hints = [
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
        { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    addResourceHints();

    // Cleanup function
    return () => {
      // Remove any dynamically added resource hints
      const dynamicLinks = document.querySelectorAll('link[rel="preload"], link[rel="preconnect"], link[rel="dns-prefetch"]');
      dynamicLinks.forEach(link => {
        if (link.getAttribute('data-dynamic')) {
          link.remove();
        }
      });
    };
  }, []);

  return (
    <Helmet>
      {/* Basic HTML tags */}
      <title>{enhancedTitle}</title>
      <html lang="en" />
      
      {/* Meta tags */}
      {enhancedMetaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Link tags */}
      {enhancedLinkTags.map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedStructuredData)}
      </script>
      
      {/* Additional performance optimizations */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* PWA meta tags */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#22ddd2" />
      
      {/* Social media meta tags */}
      <meta property="og:image:alt" content="Zion Tech Group - AI-powered business solutions" />
      <meta property="og:image:secure_url" content={defaultOgImage} />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Business meta tags */}
      <meta name="business:contact:phone" content="+1-800-ZION-TECH" />
      <meta name="business:contact:email" content="info@ziontechgroup.com" />
      <meta name="business:contact:website" content="https://ziontechgroup.com" />
      <meta name="business:contact:address" content="United States" />
      
      {/* Verification meta tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Analytics and tracking */}
      <meta name="google-analytics" content="your-ga-tracking-id" />
      <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      
      {/* Performance hints - Removed unused font preloads */}
      
      {/* Critical CSS */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .bg-futuristic {
            background: linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0.95) 100%);
          }
          .animate-fade-in {
            animation: fadeIn 220ms ease-out both;
          }
          .btn-futuristic {
            background: linear-gradient(135deg, #22ddd2 0%, #2e73ea 100%);
            border: none;
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Helmet>
  );
};

export function HomePageSEO() {
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
      ogImage={image}
      ogUrl={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
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
