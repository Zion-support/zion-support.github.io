<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertTriangle,
  Info,
  AlertCircle,
  XCircle,
  Search,
  Download,
  RefreshCw,
} from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
=======
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468

interface LogEntry {
  id: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;
  component?: string;
  timestamp: string;
  sessionId?: string;
  userId?: string;
  error?: {
    name: string;
    stack?: string;
  };
  performance?: {
    duration: number;
    memory?: number;
  };
}

<<<<<<< HEAD
interface LogsPageProps {
  logs: LogEntry[];
  errorCount: number;
  warningCount: number;
  totalCount: number;
  lastUpdated: string;
}

const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {
  switch (level) {
    case 'debug':
      return <Info className='h-4 w-4 text-blue-500' />;
    case 'info':
      return <Info className='h-4 w-4 text-green-500' />;
    case 'warn':
      return <AlertTriangle className='h-4 w-4 text-yellow-500' />;
    case 'error':
      return <AlertCircle className='h-4 w-4 text-red-500' />;
    case 'critical':
      return <XCircle className='h-4 w-4 text-red-700' />;
    default:
      return <Info className='h-4 w-4 text-gray-500' />;
=======
const mockLogs: LogEntry[] = [
  {
    id: '1',
    level: 'info',
    message: 'User logged in successfully',
    category: 'authentication',
    component: 'LoginForm',
    timestamp: '2025-01-15T10:00:00Z',
    sessionId: 'sess_123',
    userId: 'user_456'
  },
  {
    id: '2',
    level: 'error',
    message: 'Failed to process payment',
    category: 'payment',
    component: 'PaymentProcessor',
    timestamp: '2025-01-15T10:05:00Z',
    sessionId: 'sess_124',
    userId: 'user_789',
    error: {
      name: 'PaymentError',
      stack: 'Error: Payment failed\n    at PaymentProcessor.process...'
    }
  },
  {
    id: '3',
    level: 'warn',
    message: 'High memory usage detected',
    category: 'performance',
    component: 'MemoryMonitor',
    timestamp: '2025-01-15T10:10:00Z',
    performance: {
      duration: 1500,
      memory: 85
    }
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  }
];

<<<<<<< HEAD
const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) => {
  const colors = {
    debug: 'bg-blue-100 text-blue-800',
    info: 'bg-green-100 text-green-800',
    warn: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    critical: 'bg-red-200 text-red-900',
  };

  return <Badge className={colors[level]}>{level.toUpperCase()}</Badge>;
};

export default function LogsPage({
  logs: initialLogs,
  errorCount,
  warningCount,
  totalCount,
  lastUpdated,
}: LogsPageProps) {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

  const categories = Array.from(new Set(logs.map(log => log.category))).filter(
    Boolean
  );
  const sources = Array.from(new Set(logs.map(log => log.source))).filter(
    Boolean
  );
=======
const AdminLogsPage: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468

  useEffect(() => {
    // Simulate loading logs
    setTimeout(() => {
      setLogs(mockLogs);
      setFilteredLogs(mockLogs);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = [...logs];

    if (searchTerm) {
<<<<<<< HEAD
      filtered = filtered.filter(
        log =>
          log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
          log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (log.component &&
            log.component.toLowerCase().includes(searchTerm.toLowerCase()))
=======
      filtered = filtered.filter(log => 
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()))
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      );
    }

    if (levelFilter !== 'all') {
      filtered = filtered.filter(log => log.level === levelFilter);
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(log => log.category === categoryFilter);
    }

    setFilteredLogs(filtered);
  }, [logs, searchTerm, levelFilter, categoryFilter]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'debug': return 'bg-blue-100 text-blue-800';
      case 'info': return 'bg-green-100 text-green-800';
      case 'warn': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-red-200 text-red-900';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

<<<<<<< HEAD
  const exportLogs = () => {
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const formatPerformance = (performance?: LogEntry['performance']) => {
    if (!performance) return null;

    const parts = [];
    if (performance.memory) {
      parts.push(`Memory: ${(performance.memory / 1024 / 1024).toFixed(1)}MB`);
    }
    if (performance.timing) {
      parts.push(`Timing: ${performance.timing}ms`);
    }
    if (performance.fps) {
      parts.push(`FPS: ${performance.fps}`);
    }

=======
  const formatPerformance = (performance: LogEntry['performance']) => {
    if (!performance) return null;
    const parts = [];
    if (performance.duration) parts.push(`${performance.duration}ms`);
    if (performance.memory) parts.push(`${performance.memory}% memory`);
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
    return parts.length > 0 ? parts.join(', ') : null;
  };

  const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
  const warningCount = logs.filter(log => log.level === 'warn').length;
  const totalCount = logs.length;

  return (
<<<<<<< HEAD
    <div className='container mx-auto p-6 space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>System Logs & Error Monitoring</h1>
        <div className='flex items-center space-x-2'>
          <Button onClick={refreshLogs} disabled={isLoading} variant='outline'>
            <RefreshCw
              className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
            />
            Refresh
          </Button>
          <Button onClick={exportLogs} variant='outline'>
            <Download className='h-4 w-4 mr-2' />
            Export
          </Button>
=======
    <>
      <Head>
        <title>Admin Logs - Zion Tech Group</title>
        <meta name="description" content="System logs and monitoring dashboard" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">System Logs</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Logs</h3>
            <p className="text-2xl font-bold">{totalCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Errors</h3>
            <p className="text-2xl font-bold text-red-600">{errorCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Warnings</h3>
            <p className="text-2xl font-bold text-yellow-600">{warningCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
            <p className="text-sm">{new Date().toLocaleString()}</p>
          </div>
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
        </div>

<<<<<<< HEAD
      {/* Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Logs</CardTitle>
            <Info className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{totalCount}</div>
            <p className='text-xs text-muted-foreground'>All log entries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Errors</CardTitle>
            <XCircle className='h-4 w-4 text-red-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-red-600'>{errorCount}</div>
            <p className='text-xs text-muted-foreground'>
              Critical & error logs
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Warnings</CardTitle>
            <AlertTriangle className='h-4 w-4 text-yellow-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-yellow-600'>
              {warningCount}
            </div>
            <p className='text-xs text-muted-foreground'>Warning logs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Last Updated</CardTitle>
            <RefreshCw className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-sm font-medium'>
              {formatTimestamp(lastUpdated)}
            </div>
            <p className='text-xs text-muted-foreground'>Data freshness</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='relative'>
              <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                placeholder='Search logs...'
                className='pl-8'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder='All levels' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Levels</SelectItem>
                <SelectItem value='debug'>Debug</SelectItem>
                <SelectItem value='info'>Info</SelectItem>
                <SelectItem value='warn'>Warning</SelectItem>
                <SelectItem value='error'>Error</SelectItem>
                <SelectItem value='critical'>Critical</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder='All categories' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>
                <SelectValue placeholder='All sources' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Sources</SelectItem>
                {sources.map(source => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
=======
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search logs..."
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Level</label>
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Levels</option>
                <option value="debug">Debug</option>
                <option value="info">Info</option>
                <option value="warn">Warning</option>
                <option value="error">Error</option>
                <option value="critical">Critical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Categories</option>
                <option value="authentication">Authentication</option>
                <option value="payment">Payment</option>
                <option value="performance">Performance</option>
                <option value="system">System</option>
              </select>
            </div>
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
          </div>
        </div>

<<<<<<< HEAD
      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Log Entries ({filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {filteredLogs.length > 0 ? (
              filteredLogs.map(log => (
                <div key={log.id} className='border rounded-lg p-4 space-y-2'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <LogLevelIcon level={log.level} />
                      <LogLevelBadge level={log.level} />
                      <Badge variant='outline'>{log.category}</Badge>
                      <Badge variant='secondary'>{log.source}</Badge>
                      {log.component && (
                        <Badge variant='outline'>{log.component}</Badge>
                      )}
                    </div>
                    <span className='text-sm text-muted-foreground'>
                      {formatTimestamp(log.timestamp)}
                    </span>
                  </div>

                  <div className='text-sm font-medium'>{log.message}</div>

                  {log.context && Object.keys(log.context).length > 0 && (
                    <details className='text-xs'>
                      <summary className='cursor-pointer text-muted-foreground hover:text-foreground'>
                        View Context
                      </summary>
                      <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-x-auto'>
                        {JSON.stringify(log.context, null, 2)}
                      </pre>
                    </details>
                  )}

                  {log.error && (
                    <details className='text-xs'>
                      <summary className='cursor-pointer text-red-600 hover:text-red-800'>
                        View Error Details
                      </summary>
                      <div className='mt-2 p-2 bg-red-50 rounded'>
                        <div>
                          <strong>Name:</strong> {log.error.name}
                        </div>
                        <div>
                          <strong>Message:</strong> {log.error.message}
                        </div>
                        {log.error.stack && (
                          <details className='mt-2'>
                            <summary className='cursor-pointer'>
                              Stack Trace
                            </summary>
                            <pre className='mt-1 text-xs overflow-x-auto'>
                              {log.error.stack}
                            </pre>
=======
        {/* Logs Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Log Entries ({filteredLogs.length})</h2>
          </div>
          <div className="p-6">
            {loading ? (
              <div className="text-center py-8">Loading logs...</div>
            ) : filteredLogs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No logs found matching the current filters.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLogs.map((log) => (
                  <div key={log.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getLevelColor(log.level)}`}>
                            {log.level.toUpperCase()}
                          </span>
                          <span className="text-sm text-gray-500">{log.category}</span>
                          {log.component && (
                            <span className="text-sm text-gray-500">• {log.component}</span>
                          )}
                        </div>
                        <p className="text-gray-900 mb-2">{log.message}</p>
                        {log.error && (
                          <details className="mb-2">
                            <summary className="cursor-pointer text-sm text-red-600 hover:text-red-800">
                              View Error Details
                            </summary>
                            <div className="mt-2 p-2 bg-red-50 rounded">
                              <div><strong>Name:</strong> {log.error.name}</div>
                              {log.error.stack && (
                                <div className="mt-2">
                                  <strong>Stack:</strong>
                                  <pre className="text-xs mt-1 whitespace-pre-wrap">{log.error.stack}</pre>
                                </div>
                              )}
                            </div>
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
                          </details>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div>
                            {log.sessionId && <span>Session: {log.sessionId}</span>}
                            {log.userId && <span> • User: {log.userId}</span>}
                          </div>
                          {log.performance && (
                            <div>{formatPerformance(log.performance)}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 ml-4">
                        {new Date(log.timestamp).toLocaleString()}
                      </div>
<<<<<<< HEAD
                    </details>
                  )}

                  <div className='flex items-center justify-between text-xs text-muted-foreground'>
                    <div>
                      Session: {log.sessionId}
                      {log.userId && ` • User: ${log.userId}`}
=======
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
                    </div>
                  </div>
<<<<<<< HEAD

                  {log.url && (
                    <div className='text-xs text-muted-foreground truncate'>
                      URL: {log.url}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className='text-center text-muted-foreground py-8'>
                No logs found matching the current filters.
=======
                ))}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const logsDir = path.join(process.cwd(), 'logs');
    const logs: LogEntry[] = [];

    // Read all log files
    if (fs.existsSync(logsDir)) {
      const files = fs.readdirSync(logsDir);
      const logFiles = files.filter(file => file.endsWith('.log'));

      for (const file of logFiles) {
        try {
          const filePath = path.join(logsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const lines = content.split('\n').filter(line => line.trim());

          for (const line of lines) {
            try {
              const logEntry = JSON.parse(line);
              logs.push(logEntry);
            } catch (parseError) {
              // Skip malformed log entries
            }
          }
        } catch (fileError) {
          // Skip problematic files
        }
      }
    }

    // Sort logs by timestamp (newest first)
    logs.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    // Calculate statistics
    const errorCount = logs.filter(
      log => log.level === 'error' || log.level === 'critical'
    ).length;
    const warningCount = logs.filter(log => log.level === 'warn').length;
    const totalCount = logs.length;

    return {
      props: {
        logs: logs.slice(0, 1000), // Limit to most recent 1000 logs
        errorCount,
        warningCount,
        totalCount,
        lastUpdated: new Date().toISOString(),
      },
    };
  } catch (error) {
    logErrorToProduction('Error reading logs:', error);
    return {
      props: {
        logs: [],
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
        lastUpdated: new Date().toISOString(),
      },
    };
  }
};
=======
export default AdminLogsPage;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
