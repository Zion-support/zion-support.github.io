<<<<<<< HEAD
import { useCallback, useMemo } from 'react';
'use client';
// Performance optimization utilities
// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
// Throttle utility for performance
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
// Intersection Observer hook for lazy loading
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new IntersectionObserver(callback, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
          })
        : null,
    [callback, options]
  );
  const observe = useCallback(
    (element: Element | null) => {
      if (observer && element) {
        observer.observe(element);
        return () => observer.unobserve(element);
      }
      return () => {};
    },
    [observer]
  );
  const disconnect = useCallback(() => {
    if (observer) {
      observer.disconnect();
    }
  }, [observer]);
  useEffect(() => {
    return () => disconnect();
  }, [disconnect]);
  return { observe, disconnect };
};
// Image lazy loading hook
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { observe } = useIntersectionObserver(
    useCallback(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded && !isError) {
            const img = new Image();
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              setIsError(true);
            };
            img.src = src;
          }
        });
      },
      [src, isLoaded, isError]
    )
  );
  return { imageSrc, isLoaded, isError, observe };
};
// Performance monitoring hook
  const [metrics, setMetrics] = useState<{
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  }>({});
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime;
      setMetrics({
        fcp,
        lcp,
        ttfb: navigation?.responseStart - navigation?.requestStart
      });
    };
    // Monitor performance after page load
    if (document.readyState === 'complete') {
      updateMetrics();
    } else {
      window.addEventListener('load', updateMetrics);
    }
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
        getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })));
        getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })));
        getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })));
        getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })));
      });
    }
    return () => {
      window.removeEventListener('load', updateMetrics);
    };
  }, []);
  return metrics;
};
// Memory usage monitoring
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
  }>({});
  useEffect(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;
    const updateMemoryInfo = () => {
      const memory = (performance as any).memory;
      if (memory) {
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        });
      }
    };
    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);
    return () => clearInterval(interval);
  }, []);
  return memoryInfo;
};
// Resource preloading utility
  if (typeof window === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};
// Critical resource preloading
  if (typeof window === 'undefined') return;
  // Preload critical fonts
  preloadResource('/fonts/inter-var.woff2', 'font');
  preloadResource('/fonts/inter-var.woff', 'font');
  // Preload critical images
  preloadResource('/images/hero-bg.webp', 'image');
  preloadResource('/images/logo.svg', 'image');
  // Preload critical CSS
  preloadResource('/styles/critical.css', 'style');
};
// Bundle size monitoring
  const [bundleSize, setBundleSize] = useState<{
    totalSize?: number;
    jsSize?: number;
    cssSize?: number;
    imageSize?: number;
  }>({});
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const calculateBundleSize = () => {
      const resources = performance.getEntriesByType('resource');
      let totalSize = 0;
      let jsSize = 0;
      let cssSize = 0;
      let imageSize = 0;
      resources.forEach((resource) => {
        const size = (resource as PerformanceResourceTiming).transferSize || 0;
        totalSize += size;
        if (resource.name.includes('.js')) {
          jsSize += size;
        } else if (resource.name.includes('.css')) {
          cssSize += size;
        } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
          imageSize += size;
        }
      });
      setBundleSize({
        totalSize,
        jsSize,
        cssSize,
        imageSize
      });
    };
    // Calculate after page load
    if (document.readyState === 'complete') {
      calculateBundleSize();
    } else {
      window.addEventListener('load', calculateBundleSize);
    }
    return () => {
      window.removeEventListener('load', calculateBundleSize);
    };
  }, []);
  return bundleSize;
};
const performanceOptimizations = {
  debounce,
  throttle,
  useIntersectionObserver,
  useLazyImage,
  usePerformanceMonitoring,
  useMemoryMonitoring,
  preloadResource,
  preloadCriticalResources,
  useBundleSizeMonitoring
};

=======
<<<<<<< HEAD
      ) => {}
=======
'use client'
import { useCallback, useMemo } from 'react";'
// Performance optimization utilities"
// Debounce utility for performance"

export const debounce = <T extends (...args: "any[]) => any>(",func: "T",wait: "number</T>
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
<<<<<<< HEAD
  return(...arg",</T>)
s: "Parameters<T>) => {
clearTimeout(timeout)
timeout = setTimeout(() => func(...args)",wait)
  }

}

//Throttle utility for performance</T>
export const throttle = <T extends (...args: "any[]) => any>(",func: "T",limit: "number</T>
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return(...arg",</T>)
s: "Parameters<T>) => {
if(!inThrottle) {  
func(...args);,inThrottle = true
setTimeout(() => (inThrottle = false), limit)
  }

}

//Intersection Observer hook for lazy loading

export const useIntersectionObserver = () => {
callback: "(entrie",s: "IntersectionObserverEntry[]) => void",options: "IntersectionObserverInit = {"}

) => {
const observer = useMemo()
    () =>
typeof window !== "undefined
        ? new IntersectionObserver(callback, {)
threshold: "0.1",rootMargin: ""50px"",...options)
})
        : null
    [callback, options ]
  )
const observe = useCallback()
    (element: "Element|null) => {
if(observer && element) {
observer.observe(element)
return (</T>
    <div />)
      ) => observer.unobserve(element)</></>,}
      return(<>)
'use client'
import { useCallback, useMemo } from from 'react'
// Performance optimization utilities
// Debounce utility for performance
export const debounce = <T extends (...args: "any[]) =>any>(",func: "T",wait: "number</T>
  )
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...arg",</T>)
s: "Parameters<T>) => {
clearTimeout(timeout)
timeout = setTimeout(() => func(...args)",wait)
  }
}
// Throttle utility for performance</>
export const throttle = <T extends (...args: "any[]) =>any>(",func: "T",limit: "number</T>
  )
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...arg",</T>)
s: "Parameters<T>) => {
if(!inThrottle) {  
=======
  return(...arg",</T>;)"
s: "Parameters<T>) => {"
clearTimeout(timeout)"
timeout = setTimeout(() => func(...args)",wait)}
  }"
}"
// Throttle utility for performance</T>
export const throttle = <T extends (...args: any[]) => any>(,func: "T",limit: "number</T>
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return(...arg",</T>;)"
s: "Parameters<T>) => {"
if(!inThrottle) {  "
>>>>>>> origin/main
func(...args)",inThrottle = true,
setTimeout(() => (inThrottle = false), limit)}
    , ,
  );
}
<<<<<<< HEAD
// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (")
callback: "(entrie",s: "IntersectionObserverEntry[]) => void",options: "IntersectionObserverInit = {"}
) => {
const observer = useMemo()
    () =>
typeof window !== 'undefined'
        ? new IntersectionObserver(callback, {)
threshold: "0.1",rootMargin: '50px',...options)
})
        : null
    [callback, options]
  )
const observe = useCallback()
=======
// Intersection Observer hook for lazy loading"

export const useIntersectionObserver = ("
callback: "(entrie",s: "IntersectionObserverEntry[]) => void",options: "IntersectionObserverInit = {",}
) => {"
const observer = useMemo()"
    () =>
typeof window !== 'undefined
        ? new IntersectionObserver(callback, {;)"'"
threshold: "0.1",rootMargin: "'50px'",...options)}
})
        : null
    [callback, options,]"
  )"
const observe = useCallback()"
>>>>>>> origin/main
    (element: "Element | null) => {
if(observer && element) {
observer.observe(element)
return(</T>
    <div />)
      ) => observer.unobserve(element)"
    </>"}"
    </>,}
      return(<>)
      ) => "{}"
>>>>>>> origin/main
    </>
    </>
  );
    [observer]
</div>
      </div>
<<<<<<< HEAD
  ))
const disconnect = useCallback(() => {
if(observer) {
observer.disconnect()
    ,}
  }, [observer])
useEffect(() => {
return () => disconnect()
  }, [disconnect])
return { observe, disconnect }
=======
  );
}
const disconnect = useCallback(() => {
if(observer) {  
observer.disconnect()}
    ,}
  }, [observer])
useEffect(() => {
return () => disconnect()}
  }, [disconnect])
return { observe, disconnect }
;}
// Image lazy loading hook

