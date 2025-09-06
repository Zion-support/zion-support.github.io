<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

=======
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
=======
import {useState, useEffect} from 'react';
import {GetServerSideProps} from 'next';
=======
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';


import fs from 'fs';
import path from 'path';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

<<<<<<< HEAD
} from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';

import { logErrorToProduction } from '@/utils/productionLogger';
=======

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect  } from 'react';
import { GetServerSideProps  } from 'next';
import fs from 'fs',
import path from 'path';
<<<<<<< HEAD
import {;
  Select,;
  SelectContent,;
  SelectItem,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import {;
  AlertTriangle,;
  Info,;
  AlertCircle,;
  XCircle,;
  Search,;
  Download,;
  RefreshCw,;
} from 'lucide-react';
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface LogEntry {
=======
  Download,
  RefreshCw,
} from 'lucide-react';
import { logErrorToProduction } from '@/utils / production_logger';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

import { useState, useEffect } from 'react';
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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
interface LogEntry {
interface LogEntry {;
  id: string;
  timestamp: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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

=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface LogEntry {
  id: string,
  timestamp: string,
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical',
  message: string,
  category: string,
  context?: Record<string, unknown>;
<<<<<<< HEAD

=======
=======
  context?: Record<string, unknown>,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  stack?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
<<<<<<< HEAD

  component?: string;
  timestamp: string;
  session_id?: string;
  user_id?: string;

=======
component?: string;
  timestamp: string;
  session_id?: string;
  user_id?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  error?: {
  error?: {;
    name: string;
    message: string;
    stack?: string;
<<<<<<< HEAD





  };
  performance?: {;
    duration: number;

=======
<<<<<<< HEAD
  };
  performance?: {;
    duration: number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    memory?: number;
  }
interface LogsPageProps {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  logs: LogEntry[];
  errorCount: number;
  warningCount: number;
  totalCount: number;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  lastUpdated: string;

<<<<<<< HEAD
=======
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
  logs: initialLogs,
  errorCount,
  warningCount,
  totalCount,
  lastUpdated,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
}
},;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) => {;
  const colors = {;
    debug: 'bg-blue-100 text-blue-800',;
    info: 'bg-green-100 text-green-800',;
    warn: 'bg-yellow-100 text-yellow-800',;
    error: 'bg-red-100 text-red-800',;
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    cause?: unknown
  };
  performance?: {
    memory?: number;
    timing?: number;
    fps?: number
  }
}
interface LogsPageProps {
  logs: LogEntry[],
  errorCount: number,
  warningCount: number,
  totalCount: number,
  lastUpdated: string
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

export default function LogsPage({ logs: initialLogs, errorCount, warningCount, totalCount, lastUpdated }: LogsPageProps) {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const categories = Array.from(new Set(logs.map(log => log.category))).filter(
    Boolean
=======

  const categories = Array && Array.from(new Set(logs && logs.map(log => log && log.category))).filter(;
    Boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  const sources = Array && Array.from(new Set(logs && logs.map(log => log && log.source))).filter(;
    Boolean;
  );


  useEffect(() => {;
    // Simulate loading logs;
    setTimeout(() => {;

=======
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

    // Level filter
    if (levelFilter !== 'all') {
      filtered = filtered.filter(log => log.level === levelFilter)
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(log => log.category === categoryFilter)
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
=======

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
  useEffect(() => {
    // Simulate loading logs
    setTimeout(() => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setLogs(mockLogs);
      setFilteredLogs(mockLogs);
      setLoading(false);
    }, 1000);
  }, []);
<<<<<<< HEAD


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

=======
  useEffect(() => {
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
  const getLevelColor = (level: string) => {
    switch (level) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case 'debug': return 'bg-blue-100 text-blue-800';
      case 'info': return 'bg-green-100 text-green-800';
      case 'warn': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-red-200 text-red-900';
      default: return 'bg-gray-100 text-gray-800';    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  const exportLogs = () => {

=======

  };

  const exportLogs = () => {;
    const dataStr = JSON && JSON.stringify(filteredLogs, null, 2);
    const dataUri =;

=======
  }
  const exportLogs = () => {
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri =
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Level filter;
    if (levelFilter !== 'all') {;
      filtered = filtered.filter(log => log.level === levelFilter);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Category filter;
    if (categoryFilter !== 'all') {;
      filtered = filtered.filter(log => log.category === categoryFilter);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Source filter;
    if (sourceFilter !== 'all') {;
      filtered = filtered.filter(log => log.source === sourceFilter);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setFilteredLogs(filtered);
  }, [logs, searchTerm, levelFilter, categoryFilter, sourceFilter]),;
  const refreshLogs = async () => {;
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/logs');
      if (response.ok) {;
        const data = await response.json();
        setLogs(data.logs);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      logErrorToProduction('Failed to refresh logs:', error);
    } finally {;
      setIsLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  const exportLogs = () => {;

<<<<<<< HEAD
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`,;

=======


    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

<<<<<<< HEAD
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();  }
  const formatPerformance = (performance?: LogEntry['performance']) => {
=======

    const linkElement = document && document.createElement('a');
    linkElement && linkElement.setAttribute('href', dataUri);
    linkElement && linkElement.setAttribute('download', exportFileDefaultName);
    linkElement && linkElement.click();
  };

  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();  };

  const formatPerformance = (performance?: LogEntry['performance']) => {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Logs</CardTitle>
            <Info className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{totalCount}</div>
            <p className='text-xs text-muted-foreground'>All log entries</p>          </CardContent>
=======

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Level filter;
    if (levelFilter !== 'all') {;
      filtered = filtered.filter(log => log.level === levelFilter);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Category filter;
    if (categoryFilter !== 'all') {;
      filtered = filtered.filter(log => log.category === categoryFilter);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Source filter;
    if (sourceFilter !== 'all') {;
      filtered = filtered.filter(log => log.source === sourceFilter);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setFilteredLogs(filtered);
  }, [logs, searchTerm, levelFilter, categoryFilter, sourceFilter]),;
  const refreshLogs = async () => {;
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/logs');
      if (response.ok) {;
        const data = await response.json();
        setLogs(data.logs);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      logErrorToProduction('Failed to refresh logs:', error);
    } finally {;
      setIsLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  const exportLogs = () => {;
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`,;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
<<<<<<< HEAD
    linkElement.click()
  };
const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  };
=======
    linkElement.click();
  }
  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();  }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
<<<<<<< HEAD
    return parts.length > 0 ? parts.join(', ') : null;
  }
  const errorCount = logs.filter(log => log.level === 'error' |log.level === 'critical').length;
  const warningCount = logs.filter(log => log.level === 'warn').length;
  const totalCount = logs.length;

  const formatPerformance = (performance?: LogEntry['performance']) => {;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return parts.length > 0 ? parts.join() : null
  },
=======
    
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return parts.length > 0 ? parts.join() : null
=======

  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();

  };
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    return parts.length > 0 ? parts.join(', ') : null;
  }
  const errorCount = logs.filter(log => log.level === 'error' |log.level === 'critical').length;
  const warningCount = logs.filter(log => log.level === 'warn').length;
  const totalCount = logs.length;
  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const formatPerformance = (performance?: LogEntry['performance']) => {;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return parts.length > 0 ? parts.join() : null
  },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">System Logs & Error Monitoring</h1>
        <div className="flex items-center space-x-2">
          <Button onClick={refreshLogs} disabled={isLoading} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button onClick={exportLogs} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
{/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      </div>
      {/* Summary Cards */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCount}</div>
            <p className="text-xs text-muted-foreground">All log entries</p>
          </CardContent>
        </Card>
        <Card>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Errors</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{errorCount}</div>
            <p className="text-xs text-muted-foreground">Critical & error logs</p>
          </CardContent>
<<<<<<< HEAD

        </Card>
        <Card>

=======
        </Card>
        <Card>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{warningCount}</div>
            <p className="text-xs text-muted-foreground">Warning logs</p>
          </CardContent>
<<<<<<< HEAD

        </Card>
        <Card>

=======
        </Card>
        <Card>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">{formatTimestamp(lastUpdated)}</div>
            <p className="text-xs text-muted-foreground">Data freshness</p>
          </CardContent>
<<<<<<< HEAD

        </Card>
      </div>

<<<<<<< HEAD
=======
=======
        </Card>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />;
            Refresh;
          </Button>;
          <Button onClick={exportLogs} variant='outline'>;
            <Download className='h-4 w-4 mr-2' />;
            Export;
          </Button>;
        </div>;
      {/* Summary Cards */}

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>;
        <Card>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>Total Logs</CardTitle>;
            <Info className='h-4 w-4 text-muted-foreground' />;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold'>{totalCount}</div>;
            <p className='text-xs text-muted-foreground'>All log entries</p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>Errors</CardTitle>;
            <XCircle className='h-4 w-4 text-red-500' />;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold text-red-600'>{errorCount}</div>;
            <p className='text-xs text-muted-foreground'>;
              Critical & error logs;
            </p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>Warnings</CardTitle>;
            <AlertTriangle className='h-4 w-4 text-yellow-500' />;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold text-yellow-600'>;
              {warningCount}
            </div>;
            <p className='text-xs text-muted-foreground'>Warning logs</p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>Last Updated</CardTitle>;
            <RefreshCw className='h-4 w-4 text-muted-foreground' />;
          </CardHeader>;
          <CardContent>;
            <div className='text-sm font-medium'>;
              {formatTimestamp(lastUpdated)}
            </div>;
            <p className='text-xs text-muted-foreground'>Data freshness</p>          </CardContent>;
        </Card>;
      </div>;
      {/* Filters */}
<<<<<<< HEAD

=======

=======
=======
<<<<<<< HEAD
      {/* Filters */}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      {/* Filters */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
=======
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs..."
                className="pl-8"
<<<<<<< HEAD
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
<Select value={levelFilter} onValueChange={setLevelFilter}>
=======
                value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              />
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <SelectTrigger>
                <SelectValue placeholder="All levels" />
              </SelectTrigger>
              <SelectContent>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <SelectTrigger>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
<Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                onChange={e => setSearchTerm(e && e.target.value)}
              />;
            </div>;
                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
                  <SelectItem key={source} value={source}>{source}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
<Select value={levelFilter} onValueChange={setLevelFilter}>;
              <SelectTrigger>;
                <SelectValue placeholder='All levels' />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value='all'>All Levels</SelectItem>;
                <SelectItem value='debug'>Debug</SelectItem>;
                <SelectItem value='info'>Info</SelectItem>;
                <SelectItem value='warn'>Warning</SelectItem>;
                <SelectItem value='error'>Error</SelectItem>;
                <SelectItem value='critical'>Critical</SelectItem>              </SelectContent>;
            </Select>;
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>;
              <SelectTrigger>;
                <SelectValue placeholder='All categories' />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value='all'>All Categories</SelectItem>;
                {categories && categories.map(category => (;
                  <SelectItem key={category} value={category}>;
                    {category}
                  </SelectItem>                ))}
              </SelectContent>;
            </Select>;
            <Select value={sourceFilter} onValueChange={setSourceFilter}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  performance?: {
    duration: number;
    memory?: number;
  }
;
interface LogsPageProps {
  logs: LogEntry[];
  error_count: number;
  warning_count: number;
  total_count: number;
  last_updated: string;
const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) =>: any {
  switch (level) {
    case 'debug':;
      return <Info className='h - 4 w - 4 text - blue - 500' />;
    case 'info':;
      return <Info className='h - 4 w - 4 text - green - 500' />;
    case 'warn':;
      return <AlertTriangle className='h - 4 w - 4 text - yellow - 500' />;
    case 'error':;
      return <AlertCircle className='h - 4 w - 4 text - red - 500' />;
    case 'critical':;
      return <XCircle className='h - 4 w - 4 text - red - 700' />;
    default:;
      return <Info className='h - 4 w - 4 text - gray - 500' />;
  }
];
const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) =>: any {
  const colors = {
    debug: 'bg - blue - 100 text - blue - 800',
    info: 'bg - green - 100 text - green - 800',
    warn: 'bg - yellow - 100 text - yellow - 800',
    error: 'bg - red - 100 text - red - 800',
    critical: 'bg - red - 200 text - red - 900',
  }
;
  return <Badge className={colors[level]}>{level.toUpperCase ()}</Badge>;
}
;
export default /**
 * LogsPage - Function description
 */
function LogsPage() {  const [logs, set_logs] = useState < LogEntry[]>(initial_logs);
  const [filtered_logs, setFilteredLogs] = useState < LogEntry[]>(initial_logs);
  const [search_term, setSearchTerm] = useState ('');
  const [level_filter, setLevelFilter] = useState < string>('all');
  const [category_filter, setCategoryFilter] = useState < string>('all');
  const [source_filter, setSourceFilter] = useState < string>('all');
  const [is_loading, setIsLoading] = useState (false);
;
  const categories = Array.from (new Set (logs.map (log => log.category))).filter (
    Boolean);
  const sources = Array.from (new Set (logs.map (log => log.source))).filter (
    Boolean);
;
  useEffect (() => {
    // Simulate loading logs;
    set_timeout (() => {
      set_logs (mock_logs);
      setFilteredLogs (mock_logs);
      set_loading (false);
    }, 1000);
  }, []);
;
  useEffect (() => {
    let filtered = [...logs];
;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        log =>;
          log.message.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          log.category.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          (log.component &&;
            log.component.toLowerCase ().includes (search_term.toLowerCase ())));
    }
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (log => log.level === level_filter);
    }
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (log => log.category === category_filter);
    }
    setFilteredLogs (filtered);
  }, [logs, search_term, level_filter, category_filter]);
;
  const getLevelColor = (level: string) =>: any {
    switch (level) {
      case 'debug': return 'bg - blue - 100 text - blue - 800';
      case 'info': return 'bg - green - 100 text - green - 800';
      case 'warn': return 'bg - yellow - 100 text - yellow - 800';
      case 'error': return 'bg - red - 100 text - red - 800';
      case 'critical': return 'bg - red - 200 text - red - 900';
      default: return 'bg - gray - 100 text - gray - 800';    }
  }
;
  const export_logs = () =>: any {
    const data_str = JSON.stringify (filtered_logs, null, 2);
    const data_uri =;
      'data:application / json;charset = utf - 8, ' + encodeURIComponent (data_str);
;
    const exportFileDefaultName = `logs-${new Date ().toISOString ().slice (0, 10)}.json`;
;
    const link_element = document.create_element ('a');
    link_element.set_attribute ('href', data_uri);
    link_element.set_attribute ('download', exportFileDefaultName);
    link_element.click ();
  }
;
  const format_timestamp = (timestamp: string) =>: any {
    return new Date (timestamp).toLocaleString ();  }
;
  const format_performance = (performance?: LogEntry['performance']) =>: any {
    // Check condition
if (return null) {
  $2
}
    const parts = [];
    // Check condition
if ( {) {
  $2
}
      parts.push (`Memory: ${(performance.memory / 1024 / 1024).to_fixed (1)}MB`);
    }
    // Check condition
if ( {) {
  $2
}
      parts.push (`Timing: ${performance.timing}ms`);
    }
    // Check condition
if ( {) {
  $2
}
      parts.push (`FPS: ${performance.fps}`);
    }
    return parts.length > 0 ? parts.join (', ') : null;
  }
;
  const error_count = logs.filter (log => log.level === 'error' || log.level === 'critical').length;
  const warning_count = logs.filter (log => log.level === 'warn').length;
  const total_count = logs.length;
;
  return (
    <div className='container mx - auto p - 6 space - y-6'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 3xl font - bold'>System Logs & Error Monitoring</h1>;
        <div className='flex items - center space - x-2'>;
          <Button on_click={refresh_logs} disabled={is_loading} variant='outline'>;
            <RefreshCw;
              className={`h - 4 w - 4 mr - 2 ${is_loading ? 'animate - spin' : ''}`}
            />;
            Refresh;
          </Button>;
          <Button on_click={export_logs} variant='outline'>;
            <Download className='h - 4 w - 4 mr - 2' />;
            Export;
          </Button>;
        </div>;
      {/* Summary Cards */}
      <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4'>;
        <Card>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>Total Logs</CardTitle>;
            <Info className='h - 4 w - 4 text - muted - foreground' />;
          </CardHeader>;
          <CardContent>;
            <div className='text - 2xl font - bold'>{total_count}</div>;
            <p className='text - xs text - muted - foreground'>All log entries</p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>Errors</CardTitle>;
            <XCircle className='h - 4 w - 4 text - red - 500' />;
          </CardHeader>;
          <CardContent>;
            <div className='text - 2xl font - bold text - red - 600'>{error_count}</div>;
            <p className='text - xs text - muted - foreground'>;
              Critical & error logs;
            </p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>Warnings</CardTitle>;
            <AlertTriangle className='h - 4 w - 4 text - yellow - 500' />;
          </CardHeader>;
          <CardContent>;
            <div className='text - 2xl font - bold text - yellow - 600'>;
              {warning_count}
            </div>;
            <p className='text - xs text - muted - foreground'>Warning logs</p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>Last Updated</CardTitle>;
            <RefreshCw className='h - 4 w - 4 text - muted - foreground' />;
          </CardHeader>;
          <CardContent>;
            <div className='text - sm font - medium'>;
              {format_timestamp (last_updated)}
            </div>;
            <p className='text - xs text - muted - foreground'>Data freshness</p>          </CardContent>;
        </Card>;
      </div>;
      {/* Filters */}
      <Card>;
        <CardHeader>;
          <CardTitle > Filters</CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4'>;
            <div className='relative'>;
              <Search className='absolute left - 2 top - 2.5 h - 4 w - 4 text - muted - foreground' />;
              <Input;
                placeholder='Search logs...';
                className='pl - 8';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
              />;
            </div>;
            <Select value={level_filter} onValueChange={setLevelFilter}>;
              <SelectTrigger>;
                <SelectValue placeholder='All levels' />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value='all'>All Levels</SelectItem>;
                <SelectItem value='debug'>Debug</SelectItem>;
                <SelectItem value='info'>Info</SelectItem>;
                <SelectItem value='warn'>Warning</SelectItem>;
                <SelectItem value='error'>Error</SelectItem>;
                <SelectItem value='critical'>Critical</SelectItem>              </SelectContent>;
            </Select>;
            <Select value={category_filter} onValueChange={setCategoryFilter}>;
              <SelectTrigger>;
                <SelectValue placeholder='All categories' />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value='all'>All Categories</SelectItem>;
                {categories.map (category => (
                  <SelectItem key={category} value={category}>;
                    {category}
                  </SelectItem>                ))}
              </SelectContent>;
            </Select>;
            <Select value={source_filter} onValueChange={setSourceFilter}>;
              <SelectTrigger>;
                <SelectValue placeholder='All sources' />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value='all'>All Sources</SelectItem>;
<<<<<<< HEAD

                {sources.map (source => (
                  <SelectItem key={source} value={source}>;

=======
                {sources.map (source => (
                  <SelectItem key={source} value={source}>;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <SelectItem value='all'>All Levels</SelectItem>
                <SelectItem value='debug'>Debug</SelectItem>
                <SelectItem value='info'>Info</SelectItem>
                <SelectItem value='warn'>Warning</SelectItem>
                <SelectItem value='error'>Error</SelectItem>
                <SelectItem value='critical'>Critical</SelectItem>              </SelectContent>
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
                  </SelectItem>                ))}
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
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
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (
                  <SelectItem key={source} value={source}>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {source}
                  </SelectItem>                ))}
              </SelectContent>;
            </Select>;
          </div>;
<<<<<<< HEAD

=======
        </div>;
      {/* Logs Table */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {log.error && (
                    <details className='text - xs'>;
                      <summary className='cursor - pointer text - red - 600 hover:text - red - 800'>;
                        View Error Details;
                      </summary>;
                      <div className='mt - 2 p - 2 bg - red - 50 rounded'>;
                        <div>;
                          <strong > Name:</strong> {log.error.name}
                        </div>;
                        <div>;
                          <strong > Message:</strong> {log.error.message}
                        </div>;
                        {log.error.stack && (
                          <details className='mt - 2'>;
                            <summary className='cursor - pointer'>;
                              Stack Trace;
                            </summary>;
                            <pre className='mt - 1 text - xs overflow - x-auto'>;
                              {log.error.stack}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>;
                    <span className='text-sm text-muted-foreground'>;
                      {formatTimestamp(log && log.timestamp)}
                    </span>;
                  </div>;
                  <div className='text-sm font-medium'>{log && log.message}</div>;
                  {log && log.context && Object && Object.keys(log && log.context).length > 0 && (;
                    <details className='text-xs'>;
                      <summary className='cursor-pointer text-muted-foreground hover:text-foreground'>;
                        View Context;
                      </summary>;
                      <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-x-auto'>                        {JSON && JSON.stringify(log && log.context, null, 2)}
                      </pre>;
                    </details>;
                  )}
                  {log && log.error && (;
                    <details className='text-xs'>;
                      <summary className='cursor-pointer text-red-600 hover:text-red-800'>;
                        View Error Details;
                      </summary>;
                      <div className='mt-2 p-2 bg-red-50 rounded'>;
                        <div>;
                          <strong>Name:</strong> {log && log.error.name}
                        </div>;
                        <div>;
                          <strong>Message:</strong> {log && log.error.message}
                        </div>;
                        {log && log.error.stack && (;
                          <details className='mt-2'>;
                            <summary className='cursor-pointer'>;
                              Stack Trace;
                            </summary>;
                            <pre className='mt-1 text-xs overflow-x-auto'>;
                              {log && log.error.stack}
                            </pre>;
                          </details>;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <SelectItem key={source} value={source}>{source}</SelectItem>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </SelectContent>;
            </Select>;
          </div>;
        </CardContent>;
      </Card>;
      {/* Logs Table */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Card>
        <CardHeader>
          <CardTitle>Log Entries ({filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <div key={log.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <LogLevelIcon level={log.level} />
                      <LogLevelBadge level={log.level} />
                      <Badge variant="outline">{log.category}</Badge>
                      <Badge variant="secondary">{log.source}</Badge>
                      {log.component && (
                        <Badge variant="outline">{log.component}</Badge>
<<<<<<< HEAD
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatTimestamp(log.timestamp)}
                    </span>
                  </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======

                  <div className="text-sm font-medium">{log.message}</div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  <div className="text-sm font-medium">{log.message}</div>
=======
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
                  <div className="text-sm font-medium">{log.message}</div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {log.context && Object.keys(log.context).length > 0 && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                        View Context
                      </summary>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
=======
<<<<<<< HEAD
                      <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
                        {JSON.stringify(log.context, null, 2)}
                      </pre>
                    </details>
                  )}
{log.error && (
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-x-auto'>                        {JSON.stringify(log.context, null, 2)}
                      </pre>
                    </details>
                  )}

                      <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        {JSON.stringify(log.context, null, 2)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </pre>;
                    </details>;
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {log.error && (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>

<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
                    <div className="text-xs text-muted-foreground truncate">
                      URL: {log.url}
=======
                    <div className='text-xs text-muted-foreground truncate'>                      URL: {log.url}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
                </div>
              ))
            ) : (
<<<<<<< HEAD
<div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
<div className='flex items-center justify-between text-xs text-muted-foreground'>                    <div>;
                      Session: {log && log.sessionId}
                      {log && log.userId && ` • User: ${log && log.userId}`}
                    </div>;
                  </div>;
                  {log && log.url && (;
                    <div className='text-xs text-muted-foreground truncate'>                      URL: {log && log.url}
                    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            )}
          </div>;
        </div>;
      </main>;
    </>;
  );
<<<<<<< HEAD


=======
<<<<<<< HEAD
};
export const getServerSideProps: GetServerSideProps = async () => {;
  try {;
    const logsDir = path && path.join(process && process.cwd(), 'logs');
=======
}
export const getServerSideProps: GetServerSideProps = async () => {
  try {;
    const logsDir = path.join(process.cwd(), 'logs');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
              logs.push(logEntry)
            } catch (parseError) {
              // Skip malformed log entries
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            }
          }
        } catch (fileError) {;
                            </pre>;
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
          // Skip problematic files;
        }
      }
    }
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Sort logs by timestamp (newest first)
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    // Calculate statistics
    const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const warningCount = logs.filter(log => log.level === 'warn').length;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const totalCount = logs.length;
    return {
      props: {
        logs: logs.slice(0, 1000), // Limit to most recent 1000 logs
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

=======

        logs: [],
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
        lastUpdated: new Date().toISOString(),
      },
    };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps = async () => {;
  try {
    const logsDir = path.join(process.cwd(), 'logs'),;
    const logs: LogEntry[] = [];
    // Read all log files;
    if (fs.existsSync(logsDir)) {;
      const files = fs.readdirSync(logsDir);
      const logFiles = files.filter(file => file.endsWith('.log'));
      for (const file of logFiles) {;
        try {
          const filePath = path.join(logsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const lines = content.split('\n').filter(line => line.trim());
          for (const line of lines) {;
            try {
              const logEntry = JSON.parse(line);
              logs.push(logEntry);
            } catch (error) {
              // Skip malformed log entries;
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
        } catch (error) {
          // Skip problematic files;
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
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Sort logs by timestamp (newest first);
    logs && logs.sort(;
      (a, b) =>;
        new Date(b && b.timestamp).getTime() - new Date(a && a.timestamp).getTime();
    );
    // Calculate statistics;
    const errorCount = logs && logs.filter(;
      log => log && log.level === 'error' || log && log.level === 'critical';
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
  } catch (error) {;
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

<<<<<<< HEAD
}
<<<<<<< HEAD
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
};

=======

<<<<<<< HEAD
    return {_props: {
        logs: logs.slice(0, _1000), _// Limit to most recent 1000 logs
        errorCount, _warningCount, _totalCount, _lastUpdated: new Date().toISOString()}};
  } catch (error) {_logErrorToProduction('Error reading logs:', _error);
    return {
      props: {
        logs: logs.slice(0, 1000), // Limit to most recent 1000 logs

        errorCount;
        warningCount;
        totalCount;
        lastUpdated: new Date().toISOString()}}
  } catch (error) {
            logErrorToProduction('Error reading logs:', error);
    return {
      props: {
<<<<<<< HEAD
        logs: [],

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
logs: [],
        error_count: 0,
        warning_count: 0,
        total_count: 0,
        last_updated: new Date ().toISOString (),
      },
    }
  }
}
;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        logs: [],
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
        lastUpdated: new Date().toISOString(),
      },
    };
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps = async () => {;
  try {
    const logsDir = path.join(process.cwd(), 'logs'),;
    const logs: LogEntry[] = [];
    // Read all log files;
    if (fs.existsSync(logsDir)) {;
      const files = fs.readdirSync(logsDir);
      const logFiles = files.filter(file => file.endsWith('.log'));
      for (const file of logFiles) {;
        try {
          const filePath = path.join(logsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const lines = content.split('\n').filter(line => line.trim());
          for (const line of lines) {;
            try {
              const logEntry = JSON.parse(line);
              logs.push(logEntry);
            } catch (error) {
              // Skip malformed log entries;
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
        } catch (error) {
          // Skip problematic files;
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
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Sort logs by timestamp (newest first);
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()),;
    // Calculate statistics;
    const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const warningCount = logs.filter(log => log.level === 'warn').length;
    const totalCount = logs.length;
    return {;
      props: {;
        logs: logs.slice(0, 1000), // Limit to most recent 1000 logs;
        errorCount,;
        warningCount,;
        totalCount,;
        lastUpdated: new Date().toISOString()}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
            logErrorToProduction('Error reading logs:', error);
    return {;
      props: {;
        logs: [],;
        errorCount: 0,;
        warningCount: 0,;
        totalCount: 0;
        lastUpdated: new Date().toISOString()}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
