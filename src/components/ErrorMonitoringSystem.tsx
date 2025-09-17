import React, { useState, useEffect } from 'react';

interface ErrorLog {
  id: string;
  timestamp: string;
  level: 'error' | 'warning' | 'info';
  message: string;
  source: string;
  stack?: string;
  userAgent: string;
  url: string;
  resolved: boolean;
}

const ErrorMonitoringSystem: React.FC = () => {
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'error' | 'warning' | 'info'>('all');

  useEffect(() => {
    // Simulate error data
    const mockErrors: ErrorLog[] = [
      {
        id: '1',
        timestamp: '2024-01-15T10:30:00Z',
        level: 'error',
        message: 'Failed to load component: InteractiveTechShowcase2025',
        source: 'React Error Boundary',
        stack: 'Error: Component failed to render\n    at InteractiveTechShowcase2025 (src/components/InteractiveTechShowcase2025.tsx:45:12)',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        url: '/pages/RevolutionaryTechShowcase2025',
        resolved: false
      },
      {
        id: '2',
        timestamp: '2024-01-15T10:25:00Z',
        level: 'warning',
        message: 'Image optimization failed for quantum-reality-bg.jpg',
        source: 'Image Optimizer',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        url: '/pages/QuantumRealityEngine2035',
        resolved: true
      },
      {
        id: '3',
        timestamp: '2024-01-15T10:20:00Z',
        level: 'error',
        message: 'API request failed: /api/analytics/metrics',
        source: 'Analytics Service',
        stack: 'TypeError: Cannot read property \'data\' of undefined\n    at fetchAnalytics (src/services/analytics.ts:23:15)',
        userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        url: '/',
        resolved: false
      },
      {
        id: '4',
        timestamp: '2024-01-15T10:15:00Z',
        level: 'info',
        message: 'Performance threshold exceeded: 2.5s load time',
        source: 'Performance Monitor',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        url: '/pages/UltimateAIConsciousness2032',
        resolved: false
      },
      {
        id: '5',
        timestamp: '2024-01-15T10:10:00Z',
        level: 'warning',
        message: 'Memory usage high: 85% of available heap',
        source: 'Memory Monitor',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15',
        url: '/pages/RevolutionaryTechBreakthrough2030',
        resolved: true
      }
    ];

    setErrors(mockErrors);
  }, []);

  const filteredErrors = errors.filter(error => 
    filter === 'all' || error.level === filter
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📝';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getErrorCount = (level: string) => {
    return errors.filter(error => error.level === level).length;
  };

  const getUnresolvedCount = () => {
    return errors.filter(error => !error.resolved).length;
  };

  return (
    <div className="fixed top-32 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <span>Error Monitor</span>
        {getUnresolvedCount() > 0 && (
          <div className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
            {getUnresolvedCount()}
          </div>
        )}
      </button>

      {isVisible && (
        <div className="absolute top-12 right-0 w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Error Monitoring</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{getErrorCount('error')}</div>
              <div className="text-sm text-gray-600">Errors</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{getErrorCount('warning')}</div>
              <div className="text-sm text-gray-600">Warnings</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{getErrorCount('info')}</div>
              <div className="text-sm text-gray-600">Info</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{getUnresolvedCount()}</div>
              <div className="text-sm text-gray-600">Unresolved</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex space-x-2 mb-4">
            {['all', 'error', 'warning', 'info'].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level as any)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  filter === level
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>

          {/* Error List */}
          <div className="space-y-3">
            {filteredErrors.map((error) => (
              <div
                key={error.id}
                className={`p-3 rounded-lg border-l-4 ${
                  error.resolved ? 'bg-gray-50 border-gray-300' : 'bg-white border-red-400'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getLevelIcon(error.level)}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(error.level)}`}>
                      {error.level.toUpperCase()}
                    </span>
                    {error.resolved && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        RESOLVED
                      </span>
                    )}
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="text-sm text-gray-900 mb-2 font-medium">
                  {error.message}
                </div>
                
                <div className="text-xs text-gray-500 space-y-1">
                  <div><span className="font-medium">Source:</span> {error.source}</div>
                  <div><span className="font-medium">URL:</span> {error.url}</div>
                  <div><span className="font-medium">Time:</span> {formatTimestamp(error.timestamp)}</div>
                  <div><span className="font-medium">User Agent:</span> {error.userAgent.substring(0, 50)}...</div>
                </div>

                {error.stack && (
                  <details className="mt-2">
                    <summary className="text-xs text-gray-600 cursor-pointer hover:text-gray-800">
                      View Stack Trace
                    </summary>
                    <pre className="text-xs text-gray-500 mt-1 p-2 bg-gray-100 rounded overflow-x-auto">
                      {error.stack}
                    </pre>
                  </details>
                )}
              </div>
            ))}
          </div>

          {filteredErrors.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl mb-2">🎉</div>
              <p>No {filter === 'all' ? '' : filter} errors found!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ErrorMonitoringSystem;