import React, { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer, PerformanceMetrics } from '../utils/performanceOptimizer';
import { accessibilityOptimizer, AccessibilityMetrics } from '../utils/accessibilityOptimizer';
import { errorRecoverySystem } from '../utils/errorRecovery';

interface SystemStatus {
  performance: PerformanceMetrics;
  accessibility: AccessibilityMetrics;
  errors: number;
  uptime: number;
  lastUpdate: Date;
}

interface MonitoringConfig {
  updateInterval: number;
  enableAlerts: boolean;
  enableReporting: boolean;
  performanceThresholds: {
    loadTime: number;
    memoryUsage: number;
    bundleSize: number;
  };
  accessibilityThresholds: {
    minFocusableElements: number;
    minAriaLabels: number;
    minContrastRatio: number;
  };
}

const ComprehensiveSystemMonitor: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    performance: {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0
    },
    accessibility: {
      focusableElements: 0,
      ariaLabels: 0,
      colorContrastRatio: 0,
      keyboardTraps: 0,
      screenReaderCompatible: false,
      wcagCompliance: 'None'
    },
    errors: 0,
    uptime: 0,
    lastUpdate: new Date()
  });

  const [config, setConfig] = useState<MonitoringConfig>({
    updateInterval: 5000,
    enableAlerts: true,
    enableReporting: true,
    performanceThresholds: {
      loadTime: 3000,
      memoryUsage: 100,
      bundleSize: 500 * 1024
    },
    accessibilityThresholds: {
      minFocusableElements: 10,
      minAriaLabels: 5,
      minContrastRatio: 4.5
    }
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const updateSystemStatus = useCallback(() => {
    try {
      const performanceMetrics = performanceOptimizer.getMetrics();
      const accessibilityMetrics = accessibilityOptimizer.getMetrics();
      const errorCount = errorRecoverySystem.getErrorCount();

      const newStatus: SystemStatus = {
        performance: performanceMetrics,
        accessibility: accessibilityMetrics,
        errors: errorCount,
        uptime: Date.now() - performance.now(),
        lastUpdate: new Date()
      };

      setSystemStatus(newStatus);

      // Check for alerts
      if (config.enableAlerts) {
        checkForAlerts(newStatus);
      }

      // Generate report if enabled
      if (config.enableReporting && newStatus.lastUpdate.getSeconds() % 60 === 0) {
        generateReport(newStatus);
      }
    } catch (error) {
      console.error('Error updating system status:', error);
      errorRecoverySystem.handleError(error as Error, { component: 'ComprehensiveSystemMonitor' });
    }
  }, [config]);

  const checkForAlerts = useCallback((status: SystemStatus) => {
    const newAlerts: string[] = [];

    // Performance alerts
    if (status.performance.loadTime > config.performanceThresholds.loadTime) {
      newAlerts.push(`⚠️ Load time exceeded threshold: ${status.performance.loadTime.toFixed(0)}ms`);
    }

    if (status.performance.memoryUsage > config.performanceThresholds.memoryUsage) {
      newAlerts.push(`⚠️ Memory usage exceeded threshold: ${status.performance.memoryUsage.toFixed(1)}MB`);
    }

    if (status.performance.bundleSize > config.performanceThresholds.bundleSize) {
      newAlerts.push(`⚠️ Bundle size exceeded threshold: ${(status.performance.bundleSize / 1024).toFixed(1)}KB`);
    }

    // Accessibility alerts
    if (status.accessibility.focusableElements < config.accessibilityThresholds.minFocusableElements) {
      newAlerts.push(`⚠️ Low number of focusable elements: ${status.accessibility.focusableElements}`);
    }

    if (status.accessibility.ariaLabels < config.accessibilityThresholds.minAriaLabels) {
      newAlerts.push(`⚠️ Low number of ARIA labels: ${status.accessibility.ariaLabels}`);
    }

    if (status.accessibility.colorContrastRatio < config.accessibilityThresholds.minContrastRatio) {
      newAlerts.push(`⚠️ Low color contrast ratio: ${status.accessibility.colorContrastRatio.toFixed(2)}`);
    }

    // Error alerts
    if (status.errors > 10) {
      newAlerts.push(`🚨 High error count: ${status.errors}`);
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
      
      // Announce alerts to screen readers
      newAlerts.forEach(alert => {
        accessibilityOptimizer.announce(alert);
      });
    }
  }, [config]);

  const generateReport = useCallback((status: SystemStatus) => {
    const report = {
      timestamp: status.lastUpdate.toISOString(),
      performance: performanceOptimizer.generateReport(),
      accessibility: accessibilityOptimizer.generateReport(),
      errors: status.errors,
      uptime: status.uptime
    };

    // Log report (in production, send to analytics service)
    console.log('System Report:', report);

    // Store in localStorage for debugging
    const reports = JSON.parse(localStorage.getItem('systemReports') || '[]');
    reports.push(report);
    
    // Keep only last 100 reports
    if (reports.length > 100) {
      reports.splice(0, reports.length - 100);
    }
    
    localStorage.setItem('systemReports', JSON.stringify(reports));
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    updateSystemStatus();
  }, [updateSystemStatus]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  const exportReport = useCallback(() => {
    const reports = JSON.parse(localStorage.getItem('systemReports') || '[]');
    const dataStr = JSON.stringify(reports, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `system-report-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(updateSystemStatus, config.updateInterval);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, config.updateInterval, updateSystemStatus]);

  const getStatusColor = (value: number, threshold: number, reverse = false) => {
    const ratio = reverse ? threshold / value : value / threshold;
    if (ratio >= 1) return 'text-green-600';
    if (ratio >= 0.8) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getWCAGColor = (compliance: string) => {
    switch (compliance) {
      case 'AAA': return 'text-green-600';
      case 'AA': return 'text-yellow-600';
      case 'A': return 'text-orange-600';
      default: return 'text-red-600';
    }
  };

  return (
    <div className="comprehensive-system-monitor bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Comprehensive System Monitor</h2>
        <div className="flex gap-2">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`px-4 py-2 rounded font-medium ${
              isMonitoring 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
            aria-label={isMonitoring ? 'Stop monitoring' : 'Start monitoring'}
          >
            {isMonitoring ? 'Stop' : 'Start'} Monitoring
          </button>
          <button
            onClick={exportReport}
            className="px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600"
            aria-label="Export system report"
          >
            Export Report
          </button>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800">System Uptime</h3>
          <p className="text-2xl font-bold text-blue-600">
            {Math.floor(systemStatus.uptime / 1000)}s
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-red-800">Errors</h3>
          <p className="text-2xl font-bold text-red-600">{systemStatus.errors}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-800">WCAG Compliance</h3>
          <p className={`text-2xl font-bold ${getWCAGColor(systemStatus.accessibility.wcagCompliance)}`}>
            {systemStatus.accessibility.wcagCompliance}
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-purple-800">Last Update</h3>
          <p className="text-sm font-bold text-purple-600">
            {systemStatus.lastUpdate.toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Load Time</h4>
            <p className={`text-xl font-bold ${getStatusColor(systemStatus.performance.loadTime, config.performanceThresholds.loadTime, true)}`}>
              {systemStatus.performance.loadTime.toFixed(0)}ms
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Memory Usage</h4>
            <p className={`text-xl font-bold ${getStatusColor(systemStatus.performance.memoryUsage, config.performanceThresholds.memoryUsage)}`}>
              {systemStatus.performance.memoryUsage.toFixed(1)}MB
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Bundle Size</h4>
            <p className={`text-xl font-bold ${getStatusColor(systemStatus.performance.bundleSize, config.performanceThresholds.bundleSize)}`}>
              {(systemStatus.performance.bundleSize / 1024).toFixed(1)}KB
            </p>
          </div>
        </div>
      </div>

      {/* Accessibility Metrics */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Accessibility Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Focusable Elements</h4>
            <p className={`text-xl font-bold ${getStatusColor(systemStatus.accessibility.focusableElements, config.accessibilityThresholds.minFocusableElements)}`}>
              {systemStatus.accessibility.focusableElements}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">ARIA Labels</h4>
            <p className={`text-xl font-bold ${getStatusColor(systemStatus.accessibility.ariaLabels, config.accessibilityThresholds.minAriaLabels)}`}>
              {systemStatus.accessibility.ariaLabels}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Color Contrast</h4>
            <p className={`text-xl font-bold ${getStatusColor(systemStatus.accessibility.colorContrastRatio, config.accessibilityThresholds.minContrastRatio)}`}>
              {systemStatus.accessibility.colorContrastRatio.toFixed(2)}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Screen Reader</h4>
            <p className={`text-xl font-bold ${systemStatus.accessibility.screenReaderCompatible ? 'text-green-600' : 'text-red-600'}`}>
              {systemStatus.accessibility.screenReaderCompatible ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Alerts</h3>
            <button
              onClick={clearAlerts}
              className="text-sm text-gray-600 hover:text-gray-800"
              aria-label="Clear all alerts"
            >
              Clear All
            </button>
          </div>
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded"
                role="alert"
                aria-live="polite"
              >
                <p className="text-sm text-yellow-800">{alert}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Configuration */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Update Interval (ms)
            </label>
            <input
              type="number"
              value={config.updateInterval}
              onChange={(e) => setConfig(prev => ({ ...prev, updateInterval: Number(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1000"
              max="60000"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.enableAlerts}
                onChange={(e) => setConfig(prev => ({ ...prev, enableAlerts: e.target.checked }))}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Enable Alerts</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.enableReporting}
                onChange={(e) => setConfig(prev => ({ ...prev, enableReporting: e.target.checked }))}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Enable Reporting</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSystemMonitor;