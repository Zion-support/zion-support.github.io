import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  Cpu, 
  Memory, 
  Network, 
  Battery, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  cpu: number;
  network: {
    latency: number;
    bandwidth: number;
  };
  battery: number;
  timestamp: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
  resolved: boolean;
}

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: { used: 0, total: 0, percentage: 0 },
    cpu: 0,
    network: { latency: 0, bandwidth: 0 },
    battery: 100,
    timestamp: Date.now()
  });
  
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [optimizationLevel, setOptimizationLevel] = useState<'balanced' | 'performance' | 'battery'>('balanced');

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (!isMonitoring) return;

    // Simulate performance metrics (in real app, use actual APIs)
    const newMetrics: PerformanceMetrics = {
      fps: Math.max(30, Math.min(120, 60 + (Math.random() - 0.5) * 20)),
      memory: {
        used: Math.random() * 2048 + 512, // MB
        total: 8192, // 8GB
        percentage: Math.random() * 40 + 20
      },
      cpu: Math.random() * 30 + 10,
      network: {
        latency: Math.random() * 50 + 10,
        bandwidth: Math.random() * 100 + 50
      },
      battery: Math.max(0, Math.min(100, 100 - Math.random() * 5)),
      timestamp: Date.now()
    };

    setMetrics(newMetrics);
    checkPerformanceAlerts(newMetrics);
  }, [isMonitoring]);

  // Check for performance issues
  const checkPerformanceAlerts = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: PerformanceAlert[] = [];

    if (currentMetrics.fps < 45) {
      newAlerts.push({
        id: `fps-${Date.now()}`,
        type: 'warning',
        message: `Low FPS detected: ${currentMetrics.fps.toFixed(1)}`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.memory.percentage > 80) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'error',
        message: `High memory usage: ${currentMetrics.memory.percentage.toFixed(1)}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.cpu > 70) {
      newAlerts.push({
        id: `cpu-${Date.now()}`,
        type: 'warning',
        message: `High CPU usage: ${currentMetrics.cpu.toFixed(1)}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.network.latency > 100) {
      newAlerts.push({
        id: `network-${Date.now()}`,
        type: 'info',
        message: `High network latency: ${currentMetrics.network.latency.toFixed(1)}ms`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
    }
  }, []);

  // Performance optimization strategies
  const optimizationStrategies = useMemo(() => ({
    balanced: {
      name: 'Balanced',
      description: 'Optimal balance between performance and battery life',
      icon: Gauge,
      color: 'from-blue-500 to-cyan-500'
    },
    performance: {
      name: 'Performance',
      description: 'Maximum performance with higher resource usage',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    battery: {
      name: 'Battery Saver',
      description: 'Extended battery life with reduced performance',
      icon: Battery,
      color: 'from-orange-500 to-red-500'
    }
  }), []);

  // Apply optimization
  const applyOptimization = useCallback((level: typeof optimizationLevel) => {
    setOptimizationLevel(level);
    
    // Simulate optimization effects
    const alert: PerformanceAlert = {
      id: `optimization-${Date.now()}`,
      type: 'info',
      message: `Applied ${optimizationStrategies[level].name} optimization`,
      timestamp: new Date(),
      resolved: false
    };
    
    setAlerts(prev => [alert, ...prev]);
    
    // Auto-resolve after 3 seconds
    setTimeout(() => {
      setAlerts(prev => prev.map(a => 
        a.id === alert.id ? { ...a, resolved: true } : a
      ));
    }, 3000);
  }, [optimizationStrategies]);

  // Clear resolved alerts
  const clearResolvedAlerts = useCallback(() => {
    setAlerts(prev => prev.filter(alert => !alert.resolved));
  }, []);

  // Start/stop monitoring
  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(monitorPerformance, 2000);
    return () => clearInterval(interval);
  }, [monitorPerformance, isMonitoring]);

  // Auto-cleanup old alerts
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(prev => prev.filter(alert => 
        Date.now() - alert.timestamp.getTime() < 300000 // 5 minutes
      ));
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number, thresholds: { warning: number; error: number }) => {
    if (value >= thresholds.error) return 'text-red-400';
    if (value >= thresholds.warning) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getStatusIcon = (value: number, thresholds: { warning: number; error: number }) => {
    if (value >= thresholds.error) return <AlertTriangle className="w-4 h-4" />;
    if (value >= thresholds.warning) return <Info className="w-4 h-4" />;
    return <CheckCircle className="w-4 h-4" />;
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      {/* Main Performance Widget */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-4 w-80"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
              <Gauge className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-zion-slate-dark">Performance Monitor</h3>
              <p className="text-xs text-zion-slate">Real-time metrics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`p-2 rounded-lg transition-colors ${
                isMonitoring 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}
              title={isMonitoring ? 'Stop monitoring' : 'Start monitoring'}
            >
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`} />
            </button>
            
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-2 rounded-lg hover:bg-zion-slate/10 transition-colors"
              title="Toggle details"
            >
              <Settings className="w-4 h-4 text-zion-slate" />
            </button>
          </div>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-3 bg-zion-slate/5 rounded-lg">
            <div className="text-2xl font-bold text-zion-cyan">
              {metrics.fps.toFixed(0)}
            </div>
            <div className="text-xs text-zion-slate">FPS</div>
          </div>
          
          <div className="text-center p-3 bg-zion-slate/5 rounded-lg">
            <div className="text-2xl font-bold text-zion-cyan">
              {metrics.memory.percentage.toFixed(0)}%
            </div>
            <div className="text-xs text-zion-slate">Memory</div>
          </div>
        </div>

        {/* Optimization Controls */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-zion-slate mb-2">
            Optimization Level
          </label>
          <div className="flex space-x-1">
            {Object.entries(optimizationStrategies).map(([key, strategy]) => (
              <button
                key={key}
                onClick={() => applyOptimization(key as typeof optimizationLevel)}
                className={`flex-1 p-2 rounded-lg text-xs font-medium transition-all ${
                  optimizationLevel === key
                    ? 'bg-gradient-to-r ' + strategy.color + ' text-white shadow-lg'
                    : 'bg-zion-slate/10 text-zion-slate hover:bg-zion-slate/20'
                }`}
              >
                <strategy.icon className="w-3 h-3 mx-auto mb-1" />
                {strategy.name}
              </button>
            ))}
          </div>
        </div>

        {/* Alerts Summary */}
        {alerts.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-zion-slate">Active Alerts</span>
              <button
                onClick={clearResolvedAlerts}
                className="text-xs text-zion-cyan hover:text-zion-cyan/80"
              >
                Clear
              </button>
            </div>
            
            <div className="space-y-2 max-h-32 overflow-y-auto">
              <AnimatePresence>
                {alerts.slice(0, 3).map((alert) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`p-2 rounded-lg text-xs ${
                      alert.type === 'error' ? 'bg-red-100 text-red-700' :
                      alert.type === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {alert.message}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Detailed Metrics (Collapsible) */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-zion-slate/20 pt-4 space-y-3"
            >
              {/* CPU Usage */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-zion-slate" />
                  <span className="text-sm text-zion-slate">CPU</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(metrics.cpu, { warning: 50, error: 80 })}
                  <span className={`text-sm font-medium ${getStatusColor(metrics.cpu, { warning: 50, error: 80 })}`}>
                    {metrics.cpu.toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Memory Usage */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Memory className="w-4 h-4 text-zion-slate" />
                  <span className="text-sm text-zion-slate">Memory</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(metrics.memory.percentage, { warning: 70, error: 90 })}
                  <span className={`text-sm font-medium ${getStatusColor(metrics.memory.percentage, { warning: 70, error: 90 })}`}>
                    {metrics.memory.used.toFixed(0)}MB / {metrics.memory.total.toFixed(0)}MB
                  </span>
                </div>
              </div>

              {/* Network */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Network className="w-4 h-4 text-zion-slate" />
                  <span className="text-sm text-zion-slate">Network</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(metrics.network.latency, { warning: 50, error: 100 })}
                  <span className={`text-sm font-medium ${getStatusColor(metrics.network.latency, { warning: 50, error: 100 })}`}>
                    {metrics.network.latency.toFixed(0)}ms
                  </span>
                </div>
              </div>

              {/* Battery */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Battery className="w-4 h-4 text-zion-slate" />
                  <span className="text-sm text-zion-slate">Battery</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(100 - metrics.battery, { warning: 20, error: 10 })}
                  <span className={`text-sm font-medium ${getStatusColor(100 - metrics.battery, { warning: 20, error: 10 })}`}>
                    {metrics.battery.toFixed(0)}%
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="text-xs text-zion-slate/60 text-center pt-2 border-t border-zion-slate/20">
          Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
        </div>
      </motion.div>
    </div>
  );
};

// Lazy loading hook
export function useLazyLoad<T>(
  data: T[],
  itemsPerPage: number = 10
) {
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const newItems = data.slice(startIndex, endIndex);
    
    setDisplayedItems(newItems);
    setHasMore(endIndex < data.length);
  }, [data, currentPage, itemsPerPage]);

  const loadMore = useCallback(() => {
    if (hasMore) {
      setCurrentPage(prev => prev + 1);
    }
  }, [hasMore]);

  return {
    displayedItems,
    hasMore,
    loadMore,
    currentPage
  };
}

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  critical?: boolean;
  sizes?: string;
  onLoad?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  critical = false,
  sizes = '100vw',
  onLoad
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-zion-slate-light/20 animate-pulse rounded" />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-zion-slate-light/10 flex items-center justify-center">
          <span className="text-zion-slate-light text-sm">Image failed to load</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={critical ? 'eager' : 'lazy'}
          data-critical={critical ? 'true' : undefined}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}

// Code splitting wrapper
interface LazyComponentProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export function LazyComponent({ 
  fallback = <div className="animate-pulse bg-zion-slate-light/20 h-32 rounded" />,
  children 
}: LazyComponentProps) {
  return (
    <React.Suspense fallback={fallback}>
      {children}
    </React.Suspense>
  );
}
