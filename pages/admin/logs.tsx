
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
=======
import {useState, useEffect} from 'react';
import {GetServerSideProps} from 'next';
=======
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import fs from 'fs';
import path from 'path';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { logErrorToProduction } from '@/utils/productionLogger';
interface LogEntry {
  id: string;
  timestamp: string;


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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      setLogs(mockLogs);
      setFilteredLogs(mockLogs);
      setLoading(false);
    }, 1000);
  }, []);
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
      case 'debug': return 'bg-blue-100 text-blue-800';
      case 'info': return 'bg-green-100 text-green-800';
      case 'warn': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-red-200 text-red-900';
      default: return 'bg-gray-100 text-gray-800';    }
  }
  const exportLogs = () => {


=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const dataStr = JSON.stringify(filteredLogs, null, 2);
    const dataUri = 'data: application/json,charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

  },;
  const formatTimestamp = (timestamp: string) => {;
    return new Date(timestamp).toLocaleString();
  };

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

      </div>
      {/* Summary Cards */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{warningCount}</div>
            <p className="text-xs text-muted-foreground">Warning logs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">{formatTimestamp(lastUpdated)}</div>
            <p className="text-xs text-muted-foreground">Data freshness</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              <SelectTrigger>
                <SelectValue placeholder="All levels" />
              </SelectTrigger>
              <SelectContent>

                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

                  <div className="text-sm font-medium">{log.message}</div>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {log.context && Object.keys(log.context).length > 0 && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                        View Context
                      </summary>



=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>

        logs: [],
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
        lastUpdated: new Date().toISOString(),
      },
    };

=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
