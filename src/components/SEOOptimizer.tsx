<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
import { Helmet } from 'react-helmet-async';

export interface SEOData {
=======
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  Clock,
  Star,
  ArrowUpRight,
  RefreshCw
 } from 'lucide-react';
interface SEOAnalysis {
  score: number;
  issues: SEOIssue[];
  suggestions: SEOSuggestion[];
  metrics: SEOMetrics;
  lastUpdated: Date}
interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fixable: boolean;
  category: 'content' | 'technical' | 'performance' | 'accessibility'}
interface SEOSuggestion {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  estimatedImpact: number}
interface SEOMetrics {
  pageSpeed: number;
  mobileFriendliness: number;
  accessibility: number;
  bestPractices: number;
  seoScore: number;
coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number}}
interface SEOOptimizerProps extends React.PropsWithChildren<{}> {
  url?: string;
  autoAnalyze?: boolean;
  showDetails?: boolean;
  onAnalysisComplete?: (analysis: SEOAnalysis)  => void}
export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url,
  autoAnalyze = true,;
  showDetails = false,;
  onAnalysisComplete;
}) => {;
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || window.location.href);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  // Mock SEO analysis data (in real app, this would come from actual analysis)
  const mockAnalysis: SEOAnalysis = useMemo(() => ({
    score: 87,
    issues[
      {
        id: '1',
        type: 'warning',
        title: 'Missing Meta Description',
        description: 'The page is missing a meta description tag, which is important for search engine snippets.',
        impact: 'medium',
        fixable: true,
        category: 'content'
      },
      {
        id: '2',
        type: 'error',
        title: 'Slow Page Load Time',
        description: 'Page load time is above the recommended 3-second threshold.',
        impact: 'high',
        fixable: true,
        category: 'performance'
      },
      {
        id: '3',
        type: 'info',
        title: 'Missing Alt Text',
        description: 'Some images are missing alt text, which affects accessibility.',
        impact: 'low',
        fixable: true,
        category: 'accessibility'
    ],
    suggestions[
      {
        id: '1',
        title: 'Optimize Images',
        description: 'Compress and optimize images to improve page load speed.',
        priority: 'high',
        effort: 'medium',
        estimatedImpact: 15
      },
      {
        id: '2',
        title: 'Add Schema Markup',
        description: 'Implement structured data to improve search engine understanding.',
        priority: 'medium',
        effort: 'low',
        estimatedImpact: 8
      },
      {
        id: '3',
        title: 'Improve Internal Linking',
        description: 'Add more internal links to improve page authority distribution.',
        priority: 'low',
        effort: 'low',
        estimatedImpact: 5
    ],
    metrics: {
      pageSpeed: 78,
      mobileFriendliness: 92,
      accessibility: 85,
      bestPractices: 88,
      seoScore: 87,
      coreWebVitals: {
        lcp: 2.8,;
        fid: 45,;
        cls: 0.08;
      };
    },;
    lastUpdated: new Date();
  }), []);
  // Analyze SEO
  const analyzeSEO = useCallback(async () => {;
    setIsAnalyzing(true);
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
    onAnalysisComplete?.(mockAnalysis)}, [mockAnalysis, onAnalysisComplete]);
  // Auto-analyze on mount
  useEffect(() => {
    if (autoAnalyze) {
      analyzeSEO()}
  }, [autoAnalyze, analyzeSEO]);
  // Get score color
      default: return 'text-zion-slate'}
  };
  // Get priority color
      default: return 'text-zion-slate bg-zion-slate/10 border-zion-slate/200'}
  };
  // Filter issues by category
  const filteredIssues = useMemo(() => {;
    if (selectedCategory === 'all') return analysis?.issues || [];
    return analysis?.issues.filter(issue => issue.category === selectedCategory) || []}, [analysis, selectedCategory]);
  // Filter suggestions by priority
  const filteredSuggestions = useMemo(() => {
    return analysis?.suggestions.sort((a, b) => {
      const priorityOrder = {
  high: 3, medium: 2,;
  ;
  ;
  ;
  ;
  ;
  low: 1 ;
};
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }) || [];
  }, [analysis]);
  if (!analysis && !isAnalyzing) {
    return (
      <div className = "text-center py-8">
        <Search className="w-12 h-12 text-zion-slate/40 mx-auto mb-4" />
        <p className="text-zion-slate/60">No SEO analysis available</p>
        <button
          onClick={analyzeSEO}
          className="mt-4 px-6 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg transition-colors";
        >;
          Analyze SEO;
        </button>;
      </div>;
    );
  }
  return (
    <div className = "bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
            <Search className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zion-slate-dark">SEO Optimizer</h3>
            <p className="text-sm text-zion-slate/60">Performance & optimization insights</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="p-2 hover:bg-zion-slate/10 rounded-lg transition-colors"
            title="Advanced settings"
            <Settings className="w-5 h-5 text-zion-slate" />
          </button>
          <button
            onClick={analyzeSEO}
            disabled={isAnalyzing}
            className="px-4 py-2 bg-zion-cyan hover:bg-zion-cyan/80 disabled:bg-zion-slate/30 text-white rounded-lg transition-colors flex items-center space-x-2"
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </>
            )}
          </button>
        </div>
      </div>
      {isAnalyzing ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zion-slate/60">Analyzing your page...</p>
        </div>
      ) : analysis ? (
        <>
          {/* Overall Score */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-zion-slate-dark">Overall Score</h4>
              <span className="text-sm text-zion-slate/60">
                Last updated: {analysis.lastUpdated.toLocaleTimeString()}
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className={`w-24 h-24 rounded-full ${getScoreBackground(analysis.score)} flex items-center justify-center`}>
                <span className={`text-3xl font-bold ${getScoreColor(analysis.score)}`}>
                  {analysis.score}
                </span>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-zion-slate/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan">{analysis.metrics.pageSpeed}</div>
                    <div className="text-xs text-zion-slate/60">Page Speed</div>
                  </div>
                  <div className="text-center p-3 bg-zion-slate/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan">{analysis.metrics.mobileFriendliness}</div>
                    <div className="text-xs text-zion-slate/60">Mobile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Core Web Vitals */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Core Web Vitals</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg border ${
                analysis.metrics.coreWebVitals.lcp <= 2.5 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.lcp}s
                  </div>
                  <div className="text-sm text-zion-slate/60">LCP</div>
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.lcp <= 2.5 ? 'Good' : 'Needs improvement'}
                  </div>
                </div>
              </div>
              <div className={`p-4 rounded-lg border ${
                analysis.metrics.coreWebVitals.fid <= 100 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.fid}ms
                  </div>
                  <div className="text-sm text-zion-slate/60">FID</div>
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.fid <= 100 ? 'Good' : 'Needs improvement'}
                  </div>
                </div>
              </div>
              <div className={`p-4 rounded-lg border ${
                analysis.metrics.coreWebVitals.cls <= 0.1 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.cls}
                  </div>
                  <div className="text-sm text-zion-slate/60">CLS</div>
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.cls <= 0.1 ? 'Good' : 'Needs improvement'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Issues */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-zion-slate-dark">Issues Found</h4>
              <div className="flex space-x-1">
                {['all', 'content', 'technical', 'performance', 'accessibility'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zion-slate/10 text-zion-slate hover:bg-zion-slate/20'
                    }`}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <AnimatePresence>
                {filteredIssues.map((issue) => (
                  <motion.div
                    key={issue.id}
                    initial = {
  { opacity: 0,
  y: 20 
}}
                    animate = {
  { opacity: 1,
  y: 0 
}}
                    exit = {
  { opacity: 0,
  y: -20 
}}
                    className={`p-4 rounded-lg border-l-4 ${
                      issue.type === 'error' ? 'border-red-500 bg-red-50' :
                      issue.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                      'border-blue-500 bg-blue-50'
                    }`}
                    <div className="flex items-start space-x-3">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      ) : (
                        <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-zion-slate-dark">{issue.title}</h5>
                          <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(issue.impact)}`}>
                            {issue.impact} impact
                          </span>
                        </div>
                        <p className="text-sm text-zion-slate/70">{issue.description}</p>
                        {issue.fixable && (
                          <button className="mt-2 text-xs text-zion-cyan hover:text-zion-cyan/80 transition-colors">
                            Learn how to fix →
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          {/* Suggestions */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Optimization Suggestions</h4>
            <div className="space-y-3">
              {filteredSuggestions.slice(0, 3).map((suggestion) => (
                <motion.div
                  key={suggestion.id}
                  initial = {
  { opacity: 0,
  x: 20 
}}
                  animate = {
  { opacity: 1,
  x: 0 
}}
                  className="p-4 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5 border border-zion-cyan/20 rounded-lg"
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="font-medium text-zion-slate-dark mb-1">{suggestion.title}</h5>
                      <p className="text-sm text-zion-slate/70 mb-2">{suggestion.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-zion-slate/60">
                        <span>Priority: {suggestion.priority}</span>
                        <span>Effort: {suggestion.effort}</span>
                        <span>Impact: +{suggestion.estimatedImpact} points</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-zion-cyan/10 rounded-lg transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-zion-cyan" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Advanced Settings */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                initial = {
  { opacity: 0,
  height: 0 
}}
                animate = {
  { opacity: 1,
  height: 'auto' 
}}
                exit = {
  { opacity: 0,
  height: 0 
}}
                className="border-t border-zion-slate/20 pt-6"
                <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Advanced Settings</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-zion-slate/5 rounded-lg">
                    <h5 className="font-medium text-zion-slate-dark mb-2">Analysis Frequency</h5>
                    <select className="w-full p-2 border border-zion-slate/20 rounded-lg text-sm">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div className="p-4 bg-zion-slate/5 rounded-lg">
                    <h5 className="font-medium text-zion-slate-dark mb-2">Notification Level</h5>
                    <select className="w-full p-2 border border-zion-slate/20 rounded-lg text-sm">
                      <option>All issues</option>
                      <option>High impact only</option>
                      <option>Errors only</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )};
          </AnimatePresence>;
        </>;
      ) : null};
    </div>;
  );
};
// Hook for using SEO optimization
export const useSEOOptimization = () => {;
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const optimizePage = useCallback(async () => {;
    setIsOptimizing(true);
    // Implement actual optimization logic here
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsOptimizing(false)}, []);
  return {
    analysis,
    isOptimizing,
    optimizePage
  }};
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}
=======
import React, { useState, useEffect, useCallback, useMemo } from 'react.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
import { Search,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  Clock,
  Star,
  ArrowUpRight,
  RefreshCw
<<<<<<< HEAD
=======
               } from 'lucide-react.ts';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface SEOAnalysis {















  score: number;
  issues: SEOIssue[];
  suggestions: SEOSuggestion[];
  metrics: SEOMetrics;
<<<<<<< HEAD
  lastUpdated: Date;
=======
lastUpdated: Date;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SEOIssue {















  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fixable: boolean;
<<<<<<< HEAD
  category: 'content' | 'technical' | 'performance' | 'accessibility';
=======
category: 'content' | 'technical' | 'performance' | 'accessibility';













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SEOSuggestion {















  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
<<<<<<< HEAD
  estimatedImpact: number;
=======
estimatedImpact: number;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SEOMetrics {















  pageSpeed: number;
  mobileFriendliness: number;
  accessibility: number;
  bestPractices: number;
  seoScore: number;
coreWebVitals: {;
    lcp: number;
    fid: number;
<<<<<<< HEAD
    cls: number;
  













};
=======
    cls: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber}}

interface SEOOptimizerProps extends React.PropsWithChildren<{}> {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  url?: string;
  autoAnalyze?: boolean;
  showDetails?: boolean;
<<<<<<< HEAD
  onAnalysisComplete?: (analysis: SEOAnalysis)               => void;
=======
  onAnalysisComplete?: (analysis: anyanyanyanyanyanyanyanyanyanyanyanyanyanySEOAnalysis)                => void}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url,
<<<<<<< HEAD
  autoAnalyze = true,
  showDetails = false,
  onAnalysisComplete;
}) => {;
  const [analysis, setAnalysis] = useState<any>(null);
=======
  autoAnalyze = true,;
  showDetails = false,;
  onAnalysisComplete;
}) => {;
  const [analysis, setAnalysis] = useState<any>(null);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || window.location.href);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>('all');

  // Mock SEO analysis data (in real app, this would come from actual analysis)
  const mockAnalysis: SEOAnalysis = useMemo(() => ({
    score: 87,
    issues[
      {
        id: '1',
        type: 'warning',
        title: 'Missing Meta Description',
        description: 'The page is missing a meta description tag, which is important for search engine snippets.',
        impact: 'medium',
        fixable: true,
        category: 'content'
      },
      {
        id: '2',
        type: 'error',
        title: 'Slow Page Load Time',
        description: 'Page load time is above the recommended 3-second threshold.',
        impact: 'high',
        fixable: true,
        category: 'performance'
      },
      {
        id: '3',
        type: 'info',
        title: 'Missing Alt Text',
        description: 'Some images are missing alt text, which affects accessibility.',
        impact: 'low',
        fixable: true,
        category: 'accessibility'

    ],
    suggestions[
      {
        id: '1',
        title: 'Optimize Images',
        description: 'Compress and optimize images to improve page load speed.',
        priority: 'high',
        effort: 'medium',
        estimatedImpact: 15
      },
      {
        id: '2',
        title: 'Add Schema Markup',
        description: 'Implement structured data to improve search engine understanding.',
        priority: 'medium',
        effort: 'low',
        estimatedImpact: 8
      },
      {
        id: '3',
        title: 'Improve Internal Linking',
        description: 'Add more internal links to improve page authority distribution.',
        priority: 'low',
        effort: 'low',
        estimatedImpact: 5

    ],
    metrics: {
      pageSpeed: 78,
      mobileFriendliness: 92,
      accessibility: 85,
      bestPractices: 88,
      seoScore: 87,
<<<<<<< HEAD
      coreWebVitals: {
        lcp: 2.8,
        fid: 45,
        cls: 0.08

    },
    lastUpdated: new Date()
=======
      coreWebVitals: {;
        lcp: 2.8,;
        fid: 45,;
        cls: 0.08;
      };
    },;
    lastUpdated: new Date();
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }), []);

  // Analyze SEO
  const analyzeSEO = useCallback(async () => {;
    setIsAnalyzing(true);

    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
    onAnalysisComplete?.(mockAnalysis)}, [mockAnalysis, onAnalysisComplete]);

  // Auto-analyze on mount
  useEffect(() => {
    if (autoAnalyze) {
<<<<<<< HEAD
      analyzeSEO();

=======
      analyzeSEO()}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, [autoAnalyze, analyzeSEO]);

  // Get score color
<<<<<<< HEAD
  const getScoreColor = (score: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber)               => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500'};

  // Get score background
<<<<<<< HEAD
  const getScoreBackground = (score: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber)               => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100'};

  // Get impact color
<<<<<<< HEAD
  const getImpactColor = (impact: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    switch (impact) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
<<<<<<< HEAD
      default: return 'text-zion-slate';

=======
      default: return 'text-zion-slate'}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  // Get priority color
<<<<<<< HEAD
  const getPriorityColor = (priority: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    switch (priority) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
<<<<<<< HEAD
      default: return 'text-zion-slate bg-zion-slate/10 border-zion-slate/200';

=======
      default: return 'text-zion-slate bg-zion-slate/10 border-zion-slate/200'}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  // Filter issues by category
  const filteredIssues = useMemo(() => {;
    if (selectedCategory === 'all') return analysis?.issues || [];
    return analysis?.issues.filter(issue => issue.category === selectedCategory) || []}, [analysis, selectedCategory]);

  // Filter suggestions by priority
  const filteredSuggestions = useMemo(() => {
    return analysis?.suggestions.sort((a, b) => {
<<<<<<< HEAD
      const priorityOrder = {
  high: 3, medium: 2,;
  low: 1 ;

};
      return priorityOrder[b.priority] - priorityOrder[a.priority]}) || []}, [analysis]);
=======
      const priorityOrder = {
  high: 3, medium: 2,;
  ;
  ;
  ;
  ;
  ;
  low: 1 ;






};
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }) || [];
  }, [analysis]);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

  if (!analysis && !isAnalyzing) {
    return (
      <div className = "text-center py-8">
        <Search className="w-12 h-12 text-zion-slate/40 mx-auto mb-4" />
        <p className="text-zion-slate/60">No SEO analysis available</p>
        <button
          onClick={analyzeSEO}
<<<<<<< HEAD
          className="mt-4 px-6 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg transition-colors"

          Analyze SEO
        </button>
      </div>
    )};
=======;
          className="mt-4 px-6 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg transition-colors";
        >;
          Analyze SEO;
        </button>;
      </div>;
    );
<<<<<<< HEAD
=======
  }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Zion Tech Group delivers cutting-edge AI solutions, enterprise automation, quantum computing, and innovative technology services. Transform your business with our advanced AI platforms.',
  keywords = 'AI solutions, artificial intelligence, enterprise automation, quantum computing, technology services, AI platforms, machine learning, data analytics, cybersecurity, cloud solutions',
  canonicalUrl,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false,
  noFollow = false,
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of AI and technology solutions for enterprises',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@ziontechgroup.com',
    },
    sameAs: [
<<<<<<< HEAD
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup'
    ]
  }
};

interface SEOOptimizerProps {
  data?: Partial<SEOData>;
  children?: React.ReactNode;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ data = {}, children }) => {
  const seoData = { ...defaultSEO, ...data };

  useEffect(() => {
    // Update document title for better UX
    document.title = seoData.title;
    
    // Add structured data to page
    if (seoData.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [seoData]);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
        {seoData.author && <meta name="author" content={seoData.author} />}
        
        {/* Canonical URL */}
        {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
        
        {/* Robots Meta */}
        {seoData.noindex && <meta name="robots" content="noindex" />}
        {seoData.nofollow && <meta name="robots" content="nofollow" />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:url" content={seoData.canonical || 'https://ziontechgroup.com'} />
        {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        {seoData.ogImage && <meta name="twitter:image" content={seoData.ogImage} />}
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Article Meta Tags (for blog posts, news, etc.) */}
        {seoData.publishedTime && <meta property="article:published_time" content={seoData.publishedTime} />}
        {seoData.modifiedTime && <meta property="article:modified_time" content={seoData.modifiedTime} />}
        {seoData.section && <meta property="article:section" content={seoData.section} />}
        {seoData.tags && seoData.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      </Helmet>
      
      {children}
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
// Default SEO configuration for Zion Tech Group
export const defaultSEO = {
  title: 'Zion Tech Group - Innovation • Technology • Growth',
  description: 'Leading provider of AI-powered solutions, digital transformation services, and innovative technology solutions. Transform your business with cutting-edge AI, cybersecurity, and cloud solutions.',
  keywords: 'AI, Artificial Intelligence, Technology, Innovation, Digital Transformation, Zion Tech Group, Cybersecurity, Cloud Solutions, Quantum Computing',
  ogImage: '/og-image.svg'
=======
// Enhanced SEO component for specific page types
export const PageSEO: React.FC<SEOOptimizerProps & { pageType: 'home' | 'service' | 'blog' | 'about' | 'contact' }> = ({ 
  pageType, 
  data = {}, 
  children 
}) => {
  const pageSpecificSEO: Record<string, SEOData> = {
    home: {
      title: 'Zion Tech Group - Leading AI & Technology Solutions',
      description: 'Transform your business with Zion Tech Group\'s cutting-edge AI, cybersecurity, and digital transformation solutions. Expert technology consulting and implementation.',
      keywords: 'AI solutions, cybersecurity, digital transformation, cloud computing, technology consulting, business automation',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ziontechgroup.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
=======
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    offers: {
      '@type': 'Offer',
      category: 'AI Technology Services',
      description: 'Comprehensive AI and technology solutions',
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noIndex ? 'noindex' : 'index'} />
      {noFollow && <meta name="robots" content="nofollow" />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Meta Tags for AI/Tech Focus */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="React, Next.js, AI-Powered" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="color-scheme" content="dark light" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance Optimization */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Helmet>
  );
};

<<<<<<< HEAD
// SEO component for service pages
export const ServiceSEO: React.FC<SEOOptimizerProps & { 
  serviceName: string;
  serviceDescription: string;
  serviceCategory: string;
  pricing?: string;
  features?: string[];
}> = ({ 
  serviceName, 
  serviceDescription, 
  serviceCategory, 
  pricing, 
  features = [], 
  data = {}, 
  children 
}) => {
  const serviceSEO: SEOData = {
    title: `${serviceName} - ${serviceCategory} Services | Zion Tech Group`,
    description: serviceDescription,
    keywords: `${serviceName}, ${serviceCategory}, AI services, technology solutions, Zion Tech Group`,
    ogType: 'service',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: serviceDescription,
      category: serviceCategory,
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com'
      },
      ...(pricing && {
        offers: {
          '@type': 'Offer',
          price: pricing,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      }),
      ...(features.length > 0 && {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${serviceName} Features`,
          itemListElement: features.map(feature => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: feature
            }
          }))
        }
      })
    }
  };

  return (
    <SEOOptimizer data={{ ...serviceSEO, ...data }}>
      {children}
    </SEOOptimizer>
  );
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
};
=======
// Hook for using SEO optimization
export const useSEOOptimization = () => {;
  const [analysis, setAnalysis] = useState<any>(null);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const [isOptimizing, setIsOptimizing] = useState(false);

  const optimizePage = useCallback(async () => {;
    setIsOptimizing(true);
    // Implement actual optimization logic here
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsOptimizing(false)}, []);

  return {
    analysis,
    isOptimizing,
    optimizePage
<<<<<<< HEAD
  };
</div></div>};
}}}}}}}}}}}}}
=======
  }};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
export default SEOOptimizer;
>>>>>>> origin/main
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
