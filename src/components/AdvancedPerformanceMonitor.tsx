import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence    } from 'framer-motion';
import { Activity, TrendingUp, AlertTriangle, CheckCircle, XCircle, Info    } from 'lucide-react';

interface PerformanceMetrics {



  fps: number;
  memory: number;
  loadTime: number;
  networkLatency: number;
  cpuUsage: number;
  timestamp: number;



}

interface PerformanceAlert {



  id: string;
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  metric: string;
  value: number;
  timestamp: number;



}

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memory: 0,
    loadTime: 0,
    networkLatency: 0,
    cpuUsage: 0,
    timestamp: Date.now()
  });

  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // FPS monitoring
  const measureFPS = useCallback(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps, timestamp: Date.now() }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };

    requestAnimationFrame(countFrames);
  }, []);

  // Memory monitoring
  const measureMemory = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
      setMetrics(prev => ({ ...prev, memory: memoryUsage }));
    }
  }, []);

  // Load time monitoring
  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
    }
  }, []);

  // Network latency monitoring
  const measureNetworkLatency = useCallback(async () => {
    try {
      const start = performance.now();
      await fetch('/api/health', { method: 'HEAD' });
      const end = performance.now();
      const latency = end - start;
      setMetrics(prev => ({ ...prev, networkLatency: anylatency }));
    } catch (error) {
      // If health check fails, use a default value
      setMetrics(prev    => ({ ...prev, networkLatency: 0 }));
    }
  }, []);

  // CPU usage estimation
  const estimateCPUUsage = useCallback(() => {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFrame = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const cpuUsage = Math.min(100, (frameCount / 60) * 100);
        setMetrics(prev => ({ ...prev, cpuUsage }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFrame);
    };
    
    requestAnimationFrame(measureFrame);
  }, []);

  // Performance alerts
  const checkPerformanceAlerts = useCallback((metrics: anyPerformanceMetrics)    => {
    const newAlerts: PerformanceAlert[] = [];

    if (metrics.fps < 30) {
      newAlerts.push({
        id: any`fps-${Date.now()}`,
        type: 'error',
        message: `Low FPS detected: ${metrics.fps}`,
        metric: 'fps',
        value: metrics.fps,
        timestamp: Date.now()
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: ) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
    if (isMinimized) {
        return (<div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Activity className="w-5 h-5 text-zion-blue"/>
          <span className="text-sm font-medium text-zion-slate">Performance</span>
          <button onClick={() => setIsMinimized(false)} className="ml-auto p-1 hover:bg-zion-slate-light rounded">
            <Maximize2 className="w-4 h-4"/>
          </button>
        </div>
      </div>);
    }

    if (metrics.networkLatency > 1000) {
      newAlerts.push({
        id: `network-${Date.now()}`,
        type: 'warning',
        message: `High network latency: ${metrics.networkLatency.toFixed(0)}ms`,
        metric: 'networkLatency',
        value: metrics.networkLatency,
        timestamp: Date.now()
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev    => [...prev, ...newAlerts]);
    }
  }, []);

  // Auto-hide alerts after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlerts(prev => prev.filter(alert => Date.now() - alert.timestamp < 5000));
    }, 5000);

    return () => clearTimeout(timer);
  }, [alerts]);

  // Initialize monitoring
  useEffect(() => {
    measureFPS();
    measureMemory();
    measureLoadTime();
    measureNetworkLatency();
    estimateCPUUsage();

    const interval = setInterval(() => {
      measureMemory();
      measureLoadTime();
      measureNetworkLatency();
      checkPerformanceAlerts(metrics);
    }, 2000);

    return () => clearInterval(interval);
  }, [measureFPS, measureMemory, measureLoadTime, measureNetworkLatency, estimateCPUUsage, checkPerformanceAlerts, metrics]);

  const getPerformanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 50) score -= 15;
    
    if (metrics.memory > 100) score -= 20;
    else if (metrics.memory > 50) score -= 10;
    
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 1000) score -= 10;
    
    if (metrics.networkLatency > 1000) score -= 15;
    else if (metrics.networkLatency > 500) score -= 5;
    
    return Math.max(0, score);
  }, [metrics]);

  const getScoreColor = (score: anynumber)    => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: anynumber)    => {
    if (score >= 80) return <CheckCircle className="w-4 h-4" />;
    if (score >= 60) return <AlertTriangle className="w-4 h-4" />;
    return <XCircle className="w-4 h-4" />;
  };

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-slate-800 hover:bg-slate-700 rounded-full shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-5 h-5 text-cyan-400" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 z-50 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-white">Performance Monitor</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setAutoRefresh(!autoRefresh)} className={`p-2 rounded-lg transition-colors ${autoRefresh ? 'bg-white/20' : 'hover:bg-white/10'}`} title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}>
            <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`}/>
          </button>
          <button onClick={() => setIsMinimized(true)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Minimize2 className="w-4 h-4"/>
          </button>
          <button onClick={() => setIsFullscreen(!isFullscreen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            {isFullscreen ? <Minimize2 className="w-4 h-4"/> : <Maximize2 className="w-4 h-4"/>}
          </button>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-4 h-4"/>
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-zion-slate-light/50 p-4 border-b border-zion-slate-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate">
              {categories.map(category => (<option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>))}
            </select>
            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate">
              {timeRanges.map(range => (<option key={range.value} value={range.value}>
                  {range.label}
                </option>))}
            </select>
            <button onClick={refreshData} disabled={isRefreshing} className="px-4 py-2 bg-zion-blue text-white rounded-lg hover:bg-zion-blue/90 transition-colors disabled:opacity-50 flex items-center gap-2">
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`}/>
              Refresh
            </button>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-zion-slate">
              <input type="checkbox" checked={showPredictions} onChange={(e) => setShowPredictions(e.target.checked)} className="rounded"/>
              Show Predictions
            </label>
            <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4"/>
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'metrics', label: 'System Metrics', icon: BarChart3 },
            { id: 'alerts', label: 'Performance Alerts', icon: AlertTriangle },
            { id: 'scalability', label: 'Scalability', icon: TrendingUp },
            { id: 'analytics', label: 'Analytics', icon: Zap }
        ].map(tab => {
            const Icon = tab.icon;
            return (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${activeTab === tab.id
                    ? 'border-zion-blue text-zion-blue bg-zion-blue/5'
                    : 'border-transparent text-zion-slate-light hover:text-zion-slate hover:bg-zion-slate-light/20'}`}>
              <Icon className="w-4 h-4"/>
              {tab.label}
            </button>);
        })}
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto h-[calc(100%-200px)]">
        {activeTab === 'overview' && (<div className="space-y-6">
            {/* System Health Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemMetrics.slice(0, 6).map(metric => (<div key={metric.id} className="p-4 rounded-xl border border-zion-slate-light bg-white dark:bg-zion-slate hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(metric.category)}
                      <h3 className="font-semibold text-zion-slate text-sm">{metric.name}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-zion-slate mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${metric.trend === 'up' ? 'text-red-600' :
                    metric.trend === 'down' ? 'text-green-600' : 'text-gray-600'}`}>
                      {metric.trend === 'up' ? '+' : ''}{metric.change}%
                    </span>
                    <span className="text-zion-slate-light">
                      Threshold: {metric.threshold}{metric.unit}
                    </span>
                  </div>
                  {showPredictions && (<div className="mt-3 pt-3 border-t border-zion-slate-light/30">
                      <div className="text-xs text-zion-slate-light">
                        Predicted: {metric.value * (1 + metric.change / 100)}{metric.unit}
                      </div>
                    </div>)}
                </div>))}
            </div>

            {/* Quick Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10 p-6 rounded-xl border border-zion-blue/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-blue"/>
                  System Health Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Overall Health</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
                      Good
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Active Alerts</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm font-medium">
                      {performanceAlerts.filter(a => a.status === 'active').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Last Updated</span>
                    <span className="text-sm text-zion-slate-light">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-zion-green/10 to-zion-emerald/10 p-6 rounded-xl border border-zion-green/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-zion-green"/>
                  Scalability Overview
                </h3>
                <div className="space-y-3">
                  {scalabilityMetrics.slice(0, 3).map(metric => (<div key={metric.id} className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate">{metric.name}</span>
                      <span className={`text-sm font-medium ${getUtilizationColor(metric.utilization)}`}>
                        {metric.utilization}%
                      </span>
                    </div>))}
                </div>
              </div>
            </div>
          </div>)}

        {activeTab === 'metrics' && (<div className="space-y-4">
            {filteredMetrics.map(metric => (<div key={metric.id} className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(metric.category)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                      {getTrendIcon(metric.trend)}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Current Value:</span>
                        <div className="font-semibold text-zion-slate">{metric.value}{metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Threshold:</span>
                        <div className="font-semibold text-zion-slate">{metric.threshold}{metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Change:</span>
                        <div className={`font-semibold ${metric.change > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {metric.change > 0 ? '+' : ''}{metric.change}%
                        </div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Last Updated:</span>
                        <div className="font-semibold text-zion-slate">
                          {new Date(metric.lastUpdated).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>))}
          </div>)}

        {activeTab === 'alerts' && (<div className="space-y-4">
            {performanceAlerts.map(alert => (<div key={alert.id} className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-zion-orange/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-zion-orange"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{alert.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.status === 'active' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                    alert.status === 'acknowledged' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                        {alert.status}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{alert.description}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Affected Systems:</h4>
                      <div className="flex flex-wrap gap-2">
                        {alert.affected.map((system, index) => (<span key={index} className="px-2 py-1 bg-zion-orange/10 text-zion-orange rounded-full text-xs border border-zion-orange/20">
                            {system}
                          </span>))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Recommendations:</h4>
                      <div className="space-y-1">
                        {alert.recommendations.map((rec, index) => (<div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <span className="w-1.5 h-1.5 bg-zion-orange rounded-full"></span>
                            {rec}
                          </div>))}
                      </div>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Time: {new Date(alert.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>))}
          </div>)}

        {activeTab === 'scalability' && (<div className="space-y-4">
            {scalabilityMetrics.map(metric => (<div key={metric.id} className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zion-green/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-zion-green"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUtilizationColor(metric.utilization)}`}>
                        {metric.utilization}% utilized
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Current:</span>
                        <div className="font-semibold text-zion-slate">{metric.current.toLocaleString()} {metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Capacity:</span>
                        <div className="font-semibold text-zion-slate">{metric.capacity.toLocaleString()} {metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Growth:</span>
                        <div className="font-semibold text-zion-slate">{metric.growth}%</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Prediction:</span>
                        <div className="font-semibold text-zion-slate">{metric.prediction.toLocaleString()} {metric.unit}</div>
                      </div>
                    </div>
                    {showPredictions && (<div className="mt-3 pt-3 border-t border-zion-slate-light/30">
                        <div className="text-xs text-zion-slate-light">
                          Based on current growth rate, capacity will be reached in approximately{' '}
                          {Math.ceil((metric.capacity - metric.current) / (metric.current * metric.growth / 100))} days
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>))}
          </div>)}

        {activeTab === 'analytics' && (<div className="space-y-6">
            <div className="text-center text-zion-slate-light">
              <Zap className="w-16 h-16 mx-auto mb-4 opacity-50"/>
              <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
              <p>Advanced performance analytics and predictive insights coming soon...</p>
            </div>
          </div>)}
      </div>
    </div>);
}
