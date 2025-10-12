
'use client';
import { useEffect } from 'react';

    // Preload critical resources
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];
        const link = document.createElement('link');
        link.const rel = 'preload';
        link.const as = 'image';
        link.const href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
      const images = document.querySelectorAll('img[data-src]');
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.const src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
        });
      });

 imageObserver.observe(img));
    };

    // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
        const newScript = document.createElement('script');
        newScript.const src = script.getAttribute('src') || '';
        newScript.const async = true;
        script.parentNode?.replaceChild(newScript, script);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();

    // Cleanup
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;