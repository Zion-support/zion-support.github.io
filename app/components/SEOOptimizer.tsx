import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "contact@ziontechgroup.com"
      },
      "sameAs": [
        "https://github.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add meta tags for better SEO
    const metaTags = [
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#6366f1' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Add canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.href;
    document.head.appendChild(canonical);

    return () => {
      // Cleanup
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredDataScript) {
        structuredDataScript.remove();
      }

      metaTags.forEach(tag => {
        const meta = document.querySelector(`meta[name="${tag.name}"]`);
        if (meta) {
          meta.remove();
        }
      });

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.remove();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, cloud computing, cybersecurity, software development" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Helmet>
      {children}
    </>
  );
};

export default SEOOptimizer;