export function SEO({
  title,
  description,
  keywords,
  // Default to the Google Drive image URL
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  ogUrl,
  canonical,
  noindex,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = "https://ziontechgroup.com";
  const fullCanonical = canonical || `${siteUrl}${window.location.pathname}`;
  
  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "The world's first free marketplace dedicated to high-tech and artificial intelligence",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-ZION-TECH",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish", "Portuguese", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global",
      "addressLocality": "Worldwide"
    }
  };

  // Structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech & AI Marketplace",
    "url": siteUrl,
    "description": "Discover top AI and tech talent, services, and equipment in one place",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Structured data for the specific page
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "headline": fullTitle,
    "description": description,
    "url": fullCanonical,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonical
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png"
      }
    },
    ...(type === "article" && {
      "author": {
        "@type": "Person",
        "name": author || "Zion Tech Group"
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "articleSection": section,
      "keywords": tags?.join(", ")
    })
  };
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Additional SEO links */}
      <link rel="alternate" hrefLang="en" href={fullCanonical} />
      <link rel="alternate" hrefLang="es" href={`https://es.ziontechgroup.com${window.location.pathname}`} />
      <link rel="alternate" hrefLang="pt" href={`https://pt.ziontechgroup.com${window.location.pathname}`} />
      <link rel="alternate" hrefLang="ar" href={`https://ar.ziontechgroup.com${window.location.pathname}`} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
    </Helmet>
  );
}
