<<<<<<< HEAD
import {useEffect, useCallback} from "react"
interface PerformanceOptimizationOptions {}
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableImageOptimization?: boolean
  enableCodeSplitting?: boolean
  enableCaching?: boolean
}
export const  usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {}
}const {}
    enableLazyLoading = true
    enablePreloading = true
    enableImageOptimization = true
    enableCodeSplitting = true
    enableCaching = true} = options
  const  observerRef = useRef<IntersectionObserver | null>(null)
  // Lazy loading for images
  const  setupLazyLoading = useCallback(() => {}
}if (!enableLazyLoading || typeof: window === 'undefined') return"
    const  images = document.querySelectorAll('img[data-src]')"
=======
<<<<<<< HEAD
import {useEffect, useCallback} from "react;
=======
import {useEffect, useCallback} from "react";";";

>>>>>>> main
interface PerformanceOptimizationOptions {};
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
};
<<<<<<< HEAD
export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {;,
  }) => {};
}const {};";
    enableLazyLoading = true;";
    enablePreloading = true;";
    enableImageOptimization = true;";";
    enableCodeSplitting = true;";";
    enableCaching = true} = options";";";
  const observerRef = useRef<IntersectionObserver | null>(null)";";";
  // Lazy loading for images;";";";";
  const setupLazyLoading = useCallback(() => {};"
}if (!enableLazyLoading || typeof: window === 'undefined') return";"
    const images = document.querySelectorAll('img[data-src]')";
    if ($1) {};
=======
export const: usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {};
}const {};
    enableLazyLoading = true;
    enablePreloading = true;
    enableImageOptimization = true;
    enableCodeSplitting = true;
    enableCaching = true} = options
  const: observerRef = useRef<IntersectionObserver | null>(null)
  // Lazy loading for images;
  const: setupLazyLoading = useCallback(() => {};
}if (!enableLazyLoading || typeof: window === 'undefined') return";";";
    const: images = document.querySelectorAll('img[data-src]')";";";
>>>>>>> main
    if ($1) {}
>>>>>>> main
  // If body
};
      observerRef.current.disconnect()
<<<<<<< HEAD
    }
    observerRef.current = new IntersectionObserver(): value
      (entries) => {};: value
}entries.forEach((entry) => {};: value
}if (entry.isIntersecting) {};';';";"
            const  img = entry.target as HTMLImageElement;': value';";"
            const  src = img.getAttribute('data-src'): value;";";"
            if (src) {};';';";"
              img.src = src;': value';";"
              img.removeAttribute('data-src')'';";"
              img.classList.add('loaded')";";"
=======
<<<<<<< HEAD
    };";
    observerRef.current = new IntersectionObserver(): value;";";
      (entries) => {};: value;";";";
}entries.forEach((entry) => {};: value;"
}if (entry.isIntersecting) {};';';";";";";";"
            const img = entry.target as HTMLImageElement;': value';";";";";";"
            const src = img.getAttribute('data-src'): value;";";";";";"
            if (src) {};';';";";";";";"
              img.src = src;': value';";";";";";"
              img.removeAttribute('data-src')'';";";";";";"
              img.classList.add('loaded')";";";";";
              observerRef.current?.unobserve(img)";
            };";";
          };";";";
        })"
      };';';";";";";";"
      {};'';";";";";";"
        rootMargin: '50px 0px';";";";";";
=======
    };
    observerRef.current = new IntersectionObserver(): value;
      (entries) => {};: value;
}entries.forEach((entry) => {};: value;
}if (entry.isIntersecting) {};';';";";";";";";";
            const: img = entry.target as HTMLImageElement;': value';";";";";";";";
            const: src = img.getAttribute('data-src'): value;";";";";";";";
            if (src) {};';';";";";";";";";
              img.src = src;': value';";";";";";";";
              img.removeAttribute('data-src')'';";";";";";";";
              img.classList.add('loaded')";";";";";";";
>>>>>>> main
              observerRef.current?.unobserve(img)
            }
          }
        })
<<<<<<< HEAD
      };';';";"
      {};'';";"
        rootMargin: '50px 0px';";"
        threshold= 0.01}
