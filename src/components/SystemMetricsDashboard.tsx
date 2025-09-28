import React, { useState, useEffect } from 'react';
import AdvancedPerformanceMonitor from '../utils/advancedPerformanceMonitor';
import { AccessibilityEnhancer } from '../utils/accessibilityEnhancer';
import SecurityEnhancer from '../utils/securityEnhancer';

interface SystemMetricsDashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export const SystemMetricsDashboard: React.FC<SystemMetricsDashboardProps> = ({
  isVisible = false,
  onClose
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState<Record<string, number> | null>(null);
  const [accessibilityMetrics, setAccessibilityMetrics] = useState<Record<string, number> | null>(null);
  const [securityMetrics, setSecurityMetrics] = useState<Record<string, number> | null>(null);
  const [activeTab, setActiveTab] = useState<'performance' | 'accessibility' | 'security'>('performance');

  useEffect(() => {
    if (isVisible) {
      const updateMetrics = () => {
        const perfMonitor = AdvancedPerformanceMonitor.getInstance();
        const accEnhancer = AccessibilityEnhancer.getInstance();
        const secEnhancer = SecurityEnhancer.getInstance();

        const perfMetrics = perfMonitor.getLatestMetrics();
        const accMetrics = accEnhancer.getMetrics();
        const secMetrics = secEnhancer.getMetrics();
        
        setPerformanceMetrics(perfMetrics ? Object.fromEntries(Object.entries(perfMetrics).map(([k, v]) => [k, typeof v === 'number' ? v : 0])) : null);
        setAccessibilityMetrics(accMetrics ? Object.fromEntries(Object.entries(accMetrics).map(([k, v]) => [k, typeof v === 'number' ? v : 0])) : null);
        setSecurityMetrics(secMetrics ? Object.fromEntries(Object.entries(secMetrics).map(([k, v]) => [k, typeof v === 'number' ? v : 0])) : null);
      };

      updateMetrics();
      const interval = setInterval(updateMetrics, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const formatMetric = (value: number, unit: string = '') => {
    if (typeof value !== 'number') return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">System Metrics Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close dashboard"
          >
            ×
          </button>
        </div>

        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'performance'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Performance
          </button>
          <button
            onClick={() => setActiveTab('accessibility')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'accessibility'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Accessibility
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'security'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Security
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {activeTab === 'performance' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
              
              {performanceMetrics ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Load Time</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatMetric(performanceMetrics.loadTime, 'ms')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Largest Contentful Paint</h4>
                    <p className="text-2xl font-bold text-green-600">
                      {formatMetric(performanceMetrics.largestContentfulPaint, 'ms')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">First Input Delay</h4>
                    <p className="text-2xl font-bold text-purple-600">
                      {formatMetric(performanceMetrics.firstInputDelay, 'ms')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Cumulative Layout Shift</h4>
                    <p className="text-2xl font-bold text-orange-600">
                      {formatMetric(performanceMetrics.cumulativeLayoutShift)}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Memory Usage</h4>
                    <p className="text-2xl font-bold text-red-600">
                      {formatMetric(performanceMetrics.memoryUsage * 100, '%')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Network Latency</h4>
                    <p className="text-2xl font-bold text-indigo-600">
                      {formatMetric(performanceMetrics.networkLatency, 'ms')}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">No performance metrics available</p>
              )}
            </div>
          )}

          {activeTab === 'accessibility' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Accessibility Metrics</h3>
              
              {accessibilityMetrics ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Keyboard Navigation</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      {accessibilityMetrics.keyboardNavigationUsage}
                    </p>
                    <p className="text-sm text-gray-500">Usage count</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Screen Reader Usage</h4>
                    <p className="text-2xl font-bold text-green-600">
                      {accessibilityMetrics.screenReaderUsage}
                    </p>
                    <p className="text-sm text-gray-500">Detected</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">High Contrast Mode</h4>
                    <p className="text-2xl font-bold text-purple-600">
                      {accessibilityMetrics.highContrastUsage}
                    </p>
                    <p className="text-sm text-gray-500">Detected</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Reduced Motion</h4>
                    <p className="text-2xl font-bold text-orange-600">
                      {accessibilityMetrics.reducedMotionUsage}
                    </p>
                    <p className="text-sm text-gray-500">Detected</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Aria Labels</h4>
                    <p className="text-2xl font-bold text-red-600">
                      {accessibilityMetrics.ariaLabelsUsage}
                    </p>
                    <p className="text-sm text-gray-500">Added</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700">Skip Links</h4>
                    <p className="text-2xl font-bold text-indigo-600">
                      {accessibilityMetrics.skipLinksUsage}
                    </p>
                    <p className="text-sm text-gray-500">Used</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">No accessibility metrics available</p>
              )}
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Security Metrics</h3>
              
              {securityMetrics ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-2">Security Score</h4>
                    <p className={`text-3xl font-bold ${getScoreColor(securityMetrics.securityScore)}`}>
                      {securityMetrics.securityScore}/100
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-medium text-red-700">XSS Attempts</h4>
                      <p className="text-2xl font-bold text-red-600">
                        {securityMetrics.xssAttempts}
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-medium text-orange-700">CSRF Attempts</h4>
                      <p className="text-2xl font-bold text-orange-600">
                        {securityMetrics.csrfAttempts}
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-medium text-yellow-700">Clickjacking Attempts</h4>
                      <p className="text-2xl font-bold text-yellow-600">
                        {securityMetrics.clickjackingAttempts}
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-700">Suspicious Activity</h4>
                      <p className="text-2xl font-bold text-purple-600">
                        {securityMetrics.suspiciousActivity}
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-700">Blocked Requests</h4>
                      <p className="text-2xl font-bold text-blue-600">
                        {securityMetrics.blockedRequests}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-700">Last Security Event</h4>
                      <p className="text-sm text-gray-600">
                        {securityMetrics.lastSecurityEvent 
                          ? new Date(securityMetrics.lastSecurityEvent).toLocaleString()
                          : 'None'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">No security metrics available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemMetricsDashboard;