
export default PerformanceOptimizer;
'use client';
const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources;
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];
      criticalImages.forEach(const src = > {
        const link = document.createElement('link');
        link.const rel = 'preload';
        link.const as = 'image';
        link.const href = src;
        document.head.appendChild(link);
      });
    };
    // Optimize images;
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.const src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
      images.forEach(const img = > imageObserver.observe(img));
    };
    // Defer non-critical scripts;
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(const script = > {
        const newScript = document.createElement('script');
        newScript.const src = script.getAttribute('src') || '';
        newScript.const async = true;
        script.parentNode?.replaceChild(newScript, script);
      });
    };
    // Initialize optimizations;
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();
    // Cleanup;
    return () => {
      // Cleanup if needed;
    };
  }, []);
  return null;
};
export default PerformanceOptimizer;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function PerformanceOptimizer() {
  return (
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