import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, AlertTriangle, CheckCircle, Info, HardDrive, Zap, Target, X, RefreshCw } from 'lucide-react';
export const BundleAnalyzer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [analysis, setAnalysis] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    // Analyze bundle size from build output
    const analyzeBundle = useCallback(async () => {
        setIsAnalyzing(true);
        try {
            // Simulate bundle analysis based on build output
            // In a real implementation, this would fetch actual bundle stats
            const mockAnalysis = {
                totalSize: 1200000, // ~1.2MB
                totalGzipSize: 400000, // ~400KB gzipped
                chunkCount: 45,
                chunks: [
                    {
                        name: 'react-vendor',
                        size: 170000,
                        gzipSize: 55000,
                        type: 'vendor',
                        optimization: 'good'
                    },
                    {
                        name: 'animation-vendor',
                        size: 114000,
                        gzipSize: 36000,
                        type: 'vendor',
                        optimization: 'warning'
                    },
                    {
                        name: 'ui-vendor',
                        size: 72000,
                        gzipSize: 24000,
                        type: 'vendor',
                        optimization: 'good'
                    },
                    {
                        name: 'index',
                        size: 89000,
                        gzipSize: 24000,
                        type: 'page',
                        optimization: 'good'
                    },
                    {
                        name: 'ServicesOverview',
                        size: 42800,
                        gzipSize: 10700,
                        type: 'page',
                        optimization: 'good'
                    },
                    {
                        name: 'Pricing',
                        size: 51200,
                        gzipSize: 11900,
                        type: 'page',
                        optimization: 'warning'
                    },
                    {
                        name: 'stripe-vendor',
                        size: 0,
                        gzipSize: 0,
                        type: 'vendor',
                        optimization: 'critical'
                    },
                    {
                        name: 'pdf-vendor',
                        size: 0,
                        gzipSize: 0,
                        type: 'vendor',
                        optimization: 'critical'
                    }
                ],
                recommendations: [
                    'Consolidate empty vendor chunks (stripe-vendor, pdf-vendor)',
                    'Consider code splitting for ServicesOverview page',
                    'Optimize animation-vendor bundle size',
                    'Implement tree shaking for unused dependencies',
                    'Add bundle size monitoring to CI/CD pipeline'
                ],
                score: 78,
                lastUpdated: new Date()
            };
            setAnalysis(mockAnalysis);
        }
        catch (error) {
            console.error('Bundle analysis failed:', error);
        }
        finally {
            setIsAnalyzing(false);
        }
    }, []);
    useEffect(() => {
        analyzeBundle();
    }, [analyzeBundle]);
    const formatBytes = (bytes) => {
        if (bytes === 0)
            return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    const getScoreColor = (score) => {
        if (score >= 80)
            return 'text-green-500';
        if (score >= 60)
            return 'text-yellow-500';
        return 'text-red-500';
    };
    const getScoreIcon = (score) => {
        if (score >= 80)
            return <CheckCircle className="w-5 h-5"/>;
        if (score >= 60)
            return <AlertTriangle className="w-5 h-5"/>;
        return <AlertTriangle className="w-5 h-5"/>;
    };
    const getOptimizationColor = (optimization) => {
        switch (optimization) {
            case 'good': return 'text-green-500 bg-green-100 dark:bg-green-900/20';
            case 'warning': return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20';
            case 'critical': return 'text-red-500 bg-red-100 dark:bg-red-900/20';
            default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
        }
    };
    const getOptimizationIcon = (optimization) => {
        switch (optimization) {
            case 'good': return <CheckCircle className="w-4 h-4"/>;
            case 'warning': return <AlertTriangle className="w-4 h-4"/>;
            case 'critical': return <AlertTriangle className="w-4 h-4"/>;
            default: return <Info className="w-4 h-4"/>;
        }
    };
    if (!analysis)
        return null;
    return (<>
      {/* Bundle Analyzer Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Bundle analyzer" aria-expanded={isOpen}>
        <BarChart3 className="w-6 h-6"/>
      </motion.button>

      {/* Bundle Analysis Panel */}
      <AnimatePresence>
        {isOpen && (<motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="fixed top-4 right-20 z-50 w-96 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden" role="dialog" aria-label="Bundle Analysis">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <BarChart3 className="w-5 h-5"/>
                  Bundle Analyzer
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20" aria-label="Close bundle analyzer">
                  <X className="w-5 h-5"/>
                </button>
              </div>
              <p className="text-purple-100 text-sm mt-1">
                Performance optimization insights
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'chunks', label: 'Chunks', icon: HardDrive },
                { id: 'recommendations', label: 'Tips', icon: Target }
            ].map(({ id, label, icon: Icon }) => (<button key={id} onClick={() => setActiveTab(id)} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors ${activeTab === id
                    ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50 dark:bg-purple-900/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`} aria-selected={activeTab === id} role="tab">
                  <Icon className="w-4 h-4"/>
                  {label}
                </button>))}
            </div>

            {/* Tab Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Overview Tab */}
              {activeTab === 'overview' && (<div className="space-y-4">
                  {/* Bundle Score */}
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {getScoreIcon(analysis.score)}
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Bundle Score</span>
                    </div>
                    <div className={`text-4xl font-bold ${getScoreColor(analysis.score)}`}>
                      {analysis.score}/100
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {analysis.score >= 80 ? 'Excellent' :
                    analysis.score >= 60 ? 'Good' : 'Needs Improvement'}
                    </div>
                  </div>

                  {/* Bundle Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <HardDrive className="w-4 h-4 text-blue-500"/>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Total Size</span>
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {formatBytes(analysis.totalSize)}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        {formatBytes(analysis.totalGzipSize)} gzipped
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-green-500"/>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Chunks</span>
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {analysis.chunkCount}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        {analysis.chunks.filter(c => c.optimization === 'good').length} optimized
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Quick Actions</h4>
                    <button onClick={analyzeBundle} disabled={isAnalyzing} className="w-full flex items-center justify-center gap-2 p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors disabled:opacity-50">
                      <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`}/>
                      {isAnalyzing ? 'Analyzing...' : 'Refresh Analysis'}
                    </button>
                  </div>
                </div>)}

              {/* Chunks Tab */}
              {activeTab === 'chunks' && (<div className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-3">Bundle Chunks</h4>
                  {analysis.chunks.map((chunk, index) => (<div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {chunk.name}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOptimizationColor(chunk.optimization)}`}>
                            {chunk.optimization}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {formatBytes(chunk.size)}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            {formatBytes(chunk.gzipSize)} gzipped
                          </div>
                        </div>
                      </div>
                      
                      {chunk.optimization !== 'good' && (<div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                          {getOptimizationIcon(chunk.optimization)}
                          <span>
                            {chunk.optimization === 'critical'
                            ? 'Empty chunk - consider removing'
                            : 'Consider optimization'}
                          </span>
                        </div>)}
                    </div>))}
                </div>)}

              {/* Recommendations Tab */}
              {activeTab === 'recommendations' && (<div className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-3">Optimization Tips</h4>
                  {analysis.recommendations.map((recommendation, index) => (<div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0"/>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          {recommendation}
                        </p>
                      </div>
                    </div>))}
                  
                  <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0"/>
                      <div className="text-sm text-yellow-800 dark:text-yellow-200">
                        <p className="font-medium mb-1">Pro Tip</p>
                        <p>Monitor bundle size in your CI/CD pipeline to catch size increases early.</p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-3 text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Last updated: {analysis.lastUpdated.toLocaleTimeString()}
              </div>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </>);
};
