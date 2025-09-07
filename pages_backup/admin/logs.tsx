import path from 'path';

:pages/admin/logs.tsx
import fs from 'fs';
import path from 'path';
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
:pages/admin/logs.tsx
} from 'lucide-react';

import { logErrorToProduction } from '@/utils/productionLogger';
interface LogEntry {

  SelectTrigger,;
  SelectValue,;'
} from '@/components/ui/select';
import {;
  AlertTriangle,;
  Info,;
  AlertCircle,;
  XCircle,;
  Search,;
  Download,;
  RefreshCw,;
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,;
  SelectValue,;'
} from '@/components/ui/select';
import {}
  AlertTriangle,
  Info,
  AlertCircle,
  XCircle,
  Search,;
  Download,;
  RefreshCw,;'
} from 'lucide-react';

'
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';
import {}
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,';
} from '@/components / ui / select';
import {}
  AlertTriangle,
  Info,
  AlertCircle,
  XCircle,
  Search,

import path from 'path';

'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';'
import { Badge } from '@/components/ui/badge';'
import { Button } from '@/components/ui/button';'
import { Input } from '@/components/ui/input';

import fs from 'fs';
import path from 'path';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

  id: string;
  timestamp: string;

} from 'lucide-react';

'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';'
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
'
import { logErrorToProduction } from '@/utils/productionLogger';

import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw  } from 'lucide-react';
origin/cursor/automate-test-improve-and-merge-code-2533
import { logErrorToProduction } from '@/utils/productionLogger';

interface LogEntry {
interface LogEntry {;
  id: string;
  timestamp: string;

  stack?: string;
  url?: string;
  userAgent?: string;
  userId?: string;

  error?: {

  error?: {;
    name: string;
    message: string;
    stack?: string;

:pages/admin/logs.tsx
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
:pages/admin/logs.tsx
interface LogsPageProps {
}
;
interface LogsPageProps {;

  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;
    cause?: unknown
  },
  performance?: {
    memory?: number;
    timing?: number;
    fps?: number
  }
}

interface LogsPageProps {

  logs: LogEntry[];
  errorCount: number;
  warningCount: number;
  totalCount: number;
  lastUpdated: string
}

:pages/admin/logs.tsx
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

  lastUpdated: string
}

const LogLevelIcon = null;
  lastUpdated: string;
const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {
  switch (level) {
    case 'debug':
return <Info className='h-4 w-4 text-blue-500' />;

    case 'info':
      return <Info className="h-4 w-4 text-green-500" />,
    case 'warn':
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    case 'error':
      return <AlertCircle className="h-4 w-4 text-red-500" />,
    case 'critical':

  logs: initialLogs
  errorCount
  warningCount
  totalCount
  lastUpdated
:pages/admin/logs.tsx
}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);

  logs: initialLogs,
  errorCount,
  warningCount,
  totalCount,
  lastUpdated,;

      return <XCircle className="h-4 w-4 text-red-700" />,

    default: return <Info className="h-4 w-4 text-gray-500" />
;'
const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {;
  switch (level) {;'
    case 'debug':;

const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) => {;
  const colors = {;'
    debug: 'bg-blue-100 text-blue-800',;'
    info: 'bg-green-100 text-green-800',;'
    warn: 'bg-yellow-100 text-yellow-800',;'
    error: 'bg-red-100 text-red-800',;'
    critical: 'bg-red-200 text-red-900',;
  };

  return <Badge className={colors[level]}>{level && level.toUpperCase()}</Badge>;
};

export default function LogsPage(): any ({;
  logs: initialLogs,;
  errorCount,;
  warningCount,;
  totalCount,;
  lastUpdated,;
}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);

    cause?: unknown

  };
  performance?: {}
    memory?: number;
    timing?: number;
    fps?: number;
  }
}

interface LogsPageProps {

  logs: LogEntry[],
  errorCount: number,
  warningCount: number,
  totalCount: number,
  lastUpdated: string;
}

const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {
  switch (level) {
    case 'debug':
      return <Info className="h-4 w-4 text-blue-500" />;
    case 'info':
      return <Info className="h-4 w-4 text-green-500" />;
    case 'warn':
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    case 'error':
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    case 'critical':
      return <XCircle className="h-4 w-4 text-red-700" />;
    default: return <Info className="h-4 w-4 text-gray-500" />
  }
};

      return <XCircle className='h-4 w-4 text-red-700' />;
    default:
      return <Info className='h-4 w-4 text-gray-500' />;
  }
];
origin/cursor/automate-test-improve-and-merge-code-2533

