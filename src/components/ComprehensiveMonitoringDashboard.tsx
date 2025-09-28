import React, { useState, useEffect, useCallback } from 'react';
import { 
  ComprehensiveTestingSuite, 
  TestSuite, 
  TestResult 
} from '../utils/comprehensiveTestingSystem';
import { 
  useSEOOptimization 
} from '../utils/seoOptimizations';
import { 
  useKeyboardNavigation,
  useFocusManagement,
  useScreenReaderAnnouncements,
  useHighContrastMode,
  useReducedMotion
} from '../utils/accessibilityOptimizations';

/**
 * Comprehensive Monitoring Dashboard
 * Real-time monitoring with automated testing and reporting
 */
export const ComprehensiveMonitoringDashboard: React.FC = () => {
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testSuite, setTestSuite] = useState<TestSuite | null>(null);
  const [testHistory, setTestHistory] = useState<TestSuite[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(30000); // 30 seconds

  // Initialize SEO optimization
  const seoOptimization = useSEOOptimization();
  
  // Initialize accessibility hooks
  const keyboardNavigation = useKeyboardNavigation();
  const focusManagement = useFocusManagement();
  const screenReaderAnnouncements = useScreenReaderAnnouncements();
  const isHighContrast = useHighContrastMode();
  const prefersReducedMotion = useReducedMotion();

  /**
   * Run comprehensive test suite
   */
  const runTestSuite = useCallback(async () => {
    if (isRunningTests) return;
    
    setIsRunningTests(true);
    try {
      const suite = await ComprehensiveTestingSuite.runCompleteSuite();
      setTestSuite(suite);
      setTestHistory(prev => [suite, ...prev.slice(0, 9)]); // Keep last 10 tests
      
      // Announce results to screen reader
      const passCount = suite.tests.filter(t => t.status === 'pass').length;
      const failCount = suite.tests.filter(t => t.status === 'fail').length;
      screenReaderAnnouncements.announceToScreenReader(
        `Testing complete. ${passCount} tests passed, ${failCount} tests failed.`,
        failCount > 0 ? 'assertive' : 'polite'
      );
      
    } catch (error) {
      console.error('Error running test suite:', error);
      screenReaderAnnouncements.announceToScreenReader(
        'Error occurred while running tests.',
        'assertive'
      );
    } finally {
      setIsRunningTests(false);
    }
  }, [isRunningTests, screenReaderAnnouncements]);

  /**
   * Download test report
   */
  const downloadReport = useCallback(() => {
    if (!testSuite) return;
    
    const report = ComprehensiveTestingSuite.generateReport(testSuite);
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `test-report-${testSuite.timestamp.toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [testSuite]);

  /**
   * Export test data as JSON
   */
  const exportTestData = useCallback(() => {
    const data = {
      currentTestSuite: testSuite,
      testHistory,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `test-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [testSuite, testHistory]);

  // Auto-refresh effect
  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      runTestSuite();
    }, refreshInterval);
    
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, runTestSuite]);

  // Initial test run
  useEffect(() => {
    runTestSuite();
  }, [runTestSuite]);

  const getStatusColor = (status: TestResult['status']) => {
    switch (status) {
      case 'pass': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'fail': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'pass': return '✅';
      case 'warning': return '⚠️';
      case 'fail': return '❌';
      default: return '❓';
    }
  };

  const getOverallScore = () => {
    if (!testSuite) return 0;
    
    const totalTests = testSuite.tests.length;
    const passCount = testSuite.tests.filter(t => t.status === 'pass').length;
    const warningCount = testSuite.tests.filter(t => t.status === 'warning').length;
    
    // Calculate weighted score: pass = 1, warning = 0.5, fail = 0
    const score = (passCount + (warningCount * 0.5)) / totalTests * 100;
    return Math.round(score);
  };

  const overallScore = getOverallScore();
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="comprehensive-monitoring-dashboard p-6 bg-white rounded-lg shadow-lg max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Comprehensive Monitoring Dashboard
            </h2>
            <p className="text-gray-600">
              Automated testing and real-time monitoring of performance, accessibility, and SEO
            </p>
          </div>
          
          {/* Overall Score */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${getScoreBgColor(overallScore)}`}>
            <span className={`text-2xl font-bold ${getScoreColor(overallScore)}`}>
              {overallScore}
            </span>
            <span className="ml-2 text-gray-700 font-medium">Overall Score</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={runTestSuite}
            disabled={isRunningTests}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              isRunningTests
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            aria-label={isRunningTests ? 'Tests are running' : 'Run comprehensive tests'}
          >
            {isRunningTests ? '🔄 Running Tests...' : '🧪 Run Tests'}
          </button>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Auto-refresh</span>
          </label>

          {autoRefresh && (
            <select
              value={refreshInterval}
              onChange={(e) => setRefreshInterval(Number(e.target.value))}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value={10000}>10 seconds</option>
              <option value={30000}>30 seconds</option>
              <option value={60000}>1 minute</option>
              <option value={300000}>5 minutes</option>
            </select>
          )}

          <div className="flex gap-2">
            <button
              onClick={downloadReport}
              disabled={!testSuite}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              📄 Download Report
            </button>
            <button
              onClick={exportTestData}
              disabled={testHistory.length === 0}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              📊 Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Test Results */}
      {testSuite && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Latest Test Results</h3>
            <span className="text-sm text-gray-500">
              {testSuite.timestamp.toLocaleString()}
            </span>
          </div>

          {/* Test Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Performance Tests */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3">Performance</h4>
              <div className="space-y-2">
                {testSuite.tests.filter(t => 
                  t.name.includes('Performance') || 
                  t.name.includes('Bundle') || 
                  t.name.includes('Contentful') ||
                  t.name.includes('Layout')
                ).map((test, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <span className="mr-2">{getStatusIcon(test.status)}</span>
                      {test.name}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                      {test.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibility Tests */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3">Accessibility</h4>
              <div className="space-y-2">
                {testSuite.tests.filter(t => 
                  t.name.includes('Accessibility') || 
                  t.name.includes('Keyboard') || 
                  t.name.includes('Contrast')
                ).map((test, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <span className="mr-2">{getStatusIcon(test.status)}</span>
                      {test.name}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                      {test.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Tests */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3">SEO</h4>
              <div className="space-y-2">
                {testSuite.tests.filter(t => 
                  t.name.includes('SEO') || 
                  t.name.includes('Meta') || 
                  t.name.includes('Structured')
                ).map((test, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <span className="mr-2">{getStatusIcon(test.status)}</span>
                      {test.name}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                      {test.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Test Results */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Detailed Results</h4>
            <div className="space-y-3">
              {testSuite.tests.map((test, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="mr-2">{getStatusIcon(test.status)}</span>
                      <span className="font-medium text-gray-800">{test.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                        {test.status}
                      </span>
                      {test.duration && (
                        <span className="text-xs text-gray-500">
                          {test.duration.toFixed(0)}ms
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{test.message}</p>
                  {test.details && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-gray-500 hover:text-gray-700">
                        View Details
                      </summary>
                      <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto">
                        {JSON.stringify(test.details, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Test History */}
      {testHistory.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Test History</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-2">
              {testHistory.map((suite, index) => {
                const passCount = suite.tests.filter(t => t.status === 'pass').length;
                const warningCount = suite.tests.filter(t => t.status === 'warning').length;
                const failCount = suite.tests.filter(t => t.status === 'fail').length;
                const score = Math.round((passCount + (warningCount * 0.5)) / suite.tests.length * 100);
                
                return (
                  <div key={index} className="flex items-center justify-between bg-white rounded p-2">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium">
                        {suite.timestamp.toLocaleTimeString()}
                      </span>
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="text-green-600">✅ {passCount}</span>
                        <span className="text-yellow-600">⚠️ {warningCount}</span>
                        <span className="text-red-600">❌ {failCount}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(score)}`}>
                      {score}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Status */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Accessibility Status</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center">
            <span className="mr-2">🎯</span>
            <span>Focus Index: {keyboardNavigation.focusedIndex}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">⌨️</span>
            <span>Navigating: {keyboardNavigation.isNavigating ? 'Yes' : 'No'}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🔍</span>
            <span>High Contrast: {isHighContrast ? 'On' : 'Off'}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🎬</span>
            <span>Reduced Motion: {prefersReducedMotion ? 'On' : 'Off'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveMonitoringDashboard;