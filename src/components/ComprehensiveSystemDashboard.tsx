/**
 * Comprehensive System Dashboard
 * Advanced monitoring and management interface
 */

import React, { useState, useEffect } from 'react';
import { enhancedPerformanceMonitor } from '../utils/enhancedPerformanceMonitor';
import { enhancedAccessibilityManager } from '../utils/enhancedAccessibilityManager';
import { enhancedSEOOptimizer } from '../utils/enhancedSEOOptimizer';
import { advancedErrorRecoverySystem } from '../utils/advancedErrorRecoverySystem';
import { advancedCachingSystem } from '../utils/advancedCachingSystem';
import { advancedSecurityManager } from '../utils/advancedSecurityManager';

interface DashboardTab {
  id: string;
  label: string;
  icon: string;
  component: React.ComponentType;
}

const PerformanceTab: React.FC = () => {
  const [alerts, setAlerts] = useState(enhancedPerformanceMonitor.getAlerts());

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(enhancedPerformanceMonitor.getAlerts());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Performance Alerts</h3>
      <div className="grid gap-3">
        {alerts.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No performance issues detected
          </div>
        ) : (
          alerts.slice(0, 5).map(alert => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border-l-4 ${
                alert.type === 'critical'
                  ? 'bg-red-50 border-red-500 text-red-800'
                  : alert.type === 'warning'
                  ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                  : 'bg-blue-50 border-blue-500 text-blue-800'
              }`}
            >
              <div className="font-medium">{alert.title}</div>
              <div className="text-sm mt-1">{alert.description}</div>
              <div className="text-xs mt-2 text-gray-600">
                {new Date(alert.timestamp).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const AccessibilityTab: React.FC = () => {
  const [issues, setIssues] = useState(enhancedAccessibilityManager.getIssues());
  const [metrics, setMetrics] = useState(enhancedAccessibilityManager.getMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setIssues(enhancedAccessibilityManager.getIssues());
      setMetrics(enhancedAccessibilityManager.getMetrics());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Accessibility Status</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{metrics.focusableElements}</div>
          <div className="text-sm text-blue-800">Focusable Elements</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{metrics.ariaLabels}</div>
          <div className="text-sm text-green-800">ARIA Labels</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Accessibility Issues</h4>
        {issues.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No accessibility issues found
          </div>
        ) : (
          issues.slice(0, 5).map(issue => (
            <div
              key={issue.id}
              className={`p-3 rounded-lg border-l-4 ${
                issue.severity === 'high'
                  ? 'bg-red-50 border-red-500 text-red-800'
                  : issue.severity === 'medium'
                  ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                  : 'bg-blue-50 border-blue-500 text-blue-800'
              }`}
            >
              <div className="font-medium">{issue.message}</div>
              <div className="text-sm mt-1">{issue.suggestion}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const SEOTab: React.FC = () => {
  const [issues, setIssues] = useState(enhancedSEOOptimizer.getIssues());
  const [metrics, setMetrics] = useState(enhancedSEOOptimizer.getMetrics());
  const [score, setScore] = useState(enhancedSEOOptimizer.generateSEOScore());

  useEffect(() => {
    const interval = setInterval(() => {
      setIssues(enhancedSEOOptimizer.getIssues());
      setMetrics(enhancedSEOOptimizer.getMetrics());
      setScore(enhancedSEOOptimizer.generateSEOScore());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">SEO Analysis</h3>
      
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
        <div className="text-3xl font-bold text-blue-600">{score}/100</div>
        <div className="text-sm text-gray-600">SEO Score</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-purple-600">{metrics.titleLength}</div>
          <div className="text-sm text-purple-800">Title Length</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-indigo-600">{metrics.descriptionLength}</div>
          <div className="text-sm text-indigo-800">Description Length</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">SEO Issues</h4>
        {issues.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No SEO issues found
          </div>
        ) : (
          issues.slice(0, 5).map(issue => (
            <div
              key={issue.id}
              className={`p-3 rounded-lg border-l-4 ${
                issue.impact === 'high'
                  ? 'bg-red-50 border-red-500 text-red-800'
                  : issue.impact === 'medium'
                  ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                  : 'bg-blue-50 border-blue-500 text-blue-800'
              }`}
            >
              <div className="font-medium">{issue.message}</div>
              <div className="text-sm mt-1">{issue.suggestion}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const ErrorRecoveryTab: React.FC = () => {
  const [errors, setErrors] = useState(advancedErrorRecoverySystem.getErrorReports());
  const [statistics, setStatistics] = useState(advancedErrorRecoverySystem.getErrorStatistics());

  useEffect(() => {
    const interval = setInterval(() => {
      setErrors(advancedErrorRecoverySystem.getErrorReports());
      setStatistics(advancedErrorRecoverySystem.getErrorStatistics());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Error Recovery</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-red-600">{statistics.total}</div>
          <div className="text-sm text-red-800">Total Errors</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{statistics.resolved}</div>
          <div className="text-sm text-green-800">Resolved</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{statistics.unresolved}</div>
          <div className="text-sm text-yellow-800">Unresolved</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Recent Errors</h4>
        {errors.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No errors detected
          </div>
        ) : (
          errors.slice(0, 5).map(error => (
            <div
              key={error.id}
              className={`p-3 rounded-lg border-l-4 ${
                error.resolved
                  ? 'bg-green-50 border-green-500 text-green-800'
                  : 'bg-red-50 border-red-500 text-red-800'
              }`}
            >
              <div className="font-medium">{error.error.message}</div>
              <div className="text-sm mt-1">{error.context.url}</div>
              <div className="text-xs mt-2 text-gray-600">
                {new Date(error.timestamp).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const CachingTab: React.FC = () => {
  const [statistics, setStatistics] = useState(advancedCachingSystem.getStatistics());
  const [, setCacheInfo] = useState(advancedCachingSystem.getCacheInfo());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatistics(advancedCachingSystem.getStatistics());
      setCacheInfo(advancedCachingSystem.getCacheInfo());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Caching System</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{statistics.hitRate.toFixed(2)}%</div>
          <div className="text-sm text-blue-800">Hit Rate</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{formatBytes(statistics.totalSize)}</div>
          <div className="text-sm text-green-800">Cache Size</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-purple-600">{statistics.hits}</div>
          <div className="text-sm text-purple-800">Cache Hits</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-orange-600">{statistics.misses}</div>
          <div className="text-sm text-orange-800">Cache Misses</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-xl font-bold text-red-600">{statistics.evictions}</div>
          <div className="text-sm text-red-800">Evictions</div>
        </div>
      </div>
    </div>
  );
};

const SecurityTab: React.FC = () => {
  const [events, setEvents] = useState(advancedSecurityManager.getSecurityEvents());
  const [metrics, setMetrics] = useState(advancedSecurityManager.getSecurityMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(advancedSecurityManager.getSecurityEvents());
      setMetrics(advancedSecurityManager.getSecurityMetrics());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Security Monitor</h3>
      
      <div className={`p-4 rounded-lg ${
        metrics.threatLevel === 'critical' ? 'bg-red-50 border-red-500' :
        metrics.threatLevel === 'high' ? 'bg-orange-50 border-orange-500' :
        metrics.threatLevel === 'medium' ? 'bg-yellow-50 border-yellow-500' :
        'bg-green-50 border-green-500'
      } border-l-4`}>
        <div className="text-xl font-bold capitalize">{metrics.threatLevel} Threat Level</div>
        <div className="text-sm text-gray-600">Security Status</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{metrics.totalEvents}</div>
          <div className="text-sm text-blue-800">Total Events</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-red-600">{metrics.blockedEvents}</div>
          <div className="text-sm text-red-800">Blocked Events</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Recent Security Events</h4>
        {events.length === 0 ? (
          <div className="text-green-600 bg-green-50 p-4 rounded-lg">
            ✅ No security events detected
          </div>
        ) : (
          events.slice(0, 5).map(event => (
            <div
              key={event.id}
              className={`p-3 rounded-lg border-l-4 ${
                event.severity === 'critical'
                  ? 'bg-red-50 border-red-500 text-red-800'
                  : event.severity === 'high'
                  ? 'bg-orange-50 border-orange-500 text-orange-800'
                  : event.severity === 'medium'
                  ? 'bg-yellow-50 border-yellow-500 text-yellow-800'
                  : 'bg-blue-50 border-blue-500 text-blue-800'
              }`}
            >
              <div className="font-medium">{event.description}</div>
              <div className="text-sm mt-1">Type: {event.type} | Severity: {event.severity}</div>
              <div className="text-xs mt-2 text-gray-600">
                {new Date(event.timestamp).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const ComprehensiveSystemDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('performance');

  const tabs: DashboardTab[] = [
    { id: 'performance', label: 'Performance', icon: '⚡', component: PerformanceTab },
    { id: 'accessibility', label: 'Accessibility', icon: '♿', component: AccessibilityTab },
    { id: 'seo', label: 'SEO', icon: '🔍', component: SEOTab },
    { id: 'errors', label: 'Error Recovery', icon: '🛠️', component: ErrorRecoveryTab },
    { id: 'caching', label: 'Caching', icon: '💾', component: CachingTab },
    { id: 'security', label: 'Security', icon: '🔒', component: SecurityTab },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || PerformanceTab;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive System Dashboard</h2>
        <p className="text-gray-600">Advanced monitoring and management interface</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="border-t pt-6">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default ComprehensiveSystemDashboard;