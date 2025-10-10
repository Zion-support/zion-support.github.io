'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enableCaching = true
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string[]>([]);

  const addStatus = useCallback((message: string) => {
    setOptimizationStatus(prev => [...prev, message]);
  }, []);

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;
    
    addStatus('Optimizing images...');
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.loading !== 'lazy') {
        img.loading = 'lazy';
      }
      
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
    
    addStatus('Images optimized');
  }, [enableImageOptimization, addStatus]);

  const optimizeScripts = useCallback(() => {
    if (!enableCodeSplitting) return;
    
    addStatus('Optimizing scripts...');
    
    // Add script optimization logic here
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.async && !script.defer) {
        script.defer = true;
      }
    });
    
    addStatus('Scripts optimized');
  }, [enableCodeSplitting, addStatus]);

  const optimizeCaching = useCallback(() => {
    if (!enableCaching) return;
    
    addStatus('Setting up caching...');
    
    // Add caching optimization logic here
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
    
    addStatus('Caching configured');
  }, [enableCaching, addStatus]);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus([]);
    
    try {
      optimizeImages();
      optimizeScripts();
      optimizeCaching();
      
      addStatus('All optimizations complete!');
    } catch (error) {
      addStatus('Error during optimization');
      console.error('Performance optimization error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, optimizeScripts, optimizeCaching, addStatus]);

  useEffect(() => {
    // Run optimizations on mount
    runOptimizations();
  }, [runOptimizations]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Performance Optimizer
          </h3>
          <button
            onClick={runOptimizations}
            disabled={isOptimizing}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>
        
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {optimizationStatus.map((status, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              {status}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;