
interface PerformanceMetrics {
  loadTime: number;

  renderTime: number;

  const [isOptimized, setIsOptimized] = useState(false);
  useEffect(() => {""

    const measurePerformance = () => {""
      if (typeof window !== 'undefined' && 'performance' in window) {""
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;""
        const paint = performance.getEntriesByType('paint');
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;""
        const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        // Memory usage (if available)

        const memoryUsage = (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0;
        // Network latency estimation

        const networkLatency = navigation.responseEnd - navigation.requestStart;
        setMetrics({


        // Check if performance is optimized

        document.head.appendChild(link)});
      // Enable service worker for caching'
      if ('serviceWorker' in navigator) {'
        navigator.serviceWorker.register('/sw.js').catch(console.error)];

      criticalResources.forEach(resource => {&apos}
        const link = document.createElement(&apos;link&apos;);
        link.rel = &apos;preload';
        link.href = resource;
        link.as = resource.endsWith(&apos;.woff2&apos;) ? &apos;font&apos; : &apos;image';
        if (resource.endsWith(&apos;.woff2&apos;)) {
          link.crossOrigin = &apos;anonymous'}
        document.head.appendChild(link)})}

      setIsOptimized(true)}


      setIsOptimized(true)}

  };

          <span className={metrics.loadTime < 3000 ? 'text-green-600' : 'text-red-600'}" >

          </span>

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

            {metrics.renderTime.toFixed(0)}ms
          </span>
        </div>""
        <div className="flex justify-between">""
          <span className="text-gray-600">Memory: </span>""
          <span className={metrics.memoryUsage < 50 ? 'text-green-600' : 'text-red-600'}" >"
            {metrics.memoryUsage.toFixed(1)}MB
          </span>


            {metrics.networkLatency.toFixed(0)}ms

          </span>

        </div>
      </div>




          Optimize Performance


        </button>
      )}
    </div>



