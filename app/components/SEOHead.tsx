import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead: React.FC = () => {
  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Company</title>
      <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development. Transform your business with our innovative technology services." />
      <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta property="og:description" content="Leading technology company providing AI solutions, cloud infrastructure, and cybersecurity services." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
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
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, and cybersecurity services.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "foundingDate": "2020",
          "numberOfEmployees": "10-50",
          "industry": "Technology",
          "services": [
            "AI Solutions",
            "Cloud Infrastructure",
            "Cybersecurity",
            "Software Development",
            "Data Analytics",
            "Mobile Development",
            "Web Development"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;