<<<<<<< HEAD
'use client';
import React, {useState, useEffect}from 'react';
import {Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle}}from 'lucide-react';
interface PerformanceMetrics {loadTime: number;,}
  renderTime: number;,
  memoryUsage: number;,
  fps: number,
  [key: string]: number;,}interface PerformanceProps {onMetricsUpdate?: (metrics: PerformanceMetrics) => void;,}}const PerformanceDashboard: React.FC<PerformanceProps> = ({onMetricsUpdate ,}) => {const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0;,})
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
<<<<<<< HEAD
  useEffect(() => {const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation;
=======
=======
'use client'
import React, { useState, useEffect } from 'react'
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react'
interface PerformanceMetrics {
    loadTime: number
  renderTime: number
  memoryUsage: number
  fps: number,
  [key: string]: number
  }
interface PerformanceProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  }
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState</PerformanceProps><PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [alerts, setAlerts] = useState</PerformanceMetrics><string[]>([])
>>>>>>> origin/main
  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType()
      )[0] as PerformanceNavigationTiming
      const loadTime = navigation
<<<<<<< HEAD
>>>>>>> origin/main
        ? navigation.loadEventEnd - navigation.fetchStart;
        : 0;
      // Measure render time;
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage;
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as {memory?: { usedJSHeapSize: number ,}}}).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      // Measure FPS (simplified)
      let fps = 60;
      if ('requestAnimationFrame' in window) {let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = () => {;
          const currentTime = performance.now();
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;}if (isMonitoring) {requestAnimationFrame(measureFPS)}}
        requestAnimationFrame(measureFPS);
=======
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [alerts, setAlerts] = useState<string[]>([])
  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0
      // Measure render time
      const renderStart = performance.now()
      const renderTime = performance.now() - renderStart
      // Measure memory usage
      let memoryUsage = 0
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
        memoryUsage = memory?.usedJSHeapSize || 0
      }
      // Measure FPS (simplified)
      let fps = 60
      if ('requestAnimationFrame' in window) {
    let lastTime = performance.now()
        let frameCount = 0
        const measureFPS = () => {
          const currentTime = performance.now()
          frameCount++
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
            frameCount = 0
            lastTime = currentTime
  }
          if (isMonitoring) {
    requestAnimationFrame(measureFPS)
  }
        }
        requestAnimationFrame(measureFPS)
>>>>>>> origin/main
      }
      const newMetrics: PerformanceMetrics = {,
        loadTime,
        renderTime,
        memoryUsage,
<<<<<<< HEAD
        fps,
      });
    };

    updateMetrics();

    // Update metrics every 5 secondsreturn () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true</div>
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Show Performance
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false</div>
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
=======
<<<<<<< HEAD
        fps;}setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
      // Check for performance alerts;
      checkPerformanceAlerts(newMetrics);
    }
    if (isMonitoring) {updateMetrics();
      const interval = setInterval(updateMetrics, 1000);
<<<<<<< HEAD
      return () => clearInterval(interval)}}, [isMonitoring, onMetricsUpdate]);
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {,
=======
      return () => clearInterval(interval)
  }
  }, [isMonitoring, onMetricsUpdate]);
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {;
>>>>>>> origin/main
=======
        fps
      }
      setMetrics(newMetrics)
      onMetricsUpdate?.(newMetrics)
      // Check for performance alerts
      checkPerformanceAlerts(newMetrics)
    }
    if (isMonitoring) {
    updateMetrics()
      const interval = setInterval(updateMetrics, 1000)
      return () => clearInterval(interval)
  }
  }, [isMonitoring, onMetricsUpdate])
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {
>>>>>>> origin/main
    const newAlerts: string[] = [],
    if (currentMetrics.loadTime > 3000) {
      newAlerts.push('Load time is above 3 seconds')}if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {// 50MB;
      newAlerts.push('Memory usage is high')}if (currentMetrics.fps < 30) {newAlerts.push('FPS is below 30')}setAlerts(newAlerts);
  }
