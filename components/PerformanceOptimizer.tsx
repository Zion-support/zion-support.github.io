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