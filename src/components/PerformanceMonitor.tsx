import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0
  });  useEffect(() => {
;
interface PerformanceMetrics {;
  "loadTime": "number;
  "memoryUsage": number;
  "renderTime": number;
"}
;
const "PerformanceMonitor": "React.FC = () => {;
  const [metrics", setMetrics] = useState<PerformanceMetrics>({;
    "loadTime": "0",;
    "memoryUsage": "0",;
    "renderTime": "0;
  "});
;
  useEffect(() => {;
    const _startTime = performance.now();
    ;
    // Measure page load time;
    if (window.performance.timing) {;
      const _loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }))}
      setMetrics(prev => ({ ...prev, loadTime }));
    }    // Measure memory usage (if available)
    if ('memory' in performance) {
      const _memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
      }))}
    // Measure render time
    const _endTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTime: Math.round(endTime - startTime) }))}, []);;
  return (;
    <div className="bg-gray-100 p-4 rounded-lg">;
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>;
      <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4">;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Load Time</div>;
          <div className="text-2xl font-bold text-blue-600">{metrics.loadTime"}ms</div>;
        </div>;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Memory Usage</div>;
          <div className="text-2xl font-bold text-green-600">{metrics.memoryUsage}MB</div>;
        </div>;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Render Time</div>;
          <div className="text-2xl font-bold text-purple-600">{metrics.renderTime}ms</div>;
        </div>;
      </div>;
    </div>;
  );
};
;
export default PerformanceMonitor;
import { _useEffect } from 'react';
import { _getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import logger from '../utils/logger';
interface PerformanceMetrics {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;