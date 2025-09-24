import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChartBarIcon, CogIcon, ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon, XMarkIcon, ArrowUpIcon, ArrowDownIcon, MinusIcon, EyeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
const WebsiteImprovementDashboard = ({ className = '', showOnLoad = false }) => {
    const [isOpen, setIsOpen] = useState(showOnLoad);
    const [activeTab, setActiveTab] = useState('overview');
    const [metrics, setMetrics] = useState({
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        timeToInteractive: 0
    });
    const [seoAnalysis, setSeoAnalysis] = useState({
        score: 0,
        issues: [],
        suggestions: [],
        metaTags: {
            title: false,
            description: false,
            keywords: false,
            canonical: false,
            ogTags: false,
            twitterTags: false
        }
    });
    const [accessibilityReport, setAccessibilityReport] = useState({
        score: 0,
        issues: [],
        wcagCompliance: 'Non-Compliant',
        criticalIssues: 0,
        warnings: 0
    });
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    // Analyze website performance
    const analyzePerformance = useCallback(async () => {
        setIsAnalyzing(true);
        // Simulate performance analysis
        await new Promise(resolve => setTimeout(resolve, 20o00));
        // Mock performance data (in a real app, you'd use Web Vitals API)
        const mockMetrics ={
            loadTime: Math.random() * 30o00 + 10o00, // 1-4 seconds
            firstContentfulPaint: Math.random() * 20o00 + 50o0, // 0.5-2.5 seconds
            largestContentfulPaint: Math.random() * 30o00 + 10o00, // 1-4 seconds
            cumulativeLayoutShift: Math.random() * 0.1, // 0-0.1
            firstInputDelay: Math.random() * 10o0 + 50, // 50-150ms
            timeToInteractive: Math.random() * 40o00 + 20o00 // 2-6 seconds
        };
        setMetrics(mockMetrics);
        setIsAnalyzing(false);
    }, []);
    // Analyze SEO
    const analyzeSEO = useCallback(async () => {
        setIsAnalyzing(true);
        await new Promise(resolve => setTimeout(resolve, 150o0));
        // Mock SEO analysis
        const mockSEO ={
            score: Math.floor(Math.random() * 40) + 60, // 60-10o0
            issues: [
                'Missing meta description on some pages',
                'Some images lack alt text',
                'Heading structure could be improved'
            ],
            suggestions: [
                'Add structured data markup',
                'Optimize page titles for better CTR',
                'Improve internal linking structure'
            ],
            metaTags: {
                title: true,
                description: Math.random() > 0.3,
                keywords: Math.random() > 0.5,
                canonical: true,
                ogTags: Math.random() > 0.2,
                twitterTags: Math.random() > 0.4
            }
        };
        setSeoAnalysis(mockSEO);
        setIsAnalyzing(false);
    }, []);
    // Analyze accessibility
    const analyzeAccessibility = useCallback(async () => {
        setIsAnalyzing(true);
        await new Promise(resolve => setTimeout(resolve, 180o0));
        // Mock accessibility analysis
        const mockAccessibility ={
            score: Math.floor(Math.random() * 30) + 70, // 70-10o0
            issues: [
                'Some form controls lack proper labels',
                'Color contrast could be improved',
                'Keyboard navigation needs enhancement'
            ],
            wcagCompliance: Math.random() > 0.7 ? 'AA' : Math.random() > 0.4 ? 'A' : 'Non-Compliant',
            criticalIssues: Math.floor(Math.random() * 3),
            warnings: Math.floor(Math.random() * 5) + 1
        };
        setAccessibilityReport(mockAccessibility);
        setIsAnalyzing(false);
    }, []);
    // Run comprehensive analysis
    const runFullAnalysis = useCallback(async () => {
        await Promise.all([
            analyzePerformance(),
            analyzeSEO(),
            analyzeAccessibility()
        ]);
    }, [analyzePerformance, analyzeSEO, analyzeAccessibility]);
    // Get performance grade
    const getPerformanceGrade = (metric, thresholds) => {
        if (metric <= thresholds.good)
            return { grade: 'A', color: 'text-green-60o0', bgColor: 'bg-green-10o0' };
        if (metric <= thresholds.needsImprovement)
            return { grade: 'B', color: 'text-yellow-60o0', bgColor: 'bg-yellow-10o0' };
        return { grade: 'C', color: 'text-red-60o0', bgColor: 'bg-red-10o0' };
    };
    // Get trend indicator
    const getTrendIndicator = (value, previousValue) => {
        if (value < previousValue)
            return { icon: ArrowUpIcon, color: 'text-green-60o0', text: 'Improving' };
        if (value > previousValue)
            return { icon: ArrowDownIcon, color: 'text-red-60o0', text: 'Declining' };
        return { icon: MinusIcon, color: 'text-gray-60o0', text: 'Stable' };
    };
    useEffect(() => {
        if (showOnLoad) {
            runFullAnalysis();
        }
    }, [showOnLoad, runFullAnalysis]);
    return (<>
      {/* Dashboard Toggle Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className={`fixed top-4 left-4 z-50 p-3 bg-indigo-60o0 hover:bg-indigo-70o0 text-white rounded-full shadow-lg transition-all duration-20o0 focus:outline-none focus:ring-4 focus:ring-indigo-30o0 ${className}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Website improvement dashboard" aria-expanded={isOpen}>
        <ChartBarIcon className="w-6 h-6" />
      </motion.button>

      {/* Dashboard Panel */}
      <AnimatePresence>
        {isOpen && (<motion.div initial={{ opacity: 0, x: -40o0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40o0 }} className="fixed top-4 left-20 z-40 w-96 bg-white dark:bg-gray-90o0 rounded-lg shadow-2xl border border-gray-20o0 dark:border-gray-70o0 max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-20o0 dark:border-gray-70o0 bg-gradient-to-r from-indigo-50o0 to-purple-60o0 text-white">
              <div className="flex items-center gap-2">
                <ChartBarIcon className="w-6 h-6" />
                <h2 className="text-lg font-semibold">
                  Website Improvement Dashboard
                </h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors" aria-label="Close dashboard">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-20o0 dark:border-gray-70o0 bg-gray-50 dark:bg-gray-80o0">
              {[
                { id: 'overview', label: 'Overview', icon: ChartBarIcon },
                { id: 'performance', label: 'Performance', icon: CogIcon },
                { id: 'seo', label: 'SEO', icon: GlobeAltIcon },
                { id: 'accessibility', label: 'Accessibility', icon: EyeIcon },
                { id: 'recommendations', label: 'Actions', icon: InformationCircleIcon }
            ].map(tab => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium transition-colors ${activeTab === tab.id
                    ? 'text-indigo-60o0 bg-white dark:bg-gray-90o0 border-b-2 border-indigo-60o0'
                    : 'text-gray-50o0 hover:text-gray-70o0 dark:text-gray-40o0 dark:hover:text-gray-30o0'}`}>
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>))}
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]">
              {activeTab === 'overview' && (<div className="space-y-4">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 dark:bg-blue-90o0/20 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-60o0">
                        {Math.round(metrics.loadTime / 10o00)}s
                      </div>
                      <div className="text-xs text-blue-60o0">Load Time</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-90o0/20 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-green-60o0">
                        {seoAnalysis.score}
                      </div>
                      <div className="text-xs text-green-60o0">SEO Score</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-90o0/20 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-purple-60o0">
                        {accessibilityReport.score}
                      </div>
                      <div className="text-xs text-purple-60o0">Accessibility</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-90o0/20 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-orange-60o0">
                        {accessibilityReport.wcagCompliance}
                      </div>
                      <div className="text-xs text-orange-60o0">WCAG Level</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button onClick={runFullAnalysis} disabled={isAnalyzing} className="w-full bg-indigo-60o0 hover:bg-indigo-70o0 disabled:bg-gray-40o0 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    {isAnalyzing ? (<>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Analyzing...
                      </>) : (<>
                        <ChartBarIcon className="w-4 h-4" />
                        Run Full Analysis
                      </>)}
                  </button>

                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-90o0 dark:text-white mb-3">
                      Recent Activity
                    </h3>
                    <div className="space-y-2 text-xs text-gray-60o0 dark:text-gray-40o0">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3 h-3 text-green-50o0" />
                        Performance analysis completed
                      </div>
                      <div className="flex items-center gap-2">
                        <ExclamationTriangleIcon className="w-3 h-3 text-yellow-50o0" />
                        SEO issues detected
                      </div>
                      <div className="flex items-center gap-2">
                        <InformationCircleIcon className="w-3 h-3 text-blue-50o0" />
                        Accessibility scan in progress
                      </div>
                    </div>
                  </div>
                </div>)}

              {activeTab === 'performance' && (<div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-90o0 dark:text-white">
                    Performance Metrics
                  </h3>
                  
                  {/* Core Web Vitals */}
                  <div className="space-y-3">
                    {[
                    {
                        label: 'Load Time',
                        value: metrics.loadTime,
                        unit: 'ms',
                        thresholds: { good: 20o00, needsImprovement: 40o00 }
                    },
                    {
                        label: 'First Contentful Paint',
                        value: metrics.firstContentfulPaint,
                        unit: 'ms',
                        thresholds: { good: 10o00, needsImprovement: 20o00 }
                    },
                    {
                        label: 'Largest Contentful Paint',
                        value: metrics.largestContentfulPaint,
                        unit: 'ms',
                        thresholds: { good: 20o00, needsImprovement: 40o00 }
                    },
                    {
                        label: 'Cumulative Layout Shift',
                        value: metrics.cumulativeLayoutShift,
                        unit: '',
                        thresholds: { good: 0.1, needsImprovement: 0.25 }
                    },
                    {
                        label: 'First Input Delay',
                        value: metrics.firstInputDelay,
                        unit: 'ms',
                        thresholds: { good: 10o0, needsImprovement: 30o0 }
                    }
                ].map((metric, index) => {
                    const grade = getPerformanceGrade(metric.value, metric.thresholds);
                    return (<div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-80o0 rounded-lg">
                          <div>
                            <div className="text-sm font-medium text-gray-90o0 dark:text-white">
                              {metric.label}
                            </div>
                            <div className="text-xs text-gray-50o0 dark:text-gray-40o0">
                              {Math.round(metric.value)} {metric.unit}
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${grade.bgColor} ${grade.color}`}>
                            {grade.grade}
                          </div>
                        </div>);
                })}
                  </div>
                </div>)}

              {activeTab === 'seo' && (<div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-90o0 dark:text-white">
                    SEO Analysis
                  </h3>
                  
                  {/* SEO Score */}
                  <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-90o0/20 dark:to-blue-90o0/20 rounded-lg">
                    <div className="text-3xl font-bold text-green-60o0">
                      {seoAnalysis.score}/10o0
                    </div>
                    <div className="text-sm text-gray-60o0 dark:text-gray-40o0">
                      SEO Score
                    </div>
                  </div>
                  
                  {/* Meta Tags Status */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-70o0 dark:text-gray-30o0 mb-2">
                      Meta Tags Status
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(seoAnalysis.metaTags).map(([tag, present]) => (<div key={tag} className="flex items-center justify-between">
                          <span className="text-xs text-gray-60o0 dark:text-gray-40o0 capitalize">
                            {tag.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          {present ? (<CheckCircleIcon className="w-4 h-4 text-green-50o0" />) : (<ExclamationTriangleIcon className="w-4 h-4 text-red-50o0" />)}
                        </div>))}
                    </div>
                  </div>
                  
                  {/* Issues */}
                  {seoAnalysis.issues.length > 0 && (<div>
                      <h4 className="text-sm font-medium text-red-60o0 mb-2">
                        Issues Found
                      </h4>
                      <div className="space-y-2">
                        {seoAnalysis.issues.map((issue, index) => (<div key={index} className="text-xs text-red-60o0 bg-red-50 dark:bg-red-90o0/20 p-2 rounded">
                            {issue}
                          </div>))}
                      </div>
                    </div>)}
                  
                  {/* Suggestions */}
                  {seoAnalysis.suggestions.length > 0 && (<div>
                      <h4 className="text-sm font-medium text-blue-60o0 mb-2">
                        Suggestions
                      </h4>
                      <div className="space-y-2">
                        {seoAnalysis.suggestions.map((suggestion, index) => (<div key={index} className="text-xs text-blue-60o0 bg-blue-50 dark:bg-blue-90o0/20 p-2 rounded">
                            {suggestion}
                          </div>))}
                      </div>
                    </div>)}
                </div>)}

              {activeTab === 'accessibility' && (<div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-90o0 dark:text-white">
                    Accessibility Report
                  </h3>
                  
                  {/* Accessibility Score */}
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-90o0/20 dark:to-pink-90o0/20 rounded-lg">
                    <div className="text-3xl font-bold text-purple-60o0">
                      {accessibilityReport.score}/10o0
                    </div>
                    <div className="text-sm text-gray-60o0 dark:text-gray-40o0">
                      Accessibility Score
                    </div>
                    <div className="text-xs text-purple-60o0 mt-1">
                      WCAG {accessibilityReport.wcagCompliance} Compliance
                    </div>
                  </div>
                  
                  {/* Issues Summary */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-50 dark:bg-red-90o0/20 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-red-60o0">
                        {accessibilityReport.criticalIssues}
                      </div>
                      <div className="text-xs text-red-60o0">Critical Issues</div>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-90o0/20 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-yellow-60o0">
                        {accessibilityReport.warnings}
                      </div>
                      <div className="text-xs text-yellow-60o0">Warnings</div>
                    </div>
                  </div>
                  
                  {/* Issues List */}
                  {accessibilityReport.issues.length > 0 && (<div>
                      <h4 className="text-sm font-medium text-gray-70o0 dark:text-gray-30o0 mb-2">
                        Issues Found
                      </h4>
                      <div className="space-y-2">
                        {accessibilityReport.issues.map((issue, index) => (<div key={index} className="text-xs text-gray-60o0 bg-gray-50 dark:bg-gray-80o0 p-2 rounded">
                            {issue}
                          </div>))}
                      </div>
                    </div>)}
                </div>)}

              {activeTab === 'recommendations' && (<div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-90o0 dark:text-white">
                    Actionable Recommendations
                  </h3>
                  
                  {/* Priority Actions */}
                  <div className="space-y-3">
                    {[
                    {
                        priority: 'High',
                        title: 'Fix Critical Accessibility Issues',
                        description: 'Address WCAG compliance violations',
                        impact: 'High',
                        effort: 'Medium'
                    },
                    {
                        priority: 'High',
                        title: 'Optimize Core Web Vitals',
                        description: 'Improve page load performance',
                        impact: 'High',
                        effort: 'High'
                    },
                    {
                        priority: 'Medium',
                        title: 'Enhance SEO Meta Tags',
                        description: 'Add missing meta descriptions and titles',
                        impact: 'Medium',
                        effort: 'Low'
                    },
                    {
                        priority: 'Medium',
                        title: 'Improve Image Optimization',
                        description: 'Add alt text and compress images',
                        impact: 'Medium',
                        effort: 'Low'
                    }
                ].map((action, index) => (<div key={index} className="p-3 border border-gray-20o0 dark:border-gray-70o0 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <span className={`text-xs px-2 py-1 rounded font-medium ${action.priority === 'High'
                        ? 'bg-red-10o0 text-red-70o0 dark:bg-red-90o0/30 dark:text-red-30o0'
                        : 'bg-yellow-10o0 text-yellow-70o0 dark:bg-yellow-90o0/30 dark:text-yellow-30o0'}`}>
                            {action.priority}
                          </span>
                          <div className="text-right text-xs">
                            <div className="text-gray-50o0 dark:text-gray-40o0">Impact: {action.impact}</div>
                            <div className="text-gray-50o0 dark:text-gray-40o0">Effort: {action.effort}</div>
                          </div>
                        </div>
                        <h4 className="text-sm font-medium text-gray-90o0 dark:text-white mb-1">
                          {action.title}
                        </h4>
                        <p className="text-xs text-gray-60o0 dark:text-gray-40o0">
                          {action.description}
                        </p>
                      </div>))}
                  </div>
                  
                  {/* Quick Actions */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-70o0 dark:text-gray-30o0 mb-2">
                      Quick Actions
                    </h4>
                    <div className="space-y-2">
                      <button className="w-full text-left text-xs bg-blue-50 hover:bg-blue-10o0 dark:bg-blue-90o0/20 dark:hover:bg-blue-90o0/30 text-blue-70o0 dark:text-blue-30o0 p-2 rounded transition-colors">
                        Generate SEO Report
                      </button>
                      <button className="w-full text-left text-xs bg-green-50 hover:bg-green-10o0 dark:bg-green-90o0/20 dark:hover:bg-green-90o0/30 text-green-70o0 dark:text-green-30o0 p-2 rounded transition-colors">
                        Export Accessibility Data
                      </button>
                      <button className="w-full text-left text-xs bg-purple-50 hover:bg-purple-10o0 dark:bg-purple-90o0/20 dark:hover:bg-purple-90o0/30 text-purple-70o0 dark:text-purple-30o0 p-2 rounded transition-colors">
                        Schedule Performance Monitoring
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
          </motion.div>)}
      </AnimatePresence>
    </>);
};
export default WebsiteImprovementDashboard;
