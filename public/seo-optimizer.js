
// SEO and meta tag optimizations
class SEOOptimizer {
  constructor() {
    this.init();
  }
  
  init() {
    this.optimizeMetaTags();
    this.addStructuredData();
    this.optimizeImages();
    this.addCanonicalURLs();
  }
  
  optimizeMetaTags() {
    // Ensure proper meta tags
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
    
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#0f172a';
      document.head.appendChild(themeColor);
    }
  }
  
  addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Revolutionary AI Solutions for Enterprise",
      "url": window.location.origin,
      "logo": window.location.origin + "/logo.png",
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-ZION-TECH",
        "contactType": "customer service"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
  
  optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading attribute if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group image');
      }
    });
  }
  
  addCanonicalURLs() {
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }
  }
}

// Initialize SEO optimizer
if (typeof window !== 'undefined') {
  window.seoOptimizer = new SEOOptimizer();
}
