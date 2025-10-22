import React, { useState, useEffect } from 'react';
import { Activity, Zap, TrendingUp, AlertCircle } from 'lucide-react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
  memory?: number;
  connection?: string;
}

interface PerformanceDashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  isVisible = false, 
  onClose 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Get performance metrics
    const updateMetrics = () => {
      const newMetrics: PerformanceMetrics = {};

      // Get memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memory = Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
      }

      // Get connection info
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        newMetrics.connection = connection.effectiveType || 'unknown';
      }

      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Update metrics immediately and then every 5 seconds
    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const getPerformanceScore = (metric: string, value: number): { score: number; color: string; label: string } => {
    switch (metric) {
      case 'lcp':
        if (value <= 2500) return { score: 100, color: 'text-green-400', label: 'Good' };
        if (value <= 4000) return { score: 70, color: 'text-yellow-400', label: 'Needs Improvement' };
        return { score: 30, color: 'text-red-400', label: 'Poor' };
      
      case 'fcp':
        if (value <= 1800) return { score: 100, color: 'text-green-400', label: 'Good' };
        if (value <= 3000) return { score: 70, color: 'text-yellow-400', label: 'Needs Improvement' };
        return { score: 30, color: 'text-red-400', label: 'Poor' };
      
      case 'cls':
        if (value <= 0.1) return { score: 100, color: 'text-green-400', label: 'Good' };
        if (value <= 0.25) return { score: 70, color: 'text-yellow-400', label: 'Needs Improvement' };
        return { score: 30, color: 'text-red-400', label: 'Poor' };
      
      case 'ttfb':
        if (value <= 800) return { score: 100, color: 'text-green-400', label: 'Good' };
        if (value <= 1800) return { score: 70, color: 'text-yellow-400', label: 'Needs Improvement' };
        return { score: 30, color: 'text-red-400', label: 'Poor' };
      
      default:
        return { score: 0, color: 'text-gray-400', label: 'Unknown' };
    }
  };

  const formatValue = (metric: string, value: number): string => {
    switch (metric) {
      case 'lcp':
      case 'fcp':
      case 'ttfb':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      case 'memory':
        return `${value}MB`;
      default:
        return value.toString();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-slate-800 rounded-lg shadow-2xl border border-slate-700 max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="text-white font-semibold">Performance</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <TrendingUp className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {isExpanded ? (
          <div className="space-y-4">
            {/* Core Web Vitals */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Core Web Vitals</h4>
              <div className="space-y-2">
                {Object.entries(metrics).map(([key, value]) => {
                  if (typeof value !== 'number' || key === 'memory') return null;
                  
                  const { color, label } = getPerformanceScore(key, value);
                  
                  return (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400 uppercase">{key}:</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white">{formatValue(key, value)}</span>
                        <span className={`text-xs ${color}`}>({label})</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Info */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">System Info</h4>
              <div className="space-y-2 text-sm">
                {metrics.memory && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Memory:</span>
                    <span className="text-white">{formatValue('memory', metrics.memory)}</span>
                  </div>
                )}
                {metrics.connection && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Connection:</span>
                    <span className="text-white capitalize">{metrics.connection}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Performance Tips */}
            <div className="bg-slate-700/50 rounded-lg p-3">
              <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                Tips
              </h4>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Enable hardware acceleration</li>
                <li>• Close unused tabs</li>
                <li>• Check your internet connection</li>
                <li>• Clear browser cache if needed</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Performance Monitor</span>
            </div>
            <p className="text-xs text-gray-400">
              Click to view detailed metrics
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceDashboard;