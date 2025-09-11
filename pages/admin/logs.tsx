<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { GetServerSideProps  } from 'next';
import fs from 'fs',
import path from 'path';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
} from 'lucide-react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
  Download,
  RefreshCw,
} from 'lucide-react';
import { logErrorToProduction } from '@/utils / production_logger';

=======

interface LogEntry {
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface LogEntry {
<<<<<<< HEAD
interface LogEntry {;
  id: string;
  timestamp: string;

<<<<<<< HEAD
=======
=======
interface LogEntry {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id: string;
  timestamp: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;
  context?: Record<string, unknown>,
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  stack?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
<<<<<<< HEAD
<<<<<<< HEAD
component?: string;
  timestamp: string;
  session_id?: string;
  user_id?: string;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  component?: string;
  timestamp: string;
  session_id?: string;
  user_id?: string;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  error?: {
  error?: {;
    name: string;
    message: string;
    stack?: string;
<<<<<<< HEAD
=======
=======
  error?: {
=======
  error?: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    name: string;
    message: string;
    stack?: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





  };
  performance?: {;
    duration: number;

    memory?: number;
<<<<<<< HEAD
  }
interface LogsPageProps {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  }

interface LogsPageProps {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  logs: LogEntry[];
  errorCount: number;
  warningCount: number;
  totalCount: number;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  lastUpdated: string;


=======

  lastUpdated: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  logs: initialLogs,
  errorCount,
  warningCount,
  totalCount,
  lastUpdated,;

}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
];
=======
}
},;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
},;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const LogLevelBadge = ({ level }: { level: LogEntry['level'] }) => {;
  const colors = {;
    debug: 'bg-blue-100 text-blue-800',;
    info: 'bg-green-100 text-green-800',;
    warn: 'bg-yellow-100 text-yellow-800',;
    error: 'bg-red-100 text-red-800',;
    critical: 'bg-red-200 text-red-900',;
  };
<<<<<<< HEAD
  return <Badge className={colors[level]}>{level && level.toUpperCase()}</Badge>;
};
=======

  return <Badge className={colors[level]}>{level && level.toUpperCase()}</Badge>;
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function LogsPage(): any ({;
  logs: initialLogs,;
  errorCount,;
  warningCount,;
  totalCount,;
  lastUpdated,;
<<<<<<< HEAD
}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LogsPageProps {
  logs: LogEntry[],
  errorCount: number,
  warningCount: number,
  totalCount: number,
  lastUpdated: string
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD




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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    // Level filter
    if (levelFilter !== 'all') {
      filtered = filtered.filter(log => log.level === levelFilter)
    }

<<<<<<< HEAD
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD
  const categories = Array.from(new Set(logs.map(log => log.category))).filter(
    Boolean
  );
  const sources = Array.from(new Set(logs.map(log => log.source))).filter(
    Boolean
  );
  useEffect(() => {
    // Simulate loading logs
    setTimeout(() => {
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setLogs(mockLogs);
      setFilteredLogs(mockLogs);
      setLoading(false);
    }, 1000);
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
  }
  const exportLogs = () => {
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri =
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;
<<<<<<< HEAD
=======
=======
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    linkElement.click();


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

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Logs</CardTitle>
            <Info className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{totalCount}</div>
            <p className='text-xs text-muted-foreground'>All log entries</p>          </CardContent>
<<<<<<< HEAD

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
    linkElement.click();
  }
  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();  }
  const formatPerformance = (performance?: LogEntry['performance']) => {
    if (!performance) return null;
=======
=======

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
    
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click()
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  };

  const formatPerformance = (performance?: LogEntry['performance']) => {
    if (!performance) return null;
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    
    return parts.length > 0 ? parts.join() : null
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
<<<<<<< HEAD

  };
    return parts.length > 0 ? parts.join(', ') : null;
  }
  const errorCount = logs.filter(log => log.level === 'error' |log.level === 'critical').length;
  const warningCount = logs.filter(log => log.level === 'warn').length;
  const totalCount = logs.length;
  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };

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
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      {/* Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      </div>
      {/* Summary Cards */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
=======

      </div>
{/* Summary Cards */}
=======
      {/* Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      </div>

      {/* Summary Cards */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCount}</div>
            <p className="text-xs text-muted-foreground">All log entries</p>
          </CardContent>
<<<<<<< HEAD
        </Card>
        <Card>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        </Card>
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
<<<<<<< HEAD
<<<<<<< HEAD
        </Card>
        <Card>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </Card>
        <Card>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{warningCount}</div>
            <p className="text-xs text-muted-foreground">Warning logs</p>
          </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
        </Card>
        <Card>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </Card>
        <Card>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">{formatTimestamp(lastUpdated)}</div>
            <p className="text-xs text-muted-foreground">Data freshness</p>
          </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
        </Card>
      </div>

      {/* Filters */}
=======

        </Card>
      </div>

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

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        </Card>
      </div>
      {/* Filters */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
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
=======
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All levels" />
              </SelectTrigger>
              <SelectContent>
<<<<<<< HEAD


<<<<<<< HEAD
=======

                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>


              <SelectTrigger>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onChange={e => setSearchTerm(e && e.target.value)}
              />;
            </div>;
                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
=======

=======
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>


              <SelectTrigger>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
<<<<<<< HEAD
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>
<<<<<<< HEAD
=======

                onChange={e => setSearchTerm(e && e.target.value)}
              />;
            </div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (
                  <SelectItem key={source} value={source}>
<<<<<<< HEAD
=======

                {sources.map (source => (
                  <SelectItem key={source} value={source}>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {source}
                  </SelectItem>                ))}
              </SelectContent>;
            </Select>;
          </div>;
<<<<<<< HEAD
        </div>;
      {/* Logs Table */}
=======
=======
                    {source}
                  </SelectItem>                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      {/* Logs Table */}
                  <SelectItem key={source} value={source}>{source}</SelectItem>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </SelectContent>;
            </Select>;
          </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>;
                    <span className='text-sm text-muted-foreground'>;
                      {formatTimestamp(log && log.timestamp)}
                    </span>;
                  </div>;
<<<<<<< HEAD
                  <div className='text-sm font-medium'>{log && log.message}</div>;
=======

                  <div className='text-sm font-medium'>{log && log.message}</div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {log && log.context && Object && Object.keys(log && log.context).length > 0 && (;
                    <details className='text-xs'>;
                      <summary className='cursor-pointer text-muted-foreground hover:text-foreground'>;
                        View Context;
                      </summary>;
                      <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-x-auto'>                        {JSON && JSON.stringify(log && log.context, null, 2)}
                      </pre>;
                    </details>;
                  )}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

                  <div className="text-sm font-medium">{log.message}</div>


                  <div className="text-sm font-medium">{log.message}</div>
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
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatTimestamp(log.timestamp)}
                    </span>
                  </div>
<<<<<<< HEAD


=======
                  <div className='text-sm font-medium'>{log.message}</div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="text-sm font-medium">{log.message}</div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {log.context && Object.keys(log.context).length > 0 && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                        View Context
                      </summary>



<<<<<<< HEAD
<<<<<<< HEAD
                      <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
                      <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-x-auto'>                        {JSON.stringify(log.context, null, 2)}
                      </pre>
                    </details>
                  )}

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>
<<<<<<< HEAD


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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
          </div>;
        </div>;
      </main>;
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
export const getServerSideProps: GetServerSideProps = async () => {
  try {;
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
              logs.push(logEntry)
            } catch (parseError) {
              // Skip malformed log entries
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }
          }
        } catch (fileError) {;
=======


            }
          }
        } catch (fileError) {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          // Skip problematic files;
        }
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Sort logs by timestamp (newest first)
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    // Calculate statistics
    const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const warningCount = logs.filter(log => log.level === 'warn').length;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


    // Sort logs by timestamp (newest first)
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Calculate statistics
    const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const warningCount = logs.filter(log => log.level === 'warn').length;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const totalCount = logs.length;
    return {
      props: {
        logs: logs.slice(0, 1000), // Limit to most recent 1000 logs
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
  }
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        logs: [],
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
        lastUpdated: new Date().toISOString(),
      },
    };

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Sort logs by timestamp (newest first);
    logs && logs.sort(;
      (a, b) =>;
        new Date(b && b.timestamp).getTime() - new Date(a && a.timestamp).getTime();
    );
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Calculate statistics;
    const errorCount = logs && logs.filter(;
      log => log && log.level === 'error' || log && log.level === 'critical';
    ).length;    const warningCount = logs && logs.filter(log => log && log.level === 'warn').length;
    const totalCount = logs && logs.length;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }


<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    return {_props: {
        logs: logs.slice(0, _1000), _// Limit to most recent 1000 logs
        errorCount, _warningCount, _totalCount, _lastUpdated: new Date().toISOString()}};
  } catch (error) {_logErrorToProduction('Error reading logs:', _error);
    return {
      props: {
        logs: logs.slice(0, 1000), // Limit to most recent 1000 logs

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }

}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        errorCount;
        warningCount;
        totalCount;
        lastUpdated: new Date().toISOString()}}
  } catch (error) {
            logErrorToProduction('Error reading logs:', error);
    return {
      props: {
        logs: [],

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
