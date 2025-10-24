<<<<<<< HEAD
'use client';;
import React, {useState, useEffect}from 'react';
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react';
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
  useEffect(() => {const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation;
  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType()
      )[0] as PerformanceNavigationTiming
      const loadTime = navigation
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
      }
      const newMetrics: PerformanceMetrics = {,
        loadTime,
        renderTime,
        memoryUsage,
        fps,
      });
    };
=======

>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

import React from 'react';

interface PerformanceDashboardProps {
  // Add props here
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default PerformanceDashboard;
