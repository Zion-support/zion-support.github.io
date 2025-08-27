import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
=======
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
    "url": siteUrl,
    "logo": `${siteUrl}/images/zion-logo.png`,
    "description": "AI-powered tech marketplace connecting businesses with top talent, services, and equipment",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEO({
  title,
  description,
  canonical,
  url,
  image = '/images/zion-tech-group-og.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  noindex = false,
  nofollow = false
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com');
  
  // Default meta description if none provided
  const metaDescription = description || 
    'Zion Tech Group - Leading provider of cutting-edge AI solutions, cloud computing, and digital transformation services. Transform your business with our innovative technology ecosystem.';

  // Default title if none provided
  const fullTitle = title ? `${title} | Zion Tech Group` : 'Zion Tech Group - AI & Technology Solutions';

  // Robots meta tag
  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (robots.length === 0) robots.push('index', 'follow');
  const robotsContent = robots.join(', ');

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/images/zion-tech-group-logo.png`,
    "description": "Leading provider of cutting-edge AI solutions, cloud computing, and digital transformation services",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "streetAddress": "364 E Main St STE 1008"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;
=======
            "description": "Advanced security protocols and threat protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & DevOps",
            "description": "Scalable cloud infrastructure and development operations"
          }
        }
      ]
    }
  };

  // Structured data for the current page
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebPage',
    "headline": title,
    "description": metaDescription,
    "url": fullUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/zion-tech-group-logo.png`
      }
    },
    "image": fullImageUrl,
    "datePublished": publishedTime || new Date().toISOString(),
    "dateModified": modifiedTime || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": author
    },
    ...(type === 'article' && {
      "articleSection": section,
      "keywords": tags.join(', ')
    })
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
}

export function SEO({ title, description, keywords, canonical, noindex = false }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
=======
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content={author} />
      <meta name="keywords" content={tags.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.gpteng.co" />
=======
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
      
      <meta name="business:contact_data:phone_number" content="+1-800-ZION-TECH" />
      <meta name="business:contact_data:email" content="info@ziontechgroup.com" />
    </Helmet>
  );
}
=======
=======
      {/* Additional structured data if provided */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {section && (
        <meta property="article:section" content={section} />
      )}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
}