<<<<<<< HEAD
  const toggleMonitoring = () => {setIsMonitoring(!isMonitoring)}const formatBytes = (bytes: number) => {,
    if (bytes === 0) return '0 Bytes'
=======
    if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {
    // 50MB
      newAlerts.push('Memory usage is high')
  }
    if (currentMetrics.fps < 30) {
    newAlerts.push('FPS is below 30')
  }
    setAlerts(newAlerts)
  }
  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
  }
  const formatBytes = (bytes: number) => {
<<<<<<< HEAD
    if (bytes === 0) return '0 Bytes';
>>>>>>> origin/main
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];];];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
<<<<<<< HEAD
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}const getPerformanceColor = (value: number, thresholds: {good: number, warning: number ,}) => {if (value <= thresholds.good) return 'text-green-400';
=======
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  const getPerformanceColor = (value: number, thresholds: { good: number, warning: number }) => {;
    if (value <= thresholds.good) return 'text-green-400';
>>>>>>> origin/main
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400'}return(<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">)</div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Performance Dashboard;
  </
        <button;
          onClick={toggleMonitoring}className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isMonitoring;
              ? 'bg-red-600 text-white hover: bg-red-700',
              : 'bg-green-600 text-white hover: bg-green-700',}`}
        >{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'</button>} </button>
>>>>>>> origin/main
      </div>
=======
    if (bytes === 0) return '0 Bytes'
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  const getPerformanceColor = (value: number, thresholds: { good: number, warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.warning) return 'text-yellow-400'
    return 'text-red-400'
  }
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      </div><div className="flex items-center justify-between mb-6">
        </div><h3 className="text-xl font-semibold text-white flex items-center gap-2">
          </h3><Activity className="w-5 h-5" />
          Performance Dashboard
  
        <$2 />
          onClick={toggleMonitoring}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isMonitoring
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
>>>>>>> origin/main
      {alerts.length > 0 && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          </div><div className="flex items-center gap-2 mb-2">
            </div><AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="text-red-400 font-semibold">Performance Alerts</h4>
          </div>
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
<<<<<<< HEAD
              <li key={index}className="text-red-300 text-sm">• {alert}</li>
=======
              </ul><li key={index} className="text-red-300 text-sm">• {alert}</li>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="text-red-400 font-semibold">Performance Alerts
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
              <li key={index} className="text-red-300 text-sm">• {alert}
>>>>>>> origin/main
            ))}
      )}
<<<<<<< HEAD
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">,</div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 ,)})}`}>{metrics.loadTime.toFixed(0)</div>}ms;
  </
=======
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        </div><div className="bg-white/5 rounded-lg p-4">
          </div><div className="flex items-center gap-2 mb-2">
            </div><Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`} /></div>
            {metrics.loadTime.toFixed(0)}ms
  
>>>>>>> origin/main
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          </div><div className="flex items-center gap-2 mb-2">
            </div><Cpu className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm">Render Time</span>
          </div>
<<<<<<< HEAD
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 ,)})}`}>{metrics.renderTime.toFixed(2)</div>}ms;
  </
=======
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`} /></div>
            {metrics.renderTime.toFixed(2)}ms
  
>>>>>>> origin/main
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          </div><div className="flex items-center gap-2 mb-2">
            </div><MemoryStick className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">Memory Usage</span>
          </div>
<<<<<<< HEAD
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 ,)})}`}>{formatBytes(metrics.memoryUsage)</div>} </div>
=======
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`} /></div>
            {formatBytes(metrics.memoryUsage)}
          </div>
>>>>>>> origin/main
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          </div><div className="flex items-center gap-2 mb-2">
            </div><TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm">FPS</span>
          </div>
<<<<<<< HEAD
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 ,)})}`}>{metrics.fps</div>} </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">{isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'</p>} </p>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
=======
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`} /></div>
            {metrics.fps}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        </div><p className="text-gray-400 text-sm">
      <div className="mt-6 text-center" /></div>
        <p className="text-gray-400 text-sm" /></p>
          {isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}
        </p>
      </div>
    </div>
  )
}
export default PerformanceDashboard
>>>>>>> origin/main
  </div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>
</h4></ul></li>