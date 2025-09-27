import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Database, 
  Globe, 
  Server, 
  Shield, 
  Zap,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';

interface RealTimeMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  timestamp: number;
}

interface SystemAlert {
  id: string;
  type: 'performance' | 'security' | 'error' | 'network';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  resolved: boolean;
}

const RealTimeMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<RealTimeMetric[]>([]);
  const [alerts, setAlerts] = useState<SystemAlert[]>([]);
  const [isConnected, setIsConnected] = useState(true);
  const wsRef = useRef<WebSocket | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics(prev => prev.map(metric => {
        const change = (Math.random() - 0.5) * 10;
        let newValue = metric.value + change;
        
        // Keep values within reasonable bounds
        if (metric.id === 'cpu-usage' || metric.id === 'memory-usage') {
          newValue = Math.max(0, Math.min(100, newValue));
        } else if (metric.id === 'response-time') {
          newValue = Math.max(50, Math.min(500, newValue));
        } else if (metric.id === 'active-users') {
          newValue = Math.max(0, Math.floor(newValue));
        } else if (metric.id === 'error-rate') {
          newValue = Math.max(0, Math.min(5, newValue));
        } else if (metric.id === 'cache-hit-rate') {
          newValue = Math.max(0, Math.min(100, newValue));
        }

        // Determine status based on value
        let status: 'good' | 'warning' | 'critical' = 'good';
        if (metric.id === 'cpu-usage' && newValue > 80) status = 'critical';
        else if (metric.id === 'cpu-usage' && newValue > 60) status = 'warning';
        else if (metric.id === 'memory-usage' && newValue > 85) status = 'critical';
        else if (metric.id === 'memory-usage' && newValue > 70) status = 'warning';
        else if (metric.id === 'response-time' && newValue > 300) status = 'critical';
        else if (metric.id === 'response-time' && newValue > 200) status = 'warning';
        else if (metric.id === 'error-rate' && newValue > 2) status = 'critical';
        else if (metric.id === 'error-rate' && newValue > 1) status = 'warning';

        // Determine trend
        const trend = change > 2 ? 'up' : change < -2 ? 'down' : 'stable';

        return {
          ...metric,
          value: newValue,
          status,
          trend,
          lastUpdated: Date.now()
        };
      }));

      // Randomly generate alerts
      if (Math.random() < 0.1) {
        generateAlert();
      }
    };

    const initializeMonitoring = () => {
      // Simulate WebSocket connection for real-time updates
      simulateWebSocketConnection();
      
      // Generate initial metrics
      generateInitialMetrics();
      
      // Start periodic updates
      intervalRef.current = setInterval(updateMetrics, 2000);
    };

    if (isVisible) {
      initializeMonitoring();
    } else {
      cleanupMonitoring();
    }

    return cleanupMonitoring;
  }, [isVisible]);

  const cleanupMonitoring = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const simulateWebSocketConnection = () => {
    setIsConnected(true);
    // In a real implementation, this would be an actual WebSocket connection
    console.log('Real-time monitoring connection established');
  };

  const generateInitialMetrics = () => {
    const initialMetrics: RealTimeMetric[] = [
      {
        id: 'cpu-usage',
        name: 'CPU Usage',
        value: Math.random() * 40 + 20,
        unit: '%',
        status: 'good',
        trend: 'stable',
        timestamp: Date.now()
      },
      {
        id: 'memory-usage',
        name: 'Memory Usage',
        value: Math.random() * 30 + 40,
        unit: '%',
        status: 'good',
        trend: 'stable',
        timestamp: Date.now()
      },
      {
        id: 'response-time',
        name: 'Response Time',
        value: Math.random() * 50 + 100,
        unit: 'ms',
        status: 'good',
        trend: 'stable',
        timestamp: Date.now()
      },
      {
        id: 'active-users',
        name: 'Active Users',
        value: Math.floor(Math.random() * 500 + 100),
        unit: '',
        status: 'good',
        trend: 'up',
        timestamp: Date.now()
      },
      {
        id: 'error-rate',
        name: 'Error Rate',
        value: Math.random() * 0.5,
        unit: '%',
        status: 'good',
        trend: 'down',
        timestamp: Date.now()
      },
      {
        id: 'cache-hit-rate',
        name: 'Cache Hit Rate',
        value: Math.random() * 20 + 80,
        unit: '%',
        status: 'good',
        trend: 'up',
        timestamp: Date.now()
      }
    ];

    setMetrics(initialMetrics);
  };


  const generateAlert = () => {
    const alertTypes = ['performance', 'security', 'error', 'network'];
    const severities = ['low', 'medium', 'high', 'critical'];
    const messages = [
      'High CPU usage detected',
      'Memory usage approaching limit',
      'Response time degradation',
      'Security vulnerability detected',
      'Database connection timeout',
      'Network latency spike',
      'Cache miss rate increased',
      'Error rate threshold exceeded'
    ];

    const newAlert: SystemAlert = {
      id: `alert-${Date.now()}`,
      type: alertTypes[Math.floor(Math.random() * alertTypes.length)] as 'performance' | 'security' | 'error' | 'network',
      severity: severities[Math.floor(Math.random() * severities.length)] as 'low' | 'medium' | 'high' | 'critical',
      message: messages[Math.floor(Math.random() * messages.length)],
      timestamp: Date.now(),
      resolved: false
    };

    setAlerts(prev => [newAlert, ...prev.slice(0, 9)]); // Keep only last 10 alerts
  };

  const resolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'critical': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      case 'stable': return <Minus className="w-4 h-4 text-gray-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'border-blue-500 bg-blue-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'high': return 'border-orange-500 bg-orange-50';
      case 'critical': return 'border-red-500 bg-red-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'performance': return <Zap className="w-4 h-4" />;
      case 'security': return <Shield className="w-4 h-4" />;
      case 'error': return <AlertTriangle className="w-4 h-4" />;
      case 'network': return <Globe className="w-4 h-4" />;
      default: return <Server className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2"
        aria-label="Toggle real-time monitoring"
      >
        <Activity className="w-5 h-5" />
        <span className="hidden sm:inline">Monitor</span>
        {isConnected && (
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        )}
      </button>

      {/* Monitoring Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-h-[80vh] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  <h3 className="font-semibold">Real-Time Monitor</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span className="text-sm">{isConnected ? 'Connected' : 'Disconnected'}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 max-h-[60vh] overflow-y-auto">
              {/* Metrics */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4" /> System Metrics
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {metrics.map(metric => (
                    <motion.div
                      key={metric.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {metric.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(metric.status)}
                          {getTrendIcon(metric.trend)}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {metric.value}{metric.unit}
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(metric.timestamp).toLocaleTimeString()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Recent Alerts
                </h4>
                <div className="space-y-2">
                  {alerts.length === 0 ? (
                    <div className="text-center text-gray-500 py-4">
                      <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <p>No alerts</p>
                    </div>
                  ) : (
                    alerts.map(alert => (
                      <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-3 rounded-lg border-l-4 ${getAlertColor(alert.severity)} ${
                          alert.resolved ? 'opacity-60' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-2 flex-1">
                            {getTypeIcon(alert.type)}
                            <div>
                              <p className="text-sm font-medium text-gray-800">
                                {alert.message}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-600">
                                  {alert.type} • {alert.severity}
                                </span>
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span className="text-xs text-gray-500">
                                  {new Date(alert.timestamp).toLocaleTimeString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          {!alert.resolved && (
                            <button
                              onClick={() => resolveAlert(alert.id)}
                              className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"
                            >
                              Resolve
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RealTimeMonitor;