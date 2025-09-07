
    if (searchTerm) {
      filtered = filtered.filter(log =>
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Level filter
    if (levelFilter !== 'all) {
      filtered = filtered.filter(log => log.level === levelFilter)
    }

    // Category filter
    if (categoryFilter !== all') {
      filtered = filtered.filter(log => log.category === categoryFilter)
    }


  return (
    <div className="container mx-auto p-6 space-y-6>
      <div className=flex items-center justify-between">
        <h1 className="text-3xl font-bold>System Logs & Error Monitoring</h1>
        <div className=flex items-center space-x-2">
          <Button onClick={refreshLogs} disabled={isLoading} variant="outline>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin : '}`} />
            Refresh
          </Button>
          <Button onClick={exportLogs} variant=outline">
            <Download className="h-4 w-4 mr-2 />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className=grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2>
            <CardTitle className=text-sm font-medium">Total Logs</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground />
          </CardHeader>
          <CardContent>
            <div className=text-2xl font-bold">{totalCount}</div>
            <p className="text-xs text-muted-foreground>All log entries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className=flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium>Errors</CardTitle>
            <XCircle className=h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600>{errorCount}</div>
            <p className=text-xs text-muted-foreground">Critical & error logs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2>
            <CardTitle className=text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500 />
          </CardHeader>
          <CardContent>
            <div className=text-2xl font-bold text-yellow-600">{warningCount}</div>
            <p className="text-xs text-muted-foreground>Warning logs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className=flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium>Last Updated</CardTitle>
            <RefreshCw className=h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium>{formatTimestamp(lastUpdated)}</div>
            <p className=text-xs text-muted-foreground">Data freshness</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4>
            <div className=relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground />
              <Input
                placeholder=Search logs..."
                className="pl-8
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder=All levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all>All Levels</SelectItem>
                <SelectItem value=debug">Debug</SelectItem>
                <SelectItem value="info>Info</SelectItem>
                <SelectItem value=warn">Warning</SelectItem>
                <SelectItem value="error>Error</SelectItem>
                <SelectItem value=critical">Critical</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All categories />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All sources />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=all">All Sources</SelectItem>
                {sources.map(source => (
                  <SelectItem key={source} value={source}>{source}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Log Entries ({filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <div key={log.id} className=border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between>
                    <div className=flex items-center space-x-2">
                      <LogLevelIcon level={log.level} />
                      <LogLevelBadge level={log.level} />
                      <Badge variant="outline>{log.category}</Badge>
                      <Badge variant=secondary">{log.source}</Badge>
                      {log.component && (
                        <Badge variant="outline>{log.component}</Badge>
                      )}
                    </div>
                    <span className=text-sm text-muted-foreground">
                      {formatTimestamp(log.timestamp)}
                    </span>
                  </div>
                  
                  <div className="text-sm font-medium>{log.message}</div>
                  
                  {log.context && Object.keys(log.context).length > 0 && (
                    <details className=text-xs">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground>
                        View Context
                      </summary>
                      <pre className=mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
                        {JSON.stringify(log.context, null, 2)}
                      </pre>
                    </details>
                  )}
                  
                  {log.error && (
                    <details className="text-xs>
                      <summary className=cursor-pointer text-red-600 hover:text-red-800">
                        View Error Details
                      </summary>
                      <div className="mt-2 p-2 bg-red-50 rounded>
                        <div><strong>Name:</strong> {log.error.name}</div>
                        <div><strong>Message:</strong> {log.error.message}</div>
                        {log.error.stack && (
                          <details className=mt-2">
                            <summary className="cursor-pointer>Stack Trace</summary>
                            <pre className=mt-1 text-xs overflow-x-auto">{log.error.stack}</pre>
                          </details>
                        )}
                      </div>
                    </details>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground>
                    <div>
                      Session: {log.sessionId}
                      {log.userId && ` • User: ${log.userId}`}
                    </div>
                    {log.performance && (
                      <div>{formatPerformance(log.performance)}</div>
                    )}
                  </div>
                  
                  {log.url && (
                    <div className=text-xs text-muted-foreground truncate">
                      URL: {log.url}
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

