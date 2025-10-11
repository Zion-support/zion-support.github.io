'use client';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react';
interface PerformanceMetrics {
    loadTime: number;,
      renderTime: number;,
      memoryUsage: number;,
      fps: number,
  [key: string]: number;
  }
interface PerformanceProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  }
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
<<<<<<< HEAD
  const [metrics, setMetrics] = useState<PerformanceMetrics>()
=======
  const [metrics, setMetrics] = useState<PerformanceMetrics>(
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,)
    fps: 0)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  })
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
<<<<<<< HEAD
  useEffect(() => {const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation;
=======
  useEffect(() => {
    const updateMetrics = () => {;
<<<<<<< HEAD
      const navigation = const navigation = const navigation = performance.getEntriesByType();
      )[0] as PerformanceNavigationTiming;
<<<<<<< HEAD
      const loadTime = const loadTime = navigation;
=======
      const navigation = performance.getEntriesByType()
        'navigation';)
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
      const loadTime = navigation
>>>>>>> origin/main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        ? navigation.loadEventEnd - navigation.fetchStart;
        : 0;
      // Measure render time;
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage;
      let memoryUsage = 0;
      if ('memory' in performance) {
<<<<<<< HEAD
        const memory = (performance as  memory?:  usedJSHeapSize: number } }).memory;
=======
        const memory = (performance as {memory?: { usedJSHeapSize: number ,}}}).memory;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      // Measure FPS (simplified)
      let fps = 60;
      if ('requestAnimationFrame' in window) {let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = () => ;
          const currentTime = performance.now();
          frameCount++;
          if (currentTime - lastTime >= 1000) 
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
<<<<<<< HEAD
            lastTime = currentTime;
  }
          if (isMonitoring) {
    requestAnimationFrame(measureFPS)
  }
        }
=======
            lastTime = currentTime;}if (isMonitoring) {requestAnimationFrame(measureFPS)}}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        requestAnimationFrame(measureFPS);
      }
      const newMetrics: PerformanceMetrics = {,
        loadTime,
        renderTime,
        memoryUsage,
<<<<<<< HEAD
        fps;
      }
      setMetrics(newMetrics);
=======
        fps;}setMetrics(newMetrics);
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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
    const newAlerts: string[] = [],
<<<<<<< HEAD
    if (currentMetrics.loadTime > 3000) 
      newAlerts.push('Load time is above 3 seconds')
=======
    if (currentMetrics.loadTime > 3000) {
      newAlerts.push('Load time is above 3 seconds')}if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {// 50MB;
      newAlerts.push('Memory usage is high')}if (currentMetrics.fps < 30) {newAlerts.push('FPS is below 30')}setAlerts(newAlerts);
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  }
<<<<<<< HEAD
  const toggleMonitoring = () => {setIsMonitoring(!isMonitoring)}const formatBytes = (bytes: number) => {,
    if (bytes === 0) return '0 Bytes'
=======
    if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {
    // 50MB;
      newAlerts.push('Memory usage is high')
  }
    if (currentMetrics.fps < 30) {
    newAlerts.push('FPS is below 30')
  }
    setAlerts(newAlerts);
  }
  const toggleMonitoring = const toggleMonitoring = const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
  };
  const formatBytes = (bytes: number) => {;
    if (bytes === 0) return '0 Bytes';
<<<<<<< HEAD
    const k = const k = 1024,;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ', ' + sizes[i]
=======
>>>>>>> origin/main
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];];];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
<<<<<<< HEAD
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}const getPerformanceColor = (value: number, thresholds: {good: number, warning: number ,}) => {if (value <= thresholds.good) return 'text-green-400';
=======
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  }
  const getPerformanceColor = (value: number, thresholds: { good: number, warning: number }) => {;
    if (value <= thresholds.good) return 'text-green-400';
>>>>>>> origin/main
    if (value <= thresholds.warning) return 'text-yellow-400';
<<<<<<< HEAD
    return 'text-red-400'
  }
