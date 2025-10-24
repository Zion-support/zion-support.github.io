enabled?: boolean
threshold?: number
measureMemoryUsage?: boolean
}
}
    }
  }, [])
const init = useCallback(() => {
if(options.enabled !== false) {
setIsMonitoringFPS(true)
      measureMemoryUsage()
    ,}
  }, [options.enabled, measureMemoryUsage])
useEffect(() => {
if (!isMonitoringFPS) return
const countFrames = (
return
frameCountRef.current++)
const currentTime = performance.now()
      if (currentTime - lastTimeRef.current >= 1000) {
const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current))
setMetrics(prev = > ({)
          ...prev,)
fps,)
        ) => {
$3
}))
frameCountRef.current = 0
lastTimeRef.current = currentTime}
      requestAnimationFrame(countFrames    )
}
    requestAnimationFrame(countFrames)}, [isMonitoringFPS])
useEffect(() => {
if(options.measureMemoryUsage) {
measureMemoryUsage(    )
}
  }, [measureMemoryUsage, options.measureMemoryUsage])
return{
metrics,
setMetrics,
isMonitoringFPS,
setIsMonitoringFPS,
measureMemoryUsage,
init}
  }