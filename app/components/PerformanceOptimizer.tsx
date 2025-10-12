'use client';

import {   AlertTriangle } from 'lucide-react';

  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

  enableCodeSplitting = true
    // Preload critical resources
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);

      // Preload critical images
      
      ];

        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    }

    // Optimize images
      const images = document.querySelectorAll('img');
        // Add loading="lazy" for non-critical images
          img.loading = 'lazy';
        }

        // Add decoding="async" for better performance
          img.decoding = 'async';
        }
      });
    }

    // Intersection Observer for lazy loading
      
            const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Performance monitoring
      
            console.log('LCP:', entry.startTime);
          }
            const fidEntry = entry as PerformanceEventTiming;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
        });
      });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
        // Fallback for browsers that don't support these entry types
      }
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default PerformanceOptimizer;
