<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

;

<<<<<<< HEAD
=======
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Activity;
  AlertTriangle;
  CheckCircle;
  X;
  RefreshCw;
  BarChart3;
  Gauge;
  } from 'lucide-react';
interface PerformanceMetrics  {fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  },networkInfo?: {effectiveType: string;
    downlink: number;
    rtt: number;
  }
}interface PerformanceRecommendation  {id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  solution: string;

  recs.push ({
}return recs;
}, []);
//Wait for page to be fully loaded if (document.readyState !== 'complete') {
  await new Promise (resolve => {
}//Wait a bit more for any async operations await new Promise (resolve => setTimeout (resolve, 1000) );
if (metrics.fcp > 2000) score -= 20;
  category: 'performance' | 'accessibility' | 'seo' | 'user-experience';
}const EnhancedPerformanceMonitor: React.FC;
//FCP recommendations if (metrics.fcp > 2000) {recs.push ({}return recs;
}, [])//Wait for page to be fully loaded if (document.readyState !== 'complete') {await new Promise (resolve => {}//Wait a bit more for any async operations await new Promise (resolve => setTimeout (resolve, 1000) )if (metrics.fcp > 2000) score -= 20;
if (metrics.lcp > 2500) score -= 25;
if (metrics.cls > 0.1) score -= 15;
if (metrics.ttfb > 600) score -= 20;
<<<<<<< HEAD
if (!performanceData) {}> <div className="animate-pulse" > <div className="h-4 bg-gray-700 rounded w-1/3 mb-4" ></div> <div className="space-y-3" > <div className="h-3 bg-gray-700 rounded" ></div> <div className="h-3 bg-gray-700 rounded w-5/6" ></div> <div className="h-3 bg-gray-700 rounded w-4/6" ></div> </div> </div> </div>)//FCP recommendations if (metrics && metrics.fcp > 2000) {recs && recs.push ({}return recs;
}, [])//Wait for page to be fully loaded if (document && document.readyState !== 'complete') {await new Promise (resolve => {}//Wait a bit more for any async operations await new Promise (resolve => setTimeout (resolve, 1000) )if (metrics && metrics.fcp > 2000) score -= 20;
if (metrics && metrics.lcp > 2500) score -= 25;
if (metrics && metrics.cls > 0 && 0.1) score -= 15;
if (metrics && metrics.ttfb > 600) score -= 20;
if (!performanceData) {}> <div className="animate-pulse" > <div className="h-4 bg-gray-700 rounded w-1/3 mb-4" ></div> <div className="space-y-3" > <div className="h-3 bg-gray-700 rounded" ></div> <div className="h-3 bg-gray-700 rounded w-5/6" ></div> <div className="h-3 bg-gray-700 rounded w-4/6" ></div> </div> </div> </div>)}
}> </p> </div> </div> <div className="flex items-center space-x-2" > <button > <BarChart3 className="w-4 h-4" /> </button> <button > <RefreshCwclassName= {`w-4 h-4 $ {//FCP recommendations // Check condition;
if ( {) {$2;
}
//FCP recommendations if (metrics.fcp > 2000) {//FCP recommendations if (metrics.fcp > 2000) {recs.push ({}return recs;
}, [])//Wait for page to be fully loaded // Check condition;
if ( {) {$2;
}
  await new Promise (resolve => {}//Wait a bit more for any async operations await new Promise (resolve => set_timeout (resolve, 1000) )// Check condition;
if (score -= 20) {$2;
}
// Check condition;
if (score -= 25) {$2;
}
// Check condition;
if (score -= 15) {$2;
}
// Check condition;
if (score -= 20) {$2;
}
// Check condition;
if ( {) {$2;
}
}> <div className="animate-pulse" > <div className="h - 4 bg - gray - 700 rounded w-1/3 mb-4" ></div> <div className="space-y-3" > <div className="h - 3 bg-gray-700 rounded" ></div> <div className="h - 3 bg - gray-700 rounded w-5/6" ></div> <div className="h - 3 bg - gray-700 rounded w-4/6" ></div> </div> </div> </div>)}
}> </p> </div> </div> <div className="flex items-center space-x-2" > <button > <BarChart3 className="w-4 h-4" /> </button> <button > <RefreshCw className= {`w - 4 h - 4 $ {is_loading ? 'animate - spin' : '';
}`;
}/> </button> <button > <Settings className="w-4 h-4" /> </button> </div> </div> </div> performance_data.overall_score >= 70 ? 'Good': 'Needs Improvement';
}</p> </div> <span className= {`font - mono $ {metrics.fcp > 2000 ? 'text - red - 400': 'text - green - 400';
}`;
}> {isLoading ? 'animate-spin' : '';
}`;
}/> </button> <button > <Settings className="w-4 h-4" /> </button> </div> </div> </div> performanceData.overallScore >= 70 ? 'Good': 'Needs Improvement';
}</p> </div> <span className= {`font-mono $ {metrics.fcp > 2000 ? 'text-red-400': 'text-green-400';
}`;
}> {metrics.fcp.toFixed (0)}ms </span> </div> </span> </div> </div> </div>)}</span> </div> <div className="w-full bg-gray-700 rounded-full h-2" > <div width: `$ {(metrics.memoryUsage.usedJSHeapSize / metrics.memoryUsage.totalJSHeapSize) * 100;
}%`;
}/> </div> </div> </div>)}</span> </div> </div> </div>)}rec.priority === 'high'? 'bg-red-500/20 text-red-400': rec.priority === 'medium'? 'bg-yellow-500/20 text-yellow-400': 'bg-green-500/20 text-green-400';
}`;
}> {rec.priority;
}</span> </div> </div>) )}</div> </div>)}) : (<BarChart3 className="w-4 h-4" />)}<span> {isMonitoring ? 'Measuring...': 'Measure Performance';

//FCP recommendations // Check condition
if ( {) {
  $2
}
=======
<<<<<<< HEAD
if (!performanceData) {}> <div className = \"animate-pulse\"  /> <div className=\"h-4 bg-gray-700 rounded w-1/3 mb-4\"  /></div> <div className=\"space-y-3\"  /> <div className=\"h-3 bg-gray-700 rounded\"  /></div> <div className=\"h-3 bg-gray-700 rounded w-5/6\"  /></div> <div className=\"h-3 bg-gray-700 rounded w-4/6\"  /></div> </div> </div> </div>)//FCP recommendations if (metrics && metrics.fcp > 2000) {recs && recs.push ({;}
  return recs;}
}, [])//Wait for page to be fully loaded if (document && document.readyState !== 'complete') {await new Promise (resolve => {}//Wait a bit more for any async operations await new Promise (resolve => setTimeout (resolve, 1000) )if (metrics && metrics.fcp > 2000) score -= 20;
if (metrics && metrics.lcp > 2500) score -= 25;
if (metrics && metrics.cls > 0 && 0.1) score -= 15;
if (metrics && metrics.ttfb > 600) score -= 20;"
if (!performanceData) {}> <div className=\"animate-pulse\"  /> <div className=\"h-4 bg-gray-700 rounded w-1/3 mb-4\"  /></div> <div className=\"space-y-3\"  /> <div className=\"h-3 bg-gray-700 rounded\"  /></div> <div className=\"h-3 bg-gray-700 rounded w-5/6\"  /></div> <div className=\"h-3 bg-gray-700 rounded w-4/6\"  /></div> </div> </div> </div>)}"
}> </p> </div> </div> <div className=\"flex items-center space-x-2\"  /> <button  /> <BarChart3 className=\"w-4 h-4\" /> </button> <button  /> <RefreshCwclassName= {`w-4 h-4 $ {//FCP recommendations // Check condition;}
if ( {) {$2;}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
//FCP recommendations if (metrics.fcp > 2000) {
 //FCP recommendations if (metrics.fcp > 2000) {
  recs.push ({
}return recs;
}, []);
//Wait for page to be fully loaded // Check condition
if ( {) {
  $2
}
  await new Promise (resolve => {
<<<<<<< HEAD
}//Wait a bit more for any async operations await new Promise (resolve => set_timeout (resolve, 1000) );
// Check condition
if (score -= 20) {
  $2
}
// Check condition
if (score -= 25) {
  $2
}
// Check condition
if (score -= 15) {
  $2
}
// Check condition
if (score -= 20) {
  $2
}
// Check condition
if ( {) {
  $2
}
}> <div className="animate-pulse" > <div className="h - 4 bg - gray - 700 rounded w-1/3 mb-4" ></div> <div className="space-y-3" > <div className="h - 3 bg-gray-700 rounded" ></div> <div className="h - 3 bg - gray-700 rounded w-5/6" ></div> <div className="h - 3 bg - gray-700 rounded w-4/6" ></div> </div> </div> </div>);
}
}> </p> </div> </div> <div className="flex items-center space-x-2" > <button > <BarChart3 className="w-4 h-4" /> </button> <button > <RefreshCw className= {
  `w - 4 h - 4 $ {
  is_loading ? 'animate - spin' : '';
}`;
}/> </button> <button > <Settings className="w-4 h-4" /> </button> </div> </div> </div> performance_data.overall_score >= 70 ? 'Good': 'Needs Improvement';
}</p> </div> <span className= {
  `font - mono $ {
  metrics.fcp > 2000 ? 'text - red - 400': 'text - green - 400';
}`;
}> {
}</span> </button> </div> </div> </motion.div>)}</AnimatePresence> </>)}export default EnhancedPerformanceMonitor;
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity,
  AlertTriangle, 
  CheckCircle,
  X,
  RefreshCw,
  BarChart3,
  Gauge
} from 'lucide-react',

