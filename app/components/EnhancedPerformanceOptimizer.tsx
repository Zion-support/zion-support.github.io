<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Enhancedperformanceoptimizer() {
  return (
    <>
      <Helmet>
        <title>Enhancedperformanceoptimizer - Zion Tech Group</title>
        <meta name="description" content="Professional enhancedperformanceoptimizer solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Enhancedperformanceoptimizer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional enhancedperformanceoptimizer solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
=======
'use client';
import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];
      
      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('src') || '';
        newScript.async = true;
        script.parentNode?.replaceChild(newScript, script);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9874
