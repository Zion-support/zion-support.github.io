'use client';
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react';
interface PerformanceMetrics {
    loadTime: number;
  renderTime: number
  memoryUsage: number
  fps: number,
  [key: string]: number
  }
interface PerformanceProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  }
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>()
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
  useEffect(() => {
    const updateMetrics = () => {;
      const navigation = performance.getEntriesByType();
      )[0] as PerformanceNavigationTiming;
      const loadTime = const loadTime = navigation;
        ? navigation.loadEventEnd - navigation.fetchStart;
        : 0;
      // Measure render time
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      // Measure FPS (simplified)
      let fps = 60;
      if ('requestAnimationFrame' in window) {
    let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = () => {;
          const currentTime = performance.now();
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime
  }
          if (isMonitoring) {
    requestAnimationFrame(measureFPS)
  }
        }
        requestAnimationFrame(measureFPS);
      }
      const newMetrics: PerformanceMetrics = {
        loadTime,
        renderTime,
        memoryUsage,
        fps
      }
      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
      // Check for performance alerts
      checkPerformanceAlerts(newMetrics);
    }
    if (isMonitoring) {
    updateMetrics();
      const interval = setInterval(updateMetrics, 1000);
      return () => clearInterval(interval)
  }
  }, [isMonitoring, onMetricsUpdate]);
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {;
    const newAlerts: string[] = [],
    if (currentMetrics.loadTime > 3000) {
      newAlerts.push('Load time is above 3 seconds')
  }
    if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {
    // 50MB
      newAlerts.push('Memory usage is high')
  }
    if (currentMetrics.fps < 30) {
    newAlerts.push('FPS is below 30')
  }
    setAlerts(newAlerts);
  }
  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
  };
  const formatBytes = (bytes: number) => {;
    if (bytes === 0) return '0 Bytes';
    const k = const k = 1024,;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  const getPerformanceColor = (value: number, thresholds: { good: number, warning: number }) => {;
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400'
  }
  return() {alerts.map((alert, index) => ()
            ))}
          </ul>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" /></div>
        <div className="bg-white/5 rounded-lg p-4" /></div>
          <div className="flex items-center gap-2 mb-2" /></div>
            <Zap className="w-4 h-4 text-blue-400" / /></Zap>
            <span className="text-gray-300 text-sm">Load Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`} /></div>
            {metrics.loadTime.toFixed(0)}ms
  </
        </div>
        <div className="bg-white/5 rounded-lg p-4" /></div>
          <div className="flex items-center gap-2 mb-2" /></div>
            <Cpu className="w-4 h-4 text-green-400" / /></Cpu>
            <span className="text-gray-300 text-sm">Render Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`} /></div>
            {metrics.renderTime.toFixed(2)}ms
  </
        </div>
        <div className="bg-white/5 rounded-lg p-4" /></div>
          <div className="flex items-center gap-2 mb-2" /></div>
            <MemoryStick className="w-4 h-4 text-purple-400" / /></MemoryStick>
            <span className="text-gray-300 text-sm">Memory Usage</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`} /></div>
            {formatBytes(metrics.memoryUsage)}
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-4" /></div>
          <div className="flex items-center gap-2 mb-2" /></div>
            <TrendingUp className="w-4 h-4 text-orange-400" / /></TrendingUp>
            <span className="text-gray-300 text-sm">FPS</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`} /></div>
            {metrics.fps}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center" /></div>
        <p className="text-gray-400 text-sm" /></p>
          {isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}
        </p>
      </div>
    </div>
  );
};

export default PerformanceDashboard
  </div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>