const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) => {
  const colors = {
    debug: 'bg-blue-100 text-blue-800',
    info: 'bg-green-100 text-green-800',
    warn: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',

    critical: 'bg-red-200 text-red-900'},
  return (
    <Badge className={colors[level]}>
      {level.toUpperCase()}
    </Badge>
  )
};

  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);

critical: 'bg-red-200 text-red-900',
  };

  return <Badge className={colors[level]}>{level.toUpperCase()}</Badge>;
}
export default function LogsPage({
  logs: initialLogs,
  errorCount,
  warningCount,
  totalCount,
  lastUpdated,
}: LogsPageProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);

  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
:pages/admin/logs.tsx
  const categories = Array.from(new Set(logs.map(log => log.category))).filter(

    Boolean

const categories = Array.from(new Set(logs.map(log => log.category))).filter(
origin/cursor/automate-test-improve-and-merge-code-2533
    Boolean

  const categories = Array && Array.from(new Set(logs && logs.map(log => log && log.category))).filter(;
    Boolean;

  );
  const sources = Array && Array.from(new Set(logs && logs.map(log => log && log.source))).filter(;
    Boolean;
  );

      setLogs(mockLogs);
      setFilteredLogs(mockLogs);
      setLoading(false);
    }, 1000);
  }, []);

    let filtered = [...logs];
    if (searchTerm) {
      filtered = filtered.filter(
        log =>
          log.message.toLowerCase().includes(searchTerm.toLowerCase()) |
          log.category.toLowerCase().includes(searchTerm.toLowerCase()) |
          (log.component &&
            log.component.toLowerCase().includes(searchTerm.toLowerCase()))
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

      case 'debug': return 'bg-blue-100 text-blue-800';
      case 'info': return 'bg-green-100 text-green-800';
      case 'warn': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-red-200 text-red-900';

      default: return 'bg-gray-100 text-gray-800';    }

      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const exportLogs = () => {
origin/cursor/automate-test-improve-and-merge-code-2533
    const dataStr = JSON.stringify(filteredLogs, null, 2);
const dataUri =

      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;
:pages/admin/logs.tsx
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);

  };

  const exportLogs = () => {;
    const dataStr = JSON && JSON.stringify(filteredLogs, null, 2);
    const dataUri =;
'
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;

  const categories = Array.from(new Set(logs.map(log => log.category))).filter(Boolean);
  const sources = Array.from(new Set(logs.map(log => log.source))).filter(Boolean);
  useEffect(() => {;
    let filtered = logs;
    // Search filter;
    if (searchTerm) {;
      filtered = filtered.filter(log =>;
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()));
      );
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Level filter;'
    if (levelFilter !== 'all') {;
      filtered = filtered.filter(log => log.level === levelFilter);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Category filter;'
    if (categoryFilter !== 'all') {;
      filtered = filtered.filter(log => log.category === categoryFilter);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Source filter;'
    if (sourceFilter !== 'all') {;
      filtered = filtered.filter(log => log.source === sourceFilter);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setFilteredLogs(filtered);
  }, [logs, searchTerm, levelFilter, categoryFilter, sourceFilter]),;
  const refreshLogs = async () => {;
    setIsLoading(true);
    try {'
      const response = await fetch('/api/admin/logs');
      if (response.ok) {;
        const data = await response.json();
        setLogs(data.logs);
        } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {'
      logErrorToProduction('Failed to refresh logs:', error);
    } finally {;
      setIsLoading(false);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  const exportLogs = () => {;
    const dataStr = JSON.stringify(filteredLogs, null, 2);'
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);`
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`,;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);

    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
:pages/admin/logs.tsx
  }
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();  }
  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };

  const formatTimestamp = (timestamp: string) => {}
    return new Date(timestamp).toLocaleString();  }'
  const formatPerformance = (performance?: LogEntry['performance']) => {}
'
    const linkElement = document && document.createElement('a');'
    linkElement && linkElement.setAttribute('href', dataUri);'
    linkElement && linkElement.setAttribute('download', exportFileDefaultName);
    linkElement && linkElement.click();
  };

  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();  };
