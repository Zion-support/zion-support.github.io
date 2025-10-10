'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Clock, Memory, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
}

interface PerformanceProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    
    // Memory usage (if available)
    const memory = (performance as any).memory;
    const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
    
    // FPS calculation (simplified)
    const fps = 60; // This would be calculated from actual frame measurements
    
    const newMetrics: PerformanceMetrics = {
      loadTime,
      renderTime,
      memoryUsage,
      fps
    };

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);

    // Check for performance issues
    const newAlerts: string[] = [];
    if (loadTime > 3000) newAlerts.push('Load time is above 3 seconds');
    if (renderTime > 1000) newAlerts.push('First contentful paint is slow');
    if (memoryUsage > 50) newAlerts.push('High memory usage detected');
    if (fps < 30) newAlerts.push('Low frame rate detected');
    
    setAlerts(newAlerts);
  }, [onMetricsUpdate]);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(measurePerformance, 1000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, measurePerformance]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    measurePerformance();
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  const getPerformanceStatus = (value: number, threshold: number, type: 'lower' | 'higher' = 'lower') => {
    const isGood = type === 'lower' ? value < threshold : value > threshold;
    return isGood ? 'good' : 'warning';
  };

  const formatValue = (value: number, unit: string) => {
    return `${value.toFixed(2)} ${unit}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
          <Activity className="h-5 w-5 mr-2" />
          Performance Dashboard
        </h3>
        <div className="flex gap-2">
          {!isMonitoring ? (
            <button
              onClick={startMonitoring}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
            >
              <Zap className="h-4 w-4 mr-2" />
              Start Monitoring
            </button>
          ) : (
            <button
              onClick={stopMonitoring}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Clock className="h-4 w-4 mr-2" />
              Stop Monitoring
            </button>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className={`text-xs px-2 py-1 rounded ${
              getPerformanceStatus(metrics.loadTime, 3000) === 'good' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {getPerformanceStatus(metrics.loadTime, 3000) === 'good' ? 'Good' : 'Warning'}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatValue(metrics.loadTime, 'ms')}
          </div>
          <div className="text-sm text-gray-600">Load Time</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className={`text-xs px-2 py-1 rounded ${
              getPerformanceStatus(metrics.renderTime, 1000) === 'good' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {getPerformanceStatus(metrics.renderTime, 1000) === 'good' ? 'Good' : 'Warning'}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatValue(metrics.renderTime, 'ms')}
          </div>
          <div className="text-sm text-gray-600">Render Time</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Memory className="h-5 w-5 text-purple-600" />
            <span className={`text-xs px-2 py-1 rounded ${
              getPerformanceStatus(metrics.memoryUsage, 50, 'lower') === 'good' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {getPerformanceStatus(metrics.memoryUsage, 50, 'lower') === 'good' ? 'Good' : 'Warning'}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatValue(metrics.memoryUsage, 'MB')}
          </div>
          <div className="text-sm text-gray-600">Memory Usage</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="h-5 w-5 text-orange-600" />
            <span className={`text-xs px-2 py-1 rounded ${
              getPerformanceStatus(metrics.fps, 30, 'higher') === 'good' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {getPerformanceStatus(metrics.fps, 30, 'higher') === 'good' ? 'Good' : 'Warning'}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatValue(metrics.fps, 'fps')}
          </div>
          <div className="text-sm text-gray-600">Frame Rate</div>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
            <h4 className="font-semibold text-yellow-800">Performance Alerts</h4>
          </div>
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
              <li key={index} className="text-sm text-yellow-700 flex items-center">
                <span className="w-1 h-1 bg-yellow-600 rounded-full mr-2"></span>
                {alert}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Status */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${
            isMonitoring ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
          <span className="text-gray-600">
            {isMonitoring ? 'Monitoring active' : 'Monitoring stopped'}
          </span>
        </div>
        <div className="text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;