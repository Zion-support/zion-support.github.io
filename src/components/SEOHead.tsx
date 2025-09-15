import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Revolutionary Technology Solutions 2026",
  description = "Leading the future of technology with AI, blockchain, quantum computing, neural interfaces, metaverse integration, green tech, and innovative solutions. Explore cutting-edge technology content and revolutionary breakthroughs.",
  keywords = "AI, artificial intelligence, quantum computing, neural interface, metaverse, green tech, blockchain, technology, innovation, 2026, revolutionary, breakthrough, consciousness, sustainability",
  image = "/og-image.jpg",
  url = "https://ziontechgroup.com"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": description,
          "url": url,
          "logo": "https://ziontechgroup.com/logo.png",
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Street",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94105",
            "addressCountry": "US"
          },
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "Zion Tech Group Founders"
          },
          "knowsAbout": [
            "Artificial Intelligence",
            "Quantum Computing",
            "Neural Interfaces",
            "Metaverse Technology",
            "Green Technology",
            "Blockchain",
            "Space Technology",
            "Robotics",
            "Holographic Technology"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;