import React, { useState, useEffect } from 'react';

interface PerformanceReport {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'performance' | 'error' | 'warning' | 'info';
  title: string;
  description: string;
  message: string;
  lastOccurrence: string | Date;
  occurrenceCount: number;
  context: {
    component?: string;
    action?: string;
  };
  aiPredictedImpact?: number;
  resolutionSuggestions?: string[];
  [key: string]: unknown;
}

interface AIPerformanceDashboardProps {
  className?: string;
}

export const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ className = '' }) => {
  const [reports, setReports] = useState<PerformanceReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'critical' | 'high' | 'medium' | 'low'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate loading performance reports
    const loadReports = async () => {
      setIsLoading(true);
      try {
        // Mock data - in real implementation, this would come from an API
        const mockReports: PerformanceReport[] = [
          {
            id: '1',
            severity: 'critical',
            category: 'performance',
            title: 'High Memory Usage',
            description: 'Memory usage has exceeded 90% threshold',
            message: 'Memory usage: 92% (2.1GB/2.3GB)',
            lastOccurrence: new Date().toISOString(),
            occurrenceCount: 15,
            context: { component: 'MemoryMonitor' },
            aiPredictedImpact: 85,
            resolutionSuggestions: [
              'Optimize memory allocation in components',
              'Implement lazy loading for large datasets',
              'Review memory leaks in event listeners'
            ]
          },
          {
            id: '2',
            severity: 'high',
            category: 'error',
            title: 'API Response Time',
            description: 'API calls taking longer than expected',
            message: 'Average response time: 2.3s (threshold: 1.5s)',
            lastOccurrence: new Date(Date.now() - 300000).toISOString(),
            occurrenceCount: 8,
            context: { component: 'ApiClient', action: 'fetchData' },
            aiPredictedImpact: 65,
            resolutionSuggestions: [
              'Implement request caching',
              'Optimize database queries',
              'Add request timeout handling'
            ]
          }
        ];
        setReports(mockReports);
      } catch (error) {
        console.error('Failed to load performance reports:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadReports();
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getImpactColor = (impact?: number) => {
    if (!impact) return 'text-gray-500';
    if (impact >= 80) return 'text-red-600 dark:text-red-400';
    if (impact >= 60) return 'text-orange-600 dark:text-orange-400';
    if (impact >= 40) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  };

  const filteredReports = reports.filter(report => {
    const matchesFilter = filter === 'all' || report.severity === filter;
    const matchesSearch = searchTerm === '' || 
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          AI Performance Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor and analyze performance issues with AI-powered insights
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All Severities</option>
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredReports.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No reports found matching your criteria
          </div>
        ) : (
          filteredReports.map((report) => (
            <div
              key={report.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(report.severity)}`}>
                      {report.severity.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {report.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {report.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${getImpactColor(report.aiPredictedImpact)}`}>
                    Impact: {report.aiPredictedImpact}%
                  </span>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {report.occurrenceCount} occurrences
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {report.message}
              </div>

              {report.resolutionSuggestions && report.resolutionSuggestions.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    AI Suggestions:
                  </h4>
                  <ul className="space-y-1">
                    {report.resolutionSuggestions.map((suggestion, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;