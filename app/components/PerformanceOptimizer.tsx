
'use client';
import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,

    ttfb: null

  });

    // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',

        '/images/logo.png'
      ];

        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize images

      const images = document.querySelectorAll('img');
        if (!img.loading) {
          img.loading = 'lazy';
        if (!img.decoding) {
          img.decoding = 'async';
      });

    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();

  }, []);

  const features = [
      title: "Image Optimization",
      description: "Automatic image compression and lazy loading"
    },
      title: "Resource Preloading",
      description: "Critical resource preloading for faster initial load"
    },
      title: "Code Splitting",
      description: "Automatic code splitting for optimal bundle sizes"
    },
      title: "Caching Strategy",
      description: "Intelligent caching for improved performance"
  ];

  return (
      {/* Hero Section */}

  // Log performance metrics in development

 val !== null)) {
      console.log('Performance Metrics:', metrics)
  }, [metrics])

  return null

export default PerformanceOptimizer;