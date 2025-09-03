<<<<<<< HEAD
import React, {useEffect, useState } from 'react';
interface PerformanceMetrics {loadTime: number;
=======
<<<<<<< HEAD
import React, { useEffect, useState } from &apos;react';

=======
import React, { useEffect, useState } from 'react';
>>>>>>> main
interface PerformanceMetrics {
  loadTime: number;
>>>>>>> main
  renderTime: number;
<<<<<<< HEAD
  memoryUsag,
    e: number;
  networkLatenc,
    y: number}

export const PerformanceOptimizer: React.FC = () => {'
  const [metrics, setMetrics] = useState<PerformanceMetrics | null" >(null);
  const [isOptimized, setIsOptimized] = useState(false);
  useEffect(() => {"
=======
  memoryUsage: number;
<<<<<<< HEAD
  networkLatenc,y: number;
}&apos;&apos;

export const PerformanceOptimizer: React.FC = () => {}
  const [metrics, setMetrics] = useState<;<;<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {}
    const measurePerformance = () => {
      if (typeof window !== &apos;undefined&apos; && &apos;performance&apos; in window) {&apos;}}
        const;const navigation = performance.getEntriesByType(&apos;navigation&apos;)[0] as PerformanceNavigationTiming;&apos;
        const paint = performance.getEntriesByType(&apos;paint&apos;);&apos;
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const renderTime = paint.find(entry => entry.name === &apos;first-contentful-paint&apos;)?.startTime || 0;
        
        // Memory usage (if available)&apos;
=======
  networkLatency: number}

<<<<<<< HEAD
export const PerformanceOptimizer: React.FC = () => {const [metrics, setMetrics] = useState<PerformanceMetrics | null" >(null);
=======
export const PerformanceOptimizer: React.FC = () => {""
  const [metrics, setMetrics] = useState<PerformanceMetrics | null"" >(null);
>>>>>>> main
  const [isOptimized, setIsOptimized] = useState(false);
  useEffect(() => {""
>>>>>>> main
    const measurePerformance = () => {""
      if (typeof window !== 'undefined' && 'performance' in window) {""
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;""
        const paint = performance.getEntriesByType('paint');
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;""
        const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        // Memory usage (if available)
>>>>>>> main
        const memoryUsage = (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0;
        // Network latency estimation
        const networkLatency = navigation.responseEnd - navigation.requestStart;
        setMetrics({
          loadTime, renderTime,
<<<<<<< HEAD
          memoryUsage, networkLatency
        });

=======
          memoryUsage, networkLatency,
});
>>>>>>> main
        // Check if performance is optimized
<<<<<<< HEAD
        const isGoodPerformance = loadTime < 3000 && renderTime < 1500 && memoryUsage < 50; setIsOptimized(isGoodPerformance); } }; // Measure performance after page load if (document.readyState === 'complete') {measurePerformance(); } else {window.addEventListener('load', measurePerformance); } // Measure performance after page load" if (document.readyState === 'complete') {measurePerformance()} else {" window.addEventListener('load', measurePerformance)} return () => {"
      window.removeEventListener('load', measurePerformance)}
  }, []);
  const optimizePerformance = () => {// Implement performance optimizations"
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const criticalResources = ['/fonts/inter.woff2', '/images/hero-bg.jpg'
=======
<<<<<<< HEAD
        const isGoodPerformance = loadTime < 3000 && renderTime < 1500 && memoryUsage <;<;< 50;
        setIsOptimized(isGoodPerformance);
      }
    };
<<<<<<< HEAD
    // Measure performance after page load'
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {'
      window.addEventListener('load', measurePerformance);
    }
'
    // Measure performance after page load""
    if (document.readyState === 'complete') {'
      measurePerformance()} else {""
      window.addEventListener('load', measurePerformance)}
'
    return () => {""
      window.removeEventListener('load', measurePerformance)}
  }, []);
  const optimizePerformance = () => {'
    // Implement performance optimizations""
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const criticalResources = ['
        '/fonts/inter.woff2', '/images/hero-bg.jpg'
      ];
      criticalResources.forEach(resource => {'
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {'
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
      // Enable service worker for caching'
      if ('serviceWorker' in navigator) {'
        navigator.serviceWorker.register('/sw.js').catch(console.error);
=======

    // Measure performance after page load
    if (document.readyState === &apos;complete&apos;) {
      measurePerformance();
    } else {
      window.addEventListener(&apos;load&apos;, measurePerformance);
    }

    return () => {
      window.removeEventListener(&apos;load&apos;, measurePerformance);
    };
  }, []);&apos;

  const optimizePerformance = () => {
    // Implement performance optimizations
    if (typeof window !== &apos;undefined&apos;) {
      // Preload critical resources&apos;}}
      const;const criticalResources = [
        &apos;/fonts/inter.woff2&apos;,
        &apos;/images/hero-bg.jpg&apos;
>>>>>>> main
      ];

      criticalResources.forEach(resource => {&apos;}
        const link = document.createElement(&apos;link&apos;);
        link.rel = &apos;preload';
        link.href = resource;
        link.as = resource.endsWith(&apos;.woff2&apos;) ? &apos;font&apos; : &apos;image';
        if (resource.endsWith(&apos;.woff2&apos;)) {
          link.crossOrigin = &apos;anonymous';
        }
        document.head.appendChild(link);
      });

      // Enable service worker for caching
<<<<<<< HEAD
      if ('serviceWorker' in navigator) {navigator.serviceWorker.register('/sw.js').catch(console.error);
=======
      if (&apos;serviceWorker&apos; in navigator) {
        navigator.serviceWorker.register(&apos;/sw.js&apos;).catch(console.error);
>>>>>>> main
>>>>>>> main
      }

      setIsOptimized(true);
    }
=======
        const isGoodPerformance = loadTime < 3000 && renderTime < 1500 && memoryUsage < 50;
        setIsOptimized(isGoodPerformance);, }
    };
    // Measure performance after page load""
    if (document.readyState === 'complete') {
      measurePerformance();, } else {""
      window.addEventListener('load', measurePerformance);, }
""
    // Measure performance after page load""
    if (document.readyState === 'complete') {""
      measurePerformance()} else {""
      window.addEventListener('load', measurePerformance)}
""
    return () => {""
      window.removeEventListener('load', measurePerformance)}
  }, []);
  const optimizePerformance = () => {""
    // Implement performance optimizations""
    if (typeof window !== 'undefined') {
      // Preload critical resources
<<<<<<< HEAD
      const criticalResources = [""
        '/fonts/inter.woff2', '/images/hero-bg.jpg',
];
      criticalResources.forEach(resource => {""
        const link = document.createElement('link');""
        link.rel = 'preload';
        link.href = resource;""
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';""
        if (resource.endsWith('.woff2')) {""
          link.crossOrigin = 'anonymous';, }
        document.head.appendChild(link);, });
      // Enable service worker for caching""
      if ('serviceWorker' in navigator) {""
        navigator.serviceWorker.register('/sw.js').catch(console.error);, }
=======
<<<<<<< HEAD
      const criticalResources = [
        '/fonts/inter.woff2', '/images/hero-bg.jpg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
=======
      const criticalResources = ["
        '/fonts/inter.woff2,/images/hero-bg.jpg',
];
      criticalResources.forEach(resource => {"
        const link = document.createElement('link');"
>>>>>>> main
        link.rel = 'preload';
        link.href = resource;"
        link.as = resource.endsWith('.woff2') ? 'font' : 'image
        if (resource.endsWith('.woff2')) {"
          link.crossOrigin = 'anonymous';,
}
        document.head.appendChild(link);,
});
      // Enable service worker for caching"
      if ('serviceWorker' in navigator) {"
        navigator.serviceWorker.register('/sw.js').catch(console.error);,
}
>>>>>>> main

      setIsOptimized(true);, }
>>>>>>> main
  };
<<<<<<< HEAD
  if (!metrics) {return null;
  }

<<<<<<< HEAD
  if (!metrics) {
    return null}
'
  return (""
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">""
      <div className="flex items-center justify-between mb-2">""
        <h3 className="text-sm font-semibold text-gray-900">Performance</h3>""
        <div className={`w-3 h-3 rounded-full ${isOptimized ? 'bg-green-500' : 'bg-yellow-500'}`}" ></div>
      </div>"
      ""
      <div className="space-y-2 text-xs">""
        <div className="flex justify-between">""
          <span className="text-gray-600">Load Time:</span>""
=======
  if (!metrics) {return null}

  return ("
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">"
      <div className="flex items-center justify-between mb-2">"
        <h3 className="text-sm font-semibold text-gray-900">Performance</h3>"
        <div className={`w-3 h-3 rounded-full ${isOptimized ? 'bg-green-500' : 'bg-yellow-500'}`}" ></div>
      </div>
      "
      <div className="space-y-2 text-xs">"
        <div className="flex justify-between">"
          <span className="text-gray-600">Load Time: </span>"
>>>>>>> main
          <span className={metrics.loadTime < 3000 ? 'text-green-600' : 'text-red-600'}" >
=======
  if (!metrics) {
    return null;, }

  if (!metrics) {
<<<<<<< HEAD
    return null;
  }

  return (&apos;&apos;
    <div className=&quot;fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50&quot;>&quot;"
      <div className=&quot;flex items-center justify-between mb-2&quot;>&quot;"
        <h3 className=&quot;text-sm font-semibold text-gray-900&quot;>Performance&quot;</h3>
        <div className={`w-3 h-3 rounded-full ${isOptimized ? &apos;bg-green-500&apos; : &apos;bg-yellow-500&apos;}`}>&apos;</div>
      </div>
      
      <div className=&quot;space-y-2 text-xs&quot;>&quot;"
        <div className=&quot;flex justify-between&quot;>&quot;"
          <span className=&quot;text-gray-600&quot;>Load Time:&quot;</span>
          <span className={metrics.loadTime} < 3000 ? &apos;text-green-600&apos; : &apos;text-red-600&apos;}>
            {metrics.loadTime.toFixed(0)}ms&apos;
=======
    return null}
""
  return (""
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">""
      <div className="flex items-center justify-between mb-2">""
        <h3 className="text-sm font-semibold text-gray-900">Performance</h3>""
        <div className={`w-3 h-3 rounded-full ${isOptimized ? 'bg-green-500' : 'bg-yellow-500'}`}"" ></div>
      </div>""
      ""
      <div className="space-y-2 text-xs">""
        <div className="flex justify-between">""
          <span className="text-gray-600">Load Time:</span>""
          <span className={metrics.loadTime < 3000 ? 'text-green-600' : 'text-red-600'}"" >
>>>>>>> main
            {metrics.loadTime.toFixed(0)}ms
>>>>>>> main
          </span>
<<<<<<< HEAD
        </div>""
        <div className="flex justify-between">""
          <span className="text-gray-600">Render Time: </span>""
          <span className={metrics.renderTime < 1500 ? 'text-green-600' : 'text-red-600'}" >"
=======
<<<<<<< HEAD
        </div>
<<<<<<< HEAD
        <div className=&quot;flex justify-between&quot;>&quot;"
          <span className=&quot;text-gray-600&quot;>Render Time:&quot;</span>
          <span className={metrics.renderTime} < 1500 ? &apos;text-green-600&apos; : &apos;text-red-600&apos;}>
            {metrics.renderTime.toFixed(0)}ms&apos;
          </span>
<<<<<<< HEAD
        </div>"
        <div className="flex justify-between">"
          <span className="text-gray-600">Render Time: </span>"
=======
        </div>
        <div className=&quot;flex justify-between&quot;>&quot;"
          <span className=&quot;text-gray-600&quot;>Memory:&quot;</span>
          <span className={metrics.memoryUsage} < 50 ? &apos;text-green-600&apos; : &apos;text-red-600&apos;}>
            {metrics.memoryUsage.toFixed(1)}MB&apos;
          </span>
        </div>
        <div className=&quot;flex justify-between&quot;>&quot;"
          <span className=&quot;text-gray-600&quot;>Network:&quot;</span>
          <span className={metrics.networkLatency} < 1000 ? &apos;text-green-600&apos; : &apos;text-red-600&apos;}>
            {metrics.networkLatency.toFixed(0)}ms&apos;
=======
        <div className="flex justify-between">
          <span className="text-gray-600">Render Time: </span>
>>>>>>> main
          <span className={metrics.renderTime < 1500 ? 'text-green-600' : 'text-red-600'}>
            {metrics.renderTime.toFixed(0)}ms
          </span>
        </div>'
        <div className="flex justify-between">"
          <span className="text-gray-600">Memory: </span>"
          <span className={metrics.memoryUsage < 50 ? 'text-green-600' : 'text-red-600'}>
            {metrics.memoryUsage.toFixed(1)}MB
          </span>
        </div>'
        <div className="flex justify-between">"
          <span className="text-gray-600">Network: </span>"
          <span className={metrics.networkLatency < 1000 ? 'text-green-600' : 'text-red-600'}>
=======
        </div>"
        <div className="flex justify-between">"
          <span className="text-gray-600">Render Time: </span>"
          <span className={metrics.renderTime < 1500 ? 'text-green-600' : 'text-red-600'}" >
>>>>>>> main
            {metrics.renderTime.toFixed(0)}ms
          </span>
        </div>""
        <div className="flex justify-between">""
          <span className="text-gray-600">Memory: </span>""
          <span className={metrics.memoryUsage < 50 ? 'text-green-600' : 'text-red-600'}" >"
            {metrics.memoryUsage.toFixed(1)}MB
          </span>
