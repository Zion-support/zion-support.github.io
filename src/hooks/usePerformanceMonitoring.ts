    const loadTime = navigation.loadEventEnd - navigation.loadEventStart
const renderTime = performance.now()
const memoryUsage = (performance, as, any).memory?.usedJSHeapSize || 0
    // Simple FPS calculation
let fps = 60
    let lastTime = performance.now()
    const calculateFPS = ()
      const currentTime = performance.now()
      fps = 1000 / (currentTime - lastTime)
      lastTime = currentTime) => {
$3
}
calculateFPS()
setMetrics({
loadTime,
renderTime,)
memoryUsage,)
fps)
    })}, [])
const startMonitoring = useCallback(() => {
    setIsMonitoring(true)
    measurePerformance()
  }, [measurePerformance])
const stopMonitoring = useCallback(() => {
    setIsMonitoring(false)}, [])
useEffect(() => {
if(isMonitoring) {
const interval = setInterval(measurePerformance, 1000)
      return () => clearInterval(interval    )
}
  }, [isMonitoring, measurePerformance])
return{
metrics,
isMonitoring,
startMonitoring,
stopMonitoring}