export const useLazyImage = ('"
const [imageSrc, setImageSrc,] = useState(placeholder || '")
  const [isLoaded, setIsLoaded,] = useState(false)
  const [isError, setIsError,] = useState(false)
  const { observe ) => {
$3}
;} = useIntersectionObserver(;)
useCallback()
>>>>>>> origin/main
      (entries) => {
entries.forEach((entry) => {
if(entry.isIntersecting && !isLoaded && !isError) {
const img = new Image()
            img.onload = () => {
<<<<<<< HEAD
setImageSrc(src)
              setIsLoaded(true    )
}
            img.onerror = () => {
setIsError(true    )
}
img.src = src
          }
<<<<<<< HEAD
        })
      }

      [src, isLoaded, isError,]

  )
=======
        }    )
}
      [src, isLoaded, isError])
>>>>>>> origin/main
  return { imageSrc, isLoaded, isError, observe }
}
// Performance monitoring hook
=======
setImageSrc(src)}
              setIsLoaded(true)}
            img.onerror = () => {}
setIsError(true)}
img.src = src
          }
        })}
      [src, isLoaded, isError])
  return { imageSrc, isLoaded, isError, observe
  );
}
// Performance monitoring hook

>>>>>>> origin/main
export const usePerformanceMonitoring = (
const [metrics, setMetrics] = useState<{
fcp?: number
    lcp?: number
    fid?: number
<<<<<<< HEAD
    }
    return(<div />)
  ) => {
window.removeEventListener('load', updateMetrics)
      </div>)
  )
      </div>
      )
}
=======
    cls?: number
    ttfb?: number
) => {
$3"}
}>({})"
useEffect(() => {"'"
if (typeof window === 'undefined") return
const updateMetrics = ("
return"
return"'"
const navigation = performance.getEntriesByType('navigation")[0,] as PerformanceNavigationTiming"'"
const paint = performance.getEntriesByType('paint")"'"
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint")?.startTime"'"
const lcp = performance.getEntriesByType('largest-contentful-paint")[0,]?.startTime
setMetrics({"
fcp;)"
lcp)"
ttfb: "navigation?.responseStart - navigation?.requestStart",) => {
$3}
})"
    }"
    // Monitor performance after page load"'"
if(document.readyState = == 'complete") {"
updateMetrics()"}
    ,} else { "'"}
window.addEventListener('load", updateMetrics);, }"
    }"
    // Monitor Core Web Vitals"'"
if('web-vitals" in, window) {"'"}
import('web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {"}
getCLS((metric) => setMetrics(prev => ({ ...prev, cls: "metric.value ",})))"
getFID((metric) => setMetrics(prev => ({ ...prev, fid: "metric.value ",})))"
getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: "metric.value ",})))"
getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: "metric.value ",})))"
getTTFB((metric) => setMetrics(prev = > ({ ...prev, ttfb: "metric.value ",})
  );
}
      })
    }"
    return(<div />;)"
  ) => {"'"
window.removeEventListener('load", updateMetrics
      </div>
  );
}
      </div>
  )
  );
}
    return(<div />)
  ) => {
window.removeEventListener('load', updateMetrics)
      </div>
  );
}
      </div>
  );
  )}
>>>>>>> origin/main
  }, [])
return, metrics
}
// Memory usage monitoring
<<<<<<< HEAD
export const useMemoryMonitoring = (
const [memoryInfo, setMemoryInfo] = useState<{
usedJSHeapSize?: number
<<<<<<< HEAD
    totalJSHeapSize?: number
    jsHeapSizeLimit?: number
) => {

}>({})
useEffect(() => {
if (typeof window === "undefined" || !("memory" in, performance)) return

const updateMemoryInfo = () => {
return
return
const memory = (performance as any).memory
if(memory) {
setMemoryInfo({
usedJSHeapSize: "memory.usedJSHeapSize",totalJSHeapSize: "memory.totalJSHeapSize)
jsHeapSizeLimi")
t: "memory.jsHeapSizeLimit") => {

})

    totalJSHeapSize?: number)
    jsHeapSizeLimit?: number) => {
$3
}>({})
useEffect(() => {
if (typeof window === 'undefined' || !('memory' in, performance)) return
const updateMemoryInfo = (
return
return)
const memory = (performance, as, any).memory
if(memory) {
setMemoryInfo({")
usedJSHeapSize: "memory.usedJSHeapSize",totalJSHeapSize: "memory.totalJSHeapSize)
jsHeapSizeLimi",)
t: "memory.jsHeapSizeLimit",) => {
$3
})
=======
>>>>>>> origin/main
      }
    }
    updateMemoryInfo()
    const interval = setInterval(updateMemoryInfo, 5000)
    return(<div />)
  ) => clearInterval(interval)
      </div>)
  )
=======

export const useMemoryMonitoring = (
const [memoryInfo, setMemoryInfo] = useState<{
usedJSHeapSize?: number
    totalJSHeapSize?: number
    jsHeapSizeLimit?: number
) => {
$3"}
}>({})"
useEffect(() => {"'"
if (typeof window === 'undefined' || !('memory" in, performance)) return

const updateMemoryInfo = (
return
return
const memory = (performance, as, any).memory"
if(memory) {"
setMemoryInfo({"
usedJSHeapSize: "memory.usedJSHeapSize",totalJSHeapSize: "memory.totalJSHeapSize;)"
jsHeapSizeLimi",)"
t: "memory.jsHeapSizeLimit",) => {
$3}
})
  );
}
    updateMemoryInfo()
    const interval = setInterval(updateMemoryInfo, 5000)
    return(<div />)
  ) => "clearInterval(interval)"
      </div>
  );
}
  }, [])