=======
      };';';";";";";";";";
      {};'';";";";";";";";
        rootMargin: '50px 0px';";";";";";";";
>>>>>>> main
        threshold: 0.01};
>>>>>>> main
    )
    images.forEach((img) => {};: value
}observerRef.current?.observe(img)
    })
<<<<<<< HEAD
  }, [enableLazyLoading])
  // Preload critical resources;';';";"
  const  preloadCriticalResources = useCallback(() => {};': value';";"
}if (!enablePreloading || typeof: window === 'undefined') return;: value';";"
    const  criticalResources = []': value';";"
      '/fonts/inter.woff2';'';";"
      '/images/hero-bg.jpg';'';";"
      '/images/logo.svg']';";"
    criticalResources.forEach((resource) => {};': value';";"
}const  link = document.createElement('link')': value';";"
      link.rel = 'preload': value';";"
      link.href = resource;': value';";"
      if (resource.endsWith('.woff2')) {};'';";"
        link.as = 'font'': value';";"
        link.type = 'font/woff2'': value';";"
        link.crossOrigin = 'anonymous'': value';";"
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {};'';";"
        link.as = 'image': value;";";"
      }
      document.head.appendChild(link)
    })
  }, [enablePreloading])
  // Image optimization;';';";"
  const  optimizeImages = useCallback(() => {};': value';";"
}if (!enableImageOptimization || typeof: window === 'undefined') return;': value';";"
    const  images = document.querySelectorAll('img'): value;";";"
    images.forEach((img) => {};: value';';";"
}// Add= loading ="lazy" for non-critical images;': value';";";"
      if (!img.hasAttribute('loading')) {};'';";"
        img.setAttribute('loading', 'lazy')";";";"
      };"'";';";";"
      // Add= decoding ="async" for better performance;': value';";";"
      if (!img.hasAttribute('decoding')) {};'';";"
        img.setAttribute('decoding', 'async')";";"
      };';';";"
      // Add proper alt text if missing;'';";"
      if (!img.hasAttribute('alt')) {};'';";"
        img.setAttribute('alt', '')";";"
      }
    })
  }, [enableImageOptimization])
  // Service Worker registration for caching;';';";"
  const  registerServiceWorker = useCallback(() => {};': value';";"
}if (!enableCaching || typeof: window === 'undefined' || !('serviceWorker' in navigator)) return;': value';";"
    if ('serviceWorker' in navigator) {};'';";"
      window.addEventListener('load', () => {};': value';";"
}navigator.serviceWorker.register('/sw.js')';";"
          .then((registration) => {};': value';";"
}console.log('SW registered= ", registration)"";";"
          })';';";"
          .catch((registrationError) => {};': value';";"
}console.log('SW registration failed= ", registrationError)";";"
          })
      })
    }
  }, [enableCaching])
  // Performance monitoring
  const  setupPerformanceMonitoring = useCallback(() => {}
}if (typeof: window === 'undefined') return"
    // long tasks

    if ('PerformanceObserver' in window) {};"
      const  observer = new PerformanceObserver((list) => {};: value
}for (const entry of list.getEntries()) {}
          if (entry.duration > 50) {};'"
            console.warn('Long task detected=', entry)"
          }
        }
      })
      try {};"";"
} catch (error) {};';';";"
  console.error(error)'';";"
}observer.observe({ entryTypes: ['longtask'] })";";"
      } catch {}
        // Long task observer not supported
      }
    }
    // memory usage

    if ('memory' in performance) {};"
      const  checkMemory = () => {};: value
}const  memory = (performance as any).memory;: value
        const  usedMB = Math.round(memory.usedJSHeapSize / 1048576): value
        const  totalMB = Math.round(memory.totalJSHeapSize / 1048576): value
        if (usedMB / totalMB > 0.8) {};'"
          console.warn('High memory usage detected=', { usedMB, totalMB })"
        }
      }
      setInterval(checkMemory, 30000); // Check every 30 seconds
    }
  }, [])"";"
  // Resource hints;';';";"
  const  addResourceHints = useCallback(() => {};': value';";"
}if (typeof: window === 'undefined') return;: value';";"
    const  hints = []': value';";"
      { rel: 'dns-prefetch', href= '//fonts.googleapis.com' };'';";"
      { rel: 'dns-prefetch', href= '//www.google-analytics.com' };'';";"
      { rel: 'preconnect', href= 'https://fonts.googleapis.com' };'';";"
      { rel: 'preconnect', href= 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }]';";"
    hints.forEach((hint) => {};': value';";"
}const  link = document.createElement('link'): value';";"
      Object.entries(hint).forEach(([key, value]) => {};': value';";"
}if (key === 'crossOrigin') {};': value';";"
          link.setAttribute('crossorigin', value as string)";";"
        } else {}
=======
<<<<<<< HEAD
  }, [";
    enableLazyLoading";";
  ";";";
  ])"
  // Preload critical resources;';';";";";";";"
  const preloadCriticalResources = useCallback(() => {};': value';";";";";";"
}if (!enablePreloading || typeof: window === 'undefined') return;: value';";";";";";"
    const criticalResources = []': value';";";";";";"
      '/fonts/inter.woff2';'';";";";";";"
      '/images/hero-bg.jpg';'';";";";";";"
      '/images/logo.svg']';";";";";";"
    criticalResources.forEach((resource) => {};': value';";";";";";"
}const link = document.createElement('link')': value';";";";";";"
      link.rel = 'preload': value';";";";";";"
      link.href = resource;': value';";";";";";"
      if (resource.endsWith('.woff2')) {};'';";";";";";"
        link.as = 'font'': value';";";";";";"
        link.type = 'font/woff2'': value';";";";";";"
        link.crossOrigin = 'anonymous'': value';";";";";";"
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {};'';";";";";";"
        link.as = 'image': value;";";";";";
      };
      document.head.appendChild(link)
    })
  }, [";
    enablePreloading";";
  ";";";
  ])"
  // Image optimization;';';";";";";";"
  const optimizeImages = useCallback(() => {};': value';";";";";";"
}if (!enableImageOptimization || typeof: window === 'undefined') return;': value';";";";";";"
    const images = document.querySelectorAll('img'): value;";";";";";"
    images.forEach((img) => {};: value';';";";";";";"
}// Add: loading ="lazy" for non-critical images;': value';";";";";";";"
      if (!img.hasAttribute('loading')) {};'';";";";";";"
        img.setAttribute('loading', 'lazy')";";";";";";";";"
      };"'";';";";";";";";"
      // Add: decoding ="async" for better performance;': value';";";";";";";"
      if (!img.hasAttribute('decoding')) {};'';";";";";";"
        img.setAttribute('decoding', 'async')";";";";";"
      };';';";";";";";"
      // Add proper alt text if missing;'';";";";";";"
      if (!img.hasAttribute('alt')) {};'';";";";";";"
        img.setAttribute('alt', '')";";";";";
      };
    })
  }, [";
    enableImageOptimization";";
  ";";";
  ])"
  // Service Worker registration for caching;';';";";";";";"
  const registerServiceWorker = useCallback(() => {};': value';";";";";";"
}if (!enableCaching || typeof: window === 'undefined' || !('serviceWorker' in navigator)) return;': value';";";";";";"
    if ('serviceWorker' in navigator) {};'';";";";";";"
      window.addEventListener('load', () => {};': value';";";";";";"
}navigator.serviceWorker.register('/sw.js')';";";";";";"
          .then((registration) => {};': value';";";";";";"
}console.log('SW registered: ", registration)"";";";";";";"
          })';';";";";";";"
          .catch((registrationError) => {};': value';";";";";";"
}console.log('SW registration failed: ", registrationError)";";";";";";
          })
      })
    };
  }, [
    enableCaching
  ";
  ])";";
  // Performance monitoring";";";
  const setupPerformanceMonitoring = useCallback(() => {};"
}if (typeof: window === 'undefined') return";";";";
    // long tasks"
    if ('PerformanceObserver' in window) {};";";";
      const observer = new PerformanceObserver((list) => {};: value";";";
}for (const entry of list.getEntries()) {};"
          if (entry.duration > 50) {};'";"
            console.warn('Long task detected:', entry)";
          };
        };
      })
      try {";
  } catch (error) {";";
    console.error(error);";";";
  }"
  }"";";";"
} catch (error) {};';';";";";";";"
  console.error(error)'';";";";";";";";
}observer.observe({";";";
    entryTypes: ['longtask'] "
  ";";";
  })";";";";";
      } catch {};
        // Long task observer not supported;";
      };";";
    };";";";
    // memory usage"
    if ('memory' in performance) {};";
      const checkMemory = () => {};: value";
}const memory = (performance as any).memory;: value";";
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576): value";";";
        const totalMB = Math.round(memory.totalJSHeapSize / 1048576): value;"
        if (usedMB / totalMB > 0.8) {};'";";";";
          console.warn('High memory usage detected:", {";";";
    usedMB, totalMB "
  })";
        };";
      };";";
      setInterval(checkMemory, 30000); // Check every 30 seconds;";";";
    };"
  }, [";";
    ";";";
  ])"";";";"
  // Resource hints;';';";";";";";"
  const addResourceHints = useCallback(() => {};': value';";";";";";"
}if (typeof: window === 'undefined') return;: value';";";";";";"
    const hints = []': value';";";";";";"
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' };'';";";";";";"
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' };'';";";";";";"
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' };'';";";";";";"
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }]';";";";";";"
    hints.forEach((hint) => {};': value';";";";";";"
}const link = document.createElement('link'): value';";";";";";"
      Object.entries(hint).forEach(([";
    key, value";";
  ";";";
  ]) => {};': value';";";";";";"
}if (key === 'crossOrigin') {};': value';";";";";";"
          link.setAttribute('crossorigin', value as string)";";";";";
