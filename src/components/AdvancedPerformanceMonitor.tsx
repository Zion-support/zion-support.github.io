import React from "react";"

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memory: number | null
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className = '', children }) => {''
  return (
<>    <div className={`advancedperformancemonitor ${className}`}></div>```
      {children}
    </div>
    </>
  )};
};

export default AdvancedPerformanceMonitor;
