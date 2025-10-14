import React, { ReactNode } from 'react'
interface PerformanceMonitorProps {
  children: ReactNode
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  return <>{children}</>
}
export default PerformanceMonitor;