'
  const formatPerformance = (performance?: LogEntry['performance']) => {;

    if (!performance) return null;
    const parts = [];
    if (performance && performance.memory) {;`
      parts && parts.push(`Memory: ${(performance && performance.memory / 1024 / 1024).toFixed(1)}MB`);
    }
    if (performance && performance.timing) {;`
      parts && parts.push(`Timing: ${performance && performance.timing}ms`);
    }
    if (performance && performance.fps) {;`
      parts && parts.push(`FPS: ${performance && performance.fps}`);
    }
  return ('
    <div className='container mx-auto p-6 space-y-6'>;'
      <div className='flex items-center justify-between'>;'
        <h1 className='text-3xl font-bold'>System Logs & Error Monitoring</h1>;'
        <div className='flex items-center space-x-2'>;'
          <Button onClick={refreshLogs} disabled={isLoading} variant='outline'>;
            <RefreshCw'`
              className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}

    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);

    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`,;
'
    const linkElement = document.createElement('a');'
    linkElement.setAttribute('href', dataUri);'
    linkElement.setAttribute('download', exportFileDefaultName);

  }

  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };

  const formatPerformance = (performance?: LogEntry['performance']) => {
    if (!performance) return null;
    const parts = [];

    if (performance.memory) {
      parts.push(`Memory: ${(performance.memory / 1024 / 1024).toFixed(1)}MB`)
    }
    if (performance.timing) {
      parts.push(`Timing: ${performance.timing}ms`)
    }
    if (performance.fps) {
      parts.push(`FPS: ${performance.fps}`)
    }
:pages/admin/logs.tsx
    return parts.length > 0 ? parts.join(', ') : null;
  }
  const errorCount = logs.filter(log => log.level === 'error' |log.level === 'critical').length;
  const warningCount = logs.filter(log => log.level === 'warn').length;
  const totalCount = logs.length;

  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };

  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };

  const formatPerformance = (performance?: LogEntry['performance']) => {;

    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return parts.length > 0 ? parts.join() : null;
  },

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">System Logs & Error Monitoring</h1>
        <div className="flex items-center space-x-2">
          <Button onClick={refreshLogs} disabled={isLoading} variant="outline">

            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh;
          </Button>'
          <Button onClick={exportLogs} variant='outline'>'
            <Download className='h-4 w-4 mr-2' />
            Export;
          </Button>
        </div>
:pages/admin/logs.tsx
      {/* Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
:pages/admin/logs.tsx
            <div className='text-2xl font-bold'>{totalCount}</div>
            <p className='text-xs text-muted-foreground'>All log entries</p>          </CardContent>

            <div className="text-2xl font-bold">{totalCount}</div>

            <p className="text-xs text-muted-foreground">All log entries</p>
          </CardContent>
        </Card>
        <Card>
"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
            <CardTitle className="text-sm font-medium">Errors</CardTitle>"
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
:pages/admin/logs.tsx
          <CardContent>
            <div className='text-2xl font-bold text-red-600'>{errorCount}</div>
            <p className='text-xs text-muted-foreground'>
              Critical & error logs
            </p>          </CardContent>
          <CardContent>"
            <div className="text-2xl font-bold text-red-600">{errorCount}</div>"
            <p className="text-xs text-muted-foreground">Critical & error logs</p>
          </CardContent>

        </Card>
        <Card>
"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>"
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
:pages/admin/logs.tsx
          <CardContent>
            <div className='text-2xl font-bold text-yellow-600'>
              {warningCount}
            </div>
            <p className='text-xs text-muted-foreground'>Warning logs</p>          </CardContent>
          <CardContent>"
            <div className="text-2xl font-bold text-yellow-600">{warningCount}</div>"
            <p className="text-xs text-muted-foreground">Warning logs</p>
          </CardContent>

        </Card>
        <Card>
"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>"
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>"
            <div className="text-sm font-medium">{formatTimestamp(lastUpdated)}</div>"
            <p className="text-xs text-muted-foreground">Data freshness</p>
          </CardContent>

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
:pages/admin/logs.tsx
            <div className='text-sm font-medium'>
              {formatTimestamp(lastUpdated)}
            </div>
            <p className='text-xs text-muted-foreground'>Data freshness</p>          </CardContent>
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
origin/cursor/automate-test-improve-and-merge-code-2533
        </Card>
      </div>
      {/* Filters */}
:pages/admin/logs.tsx

      {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>

            <div className="relative">

              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input"
                placeholder="Search logs...""
                className="pl-8"

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
                <SelectValue placeholder="All levels" />
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
:pages/admin/logs.tsx
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>                ))}
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                ))}
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>

                onChange={e => setSearchTerm(e && e.target.value)}
              />;
            </div>;"
                <SelectValue placeholder="All sources" />

              </SelectTrigger>
              <SelectContent>"
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (
:pages/admin/logs.tsx
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      {/* Logs Table */}

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              </SelectContent>;
            </Select>;
          </div>;

      <Card>;
        <CardHeader>;
          <CardTitle > Log Entries ({filtered_logs.length})</CardTitle>;
        </CardHeader>;
        <CardContent>;'
          <div className='space - y-4'>;
            {filtered_logs.length > 0 ? (
              filtered_logs.map (log => ('
                <div key={log.id} className='border rounded - lg p - 4 space - y-2'>;'
                  <div className='flex items - center justify - between'>;'
                    <div className='flex items - center space - x-2'>;
                      <LogLevelIcon level={log.level} />;
                      <LogLevelBadge level={log.level} />;'
                      <Badge variant='outline'>{log.category}</Badge>;'
                      <Badge variant='secondary'>{log.source}</Badge>;
                      {log.component && ('
                        <Badge variant='outline'>{log.component}</Badge>)}
                    </div>;'
                    <span className='text - sm text - muted - foreground'>;
                      {format_timestamp (log.timestamp)}
                    </span>;
                  </div>;'
                  <div className='text - sm font - medium'>{log.message}</div>;
                  {log.context && Object.keys (log.context).length > 0 && ('
                    <details className='text - xs'>;'
                      <summary className='cursor - pointer text - muted - foreground hover:text - foreground'>;
                        View Context;
                      </summary>;'
                      <pre className='mt - 2 p - 2 bg - muted rounded text - xs overflow - x-auto'>                        {JSON.stringify (log.context, null, 2)}
                      </pre>;
                    </details>)}

                  {log.error && ('
                    <details className='text - xs'>;'
                      <summary className='cursor - pointer text - red - 600 hover:text - red - 800'>;
                        View Error Details;
                      </summary>;'
                      <div className='mt - 2 p - 2 bg - red - 50 rounded'>;
                        <div>;
                          <strong > Name:</strong> {log.error.name}
                        </div>;
                        <div>;
                          <strong > Message:</strong> {log.error.message}
                        </div>;
                        {log.error.stack && ('
                          <details className='mt - 2'>;'
                            <summary className='cursor - pointer'>;
                              Stack Trace;
                            </summary>;'
                            <pre className='mt - 1 text - xs overflow - x-auto'>;
                              {log.error.stack}

      <Card>
        <CardHeader>
          <CardTitle>Log Entries ({filteredLogs.length})</CardTitle>
        </CardHeader>

          <div className="space-y-4">

            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => ("
                <div key={log.id} className="border rounded-lg p-4 space-y-2">"
                  <div className="flex items-center justify-between">"
                    <div className="flex items-center space-x-2">
                      <LogLevelIcon level={log.level} />
                      <LogLevelBadge level={log.level} />"
                      <Badge variant="outline">{log.category}</Badge>"
                      <Badge variant="secondary">{log.source}</Badge>
                      {log.component && ("
                        <Badge variant="outline">{log.component}</Badge>
:pages/admin/logs.tsx
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatTimestamp(log.timestamp)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>
                  </div>
                  <div className='text-sm font-medium'>{log.message}</div>

                  {log.context && Object.keys(log.context).length > 0 && (
                    <details className="text-xs">

                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                        View Context;
                      </summary>
:pages/admin/logs.tsx
                      <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-x-auto'>                        {JSON.stringify(log.context, null, 2)}
                      </pre>
                    </details>
                  )}

                      <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
                        {JSON.stringify(log.context, null, 2)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </pre>;
                    </details>;
                  )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  {log.error && (

                    <details className="text-xs">
                      <summary className="cursor-pointer text-red-600 hover:text-red-800">

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

                      <div className="mt-2 p-2 bg-red-50 rounded">
                        <div><strong>Name:</strong> {log.error.name}</div>
                        <div><strong>Message:</strong> {log.error.message}</div>
                        {log.error.stack && ("
                          <details className="mt-2">"
                            <summary className="cursor-pointer">Stack Trace</summary>"
                            <pre className="mt-1 text-xs overflow-x-auto">{log.error.stack}</pre>
                          </details>

                </div>
              ))
            ) : ("
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>

                  )}
                </div>;
              ));
            ) : (;'
              <div className='text-center text-muted-foreground py-8'>                No logs found matching the current filters.;
              </div>;
"
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>

            )}
          </div>;
        </div>;
      </main>;
    </>;
  );

            }
          }
        } catch (fileError) {;
                            </pre>;
                          </details>)}"
                        <div className="flex items - center justify - between text - xs text - gray - 500">;
                          <div>;
                            {log.session_id && <span > Session: {log.session_id}</span>}
                            {log.user_id && <span> • User: {log.user_id}</span>}
                          </div>;
                          {log.performance && (
                            <div>{format_performance (log.performance)}</div>)}
                        </div>;
                      </div>;"
                      <div className="text - xs text - gray - 500 ml - 4">;
                        {new Date (log.timestamp).toLocaleString ()}
                      </div>;
                    </details>)}'
                  <div className='flex items - center justify - between text - xs text - muted - foreground'>                    <div>;
                      Session: {log.session_id}`
                      {log.user_id && ` • User: ${log.user_id}`}
                    </div>;
                  </div>;
                  {log.url && ('
                    <div className='text - xs text - muted - foreground truncate'>                      URL: {log.url}
                    </div>)}
                </div>))) : ('
              <div className='text - center text - muted - foreground py - 8'>                No logs found matching the current filters.;
              </div>)}
          </div>;
        </div>;
      </main>;
    </>);
}

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
                    </details>
                  )}

                  <div className='flex items-center justify-between text-xs text-muted-foreground'>
                    <div>
                      Session: {log.sessionId}
                      {log.userId && ` • User: ${log.userId}`}
                    </div>
