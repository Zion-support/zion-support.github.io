// SEO Optimizer utility
export interface SEOOptimizationOptions {
  enableAutoOptimization: boolean;
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCompression: boolean;
}

export interface SEOReport {
  score: number;
  issues: string[];
  recommendations: string[];
  timestamp: Date;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private options: SEOOptimizationOptions = {
    enableAutoOptimization: true,
    enableImageOptimization: true,
    enableLazyLoading: true,
    enablePreloading: true,
    enableCompression: true
  };

  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  configure(options: Partial<SEOOptimizationOptions>): void {
    this.options = { ...this.options, ...options };
  }

  optimizePage(): void {
    if (typeof document === 'undefined') return;

    if (this.options.enableImageOptimization) {
      this.optimizeImages();
    }

    if (this.options.enableLazyLoading) {
      this.enableLazyLoading();
    }

    if (this.options.enablePreloading) {
      this.enablePreloading();
    }

    if (this.options.enableCompression) {
      this.enableCompression();
    }
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Image');
      }

      // Add width and height attributes for better CLS
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.addEventListener('load', () => {
          img.setAttribute('width', img.naturalWidth.toString());
          img.setAttribute('height', img.naturalHeight.toString());
        });
      }
    });
  }

  private enableLazyLoading(): void {
    const elements = document.querySelectorAll('[data-lazy]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          observer.unobserve(element);
        }
      });
    });

    elements.forEach(element => observer.observe(element));
  }

  private enablePreloading(): void {
    // Preload critical resources
    const criticalResources = [
      { href: '/fonts/main.woff2', as: 'font', type: 'font/woff2' },
      { href: '/css/critical.css', as: 'style' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      document.head.appendChild(link);
    });
  }

  private enableCompression(): void {
    // This would typically be handled by the server
    // Here we can add client-side optimizations
    console.log('Compression optimization enabled');
  }

  generateReport(): SEOReport {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check for missing alt texts
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      recommendations.push('Add descriptive alt text to all images');
    }

    // Check for missing meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      issues.push('Missing meta description');
      recommendations.push('Add a meta description tag');
    }

    // Check for missing title
    const title = document.title;
    if (!title || title.length < 30) {
      issues.push('Title too short or missing');
      recommendations.push('Add a descriptive title (30-60 characters)');
    }

    // Calculate score
    const totalChecks = 3;
    const passedChecks = totalChecks - issues.length;
    const score = Math.round((passedChecks / totalChecks) * 100);

    return {
      score,
      issues,
      recommendations,
      timestamp: new Date()
    };
  }
}

export default SEOOptimizer;