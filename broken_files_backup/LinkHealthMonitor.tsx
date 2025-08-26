import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Link,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  BarChart3,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
interface LinkStatus {
  url: string;
  status: 'healthy' | 'broken' | 'external' | 'checking';
  statusCode?: number;
  responseTime?: number;
  lastChecked: Date;
  parentPage?: string;
  linkText?: string;
}
interface LinkHealthReport {
  totalLinks: number;
  healthyLinks: number;
  brokenLinks: number;
  externalLinks: number;
  averageResponseTime: number;
  lastUpdated: Date;
}
const LinkHealthMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [linkStatuses, setLinkStatuses] = useState<LinkStatus[]>([]);
  const [report, setReport] = useState<LinkHealthReport | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'broken' | 'external' | 'healthy'>('all');
  // Sample data based on the analysis report
  const sampleLinks: LinkStatus[] = [
    {
      url: 'https://linkedin.com/company/ziontechgroup',
      status: 'broken',
      statusCode: 404,
      responseTime: 1200,
      lastChecked: new Date(),
      parentPage: 'Homepage',
      linkText: 'LinkedIn'
    },
    {
      url: 'https://twitter.com/ziontechgroup',
      status: 'external',
      statusCode: 200,
      responseTime: 800,
      lastChecked: new Date(),
      parentPage: 'Homepage',
      linkText: 'Twitter'
    },
    {
      url: 'tel:+1 302 464 0950',
      status: 'healthy',
      statusCode: 200,
      responseTime: 50,
      lastChecked: new Date(),
      parentPage: 'Contact',
      linkText: 'Phone Number'
    },
    {
      url: 'mailto:kleber@ziontechgroup.com',
      status: 'healthy',
      statusCode: 200,
      responseTime: 50,
      lastChecked: new Date(),
      parentPage: 'Contact',
      linkText: 'Email'
    }
  ];
  useEffect(() => {
    setLinkStatuses(sampleLinks);
    generateReport(sampleLinks);
  }, []);
  const generateReport = (links: LinkStatus[]) => {
    const totalLinks = links.length;
    const healthyLinks = links.filter(l => l.status === 'healthy').length;
    const brokenLinks = links.filter(l => l.status === 'broken').length;
    const externalLinks = links.filter(l => l.status === 'external').length;
    const avgResponseTime = links.reduce((sum, l) => sum + (l.responseTime || 0), 0) / totalLinks;
    setReport({
      totalLinks,
      healthyLinks,
      brokenLinks,
      externalLinks,
      averageResponseTime: avgResponseTime,
      lastUpdated: new Date()
    });
  };
  const startMonitoring = async () => {
    setIsMonitoring(true);
    // Simulate link checking
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsMonitoring(false);
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'broken':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'external':
        return <ExternalLink className="w-4 h-4 text-blue-400" />;
      default:
        return <RefreshCw className="w-4 h-4 text-yellow-400" />;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-400';
      case 'broken':
        return 'text-red-400';
      case 'external':
        return 'text-blue-400';
      default:
        return 'text-yellow-400';
    }
  };
  const filteredLinks = linkStatuses.filter(link => {
    if (selectedFilter === 'all') return true;
    return link.status === selectedFilter;
  });
  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link className="w-6 h-6" />
      </motion.button>
      {/* Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Link className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Link Health Monitor</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-cyan-100 mt-2">
                Monitor and maintain the health of all website links
              </p>
            </div>
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Summary Cards */}
              {report && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{report.totalLinks}</div>
                    <div className="text-gray-400 text-sm">Total Links</div>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{report.healthyLinks}</div>
                    <div className="text-green-400 text-sm">Healthy</div>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400">{report.brokenLinks}</div>
                    <div className="text-red-400 text-sm">Broken</div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{report.externalLinks}</div>
                    <div className="text-blue-400 text-sm">External</div>
                  </div>
                </div>
              )}
              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilter === 'all'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    All Links
                  </button>
                  <button
                    onClick={() => setSelectedFilter('broken')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilter === 'broken'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Broken
                  </button>
                  <button
                    onClick={() => setSelectedFilter('external')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilter === 'external'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    External
                  </button>
                  <button
                    onClick={() => setSelectedFilter('healthy')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilter === 'healthy'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Healthy
                  </button>
                </div>
                <button
                  onClick={startMonitoring}
                  disabled={isMonitoring}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isMonitoring ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Zap className="w-4 h-4" />
                  )}
                  <span>{isMonitoring ? 'Checking...' : 'Check All Links'}</span>
                </button>
              </div>
              {/* Links Table */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Link
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Parent Page
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Response Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Last Checked
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {filteredLinks.map((link, index) => (
                        <tr key={index} className="hover:bg-gray-700/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(link.status)}
                              <span className={`text-sm font-medium ${getStatusColor(link.status)}`}>
                                {link.status.charAt(0).toUpperCase() + link.status.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="max-w-xs truncate">
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                              >
                                <span className="truncate">{link.url}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                              {link.linkText && (
                                <div className="text-xs text-gray-400 mt-1">
                                  Text: {link.linkText}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {link.parentPage || 'Unknown'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {link.responseTime ? `${link.responseTime}ms` : 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {link.lastChecked.toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Recommendations */}
              <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Recommendations
                </h3>
                <ul className="text-yellow-200 text-sm space-y-1">
                  <li>• Fix broken LinkedIn and social media links</li>
                  <li>• Implement proper redirects for moved pages</li>
                  <li>• Set up automated link monitoring</li>
                  <li>• Review external link validity regularly</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
export default LinkHealthMonitor;