import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords,
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`;
  const fullUrl = url || window.location.href;
  const defaultKeywords = 'AI, artificial intelligence, machine learning, IT services, cloud computing, digital transformation, business intelligence, cybersecurity, DevOps, data analytics';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions and comprehensive IT services",
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
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional structured data for articles */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": fullTitle,
            "description": description,
            "image": image,
            "author": {
              "@type": "Organization",
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
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": fullUrl
            }
          })}
        </script>
      )}

      {/* Additional structured data for services */}
      {type === 'service' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "areaServed": "Worldwide",
            "serviceType": "Technology Services"
          })}
        </script>
      )}
    </Helmet>
  );
}

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
