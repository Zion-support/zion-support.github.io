import React, { useEffect, useState } from 'react';

interface AdvancedPerformanceOptimizerProps {
  children: React.ReactNode;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Check if optimization is enabled
    const saved = localStorage.getItem('advanced-performance-optimization');
    if (saved === 'true') {
      setIsOptimized(true);
      applyOptimizations();
    }
  }, []);

  const applyOptimizations = () => {
    // Enable performance optimizations
    document.body.classList.add('performance-optimized');
    
    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
    
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      document.head.appendChild(link);
    });
  };

  const toggleOptimization = () => {
    const newState = !isOptimized;
    setIsOptimized(newState);
    localStorage.setItem('advanced-performance-optimization', newState.toString());
    
    if (newState) {
      applyOptimizations();
    } else {
      document.body.classList.remove('performance-optimized');
    }
  };

  return (
    <>
      {children}
      <button
        onClick={toggleOptimization}
        className="fixed top-40 right-4 z-50 bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label="Toggle advanced performance optimization"
      >
        {isOptimized ? 'Disable' : 'Enable'} Advanced Optimization
      </button>
    </>
  );
};

export default AdvancedPerformanceOptimizer;
