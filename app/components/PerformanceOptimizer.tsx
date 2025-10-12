<<<<<<< HEAD

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
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function PerformanceOptimizer() {
  return (
<<<<<<< HEAD
      {/* Hero Section */}

  // Log performance metrics in development

 val !== null)) {
      console.log('Performance Metrics:', metrics)
  }, [metrics])

  return null

export default PerformanceOptimizer;
=======
    <>
      <Helmet>
        <title>Performance Optimizer - Zion Tech Group</title>
        <meta name="description" content="Professional performance optimizer by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Performance Optimizer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional performance optimizer coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
