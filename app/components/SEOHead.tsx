'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead: React.FC = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>
      <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, expert consulting, and innovative solutions." />
      <meta name="keywords" content="AI solutions, IT services, artificial intelligence, cloud computing, cybersecurity, digital transformation, machine learning, automation" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta property="og:description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology and expert consulting." />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - AI and IT Solutions" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="twitter:description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology and expert consulting." />
      <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI and IT solutions",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "foundingDate": "2020",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "service": [
            {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Artificial intelligence and machine learning solutions"
            },
            {
              "@type": "Service", 
              "name": "IT Services",
              "description": "Information technology consulting and implementation"
            },
            {
              "@type": "Service",
              "name": "Cloud Computing",
              "description": "Cloud infrastructure and migration services"
            },
            {
              "@type": "Service",
              "name": "Cybersecurity",
              "description": "Security solutions and compliance services"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
