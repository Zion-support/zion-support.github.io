import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  Bug, 
  XCircle, 
  CheckCircle, 
  RefreshCw, 
  Filter,
  Search,
  Download,
  Trash2,
  Eye,
  Clock,
  User,
  Code,
  Activity
} from 'lucide-react';

interface ErrorEvent {
  id: string;
  message: string;
  stack?: string;
  type: 'javascript' | 'react' | 'network' | 'performance' | 'security';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
  userId?: string;
  sessionId?: string;
  url: string;
  userAgent: string;
  component?: string;
  lineNumber?: number;
  columnNumber?: number;
  resolved: boolean;
  resolvedAt?: number;
  resolvedBy?: string;
}

interface ErrorStats {
  total: number;
  resolved: number;
  unresolved: number;
  byType: Record<string, number>;
  bySeverity: Record<string, number>;
  recent: number;
  critical: number;
}

const AdvancedErrorDashboard: React.FC = () => {
  const [errors, setErrors] = useState<ErrorEvent[]>([]);
  const [filteredErrors, setFilteredErrors] = useState<ErrorEvent[]>([]);
  const [stats, setStats] = useState<ErrorStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterSeverity, setFilterSeverity] = useState<string>('all');
  const [showResolved, setShowResolved] = useState(false);
  const [selectedError, setSelectedError] = useState<ErrorEvent | null>(null);

  const generateMockErrors = useCallback((): ErrorEvent[] => {
    const errorTypes: Array<'javascript' | 'react' | 'network' | 'performance' | 'security'> = 
      ['javascript', 'react', 'network', 'performance', 'security'];
    const severities: Array<'low' | 'medium' | 'high' | 'critical'> = 
      ['low', 'medium', 'high', 'critical'];
    
    const messages = [
      'Cannot read property of undefined',
      'Network request failed',
      'Component did not render properly',
      'Memory allocation failed',
      'Security violation detected',
      'TypeError: Cannot read property',
      'ReferenceError: variable is not defined',
      'SyntaxError: Unexpected token',
      'RangeError: Maximum call stack exceeded',
      'URIError: URI malformed'
    ];

    const components = [
      'App', 'Header', 'Footer', 'Dashboard', 'Login', 'Profile', 
      'Settings', 'Navigation', 'Modal', 'Form'
    ];

    const errors: ErrorEvent[] = [];
    
    for (let i = 0; i < 50; i++) {
      const type = errorTypes[Math.floor(Math.random() * errorTypes.length)];
      const severity = severities[Math.floor(Math.random() * severities.length)];
      const message = messages[Math.floor(Math.random() * messages.length)];
      const component = components[Math.floor(Math.random() * components.length)];
      const timestamp = Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000; // Last 7 days
      const resolved = Math.random() > 0.3; // 70% resolved
      
      errors.push({
        id: `error-${i + 1}`,
        message,
        stack: `Error: ${message}\n    at ${component} (${Math.floor(Math.random() * 1000)}:${Math.floor(Math.random() * 100)})\n    at Object.render (${Math.floor(Math.random() * 1000)}:${Math.floor(Math.random() * 100)})`,
        type,
        severity,
        timestamp,
        userId: `user-${Math.floor(Math.random() * 1000)}`,
        sessionId: `session-${Math.floor(Math.random() * 10000)}`,
        url: `https://example.com/${Math.random().toString(36).substring(7)}`,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        component,
        lineNumber: Math.floor(Math.random() * 1000),
        columnNumber: Math.floor(Math.random() * 100),
        resolved,
        resolvedAt: resolved ? timestamp + Math.random() * 24 * 60 * 60 * 1000 : undefined,
        resolvedBy: resolved ? `admin-${Math.floor(Math.random() * 10)}` : undefined
      });
    }

    return errors.sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  const calculateStats = useCallback((errorList: ErrorEvent[]): ErrorStats => {
    const total = errorList.length;
    const resolved = errorList.filter(e => e.resolved).length;
    const unresolved = total - resolved;
    
    const byType = errorList.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const bySeverity = errorList.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const recent = errorList.filter(e => e.timestamp > Date.now() - 24 * 60 * 60 * 1000).length;
    const critical = errorList.filter(e => e.severity === 'critical').length;
    
    return {
      total,
      resolved,
      unresolved,
      byType,
      bySeverity,
      recent,
      critical
    };
  }, []);

  const filterErrors = useCallback(() => {
    let filtered = errors;
    
    if (searchTerm) {
      filtered = filtered.filter(error => 
        error.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        error.component?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        error.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterType !== 'all') {
      filtered = filtered.filter(error => error.type === filterType);
    }
    
    if (filterSeverity !== 'all') {
      filtered = filtered.filter(error => error.severity === filterSeverity);
    }
    
    if (!showResolved) {
      filtered = filtered.filter(error => !error.resolved);
    }
    
    setFilteredErrors(filtered);
    setStats(calculateStats(filtered));
  }, [errors, searchTerm, filterType, filterSeverity, showResolved, calculateStats]);

  const refreshData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newErrors = generateMockErrors();
      setErrors(newErrors);
      setIsLoading(false);
    }, 500);
  }, [generateMockErrors]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  useEffect(() => {
    filterErrors();
  }, [filterErrors]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'high':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'javascript':
        return <Code className="w-4 h-4" />;
      case 'react':
        return <Activity className="w-4 h-4" />;
      case 'network':
        return <RefreshCw className="w-4 h-4" />;
      case 'performance':
        return <Clock className="w-4 h-4" />;
      case 'security':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Bug className="w-4 h-4" />;
    }
  };

  const resolveError = (errorId: string) => {
    setErrors(prev => prev.map(error => 
      error.id === errorId 
        ? { ...error, resolved: true, resolvedAt: Date.now(), resolvedBy: 'current-user' }
        : error
    ));
  };

  const deleteError = (errorId: string) => {
    setErrors(prev => prev.filter(error => error.id !== errorId));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Bug className="w-8 h-8 text-red-500" />
          <h2 className="text-2xl font-bold text-gray-800">Advanced Error Dashboard</h2>
        </div>
        <button
          onClick={refreshData}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center space-x-2"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Total Errors</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <Bug className="w-8 h-8 text-red-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Resolved</p>
                <p className="text-2xl font-bold">{stats.resolved}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">Unresolved</p>
                <p className="text-2xl font-bold">{stats.unresolved}</p>
              </div>
              <XCircle className="w-8 h-8 text-yellow-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Critical</p>
                <p className="text-2xl font-bold">{stats.critical}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-purple-200" />
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search errors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Types</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="network">Network</option>
          <option value="performance">Performance</option>
          <option value="security">Security</option>
        </select>
        
        <select
          value={filterSeverity}
          onChange={(e) => setFilterSeverity(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Severities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showResolved}
            onChange={(e) => setShowResolved(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-600">Show Resolved</span>
        </label>
      </div>

      {/* Error List */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredErrors.map((error, index) => (
            <motion.div
              key={error.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-lg border-2 ${getSeverityColor(error.severity)} ${
                error.resolved ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getTypeIcon(error.type)}
                    <span className="font-semibold">{error.message}</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-white bg-opacity-50">
                      {error.severity.toUpperCase()}
                    </span>
                    {error.resolved && (
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        RESOLVED
                      </span>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Component: {error.component || 'Unknown'}</div>
                    <div>URL: {error.url}</div>
                    <div>Time: {new Date(error.timestamp).toLocaleString()}</div>
                    {error.resolved && error.resolvedAt && (
                      <div>Resolved: {new Date(error.resolvedAt).toLocaleString()}</div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setSelectedError(error)}
                    className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-md"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  
                  {!error.resolved && (
                    <button
                      onClick={() => resolveError(error.id)}
                      className="p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-md"
                      title="Mark as Resolved"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  )}
                  
                  <button
                    onClick={() => deleteError(error.id)}
                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-md"
                    title="Delete Error"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Error Detail Modal */}
      <AnimatePresence>
        {selectedError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedError(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Error Details</h3>
                <button
                  onClick={() => setSelectedError(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="font-semibold text-gray-700">Message:</label>
                  <p className="text-gray-600">{selectedError.message}</p>
                </div>
                
                <div>
                  <label className="font-semibold text-gray-700">Type:</label>
                  <p className="text-gray-600 capitalize">{selectedError.type}</p>
                </div>
                
                <div>
                  <label className="font-semibold text-gray-700">Severity:</label>
                  <p className="text-gray-600 capitalize">{selectedError.severity}</p>
                </div>
                
                <div>
                  <label className="font-semibold text-gray-700">Component:</label>
                  <p className="text-gray-600">{selectedError.component || 'Unknown'}</p>
                </div>
                
                <div>
                  <label className="font-semibold text-gray-700">Stack Trace:</label>
                  <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                    {selectedError.stack || 'No stack trace available'}
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedErrorDashboard;