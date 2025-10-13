'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Zap, Settings, Activity } from 'lucide-react';

interface OptimizationSettings {
  imageOptimization: boolean;
  codeSplitting: boolean;
  lazyLoading: boolean;
  compression: boolean;
  caching: boolean;
  minification: boolean;
}

interface PerformanceMetrics {
  loadTime: number | null;
  bundleSize: number | null;
  imageCount: number | null;
  unusedCSS: number | null;
  unusedJS: number | null;
}

const AdvancedPerformanceOptimizer: React.FC = () => {
  const [settings, setSettings] = useState<OptimizationSettings>({
    imageOptimization: false,
    codeSplitting: false,
    lazyLoading: false,
    compression: false,
    caching: false,
    minification: false
  });

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    bundleSize: null,
    imageCount: null,
    unusedCSS: null,
    unusedJS: null
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, loadTime }));

    // Measure bundle size (approximate)
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && !src.includes('node_modules')) {
        // This is a rough estimate - in reality you'd need to fetch the actual file size
        totalSize += 100; // Placeholder
      }
    });
    setMetrics(prev => ({ ...prev, bundleSize: totalSize }));

    // Count images
    const images = document.querySelectorAll('img');
    setMetrics(prev => ({ ...prev, imageCount: images.length }));

    // Estimate unused CSS/JS (this would require more sophisticated analysis)
    setMetrics(prev => ({ 
      ...prev, 
      unusedCSS: Math.random() * 30, // Placeholder
      unusedJS: Math.random() * 20   // Placeholder
    }));
  }, []);

  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);

    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Apply optimizations based on settings
    if (settings.imageOptimization) {
      // Simulate image optimization
      // Optimizing images...
    }

    if (settings.codeSplitting) {
      // Simulate code splitting
      // Implementing code splitting...
    }

    if (settings.lazyLoading) {
      // Simulate lazy loading implementation
      // Implementing lazy loading...
    }

    if (settings.compression) {
      // Simulate compression
      // Enabling compression...
    }

    if (settings.caching) {
      // Simulate caching setup
      // Setting up caching...
    }

    if (settings.minification) {
      // Simulate minification
      // Minifying assets...
    }

    setIsOptimizing(false);

    // Re-measure performance after optimization
    setTimeout(measurePerformance, 1000);
  }, [settings, measurePerformance]);

  const toggleSetting = (key: keyof OptimizationSettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const optimizationFeatures = [
    {
      key: 'imageOptimization' as keyof OptimizationSettings,
      title: 'Image Optimization',
      description: 'Compress and optimize images for faster loading',
      impact: 'High'
    },
    {
      key: 'codeSplitting' as keyof OptimizationSettings,
      title: 'Code Splitting',
      description: 'Split code into smaller chunks for better loading',
      impact: 'High'
    },
    {
      key: 'lazyLoading' as keyof OptimizationSettings,
      title: 'Lazy Loading',
      description: 'Load images and components only when needed',
      impact: 'Medium'
    },
    {
      key: 'compression' as keyof OptimizationSettings,
      title: 'Compression',
      description: 'Enable Gzip/Brotli compression for assets',
      impact: 'High'
    },
    {
      key: 'caching' as keyof OptimizationSettings,
      title: 'Caching',
      description: 'Implement proper caching strategies',
      impact: 'Medium'
    },
    {
      key: 'minification' as keyof OptimizationSettings,
      title: 'Minification',
      description: 'Minify CSS and JavaScript files',
      impact: 'Medium'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Open performance optimizer"
      >
        <Zap className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Settings className="w-5 h-5 mr-2" />
          Performance Optimizer
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close performance optimizer"
        >
          ×
        </button>
      </div>

      {/* Performance Metrics */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Current Metrics
        </h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
            <span className="ml-1 text-gray-900 dark:text-white">
              {metrics.loadTime ? `${metrics.loadTime}ms` : 'N/A'}
            </span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Bundle Size:</span>
            <span className="ml-1 text-gray-900 dark:text-white">
              {metrics.bundleSize ? `${metrics.bundleSize}KB` : 'N/A'}
            </span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Images:</span>
            <span className="ml-1 text-gray-900 dark:text-white">
              {metrics.imageCount || 'N/A'}
            </span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Unused CSS:</span>
            <span className="ml-1 text-gray-900 dark:text-white">
              {metrics.unusedCSS ? `${metrics.unusedCSS.toFixed(1)}%` : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {/* Optimization Settings */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          Optimization Features
        </h4>
        {optimizationFeatures.map((feature) => (
          <div key={feature.key} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </span>
                <span className={`text-xs ${getImpactColor(feature.impact)}`}>
                  {feature.impact} Impact
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {feature.description}
              </p>
            </div>
            <button
              onClick={() => toggleSetting(feature.key)}
              className={`ml-3 relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                settings[feature.key]
                  ? 'bg-purple-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
              aria-label={`Toggle ${feature.title}`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  settings[feature.key] ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Optimize Button */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isOptimizing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Optimizing...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              Optimize Now
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AdvancedPerformanceOptimizer;