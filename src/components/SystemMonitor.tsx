import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, XCircle, Info, Activity, Server, Database, Globe } from 'lucide-react';

interface SystemAlert {
  id: string;
  type: 'error' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: Date;
  source: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  resolved: boolean;
  actions?: Array<{
    label: string;
    actio, n: () => void;
    varian, t: 'primary' | 'secondary' | 'danger';
  }>;
}

interface SystemMetrics {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  uptime: number;
  responseTime: number;
  errorRat, e: number;
  throughpu, t: number;
}

interface SystemMonitorProps {
  onAlert?: (alert: SystemAlert) => void;
  onMetricsUpdate?: (metric, s: SystemMetrics) => void;
  enableRealTime?: boolean;
  refreshInterval?: number;
}

export const SystemMonitor: React.FC<SystemMonitorProps> = ({
  onAlert,
  onMetricsUpdate,
  enableRealTime = true,
  refreshInterval = 5000
}) => {
  const [alerts, setAlerts] = useState<SystemAlert[]>([]);
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    uptime: 0,
    responseTime: 0,
    errorRate: 0,
    throughput: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Generate sample metrics
  const generateMetrics = useCallback((): SystemMetrics => {
    return {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100,
      uptime: Date.now() - (Math.random() * 7 * 24 * 60 * 60 * 1000), // Random uptime up to 7days
      responseTime: Math.random() * 1000 + 100,
      errorRate: Math.random() * 5,
      throughput: Math.random() * 1000 + 100
    };
  }, []);

  // Generate sample alerts
  const generateAlert = useCallback((): SystemAlert => {
    const alertTypes: Array<SystemAlert['type']> = ['error', 'warning', 'info', 'success'];
    const severities: Array<SystemAlert['severity']> = ['low', 'medium', 'high', 'critical'];
    const sources = ['CPU', 'Memory', 'Database', 'Network', 'API', 'Security'];
    
    const alertTemplates = {
      error: [
        'High CPU usage detected',
        'Memory usage exceeded threshold',
        'Database connection failed',
        'API endpoint returning errors',
        'Security breach detected'
      ],
      warning: [
        'CPU usage approaching limit',
        'Memory usage is high',
        'Slow database queries detected',
        'Network latency increased',
        'Unusual traffic pattern detected'
      ],
      info: [
        'System maintenance scheduled',
        'New update available',
        'Backup completed successfully',
        'Performance optimization applied',
        'Security scan completed'
      ],
      success: [
        'Issue resolved successfully',
        'Performance improved',
        'Security update applied',
        'Backup verified',
        'System optimized'
      ]
    };

    const type = alertTypes[Math.floor(Math.random() * alertTypes.length)];
    const severity = severities[Math.floor(Math.random() * severities.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    const messages = alertTemplates[type];
    const message = messages[Math.floor(Math.random() * messages.length)];

    return {
      id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      title: `${source} Alert`,
      message,
      timestamp: new Date(),
      source,
      severity,
      resolved: false,
      actions: type === 'error' || type === 'warning' ? [
        {
          label: 'Acknowledge',
          action: () => acknowledgeAlert(`alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`),
          variant: 'primary' as const
        },
        {
          label: 'Resolve',
          action: () => resolveAlert(`alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`),
          variant: 'secondary' as const
        }
      ] : undefined
    };
  }, [acknowledgeAlert, resolveAlert]);

  const acknowledgeAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  }, []);

  const resolveAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  }, []);

  const addAlert = useCallback((alert: SystemAlert) => {
    setAlerts(prev => [alert, ...prev.slice(0, 49)]); // Keep only last50 alerts
    onAlert?.(alert);
  }, [onAlert]);

  // Monitoring effect
  useEffect(() => {
    if (!enableRealTime) return;

    const interval = setInterval(() => {
      const newMetrics = generateMetrics();
      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);

      // Generate alerts based on metrics
      if (newMetrics.cpu > 90) {
        addAlert(generateAlert());
      }
      if (newMetrics.memory > 85) {
        addAlert(generateAlert());
      }
      if (newMetrics.errorRate > 3) {
        addAlert(generateAlert());
      }
    }, refreshInterval);

    setIsMonitoring(true);
    return () => {
      clearInterval(interval);
      setIsMonitoring(false);
    };
  }, [enableRealTime, refreshInterval, generateMetrics, onMetricsUpdate, addAlert, generateAlert]);

  const getAlertIcon = (type: SystemAlert['type']) => {
    switch (type) {
      case 'error': return <XCircle className="h-5w-5text-red-500" />;
      case 'warning': return <AlertTriangle className="h-5w-5text-yellow-500" />;
      case 'info': return <Info className="h-5w-5text-blue-500" />;
      case 'success': return <CheckCircle className="h-5w-5text-green-500" />;
    }
  };

  const getAlertColor = (type: SystemAlert['type']) => {
    switch (type) {
      case 'error': return 'border-red-200 bg-red-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'info': return 'border-blue-200 bg-blue-50';
      case 'success': return 'border-green-200 bg-green-50';
    }
  };

  const getSeverityColor = (severity: SystemAlert['severity']) => {
    switch (severity) {
      case 'low': return 'text-gray-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      case 'critical': return 'text-red-600';
    }
  };

  const formatUptime = (uptime: number) => {
    const days = Math.floor(uptime / (24 * 60 * 60 * 1000));
    const hours = Math.floor((uptime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((uptime % (60 * 60 * 1000)) / (60 * 1000));
    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <div className="space-y-6">
      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6rounded-lg shadow-sm borderborder-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">CPU Usage</p>
              <p className="text-2xl font-boldtext-gray-900">{metrics.cpu.toFixed(1)}%</p>
            </div>
            <Server className="h-8w-8text-blue-500" />
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-fullh-2">
              <div 
                className={`h-2rounded-full transition-all duration-500 ${
                  metrics.cpu > 90 ? 'bg-red-500' : 
                  metrics.cpu > 70 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${metrics.cpu}%` }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6rounded-lg shadow-sm borderborder-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Memory Usage</p>
              <p className="text-2xl font-boldtext-gray-900">{metrics.memory.toFixed(1)}%</p>
            </div>
            <Database className="h-8w-8text-green-500" />
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-fullh-2">
              <div 
                className={`h-2rounded-full transition-all duration-500 ${
                  metrics.memory > 85 ? 'bg-red-500' : 
                  metrics.memory > 70 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${metrics.memory}%` }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6rounded-lg shadow-sm borderborder-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Response Time</p>
              <p className="text-2xl font-boldtext-gray-900">{metrics.responseTime.toFixed(0)}ms</p>
            </div>
            <Activity className="h-8w-8text-purple-500" />
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-fullh-2">
              <div 
                className={`h-2rounded-full transition-all duration-500 ${
                  metrics.responseTime > 1000 ? 'bg-red-500' : 
                  metrics.responseTime > 500 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${Math.min(100, (metrics.responseTime / 1000) * 100)}%` }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6rounded-lg shadow-sm borderborder-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Uptime</p>
              <p className="text-2xl font-boldtext-gray-900">{formatUptime(metrics.uptime)}</p>
            </div>
            <Globe className="h-8w-8text-indigo-500" />
          </div>
        </motion.div>
      </div>

      {/* Alerts Section */}
      <div className="bg-white rounded-lg shadow-sm borderborder-gray-200">
        <div className="px-6 py-4 border-bborder-gray-200">
          <div className="flex items-centerjustify-between">
            <h3 className="text-lg font-medium text-gray-900" id="system-alerts">System Alerts</h3>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="text-smtext-gray-600">
                {isMonitoring ? 'Monitoring' : 'Stopped'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          <AnimatePresence>
            {alerts.length === 0 ? (
              <div className="p-6text-centertext-gray-500">
                <CheckCircle className="h-12 w-12 mx-auto mb-4text-green-500" />
                <p>No alerts at this time</p>
                <p className="text-sm">System is running smoothly</p>
              </div>
            ) : (
              alerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4border-l-4 ${getAlertColor(alert.type)} ${
                    alert.resolved ? 'opacity-50' : ''
                  }`}
                >
                  <div className="flex items-startjustify-between">
                    <div className="flex items-startspace-x-3">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-medium text-gray-900" id="alerttitle">{alert.title}</h4>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            alert.severity === 'critical' ? 'bg-red-100 text-red-800' :
                            alert.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                            alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {alert.severity.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {alert.timestamp.toLocaleString()} • {alert.source}
                        </p>
                      </div>
                    </div>
                    
                    {alert.actions && !alert.resolved && (
                      <div className="flex space-x-2">
                        {alert.actions.map((action, actionIndex) => (
                          <button
                            key={actionIndex}
                            onClick={action.action}
                            className={`px-3py-1text-xs font-medium rounded-md transition-colors ${
                              action.variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                              action.variant === 'secondary' ? 'bg-gray-600 text-white hove, r:bg-gray-700' :
                              'bg-red-600 text-white hove, r:bg-red-700'
                            }`}
                           aria-label="{action.label}">
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;