</div>

                  {log.url && (
                    <div className='text-xs text-muted-foreground truncate'>
                      URL: {log.url}
                    </div>
                  )}
                </div>
              ))
            ) : (
:pages/admin/logs.tsx
              <div className='text-center text-muted-foreground py-8'>                No logs found matching the current filters.
<div className='text-center text-muted-foreground py-8'>
                No logs found matching the current filters.
              </div>
            )}
          </div>
</div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {

    const logs_dir = path.join (process.cwd (), 'logs');
    const logs: LogEntry[] = [];

              // Skip malformed log entries
origin/cursor/automate-test-improve-and-merge-code-2533
            }
          }
        } catch (file_error) {

          // Skip problematic files;
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

    }
  } catch (error) {
    logErrorToProduction ('Error reading logs:', error);    return {
      props: {

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
:pages/admin/logs.tsx
        logs: []
        errorCount: 0
        warningCount: 0
        totalCount: 0
        lastUpdated: new Date().toISOString()
      }
    }
  }
}

        logs: [],
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
:pages/admin/logs.tsx
        lastUpdated: new Date().toISOString(),
      },
    };
  }
};
  }
}

            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}

    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps = async () => {;
  try {'
    const logsDir = path.join(process.cwd(), 'logs'),;
    const logs: LogEntry[] = [];
    // Read all log files;
    if (fs.existsSync(logsDir)) {;
      const files = fs.readdirSync(logsDir);'
      const logFiles = files.filter(file => file.endsWith('.log'));
      for (const file of logFiles) {;
        try {}
          const filePath = path.join(logsDir, file);'
          const content = fs.readFileSync(filePath, 'utf-8');'
          const lines = content.split('\n').filter(line => line.trim());
          for (const line of lines) {;
            try {}
              const logEntry = JSON.parse(line);
              logs.push(logEntry);
            } catch (error) {}
              // Skip malformed log entries;
              } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        } catch (error) {}
          // Skip problematic files;
          } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

    // Sort logs by timestamp (newest first);
    logs && logs.sort(;
      (a, b) =>;
        new Date(b && b.timestamp).getTime() - new Date(a && a.timestamp).getTime();
    );

    // Calculate statistics;
    const errorCount = logs && logs.filter(;'
      log => log && log.level === 'error' || log && log.level === 'critical';'
    ).length;    const warningCount = logs && logs.filter(log => log && log.level === 'warn').length;
    const totalCount = logs && logs.length;

    return {;
      props: {;
        logs: logs && logs.slice(0, 1000), // Limit to most recent 1000 logs;
        errorCount,;
        warningCount,;
        totalCount,;
        lastUpdated: new Date().toISOString(),;
      },;
    };
  } catch (error) {;'
    logErrorToProduction('Error reading logs:', error);    return {;
      props: {;
        logs: [],;
        errorCount: 0,;
        warningCount: 0,;
        totalCount: 0,;
        lastUpdated: new Date().toISOString(),;
      },;
    };

  }
  }
}
};

        errorCount;
        warningCount;
        totalCount;
        lastUpdated: new Date().toISOString()}}
  } catch (error) {'
            logErrorToProduction('Error reading logs:', error);
    return {}
      props: {}
        logs: [],

lastUpdated: new Date().toISOString(),
      },
    };
  }
};