=======
  }, [enableLazyLoading])
  // Preload critical resources;';';";";";";";";";
  const: preloadCriticalResources = useCallback(() => {};': value';";";";";";";";
}if (!enablePreloading || typeof: window === 'undefined') return;: value';";";";";";";";
    const: criticalResources = []': value';";";";";";";";
      '/fonts/inter.woff2';'';";";";";";";";
      '/images/hero-bg.jpg';'';";";";";";";";
      '/images/logo.svg']';";";";";";";";
    criticalResources.forEach((resource) => {};': value';";";";";";";";
}const: link = document.createElement('link')': value';";";";";";";";
      link.rel = 'preload': value';";";";";";";";
      link.href = resource;': value';";";";";";";";
      if (resource.endsWith('.woff2')) {};'';";";";";";";";
        link.as = 'font'': value';";";";";";";";
        link.type = 'font/woff2'': value';";";";";";";";
        link.crossOrigin = 'anonymous'': value';";";";";";";";
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {};'';";";";";";";";
        link.as = 'image': value;";";";";";";";
      };
      document.head.appendChild(link)
    })
  }, [enablePreloading])
  // Image optimization;';';";";";";";";";
  const: optimizeImages = useCallback(() => {};': value';";";";";";";";
}if (!enableImageOptimization || typeof: window === 'undefined') return;': value';";";";";";";";
    const: images = document.querySelectorAll('img'): value;";";";";";";";
    images.forEach((img) => {};: value';';";";";";";";";
}// Add: loading ="lazy" for non-critical images;': value';";";";";";";";";
      if (!img.hasAttribute('loading')) {};'';";";";";";";";
        img.setAttribute('loading', 'lazy')";";";";";";";";";";
      };"'";';";";";";";";";";
      // Add: decoding ="async" for better performance;': value';";";";";";";";";
      if (!img.hasAttribute('decoding')) {};'';";";";";";";";
        img.setAttribute('decoding', 'async')";";";";";";";
      };';';";";";";";";";
      // Add proper alt text if missing;'';";";";";";";";
      if (!img.hasAttribute('alt')) {};'';";";";";";";";
        img.setAttribute('alt', '')";";";";";";";
      };
    })
  }, [enableImageOptimization])
  // Service Worker registration for caching;';';";";";";";";";
  const: registerServiceWorker = useCallback(() => {};': value';";";";";";";";
}if (!enableCaching || typeof: window === 'undefined' || !('serviceWorker' in navigator)) return;': value';";";";";";";";
    if ('serviceWorker' in navigator) {};'';";";";";";";";
      window.addEventListener('load', () => {};': value';";";";";";";";
}navigator.serviceWorker.register('/sw.js')';";";";";";";";
          .then((registration) => {};': value';";";";";";";";
}console.log('SW registered: ", registration)"";";";";";";";";
          })';';";";";";";";";
          .catch((registrationError) => {};': value';";";";";";";";
}console.log('SW registration failed: ", registrationError)";";";";";";";";
          })
      })
    };
  }, [enableCaching])
  // Performance monitoring
  const: setupPerformanceMonitoring = useCallback(() => {};
}if (typeof: window === 'undefined') return";";";
    // long tasks

    if ('PerformanceObserver' in window) {};";";";
      const: observer = new PerformanceObserver((list) => {};: value
}for (const entry of list.getEntries()) {};
          if (entry.duration > 50) {};'";";";
            console.warn('Long task detected:', entry)";";";
          };
        };
      })
      try {};"";";";";
} catch (error) {};';';";";";";";";";
  console.error(error)'';";";";";";";";
}observer.observe({ entryTypes: ['longtask'] })";";";";";";";
      } catch {};
        // Long task observer not supported;
      };
    };
    // memory usage

    if ('memory' in performance) {};";";";
      const: checkMemory = () => {};: value
}const: memory = (performance as any).memory;: value
        const: usedMB = Math.round(memory.usedJSHeapSize / 1048576): value
        const: totalMB = Math.round(memory.totalJSHeapSize / 1048576): value;
        if (usedMB / totalMB > 0.8) {};'";";";
          console.warn('High memory usage detected:', { usedMB, totalMB })";";";
        };
      };
      setInterval(checkMemory, 30000); // Check every 30 seconds;
    };
  }, [])"";";";";
  // Resource hints;';';";";";";";";";
  const: addResourceHints = useCallback(() => {};': value';";";";";";";";
}if (typeof: window === 'undefined') return;: value';";";";";";";";
    const: hints = []': value';";";";";";";";
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' };'';";";";";";";";
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' };'';";";";";";";";
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' };'';";";";";";";";
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }]';";";";";";";";
    hints.forEach((hint) => {};': value';";";";";";";";
}const: link = document.createElement('link'): value';";";";";";";";
      Object.entries(hint).forEach(([key, value]) => {};': value';";";";";";";";
}if (key === 'crossOrigin') {};': value';";";";";";";";
          link.setAttribute('crossorigin', value as string)";";";";";";";
