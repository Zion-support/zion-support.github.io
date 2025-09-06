

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

  }
];

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

    return parts.length > 0 ? parts.join(', ') : null;
  };

  const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
  const warningCount = logs.filter(log => log.level === 'warn').length;
  const totalCount = logs.length;

  return (

        </div>

          </div>
        </div>

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

                    </div>
                  </div>

              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

