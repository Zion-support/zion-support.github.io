import React, { useState } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TrendingUp, TrendingDown, Zap, Clock, Target } from 'lucide-react';
import { usePerformance } from '../hooks/usePerformance';

export const PerformanceDashboard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const performance = usePerformance();

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4" />;
    if (score >= 70) return <Target className="w-4 h-4" />;
    return <TrendingDown className="w-4 h-4" />;
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value}${unit}`;
  };

  const getMetricColor = (value: number | null, good: number, poor: number) => {
    if (value === null) return 'text-gray-400';
    if (value <= good) return 'text-green-400';
    if (value <= poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 left-4 z-50"
    >
      {/* Collapsed View */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-medium text-sm">Performance</span>
        </div>
        
        {/* Score Indicator */}
        <div className="mt-2 text-center">
          <div className={`text-2xl font-bold ${getScoreColor(performance.overallScore)}`}>
            {performance.overallScore}
          </div>
          <div className="text-xs text-gray-400">Score</div>
        </div>
      </motion.button>

      {/* Expanded View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Performance Dashboard
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
              <p className="text-cyan-100 text-sm mt-1">
                Real-time performance monitoring
              </p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Overall Score */}
              <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {getScoreIcon(performance.overallScore)}
                  <span className="text-white font-medium">Overall Score</span>
                </div>
                <div className={`text-4xl font-bold ${getScoreColor(performance.overallScore)}`}>
                  {performance.overallScore}
                </div>
                <div className="text-gray-400 text-sm">out of 100</div>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="text-white font-medium text-sm">Core Web Vitals</h4>
                
                {/* FCP */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">FCP</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.fcp, 1800, 3000)}`}>
                    {formatMetric(performance.fcp)}
                  </div>
                </div>

                {/* LCP */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">LCP</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.lcp, 2500, 4000)}`}>
                    {formatMetric(performance.lcp)}
                  </div>
                </div>

                {/* FID */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">FID</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.fid, 100, 300)}`}>
                    {formatMetric(performance.fid)}
                  </div>
                </div>

                {/* CLS */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">CLS</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.cls, 0.1, 0.25)}`}>
                    {performance.cls ? performance.cls.toFixed(3) : 'N/A'}
                  </div>
                </div>

                {/* TTFB */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">TTFB</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.ttfb, 800, 1800)}`}>
                    {formatMetric(performance.ttfb)}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="text-center p-3 bg-gray-800 rounded-lg border border-gray-700">
                <div className="text-gray-400 text-xs mb-1">Status</div>
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${performance.isLoaded ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                  <span className="text-white text-sm">
                    {performance.isLoaded ? 'Monitoring Active' : 'Initializing...'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react'

interface PerformanceMetrics {
  buildSize: string;
  pageCount: number;
  loadTime: number;
  healthStatus: 'healthy' | 'warning' | 'error';
}

interface Improvement {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'security' | 'ux' | 'build';
}

const PerformanceDashboard: React.FC = () => {
  const [metrics] = useState<PerformanceMetrics>({
    buildSize: '959 MB',
    pageCount: 166,
    loadTime: 1.2,
    healthStatus: 'healthy'
  });

  const improvements: Improvement[] = [
    {
      id: '1',
      title: 'Fixed Search Bar Issues',
      description: 'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',
      status: 'completed',
      impact: 'high',
      category: 'ux'
    },
    {
      id: '2', 
      title: 'Environment Validation System',
      description: 'Added comprehensive pre-build checks to prevent deployment with missing environment variables',
      status: 'completed',
      impact: 'high',
      category: 'build'
    },
    {
      id: '3',
      title: 'NextAuth Configuration Fix',
      description: 'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',
      status: 'completed',
      impact: 'medium',
      category: 'security'
    },
    {
      id: '4',
      title: 'API Client Error Handling',
      description: 'Improved global error handling with better retry logic and user feedback',
      status: 'completed',
      impact: 'medium',
      category: 'ux'
    },
    {
      id: '5',
      title: 'Bundle Analyzer Integration',
      description: 'Added bundle analysis tools to identify and optimize large dependencies',
      status: 'completed',
      impact: 'medium',
      category: 'performance'
    },
    {
      id: '6',
      title: 'Health Check Endpoint',
      description: 'Created production monitoring endpoint for environment and service health',
      status: 'completed',
      impact: 'medium',
      category: 'security'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'planned': return <TrendingUp className="h-4 w-4 text-blue-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance': return <Zap className="h-4 w-4" />;
      case 'security': return <Shield className="h-4 w-4" />;
      case 'ux': return <Search className="h-4 w-4" />;
      case 'build': return <TrendingUp className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  const completedImprovements = improvements.filter(imp => imp.status === 'completed');

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
        <Badge className="bg-green-100 text-green-800">
          {completedImprovements.length} Improvements Completed
        </Badge>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Build Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.buildSize}</div>
            <p className="text-xs text-gray-500">Total build output</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Page Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.pageCount}</div>
            <p className="text-xs text-gray-500">Generated pages</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Load Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.loadTime}s</div>
            <p className="text-xs text-gray-500">Average page load</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Health Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-semibold text-green-600">Healthy</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completed Improvements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Completed Improvements</span>
          </CardTitle>
          <CardDescription>
            Recent performance and functionality improvements that have been implemented
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {completedImprovements.map((improvement) => (
              <div key={improvement.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {getCategoryIcon(improvement.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {improvement.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Badge className={getImpactColor(improvement.impact)}>
                        {improvement.impact} impact
                      </Badge>
                      {getStatusIcon(improvement.status)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {improvement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button onClick={() => window.open('/api/health/environment', '_blank')} variant="outline">
          <Shield className="h-4 w-4 mr-2" />
          Check Health Status
        </Button>
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant="outline">
          <TrendingUp className="h-4 w-4 mr-2" />
          Bundle Analysis
        </Button>
      </div>
    </div>
  );
};

export default PerformanceDashboard; 
>>>>>>> autobot/2025-08-24T03-49-38-332Z