<<<<<<< HEAD
  return() {alerts.map((alert, index) => ()
=======
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      </div></div><div className="flex items-center justify-between mb-6">
        </div></div><h3 className="text-xl font-semibold text-white flex items-center gap-2">
          </h3></h3><Activity className="w-5 h-5" />
          Performance Dashboard;
  </
        <button;
          onClick={toggleMonitoring}
          className={`px-4 py-2 rounded-lg font-medium transition-colors $
            isMonitoring;
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
        </button></button></button>
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      </div>
      {alerts.length > 0 && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          </div></div><div className="flex items-center gap-2 mb-2">
            </div></div><AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="text-red-400 font-semibold">Performance Alerts</h4>
<<<<<<< HEAD
          </div>)
          <ul className="space-y-1">)
            alerts.map((alert, index) => ()
              <li key=index} className="text-red-300 text-sm">• {alert}</li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
          </div>
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
              <li key={index}className="text-red-300 text-sm">• {alert}</li>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
            ))}
          </ul>
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" /></div>
        <div className="bg-white/5 rounded-lg p-4" /></div>
          <div className="flex items-center gap-2 mb-2" /></div>
            <Zap className="w-4 h-4 text-blue-400" / /></Zap>
            <span className="text-gray-300 text-sm">Load Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`} /></div>
            {metrics.loadTime.toFixed(0)}ms
=======
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">,</div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 ,)})}`}>{metrics.loadTime.toFixed(0)</div>}ms;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  </
        </div>
        <div className="bg-white/5 rounded-lg p-4" /></div>
          <div className="flex items-center gap-2 mb-2" /></div>
            <Cpu className="w-4 h-4 text-green-400" / /></Cpu>
            <span className="text-gray-300 text-sm">Render Time</span>
          </div>
<<<<<<< HEAD
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`} /></div>
            {metrics.renderTime.toFixed(2)}ms
=======
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 ,)})}`}>{metrics.renderTime.toFixed(2)</div>}ms;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  </
        </div>
        <div className="bg-white/5 rounded-lg p-4" /></div>
          <div className="flex items-center gap-2 mb-2" /></div>
            <MemoryStick className="w-4 h-4 text-purple-400" / /></MemoryStick>
            <span className="text-gray-300 text-sm">Memory Usage</span>
          </div>
<<<<<<< HEAD
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`} /></div>
=======
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        </div></div><div className="bg-white/5 rounded-lg p-4">
          </div></div><div className="flex items-center gap-2 mb-2">
            </div></div><Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time</span></span></span>
          </div>
          <div className={`text-2xl font-bold $getPerformanceColor(metrics.loadTime,  good: 1000, warning: 2000 })}`}>
            {metrics.loadTime.toFixed(0)}ms;
  </div></div></
=======
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 ,)})}`}>{formatBytes(metrics.memoryUsage)</div>} </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          </div></div><div className="flex items-center gap-2 mb-2">
            </div></div><Cpu className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm">Render Time</span></span></span>
          </div>
          <div className={`text-2xl font-bold $getPerformanceColor(metrics.renderTime,  good: 16, warning: 33 })}`}>
            {metrics.renderTime.toFixed(2)}ms;
  </div></div></
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          </div></div><div className="flex items-center gap-2 mb-2">
            </div></div><MemoryStick className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">Memory Usage</span></span></span>
          </div>
          <div className={`text-2xl font-bold $getPerformanceColor(metrics.memoryUsage,  good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            {formatBytes(metrics.memoryUsage)}
          </div></div></div>
        </div>
<<<<<<< HEAD
        <div className="bg-white/5 rounded-lg p-4" /></div>
          <div className="flex items-center gap-2 mb-2" /></div>
            <TrendingUp className="w-4 h-4 text-orange-400" / /></TrendingUp>
            <span className="text-gray-300 text-sm">FPS</span>
          </div>
<<<<<<< HEAD
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`} /></div>
=======
        <div className="bg-white/5 rounded-lg p-4">
          </div></div><div className="flex items-center gap-2 mb-2">
            </div></div><TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm">FPS</span></span></span>
          </div>
          <div className={`text-2xl font-bold $getPerformanceColor(60 - metrics.fps,  good: 10, warning: 20 })}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            {metrics.fps}
          </div></div></div>
=======
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 ,)})}`}>{metrics.fps</div>} </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        </div>
      </div>
<<<<<<< HEAD
      <div className="mt-6 text-center" /></div>
        <p className="text-gray-400 text-sm" /></p>
=======
      <div className="mt-6 text-center">
<<<<<<< HEAD
        </div></div><p className="text-gray-400 text-sm">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          {isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}
        </p></p></p>
=======
        <p className="text-gray-400 text-sm">{isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'</p>} </p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      </div>
    </div>
  );
};

export default PerformanceDashboard;
  </div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>
