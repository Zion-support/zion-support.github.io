'use client'

import { React  useEffect useState  from 'react'
import  getCLS getFID getFCP getLCP getTTFB     } from 'web-vitals'

interface PerformanceMetrics fcp number  null lcp number  null fid number  null cls number  null ttfb number  null const PerformanceMonitor ReactFC =  => 
  const metrics setMetrics="useState"<PerformanceMetrics>
    fcp null lcp null fid null cls null ttfb null useEffect => 
    // Monitor performance metrics const monitorPerformance =  => 
      if typeof window == 'undefined'  'performance' in window // Monitor page load time windowaddEventListener'load'  => 
          const navigation = performancegetEntriesByType'navigation'0 as PerformanceNavigationTiming if processenvNODE_ENV === 'development' 
            // eslint-disable-next-line no-console consolelog'Page load time' navigationloadEventEnd - navigationloadEventStart // Web Vitals monitoring getCLSmetric => 
      setMetricsprev =>  prev cls metricvalue getFIDmetric => 
      setMetricsprev =>  prev fid metricvalue getFCPmetric => 
      setMetricsprev =>  prev fcp metricvalue getLCPmetric => 
      setMetricsprev =>  prev lcp metricvalue getTTFBmetric => 
      setMetricsprev =>  prev ttfb metricvalue monitorPerformance return  => 
      // Cleanup if needed return (<><div className="performance-monitor">
      processenvNODE_ENV="==" 'development'  
        </div>
        <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs">
          </div>
        <div>FCP metricsfcptoFixed2ms</div></div>
        <div>LCP metricslcptoFixed2ms</div></div></>
          <><div>FID metricsfidtoFixed2ms</div></div>
        <div>CLS metricsclstoFixed3</div></div></>
          <div>TTFB metricsttfbtoFixed2ms</div></div>
        </div>
      
    </div>

export default PerformanceMonitor }