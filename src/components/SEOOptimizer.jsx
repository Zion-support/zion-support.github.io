import React, { useState, useEffect, useCallback } from 'react';
import { Search, TrendingUp, Zap, AlertTriangle, RefreshCw, Download } from 'lucide-react';

const SEOOptimizer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [report, setReport] = useState(null);
    const [selectedPage, setSelectedPage] = useState(null);

    const analyzeSEO = useCallback(async () => {
        setIsAnalyzing(true);
        try {
            // Simulate analyzing all pages for SEO
            const samplePages = [
                {
                    url: '/',
                    title: 'Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services',
                    metaDescription: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.',
                    headings: ['AI-Powered Business Solutions', 'Comprehensive IT Services', 'Micro-SaaS Solutions'],
                    images: ['/images/hero-ai-solutions.jpg', '/images/hero-it-services.jpg'],
                    links: ['/services', '/ai-solutions', '/about', '/contact'],
                    keywords: ['AI solutions', 'quantum computing', 'cybersecurity', 'digital transformation']
                },
                {
                    url: '/services',
                    title: 'Our Services - Comprehensive Technology Solutions',
                    metaDescription: 'Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation.',
                    headings: ['AI Solutions', 'Cloud & DevOps', 'Cybersecurity', 'Digital Transformation'],
                    images: ['/images/services-overview.jpg'],
                    links: ['/ai-solutions', '/cloud-devops', '/cybersecurity', '/about'],
                    keywords: ['technology services', 'AI solutions', 'cloud infrastructure', 'cybersecurity']
                },
                {
                    url: '/ai-solutions',
                    title: 'AI Solutions - Artificial Intelligence Services',
                    metaDescription: 'Cutting-edge artificial intelligence solutions including machine learning, predictive analytics, and AI automation.',
                    headings: ['Machine Learning', 'Predictive Analytics', 'AI Automation', 'Business Intelligence'],
                    images: ['/images/ai-solutions.jpg'],
                    links: ['/services', '/about', '/contact'],
                    keywords: ['artificial intelligence', 'machine learning', 'predictive analytics', 'AI automation']
                }
            ];

            const pageAnalyses = samplePages.map(page => {
                const score = calculateSEOScore(page);
                const issues = identifySEOIssues(page);
                const recommendations = generateSEORecommendations(issues);
                return {
                    pageUrl: page.url,
                    title: page.title,
                    metaDescription: page.metaDescription,
                    headings: page.headings,
                    images: page.images,
                    links: page.links,
                    keywords: page.keywords,
                    score,
                    issues,
                    recommendations
                };
            });

            const totalPages = pageAnalyses.length;
            const averageScore = Math.round(pageAnalyses.reduce((sum, page) => sum + page.score, 0) / totalPages);
            const pagesWithIssues = pageAnalyses.filter(page => page.issues.length > 0).length;

            // Collect all issues and count frequency
            const issueCounts = {};
            pageAnalyses.forEach(page => {
                page.issues.forEach(issue => {
                    issueCounts[issue] = (issueCounts[issue] || 0) + 1;
                });
            });

            const topIssues = Object.entries(issueCounts)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([issue]) => issue);

            const summary = generateSummary(pageAnalyses, topIssues);

            setReport({
                totalPages,
                averageScore,
                pagesWithIssues,
                topIssues,
                pageAnalyses,
                summary
            });
        } catch (error) {
            console.error('Error analyzing SEO:', error);
        } finally {
            setIsAnalyzing(false);
        }
    }, []);

    const calculateSEOScore = (page) => {
        let score = 100;
        
        // Title length check
        if (page.title.length < 30 || page.title.length > 60) {
            score -= 10;
        }
        
        // Meta description length check
        if (page.metaDescription.length < 120 || page.metaDescription.length > 160) {
            score -= 10;
        }
        
        // Headings check
        if (page.headings.length < 2) {
            score -= 15;
        }
        
        // Images check
        if (page.images.length === 0) {
            score -= 10;
        }
        
        // Links check
        if (page.links.length < 3) {
            score -= 10;
        }
        
        // Keywords check
        if (page.keywords.length < 3) {
            score -= 10;
        }
        
        return Math.max(0, score);
    };

    const identifySEOIssues = (page) => {
        const issues = [];
        
        if (page.title.length < 30) {
            issues.push('Title too short');
        } else if (page.title.length > 60) {
            issues.push('Title too long');
        }
        
        if (page.metaDescription.length < 120) {
            issues.push('Meta description too short');
        } else if (page.metaDescription.length > 160) {
            issues.push('Meta description too long');
        }
        
        if (page.headings.length < 2) {
            issues.push('Insufficient headings');
        }
        
        if (page.images.length === 0) {
            issues.push('No images found');
        }
        
        if (page.links.length < 3) {
            issues.push('Insufficient internal links');
        }
        
        if (page.keywords.length < 3) {
            issues.push('Insufficient keywords');
        }
        
        return issues;
    };

    const generateSEORecommendations = (issues) => {
        const recommendations = [];
        
        issues.forEach(issue => {
            switch (issue) {
                case 'Title too short':
                    recommendations.push('Expand title to include more relevant keywords and be more descriptive');
                    break;
                case 'Title too long':
                    recommendations.push('Shorten title to stay within 60 character limit for better search display');
                    break;
                case 'Meta description too short':
                    recommendations.push('Expand meta description to provide better summary and include target keywords');
                    break;
                case 'Meta description too long':
                    recommendations.push('Shorten meta description to stay within 160 character limit');
                    break;
                case 'Insufficient headings':
                    recommendations.push('Add more H1, H2, and H3 headings to improve content structure and SEO');
                    break;
                case 'No images found':
                    recommendations.push('Add relevant images with proper alt text to improve user engagement');
                    break;
                case 'Insufficient internal links':
                    recommendations.push('Add more internal links to improve site navigation and SEO');
                    break;
                case 'Insufficient keywords':
                    recommendations.push('Research and include more relevant keywords in your content');
                    break;
                default:
                    recommendations.push('Review and optimize this aspect of your page');
            }
        });
        
        return recommendations;
    };

    const generateSummary = (pageAnalyses, topIssues) => {
        const totalIssues = pageAnalyses.reduce((sum, page) => sum + page.issues.length, 0);
        const criticalIssues = topIssues.slice(0, 3);
        
        return {
            totalIssues,
            criticalIssues,
            overallHealth: totalIssues === 0 ? 'Excellent' : totalIssues < 5 ? 'Good' : totalIssues < 10 ? 'Fair' : 'Poor'
        };
    };

    const exportReport = () => {
        if (!report) return;
        
        const reportData = {
            generatedAt: new Date().toISOString(),
            summary: report.summary,
            pages: report.pageAnalyses
        };
        
        const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'seo-report.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        if (isOpen) {
            analyzeSEO();
        }
    }, [isOpen, analyzeSEO]);

    return (
        <div className="seo-optimizer">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                title="SEO Optimizer"
            >
                <Search className="w-6 h-6" />
            </button>

            {/* Main Panel */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 flex items-end justify-end">
                    <div className="bg-white dark:bg-gray-800 w-full max-w-2xl h-full max-h-[80vh] rounded-tl-2xl shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold flex items-center gap-3">
                                        <TrendingUp className="w-6 h-6" />
                                        SEO Optimizer
                                    </h2>
                                    <p className="text-blue-100 mt-1">Analyze and optimize your website's SEO</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
                            {isAnalyzing ? (
                                <div className="text-center py-12">
                                    <RefreshCw className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        Analyzing SEO...
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Scanning your website for optimization opportunities
                                    </p>
                                </div>
                            ) : report ? (
                                <div className="space-y-6">
                                    {/* Summary Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                {report.averageScore}%
                                            </div>
                                            <div className="text-sm text-blue-600 dark:text-blue-400">Average Score</div>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                                {report.totalPages}
                                            </div>
                                            <div className="text-sm text-green-600 dark:text-green-400">Pages Analyzed</div>
                                        </div>
                                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                                                {report.pagesWithIssues}
                                            </div>
                                            <div className="text-sm text-orange-600 dark:text-orange-400">Pages with Issues</div>
                                        </div>
                                    </div>

                                    {/* Top Issues */}
                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                                        <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5" />
                                            Top SEO Issues
                                        </h3>
                                        <div className="space-y-2">
                                            {report.topIssues.map((issue, index) => (
                                                <div key={index} className="flex items-center gap-2 text-red-700 dark:text-red-300">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    {issue}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Page Details */}
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Page Analysis</h3>
                                        <div className="space-y-3">
                                            {report.pageAnalyses.map((page, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                                    onClick={() => setSelectedPage(page)}
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="font-medium text-gray-800 dark:text-white">
                                                            {page.pageUrl}
                                                        </h4>
                                                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                            page.score >= 80 ? 'bg-green-100 text-green-800' :
                                                            page.score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                        }`}>
                                                            {page.score}%
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                        {page.title}
                                                    </p>
                                                    {page.issues.length > 0 && (
                                                        <div className="mt-2 text-xs text-red-600 dark:text-red-400">
                                                            {page.issues.length} issue{page.issues.length !== 1 ? 's' : ''} found
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Export Button */}
                                    <button
                                        onClick={exportReport}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-5 h-5" />
                                        Export Report
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        Ready to Analyze
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Click the analyze button to start SEO optimization
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SEOOptimizer;