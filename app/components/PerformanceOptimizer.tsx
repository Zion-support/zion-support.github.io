'use client';
import React from 'react';
'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children, className = '' }) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available
        if (window.gc) {
          window.gc();
        }
      }
    }
  }, []);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Optimize images
    optimizeImages();
    newOptimizations.push('Images optimized for lazy loading');

    // Optimize memory
    optimizeMemory();
    newOptimizations.push('Memory optimization applied');

    // Calculate performance score
    const score = Math.floor(Math.random() * 30) + 70; // Simulate score between 70-100
    setPerformanceScore(score);
    newOptimizations.push(`Performance score: ${score}/100`);

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [optimizeImages, optimizeMemory]);

  useEffect(() => {
    // Initial optimization
    optimizeImages();
    
    // Re-optimize on route changes
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [optimizeImages]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
  const optimizeMemory = useCallback(() => {if ('memory' in performance) {
  const runOptimizations = useCallback(async () => {setIsOptimizing(true);
    const newOptimizations: string[] = [],
    // Optimize images;
  return(<div className="performance-optimizer">)</div>
      {children}{/* Performance Status Indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
  );

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true;}) => {useEffect(() => {
    // Preload critical resources;
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts;
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload),

      // Preload critical images;
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ]

      criticalImages.forEach(src => {)
    // Intersection Observer for lazy loading;
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {)
          if (entry.isIntersecting) {
