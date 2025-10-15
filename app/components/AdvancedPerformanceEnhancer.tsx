import React from 'react';;';
import SEOHead from './components/SEOHead';
<<<<<<< HEAD

interface PerformanceEnhancerProps {}
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const AdvancedPerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({)}
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true
}) => {}
  // Image optimization
  const optimizeImages = useCallback(() => {}
    if (!enableImageOptimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {}
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {}
        img.setAttribute('loading', 'lazy');
      }
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {}
        img.setAttribute('decoding', 'async');
      }
      // Add fetchpriority="auto" for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {}
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enableImageOptimization]);

  // Resource preloading
  const preloadCriticalResources = useCallback(() => {}
    if (!enablePreloading) return;

    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (criticalCSS) {}
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = criticalCSS.getAttribute('href') || '';
      preloadLink.as = 'style';
      document.head.appendChild(preloadLink);
    }

    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[href*="font"]');
    fontLinks.forEach((link) => {}
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = link.getAttribute('href') || '';
      preloadLink.as = 'font';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    });
  }, [enablePreloading]);

  // Caching optimization
  const optimizeCaching = useCallback(() => {}
    if (!enableCaching) return;

    // Set cache headers for static assets
    const staticAssets = document.querySelectorAll('img, script, link[rel="stylesheet"]');
    staticAssets.forEach((asset) => {}
      if (asset instanceof HTMLElement) {}
        asset.style.cacheControl = 'max-age=31536000';
      }
    });
  }, [enableCaching]);

  // Compression optimization
  const optimizeCompression = useCallback(() => {}
    if (!enableCompression) return;

    // Enable gzip compression for text content
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element) => {}
      if (element instanceof HTMLElement) {}
        element.style.textCompression = 'gzip';
      }
    });
  }, [enableCompression]);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {}
    if (typeof window !== 'undefined' && 'performance' in window) {}
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {}
        list.getEntries().forEach((entry) => {}
          if (entry.entryType === 'largest-contentful-paint') {}
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {}
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {}
            console.log('CLS:', (entry as any).value);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }, []);

  useEffect(() => {}
    // Run optimizations on mount
    optimizeImages();
    preloadCriticalResources();
    optimizeCaching();
    optimizeCompression();
    monitorPerformance();

    // Re-run optimizations when DOM changes
    const observer = new MutationObserver(() => {}
      optimizeImages();
    });

    observer.observe(document.body, {)}
      childList: true,
      subtree: true
    });

    return () => {}
      observer.disconnect();
    };
  }, [optimizeImages, preloadCriticalResources, optimizeCaching, optimizeCompression, monitorPerformance]);

  return null; // This component doesn't render anything

=======
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
>>>>>>> main
};
<<<<<<< HEAD
;
export default ComponentsPage;'";'";
=======

export default ComponentsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
