import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizer2025Props {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  category?: string;
  tags?: string[];
}

const SEOOptimizer2025: React.FC<SEOOptimizer2025Props> = ({
  title = "Revolutionary Technology Solutions 2025 | AI, Cybersecurity, Cloud & Data Analytics",
  description = "Discover cutting-edge AI solutions, enterprise cybersecurity, cloud migration, and data analytics services. Transform your business with our revolutionary technology solutions in 2025.",
  keywords = [
    "AI solutions",
    "artificial intelligence",
    "cybersecurity",
    "cloud computing",
    "data analytics",
    "business automation",
    "edge computing",
    "sustainable technology",
    "digital transformation",
    "enterprise solutions",
    "technology consulting",
    "AI consulting",
    "machine learning",
    "quantum computing",
    "neural interfaces",
    "future technology",
    "tech innovation",
    "business intelligence",
    "IT services",
    "technology trends 2025"
  ],
  image = "/images/og-image-2025.jpg",
  url = "https://your-domain.com",
  type = "website",
  author = "Tech Innovation Team",
  publishDate,
  modifiedDate,
  category = "Technology",
  tags = []
}) => {
  const fullTitle = title.includes("|") ? title : `${title} | Revolutionary Tech Solutions 2025`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  const fullKeywords = [...keywords, ...tags].join(", ");
  const currentDate = new Date().toISOString();
  const publishDateISO = publishDate ? new Date(publishDate).toISOString() : currentDate;
  const modifiedDateISO = modifiedDate ? new Date(modifiedDate).toISOString() : currentDate;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Revolutionary Tech Solutions 2025" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@techsolutions2025" />
      <meta name="twitter:site" content="@techsolutions2025" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:published_time" content={publishDateISO} />
          <meta property="article:modified_time" content={modifiedDateISO} />
          <meta property="article:section" content={category} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Tech Solutions 2025" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Revolutionary Tech Solutions 2025",
          "url": url,
          "logo": "/images/logo-2025.png",
          "description": "Leading provider of AI solutions, cybersecurity, cloud computing, and data analytics services",
          "foundingDate": "2020",
          "founders": [
            {
              "@type": "Person",
              "name": "Tech Innovation Team"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-TECH-2025",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://twitter.com/techsolutions2025",
            "https://linkedin.com/company/tech-solutions-2025",
            "https://github.com/tech-solutions-2025"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressLocality": "San Francisco",
            "addressRegion": "CA"
          }
        })}
      </script>
      
      {/* Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Revolutionary Tech Solutions 2025",
          "url": url,
          "description": fullDescription,
          "publisher": {
            "@type": "Organization",
            "name": "Revolutionary Tech Solutions 2025"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Structured Data - Article (if applicable) */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": fullTitle,
            "description": fullDescription,
            "image": image,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Revolutionary Tech Solutions 2025",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo-2025.png"
              }
            },
            "datePublished": publishDateISO,
            "dateModified": modifiedDateISO,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            },
            "articleSection": category,
            "keywords": fullKeywords
          })}
        </script>
      )}
      
      {/* Structured Data - Service (if applicable) */}
      {type === 'service' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": fullTitle,
            "description": fullDescription,
            "provider": {
              "@type": "Organization",
              "name": "Revolutionary Tech Solutions 2025"
            },
            "serviceType": category,
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cybersecurity Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Computing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Analytics"
                  }
                }
              ]
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOOptimizer2025;