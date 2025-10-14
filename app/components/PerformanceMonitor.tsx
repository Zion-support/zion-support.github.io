const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null;
  });

>>>>>>> origin/main;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      // Get Core Web Vitals;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {''
            if (entry.name === 'first-contentful-paint') {''
              setMetrics(prev => ({
                ...prev,
                fcp: entry.startTime;
              }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {''
            setMetrics(prev => ({
              ...prev,
              lcp: entry.startTime;
            }));
          } else if (entry.entryType === 'first-input') {''
            setMetrics(prev => ({
              ...prev,
              fid: (entry as any).processingStart - entry.startTime;
            }));
          } else if (entry.entryType === 'layout-shift') {''
            setMetrics(prev => ({
              ...prev,
              cls: (prev?.cls || 0) + (entry as any).value;
            }));
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });'

      // Get TTFB;
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;'
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart;
        }));
      }

      // Measure Core Web Vitals;
      if ('PerformanceObserver' in window) {''
        // First Contentful Paint;
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries.find(entry => entry.name === 'first-contentful-paint');'
          if (fcp) {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }));
          }
        });
    ttfb: null,
    loadTime: null;
  }
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    // Only run in browser;
    if (typeof window === 'undefined') return";"'"
    // Get performance metrics;
    const getPerformanceMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming";"'"
      const paintEntries = performance.getEntriesByType('paint')";"'"
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')";"'"
      const lcp = performance.getEntriesByType('largest-contentful-paint')";"'"
      setMetrics({
        cls: 0, // Would need to be calculated with observer;
        inp: 0, // Would need to be calculated with observer;
        fcp: fcp ? fcp.startTime : null,
        lcp: lcp.length > 0 ? lcp[lcp.length - 1].startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
        loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : null;
      }
    // Wait for page load;
  return (
<>    <div className="fixed bottom-4 right-4 z-50">"
      <button></button>
        Performance;
      </button>
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">"
          <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>"
          <div className="space-y-2 text-xs">"
            <div className="flex justify-between">"
              <span>FCP:</span>
              <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}></span>
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}"`"`'"``'"`
              </span>
            </>
            <div className="flex justify-between">"
              <span>LCP:</span>
              <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}></span>
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}"`"`'"``'"`
              </span>
            </div>
            <div className="flex justify-between">"
              <span>TTFB:</span>
              <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}></span>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}"`"`'"``'"`
              </span>
            </div>
            <div className="flex justify-between">"
              <span>Load Time:</span>
              <span className={getScoreColor(metrics.loadTime, { good: 3000, poor: 5000 })}></span>
                {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}"`"`'"``'"`
              </span>
            </div>
          </div>
        </div>
    }
    // Measure after initial load;
    const timer = setTimeout(measurePerformance, 1000)
    return () => clearTimeout(timer)
  }, [])
  // Toggle visibility with keyboard shortcut;
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {}
    };

    measurePerformance();

    // Set up keyboard shortcut to toggle visibility;
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {''
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);'
    return () => window.removeEventListener('keydown', handleKeyPress);'
  return (
<>    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"></div>
      <div className="flex items-center justify-between mb-4"></div>
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button></button>
          ×
        </button>
      </div>
import React from "react";"
const PerformanceMonitor: React.FC = () => { return null; }
export default PerformanceMonitor;
      )}
    </div>
export default PerformanceMonitor;
      )}
    </div>
};

export default PerformanceMonitor;
