/**
 * Advanced Performance Optimizer
 * Comprehensive performance monitoring and optimization utilities
 */

class PerformanceOptimizer {
  constructor() {
    this.metrics = {
      pageLoadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      interactionToNextPaint: 0,
    };
    this.observers = new Map();
    this.init();
  }

  init() {
    this.setupWebVitals();
    this.setupResourceOptimization();
    this.setupImageOptimization();
    this.setupCodeSplitting();
    this.setupCaching();
  }

  setupWebVitals() {
    // Core Web Vitals monitoring
    if ('web-vitals' in window) {
      import('web-vitals').then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(this.updateMetric.bind(this, 'cumulativeLayoutShift'));
          getFID(this.updateMetric.bind(this, 'firstInputDelay'));
          getFCP(this.updateMetric.bind(this, 'firstContentfulPaint'));
          getLCP(this.updateMetric.bind(this, 'largestContentfulPaint'));
          getTTFB(this.updateMetric.bind(this, 'timeToFirstByte'));
        }
      );
    }
  }

  setupResourceOptimization() {
    // Preload critical resources
    this.preloadCriticalResources();

    // Lazy load non-critical resources
    this.setupLazyLoading();

    // Optimize font loading
    this.optimizeFontLoading();
  }

  setupImageOptimization() {
    // Intersection Observer for lazy loading images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  setupCodeSplitting() {
    // Dynamic imports for route-based code splitting
    this.setupRouteBasedSplitting();

    // Component-based splitting
    this.setupComponentSplitting();
  }

  setupCaching() {
    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }

  preloadCriticalResources() {
    const criticalResources = [
      '/src/pages/Home.tsx',
      '/src/components/Header.tsx',
      '/src/components/Footer.tsx',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'script';
      document.head.appendChild(link);
    });
  }

  setupLazyLoading() {
    // Lazy load non-critical components
    const lazyComponents = document.querySelectorAll('[data-lazy]');

    if ('IntersectionObserver' in window) {
      const lazyObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const component = entry.target;
            this.loadLazyComponent(component);
            lazyObserver.unobserve(component);
          }
        });
      });

      lazyComponents.forEach(component => {
        lazyObserver.observe(component);
      });
    }
  }

  optimizeFontLoading() {
    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ];

    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'style';
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  }

  setupRouteBasedSplitting() {
    // Implement route-based code splitting
    const routes = {
      '/': () => import('../pages/Home'),
      '/about': () => import('../pages/About'),
      '/services': () => import('../pages/Services'),
      '/blog': () => import('../pages/Blog'),
      '/contact': () => import('../pages/Contact'),
      '/team': () => import('../pages/Team'),
      '/privacy': () => import('../pages/Privacy'),
      '/terms': () => import('../pages/Terms'),
    };

    // Preload next likely routes
    this.preloadNextRoutes(routes);
  }

  setupComponentSplitting() {
    // Lazy load heavy components that are not already statically imported
    const heavyComponents = [
      'Charts',
      'DataVisualization',
      'AdvancedForms',
      'InteractiveMaps',
    ];

    heavyComponents.forEach(component => {
      this.setupComponentLazyLoading(component);
    });
  }

  preloadNextRoutes(routes) {
    // Preload likely next routes based on user behavior
    const currentPath = window.location.pathname;
    const likelyNextRoutes = this.getLikelyNextRoutes(currentPath);

    likelyNextRoutes.forEach(route => {
      if (routes[route]) {
        routes[route]().catch(console.error);
      }
    });
  }

  getLikelyNextRoutes(currentPath) {
    const routeMap = {
      '/': ['/about', '/services'],
      '/about': ['/services', '/team'],
      '/services': ['/contact', '/about'],
      '/blog': ['/about', '/services'],
      '/contact': ['/services', '/about'],
      '/team': ['/about', '/contact'],
      '/privacy': ['/terms', '/contact'],
      '/terms': ['/privacy', '/contact'],
    };

    return routeMap[currentPath] || [];
  }

  setupComponentLazyLoading(componentName) {
    // Set up lazy loading for specific components
    const componentElements = document.querySelectorAll(
      `[data-component="${componentName}"]`
    );

    if ('IntersectionObserver' in window) {
      const componentObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadComponent(componentName, entry.target);
            componentObserver.unobserve(entry.target);
          }
        });
      });

      componentElements.forEach(element => {
        componentObserver.observe(element);
      });
    }
  }

  async loadComponent(componentName, element) {
    try {
      // Only load components that are not already statically imported
      const staticallyImportedComponents = [
        'ErrorBoundary',
        'SEO',
        'Loading',
        'SystemMonitor',
      ];

      if (staticallyImportedComponents.includes(componentName)) {
        console.warn(
          `Component ${componentName} is already statically imported, skipping dynamic import`
        );
        return;
      }

      const component = await import(`../components/${componentName}.tsx`);
      // Render component to element
      if (component.default) {
        element.innerHTML = component.default();
      }
    } catch (error) {
      console.error(`Failed to load component ${componentName}:`, error);
    }
  }

  async loadLazyComponent(element) {
    const componentPath = element.dataset.lazy;
    try {
      const component = await import(componentPath);
      if (component.default) {
        element.innerHTML = component.default();
      }
    } catch (error) {
      console.error(`Failed to load lazy component:`, error);
    }
  }

  updateMetric(metricName, value) {
    this.metrics[metricName] = value;
    this.reportMetrics();
  }

  reportMetrics() {
    // Send metrics to analytics
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(this.metrics.largestContentfulPaint),
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', this.metrics);
    }
  }

  // Performance optimization methods
  optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }

  optimizeScripts() {
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.async && !script.defer) {
        script.defer = true;
      }
    });
  }

  optimizeStyles() {
    // Inline critical CSS
    this.inlineCriticalCSS();

    // Defer non-critical CSS
    this.deferNonCriticalCSS();
  }

  inlineCriticalCSS() {
    // This would typically be done at build time
    // For runtime, we can add critical styles to head
    const criticalCSS = `
      body { font-family: Inter, sans-serif; }
      .container { max-width: 1200px; margin: 0 auto; }
      .header { background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }

  deferNonCriticalCSS() {
    const nonCriticalCSS = document.querySelectorAll(
      'link[rel="stylesheet"]:not([data-critical])'
    );
    nonCriticalCSS.forEach(link => {
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
    });
  }

  // Memory management
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }

  // Performance monitoring
  startPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          this.handlePerformanceEntry(entry);
        });
      });

      observer.observe({
        entryTypes: ['navigation', 'resource', 'paint', 'layout-shift'],
      });
      this.observers.set('performance', observer);
    }
  }

  handlePerformanceEntry(entry) {
    switch (entry.entryType) {
      case 'navigation':
        this.metrics.pageLoadTime = entry.loadEventEnd - entry.loadEventStart;
        break;
      case 'paint':
        if (entry.name === 'first-contentful-paint') {
          this.metrics.firstContentfulPaint = entry.startTime;
        }
        break;
      case 'layout-shift':
        if (!entry.hadRecentInput) {
          this.metrics.cumulativeLayoutShift += entry.value;
        }
        break;
    }
  }
}

// Initialize performance optimizer
const performanceOptimizer = new PerformanceOptimizer();

// Export for use in other modules
export default performanceOptimizer;

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    performanceOptimizer.startPerformanceMonitoring();
  });
} else {
  performanceOptimizer.startPerformanceMonitoring();
}
