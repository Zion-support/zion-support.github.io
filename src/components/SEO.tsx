import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  links?: Array<{ rel: string; href: string }>;
  scripts?: Array<{ type: string; innerHTML: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI & Technology Solutions Provider',
  description = 'Transform your business with cutting-edge AI, cybersecurity, cloud infrastructure, and digital transformation solutions from Zion Tech Group.',
  keywords = ['AI', 'artificial intelligence', 'cybersecurity', 'cloud computing', 'digital transformation', 'technology services', 'Zion Tech Group'],
  author = 'Zion Tech Group',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  lang = 'en',
  meta = [],
  links = [],
  scripts = [],
}) => {
  const fullTitle = `${title} | Zion Tech Group - AI & Technology Solutions`;
  const fullDescription = description || 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.';
  const fullKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords || 'AI, artificial intelligence, technology solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group';

  // Update document title and meta description for better SEO
  useEffect(() => {
    if (title) {
      document.title = fullTitle;
    }
    
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', fullDescription);
    }
  }, [title, fullTitle, fullDescription]);

  // Generate structured data for better search engine understanding
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": canonical,
      "logo": "https://ziontechgroup.com/logo.png",
      "description": fullDescription,
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
        "https://www.linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
        "https://www.facebook.com/ziontechgroup"
      ],
      "foundingDate": "2023",
      "numberOfEmployees": "10-50",
      "industry": "Technology",
      "knowsAbout": keywords,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Custom AI and machine learning solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity",
              "description": "Advanced security and threat protection"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure",
              "description": "Scalable cloud solutions and migration"
            }
          }
        ]
      }
    };

    return structuredData || baseData;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={lang} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="color-scheme" content="dark light" />
      
      {/* Custom Meta Tags */}
      {meta.map((metaTag, index) => (
        <meta key={index} name={metaTag.name} content={metaTag.content} />
      ))}
      
      {/* Custom Links */}
      {links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
      
      {/* Custom Scripts */}
      {scripts.map((script, index) => (
        <script key={index} type={script.type} dangerouslySetInnerHTML={{ __html: script.innerHTML }} />
      ))}
      
      {/* Additional SEO Enhancements */}
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for additional performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
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
>>>>>>> 2f94ab630cdb3ae7e34b2d154567193b6397d59b
