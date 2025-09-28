/**
 * Advanced Monitoring Dashboard
 * Comprehensive monitoring and analytics dashboard for the Zion Tech Group website
 */

import React, { useState, useEffect } from 'react';
import { advancedAnalytics } from '../utils/advancedAnalytics';
import { advancedPerformanceOptimizer } from '../utils/advancedPerformanceOptimizer';
import { advancedSEOOptimizer } from '../utils/advancedSEOOptimizer';
import { advancedAccessibilityEnhancer } from '../utils/advancedAccessibilityEnhancer';
import { advancedSecurityManager } from '../utils/advancedSecurityManager';

interface MonitoringDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function AdvancedMonitoringDashboard({ isVisible, onClose }: MonitoringDashboardProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [performanceData, setPerformanceData] = useState<any>(null);
  const [seoData, setSeoData] = useState<any>(null);
  const [accessibilityData, setAccessibilityData] = useState<any>(null);
  const [securityData, setSecurityData] = useState<any>(null);
  const [isRealTime, setIsRealTime] = useState(false);

  useEffect(() => {
    if (isVisible) {
      updateData();
      
      if (isRealTime) {
        const interval = setInterval(updateData, 5000);
        return () => clearInterval(interval);
      }
    }
  }, [isVisible, isRealTime]);

  const updateData = () => {
    setAnalyticsData(advancedAnalytics.getMetrics());
    setPerformanceData(advancedPerformanceOptimizer.getMetrics());
    setSeoData(advancedSEOOptimizer.getCurrentPageData());
    setAccessibilityData(advancedAccessibilityEnhancer.getMetrics());
    setSecurityData(advancedSecurityManager.getMetrics());
  };

  if (!isVisible) return <></>;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'seo', label: 'SEO', icon: '🔍' },
    { id: 'accessibility', label: 'Accessibility', icon: '♿' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'errors', label: 'Errors', icon: '❌' }
  ];

  const renderOverviewTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">System Overview</h3>
            <p className="text-blue-100">Real-time monitoring and analytics dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={isRealTime}
                onChange={(e) => setIsRealTime(e.target.checked)}
                className="mr-2"
              />
              Real-time Updates
            </label>
            <button
              onClick={updateData}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Performance Score</p>
              <p className="text-3xl font-bold text-green-600">
                {performanceData ? advancedPerformanceOptimizer.getPerformanceScore() : 'N/A'}
              </p>
            </div>
            <div className="text-4xl">⚡</div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${performanceData ? advancedPerformanceOptimizer.getPerformanceScore() : 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Accessibility Score</p>
              <p className="text-3xl font-bold text-purple-600">
                {accessibilityData?.overallScore?.toFixed(1) || 'N/A'}
              </p>
            </div>
            <div className="text-4xl">♿</div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${accessibilityData?.overallScore || 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Security Score</p>
              <p className="text-3xl font-bold text-red-600">
                {securityData?.securityScore || 'N/A'}
              </p>
            </div>
            <div className="text-4xl">🔒</div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-red-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${securityData?.securityScore || 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Page Views</p>
              <p className="text-3xl font-bold text-blue-600">
                {analyticsData?.pageViews || 'N/A'}
              </p>
            </div>
            <div className="text-4xl">📊</div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Bounce Rate: {analyticsData?.bounceRate?.toFixed(1) || 'N/A'}%
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Recent Events</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {advancedAnalytics.getEvents().slice(-10).map((event, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <span className="font-medium">{event.category}</span>
                  <span className="text-gray-500 ml-2">{event.action}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">System Health</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Performance Monitoring</span>
              <span className="text-green-600">✓ Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Analytics Tracking</span>
              <span className="text-green-600">✓ Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Error Tracking</span>
              <span className="text-green-600">✓ Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Security Monitoring</span>
              <span className="text-green-600">✓ Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Accessibility Monitoring</span>
              <span className="text-green-600">✓ Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Performance Monitoring</h3>
        <p className="text-green-100">Real-time performance metrics and Core Web Vitals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Core Web Vitals</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className="font-mono">{performanceData?.fcp?.toFixed(2) || 'N/A'}ms</span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className="font-mono">{performanceData?.lcp?.toFixed(2) || 'N/A'}ms</span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className="font-mono">{performanceData?.fid?.toFixed(2) || 'N/A'}ms</span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className="font-mono">{performanceData?.cls?.toFixed(3) || 'N/A'}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Performance Score</h4>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {advancedPerformanceOptimizer.getPerformanceScore()}/100
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${advancedPerformanceOptimizer.getPerformanceScore()}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Optimizations</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Image Optimization
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Code Splitting
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Lazy Loading
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Resource Prefetching
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Critical CSS
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold mb-4">Performance Report</h4>
        <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto max-h-64">
          {advancedPerformanceOptimizer.generateReport()}
        </pre>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Analytics Dashboard</h3>
        <p className="text-indigo-100">User behavior and engagement metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {analyticsData?.pageViews || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Page Views</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {analyticsData?.uniqueVisitors || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Unique Visitors</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {analyticsData?.bounceRate?.toFixed(1) || 'N/A'}%
            </div>
            <div className="text-sm text-gray-600">Bounce Rate</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {Math.round((analyticsData?.averageSessionDuration || 0) / 1000)}s
            </div>
            <div className="text-sm text-gray-600">Avg Session</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Recent Events</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {advancedAnalytics.getEvents().slice(-20).map((event, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <span className="font-medium text-sm">{event.category}</span>
                  <span className="text-gray-500 text-sm ml-2">{event.action}</span>
                  {event.label && <span className="text-gray-400 text-xs ml-2">({event.label})</span>}
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Session Information</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Session ID:</span>
              <span className="font-mono text-sm">{advancedAnalytics.getCurrentSession()?.id || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span>Device:</span>
              <span className="text-sm">{advancedAnalytics.getCurrentSession()?.device?.type || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span>OS:</span>
              <span className="text-sm">{advancedAnalytics.getCurrentSession()?.device?.os || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span>Browser:</span>
              <span className="text-sm">{advancedAnalytics.getCurrentSession()?.device?.browser || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span>Screen:</span>
              <span className="text-sm">
                {advancedAnalytics.getCurrentSession()?.device?.screen?.width || 'N/A'}x
                {advancedAnalytics.getCurrentSession()?.device?.screen?.height || 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSEOTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">SEO Monitoring</h3>
        <p className="text-green-100">Search engine optimization metrics and analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Page SEO Data</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Title:</span>
              <span className="font-mono truncate max-w-48">{seoData?.title || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span>Description:</span>
              <span className="font-mono truncate max-w-48">{seoData?.description || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span>Canonical URL:</span>
              <span className="font-mono truncate max-w-48">{seoData?.canonicalUrl || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span>Keywords:</span>
              <span className="text-sm">{seoData?.keywords?.length || 0} keywords</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">SEO Features</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Meta Tags Optimization
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Structured Data
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Open Graph Tags
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Twitter Cards
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Sitemap Generation
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Robots.txt
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderAccessibilityTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Accessibility Monitoring</h3>
        <p className="text-purple-100">Accessibility compliance and user experience metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Overall Score</h4>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {accessibilityData?.overallScore?.toFixed(1) || 'N/A'}/100
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-purple-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${accessibilityData?.overallScore || 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Keyboard Navigation</h4>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {accessibilityData?.keyboardNavigationScore || 'N/A'}/100
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${accessibilityData?.keyboardNavigationScore || 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Screen Reader Support</h4>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {accessibilityData?.screenReaderScore || 'N/A'}/100
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${accessibilityData?.screenReaderScore || 0}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold mb-4">Accessibility Report</h4>
        <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto max-h-64">
          {advancedAccessibilityEnhancer.generateReport()}
        </pre>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Security Monitoring</h3>
        <p className="text-red-100">Security threats and protection status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {securityData?.securityScore || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Security Score</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {securityData?.cspViolations || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">CSP Violations</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {securityData?.xssAttempts || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">XSS Attempts</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {securityData?.blockedRequests || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Blocked Requests</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold mb-4">Security Report</h4>
        <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto max-h-64">
          {advancedSecurityManager.generateReport()}
        </pre>
      </div>
    </div>
  );

  const renderErrorsTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Error Monitoring</h3>
        <p className="text-red-100">JavaScript errors and system issues</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold mb-4">Recent Errors</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {advancedAnalytics.getEvents()
            .filter(event => event.category === 'error')
            .slice(-10)
            .map((event, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-red-50 rounded border-l-4 border-red-400">
                <div>
                  <div className="font-medium text-red-800">{event.action}</div>
                  <div className="text-sm text-red-600">{event.label}</div>
                  {event.metadata && (
                    <div className="text-xs text-red-500 mt-1">
                      {JSON.stringify(event.metadata, null, 2)}
                    </div>
                  )}
                </div>
                <div className="text-xs text-red-500">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Advanced Monitoring Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'performance' && renderPerformanceTab()}
          {activeTab === 'analytics' && renderAnalyticsTab()}
          {activeTab === 'seo' && renderSEOTab()}
          {activeTab === 'accessibility' && renderAccessibilityTab()}
          {activeTab === 'security' && renderSecurityTab()}
          {activeTab === 'errors' && renderErrorsTab()}
        </div>
      </div>
    </div>
  );
}