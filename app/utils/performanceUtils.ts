// Performance optimization utilities
export const performanceOptimizer = () => {
  // Performance optimization logic
  if (typeof window !== 'undefined') {
    // Preload critical resources
    const criticalResources = [
      '/src/main.tsx',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }
};

export const performanceMonitor = () => {
  // Performance monitoring logic
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // eslint-disable-next-line no-console
        console.log('Performance metric:', entry.name, entry.value);
      }
    });
    
    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Performance monitoring not supported:', error);
    }
  }
};

export const seoOptimizer = () => {
  // SEO optimization logic
  if (typeof window !== 'undefined') {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services."
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
};

export const accessibilityEnhancer = () => {
  // Accessibility enhancement logic
  if (typeof window !== 'undefined') {
    // Add skip navigation link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

export const collectPerformanceMetrics = () => {
  // Collect performance metrics
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          // eslint-disable-next-line no-console
          console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
          // eslint-disable-next-line no-console
          console.log('DOM content loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        }
      }, 0);
    });
  }
};