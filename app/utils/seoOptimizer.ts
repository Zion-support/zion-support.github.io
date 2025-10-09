
// SEO optimization utilities
export const seoOptimizer = {
  // Add structured data
  addStructuredData: (data) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  },
  
  // Optimize meta tags
  optimizeMetaTags: () => {
    const metaTags = [
      { name: 'description', content: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.' },
      { name: 'keywords', content: 'AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ziontechgroup.com' },
      { property: 'og:title', content: 'Zion Tech Group - Advanced AI and IT Solutions' },
      { property: 'og:description', content: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.' },
      { property: 'og:image', content: 'https://ziontechgroup.com/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Zion Tech Group - Advanced AI and IT Solutions' },
      { name: 'twitter:description', content: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.' },
      { name: 'twitter:image', content: 'https://ziontechgroup.com/og-image.jpg' }
    ];
    
    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  },
  
  // Initialize SEO optimizations
  init: () => {
    if (typeof window !== 'undefined') {
      seoOptimizer.optimizeMetaTags();
    }
  }
};

// Auto-initialize
if (typeof window !== 'undefined') {
  seoOptimizer.init();
}