<<<<<<< HEAD
        </div>""
        <div className="flex justify-between">""
          <span className="text-gray-600">Network: </span>""
          <span className={metrics.networkLatency < 1000 ? 'text-green-600' : 'text-red-600'}" >"
=======
        </div>"
        <div className="flex justify-between">"
          <span className="text-gray-600">Network: </span>"
          <span className={metrics.networkLatency < 1000 ? 'text-green-600' : 'text-red-600'}" >
>>>>>>> main
>>>>>>> main
            {metrics.networkLatency.toFixed(0)}ms
>>>>>>> main
          </span>
        </div>
      </div>

<<<<<<< HEAD
      {!isOptimized && (}
        <button
          onClick={optimizePerformance}
          className=&quot;mt-3 w-full bg-blue-600 text-white text-xs py-1 px-2 rounded hover:bg-blue-700 transition-colors&quot;
        >
          Optimize Performance&quot;
=======
      {!isOptimized && (
<<<<<<< HEAD
        <button onClick={optimizePerformance} className="mt-3 w-full bg-blue-600 text-white text-xs py-1 px-2 rounded hover: bg-blue-700 transition-colors" >
=======
<<<<<<< HEAD
        <button onClick={optimizePerformance}""
          className="mt-3 w-full bg-blue-600 text-white text-xs py-1 px-2 rounded hover: bg-blue-700 transition-colors"" >"
=======
<<<<<<< HEAD
        <button
          onClick={optimizePerformance}
          className="mt-3 w-full bg-blue-600 text-white text-xs py-1 px-2 rounded hover: bg-blue-700 transition-colors"
        >
=======
        <button onClick={optimizePerformance}"
          className="mt-3 w-full bg-blue-600 text-white text-xs py-1 px-2 rounded hover: bg-blue-700 transition-colors"" >
>>>>>>> main
>>>>>>> main
>>>>>>> main
          Optimize Performance
>>>>>>> main
        </button>
      )}
    </div>
<<<<<<< HEAD
  );
};
export default PerformanceOptimizer;"
=======
  );, };
export default PerformanceOptimizer;"`"
>>>>>>> main
