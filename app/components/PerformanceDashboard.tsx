  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType()
      )[0] as PerformanceNavigationTiming
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart;
        : 0;
      // Measure render time;
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage;
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as {memory?: { usedJSHeapSize: number ,}}}).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      // Measure FPS (simplified)
      let fps = 60;
      if ('requestAnimationFrame' in window) {let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = () => {;
          const currentTime = performance.now();
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;}if (isMonitoring) {requestAnimationFrame(measureFPS)}}
        requestAnimationFrame(measureFPS);
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [alerts, setAlerts] = useState<string[]>([])
  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0
      // Measure render time
      const renderStart = performance.now()
      const renderTime = performance.now() - renderStart
      // Measure memory usage
      let memoryUsage = 0
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
        memoryUsage = memory?.usedJSHeapSize || 0
      }
      // Measure FPS (simplified)
      let fps = 60
      if ('requestAnimationFrame' in window) {
    let lastTime = performance.now()
        let frameCount = 0
        const measureFPS = () => {
          const currentTime = performance.now()
          frameCount++
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
            frameCount = 0
            lastTime = currentTime
  }
          if (isMonitoring) {
    requestAnimationFrame(measureFPS)
  }
        }
        requestAnimationFrame(measureFPS)
      }
      const newMetrics: PerformanceMetrics = {,
        loadTime,
        renderTime,
        memoryUsage,
        fps
      }
      setMetrics(newMetrics)
      onMetricsUpdate?.(newMetrics)
      // Check for performance alerts
      checkPerformanceAlerts(newMetrics)
    }
    if (isMonitoring) {
    updateMetrics()
      const interval = setInterval(updateMetrics, 1000)
      return () => clearInterval(interval)
  }
  }, [isMonitoring, onMetricsUpdate])
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [],
    if (currentMetrics.loadTime > 3000) {
      newAlerts.push('Load time is above 3 seconds')}if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {// 50MB;
      newAlerts.push('Memory usage is high')}if (currentMetrics.fps < 30) {newAlerts.push('FPS is below 30')}setAlerts(newAlerts);
  }
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];];];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400'}return (<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">)</div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Performance Dashboard;
  </
        <button;
          onClick={toggleMonitoring}className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isMonitoring;
              ? 'bg-red-600 text-white hover: bg-red-700',
              : 'bg-green-600 text-white hover: bg-green-700',}`}
        >{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'</button>} </button>
      </div>
    if (bytes === 0) return '0 Bytes'
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  const getPerformanceColor = (value: number, thresholds: { good: number, warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.warning) return 'text-yellow-400'
    return 'text-red-400'
  }
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      </div><div className="flex items-center justify-between mb-6">
        </div><h3 className="text-xl font-semibold text-white flex items-center gap-2">
          </h3><Activity className="w-5 h-5" />
          Performance Dashboard
  
        <$2 />
          onClick={toggleMonitoring}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isMonitoring
              ? 'bg-red-600 text-white hover: bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
      {alerts.length > 0 && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          </div><div className="flex items-center gap-2 mb-2">
            </div><AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="text-red-400 font-semibold">Performance Alerts</h4>
          </div>
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
            ))}
      )}
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          </div><div className="flex items-center gap-2 mb-2">
            </div><Cpu className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm">Render Time</span>
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          </div><div className="flex items-center gap-2 mb-2">
            </div><MemoryStick className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">Memory Usage</span>
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          </div><div className="flex items-center gap-2 mb-2">
            </div><TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm">FPS</span>
          </div>
  </div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>
</h4></ul></li>