interface PerformanceMetrics {
  fcp: number,
  lcp: number,
  fid: number,
  cls: number,
  ttfb: number,
  domLoad: number,
  windowLoad: number,
  memoryUsage?: {
    usedJSHeapSize: number,
    totalJSHeapSize: number,
    jsHeapSizeLimit: number},
  networkInfo?: {
    effectiveType: string,
    downlink: number,
    rtt: number}
}

interface PerformanceRecommendation {
  id: string,
  title: string,
  description: string,
  priority: 'high' | 'medium' | 'low',
  impact: string,
  solution: string,
  category: 'performance' | 'accessibility' | 'seo' | 'user-experience'
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState($2);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]),
  const [isMonitoring, setIsMonitoring] = useState($2);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null),

  const generateRecommendations = $2;
    // FCP recommendations
    if (metrics.fcp > 2000) {
      recs.push({
        id: 'fcp-optimization',
        title: 'First Contentful Paint Optimization',
        description: 'FCP is above the recommended 2-second threshold',
        priority: 'high',
        impact: 'High impact on user perception of site speed',
        solution: 'Optimize critical rendering path, reduce server response time, eliminate render-blocking resources',
        category: 'performance'
      })
    }

    // LCP recommendations
    if (metrics.lcp > 2500) {
      recs.push({
        id: 'lcp-optimization',
        title: 'Largest Contentful Paint Optimization',
        description: 'LCP is above the recommended 2.5-second threshold',
        priority: 'high',
        impact: 'High impact on user experience and Core Web Vitals',
        solution: 'Optimize images, implement lazy loading, use CDN, optimize server response time',
        category: 'performance'
      })
    }

    // CLS recommendations
    if (metrics.cls > 0.1) {
      recs.push({
        id: 'cls-optimization',
        title: 'Cumulative Layout Shift Reduction',
        description: 'CLS is above the recommended 0.1 threshold',
        priority: 'medium',
        impact: 'Medium impact on user experience and visual stability',
        solution: 'Set explicit dimensions for images and videos, avoid inserting content above existing content',
        category: 'user-experience'
      })
    }

    // Memory usage recommendations
    if (metrics.memoryUsage && metrics.memoryUsage.usedJSHeapSize > 50 * 1024 * 1024) {
      recs.push({
        id: 'memory-optimization',
        title: 'Memory Usage Optimization',
        description: 'JavaScript heap usage is above 50MB',
        priority: 'medium',
        impact: 'Medium impact on long-term performance and stability',
        solution: 'Implement memory cleanup, optimize component lifecycle, use React.memo and useMemo',
        category: 'performance'
      })
    }

    // Network recommendations
    if (metrics.networkInfo && metrics.networkInfo.effectiveType = $2;
        title: 'Network Performance Optimization',
        description: 'Network connection is slow, affecting user experience',
        priority: 'high',
        impact: 'High impact on all performance metrics',
        solution: 'Implement service workers, optimize bundle size, use progressive loading',
        category: 'performance'
      })
    }

    return recs
  }, []),

  const measurePerformance = useCallback(async () => {
    try {
      setIsMonitoring($2);
      // Wait for page to be fully loaded
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          window.addEventListener('load', resolve, { once: true})
        })
      }

      // Wait a bit more for any async operations
      await new Promise(resolve => setTimeout(resolve, 1000)),

      const navigation = $2;
      const paint = performance.getEntriesByType($2);
      const fcp = $2;
      const lcp = await new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries($2);
            const lastEntry = $2;
            resolve(lastEntry.startTime)
          }),
          observer.observe($2);
          // Fallback timeout
          setTimeout(() => resolve(0), 5000)
        } else {
          resolve(0)
        }
      }),

      const metrics: PerformanceMetrics = $2;
        lcp,
        fid: 0, // Would need user interaction to measure
        cls: 0, // Would need PerformanceObserver for CLS
        ttfb: navigation.responseStart - navigation.requestStart,
        domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        windowLoad: navigation.loadEventEnd - navigation.loadEventStart,
        memoryUsage: 'memory' in performance ? (performance as any).memory : undefined,
        networkInfo: 'connection' in navigator ? (navigator as any).connection : undefined
      },

      setMetrics($2);
      setRecommendations(generateRecommendations(metrics)),
      setLastUpdate(new Date())
    } catch {
      // Performance measurement failed
    } finally {
      setIsMonitoring(false)
    }
  }, [generateRecommendations]),

  const getPerformanceScore = $2;
    if (metrics.fcp > 2000) score -= 20,
    if (metrics.lcp > 2500) score -= 25,
    if (metrics.cls > 0.1) score -= 15,
    if (metrics.ttfb > 600) score -= 20,
    
    return Math.max(0, score)
  },

  const getScoreColor = $2;
    if (score >= 70) return 'text-yellow-400',
    return 'text-red-400'
  },

  const getOverallScoreBg = $2;
    if (score >= 70) return 'bg-yellow-500/20',
    return 'bg-red-500/20'
  },

  if (!performanceData) {
    return (
      <div className={`p-4 bg-gray-900 rounded-lg border border-gray-700 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-700 rounded"></div>
            <div className="h-3 bg-gray-700 rounded w-5/6"></div>
            <div className="h-3 bg-gray-700 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className={`bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0}}
    >
      {/* Header */}
      <div className = $2;
export default EnhancedPerformanceMonitor,
=======
  
}//Wait a bit more for any async operations await new Promise (resolve => setTimeout (resolve, 1000) )
if (metrics.fcp > 2000) score -= 20
if (metrics.lcp > 2500) score -= 25
if (metrics.cls > 0.1) score -= 15
if (metrics.ttfb > 600) score -= 20
if (!performanceData) {
  return (<div className= {
  `p-4 bg-gray-900 rounded-lg border border-gray-700 $ {
  className 
}` 
}> <div className="animate-pulse" > <div className="h-4 bg-gray-700 rounded w-1/3 mb-4" ></div> <div className="space-y-3" > <div className="h-3 bg-gray-700 rounded" ></div> <div className="h-3 bg-gray-700 rounded w-5/6" ></div> <div className="h-3 bg-gray-700 rounded w-4/6" ></div> </div> </div> </div>) 
}return (<motion.div className= {
  `bg-gray-900 rounded-lg border border-gray-700 overflow-hidden $ {
  className 
}` 
}initial= {
  {
  opacity: 0, y: 20 
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
if (!performanceData) {
}> <div className="animate-pulse" > <div className="h-4 bg-gray-700 rounded w-1/3 mb-4" ></div> <div className="space-y-3" > <div className="h-3 bg-gray-700 rounded" ></div> <div className="h-3 bg-gray-700 rounded w-5/6" ></div> <div className="h-3 bg-gray-700 rounded w-4/6" ></div> </div> </div> </div>)
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
}
}> </p> </div> </div> <div className="flex items-center space-x-2" > <button > <BarChart3 className="w-4 h-4" /> </button> <button > <RefreshCw className= {
  `w-4 h-4 $ {
  isLoading ? 'animate-spin' : ''
}`
}/> </button> <button > <Settings className="w-4 h-4" /> </button> </div> </div> </div> performanceData.overallScore >= 70 ? 'Good': 'Needs Improvement'
}</p> </div> <span className= {
  `font-mono $ {
  metrics.fcp > 2000 ? 'text-red-400': 'text-green-400'
}`
}> {
  metrics.fcp.toFixed (0)
}ms </span> </div> </span> </div> </div> </div>)
}</span> </div> <div className="w-full bg-gray-700 rounded-full h-2" > <div width: `$ {
  (metrics.memoryUsage.usedJSHeapSize / metrics.memoryUsage.totalJSHeapSize) * 100
}%`
}/> </div> </div> </div>)
}</span> </div> </div> </div>)
}rec.priority === 'high'? 'bg-red-500/20 text-red-400': rec.priority === 'medium'? 'bg-yellow-500/20 text-yellow-400': 'bg-green-500/20 text-green-400'
}`
}> {
  rec.priority
}</span> </div> </div>) )
<<<<<<< HEAD
}</div> </div>)"
}) : (<BarChart3 className=\"w-4 h-4\" />)
}<span /> {}
  isMonitoring ? 'Measuring...': 'Measure Performance' }
}</span> </button> </div> </div> </motion.div>) 
}</AnimatePresence> </>) 
<<<<<<< HEAD
};

export default EnhancedPerformanceMonitor;

"
=======
}
export default EnhancedPerformanceMonitor
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
}</div> </div>)
}) : (<BarChart3 className="w-4 h-4" />)
}<span> {
  isMonitoring ? 'Measuring...': 'Measure Performance'
}</span> </button> </div> </div> </motion.div>)
}</AnimatePresence> </>)
}
export default EnhancedPerformanceMonitor;
export default EnhancedPerformanceMonitor;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
