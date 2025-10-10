'use client';
import React from 'react';

const EnhancedPerformanceOptimizer: React.FC = () => {
  return (
    <div className="performance-optimizer">
      {/* Performance optimization scripts and components */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance optimization code
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then((registration) => {
                    console.log('SW registered: ', registration);
                  })
                  .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
            
            // Preload critical resources
            const preloadResources = () => {
              const criticalResources = [
                '/fonts/inter.woff2',
                '/images/hero-bg.jpg'
              ];
              
              criticalResources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = resource;
                link.as = resource.endsWith('.woff2') ? 'font' : 'image';
                if (resource.endsWith('.woff2')) {
                  link.crossOrigin = 'anonymous';
                }
                document.head.appendChild(link);
              });
            };
            
            // Run preload on DOM ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', preloadResources);
            } else {
              preloadResources();
            }
          `
        }}
      />
    </div>
  );
};

export default EnhancedPerformanceOptimizer;