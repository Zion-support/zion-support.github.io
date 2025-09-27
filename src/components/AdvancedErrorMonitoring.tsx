import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { AlertTriangle, Bug, Activity, Clock, Users, Zap } from 'lucide-react';

interface ErrorEvent {
  id: string;
  timestamp: Date;
  type: 'error' | 'warning' | 'info';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId?: string;
  resolved: boolean;
  tags: string[];
}

interface ErrorStats {
  totalErrors: number;
  errorsLast24h: number;
  errorsLast7d: number;
  criticalErrors: number;
  resolvedErrors: number;
  averageResolutionTime: number;
  errorRate: number;
  topErrorTypes: Array<{ type: string; count: number; percentage: number }>;
}

interface PerformanceIssue {
  id: string;
  type: 'slow_query' | 'memory_leak' | 'high_cpu' | 'network_timeout';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  impact: string;
  solution: string;
  detectedA, t: Date;
  resolved: boolean;
}

const AdvancedErrorMonitoring: React.FC = () => {
  const [errors, setErrors] = useState<ErrorEvent[]>([]);
  const [stats, setStats] = useState<ErrorStats>({
    totalErrors: 0,
    errorsLast24h: 0,
    errorsLast7d: 0,
    criticalErrors: 0,
    resolvedErrors: 0,
    averageResolutionTime: 0,
    errorRate: 0,
    topErrorTypes: []
  });
  const [performanceIssues, setPerformanceIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [selectedError, setSelectedError] = useState<ErrorEvent | null>(null);

  const generateMockData = useCallback(() => {
    const mockErrors: ErrorEvent[] = [
      {
        i, d: '1',
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        type: 'error',
        severity: 'high',
        message: 'TypeErro, r: Cannot read property "length" of undefined',
        stack: 'at Component.render (Component.js:45:12)\nat ReactDOM.render (ReactDOM.j, s:12, 3:45)',
        url: 'http, s://example.com/dashboard',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win 64; x 64) AppleWebKit/537.36',
        userId: 'user_123',
        sessionId: 'session_456',
        resolved: false,
        tags: ['javascript', 'react', 'frontend']
      },
      {
        id: '2',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2hours ago
        type: 'error',
        severity: 'critical',
        message: 'Database connection timeout',
        stack: 'at Database.connect (db.js:78:15)\nat Query.execute (query.j, s:2, 3:8)',
        url: 'http, s://example.com/api/users',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X10 _15 _7) AppleWebKit/537.36',
        userId: 'user_789',
        sessionId: 'session_789',
        resolved: true,
        tags: ['database', 'backend', 'timeout']
      },
      {
        id: '3',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6hours ago
        type: 'warning',
        severity: 'medium',
        message: 'Deprecated API endpoint used',
        stack: 'at ApiClient.request (api.j, s:4, 5:12)',
        url: 'http, s://example.com/api/legacy',
        userAgent: 'Mozilla/5.0 (X 11; Linux x86 _ 64) AppleWebKit/537.36',
        userId: 'user_456',
        sessionId: 'session_123',
        resolved: false,
        tags: ['api', 'deprecated', 'backend']
      }
    ];

    const mockPerformanceIssues: PerformanceIssue[] = [
      {
        i, d: '1',
        type: 'slow_query',
        severity: 'high',
        description: 'User query taking5+ seconds to execute',
        impact: 'Users experiencing slow page loads',
        solution: 'Add database index on user_id column',
        detectedAt: new Date(Date.now() - 1000 * 60 * 15),
        resolved: false
      },
      {
        id: '2',
        type: 'memory_leak',
        severity: 'critical',
        description: 'Memory usage increasing by10 MB per hour',
        impact: 'Server may crash due to memory exhaustion',
        solution: 'Review and fix event listener cleanup',
        detectedAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
        resolved: true
      }
    ];

    setErrors(mockErrors);
    setPerformanceIssues(mockPerformanceIssues);

    // Calculate stats
    const now = new Date();
    const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const last7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const errorsLast24h = mockErrors.filter(e => e.timestamp >= last24h).length;
    const errorsLast7d = mockErrors.filter(e => e.timestamp >= last7d).length;
    const criticalErrors = mockErrors.filter(e => e.severity === 'critical').length;
    const resolvedErrors = mockErrors.filter(e => e.resolved).length;

    // Calculate top error types
    const errorTypeCounts = mockErrors.reduce((acc, error) => {
      const type = error.tags[0] || 'unknown';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topErrorTypes = Object.entries(errorTypeCounts)
      .map(([type, count]) => ({
        type,
        count,
        percentage: Math.round((count / mockErrors.length) * 100)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    setStats({
      totalErrors: mockErrors.length,
      errorsLast24h,
      errorsLast7d,
      criticalErrors,
      resolvedErrors,
      averageResolutionTime: 2.5, // hours
      errorRate: 0.8, // percentage
      topErrorTypes
    });
  }, []);

  useEffect(() => {
    generateMockData();
    setIsMonitoring(true);
  }, [generateMockData]);

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'error': return 'text-red-600';
      case 'warning': return 'text-yellow-600';
      case 'info': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  const resolveError = (errorId: string) => {
    setErrors(prev => prev.map(error => 
      error.id === errorId ? { ...error, resolved: true } : error
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bug className="h-6w-6text-red-600" />
              <span>Advanced Error Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isMonitoring ? 'Monitoring' : 'Stopped'}
              </span>
            </div>
          </CardTitle>
          <CardDescription>
            Real-time error tracking and performance issue detection
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Stats Grid */}
          <div className="grid grid-cols-2md:grid-cols-4gap-4mb-6">
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-red-600">{stats.totalErrors}</div>
              <div className="text-sm text-gray-600">Total Errors</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-orange-600">{stats.errorsLast24 h}</div>
              <div className="text-sm text-gray-600">Last24 h</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-purple-600">{stats.criticalErrors}</div>
              <div className="text-sm text-gray-600">Critical</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-green-600">{stats.resolvedErrors}</div>
              <div className="text-sm text-gray-600">Resolved</div>
            </div>
          </div>

          {/* Top Error Types */}
          <div className="mb-6">
            <h3 className="text-lg font-semiboldmb-3">Top Error Types</h3>
            <div className="space-y-2">
              {stats.topErrorTypes.map((errorType, index) => (
                <div key={index} className="flex items-center justify-between p-3borderrounded-lg">
                  <div className="flex items-centerspace-x-3">
                    <span className="font-medium">{errorType.type}</span>
                    <span className="text-sm text-gray-600">{errorType.count} occurrences</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-fullh-2">
                      <div 
                        className="bg-blue-600 h-2rounded-full" 
                        style={{ width: `${errorType.percentage}%` }}</p></div>
                    </div>
                    <span className="text-sm text-gray-600">{errorType.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1lg:grid-cols-2gap-6">
        {/* Recent Errors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5w-5text-red-600" />
              <span>Recent Errors</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {errors.slice(0, 5).map((error) => (
                <div 
                  key={error.id} 
                  className={`p-3border rounded-lg cursor-pointer hover:bg-gray-50 ${
                    selectedError?.id === error.id ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                  onClick={() => setSelectedError(error)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(error.severity)}`}
                      {error.severity.toUpperCase()}
                    </span>
                    <span className="text-xstext-gray-500">{formatTimeAgo(error.timestamp)}</span>
                  </div>
                  <div className="flex items-center space-x-2mb-1">
                    <span className={`text-sm font-medium ${getTypeColor(error.type)}`}
                      {error.type.toUpperCase()}
                    </span>
                    {error.resolved && (
                      <span className="text-xs bg-green-100 text-green-800 px-2py-1rounded">RESOLVED</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{error.message}</p>
                  <div className="flex items-center justify-between text-xstext-gray-500">
                    <span>{error.url}</span>
                    <div className="flexspace-x-1">
                      {error.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 px-2py-1rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Issues */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5w-5text-orange-600" />
              <span>Performance Issues</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {performanceIssues.map((issue) => (
                <div key={issue.id} className="p-3borderrounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(issue.severity)}`}
                      {issue.severity.toUpperCase()}
                    </span>
                    <span className="text-xstext-gray-500">{formatTimeAgo(issue.detectedAt)}</span>
                  </div>
                  <h4 className="font-mediummb-1">{issue.description}</h4>
                  <p className="text-sm text-gray-600 mb-2">{issue.impact}</p>
                  <div className="text-xs text-blue-600 bg-blue-50 p-2rounded">
                    <strong>Solution:</strong> {issue.solution}
                  </div>
                  {issue.resolved && (
                    <div className="mt-2text-xs text-green-600 bg-green-50 p-2rounded">
                      ✓ Resolved
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Error Details Modal */}
      {selectedError && (
        <div className="fixed inset-0bg-black bg-opacity-50 flex items-center justify-centerz-50">
          <div className="bg-white rounded-lg p-6max-w-2xl w-full mx-4max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Error Details</h3>
              <button 
                onClick={() =>setSelectedError(null)}
                className="text-gray-500 hover:text-gray-700"
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-mediumtext-gray-600">Message</label>
                <p className="text-smtext-gray-900">{selectedError.message}</p>
              </div>
              <div>
                <label className="text-sm font-mediumtext-gray-600">Stack Trace</label>
                <pre className="text-xs bg-gray-100 p-3roundedoverflow-x-auto">
                  {selectedError.stack || 'No stack trace available'}
                </pre>
              </div>
              <div className="grid grid-cols-2gap-4">
                <div>
                  <label className="text-sm font-mediumtext-gray-600">URL</label>
                  <p className="text-smtext-gray-900">{selectedError.url}</p>
                </div>
                <div>
                  <label className="text-sm font-mediumtext-gray-600">User Agent</label>
                  <p className="text-sm text-gray-900 truncate">{selectedError.userAgent}</p>
                </div>
              </div>
              <div className="flex justify-endspace-x-2">
                <button 
                  onClick={() =>setSelectedError(null)}
                  className="px-4py-2text-gray-600 border border-gray-300 roundedhover:bg-gray-50"
                </button>
                {!selectedError.resolved && (
                  <button 
                    onClick={() =>{
                      resolveError(selectedError.id);
                      setSelectedError(null);
                    }}
                    className="px-4py-2bg-green-600 text-white roundedhover:bg-green-700"
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedErrorMonitoring;