<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PerformanceOptimizer() {
  return (
    <>
      <Helmet>
        <title>PerformanceOptimizer - Zion Tech Group</title>
        <meta name="description" content="Professional performanceoptimizer services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              PerformanceOptimizer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional performanceoptimizer services by Zion Tech Group.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
=======
import React, { useEffect, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    };

    const optimizeFonts = () => {
      // Preload critical fonts
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/fonts/inter.woff2';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    const optimizeResources = () => {
      // Preload critical resources
      const criticalResources = ['/css/critical.css', '/js/critical.js'];
      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });
    };

    // Run optimizations
    optimizeImages();
    optimizeFonts();
    optimizeResources();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default PerformanceOptimizer;

>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
