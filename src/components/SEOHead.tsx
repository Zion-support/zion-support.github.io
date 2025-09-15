import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "AI, quantum computing, blockchain, cybersecurity, cloud computing, technology solutions, 2026, innovation",
  image = "/images/og-image.jpg",
  url = window.location.href,
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Zion Tech Group" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@ziontechgroup" />
      <meta property="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1a365d" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/logo.png",
          "description": "Leading-edge technology solutions in AI, quantum computing, and cybersecurity",
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "contact@ziontechgroup.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;