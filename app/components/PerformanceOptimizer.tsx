import React, { useState, useEffect, memo, lazy, Suspense } from 'react';


interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement("link");
      criticalCSS.rel = "preload";
      criticalCSS.href = "/critical.css";
      criticalCSS.as = "style";
      criticalCSS.onload = () => {
        criticalCSS.rel = "stylesheet";
      };
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement("link");
      fontPreload.rel = "preload";
      fontPreload.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
      fontPreload.as = "style";
      document.head.appendChild(fontPreload);
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = "lazy";
        }
        if (!img.decoding) {
          img.decoding = "async";
        }
      });
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    optimizeImages();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>; // Render children
};

export default PerformanceOptimizer;
