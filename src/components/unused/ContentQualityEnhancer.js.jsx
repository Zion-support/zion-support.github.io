import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DocumentTextIcon, CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, WrenchScrewdriverIcon, XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
export const ContentQualityEnhancer = ({ className = '', showAnalysis = true, autoAnalyze = true, targetElements = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div[class*="content"]', 'article', 'section'] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [analysis, setAnalysis] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedElement, setSelectedElement] = useState(null);
    // Analyze content quality
    const analyzeContent = useCallback(async () => {
        setIsAnalyzing(true);
        const issues = [];
        const suggestions = [];
        let wordCount = 0;
        let readabilityScore = 100;
        let seoScore = 100;
        let engagementScore = 100;
        // Get all content elements
        const contentElements = document.querySelectorAll(targetElements.join(', '));
        contentElements.forEach((element, index) => {
            const text = element.textContent || '';
            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            wordCount += words.length;
            // Check for empty content
            if (words.length === 0) {
                issues.push({
                    id: `empty-content-${index}`,
                    type: 'error',
                    title: 'Empty Content',
                    description: 'Element contains no meaningful content',
                    severity: 'high',
                    element: element,
                    fixable: true,
                    suggestion: 'Add relevant content or remove empty element',
                    impact: 'seo'
                });
                seoScore -= 10;
                engagementScore -= 10;
            }
            // Check for very short content
            if (words.length > 0 && words.length < 10) {
                issues.push({
                    id: `short-content-${index}`,
                    type: 'warning',
                    title: 'Very Short Content',
                    description: `Element contains only ${words.length} words`,
                    severity: 'medium',
                    element: element,
                    fixable: true,
                    suggestion: 'Expand content to provide more value to users',
                    impact: 'engagement'
                });
                engagementScore -= 5;
                seoScore -= 3;
            }
            // Check for very long paragraphs (hard to read)
            if (words.length > 100) {
                issues.push({
                    id: `long-paragraph-${index}`,
                    type: 'warning',
                    title: 'Very Long Paragraph',
                    description: `Paragraph contains ${words.length} words`,
                    severity: 'medium',
                    element: element,
                    fixable: true,
                    suggestion: 'Break into smaller paragraphs for better readability',
                    impact: 'readability'
                });
                readabilityScore -= 5;
                engagementScore -= 3;
            }
            // Check for proper heading structure
            if (element.tagName.match(/^H[1-6]$/)) {
                const level = parseInt(element.tagName.charAt(1));
                const previousHeadings = Array.from(contentElements).slice(0, index).filter(el => el.tagName.match(/^H[1-6]$/));
                if (previousHeadings.length > 0) {
                    const lastLevel = parseInt(previousHeadings[previousHeadings.length - 1].tagName.charAt(1));
                    if (level - lastLevel > 1) {
                        issues.push({
                            id: `heading-skip-${index}`,
                            type: 'warning',
                            title: 'Heading Level Skipped',
                            description: `Heading level jumps from h${lastLevel} to h${level}`,
                            severity: 'medium',
                            element: element,
                            fixable: true,
                            suggestion: 'Ensure heading levels follow logical sequence',
                            impact: 'accessibility'
                        });
                        seoScore -= 3;
                    }
                }
            }
            // Check for keyword stuffing
            const commonWords = text.toLowerCase().match(/\b\w+\b/g) || [];
            const wordFrequency = {};
            commonWords.forEach(word => {
                wordFrequency[word] = (wordFrequency[word] || 0) + 1;
            });
            Object.entries(wordFrequency).forEach(([word, count]) => {
                if (count > 5 && word.length > 3) {
                    const density = (count / commonWords.length) * 100;
                    if (density > 3) {
                        issues.push({
                            id: `keyword-stuffing-${index}-${word}`,
                            type: 'warning',
                            title: 'Potential Keyword Stuffing',
                            description: `Word "${word}" appears ${count} times (${density.toFixed(1)}% density)`,
                            severity: 'medium',
                            element: element,
                            fixable: true,
                            suggestion: 'Reduce keyword density for more natural content',
                            impact: 'seo'
                        });
                        seoScore -= 5;
                    }
                }
            });
            // Check for proper meta descriptions
            if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
                const content = element.getAttribute('content') || '';
                if (content.length < 50) {
                    issues.push({
                        id: `short-meta-${index}`,
                        type: 'warning',
                        title: 'Short Meta Description',
                        description: `Meta description is only ${content.length} characters`,
                        severity: 'medium',
                        element: element,
                        fixable: true,
                        suggestion: 'Meta descriptions should be 150-160 characters for optimal display',
                        impact: 'seo'
                    });
                    seoScore -= 5;
                }
                else if (content.length > 160) {
                    issues.push({
                        id: `long-meta-${index}`,
                        type: 'warning',
                        title: 'Long Meta Description',
                        description: `Meta description is ${content.length} characters`,
                        severity: 'low',
                        element: element,
                        fixable: true,
                        suggestion: 'Meta descriptions should be 150-160 characters for optimal display',
                        impact: 'seo'
                    });
                    seoScore -= 2;
                }
            }
            // Check for broken links
            if (element.tagName === 'A') {
                const href = element.getAttribute('href');
                if (href && (href.startsWith('#') || href.startsWith('javascript:'))) {
                    issues.push({
                        id: `broken-link-${index}`,
                        type: 'warning',
                        title: 'Potential Broken Link',
                        description: `Link "${href}" may not work properly`,
                        severity: 'medium',
                        element: element,
                        fixable: true,
                        suggestion: 'Ensure link points to valid URL or page section',
                        impact: 'engagement'
                    });
                    engagementScore -= 3;
                }
            }
            // Check for images without alt text
            if (element.tagName === 'IMG') {
                const alt = element.getAttribute('alt');
                if (!alt || alt.trim() === '') {
                    issues.push({
                        id: `missing-alt-${index}`,
                        type: 'error',
                        title: 'Missing Alt Text',
                        description: 'Image has no alternative text for accessibility',
                        severity: 'high',
                        element: element,
                        fixable: true,
                        suggestion: 'Add descriptive alt text for better accessibility and SEO',
                        impact: 'accessibility'
                    });
                    seoScore -= 8;
                    engagementScore -= 5;
                }
            }
        });
        // Generate suggestions based on analysis
        if (wordCount < 300) {
            suggestions.push({
                id: 'increase-content',
                type: 'improvement',
                title: 'Increase Content Length',
                description: 'Consider adding more content to improve SEO and user engagement',
                priority: 'high',
                implementation: 'Add relevant sections, expand existing content, include more examples',
                expectedImpact: 15
            });
        }
        if (readabilityScore < 80) {
            suggestions.push({
                id: 'improve-readability',
                type: 'optimization',
                title: 'Improve Readability',
                description: 'Content could be more readable for better user experience',
                priority: 'medium',
                implementation: 'Use shorter sentences, break up long paragraphs, simplify complex language',
                expectedImpact: 12
            });
        }
        if (seoScore < 80) {
            suggestions.push({
                id: 'seo-optimization',
                type: 'enhancement',
                title: 'SEO Optimization',
                description: 'Several SEO improvements could boost search visibility',
                priority: 'high',
                implementation: 'Fix meta descriptions, add alt text, improve heading structure',
                expectedImpact: 20
            });
        }
        if (engagementScore < 80) {
            suggestions.push({
                id: 'engagement-improvement',
                type: 'improvement',
                title: 'Improve User Engagement',
                description: 'Content could be more engaging for visitors',
                priority: 'medium',
                implementation: 'Add interactive elements, improve content structure, include calls-to-action',
                expectedImpact: 10
            });
        }
        // Calculate overall score
        const overallScore = Math.round((readabilityScore + seoScore + engagementScore) / 3);
        const analysisResult = {
            wordCount,
            readabilityScore: Math.max(0, Math.min(100, readabilityScore)),
            seoScore: Math.max(0, Math.min(100, seoScore)),
            engagementScore: Math.max(0, Math.min(100, engagementScore)),
            issues,
            suggestions,
            overallScore: Math.max(0, Math.min(100, overallScore))
        };
        setAnalysis(analysisResult);
        setIsAnalyzing(false);
    }, [targetElements]);
    // Auto-fix content issues
    const autoFixIssues = useCallback(() => {
        if (!analysis)
            return;
        const fixableIssues = analysis.issues.filter(issue => issue.fixable);
        let fixedCount = 0;
        fixableIssues.forEach(issue => {
            if (issue.element) {
                switch (issue.id.split('-')[0]) {
                    case 'empty-content':
                        if (issue.element.textContent?.trim() === '') {
                            issue.element.innerHTML = '<em>Content placeholder - please add relevant information</em>';
                            fixedCount++;
                        }
                        break;
                    case 'missing-alt':
                        if (issue.element.tagName === 'IMG') {
                            const img = issue.element;
                            if (!img.alt) {
                                img.alt = 'Image';
                                fixedCount++;
                            }
                        }
                        break;
                    case 'short-meta':
                    case 'long-meta':
                        // These would require more complex logic to fix
                        break;
                    case 'broken-link':
                        // These would require more complex logic to fix
                        break;
                }
            }
        });
        if (fixedCount > 0) {
            // Re-analyze content after fixes
            setTimeout(analyzeContent, 500);
        }
        return fixedCount;
    }, [analysis, analyzeContent]);
    // Highlight element in page
    const highlightElement = useCallback((element) => {
        // Remove previous highlights
        document.querySelectorAll('.content-highlight').forEach(el => {
            el.classList.remove('content-highlight');
        });
        // Add highlight to selected element
        element.classList.add('content-highlight');
        setSelectedElement(element);
        // Scroll to element
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Remove highlight after 3 seconds
        setTimeout(() => {
            element.classList.remove('content-highlight');
            setSelectedElement(null);
        }, 3000);
    }, []);
    // Auto-analyze content
    useEffect(() => {
        if (autoAnalyze) {
            const timer = setTimeout(analyzeContent, 3000);
            return () => clearTimeout(timer);
        }
    }, [autoAnalyze, analyzeContent]);
    // Get score color
    const getScoreColor = (score) => {
        if (score >= 80)
            return 'text-green-600';
        if (score >= 60)
            return 'text-yellow-600';
        return 'text-red-600';
    };
    // Get score background color
    const getScoreBgColor = (score) => {
        if (score >= 80)
            return 'bg-green-100 dark:bg-green-900/20';
        if (score >= 60)
            return 'bg-yellow-100 dark:bg-yellow-900/20';
        return 'bg-red-100 dark:bg-red-900/20';
    };
    // Get severity color
    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
            case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
            case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
            default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
        }
    };
    // Get priority color
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
            case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
            case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
            default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
        }
    };
    return (<>
      {/* Content Quality Toggle Button */}
      <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-20 right-4 z-50 w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${className}`} aria-label="Content Quality Analysis" aria-expanded={isOpen}>
        <DocumentTextIcon className="w-6 h-6"/>
      </motion.button>

      {/* Content Quality Panel */}
      <AnimatePresence>
        {isOpen && (<motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }} className="fixed bottom-20 right-4 z-40 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Content Quality
              </h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <XMarkIcon className="w-5 h-5"/>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {['overview', 'issues', 'suggestions', 'actions'].map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>))}
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Overview Tab */}
              {activeTab === 'overview' && (<div className="space-y-4">
                  {!analysis ? (<div className="text-center text-gray-500 dark:text-gray-400">
                      <DocumentTextIcon className="w-12 h-12 mx-auto mb-3 text-purple-500"/>
                      <p>Click "Analyze Content" to get started</p>
                    </div>) : (<>
                      {/* Overall Score */}
                      <div className={`p-4 rounded-lg ${getScoreBgColor(analysis.overallScore)}`}>
                        <div className="text-center">
                          <div className={`text-3xl font-bold ${getScoreColor(analysis.overallScore)}`}>
                            {analysis.overallScore}/100
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Overall Content Quality Score
                          </div>
                        </div>
                      </div>

                      {/* Word Count */}
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {analysis.wordCount.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Total Words
                          </div>
                        </div>
                      </div>

                      {/* Individual Scores */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className={`p-3 rounded-lg ${getScoreBgColor(analysis.readabilityScore)}`}>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${getScoreColor(analysis.readabilityScore)}`}>
                              {analysis.readabilityScore}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Readability
                            </div>
                          </div>
                        </div>
                        
                        <div className={`p-3 rounded-lg ${getScoreBgColor(analysis.seoScore)}`}>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${getScoreColor(analysis.seoScore)}`}>
                              {analysis.seoScore}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              SEO
                            </div>
                          </div>
                        </div>
                        
                        <div className={`p-3 rounded-lg ${getScoreBgColor(analysis.engagementScore)}`}>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${getScoreColor(analysis.engagementScore)}`}>
                              {analysis.engagementScore}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Engagement
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="text-sm text-blue-800 dark:text-blue-200">
                          <div className="font-medium mb-1">Summary:</div>
                          <div>{analysis.issues.length} issues found</div>
                          <div>{analysis.suggestions.length} suggestions available</div>
                        </div>
                      </div>
                    </>)}

                  {/* Analyze Button */}
                  <button onClick={analyzeContent} disabled={isAnalyzing} className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors">
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Content'}
                  </button>
                </div>)}

              {/* Issues Tab */}
              {activeTab === 'issues' && (<div className="space-y-4">
                  {!analysis ? (<div className="text-center text-gray-500 dark:text-gray-400">
                      <ExclamationTriangleIcon className="w-12 h-12 mx-auto mb-3 text-yellow-500"/>
                      <p>No analysis available</p>
                    </div>) : analysis.issues.length === 0 ? (<div className="text-center text-gray-500 dark:text-gray-400">
                      <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500"/>
                      <p>No issues found! Great job!</p>
                    </div>) : (<div className="space-y-3">
                      {analysis.issues.map((issue) => (<div key={issue.id} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors cursor-pointer" onClick={() => issue.element && highlightElement(issue.element)}>
                          <div className="flex items-start gap-2">
                            {issue.type === 'error' && (<ExclamationTriangleIcon className="w-4 h-4 text-red-600 mt-0.5"/>)}
                            {issue.type === 'warning' && (<ExclamationTriangleIcon className="w-4 h-4 text-yellow-600 mt-0.5"/>)}
                            {issue.type === 'info' && (<InformationCircleIcon className="w-4 h-4 text-blue-600 mt-0.5"/>)}
                            
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                {issue.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                {issue.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className={`text-xs px-2 py-1 rounded ${getSeverityColor(issue.severity)}`}>
                                  {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                                  {issue.impact.charAt(0).toUpperCase() + issue.impact.slice(1)}
                                </span>
                                {issue.fixable && (<span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded">
                                    Auto-fixable
                                  </span>)}
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                <strong>Suggestion:</strong> {issue.suggestion}
                              </p>
                            </div>
                          </div>
                        </div>))}
                    </div>)}
                </div>)}

              {/* Suggestions Tab */}
              {activeTab === 'suggestions' && (<div className="space-y-4">
                  {!analysis ? (<div className="text-center text-gray-500 dark:text-gray-400">
                      <InformationCircleIcon className="w-12 h-12 mx-auto mb-3 text-blue-500"/>
                      <p>No analysis available</p>
                    </div>) : analysis.suggestions.length === 0 ? (<div className="text-center text-gray-500 dark:text-gray-400">
                      <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500"/>
                      <p>No suggestions available</p>
                    </div>) : (<div className="space-y-3">
                      {analysis.suggestions.map((suggestion) => (<div key={suggestion.id} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20">
                          <div className="flex items-start gap-2">
                            <InformationCircleIcon className="w-4 h-4 text-blue-600 mt-0.5"/>
                            
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                {suggestion.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                {suggestion.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(suggestion.priority)}`}>
                                  {suggestion.priority.charAt(0).toUpperCase() + suggestion.priority.slice(1)} Priority
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                  +{suggestion.expectedImpact} Impact
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                <strong>Implementation:</strong> {suggestion.implementation}
                              </p>
                            </div>
                          </div>
                        </div>))}
                    </div>)}
                </div>)}

              {/* Actions Tab */}
              {activeTab === 'actions' && (<div className="space-y-4">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-3 text-purple-500"/>
                    <p>Take action to improve content quality</p>
                  </div>

                  {/* Auto-fix Button */}
                  {analysis && analysis.issues.filter(i => i.fixable).length > 0 && (<button onClick={autoFixIssues} className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Auto-fix Issues
                    </button>)}

                  {/* Re-analyze Button */}
                  <button onClick={analyzeContent} disabled={isAnalyzing} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors">
                    <ArrowPathIcon className="w-4 h-4 inline mr-2"/>
                    {isAnalyzing ? 'Analyzing...' : 'Re-analyze Content'}
                  </button>

                  {/* Export Report */}
                  {analysis && (<button onClick={() => {
                        const report = JSON.stringify(analysis, null, 2);
                        const blob = new Blob([report], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'content-quality-report.json';
                        a.click();
                        URL.revokeObjectURL(url);
                    }} className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Export Report
                    </button>)}
                </div>)}
            </div>
          </motion.div>)}
      </AnimatePresence>

      {/* CSS for highlighting */}
      <style>{`
        .content-highlight {
          outline: 3px solid #8b5cf6 !important;
          outline-offset: 2px !important;
          background-color: rgba(139, 92, 246, 0.1) !important;
          transition: all 0.3s ease !important;
        }
      `}</style>
    </>);
};
export default ContentQualityEnhancer;
