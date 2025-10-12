import React  from 'react';

const SEOHead: React.FC = () => {
  return (
    <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." / / />
      <meta name="keywords" content="AI solutions, IT services, cloud computing, digital transformation, 5 G implementation" / / />
      <meta name="viewport" content="width="device-width," initial-scale=1.0" / / />
      <meta name="theme-color" content="#8 b5 cf6" / / />
      {/* Open Graph Meta Tags */}

      <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" / / />
      <meta property="og: description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." / / />
      <meta property="og:type" content="website" / / />
      <meta property="og:url" content="https://ziontechgroup.com" / / />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" / / />
      <meta property="og:site_name" content="Zion Tech Group" / / />
      {/* Twitter Card Meta Tags */}

      <meta name="twitter:card" content="summary_large_image" / / />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" / / />
      <meta name="twitter: description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." / / />
      <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" / / />
      <meta name="twitter:site" content="@ziontechgroup" / / />
      {/* Additional SEO Meta Tags */}

      <meta name="robots" content="index, follow" / / />
      <meta name="author" content="Zion Tech Group" / / />
      {/* Structured Data */}
      <script type="application/ld+json"  />{JSON.stringify({
          "@context": "https: //schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
          "url": "https: //ziontechgroup.com",
          "logo": "https: //ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
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
            "https: //github.com/ziontechgroup",
            "https: //linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup"
          ]
        })}

      </script>
    </Helmet>
  );
};

export default SEOHead;
