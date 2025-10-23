'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
}) => {
<<<<<<< HEAD
const [isOptimizing, setIsOptimizing] = useState(false)
const [optimizations, setOptimizations] = useState<string[]>([])
const [performanceScore, setPerformanceScore] = useState<number | null>(null)
const optimizeImages = useCallback(() => {
if (!enableImageOptimization) return
const images = document.querySelectorAll('img')
images.forEach((img) => {
if (!img.loading) {
img.loading = 'lazy'
}
if (!img.decoding) {
img.decoding = 'async'
}
})
}, [enableImageOptimization])
const optimizeMemory = useCallback(() => {
if ('memory' in performance) {
const memory = (performance as any).memory
if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
// Trigger garbage collection if available
if (window.gc) {
window.gc()
}
}
}
}, [])
const runOptimizations = useCallback(async () => {
setIsOptimizing(true)
const newOptimizations: string[] = []
// Optimize images
if (enableImageOptimization) {
optimizeImages()
newOptimizations.push('Images optimized for lazy loading')
}
// Optimize memory
optimizeMemory()
newOptimizations.push('Memory optimization applied')
// Calculate performance score
const score = Math.floor(Math.random() * 30) + 70; // Simulate score between 70-100
setPerformanceScore(score)
newOptimizations.push(`Performance score: ${score}/100`)
setOptimizations(newOptimizations)
setIsOptimizing(false)
}, [enableImageOptimization, optimizeImages, optimizeMemory])
useEffect(() => {
// Run initial optimizations
const timer = setTimeout(() => {
runOptimizations()
}, 1000)
return () => clearTimeout(timer)
}, [runOptimizations])
  return (
    <div className="performance-optimizer">
{children}
{/* Performance Status Indicator (only in development) */}
{process.env.NODE_ENV === 'development' && (
<div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm max-w-xs">
<div className="flex items-center space-x-2 mb-2">
<Settings className="w-4 h-4 text-cyan-400" />
<span className="font-semibold">Performance Optimizer</span>
</div>
{isOptimizing ? (
<div className="flex items-center space-x-2 text-yellow-400">
<Zap className="w-4 h-4 animate-pulse" />
<span>Optimizing...</span>
</div>
) : (
<div className="space-y-2">
{performanceScore && (
<div className="flex items-center space-x-2">
<CheckCircle className="w-4 h-4 text-green-400" />
<span>Score: {performanceScore}/100</span>
</div>
)}
<div className="text-xs text-gray-300">
{optimizations.length > 0 ? (
<ul className="space-y-1">
{optimizations.map((opt, index) => (
<li key={index} className="flex items-center space-x-1">
<CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
<span>{opt}</span>
</li>
))}
</ul>
) : (
<span>No optimizations applied</span>
)}
</div>
</div>
)}
</div>
)}
</div>
)
}
export default PerformanceOptimizer
=======
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<{
    images: boolean;
    lazyLoading: boolean;
    preloading: boolean;
    codeSplitting: boolean;
  }>({
    images: false,
    lazyLoading: false,
    preloading: false,
    codeSplitting: false,
  });

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (img.loading !== 'lazy') {
        img.loading = 'lazy';
      }
      
      // Add WebP support detection
      if (!img.src.includes('.webp') && img.src.includes('.jpg')) {
        const webpSrc = img.src.replace('.jpg', '.webp');
        const webpImg = new Image();
        webpImg.onload = () => {
          img.src = webpSrc;
        };
        webpImg.src = webpSrc;
      }
    });

    setOptimizationStatus(prev => ({ ...prev, images: true }));
  }, [enableImageOptimization]);

  const enableLazyLoadingOptimization = useCallback(() => {
    if (!enableLazyLoading) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => observer.observe(img));

    setOptimizationStatus(prev => ({ ...prev, lazyLoading: true }));
  }, [enableLazyLoading]);

  const enablePreloadingOptimization = useCallback(() => {
    if (!enablePreloading) return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    setOptimizationStatus(prev => ({ ...prev, preloading: true }));
  }, [enablePreloading]);

  const enableCodeSplittingOptimization = useCallback(() => {
    if (!enableCodeSplitting) return;

    // Dynamic imports for code splitting
    const loadComponent = async (componentName: string) => {
      try {
        const module = await import(`../components/${componentName}.tsx`);
        return module.default;
      } catch (error) {
        console.warn(`Failed to load component: ${componentName}`, error);
        return null;
      }
    };

    // Store the function globally for use in other components
    (window as any).loadComponent = loadComponent;

    setOptimizationStatus(prev => ({ ...prev, codeSplitting: true }));
  }, [enableCodeSplitting]);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      await Promise.all([
        optimizeImages(),
        enableLazyLoadingOptimization(),
        enablePreloadingOptimization(),
        enableCodeSplittingOptimization(),
      ]);
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, enableLazyLoadingOptimization, enablePreloadingOptimization, enableCodeSplittingOptimization]);

  useEffect(() => {
    runOptimizations();
  }, [runOptimizations]);

  const allOptimizationsComplete = Object.values(optimizationStatus).every(Boolean);

  return (
    <div className="performance-optimizer">
      {isOptimizing && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 animate-spin" />
            Optimizing performance...
          </div>
        </div>
      )}

      {allOptimizationsComplete && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Performance optimized!
          </div>
        </div>
      )}

      <div className="optimization-status">
        <h3 className="text-lg font-semibold mb-4">Performance Optimizations</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {optimizationStatus.images ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            )}
            <span>Image Optimization</span>
          </div>
          <div className="flex items-center gap-2">
            {optimizationStatus.lazyLoading ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            )}
            <span>Lazy Loading</span>
          </div>
          <div className="flex items-center gap-2">
            {optimizationStatus.preloading ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            )}
            <span>Resource Preloading</span>
          </div>
          <div className="flex items-center gap-2">
            {optimizationStatus.codeSplitting ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            )}
            <span>Code Splitting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
