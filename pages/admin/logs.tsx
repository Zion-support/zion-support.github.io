import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import {useState, useEffect} from 'react';
import {GetServerSideProps} from 'next';
=======


import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
=======
import {useState, useEffect} from 'react';
import {GetServerSideProps} from 'next';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';


import fs from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import {
  AlertTriangle,
  Info,
  AlertCircle,
  XCircle,
  Search,
  Download,;
  RefreshCw,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
} from 'lucide-react';


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
import {
  AlertTriangle,
  Info,
  AlertCircle,
  XCircle,
  Search,
=======

interface LogEntry {
=======

=======import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import {useState, useEffect} from 'react';
import {GetServerSideProps} from 'next';
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue;
} from '@/components/ui/select';
import {
  AlertTriangle
  Info
  AlertCircle
  XCircle
  Search
  Download
  RefreshCw;
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import {
  AlertTriangle,
  Info,
  AlertCircle,
  XCircle,
  Search,
  Download,;
  RefreshCw,;
} from 'lucide-react';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface LogEntry {
  lastUpdated: string;


=======

  lastUpdated: string;  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {
  switch (level) {
    case 'debug':
      return <Info className="h-4 w-4 text-blue-500" />,
    case 'info':
      return <Info className="h-4 w-4 text-green-500" />,
    case 'warn':
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    case 'error':
      return <AlertCircle className="h-4 w-4 text-red-500" />,
    case 'critical':

  logs: initialLogs,
  errorCount,
  warningCount,
  totalCount,
  lastUpdated,;

}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  return <Badge className={colors[level]}>{level && level.toUpperCase()}</Badge>;
};
export default function LogsPage(): any ({;
  logs: initialLogs,;
  errorCount,;
  warningCount,;
  totalCount,;
  lastUpdated,;
==============
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    cause?: unknown
  };
  performance?: {
    memory?: number;
    timing?: number;
    fps?: number
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LogsPageProps {
  logs: LogEntry[],
  errorCount: number,
  warningCount: number,
  totalCount: number,
  lastUpdated: string
}
export default function LogsPage({ logs: initialLogs, errorCount, warningCount, totalCount, lastUpdated }: LogsPageProps) {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);


  const categories = Array.from(new Set(logs.map(log => log.category))).filter(
    Boolean

  const categories = Array && Array.from(new Set(logs && logs.map(log => log && log.category))).filter(;
    Boolean;
  );
  const sources = Array && Array.from(new Set(logs && logs.map(log => log && log.source))).filter(;
    Boolean;
  );


  useEffect(() => {;
    // Simulate loading logs;
    setTimeout(() => {;

const categories = Array && Array.from(new Set(logs && logs.map(log => log && log.category))).filter(;
    Boolean;
  );
  const sources = Array && Array.from(new Set(logs && logs.map(log => log && log.source))).filter(;
    Boolean;
  );
  useEffect(() => {;
    // Simulate loading logs;
    setTimeout(() => {;
      setLogs(mockLogs);
      setFilteredLogs(mockLogs);
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {;
    let filtered = [...logs];
    if (searchTerm) {;
      filtered = filtered && filtered.filter(;
        log =>;
          log && log.message.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          log && log.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          (log && log.component &&;
            log && log.component.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
      );
    }
    if (levelFilter !== 'all') {;
      filtered = filtered && filtered.filter(log => log && log.level === levelFilter);
    }
    if (categoryFilter !== 'all') {;
      filtered = filtered && filtered.filter(log => log && log.category === categoryFilter);
    }
    setFilteredLogs(filtered);
  }, [logs, searchTerm, levelFilter, categoryFilter]);
  const getLevelColor = (level: string) => {;
    switch (level) {;
      case 'debug': return 'bg-blue-100 text-blue-800';
      case 'info': return 'bg-green-100 text-green-800';
      case 'warn': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-red-200 text-red-900';
      default: return 'bg-gray-100 text-gray-800';    }
  };
  const exportLogs = () => {;
    const dataStr = JSON && JSON.stringify(filteredLogs, null, 2);
    const dataUri =;
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;
    const linkElement = document && document.createElement('a');
    linkElement && linkElement.setAttribute('href', dataUri);
    linkElement && linkElement.setAttribute('download', exportFileDefaultName);
    linkElement && linkElement.click();
  };
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();  };
  const formatPerformance = (performance?: LogEntry['performance']) => {;
    if (!performance) return null;
    const parts = [];
    if (performance && performance.memory) {;
      parts && parts.push(`Memory: ${(performance && performance.memory / 1024 / 1024).toFixed(1)}MB`);
    }
    if (performance && performance.timing) {;
      parts && parts.push(`Timing: ${performance && performance.timing}ms`);
    }
    if (performance && performance.fps) {;
      parts && parts.push(`FPS: ${performance && performance.fps}`);
    }
    return parts && parts.length > 0 ? parts && parts.join(', ') : null;
  };
  const errorCount = logs && logs.filter(log => log && log.level === 'error' || log && log.level === 'critical').length;
  const warningCount = logs && logs.filter(log => log && log.level === 'warn').length;
  const totalCount = logs && logs.length;
  return (
    <div className='container mx-auto p-6 space-y-6'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-3xl font-bold'>System Logs & Error Monitoring</h1>;
        <div className='flex items-center space-x-2'>;
          <Button onClick={refreshLogs} disabled={isLoading} variant='outline'>;
            <RefreshCw
              className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
  const categories = Array.from(new Set(logs.map(log => log.category))).filter(Boolean);
  const sources = Array.from(new Set(logs.map(log => log.source))).filter(Boolean);
  useEffect(() => {
    let filtered = logs;
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(log =>
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
=======
    // Level filter
    if (levelFilter !== 'all') {
      filtered = filtered.filter(log => log.level === levelFilter)
    }

    // Source filter
    if (sourceFilter !== 'all') {
      filtered = filtered.filter(log => log.source === sourceFilter)
    }
setFilteredLogs(filtered)
  }, [logs, searchTerm, levelFilter, categoryFilter, sourceFilter]);
  const refreshLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/logs');
      if (response.ok) {
        const data = await response.json();

    setFilteredLogs(filtered)
  }, [logs, searchTerm, levelFilter, categoryFilter, sourceFilter]);

  const refreshLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/logs')
      if (response.ok) {
        const data = await response.json()

        setLogs(data.logs)
      }
    } catch (error) {
      logErrorToProduction('Failed to refresh logs:', error)
    } finally {
      setIsLoading(false)
    }
  };
const exportLogs = () => {
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);

  }

  performance?: {
    memory?: number;

  }

interface LogsPageProps {
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface LogEntry {
  id: string;
  timestamp: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical',;
  message: string;
  category: string;
  context?: Record<string, unknown>,;
  stack?: string,;
  url?: string,;
  userAgent?: string,;
  userId?: string,;
  sessionId: string;
  source: 'client' | 'server' | 'middleware' | 'api',;
  component?: string,;
  feature?: string,;
  error?: {;
    name: string;
    message: string;
    stack?: string,;
    cause?: unknown;
  },;
  performance?: {;
    memory?: number,;
    timing?: number,;
    fps?: number;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface LogsPageProps {;
  logs: LogEntry[];
  errorCount: number;
  warningCount: number;
  totalCount: number;

  lastUpdated: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {
  switch (level) {
    case 'debug':
      return <Info className="h-4 w-4 text-blue-500" />,
    case 'info':
      return <Info className="h-4 w-4 text-green-500" />,
    case 'warn':
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    case 'error':
      return <AlertCircle className="h-4 w-4 text-red-500" />,
    case 'critical':
      return <XCircle className='h-4 w-4 text-red-700' />;
    default:
      return <Info className='h-4 w-4 text-gray-500' />;
  }
];
const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) => {
  const colors = {
    debug: 'bg-blue-100 text-blue-800'
    info: 'bg-green-100 text-green-800'
    warn: 'bg-yellow-100 text-yellow-800'
    error: 'bg-red-100 text-red-800'
    critical: 'bg-red-200 text-red-900'
  }
  return <Badge className={colors[level]}>{level.toUpperCase()}</Badge>;
}
export default function LogsPage({
  logs: initialLogs
  errorCount
  warningCount
  totalCount
  lastUpdated
  logs: initialLogs,
  errorCount,
  warningCount,
  totalCount,
  lastUpdated,;
}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
      return <XCircle className="h-4 w-4 text-red-700" />,
    default: return <Info className="h-4 w-4 text-gray-500" />
;
const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {;
  switch (level) {;
    case 'debug':;
      return <Info className="h-4 w-4 text-blue-500" />;
    case 'info':;
      return <Info className="h-4 w-4 text-green-500" />;
    case 'warn':;
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    case 'error':;
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    case 'critical':;
      return <XCircle className="h-4 w-4 text-red-700" />,;
    default: return <Info className="h-4 w-4 text-gray-500" />;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) => {;
  const colors = {;
    debug: 'bg-blue-100 text-blue-800';
    info: 'bg-green-100 text-green-800';
    warn: 'bg-yellow-100 text-yellow-800';
    error: 'bg-red-100 text-red-800';
    critical: 'bg-red-200 text-red-900'},;
  return (;
    <Badge className={colors[level]}>;
      {level.toUpperCase()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </Badge>;
  );
},;
export default function LogsPage(req, res) {
  try {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
=======

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  const categories = Array.from(new Set(logs.map(log => log.category))).filter(
    Boolean
=======

  const categories = Array && Array.from(new Set(logs && logs.map(log => log && log.category))).filter(;
    Boolean;  );
  const sources = Array && Array.from(new Set(logs && logs.map(log => log && log.source))).filter(;
    Boolean;
  );


  useEffect(() => {;
    // Simulate loading logs;
    setTimeout(() => {;


  useEffect(() => {;
    let filtered = [...logs];

    if (searchTerm) {;
      filtered = filtered && filtered.filter(;
        log =>;
          log && log.message.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          log && log.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          (log && log.component &&;
            log && log.component.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
      );
    }

    if (levelFilter !== 'all') {;
      filtered = filtered && filtered.filter(log => log && log.level === levelFilter);
    }

    if (categoryFilter !== 'all') {;
      filtered = filtered && filtered.filter(log => log && log.category === categoryFilter);

    }
    setFilteredLogs(filtered);
  }, [logs, searchTerm, levelFilter, categoryFilter]);


  const getLevelColor = (level: string) => {;
    switch (level) {;

  };

  const exportLogs = () => {;
    const dataStr = JSON && JSON.stringify(filteredLogs, null, 2);
    const dataUri =;



=======
=======        </Card>
        <Card>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Errors</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{errorCount}</div>
            <p className="text-xs text-muted-foreground">Critical & error logs</p>
          </CardContent>
        </Card>
        <Card>

      {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs..."
                className="pl-8"

                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>

=======            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>


              <SelectTrigger>                onChange={e => setSearchTerm(e && e.target.value)}
              />;
            </div>;
                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (

              <SelectTrigger>>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                onChange={e => setSearchTerm(e && e.target.value)}
              />;
            </div>;
=======                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (
                  <SelectItem key={source} value={source}>
                {sources.map (source => (
                  <SelectItem key={source} value={source}>;
                    {source}
                  </SelectItem>                ))}
              </SelectContent>;
            </Select>;
          </div>;
      <Card>;
        <CardHeader>;
          <CardTitle > Log Entries ({filtered_logs.length})</CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='space - y-4'>;
            {filtered_logs.length > 0 ? (
              filtered_logs.map (log => (
                <div key={log.id} className='border rounded - lg p - 4 space - y-2'>;
                  <div className='flex items - center justify - between'>;
                    <div className='flex items - center space - x-2'>;
                      <LogLevelIcon level={log.level} />;
                      <LogLevelBadge level={log.level} />;
                      <Badge variant='outline'>{log.category}</Badge>;
                      <Badge variant='secondary'>{log.source}</Badge>;
                      {log.component && (
                        <Badge variant='outline'>{log.component}</Badge>)}
                    </div>;
                    <span className='text - sm text - muted - foreground'>;
                      {format_timestamp (log.timestamp)}
                    </span>;
                  </div>;
                  <div className='text - sm font - medium'>{log.message}</div>;
                  {log.context && Object.keys (log.context).length > 0 && (
                    <details className='text - xs'>;
                      <summary className='cursor - pointer text - muted - foreground hover:text - foreground'>;
                        View Context;
                      </summary>;
                      <pre className='mt - 2 p - 2 bg - muted rounded text - xs overflow - x-auto'>                        {JSON.stringify (log.context, null, 2)}
                      </pre>;
                    </details>)}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {log.error && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-red-600 hover:text-red-800">
                        View Error Details
                      </summary>
                      <div className="mt-2 p-2 bg-red-50 rounded">
                        <div><strong>Name:</strong> {log.error.name}</div>
                        <div><strong>Message:</strong> {log.error.message}</div>
                        {log.error.stack && (
                          <details className="mt-2">
                            <summary className="cursor-pointer">Stack Trace</summary>
                            <pre className="mt-1 text-xs overflow-x-auto">{log.error.stack}</pre>
                          </details>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-500">;
                          <div>;
                            {log && log.sessionId && <span>Session: {log && log.sessionId}</span>}
                            {log && log.userId && <span> • User: {log && log.userId}</span>}
                          </div>;
                          {log && log.performance && (;
                            <div>{formatPerformance(log && log.performance)}</div>;
                          )}
                        </div>;
                      </div>;
                      <div className="text-xs text-gray-500 ml-4">;
                        {new Date(log && log.timestamp).toLocaleString()}
                      </div>;
                    </details>;
                  )}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div>
                      Session: {log.sessionId}
                      {log.userId && ` • User: ${log.userId}`}
                    </div>
                    {log.performance && (
                      <div>{formatPerformance(log.performance)}</div>
                    )}
                  </div>
                  {log.url && (
                    <div className='text-xs text-muted-foreground truncate'>                      URL: {log.url}
                    </div>
                  )}
                        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                    </details>;
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div>
                      Session: {log.sessionId  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      {log.userId && ` • User: ${log.userId}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                    {log.performance && (;
                      <div>{formatPerformance(log.performance)}</div>;
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  {log.url && (
                    <div className="text-xs text-muted-foreground truncate">
                      URL: {log.url  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>
                  )}
                </div>;
              ));
            ) : (;
              <div className='text-center text-muted-foreground py-8'>                No logs found matching the current filters.;
              </div>;
=======
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>
            }
          }
        } catch (fileError) {;
=======


            }
          }
        } catch (fileError) {;
=======                            </pre>;
                          </details>)}
                        <div className="flex items - center justify - between text - xs text - gray - 500">;
                          <div>;
                            {log.session_id && <span > Session: {log.session_id}</span>}
                            {log.user_id && <span> • User: {log.user_id}</span>}
                          </div>;
                          {log.performance && (
                            <div>{format_performance (log.performance)}</div>)}
                        </div>;
                      </div>;
                      <div className="text - xs text - gray - 500 ml - 4">;
                        {new Date (log.timestamp).toLocaleString ()}
                      </div>;
                    </details>)}
                  <div className='flex items - center justify - between text - xs text - muted - foreground'>                    <div>;
                      Session: {log.session_id}
                      {log.user_id && ` • User: ${log.user_id}`}
                    </div>;
                  </div>;
                  {log.url && (
                    <div className='text - xs text - muted - foreground truncate'>                      URL: {log.url}
                    </div>)}
                </div>))) : (
              <div className='text - center text - muted - foreground py - 8'>                No logs found matching the current filters.;
              </div>)}
          </div>;
        </div>;
      </main>;
    </>);
}
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const logs_dir = path.join (process.cwd (), 'logs');
    const logs: LogEntry[] = [];
              // Skip malformed log entries;
            }
          }
        } catch (file_error) {
    // Sort logs by timestamp (newest first)
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    // Calculate statistics
    const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const warningCount = logs.filter(log => log.level === 'warn').length;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


    // Sort logs by timestamp (newest first)
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Calculate statistics
    const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const warningCount = logs.filter(log => log.level === 'warn').length;
    const totalCount = logs.length;
    return {
      props: {
        logs: logs.slice(0, 1000), // Limit to most recent 1000 logs
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    // Sort logs by timestamp (newest first);
    logs.sort (
      (a, b) =>;
        new Date (b.timestamp).get_time () - new Date (a.timestamp).get_time ());
;
    // Calculate statistics;
    const error_count = logs.filter (
      log => log.level === 'error' || log.level === 'critical').length;    const warning_count = logs.filter (log => log.level === 'warn').length;
    const total_count = logs.length;
;
    return {
      props: {
        logs: logs.slice (0, 1000), // Limit to most recent 1000 logs;
        error_count,
        warning_count,
        total_count,
        last_updated: new Date ().toISOString (),
      },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
  } catch (error) {
    logErrorToProduction ('Error reading logs:', error);    return {
      props: {
        logs: []
        errorCount: 0
        warningCount: 0
        totalCount: 0
        lastUpdated: new Date().toISOString()
      }
    }
=======
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        logs: [],
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
        lastUpdated: new Date().toISOString(),
      },
    };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Calculate statistics;
    const errorCount = logs && logs.filter(;
      log => log && log.level === 'error' || log && log.level === 'critical';
    ).length;    const warningCount = logs && logs.filter(log => log && log.level === 'warn').length;
    const totalCount = logs && logs.length;
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
