/**
 * Comprehensive Monitoring Dashboard
 * Advanced monitoring and analytics dashboard component
 */

import React, { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer, PerformanceMetrics } from '../utils/performanceOptimizations';
import { accessibilityEnhancer, AccessibilityMetrics } from '../utils/accessibilityEnhancements';
import { securityEnhancer, SecurityMetrics } from '../utils/securityEnhancements';

interface DashboardMetrics {
  performance: PerformanceMetrics;
  accessibility: AccessibilityMetrics;
  security: SecurityMetrics;
  timestamp: number;
}

interface MonitoringConfig {
  refreshInterval: number;
  enableRealTimeUpdates: boolean;
  enableAlerts: boolean;
  alertThresholds: {
    performance: number;
    accessibility: number;
    security: number;
  };
}

const ComprehensiveMonitoringDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [config, setConfig] = useState<MonitoringConfig>({
    refreshInterval: 5000,
    enableRealTimeUpdates: true,
    enableAlerts: true,
    alertThresholds: {
      performance: 80,
      accessibility: 85,
      security: 90,
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [alerts, setAlerts] = useState<string[]>([]);

  const collectMetrics = useCallback((): DashboardMetrics => {
    return {
      performance: performanceOptimizer.getMetrics(),
      accessibility: accessibilityEnhancer.getMetrics(),
      security: securityEnhancer.getMetrics(),
      timestamp: Date.now(),
    };
  }, []);

  const checkAlerts = useCallback((currentMetrics: DashboardMetrics) => {
    if (!config.enableAlerts) return;

    const newAlerts: string[] = [];

    // Performance alerts
    if (currentMetrics.performance.loadTime > config.alertThresholds.performance * 10) {
      newAlerts.push(`High load time detected: ${currentMetrics.performance.loadTime.toFixed(2)}ms`);
    }

    if (currentMetrics.performance.memoryUsage > 100) {
      newAlerts.push(`High memory usage: ${currentMetrics.performance.memoryUsage}MB`);
    }

    // Accessibility alerts
    if (currentMetrics.accessibility.overallScore < config.alertThresholds.accessibility) {
      newAlerts.push(`Low accessibility score: ${currentMetrics.accessibility.overallScore.toFixed(1)}%`);
    }

    // Security alerts
    if (currentMetrics.security.securityScore < config.alertThresholds.security) {
      newAlerts.push(`Security score below threshold: ${currentMetrics.security.securityScore.toFixed(1)}%`);
    }

    if (currentMetrics.security.cspViolations > 0) {
      newAlerts.push(`${currentMetrics.security.cspViolations} CSP violations detected`);
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
    }
  }, [config]);

  const refreshMetrics = useCallback(() => {
    setIsLoading(true);
    try {
      const newMetrics = collectMetrics();
      setMetrics(newMetrics);
      checkAlerts(newMetrics);
    } catch (error) {
      console.error('Error collecting metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, [collectMetrics, checkAlerts]);

  useEffect(() => {
    refreshMetrics();

    if (config.enableRealTimeUpdates) {
      const interval = setInterval(refreshMetrics, config.refreshInterval);
      return () => clearInterval(interval);
    }
  }, [config.enableRealTimeUpdates, config.refreshInterval, refreshMetrics]);

  const getScoreColor = (score: number, threshold: number): string => {
    if (score >= threshold) return 'text-green-600';
    if (score >= threshold * 0.8) return 'text-yellow-600';
    return 'text-red-600';
  };


  if (isLoading && !metrics) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No metrics available</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Comprehensive Monitoring Dashboard</h1>
        <div className="flex space-x-4">
          <button
            onClick={refreshMetrics}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Real-time:</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={config.enableRealTimeUpdates}
                onChange={(e) => setConfig(prev => ({ ...prev, enableRealTimeUpdates: e.target.checked }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Alerts</h3>
          <ul className="space-y-1">
            {alerts.slice(-5).map((alert, index) => (
              <li key={index} className="text-red-700 text-sm">
                {alert}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className="font-medium">{metrics.performance.loadTime.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Render Time:</span>
              <span className="font-medium">{metrics.performance.renderTime.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Memory Usage:</span>
              <span className="font-medium">{metrics.performance.memoryUsage}MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bundle Size:</span>
              <span className="font-medium">{metrics.performance.bundleSize}KB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cache Hit Rate:</span>
              <span className="font-medium">{metrics.performance.cacheHitRate.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Accessibility Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Overall Score:</span>
              <span className={`font-medium ${getScoreColor(metrics.accessibility.overallScore, config.alertThresholds.accessibility)}`}>
                {metrics.accessibility.overallScore.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Keyboard Navigation:</span>
              <span className="font-medium">{metrics.accessibility.keyboardNavigationScore.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Screen Reader:</span>
              <span className="font-medium">{metrics.accessibility.screenReaderCompatibility.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Color Contrast:</span>
              <span className="font-medium">{metrics.accessibility.colorContrastRatio.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Focus Indicators:</span>
              <span className="font-medium">{metrics.accessibility.focusIndicatorVisibility.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Security Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Security</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Security Score:</span>
              <span className={`font-medium ${getScoreColor(metrics.security.securityScore, config.alertThresholds.security)}`}>
                {metrics.security.securityScore.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CSP Violations:</span>
              <span className="font-medium">{metrics.security.cspViolations}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">XSS Attempts:</span>
              <span className="font-medium">{metrics.security.xssAttempts}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CSRF Attempts:</span>
              <span className="font-medium">{metrics.security.csrfAttempts}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Suspicious Activity:</span>
              <span className="font-medium">{metrics.security.suspiciousActivity}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Panel */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Refresh Interval (ms)
            </label>
            <input
              type="number"
              value={config.refreshInterval}
              onChange={(e) => setConfig(prev => ({ ...prev, refreshInterval: parseInt(e.target.value) || 5000 }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Performance Threshold (%)
            </label>
            <input
              type="number"
              value={config.alertThresholds.performance}
              onChange={(e) => setConfig(prev => ({ 
                ...prev, 
                alertThresholds: { ...prev.alertThresholds, performance: parseInt(e.target.value) || 80 }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Accessibility Threshold (%)
            </label>
            <input
              type="number"
              value={config.alertThresholds.accessibility}
              onChange={(e) => setConfig(prev => ({ 
                ...prev, 
                alertThresholds: { ...prev.alertThresholds, accessibility: parseInt(e.target.value) || 85 }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Security Threshold (%)
            </label>
            <input
              type="number"
              value={config.alertThresholds.security}
              onChange={(e) => setConfig(prev => ({ 
                ...prev, 
                alertThresholds: { ...prev.alertThresholds, security: parseInt(e.target.value) || 90 }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Report</h3>
          <pre className="text-xs text-gray-600 whitespace-pre-wrap">
            {performanceOptimizer.generateReport()}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibility Report</h3>
          <pre className="text-xs text-gray-600 whitespace-pre-wrap">
            {accessibilityEnhancer.generateReport()}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Report</h3>
          <pre className="text-xs text-gray-600 whitespace-pre-wrap">
            {securityEnhancer.generateReport()}
          </pre>
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500">
        Last updated: {new Date(metrics.timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default ComprehensiveMonitoringDashboard;