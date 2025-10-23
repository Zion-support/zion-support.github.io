
constAdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProp s> = ({enableAdvancedCaching= true,
  enableImageOptimization= true,
  enableLazyLoading= true,
  enablePreloading= true,
  enableCodeSplitting= true,
  enableResourceHints= true,
  enableServiceWorker= true,
  enableCriticalCSS= true,
  enableWebVitals= true}) => {const [performanceMetricssetPerformanceMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,

  // Web Vitals monitoring
  useEffect(() => {if (enableWebVitals && type of windo w !== 'undefined') {
      constmeasureWebVitals= () => {
  
        // First Contentful Paint
        new PerformanceObserver((list) => {
  
          for (const entry of list.getEntries()) {

      measureWebVitals()
    }
  }, [enableWebVitals])


    // Service Worker for advanced caching
    if ('serviceWorker' in navigator && enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
      entries.forEach((entry) => {
  
        if (entry.isIntersecting) {
          }
        }

    images.forEach((img) => imageObserver.observe(img))
  }, [])


  }, [])


    // Report to analytics
    if ('gtag' in windo w) {
      (windo w as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(performanceMetrics.lcp),
        custom_map: {
          fcp: Math.round(performanceMetrics.fcp),
          lcp: Math.round(performanceMetrics.lcp),
          fid: Math.round(performanceMetrics.fid),
          cls: Math.round(performanceMetrics.cls * 100 0) / 1000}

    }
  }, [performanceMetrics])

};

>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
