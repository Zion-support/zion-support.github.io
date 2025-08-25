import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  RefreshCw, 
  Download,
  Filter,
  Search,
  Globe,
  Clock,
  TrendingUp,
  Activity
} from 'lucide-react';
import { linkHealthChecker, LinkHealthStatus, LinkHealthReport } from '../utils/linkHealthChecker';

interface LinkHealthDashboardProps {
  className?: string;
}

const LinkHealthDashboard: React.FC<LinkHealthDashboardProps> = ({ className = '' }) => {
  const [links, setLinks] = useState<LinkHealthStatus[]>([]);
  const [report, setReport] = useState<LinkHealthReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'healthy' | 'broken' | 'redirect' | 'timeout'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Sample links to check (in a real app, these would come from your site crawler)
  const sampleLinks = [
    'https://ziontechgroup.com',
    'https://ziontechgroup.com/services',
    'https://ziontechgroup.com/ai-solutions',
    'https://linkedin.com/company/ziontechgroup',
    'https://twitter.com/ziontechgroup',
    'https://github.com/Zion-Holdings',
    'tel:+1 302 464 0950',
    'mailto:kleber@ziontechgroup.com'
  ];

  const checkAllLinks = async () => {
    setIsLoading(true);
    try {
      const results = await linkHealthChecker.checkMultipleLinks(sampleLinks, 'ziontechgroup.com');
      setLinks(results);
      const healthReport = linkHealthChecker.generateReport(results);
      setReport(healthReport);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error checking links:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAllLinks();
  }, []);

  const filteredLinks = links.filter(link => {
    const matchesFilter = filter === 'all' || link.status === filter;
    const matchesSearch = link.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (link.parentPage && link.parentPage.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getStatusIcon = (status: LinkHealthStatus['status']) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'broken':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'redirect':
        return <RefreshCw className="w-5 h-5 text-yellow-500" />;
      case 'timeout':
        return <Clock className="w-5 h-5 text-orange-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: LinkHealthStatus['status']) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'broken':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'redirect':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'timeout':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const exportReport = () => {
    if (!report) return;
    
    const csvContent = [
      'URL,Status,HTTP Status,Error,Parent Page,Last Checked',
      ...filteredLinks.map(link => 
        `"${link.url}","${link.status}","${link.httpStatus || 'N/A'}","${link.error || 'N/A'}","${link.parentPage || 'N/A'}","${link.lastChecked.toISOString()}"`
      ).join('\n')
    ];
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `link-health-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!report) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading link health data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Link Health Dashboard</h2>
            <p className="text-sm text-gray-600">
              Monitor and manage the health of your website links
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={checkAllLinks}
              disabled={isLoading}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Checking...' : 'Refresh'}
            </button>
            <button
              onClick={exportReport}
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{report.totalLinks}</div>
            <div className="text-sm text-gray-600">Total Links</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{report.healthyLinks}</div>
            <div className="text-sm text-gray-600">Healthy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{report.brokenLinks}</div>
            <div className="text-sm text-gray-600">Broken</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{report.redirects}</div>
            <div className="text-sm text-gray-600">Redirects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{report.timeouts}</div>
            <div className="text-sm text-gray-600">Timeouts</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search links..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="healthy">Healthy</option>
              <option value="broken">Broken</option>
              <option value="redirect">Redirects</option>
              <option value="timeout">Timeouts</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {report.recommendations.length > 0 && (
        <div className="px-6 py-4 bg-blue-50 border-b border-blue-200">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Recommendations</h3>
          <ul className="space-y-1">
            {report.recommendations.map((rec, index) => (
              <li key={index} className="text-sm text-blue-800 flex items-start">
                <span className="text-blue-600 mr-2 mt-0.5">•</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Parent Page
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Checked
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLinks.map((link, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(link.status)}
                    <span className={`ml-2 inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(link.status)}`}>
                      {link.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-mono text-sm truncate max-w-xs"
                    >
                      {link.url}
                    </a>
                    <ExternalLink className="w-4 h-4 ml-2 text-gray-400" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {link.httpStatus && (
                      <div>HTTP {link.httpStatus}</div>
                    )}
                    {link.error && (
                      <div className="text-red-600 text-xs mt-1">{link.error}</div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {link.parentPage || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {link.lastChecked.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            Showing {filteredLinks.length} of {links.length} links
          </div>
          <div>
            {lastUpdated && (
              <span>Last updated: {lastUpdated.toLocaleString()}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkHealthDashboard;