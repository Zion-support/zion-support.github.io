import fs from 'fs';
import path from 'path';


interface LogEntry {_id: string;
  timestamp: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;
  context?: Record<string, _unknown>;
  stack?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
  sessionId: string;
  source: 'client' | 'server' | 'middleware' | 'api';
  component?: string;
  feature?: string;
  error?: {
    name: string;
    message: string;
    stack?: string;
    cause?: unknown;};
  performance?: {_memory?: number;
    timing?: number;
    fps?: number;};
}

interface LogsPageProps {_logs: LogEntry[];
  errorCount: number;
  warningCount: number;
  totalCount: number;
  lastUpdated: string;}

const _LogLevelIcon = (_{_level}: {_level: LogEntry['level']}) => {_switch (level) {
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
    default:
      return <Info className="h-4 w-4 text-gray-500" />;}
};

const _LogLevelBadge = (_{_level}: {_level: LogEntry['level']}) => {_const _colors = {
    debug: 'bg-blue-100 text-blue-800', _info: 'bg-green-100 text-green-800', _warn: 'bg-yellow-100 text-yellow-800', _error: 'bg-red-100 text-red-800', _critical: 'bg-red-200 text-red-900'};

  return (
    <Badge className={_colors[level]}>
      {_level.toUpperCase()}
    </Badge>
  );
};

export default function LogsPage(_{_logs: initialLogs, _errorCount, _warningCount, _totalCount, _lastUpdated}: LogsPageProps) {_const [logs, _setLogs] = useState<LogEntry[]>(initialLogs);
  const [filteredLogs, _setFilteredLogs] = useState<LogEntry[]>(initialLogs);
  const [searchTerm, _setSearchTerm] = useState('');
  const [levelFilter, _setLevelFilter] = useState<string>('all');
  const [categoryFilter, _setCategoryFilter] = useState<string>('all');
  const [sourceFilter, _setSourceFilter] = useState<string>('all');
  const [isLoading, _setIsLoading] = useState(false);

  const _categories = Array.from(new Set(logs.map(log => log.category))).filter(Boolean);
  const _sources = Array.from(new Set(logs.map(log => log.source))).filter(Boolean);

  useEffect__(() => {
    let _filtered = logs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(log =>
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()))
      );}

    // Level filter
    if (levelFilter !== 'all') {_filtered = filtered.filter(log => log.level === levelFilter);}

    // Category filter
    if (categoryFilter !== 'all') {_filtered = filtered.filter(log => log.category === categoryFilter);}

    // Source filter
    if (sourceFilter !== 'all') {_filtered = filtered.filter(log => log.source === sourceFilter);}

    setFilteredLogs(filtered);
  }, [logs, searchTerm, levelFilter, categoryFilter, sourceFilter]);

  const _refreshLogs = async () => {_setIsLoading(true);
    try {
      const _response = await fetch('/api/admin/logs');
      if (response.ok) {
        const _data = await response.json();
        setLogs(data.logs);}
    } catch (error) {_logErrorToProduction('Failed to refresh logs:', _error);} finally {_setIsLoading(false);}
  };

  const _exportLogs = () => {_const _dataStr = JSON.stringify(filteredLogs, _null, _2);
    const _dataUri = 'data:application/json;charset=utf-8, _'+ encodeURIComponent(dataStr);
    
    const _exportFileDefaultName = `logs-${new Date().toISOString().slice(0, _10)}.json`;
    
    const _linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const _formatTimestamp = (_timestamp: string) => {_return new Date(timestamp).toLocaleString();};

  const _formatPerformance = (_performance?: LogEntry['performance']) => {_if (!performance) return null;
    
    const _parts = [];
    if (performance.memory) {
      parts.push(`Memory: ${(performance.memory / 1024 / 1024).toFixed(1)}MB`);
    }
    if (performance.timing) {_parts.push(`Timing: ${performance.timing}ms`);
    }
    if (performance.fps) {_parts.push(`FPS: ${performance.fps}`);
    }
    
    return parts.length > 0 ? parts.join(', ') : null;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">System Logs & Error Monitoring</h1>
        <div className="flex items-center space-x-2">
          <Button onClick={_refreshLogs} disabled={_isLoading} variant="outline">
            <RefreshCw className={_`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button onClick={_exportLogs} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {_/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{_totalCount}</div>
            <p className="text-xs text-muted-foreground">All log entries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Errors</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{_errorCount}</div>
            <p className="text-xs text-muted-foreground">Critical & error logs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{_warningCount}</div>
            <p className="text-xs text-muted-foreground">Warning logs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">{_formatTimestamp(lastUpdated)}</div>
            <p className="text-xs text-muted-foreground">Data freshness</p>
          </CardContent>
        </Card>
      </div>

      {_/* Filters */}
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
                value={_searchTerm}
                onChange={_(_e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={_levelFilter} onValueChange={_setLevelFilter}>
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

            <Select value={_categoryFilter} onValueChange={_setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {_categories.map(category => (
                  <SelectItem key={category} value={_category}>{_category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={_sourceFilter} onValueChange={_setSourceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {_sources.map(source => (
                  <SelectItem key={source} value={_source}>{_source}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {_/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Log Entries ({_filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {_filteredLogs.length > 0 ? (_filteredLogs.map((log) => (
                <div key={log.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <LogLevelIcon level={_log.level} />
                      <LogLevelBadge level={_log.level} />
                      <Badge variant="outline">{_log.category}</Badge>
                      <Badge variant="secondary">{_log.source}</Badge>
                      {_log.component && (
                        <Badge variant="outline">{log.component}</Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {_formatTimestamp(log.timestamp)}
                    </span>
                  </div>
                  
                  <div className="text-sm font-medium">{_log.message}</div>
                  
                  {_log.context && Object.keys(log.context).length > 0 && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                        View Context
                      </summary>
                      <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
                        {JSON.stringify(log.context, _null, _2)}
                      </pre>
                    </details>
                  )}
                  
                  {_log.error && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-red-600 hover:text-red-800">
                        View Error Details
                      </summary>
                      <div className="mt-2 p-2 bg-red-50 rounded">
                        <div><strong>Name:</strong> {log.error.name}</div>
                        <div><strong>Message:</strong> {_log.error.message}</div>
                        {_log.error.stack && (
                          <details className="mt-2">
                            <summary className="cursor-pointer">Stack Trace</summary>
                            <pre className="mt-1 text-xs overflow-x-auto">{log.error.stack}</pre>
                          </details>
                        )}
                      </div>
                    </details>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div>
                      Session: {_log.sessionId}
                      {_log.userId && ` • User: ${log.userId}`}
                    </div>
                    {_log.performance && (
                      <div>{formatPerformance(log.performance)}</div>
                    )}
                  </div>
                  
                  {_log.url && (
                    <div className="text-xs text-muted-foreground truncate">
                      window.URL: {log.url}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No logs found matching the current filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {_try {
    const _logsDir = path.join(process.cwd(), _'logs');
    const logs: LogEntry[] = [];

    // Read all log files
    if (fs.existsSync(logsDir)) {
      const _files = fs.readdirSync(logsDir);
      const _logFiles = files.filter(file => file.endsWith('.log'));

      for (const file of logFiles) {
        try {
          const _filePath = path.join(logsDir, _file);
          const _content = fs.readFileSync(filePath, _'utf-8');
          const _lines = content.split('\n').filter(line => line.trim());

          for (const line of lines) {
            try {
              const _logEntry = JSON.parse(line);
              logs.push(logEntry);} catch (parseError) {_// Skip malformed log entries}
          }
        } catch (fileError) {_// Skip problematic files}
      }
    }

    // Sort logs by timestamp (newest first)
    logs.sort(_(a, _b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Calculate statistics
    const _errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const _warningCount = logs.filter(log => log.level === 'warn').length;
    const _totalCount = logs.length;

    return {_props: {
        logs: logs.slice(0, _1000), _// Limit to most recent 1000 logs
        errorCount, _warningCount, _totalCount, _lastUpdated: new Date().toISOString()}};
  } catch (error) {_logErrorToProduction('Error reading logs:', _error);
    return {
      props: {
        logs: [], _errorCount: 0, _warningCount: 0, _totalCount: 0, _lastUpdated: new Date().toISOString()}};
  }
}; 