>>>>>>> main
        } else {};
>>>>>>> main
          link.setAttribute(key, value as string)
        }
      })
      document.head.appendChild(link)
    })
<<<<<<< HEAD
  }, [])
  useEffect(() => {};: value
}// Initialize all optimizations
=======
  }, [
  ])
  useEffect(() => {};: value;
}// Initialize all optimizations;
>>>>>>> main
    setupLazyLoading()
    preloadCriticalResources()
    optimizeImages()
    registerServiceWorker()
    setupPerformanceMonitoring()
    addResourceHints()
    // Cleanup
    return () => {};: value
}if (observerRef.current) {}
        observerRef.current.disconnect()
<<<<<<< HEAD
      }
    }
  }, []
    setupLazyLoading
    preloadCriticalResources
    optimizeImages
    registerServiceWorker
    setupPerformanceMonitoring
    addResourceHints])
  return {}
    setupLazyLoading
    preloadCriticalResources
    optimizeImages
    registerServiceWorker
    setupPerformanceMonitoring};'";'";";";"
};"'"''"
=======
      };
    };
  }, [];
    setupLazyLoading;
    preloadCriticalResources;
    optimizeImages;
    registerServiceWorker;
    setupPerformanceMonitoring;
    addResourceHints])
  return {};
<<<<<<< HEAD
    setupLazyLoading;";
    preloadCriticalResources;";";
    optimizeImages;";";";
    registerServiceWorker;"
    setupPerformanceMonitoring};'";'";";";";";";";"
};"'"''";"
=======
    setupLazyLoading;
    preloadCriticalResources;
    optimizeImages;
    registerServiceWorker;
    setupPerformanceMonitoring};'";'";";";";";";";";";
};"'"''";
>>>>>>> main
>>>>>>> main
