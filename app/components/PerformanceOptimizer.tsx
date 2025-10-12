<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
'use client';
import React, { useEffect, useState } from 'react';
export default PerformanceOptimizer;
export default PerformanceOptimizer;
'use client';
interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}
const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,;
    ttfb: null;
  });
  useEffect(() => {
    // Preload critical resources;
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.png',;
      ];
      criticalResources.forEach((resource) => {
        '/images/logo.png'
      ];
      criticalResources.forEach(resource = > {;
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };
    // Optimize images;
    const optimizeImages = () => {;
      const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {;
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      images.forEach((img) => imageObserver.observe(img));
    };
    // Lazy load components;
    const lazyLoadComponents = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {;
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
            observer.unobserve(element);
          }
        });
      });
      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach((el) => observer.observe(el));
    };
    // Monitor Core Web Vitals;
    const monitorWebVitals = () => {;
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {;
        onCLS((metric) => setMetrics((prev) => ({ ...prev, cls: metric.value })));
        onFID((metric) => setMetrics((prev) => ({ ...prev, fid: metric.value })));
        onFCP((metric) => setMetrics((prev) => ({ ...prev, fcp: metric.value })));
        onLCP((metric) => setMetrics((prev) => ({ ...prev, lcp: metric.value })));
        onTTFB((metric) => setMetrics((prev) => ({ ...prev, ttfb: metric.value })));
      }).catch(() => {
        // Silently fail if web-vitals is not available;
      });
    };
    // Optimize scroll performance;
    const optimizeScroll = () => {;
      let ticking = false;
const updateScrollPosition = () => {
        if (!ticking) {
          requestAnimationFrame(() => {;
            // Update scroll position;
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener('scroll', updateScrollPosition, { passive: true });
      return () => window.removeEventListener('scroll', updateScrollPosition);
      const images = document.querySelectorAll('img');
      images.forEach(img = > {
        if (!img.loading) {;
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };
    // Initialize optimizations;
    preloadCriticalResources();
    optimizeImages();
    lazyLoadComponents();
    monitorWebVitals();
    const cleanupScroll = optimizeScroll();
    // Cleanup;
    return () => {
      cleanupScroll();
    };
  }, []);
  }, []);
  const features = [
    {
      title: "Image Optimization",
      description: "Automatic image compression and lazy loading"
    },
    {
      title: "Resource Preloading",
      description: "Critical resource preloading for faster initial load"
    },
    {
      title: "Code Splitting",
      description: "Automatic code splitting for optimal bundle sizes"
    },
    {
      title: "Caching Strategy",
      description: "Intelligent caching for improved performance"
    };
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

export default function ComponentsPage() {
  return (
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
  return null;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
