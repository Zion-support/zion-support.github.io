import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface DynamicMetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
}

const DynamicMetaTags: React.FC<DynamicMetaTagsProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of cutting-edge AI and IT solutions, cloud services, cybersecurity, and digital transformation services for modern enterprises.",
  keywords = "AI solutions, IT services, cloud computing, cybersecurity, digital transformation, enterprise software",
  canonicalUrl = window.location.href,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    // Add structured data
    if (structuredData) {
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]',
      );
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, structuredData]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Theme color */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
    </Helmet>
  );
};

export default DynamicMetaTags;
