import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOOptimizer: React.FC = () => {
  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI & IT Solutions</title>
      <meta name="description" content="Transform your business with cutting-edge artificial intelligence, 5G technology, and comprehensive IT services. Expert solutions for modern enterprises." />
      <meta name="keywords" content="AI solutions, 5G technology, cybersecurity, IT services, artificial intelligence, machine learning, cloud computing" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta property="og:description" content="Transform your business with cutting-edge artificial intelligence, 5G technology, and comprehensive IT services." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontech.com" />
      <meta property="og:image" content="https://ziontech.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta name="twitter:description" content="Transform your business with cutting-edge artificial intelligence, 5G technology, and comprehensive IT services." />
      <meta name="twitter:image" content="https://ziontech.com/og-image.jpg" />
      <link rel="canonical" href="https://ziontech.com" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Advanced AI and IT solutions provider",
          "url": "https://ziontech.com",
          "logo": "https://ziontech.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Street",
            "addressLocality": "Innovation City",
            "addressCountry": "US"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;