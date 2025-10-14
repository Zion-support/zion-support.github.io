import React from "react";"

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '', children }) => {''
  return (
<>    <div className={`performancedashboard ${className}`}></div>```
      {children}
    </div>
    </>
  )};
};

export default PerformanceDashboard;
