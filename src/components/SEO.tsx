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
  url?: string;
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const defaultSEO = {
  title: 'Zion Tech Group - Leading AI & Technology Solutions',
  description: 'Transform your business with Zion Tech Group\'s cutting-edge AI, quantum computing, and enterprise solutions. Expert consulting, innovative services, and future-ready technology.',
  keywords: 'AI, artificial intelligence, quantum computing, enterprise solutions, technology consulting, digital transformation, cybersecurity, blockchain, IoT, edge computing, micro SaaS, IT services',
  author: 'Zion Tech Group',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@ziontechgroup',
  twitterCreator: '@ziontechgroup',
  lang: 'en',
  url: 'https://ziontechgroup.com',
  ogImage: '/images/zion-tech-group-og.jpg'
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
  scripts = [],
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const seoTitle = title ? `${title} | Zion Tech Group` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoAuthor = author || defaultSEO.author;
  const seoLang = lang || defaultSEO.lang;
  const seoUrl = url || defaultSEO.url;
  const seoType = type || defaultSEO.ogType;
  const seoOgImage = ogImage || defaultSEO.ogImage;

  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": seoUrl,
    "logo": "https://ziontechgroup.com/logo.png",
    "description": seoDescription,
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
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI & Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions",
            "description": "Artificial Intelligence and Machine Learning Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Infrastructure",
            "description": "Enterprise IT Infrastructure and Cloud Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Micro SaaS Platforms",
            "description": "Innovative Micro SaaS Solutions and Platforms"
          }
        }
      ]
    }
  };

  // Merge custom structured data with defaults
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  // Add article-specific structured data if type is article
  if (seoType === 'article' && publishedTime) {
    finalStructuredData["@type"] = "Article";
    finalStructuredData["datePublished"] = publishedTime;
    if (modifiedTime) {
      finalStructuredData["dateModified"] = modifiedTime;
    }
    if (section) {
      finalStructuredData["articleSection"] = section;
    }
    if (tags.length > 0) {
      finalStructuredData["keywords"] = tags.join(", ");
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoAuthor} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={seoLang} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={seoType} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={seoLang} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard || defaultSEO.twitterCard} />
      <meta name="twitter:site" content={twitterSite || defaultSEO.twitterSite} />
      <meta name="twitter:creator" content={twitterCreator || defaultSEO.twitterCreator} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />
      
      {/* Additional Meta Tags */}
      {meta.map((metaTag, index) => (
        <meta key={index} name={metaTag.name} content={metaTag.content} />
      ))}
      
      {/* Additional Links */}
      {links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Scripts */}
      {scripts.map((script, index) => (
        <script
          key={index}
          src={script.src}
          type={script.type}
          async={script.async}
          defer={script.defer}
        />
      ))}
    </Helmet>
  );
};

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
