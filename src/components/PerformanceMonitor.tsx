import React, { useState, useEffect } from 'react';
import { TrendingUp, Eye, EyeOff } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  fps: number;
  lighthouseScore: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    fps: 0,
    lighthouseScore: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure initial load time
    const loadTime = performance.now();
    
    // Measure render time
    const renderStart = performance.now();
    const renderTime = performance.now() - renderStart;
    
    // Measure memory usage
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize : 0;
    
    // Measure network latency (simplified)
    const networkStart = performance.now();
    fetch('/api/ping').then(() => {
      const networkLatency = performance.now() - networkStart;
      setMetrics(prev => ({
        ...prev,
        networkLatency
      }));
    }).catch(() => {
      // Fallback for when API is not available
      setMetrics(prev => ({
        ...prev,
        networkLatency: 0
      }));
    });
    
    // Measure FPS (simplified)
    let frameCount = 0;
    const fpsStart = performance.now();
    const measureFPS = () => {
      frameCount++;
      if (performance.now() - fpsStart < 1000) {
        requestAnimationFrame(measureFPS);
      } else {
        const fps = frameCount;
        setMetrics(prev => ({
          ...prev,
          fps
        }));
      }
    };
    measureFPS();
    
    // Calculate Lighthouse score (simplified)
    const lighthouseScore = Math.max(0, 100 - loadTime / 10);
    
    setMetrics({
      loadTime: Math.round(loadTime),
      renderTime: Math.round(renderTime), 
      memoryUsage: Math.round(memoryUsage * 100) / 100,
      networkLatency: Math.round(metrics.networkLatency), 
      fps: metrics.fps,
      lighthouseScore: Math.round(lighthouseScore)
    });
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Show Performance Monitor"
      >
        <TrendingUp className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          <EyeOff className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(100 - metrics.loadTime / 10)}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className={getScoreColor(100 - metrics.renderTime / 10)}>
            {metrics.renderTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory Usage:</span>
          <span className={getScoreColor(100 - metrics.memoryUsage * 100)}>
            {Math.round(metrics.memoryUsage * 100)}%
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Network Latency:</span>
          <span className={getScoreColor(100 - metrics.networkLatency / 10)}>
            {metrics.networkLatency}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={getScoreColor(metrics.fps)}>
            {metrics.fps}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Lighthouse Score:</span>
          <span className={getScoreColor(metrics.lighthouseScore)}>
            {metrics.lighthouseScore}/100
          </span>
        </div>
      </div>
    </div>
  );
}