return, memoryInfo
<<<<<<< HEAD
}
//Resource preloading utility
export const preloadResource = () => {
if (typeof window === "undefined") return
const link = document.createElement("link")
  link.rel = "preload
=======
}"
// Resource preloading utility"
export const preloadResource = ("'"
if (typeof window === 'undefined") return"'"
const link = document.createElement('link")"'"
  link.rel = 'preload"
>>>>>>> origin/main
>>>>>>> origin/main
link.href = href
link.as = as,
  document.head.appendChild(link);,
) => {
$3
<<<<<<< HEAD
}
// Critical resource preloading
=======
  );
}
// Critical resource preloading
export const preloadCriticalResources = ("
return"
return"'"
if (typeof window === 'undefined") return // Preload critical fonts"'"
preloadResource('/fonts/inter-var.woff2', 'font")"'"
  preloadResource('/fonts/inter-var.woff', 'font")"
  // Preload critical images"'"
preloadResource('/images/hero-bg.webp', 'image")"'"
  preloadResource('/images/logo.svg', 'image")"
  // Preload critical CSS"'"
preloadResource('/styles/critical.css', 'style")
) => {
$3
  );
>>>>>>> origin/main
}
// Bundle size monitoring
export const useBundleSizeMonitoring = (
const [bundleSize, setBundleSize] = useState<{
totalSize?: number
    jsSize?: number
<<<<<<< HEAD
=======
    cssSize?: number
    imageSize?: number
) => {
$3"}
}>({})"
useEffect(() => {"'"
if (typeof window === 'undefined") return
const calculateBundleSize = ("
return"
return"'"
const resources = performance.getEntriesByType('resource")

>>>>>>> origin/main
let totalSize = 0
let jsSize = 0
let cssSize = 0
let imageSize = 0
<<<<<<< HEAD
} else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
imageSize += size
=======
resources.forEach((resource) => {"
const size = (resource, as, PerformanceResourceTiming).transferSize || 0"
totalSize += size"'"
if (resource.name.includes('.js")) {
jsSize += size"
) => {"
$3"'"}
} else if (resource.name.includes('.css")) {
cssSize += size}
} else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
imageSize += size
  );
>>>>>>> origin/main
}
      })
setBundleSize({
totalSize
<<<<<<< HEAD
      </div>
=======
jsSize
cssSize;)
imageSize)}
})"
    }"
    // Calculate after page load"'"
if(document.readyState = == 'complete") {"
calculateBundleSize()"}
    ,} else { "'"}
window.addEventListener('load", calculateBundleSize);, }
    }"
    return(<div />)"
  ) => {"'"
window.removeEventListener('load", calculateBundleSize
      </div>
  );
}
      </div>
>>>>>>> origin/main
  )
return, bundleSize
  );
}
const performanceOptimizations = {
debounce
throttle
useIntersectionObserver
useLazyImage
usePerformanceMonitoring
useMemoryMonitoring
preloadResource
<<<<<<< HEAD
preloadCriticalResources
=======
preloadCriticalResources
useBundleSizeMonitoring}
,}"
export default performanceOptimizations"
}"
>>>>>>> origin/main
>>>>>>> origin/main
