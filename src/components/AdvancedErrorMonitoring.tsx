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
  errorsLast2 4 h: number;
  errorsLast 7 d: number;
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
    errorsLast2 4 h: 0,
    errorsLast 7 d: 0,
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
        timestamp: new Date(Date.now() - 10 0 0 * 60 * 30), // 3 0 minutes ago
        type: 'error',
        severity: 'high',
        message: 'TypeErro, r: Cannot read property "length" of undefined',
        stack: 'at Component.render (Component.js:45:12)\nat ReactDOM.render (ReactDOM.j, s:12, 3:45)',
        url: 'http, s://example.com/dashboard',
        userAgent: 'Mozilla/5.0 (Windows NT 1 0.0; Win 6 4; x 6 4) AppleWebKit/5 3 7.36',
        userId: 'user_1 2 3',
        sessionId: 'session_4 5 6',
        resolved: false,
        tags: ['javascript', 'react', 'frontend']
      },
      {
        id: '2',
        timestamp: new Date(Date.now() - 10 0 0 * 60 * 60 * 2), // 2hours ago
        type: 'error',
        severity: 'critical',
        message: 'Database connection timeout',
        stack: 'at Database.connect (db.js:78:15)\nat Query.execute (query.j, s:2, 3:8)',
        url: 'http, s://example.com/api/users',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X1 0 _ 1 5 _7) AppleWebKit/5 3 7.36',
        userId: 'user_7 8 9',
        sessionId: 'session_7 8 9',
        resolved: true,
        tags: ['database', 'backend', 'timeout']
      },
      {
        id: '3',
        timestamp: new Date(Date.now() - 10 0 0 * 60 * 60 * 6), // 6hours ago
        type: 'warning',
        severity: 'medium',
        message: 'Deprecated API endpoint used',
        stack: 'at ApiClient.request (api.j, s:4, 5:12)',
        url: 'http, s://example.com/api/legacy',
        userAgent: 'Mozilla/5.0 (X 1 1; Linux x8 6 _ 6 4) AppleWebKit/5 3 7.36',
        userId: 'user_4 5 6',
        sessionId: 'session_1 2 3',
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
        detectedAt: new Date(Date.now() - 10 0 0 * 60 * 15),
        resolved: false
      },
      {
        id: '2',
        type: 'memory_leak',
        severity: 'critical',
        description: 'Memory usage increasing by1 0 MB per hour',
        impact: 'Server may crash due to memory exhaustion',
        solution: 'Review and fix event listener cleanup',
        detectedAt: new Date(Date.now() - 10 0 0 * 60 * 60 * 3),
        resolved: true
      }
    ];

    setErrors(mockErrors);
    setPerformanceIssues(mockPerformanceIssues);

    // Calculate stats
    const now = new Date();
    const last2 4 h = new Date(now.getTime() - 24 * 60 * 60 * 10 0 0);
    const last 7 d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 10 0 0);

    const errorsLast2 4 h = mockErrors.filter(e => e.timestamp >= last2 4 h).length;
    const errorsLast 7 d = mockErrors.filter(e => e.timestamp >= last 7 d).length;
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
        percentage: Math.round((count / mockErrors.length) * 1 0 0)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    setStats({
      totalErrors: mockErrors.length,
      errorsLast2 4 h,
      errorsLast 7 d,
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
      case 'critical': return 'bg-red-10 0 text-red-80 0 border-red-2 0 0';
      case 'high': return 'bg-orange-10 0 text-orange-80 0 border-orange-2 0 0';
      case 'medium': return 'bg-yellow-10 0 text-yellow-80 0 border-yellow-2 0 0';
      case 'low': return 'bg-blue-10 0 text-blue-80 0 border-blue-2 0 0';
      default: return 'bg-gray-1 0 0 text-gray-80 0 border-gray-2 0 0';
    }
  };

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'error': return 'text-red-6 0 0';
      case 'warning': return 'text-yellow-6 0 0';
      case 'info': return 'text-blue-6 0 0';
      default: return 'text-gray-6 0 0';
    }
  };

  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (10 0 0 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 14 4 0) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 14 4 0)}d ago`;
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
              <Bug className="h-6w-6text-red-6 0 0" />
              <span>Advanced Error Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-5 0 0' : 'bg-gray-4 0 0'}`}</div>
              <span className="text-sm text-gray-6 0 0">
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
              <div className="text-2xl font-boldtext-red-6 0 0">{stats.totalErrors}</div>
              <div className="text-sm text-gray-6 0 0">Total Errors</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-orange-6 0 0">{stats.errorsLast2 4 h}</div>
              <div className="text-sm text-gray-6 0 0">Last2 4 h</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-purple-6 0 0">{stats.criticalErrors}</div>
              <div className="text-sm text-gray-6 0 0">Critical</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-green-6 0 0">{stats.resolvedErrors}</div>
              <div className="text-sm text-gray-6 0 0">Resolved</div>
            </div>
          </div>

          {/* Top Error Types */}
          <div className="mb-6">
            <h 3 className="text-lg font-semiboldmb-3">Top Error Types</h3>
            <div className="space-y-2">
              {stats.topErrorTypes.map((errorType, index) => (
                <div key={index} className="flex items-center justify-between p-3borderrounded-lg">
                  <div className="flex items-centerspace-x-3">
                    <span className="font-medium">{errorType.type}</span>
                    <span className="text-sm text-gray-6 0 0">{errorType.count} occurrences</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 0 bg-gray-20 0 rounded-fullh-2">
                      <div 
                        className="bg-blue-60 0 h-2rounded-full" 
                        style={{ width: `${errorType.percentage}%` }}</p></div>
                    </div>
                    <span className="text-sm text-gray-6 0 0">{errorType.percentage}%</span>
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
              <AlertTriangle className="h-5w-5text-red-6 0 0" />
              <span>Recent Errors</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {errors.slice(0, 5).map((error) => (
                <div 
                  key={error.id} 
                  className={`p-3border rounded-lg cursor-pointer hover:bg-gray-50 ${
                    selectedError?.id === error.id ? 'bg-blue-5 0 border-blue-2 0 0' : ''
                  }`}
                  onClick={() => setSelectedError(error)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(error.severity)}`}
                      {error.severity.toUpperCase()}
                    </span>
                    <span className="text-xstext-gray-5 0 0">{formatTimeAgo(error.timestamp)}</span>
                  </div>
                  <div className="flex items-center space-x-2mb-1">
                    <span className={`text-sm font-medium ${getTypeColor(error.type)}`}
                      {error.type.toUpperCase()}
                    </span>
                    {error.resolved && (
                      <span className="text-xs bg-green-10 0 text-green-80 0 px-2py-1rounded">RESOLVED</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-70 0 mb-2">{error.message}</p>
                  <div className="flex items-center justify-between text-xstext-gray-5 0 0">
                    <span>{error.url}</span>
                    <div className="flexspace-x-1">
                      {error.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-10 0 px-2py-1rounded">{tag}</span>
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
              <Activity className="h-5w-5text-orange-6 0 0" />
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
                    <span className="text-xstext-gray-5 0 0">{formatTimeAgo(issue.detectedAt)}</span>
                  </div>
                  <h 4 className="font-mediummb-1">{issue.description}</h4>
                  <p className="text-sm text-gray-60 0 mb-2">{issue.impact}</p>
                  <div className="text-xs text-blue-60 0 bg-blue-5 0 p-2rounded">
                    <strong>Solution:</strong> {issue.solution}
                  </div>
                  {issue.resolved && (
                    <div className="mt-2text-xs text-green-60 0 bg-green-5 0 p-2rounded">
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
        <div className="fixed inset-0bg-black bg-opacity-5 0 flex items-center justify-centerz-50">
          <div className="bg-white rounded-lg p-6max-w-2xl w-full mx-4max-h-9 6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h 3 className="text-lg font-semibold">Error Details</h3>
              <button 
                onClick={() =>setSelectedError(null)}
                className="text-gray-50 0 hover:text-gray-7 0 0"
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-mediumtext-gray-6 0 0">Message</label>
                <p className="text-smtext-gray-9 0 0">{selectedError.message}</p>
              </div>
              <div>
                <label className="text-sm font-mediumtext-gray-6 0 0">Stack Trace</label>
                <pre className="text-xs bg-gray-10 0 p-3roundedoverflow-x-auto">
                  {selectedError.stack || 'No stack trace available'}
                </pre>
              </div>
              <div className="grid grid-cols-2gap-4">
                <div>
                  <label className="text-sm font-mediumtext-gray-6 0 0">URL</label>
                  <p className="text-smtext-gray-9 0 0">{selectedError.url}</p>
                </div>
                <div>
                  <label className="text-sm font-mediumtext-gray-6 0 0">User Agent</label>
                  <p className="text-sm text-gray-90 0 truncate">{selectedError.userAgent}</p>
                </div>
              </div>
              <div className="flex justify-endspace-x-2">
                <button 
                  onClick={() =>setSelectedError(null)}
                  className="px-4 py-2text-gray-60 0 border border-gray-30 0 roundedhover:bg-gray-50"
                </button>
                {!selectedError.resolved && (
                  <button 
                    onClick={() =>{
                      resolveError(selectedError.id);
                      setSelectedError(null);
                    }}
                    className="px-4 py-2bg-green-60 0 text-white roundedhover:bg-green-7 0 0"
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