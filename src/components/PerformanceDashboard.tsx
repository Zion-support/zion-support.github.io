import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  Database, 
  Globe, 
  Shield, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  description: string;
}

interface PerformanceDashboardProps {
  refreshInterval?: number;
  enableAlerts?: boolean;
  onAlert?: (alert: { type: string; message: string; severity: 'low' | 'medium' | 'high' | 'critical' }) => void;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  refreshInterval = 5000,
  enableAlerts = true,
  onAlert
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const generateMockMetrics = useCallback((): PerformanceMetric[] => {
    const now = Date.now();
    return [
      {
        name: 'Page Load Time',
        value: Math.random() * 2000 + 500,
        unit: 'ms',
        status: Math.random() > 0.7 ? 'excellent' : Math.random() > 0.4 ? 'good' : 'warning',
        trend: Math.random() > 0.5 ? 'down' : 'up',
        description: 'Time to fully load the page'
      },
      {
        name: 'First Contentful Paint',
        value: Math.random() * 1000 + 200,
        unit: 'ms',
        status: Math.random() > 0.6 ? 'excellent' : 'good',
        trend: Math.random() > 0.5 ? 'down' : 'stable',
        description: 'Time to first contentful paint'
      },
      {
        name: 'Largest Contentful Paint',
        value: Math.random() * 2500 + 800,
        unit: 'ms',
        status: Math.random() > 0.5 ? 'good' : 'warning',
        trend: Math.random() > 0.5 ? 'down' : 'up',
        description: 'Time to largest contentful paint'
      },
      {
        name: 'Cumulative Layout Shift',
        value: Math.random() * 0.3,
        unit: 'score',
        status: Math.random() > 0.7 ? 'excellent' : Math.random() > 0.4 ? 'good' : 'warning',
        trend: Math.random() > 0.5 ? 'down' : 'stable',
        description: 'Visual stability score'
      },
      {
        name: 'First Input Delay',
        value: Math.random() * 100 + 10,
        unit: 'ms',
        status: Math.random() > 0.6 ? 'excellent' : 'good',
        trend: Math.random() > 0.5 ? 'down' : 'stable',
        description: 'Time to first user interaction'
      },
      {
        name: 'Time to Interactive',
        value: Math.random() * 3000 + 1000,
        unit: 'ms',
        status: Math.random() > 0.5 ? 'good' : 'warning',
        trend: Math.random() > 0.5 ? 'down' : 'up',
        description: 'Time until page is fully interactive'
      },
      {
        name: 'Bundle Size',
        value: Math.random() * 500 + 200,
        unit: 'KB',
        status: Math.random() > 0.6 ? 'excellent' : 'good',
        trend: Math.random() > 0.5 ? 'down' : 'stable',
        description: 'Total JavaScript bundle size'
      },
      {
        name: 'Cache Hit Rate',
        value: Math.random() * 30 + 70,
        unit: '%',
        status: Math.random() > 0.5 ? 'excellent' : 'good',
        trend: Math.random() > 0.5 ? 'up' : 'stable',
        description: 'Percentage of cache hits'
      }
    ];
  }, []);

  const updateMetrics = useCallback(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newMetrics = generateMockMetrics();
      setMetrics(newMetrics);
      setLastUpdated(new Date());
      setIsLoading(false);

      // Check for alerts
      if (enableAlerts) {
        newMetrics.forEach(metric => {
          if (metric.status === 'critical' && onAlert) {
            onAlert({
              type: 'performance',
              message: `${metric.name} is in critical state: ${metric.value}${metric.unit}`,
              severity: 'high'
            });
          }
        });
      }
    }, 500);
  }, [generateMockMetrics, enableAlerts, onAlert]);

  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, refreshInterval);
    return () => clearInterval(interval);
  }, [updateMetrics, refreshInterval]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="w-4 h-4" />;
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-green-500 rotate-180" />;
      case 'stable': return <Activity className="w-4 h-4 text-gray-500" />;
      default: return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Activity className="w-6 h-6 mr-2 text-blue-600" />
          Performance Dashboard
        </h2>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 text-sm" id="metricname">{metric.name}</h3>
                <div className={`flex items-center px-2 py-1 rounded-full text-xs ${getStatusColor(metric.status)}`}>
                  {getStatusIcon(metric.status)}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-gray-900">
                  {metric.value.toFixed(metric.unit === 'score' ? 2 : 0)}
                </span>
                <span className="text-sm text-gray-500">{metric.unit}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{metric.description}</span>
                <div className="flex items-center">
                  {getTrendIcon(metric.trend)}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;