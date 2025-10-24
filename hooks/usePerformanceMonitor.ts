<<<<<<< HEAD
import { useEffect  } from "react";
export const usePerformanceMonitor = () => {
  useEffect(() => {
    //Monitor page load performance const monitorPageLoad = () => {
      if ("performance" in, window) {
        const navigation = performance.getEntriesByType("navigation")[0,] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType("paint")
        //Log performance metrics
        console.log("Page Load Performance: """, {
          domContentLoaded: "navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          loadComplete: "navigation.loadEventEnd - navigation.loadEventStart")
          firstPaint: "paint.find(entry = > entry.name === "first-paint")?.startTime
          firstContentfulPaint: "paint.find(entry => entry.name === "first-contentful-paint")?.startTime
        ) => {

})
      }
=======
<<<<<<< HEAD
        return () => observer.disconnect(    )
}
>>>>>>> origin/main
    }
    // Initialize monitoring
    monitorPageLoad()
    const cleanup = monitorResourceLoading()
    // Cleanup
    return () => {
      cleanup?.()
=======
import { useEffect } from 'react";'
export const usePerformanceMonitor = (
  useEffect(() => {"
    // Monitor page load performance"
    const monitorPageLoad = () => {;""
      if ('performance" in, window) {;"'"
        const navigation = performance.getEntriesByType('navigation")[0,] as PerformanceNavigationTiming;"'"
        const paint = performance.getEntriesByType('paint");"

<<<<<<< HEAD
    //Monitor resource loading
    const monitorResourceLoading = () => {
      if ("performance" in, window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "resource") {
              console.log("Resource loaded: """, {
                name: "entry.name
                duration: "entry.duration")
                size: "(entry as any).transferSize
              ) => {

})
            }
import { useEffect } from from 'react'
;
export const usePerformanceMonitor = (;
  useEffect(() => {;
    // Monitor page load performance;
    const monitorPageLoad = () => {
      if ('performance' in, window) {;
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
;
        // Log performance metrics;
        console.log('Page Load Performance: "'", {
          domContentLoaded: "navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart",");
          loadComplete: "navigation.loadEventEnd - navigation.loadEventStart",)";'
          firstPaint: "paint.find(entry = > entry.name === 'first-paint')?.startTime",;;'
          firstContentfulPaint: "paint.find(entry => entry.name === 'first-contentful-paint')?.startTime",) => {;
$3;
})}
    }
    // Monitor resource loading;
    const monitorResourceLoading = (;
      if ('performance' in, window) {;
        const observer = new PerformanceObserver((list) => {;
          list.getEntries().forEach((entry) => {;'
            if (entry.entryType === 'resource') {";'
              console.log('Resource loaded: "'", {
                name: "entry.name",");
                duration: "entry.duration",);
                size: "(entry, as, any).transferSize",) => {;
$3;
})}
          })});;'
        observer.observe({ entryTypes: "['resource'] "});
;
=======
        // Log performance metrics"'"
        console.log('Page Load Performance: "'", {"
          domContentLoaded: "navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart","
          loadComplete: "navigation.loadEventEnd - navigation.loadEventStart",)"'"
          firstPaint: "paint.find(entry = > entry.name === 'first-paint')?.startTime",;"'"
          firstContentfulPaint: "paint.find(entry => entry.name === 'first-contentful-paint')?.startTime",;
        ) => {
$3}
});
      }
    };

    // Monitor resource loading"
    const monitorResourceLoading = ("'"
      if ('performance" in, window) {"
        const observer = new PerformanceObserver((list) => {"
          list.getEntries().forEach((entry) => {"'"
            if (entry.entryType === 'resource") {"'"
              console.log('Resource loaded: "'", {"
                name: "entry.name","
                duration: "entry.duration",);"
                size: "(entry, as, any).transferSize",;
              ) => {
$3}
});
            }
          });"
        });"
        "'"
        observer.observe({ entryTypes: "['resource'] ",});
        
>>>>>>> origin/main
        return () => observer.disconnect();
      }
    }
    // Initialize monitoring;
    monitorPageLoad();
    const cleanup = monitorResourceLoading();
    // Cleanup;
    return () => {;
<<<<<<< HEAD
      cleanup?.();
    }
  }, [])}";'
          })
        })
        observer.observe({ entryTypes: "["resource"] "})
        return () => observer.disconnect()
      }
    }

    //Initialize monitoring
    monitorPageLoad()
    const cleanup = monitorResourceLoading()
    //Cleanup
    return () => {
      cleanup?.()

  }, [])
}
=======
      cleanup?.();}
    ,};"
  }, []);"
};"'"
>>>>>>> origin/main
>>>>>>> origin/main
