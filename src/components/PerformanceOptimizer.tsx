<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";

const PerformanceOptimizer: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">PerformanceOptimizer</h2>
      <p className="text-gray-400">PerformanceOptimizer component</p>
    </div>
  );
};

export default PerformanceOptimizer;
=======
import React, { useEffect } from 'react';
=======
import React from "react";
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7

interface PerformanceOptimizerProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export default function PerformanceOptimizer(props: PerformanceOptimizerProps): React.JSX.Element {
  if (!props.isVisible) return <></>;
  return <div aria-label="Performance Optimizer" />;
}

<<<<<<< HEAD
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.log('Performance monitoring not fully supported');
      }

      // Resource hints for better performance
      const addResourceHint = (href: string, as: string, type?: string) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (type) link.type = type;
        document.head.appendChild(link);
      };

      // Preload critical resources
      preloadImages.forEach((image) => {
        addResourceHint(image, 'image');
      });

      preloadFonts.forEach((font) => {
        addResourceHint(font, 'style');
      });
    }
  }, [preloadImages, preloadFonts]);

  return (
    <>
      {/* Critical CSS */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical fonts */}
      {preloadFonts.map((font, index) => (
        <link
          key={index}
          rel="preload"
          href={font}
          as="style"
          onLoad={() => {
            const link = document.querySelector(`link[href="${font}"]`) as HTMLLinkElement;
            if (link) {
              link.onload = null;
              link.rel = 'stylesheet';
            }
          }}
        />
      ))}
      
      {/* Preload critical images */}
      {preloadImages.map((image, index) => (
        <link key={index} rel="preload" href={image} as="image" />
      ))}
      
      {/* Performance hints */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </>
  );
};

export default PerformanceOptimizer;
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b
=======
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
