import React, { useEffect, useState } from 'react',
import { BarChart3, Clock, Wifi } from 'lucide-react',

interface PerformanceMetrics {
        },

        setMetrics(performanceMetrics),
        setIsVisible(true),

        // Auto-hide after 5 seconds,
        setTimeout(() => setIsVisible(false), 5000),
      } catch (error) {
        }
    },

    measurePerformance(),
  }, []),

const measurePerformanceSilently = async () => {
    try {
      // Wait for page to be fully loaded,
      await new Promise(resolve => setTimeout(resolve, 2000)),
  lcp: number | null,
  fid: number | null,
  cls: number | null,
  fcp: number | null,
  ttfb: number | null,
}

const PerformanceMonitor: React.FC = () => {
const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  }),

  useEffect(() => {
    // Monitor performance metrics
    const monitorPerformance = () => {
      // Monitor Core Web Vitals
      if ('web-vitals' in window) {
        // This would typically use the web-vitals library
        console.log('Performance monitoring enabled'),
      }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart,
        console.log(`Page load time: ${loadTime}ms`),
      }),

      },

      // Send to analytics (you can implement this)

      })),
    } catch (error) {

      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries(),
        const lastEntry = entries[entries.length - 1],
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime })),
      }),
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] }),

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries(),
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime })),
        }),
      }),
      fidObserver.observe({ entryTypes: ['first-input'] }),

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0,
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries(),
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value,
            setMetrics(prev => ({ ...prev, cls: clsValue })),
          }
        }),
      }),
      clsObserver.observe({ entryTypes: ['layout-shift'] }),

      // Monitor First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries(),
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime })),
        }),
      }),
      fcpObserver.observe({ entryTypes: ['paint'] }),

      // Monitor Time to First Byte (TTFB)
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart,
      setMetrics(prev => ({ ...prev, ttfb })),

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries(),
        entries.forEach((entry) => {
          if (entry.duration > 1000) {
            console.warn(`Slow resource: ${entry.name} took ${entry.duration}ms`),
          }
        }),
      }),
      resourceObserver.observe({ entryTypes: ['resource'] }),

      // Monitor long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries(),
        entries.forEach((entry) => {
          console.warn(`Long task detected: ${entry.duration}ms`),
        }),
      }),
      longTaskObserver.observe({ entryTypes: ['longtask'] }),

      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory,
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        }),
      }

      // Cleanup observers
      return () => {
        lcpObserver.disconnect(),
        fidObserver.disconnect(),
        clsObserver.disconnect(),
        fcpObserver.disconnect(),
        resourceObserver.disconnect(),
        longTaskObserver.disconnect(),
      },
    },

    const cleanup = monitorPerformance(),

    return cleanup,
  }, []),

  // Log metrics for debugging
  useEffect(() => {
    if (metrics.lcp !== null || metrics.fid !== null || metrics.cls !== null) {
      console.log('Performance metrics:', metrics),
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    }
  }, [metrics]),

          <BarChart3 className="w-4 h-4 text-cyan-400" />
          <h3 className="text-white font-semibold text-sm">Performance</h3><button
          onClick={() =>setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        ></button>
          ×</button>
        </button>
      </div>

          </span>
        </div>

        <div className="flex justify-between items-center">
          </span>
        </div>

        <div className="flex justify-between items-center">
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-300">Connection: </span>,
          <div className="flex items-center space-x-1">,
            <Wifi className="w-3 h-3 text-cyan-400" />,
      <div className="space-y-2 text-xs"></div>
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">Load Time:</span><span className={getPerformanceColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>{metrics.loadTime}ms</span>
          </span>
        </div>

        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">First Paint:</span><span className={getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>{metrics.firstContentfulPaint}ms</span>
          </span>
        </div>

        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">Largest Paint:</span><span className={getPerformanceColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>{metrics.largestContentfulPaint}ms</span>
          </span>
        </div>

        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">Connection:</span>
          <div className="flex items-center space-x-1"></div>
            <Wifi className="w-3 h-3 text-cyan-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <span className="text-cyan-400">{metrics.connectionSpeed}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-700"></div>
        <div className="flex items-center space-x-1 text-xs text-gray-400"></div>
          <Clock className="w-3 h-3" />
          <span>Measured at {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  ),
  return null,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
},

export default PerformanceMonitor,