setMetrics (newMetrics) 
}
}, [])
//Optimize images for (const img of Array.from (images) ) {
  if (img.complete && img.naturalWidth > 0) {
  //Add lazy loading img.loading = 'lazy'
//Add responsive sizes if not present if (!img.sizes) {
  optimizedCount++ 
}
}//Simulate optimization delay await new Promise (resolve => setTimeout (resolve, 1000) )
setOptimizationStatus ('Font optimization complete')
//Simulate optimization delay setOptimizationStatus ('Code optimization complete')
//Simulate optimization delay try {
  await optimizeImages ()
await optimizeFonts ()
await optimizeCode ()
setOptimizationStatus ('All optimizations complete!')
//Re-measure performance after optimization //Initialize performance monitoring useEffect ( () => {
  if (typeof window !== 'undefined') {
  //Measure initial performance //Monitor for performance issues const observer = new PerformanceObserver ( (list) => {
  for (const entry of list.getEntries () ) {
  if (entry.entryType === 'largest-contentful-paint') {
  
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate
  enableReporting = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' |!('performance' in window)) return;
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    // Core Web Vitals
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime |0;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime |0;
    const ttfb = navigation.responseStart - navigation.requestStart;
    // Memory usage (if available)
    const memory = (performance as any).memory ? {
      used: (performance as any).memory.usedJSHeapSize
      total: (performance as any).memory.totalJSHeapSize
      limit: (performance as any).memory.jsHeapSizeLimit
    } : undefined;
    const newMetrics: PerformanceMetrics = {
      fcp
      lcp
      fid: 0, // First Input Delay - would need user interaction to measure
      cls: 0, // Cumulative Layout Shift - would need observer
      ttfb
      memory
    }
    setMetrics(newMetrics);
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }
    if (enableReporting && process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', newMetrics);
    }
  }, [onMetricsUpdate, enableReporting]);
  useEffect(() => {
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }
    return () => {
      window.removeEventListener('load', measureWebVitals);
    }
  }, [measureWebVitals]);
  // Monitor for performance issues
  useEffect(() => {
    if (!metrics) return;
    const warnings: string[] = [];
    if (metrics.fcp > 1800) warnings.push('First Contentful Paint is slow (>1.8s)');
    if (metrics.lcp > 2500) warnings.push('Largest Contentful Paint is slow (>2.5s)');
    if (metrics.ttfb > 600) warnings.push('Time to First Byte is slow (>600ms)');
    if (metrics.memory) {
      const memoryUsage = (metrics.memory.used / metrics.memory.limit) * 100;
      if (memoryUsage > 80) warnings.push('High memory usage detected');
    }
    if (warnings.length > 0 && enableReporting) {
      console.warn('Performance Issues Detected:', warnings);
    }
  }, [metrics, enableReporting]);
  return null;
}
})
}
}, [measurePerformance])
if (metrics.firstContentfulPaint > 1800) score -= 20
if (metrics.largestContentfulPaint > 2500) score -= 25
if (metrics.loadTime > 3000) score -= 15
if (metrics.timeToInteractive > 3500) score -= 20
> {
  showMetrics ? 'Hide' : 'Show' 
}Metrics </button> </div> </div> <div className="w-full bg-white/10 rounded-full h-3" > <motion.div </div> </div> {
  /* Metrics Display */ 
}{
  showMetrics && (<motion.div </div> </motion.div>) 
}<button onClick= {
  runAllOptimizations 
}disabled= {
  isOptimizing 
}className= {
  `w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 $ {
  isOptimizing ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105' 
}flex items-center justify-center gap-2` 
}> {
  isOptimizing ? (<> <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> <span>Optimizing...</span> </>) : (<> <Zap className="w-4 h-4" /> <span>Run All Optimizations</span> </>) 
}</button> </div>) 
}</div> <li>• Use WebP images for better compression</li> <li>• Implement lazy loading for images</li> <li>• Minimize CSS and JavaScript bundles</li> <li>• Use CDN for static assets</li> <li>• Enable gzip compression</li> </ul> </div> </div>) 
}
export default PerformanceOptimizer