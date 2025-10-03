
// SEO optimization script
(function() {
  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Advanced AI and IT Solutions",
    "url": "https://zion.app"
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
  
  // Optimize meta tags
  const metaTags = [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'description', content: 'Advanced AI and IT Solutions by Zion Tech Group' },
    { name: 'keywords', content: 'AI, IT solutions, technology, innovation' },
    { property: 'og:title', content: 'Zion Tech Group - Advanced AI Solutions' },
    { property: 'og:description', content: 'Leading provider of advanced AI and IT solutions' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://zion.app' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Zion Tech Group - Advanced AI Solutions' },
    { name: 'twitter:description', content: 'Leading provider of advanced AI and IT solutions' }
  ];
  
  metaTags.forEach(tag => {
    const meta = document.createElement('meta');
    Object.keys(tag).forEach(key => {
      meta.setAttribute(key, tag[key]);
    });
    document.head.appendChild(meta);
  });
})();
