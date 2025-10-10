'use client';
;
;
;
import React, { useState, useEffect } from 'react'
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle  } from 'lucide-react'
interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  fps: number
  [key: string]: number
}
interface PerformanceProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
}
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [alerts, setAlerts] = useState<string[]>([])
  useEffect(() => {
    const updateMetrics;

export default PerformanceDashboard
  </div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>