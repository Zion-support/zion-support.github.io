import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/api/placeholder/1200/630',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false
}) => {
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": canonical || "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": description,
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "availableLanguage": "English"
          }
        })}
      </script>
      
      {/* Performance Optimizations */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
    </Helmet>
  );
};

export default EnhancedSEO;