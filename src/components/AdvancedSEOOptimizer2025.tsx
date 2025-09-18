import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}
const AdvancedSEOOptimizer2025: React.FC<SEOOptimizerProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Technology Solutions 2025",
  description = "Leading the future of technology with revolutionary AI, quantum computing, neural interfaces, and interdimensional technology solutions. Transform your business with cutting-edge innovations.",
  keywords = [
    "AI solutions", "quantum computing", "neural interfaces", "technology innovation",
    "artificial intelligence", "machine learning", "blockchain", "cloud computing",
    "revolutionary technology", "future tech", "conscious AI", "interdimensional computing"
  ],
  image = "/og-image-2025.jpg",
  url = "https://ziontechgroup.com",
  type = "website"
}) => {
  useEffect(() => {
    // Dynamic meta tag updates
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('author', 'Zion Tech Group');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('og:site_name', 'Zion Tech Group');
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    // Additional SEO tags
    updateMetaTag('theme-color', '#6366f1');
    updateMetaTag('msapplication-TileColor', '#6366f1');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    // Structured data
    const structuredData = {
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
        "telephone": "+1-555-ZION-TECH",
        "contactType": "customer service"
      },
      "offers": {
        "@type": "Offer",
        "description": "Revolutionary AI and Technology Solutions",
        "category": "Technology Services"
    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      // Cleanup
      document.head.removeChild(script);
  }, [title, description, keywords, image, url, type]);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Additional SEO */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};
export default AdvancedSEOOptimizer2025;
