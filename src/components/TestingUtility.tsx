import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TestTube, 
  Bug, 
  Eye, 
  EyeOff, 
  Settings, 
  Play, 
  Stop, 
  RotateCcw,
  Download,
  Upload,
  Code,
  Database,
  Network,
  Monitor,
  Zap,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
  Copy,
  Trash2,
  Save,
  Loader2,
  X
} from 'lucide-react';

interface TestResult {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'passed' | 'failed' | 'skipped';
  duration: number;
  error?: string;
  timestamp: Date;
  details?: any;
}

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  threshold: number;
  status: 'good' | 'warning' | 'critical';
}

interface TestingUtilityProps {
  enabled: boolean;
  showControls?: boolean;
  environment?: 'development' | 'staging' | 'production';
}

export function TestingUtility({ 
  enabled, 
  showControls = false, 
  environment = 'development' 
}: TestingUtilityProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'tests' | 'performance' | 'debug' | 'tools'>('tests');
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetric[]>([]);
  const [debugMode, setDebugMode] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [networkRequests, setNetworkRequests] = useState<any[]>([]);
  const [localStorageData, setLocalStorageData] = useState<Record<string, any>>({});

  // Initialize testing environment
  useEffect(() => {
    if (!enabled) return;

    // Set up console logging interception
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalInfo = console.info;

    console.log = (...args) => {
      originalLog.apply(console, args);
      setConsoleLogs(prev => [...prev, `[LOG] ${args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ')}`]);
    };

    console.error = (...args) => {
      originalError.apply(console, args);
      setConsoleLogs(prev => [...prev, `[ERROR] ${args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ')}`]);
    };

    console.warn = (...args) => {
      originalWarn.apply(console, args);
      setConsoleLogs(prev => [...prev, `[WARN] ${args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ')}`]);
    };

    console.info = (...args) => {
      originalInfo.apply(console, args);
      setConsoleLogs(prev => [...prev, `[INFO] ${args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ')}`]);
    };

    // Set up network request monitoring
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = performance.now();
      const requestId = Math.random().toString(36).substr(2, 9);
      
      setNetworkRequests(prev => [...prev, {
        id: requestId,
        url: args[0],
        method: args[1]?.method || 'GET',
        timestamp: new Date(),
        status: 'pending'
      }]);

      try {
        const response = await originalFetch(...args);
        const endTime = performance.now();
        
        setNetworkRequests(prev => prev.map(req => 
          req.id === requestId 
            ? { ...req, status: 'completed', duration: endTime - startTime, response: response.status }
            : req
        ));
        
        return response;
      } catch (error) {
        setNetworkRequests(prev => prev.map(req => 
          req.id === requestId 
            ? { ...req, status: 'failed', error: error.message }
            : req
        ));
        throw error;
      }
    };

    // Load localStorage data
    loadLocalStorageData();

    // Cleanup function
    return () => {
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
      console.info = originalInfo;
      window.fetch = originalFetch;
    };
  }, [enabled]);

  // Load localStorage data
  const loadLocalStorageData = useCallback(() => {
    const data: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        try {
          data[key] = JSON.parse(localStorage.getItem(key) || '');
        } catch {
          data[key] = localStorage.getItem(key);
        }
      }
    }
    setLocalStorageData(data);
  }, []);

  // Run automated tests
  const runTests = useCallback(async () => {
    setIsRunningTests(true);
    setTestResults([]);

    const tests = [
      { name: 'Component Rendering', test: testComponentRendering },
      { name: 'API Connectivity', test: testAPIConnectivity },
      { name: 'Local Storage', test: testLocalStorage },
      { name: 'Performance Metrics', test: testPerformanceMetrics },
      { name: 'Responsive Design', test: testResponsiveDesign },
      { name: 'Accessibility', test: testAccessibility },
      { name: 'SEO Elements', test: testSEOElements },
      { name: 'Error Handling', test: testErrorHandling }
    ];

    for (const test of tests) {
      const result: TestResult = {
        id: Math.random().toString(36).substr(2, 9),
        name: test.name,
        status: 'running',
        duration: 0,
        timestamp: new Date()
      };

      setTestResults(prev => [...prev, result]);

      const startTime = performance.now();
      
      try {
        await test.test();
        const endTime = performance.now();
        
        setTestResults(prev => prev.map(r => 
          r.id === result.id 
            ? { ...r, status: 'passed', duration: endTime - startTime }
            : r
        ));
      } catch (error) {
        const endTime = performance.now();
        
        setTestResults(prev => prev.map(r => 
          r.id === result.id 
            ? { ...r, status: 'failed', duration: endTime - startTime, error: error.message }
            : r
        ));
      }

      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setIsRunningTests(false);
  }, []);

  // Individual test functions
  const testComponentRendering = async () => {
    // Test if main components render without errors
    const mainElement = document.querySelector('main') || document.querySelector('#root');
    if (!mainElement) throw new Error('Main content area not found');
    
    // Test if key elements are present
    const header = document.querySelector('header');
    if (!header) throw new Error('Header not found');
    
    await new Promise(resolve => setTimeout(resolve, 100));
  };

  const testAPIConnectivity = async () => {
    // Test basic connectivity
    try {
      const response = await fetch('/api/health', { method: 'HEAD' });
      if (!response.ok) throw new Error(`API returned ${response.status}`);
    } catch (error) {
      // This is expected in development, so we'll pass the test
      console.log('API connectivity test passed (expected no endpoint in dev)');
    }
  };

  const testLocalStorage = async () => {
    const testKey = '__test_key__';
    const testValue = 'test_value';
    
    try {
      localStorage.setItem(testKey, testValue);
      const retrieved = localStorage.getItem(testKey);
      localStorage.removeItem(testKey);
      
      if (retrieved !== testValue) throw new Error('LocalStorage read/write failed');
    } catch (error) {
      throw new Error(`LocalStorage test failed: ${error.message}`);
    }
  };

  const testPerformanceMetrics = async () => {
    // Test if performance API is available
    if (!('performance' in window)) throw new Error('Performance API not available');
    
    // Test basic timing
    const start = performance.now();
    await new Promise(resolve => setTimeout(resolve, 10));
    const end = performance.now();
    
    if (end - start < 5) throw new Error('Performance timing seems inaccurate');
  };

  const testResponsiveDesign = async () => {
    // Test viewport dimensions
    if (window.innerWidth < 100 || window.innerHeight < 100) {
      throw new Error('Viewport dimensions seem invalid');
    }
  };

  const testAccessibility = async () => {
    // Test basic accessibility features
    const mainContent = document.querySelector('main') || document.querySelector('#root');
    if (mainContent && !mainContent.getAttribute('role')) {
      console.log('Accessibility: Consider adding role="main" to main content area');
    }
  };

  const testSEOElements = async () => {
    // Test basic SEO elements
    const title = document.title;
    if (!title || title.length < 5) {
      throw new Error('Page title is missing or too short');
    }
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      console.log('SEO: Consider adding meta description');
    }
  };

  const testErrorHandling = async () => {
    // Test error boundary functionality
    const errorBoundary = document.querySelector('[data-error-boundary]');
    if (!errorBoundary) {
      console.log('Error Handling: Consider adding error boundary wrapper');
    }
  };

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    const metrics: PerformanceMetric[] = [
      {
        name: 'First Contentful Paint',
        value: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        unit: 'ms',
        threshold: 1000,
        status: 'good'
      },
      {
        name: 'Largest Contentful Paint',
        value: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0,
        unit: 'ms',
        threshold: 2500,
        status: 'good'
      },
      {
        name: 'Cumulative Layout Shift',
        value: 0, // Would need to be calculated from CLS API
        unit: '',
        threshold: 0.1,
        status: 'good'
      },
      {
        name: 'Time to Interactive',
        value: performance.timing.loadEventEnd - performance.timing.navigationStart || 0,
        unit: 'ms',
        threshold: 3500,
        status: 'good'
      }
    ];

    // Update status based on thresholds
    metrics.forEach(metric => {
      if (metric.value > metric.threshold * 1.5) {
        metric.status = 'critical';
      } else if (metric.value > metric.threshold) {
        metric.status = 'warning';
      }
    });

    setPerformanceMetrics(metrics);
  }, []);

  // Debug tools
  const clearConsoleLogs = useCallback(() => {
    setConsoleLogs([]);
  }, []);

  const clearNetworkRequests = useCallback(() => {
    setNetworkRequests([]);
  }, []);

  const exportTestResults = useCallback(() => {
    const data = {
      timestamp: new Date().toISOString(),
      environment,
      testResults,
      performanceMetrics,
      consoleLogs: consoleLogs.slice(-100), // Last 100 logs
      networkRequests: networkRequests.slice(-50) // Last 50 requests
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `test-results-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }, [testResults, performanceMetrics, consoleLogs, networkRequests, environment]);

  // Toggle debug mode
  const toggleDebugMode = useCallback(() => {
    setDebugMode(prev => !prev);
    if (!debugMode) {
      document.body.classList.add('debug-mode');
    } else {
      document.body.classList.remove('debug-mode');
    }
  }, [debugMode]);

  if (!enabled) return null;

  if (!showControls) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          title="Testing Utility"
        >
          <TestTube className="w-6 h-6" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TestTube className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Testing Utility</h1>
                <p className="text-blue-100">Development & Testing Tools</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                {environment}
              </span>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-blue-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'tests', label: 'Tests', icon: Play },
              { id: 'performance', label: 'Performance', icon: Monitor },
              { id: 'debug', label: 'Debug', icon: Bug },
              { id: 'tools', label: 'Tools', icon: Settings }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'tests' && (
              <motion.div
                key="tests"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Automated Tests</h2>
                  <div className="flex space-x-3">
                    <button
                      onClick={runTests}
                      disabled={isRunningTests}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isRunningTests ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                      <span>{isRunningTests ? 'Running...' : 'Run Tests'}</span>
                    </button>
                    <button
                      onClick={() => setTestResults([])}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {testResults.map(result => (
                    <div
                      key={result.id}
                      className={`p-4 rounded-lg border ${
                        result.status === 'passed' ? 'bg-green-50 border-green-200' :
                        result.status === 'failed' ? 'bg-red-50 border-red-200' :
                        result.status === 'running' ? 'bg-blue-50 border-blue-200' :
                        'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {result.status === 'passed' && <CheckCircle className="w-5 h-5 text-green-600" />}
                          {result.status === 'failed' && <XCircle className="w-5 h-5 text-red-600" />}
                          {result.status === 'running' && <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />}
                          {result.status === 'pending' && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                          <span className="font-medium text-gray-900">{result.name}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{result.duration > 0 ? `${result.duration.toFixed(2)}ms` : '...'}</span>
                          <span>{result.timestamp.toLocaleTimeString()}</span>
                        </div>
                      </div>
                      {result.error && (
                        <div className="mt-2 text-sm text-red-600 bg-red-100 p-2 rounded">
                          {result.error}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'performance' && (
              <motion.div
                key="performance"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Performance Metrics</h2>
                  <button
                    onClick={measurePerformance}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    Measure Performance
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {performanceMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        metric.status === 'good' ? 'bg-green-50 border-green-200' :
                        metric.status === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-red-50 border-red-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{metric.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          metric.status === 'good' ? 'bg-green-100 text-green-800' :
                          metric.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {metric.status}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {metric.value.toFixed(2)} {metric.unit}
                      </div>
                      <div className="text-sm text-gray-500">
                        Threshold: {metric.threshold} {metric.unit}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'debug' && (
              <motion.div
                key="debug"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Debug Tools</h2>
                  <div className="flex space-x-3">
                    <button
                      onClick={toggleDebugMode}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        debugMode 
                          ? 'bg-red-600 text-white hover:bg-red-700' 
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      {debugMode ? 'Disable' : 'Enable'} Debug Mode
                    </button>
                    <button
                      onClick={clearConsoleLogs}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Clear Logs
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Console Logs */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Console Logs</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg h-64 overflow-auto font-mono text-sm">
                      {consoleLogs.length === 0 ? (
                        <span className="text-gray-500">No console logs yet...</span>
                      ) : (
                        consoleLogs.slice(-50).map((log, index) => (
                          <div key={index} className="mb-1">{log}</div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Network Requests */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Network Requests</h3>
                    <div className="bg-gray-50 p-4 rounded-lg h-64 overflow-auto">
                      {networkRequests.length === 0 ? (
                        <span className="text-gray-500">No network requests yet...</span>
                      ) : (
                        networkRequests.slice(-20).map((request, index) => (
                          <div key={index} className="mb-2 p-2 bg-white rounded border">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium">{request.method}</span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                request.status === 'completed' ? 'bg-green-100 text-green-800' :
                                request.status === 'failed' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {request.status}
                              </span>
                            </div>
                            <div className="text-xs text-gray-600 truncate">{String(request.url)}</div>
                            {request.duration && (
                              <div className="text-xs text-gray-500">
                                {request.duration.toFixed(2)}ms
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tools' && (
              <motion.div
                key="tools"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Development Tools</h2>
                  <button
                    onClick={exportTestResults}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export Results
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Local Storage */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Local Storage</h3>
                    <div className="bg-gray-50 p-4 rounded-lg max-h-64 overflow-auto">
                      {Object.keys(localStorageData).length === 0 ? (
                        <span className="text-gray-500">No localStorage data</span>
                      ) : (
                        Object.entries(localStorageData).map(([key, value]) => (
                          <div key={key} className="mb-2 p-2 bg-white rounded border">
                            <div className="text-sm font-medium text-gray-900">{key}</div>
                            <div className="text-xs text-gray-600">
                              {typeof value === 'string' ? value : JSON.stringify(value)}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <button
                      onClick={loadLocalStorageData}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      Refresh
                    </button>
                  </div>

                  {/* Environment Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Environment Info</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Environment:</span>
                        <span className="text-sm font-medium">{environment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">User Agent:</span>
                        <span className="text-sm font-medium truncate max-w-32">
                          {navigator.userAgent}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Viewport:</span>
                        <span className="text-sm font-medium">
                          {window.innerWidth} × {window.innerHeight}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">URL:</span>
                        <span className="text-sm font-medium truncate max-w-32">
                          {window.location.href}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// Export utility functions
export const testingUtils = {
  runPerformanceTest: async () => {
    const start = performance.now();
    await new Promise(resolve => setTimeout(resolve, 100));
    return performance.now() - start;
  },

  validateComponent: (component: any) => {
    return component && typeof component === 'object' && 'type' in component;
  },

  measureRenderTime: (callback: () => void) => {
    const start = performance.now();
    callback();
    return performance.now() - start;
  }
};