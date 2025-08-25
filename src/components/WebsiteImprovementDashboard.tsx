import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChartBarIcon,
  CogIcon,
  XMarkIcon,
  ArrowUpIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  EyeIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  LinkIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

interface ImprovementMetrics {
  accessibility: number;
  contentQuality: number;
  linkHealth: number;
  performance: number;
  seo: number;
  overall: number;
}

interface ImprovementAction {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'accessibility' | 'content' | 'links' | 'performance' | 'seo';
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  impact: number;
  estimatedTime: string;
  automated: boolean;
}

interface WebsiteImprovementDashboardProps {
  className?: string;
  showMetrics?: boolean;
  autoRefresh?: boolean;
}

export const WebsiteImprovementDashboard: React.FC<WebsiteImprovementDashboardProps> = ({
  className = '',
  showMetrics = true,
  autoRefresh = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'actions' | 'tools' | 'reports'>('overview');
  const [metrics, setMetrics] = useState<ImprovementMetrics>({
    accessibility: 85,
    contentQuality: 72,
    linkHealth: 68,
    performance: 78,
    seo: 75,
    overall: 76
  });
  
  const [actions, setActions] = useState<ImprovementAction[]>([
    {
      id: 'fix-broken-links',
      title: 'Fix Broken Links',
      description: 'Resolve 278 broken internal and external links',
      priority: 'critical',
      category: 'links',
      status: 'pending',
      impact: 25,
      estimatedTime: '2-3 hours',
      automated: true
    },
    {
      id: 'improve-content',
      title: 'Enhance Content Quality',
      description: 'Improve content structure and readability',
      priority: 'high',
      category: 'content',
      status: 'pending',
      impact: 20,
      estimatedTime: '4-6 hours',
      automated: false
    },
    {
      id: 'accessibility-audit',
      title: 'Accessibility Audit',
      description: 'Ensure WCAG compliance and improve accessibility',
      priority: 'high',
      category: 'accessibility',
      status: 'pending',
      impact: 18,
      estimatedTime: '3-4 hours',
      automated: true
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description: 'Improve meta tags, structured data, and content optimization',
      priority: 'medium',
      category: 'seo',
      status: 'pending',
      impact: 15,
      estimatedTime: '2-3 hours',
      automated: true
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Optimize loading speed and Core Web Vitals',
      priority: 'medium',
      category: 'performance',
      status: 'pending',
      impact: 12,
      estimatedTime: '3-4 hours',
      automated: true
    }
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  // Refresh metrics
  const refreshMetrics = async () => {
    setIsRefreshing(true);
    
    // Simulate metrics refresh
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Update metrics with some variation
    setMetrics(prev => ({
      accessibility: Math.max(0, Math.min(100, prev.accessibility + (Math.random() - 0.5) * 10)),
      contentQuality: Math.max(0, Math.min(100, prev.contentQuality + (Math.random() - 0.5) * 8)),
      linkHealth: Math.max(0, Math.min(100, prev.linkHealth + (Math.random() - 0.5) * 12)),
      performance: Math.max(0, Math.min(100, prev.performance + (Math.random() - 0.5) * 6)),
      seo: Math.max(0, Math.min(100, prev.seo + (Math.random() - 0.5) * 8)),
      overall: 0
    }));

    // Recalculate overall score
    setTimeout(() => {
      setMetrics(prev => ({
        ...prev,
        overall: Math.round((prev.accessibility + prev.contentQuality + prev.linkHealth + prev.performance + prev.seo) / 5)
      }));
    }, 100);

    setIsRefreshing(false);
  };

  // Execute improvement action
  const executeAction = async (actionId: string) => {
    setActions(prev => prev.map(action => 
      action.id === actionId 
        ? { ...action, status: 'in-progress' }
        : action
    ));

    // Simulate action execution
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));

    setActions(prev => prev.map(action => 
      action.id === actionId 
        ? { ...action, status: 'completed' }
        : action
    ));

    // Refresh metrics after action completion
    setTimeout(refreshMetrics, 500);
  };

  // Auto-refresh metrics
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshMetrics, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'in-progress': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'accessibility': return <AdjustmentsHorizontalIcon className="w-4 h-4" />;
      case 'content': return <DocumentTextIcon className="w-4 h-4" />;
      case 'links': return <LinkIcon className="w-4 h-4" />;
      case 'performance': return <RocketLaunchIcon className="w-4 h-4" />;
      case 'seo': return <GlobeAltIcon className="w-4 h-4" />;
      default: return <CogIcon className="w-4 h-4" />;
    }
  };

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get score background color
  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 dark:bg-green-900/20';
    if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900/20';
    return 'bg-red-100 dark:bg-red-900/20';
  };

  return (
    <>
      {/* Dashboard Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-44 right-4 z-50 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${className}`}
        aria-label="Website Improvement Dashboard"
        aria-expanded={isOpen}
      >
        <ChartBarIcon className="w-6 h-6" />
      </motion.button>

      {/* Dashboard Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-44 right-4 z-40 w-[28rem] bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Website Improvement Dashboard
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {['overview', 'metrics', 'actions', 'tools', 'reports'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  {/* Overall Score */}
                  <div className={`p-6 rounded-lg ${getScoreBgColor(metrics.overall)}`}>
                    <div className="text-center">
                      <div className={`text-4xl font-bold ${getScoreColor(metrics.overall)}`}>
                        {metrics.overall}/100
                      </div>
                      <div className="text-lg text-gray-600 dark:text-gray-400 mt-1">
                        Overall Website Score
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Based on accessibility, content, links, performance, and SEO
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {actions.filter(a => a.status === 'completed').length}
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Completed
                      </div>
                    </div>
                    
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {actions.filter(a => a.status === 'pending').length}
                      </div>
                      <div className="text-sm text-orange-600 dark:text-orange-400">
                        Pending
                      </div>
                    </div>
                  </div>

                  {/* Priority Actions */}
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                      Priority Actions
                    </h3>
                    <div className="space-y-2">
                      {actions
                        .filter(action => action.priority === 'critical' || action.priority === 'high')
                        .slice(0, 3)
                        .map(action => (
                          <div
                            key={action.id}
                            className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                  {action.title}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                  {action.description}
                                </p>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(action.priority)}`}>
                                {action.priority.charAt(0).toUpperCase() + action.priority.slice(1)}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Refresh Button */}
                  <button
                    onClick={refreshMetrics}
                    disabled={isRefreshing}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {isRefreshing ? 'Refreshing...' : 'Refresh Metrics'}
                  </button>
                </div>
              )}

              {/* Metrics Tab */}
              {activeTab === 'metrics' && (
                <div className="space-y-4">
                  {/* Individual Metrics */}
                  {Object.entries(metrics).map(([key, value]) => (
                    key !== 'overall' && (
                      <div key={key} className={`p-4 rounded-lg ${getScoreBgColor(value)}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center">
                              {key === 'accessibility' && <AdjustmentsHorizontalIcon className="w-5 h-5 text-blue-600" />}
                              {key === 'contentQuality' && <DocumentTextIcon className="w-5 h-5 text-purple-600" />}
                              {key === 'linkHealth' && <LinkIcon className="w-5 h-5 text-orange-600" />}
                              {key === 'performance' && <RocketLaunchIcon className="w-5 h-5 text-green-600" />}
                              {key === 'seo' && <GlobeAltIcon className="w-5 h-5 text-indigo-600" />}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {value >= 80 ? 'Excellent' : value >= 60 ? 'Good' : 'Needs Improvement'}
                              </p>
                            </div>
                          </div>
                          <div className={`text-3xl font-bold ${getScoreColor(value)}`}>
                            {value}
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              value >= 80 ? 'bg-green-500' : value >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    )
                  ))}

                  {/* Improvement Suggestions */}
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                      Improvement Suggestions
                    </h3>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      {metrics.accessibility < 80 && (
                        <li>• Run accessibility audit and fix WCAG compliance issues</li>
                      )}
                      {metrics.contentQuality < 80 && (
                        <li>• Enhance content structure and readability</li>
                      )}
                      {metrics.linkHealth < 80 && (
                        <li>• Fix broken links and improve internal linking</li>
                      )}
                      {metrics.performance < 80 && (
                        <li>• Optimize loading speed and Core Web Vitals</li>
                      )}
                      {metrics.seo < 80 && (
                        <li>• Improve meta tags and content optimization</li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Actions Tab */}
              {activeTab === 'actions' && (
                <div className="space-y-4">
                  {actions.map(action => (
                    <div
                      key={action.id}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            {getCategoryIcon(action.category)}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {action.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {action.description}
                            </p>
                            
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(action.priority)}`}>
                                {action.priority.charAt(0).toUpperCase() + action.priority.slice(1)}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded ${getStatusColor(action.status)}`}>
                                {action.status.replace('-', ' ').charAt(0).toUpperCase() + action.status.replace('-', ' ').slice(1)}
                              </span>
                              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                +{action.impact} Impact
                              </span>
                              {action.automated && (
                                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                  Automated
                                </span>
                              )}
                            </div>
                            
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                              Estimated time: {action.estimatedTime}
                            </div>
                          </div>
                        </div>
                        
                        {action.status === 'pending' && (
                          <button
                            onClick={() => executeAction(action.id)}
                            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs rounded-lg transition-colors"
                          >
                            Execute
                          </button>
                        )}
                        
                        {action.status === 'completed' && (
                          <CheckCircleIcon className="w-6 h-6 text-green-600" />
                        )}
                        
                        {action.status === 'in-progress' && (
                          <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tools Tab */}
              {activeTab === 'tools' && (
                <div className="space-y-4">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-3 text-indigo-500" />
                    <p>Available improvement tools</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                      <AdjustmentsHorizontalIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-medium text-blue-900 dark:text-blue-100 text-sm">
                        Accessibility
                      </h3>
                      <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
                        WCAG compliance checker
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                      <DocumentTextIcon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-medium text-purple-900 dark:text-purple-100 text-sm">
                        Content Quality
                      </h3>
                      <p className="text-xs text-purple-800 dark:text-purple-200 mt-1">
                        Content analysis tool
                      </p>
                    </div>

                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                      <LinkIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <h3 className="font-medium text-orange-900 dark:text-orange-100 text-sm">
                        Link Health
                      </h3>
                      <p className="text-xs text-orange-800 dark:text-orange-200 mt-1">
                        Broken link checker
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                      <RocketLaunchIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-medium text-green-900 dark:text-green-100 text-sm">
                        Performance
                      </h3>
                      <p className="text-xs text-green-800 dark:text-green-200 mt-1">
                        Speed optimization
                      </p>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>These tools are available as floating buttons on the right side of the page</p>
                  </div>
                </div>
              )}

              {/* Reports Tab */}
              {activeTab === 'reports' && (
                <div className="space-y-4">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <ChartBarIcon className="w-12 h-12 mx-auto mb-3 text-indigo-500" />
                    <p>Generate and export improvement reports</p>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg text-left hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                        <div>
                          <h3 className="font-medium text-blue-900 dark:text-blue-100 text-sm">
                            Comprehensive Website Report
                          </h3>
                          <p className="text-xs text-blue-800 dark:text-blue-200">
                            Full analysis with all metrics and recommendations
                          </p>
                        </div>
                      </div>
                    </button>

                    <button className="w-full p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg text-left hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-600" />
                        <div>
                          <h3 className="font-medium text-green-900 dark:text-green-100 text-sm">
                            Progress Report
                          </h3>
                          <p className="text-xs text-green-800 dark:text-green-200">
                            Track improvements over time
                          </p>
                        </div>
                      </div>
                    </button>

                    <button className="w-full p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg text-left hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <ExclamationTriangleIcon className="w-5 h-5 text-purple-600" />
                        <div>
                          <h3 className="font-medium text-purple-900 dark:text-purple-100 text-sm">
                            Issues Summary
                          </h3>
                          <p className="text-xs text-purple-800 dark:text-purple-200">
                            Prioritized list of problems to fix
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>Reports can be exported in JSON, PDF, or CSV format</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WebsiteImprovementDashboard;