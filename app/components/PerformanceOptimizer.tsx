<<<<<<< HEAD
import React, { useEffect, useCallback } from 'react';
=======
'use client'
<<<<<<< HEAD
=======
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95


interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizerComponent: React.FC<PerformanceOptimizerProps> = ({
  children,
}) => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const _fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png',
        '/images/og-image.jpg',
      ];

      criticalImages.forEach(src => {
        const _img = new Image();
        img['src'] = src;
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events for better performance
    let _ticking = false;

    const updateScrollPosition = () => {
      // Add scroll-based optimizations here
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Add performance monitoring
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.entryType === 'navigation') {
             
            if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { } }
          }
        });
      });

<<<<<<< HEAD
      observer.observe({
        entryTypes: ['navigation', 'paint', 'largest-contentful-paint'],
      });
=======
  return (
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PerformanceOptimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced PerformanceOptimizer solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95

      return () => observer.disconnect();
    }

    return undefined;
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizerComponent;
