import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
  alternateLanguages?: { [key: string]: string };
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;
  wordCount?: number;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  language = 'en',
  alternateLanguages = {},
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  readingTime,
  wordCount
}) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${window.location.pathname}`;
  
  // Default keywords for Zion Tech Group
  const defaultKeywords = [
    'AI solutions',
    'business intelligence',
    'IT services',
    'digital transformation',
    'cloud computing',
    'cybersecurity',
    'data analytics',
    'machine learning',
    'automation',
    'technology consulting'
  ];
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  // Generate structured data for organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/images/zion-tech-group-logo.png`,
    "description": "Leading provider of AI-powered business solutions and IT services",
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
            "description": "Machine learning and data science solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Infrastructure",
            "description": "Cloud infrastructure and DevOps services"
          }
        }
      ]
    }
  };

  // Generate structured data for web page
  const webpageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": fullCanonical,
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "inLanguage": language,
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl
    }
  };

  // Generate structured data for article if applicable
  const articleStructuredData = ogType === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/zion-tech-group-logo.png`
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonical
    },
    "articleSection": section,
    "keywords": allKeywords.join(', '),
    ...(readingTime && { "timeRequired": `PT${readingTime}M"` }),
    ...(wordCount && { "wordCount": wordCount })
  } : null;

  // Combine structured data
  const finalStructuredData = [
    organizationStructuredData,
    webpageStructuredData,
    ...(articleStructuredData ? [articleStructuredData] : []),
    ...(structuredData ? [structuredData] : [])
  ];

  // Update meta tags when component mounts or props change
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', allKeywords.join(', '));
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);
    
    // Update robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    
    const robotsContent = [];
    if (noindex) robotsContent.push('noindex');
    if (nofollow) robotsContent.push('nofollow');
    if (robotsContent.length === 0) robotsContent.push('index', 'follow');
    
    robotsMeta.setAttribute('content', robotsContent.join(', '));
    
    // Update language meta
    let langMeta = document.querySelector('meta[http-equiv="content-language"]');
    if (!langMeta) {
      langMeta = document.createElement('meta');
      langMeta.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(langMeta);
    }
    langMeta.setAttribute('content', language);
    
    // Update alternate language links
    Object.entries(alternateLanguages).forEach(([lang, url]) => {
      let alternateLink = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!alternateLink) {
        alternateLink = document.createElement('link');
        alternateLink.setAttribute('rel', 'alternate');
        alternateLink.setAttribute('hreflang', lang);
        document.head.appendChild(alternateLink);
      }
      alternateLink.setAttribute('href', url);
    });
    
    // Update Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: fullCanonical },
      { property: 'og:image', content: ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}` },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: language },
      ...(publishedTime && [{ property: 'og:published_time', content: publishedTime }]),
      ...(modifiedTime && [{ property: 'og:modified_time', content: modifiedTime }]),
      ...(section && [{ property: 'og:section', content: section }]),
      ...(tags.length > 0 && [{ property: 'og:tag', content: tags.join(', ') }])
    ];
    
    ogTags.forEach(tag => {
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', tag.property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', tag.content);
    });
    
    // Update Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}` }
    ];
    
    twitterTags.forEach(tag => {
      let twitterMeta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterMeta) {
        twitterMeta = document.createElement('meta');
        twitterMeta.setAttribute('name', tag.name);
        document.head.appendChild(twitterMeta);
      }
      twitterMeta.setAttribute('content', tag.content);
    });
    
    // Inject structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(finalStructuredData);
    document.head.appendChild(script);
    
  }, [
    fullTitle,
    description,
    allKeywords,
    fullCanonical,
    noindex,
    nofollow,
    language,
    alternateLanguages,
    ogImage,
    ogType,
    publishedTime,
    modifiedTime,
    section,
    tags,
    finalStructuredData
  ]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex || nofollow ? `${noindex ? 'noindex' : ''}${nofollow ? ',nofollow' : ''}`.replace(/^,/, '') : 'index,follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Language and Localization */}
      <meta httpEquiv="content-language" content={language} />
      <html lang={language} />
      
      {/* Alternate Language Links */}
      {Object.entries(alternateLanguages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hreflang={lang} href={url} />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language} />
      {publishedTime && <meta property="og:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="og:modified_time" content={modifiedTime} />}
      {section && <meta property="og:section" content={section} />}
      {tags.length > 0 && <meta property="og:tag" content={tags.join(', ')} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#38bdf8" />
      <meta name="msapplication-TileColor" content="#38bdf8" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export function HomePageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      type="website"
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
      type="website"
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
      image={image}
      url={`https://ziontechgroup.com/blog/${slug}`}
      type="article"
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
