import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  structuredData?: unknown;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Leading provider of AI-powered IT solutions and digital transformation services.",
  keywords = ["AI", "IT Solutions", "Digital Transformation", "Cybersecurity", "Cloud Infrastructure"],
  image = "/images/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  structuredData
}) => {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [structuredData]);

  // Generate meta tags
  const metaTags = [
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { name: "author", content: "Zion Tech Group" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    // Open Graph tags
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: "Zion Tech Group" },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    // Additional SEO tags
    { name: "theme-color", content: "#0066cc" },
    { name: "msapplication-TileColor", content: "#0066cc" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" }
  ];

  return (
    <Helmet>
      <title>{title}</title>
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOEnhancer;