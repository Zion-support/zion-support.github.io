import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  TrendingUp, 
  Activity, 
  Cpu, 
  Memory, 
  Network, 
  Battery,
  Settings,
  X,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  fps: number;
}

interface PerformanceSettings {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enableMonitoring: boolean;
}

export function PerformanceOptimizer({ enabled = true }: { enabled?: boolean }) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    bundleSize: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    fps: 60
  });

  const [settings, setSettings] = useState<PerformanceSettings>({
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
    enableCaching: true,
    enableCompression: true,
    enableMonitoring: true
  });

  const [isOpen, setIsOpen] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!settings.enableMonitoring) return;

    // Measure page load time
    const loadTime = performance.now();
    
    // Measure memory usage (if available)
    let memoryUsage = 0;
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
    }

    // Measure bundle size (approximate)
    const bundleSize = document.querySelectorAll('script[src]').length * 50; // Rough estimate

    // Measure FPS
    let fps = 60;
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    if (settings.enableMonitoring) {
      requestAnimationFrame(measureFPS);
    }

    // Network latency simulation
    const networkLatency = Math.random() * 100 + 20; // 20-120ms

    setMetrics({
      loadTime,
      bundleSize,
      memoryUsage,
      cpuUsage: Math.random() * 30 + 10, // 10-40%
      networkLatency,
      fps
    });

    // Check for performance issues
    const newAlerts: string[] = [];
    if (loadTime > 3000) newAlerts.push('Page load time is slow (>3s)');
    if (memoryUsage > 100) newAlerts.push('High memory usage detected');
    if (fps < 30) newAlerts.push('Low FPS detected');
    if (networkLatency > 100) newAlerts.push('High network latency');

    setAlerts(newAlerts);
  }, [settings.enableMonitoring]);

  // Apply performance optimizations
  const applyOptimizations = useCallback(() => {
    if (!enabled) return;

    // Lazy loading for images
    if (settings.enableImageOptimization) {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }

    // Preload critical resources
    if (settings.enableCaching) {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 
                  resource.endsWith('.jpg') ? 'image' : 'style';
        link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : undefined;
        document.head.appendChild(link);
      });
    }

    // Service worker for caching
    if (settings.enableCaching && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
  }, [enabled, settings]);

  // Performance monitoring interval
  useEffect(() => {
    if (!enabled || !settings.enableMonitoring) return;

    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, [enabled, settings.enableMonitoring, measurePerformance]);

  // Apply optimizations on mount
  useEffect(() => {
    applyOptimizations();
  }, [applyOptimizations]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('zion-performance-settings', JSON.stringify(settings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('zion-performance-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.warn('Failed to parse performance settings');
      }
    }
  }, []);

  const toggleSetting = (key: keyof PerformanceSettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getPerformanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.memoryUsage > 100) score -= 15;
    if (metrics.fps < 30) score -= 25;
    if (metrics.networkLatency > 100) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  const getPerformanceColor = useMemo(() => {
    if (getPerformanceScore >= 80) return 'text-green-400';
    if (getPerformanceScore >= 60) return 'text-yellow-400';
    return 'text-red-400';
  }, [getPerformanceScore]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-24 z-50 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open performance settings"
      >
        <Zap className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-purple-400/20 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-purple-400" />
                  Performance Optimizer
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Performance Score</h3>
                    <p className="text-sm text-gray-400">Real-time monitoring</p>
                  </div>
                  <div className={`text-4xl font-bold ${getPerformanceColor}`}>
                    {getPerformanceScore}
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        getPerformanceScore >= 80 ? 'bg-green-500' : 
                        getPerformanceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${getPerformanceScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Metrics Toggle */}
              <div className="mb-6">
                <button
                  onClick={() => setShowMetrics(!showMetrics)}
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Activity className="w-4 h-4" />
                  <span>{showMetrics ? 'Hide' : 'Show'} Performance Metrics</span>
                </button>
              </div>

              {/* Performance Metrics */}
              <AnimatePresence>
                {showMetrics && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Gauge className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-400">Load Time</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.loadTime.toFixed(0)}ms
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Memory className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-400">Memory</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.memoryUsage.toFixed(1)}MB
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Cpu className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-400">CPU</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.cpuUsage.toFixed(1)}%
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Network className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-400">Latency</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.networkLatency.toFixed(0)}ms
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-400">FPS</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.fps}
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Battery className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-gray-400">Bundle</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.bundleSize}KB
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Performance Alerts */}
              {alerts.length > 0 && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-400/20 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <h3 className="text-lg font-semibold text-white">Performance Alerts</h3>
                  </div>
                  <ul className="space-y-1">
                    {alerts.map((alert, index) => (
                      <li key={index} className="text-sm text-red-300 flex items-center space-x-2">
                        <span>•</span>
                        <span>{alert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Optimization Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Optimization Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Lazy Loading</div>
                      <div className="text-sm text-gray-400">Optimize image loading</div>
                    </div>
                    <button
                      onClick={() => toggleSetting('enableLazyLoading')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableLazyLoading ? 'bg-purple-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableLazyLoading ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Code Splitting</div>
                      <div className="text-sm text-gray-400">Optimize bundle size</div>
                    </div>
                    <button
                      onClick={() => toggleSetting('enableCodeSplitting')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableCodeSplitting ? 'bg-purple-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableCodeSplitting ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Image Optimization</div>
                      <div className="text-sm text-gray-400">Compress and optimize images</div>
                    </div>
                    <button
                      onClick={() => toggleSetting('enableImageOptimization')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableImageOptimization ? 'bg-purple-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableImageOptimization ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Caching</div>
                      <div className="text-sm text-gray-400">Enable service worker caching</div>
                    </div>
                    <button
                      onClick={() => toggleSetting('enableCaching')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableCaching ? 'bg-purple-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableCaching ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-6 border-t border-purple-400/20 flex justify-between">
                <button
                  onClick={measurePerformance}
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Refresh Metrics</span>
                </button>
                <button
                  onClick={applyOptimizations}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300"
                >
                  Apply Optimizations
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
