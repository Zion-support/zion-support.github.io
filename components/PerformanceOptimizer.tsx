  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      
  // Optimize images
  const optimizeImages = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing images...');
      for (const img of Array.from(images)) {
        if (img.complete && img.naturalWidth > 0) {
          // Add lazy loading
          img.loading = 'lazy';
      setIsOptimizing(false);
    }
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Measure initial performance
      window.addEventListener('load', measurePerformance);
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (lcp > 2500) { // LCP should be under 2.5s
            }
          }
        }
      });
  }, [measurePerformance]);

  const getPerformanceScore = (): number => {
    let score = 100;
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;
  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
  };

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);

  return (
    <div className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Gauge className="w-5 h-5 text-cyan-400" />
        </h3>
        <button
          onClick={() => setShowMetrics(!showMetrics)}
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70">Performance Score</span>
          <span className="text-2xl font-bold text-cyan-400">{performanceGrade}</span>
        </div>
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-sm text-white/60">{performanceScore}/100</span>
        </div>
      </div>
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Network className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstInputDelay)}ms</div>
            <div className="text-xs text-white/60">FID</div>
          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'
          <li>• Use WebP images for better compression</li>
          <li>• Implement lazy loading for images</li>
          <li>• Minimize CSS and JavaScript bundles</li>
          <li>• Use CDN for static assets</li>
          <li>• Enable gzip compression</li>
        </ul>
      </div>
    </div>
