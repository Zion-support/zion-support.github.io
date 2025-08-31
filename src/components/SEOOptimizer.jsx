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

    useEffect(() => {
        // Auto-analyze SEO when component mounts
        analyzeSEO();
    }, [analyzeSEO]);

    const calculateSEOScore = (page) => {
        let score = 0;
        let maxScore = 0;

        // Title optimization (0-20 points)
        maxScore += 20;
        if (page.title.length >= 30 && page.title.length <= 60) {
            score += 20;
        } else if (page.title.length > 0) {
            score += 10;
        }

        // Meta description (0-15 points)
        maxScore += 15;
        if (page.metaDescription.length >= 120 && page.metaDescription.length <= 160) {
            score += 15;
        } else if (page.metaDescription.length > 0) {
            score += 8;
        }

        // Headings (0-15 points)
        maxScore += 15;
        if (page.headings.length >= 3) {
            score += 15;
        } else if (page.headings.length >= 1) {
            score += 10;
        }

        // Images (0-10 points)
        maxScore += 10;
        if (page.images.length >= 2) {
            score += 10;
        } else if (page.images.length >= 1) {
            score += 5;
        }

        // Links (0-10 points)
        maxScore += 10;
        if (page.links.length >= 5) {
            score += 10;
        } else if (page.links.length >= 2) {
            score += 5;
        }

        // Keywords (0-10 points)
        maxScore += 10;
        if (page.keywords.length >= 4) {
            score += 10;
        } else if (page.keywords.length >= 2) {
            score += 5;
        }

        // URL structure (0-10 points)
        maxScore += 10;
        if (page.url === '/' || page.url.includes('-')) {
            score += 10;
        } else if (page.url.length <= 50) {
            score += 5;
        }

        return Math.round((score / maxScore) * 100);
    };

    const identifySEOIssues = (page) => {
        const issues = [];

        if (page.title.length < 30 || page.title.length > 60) {
            issues.push('Title length optimization');
        }

        if (page.metaDescription.length < 120 || page.metaDescription.length > 160) {
            issues.push('Meta description length');
        }

        if (page.headings.length < 3) {
            issues.push('Insufficient heading structure');
        }

        if (page.images.length < 2) {
            issues.push('Limited image content');
        }

        if (page.links.length < 5) {
            issues.push('Internal linking opportunities');
        }

        if (page.keywords.length < 4) {
            issues.push('Keyword optimization');
        }

        return issues;
    };

    const generateSEORecommendations = (issues) => {
        const recommendations = {
            'Title length optimization': 'Optimize title length between 30-60 characters for better search visibility',
            'Meta description length': 'Ensure meta descriptions are between 120-160 characters for optimal display',
            'Insufficient heading structure': 'Add more H2 and H3 headings to improve content structure and readability',
            'Limited image content': 'Include more relevant images with proper alt text for better user engagement',
            'Internal linking opportunities': 'Add more internal links to improve site navigation and SEO value',
            'Keyword optimization': 'Expand keyword targeting to cover more relevant search terms'
        };

        return issues.map(issue => recommendations[issue] || 'General SEO improvement needed');
    };

    const generateSummary = (pageAnalyses, topIssues) => {
        const totalScore = pageAnalyses.reduce((sum, page) => sum + page.score, 0);
        const averageScore = Math.round(totalScore / pageAnalyses.length);

        let overallStatus = 'Excellent';
        if (averageScore < 70) overallStatus = 'Needs Improvement';
        else if (averageScore < 85) overallStatus = 'Good';

        return {
            overallStatus,
            averageScore,
            totalPages: pageAnalyses.length,
            topIssues,
            recommendations: [
                'Focus on title and meta description optimization',
                'Improve heading structure across all pages',
                'Enhance internal linking strategy',
                'Optimize image content with proper alt text',
                'Expand keyword targeting for better search visibility'
            ]
        };
    };

    const exportReport = () => {
        if (!report) return;

        const reportData = {
            generatedAt: new Date().toISOString(),
            summary: report.summary,
            pageAnalyses: report.pageAnalyses
        };

        const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'seo-analysis-report.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 z-50"
                title="Open SEO Optimizer"
            >
                <Search className="w-6 h-6" />
            </button>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 border-b border-slate-600">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <Search className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">SEO Optimizer</h2>
                                <p className="text-slate-300">Comprehensive SEO analysis and optimization recommendations</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    {!report ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="text-center">
                                <RefreshCw className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
                                <p className="text-slate-400">Analyzing your website's SEO...</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* Summary Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <TrendingUp className="w-6 h-6 text-green-400" />
                                        <h3 className="text-lg font-semibold text-white">Overall Score</h3>
                                    </div>
                                    <p className="text-3xl font-bold text-green-400">{report.summary.averageScore}%</p>
                                    <p className="text-slate-400 text-sm">{report.summary.overallStatus}</p>
                                </div>

                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <Search className="w-6 h-6 text-blue-400" />
                                        <h3 className="text-lg font-semibold text-white">Pages Analyzed</h3>
                                    </div>
                                    <p className="text-3xl font-bold text-blue-400">{report.totalPages}</p>
                                    <p className="text-slate-400 text-sm">Total pages</p>
                                </div>

                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <AlertTriangle className="w-6 h-6 text-yellow-400" />
                                        <h3 className="text-lg font-semibold text-white">Issues Found</h3>
                                    </div>
                                    <p className="text-3xl font-bold text-yellow-400">{report.pagesWithIssues}</p>
                                    <p className="text-slate-400 text-sm">Pages with issues</p>
                                </div>

                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <Zap className="w-6 h-6 text-cyan-400" />
                                        <h3 className="text-lg font-semibold text-white">Top Issues</h3>
                                    </div>
                                    <p className="text-3xl font-bold text-cyan-400">{report.topIssues.length}</p>
                                    <p className="text-slate-400 text-sm">Priority issues</p>
                                </div>
                            </div>

                            {/* Top Issues */}
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                                <h3 className="text-xl font-semibold text-white mb-4">Top SEO Issues</h3>
                                <div className="space-y-3">
                                    {report.topIssues.map((issue, index) => (
                                        <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                                            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                                            <span className="text-slate-300">{issue}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Page Analysis */}
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                                <h3 className="text-xl font-semibold text-white mb-4">Page Analysis</h3>
                                <div className="space-y-4">
                                    {report.pageAnalyses.map((page, index) => (
                                        <div
                                            key={index}
                                            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                                                selectedPage === index
                                                    ? 'border-cyan-500 bg-slate-700/50'
                                                    : 'border-slate-600 hover:border-slate-500'
                                            }`}
                                            onClick={() => setSelectedPage(selectedPage === index ? null : index)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-white font-medium">{page.title}</h4>
                                                    <p className="text-slate-400 text-sm">{page.pageUrl}</p>
                                                </div>
                                                <div className="text-right">
                                                    <div className={`text-2xl font-bold ${
                                                        page.score >= 80 ? 'text-green-400' :
                                                        page.score >= 60 ? 'text-yellow-400' : 'text-red-400'
                                                    }`}>
                                                        {page.score}%
                                                    </div>
                                                    <p className="text-slate-400 text-sm">SEO Score</p>
                                                </div>
                                            </div>

                                            {selectedPage === index && (
                                                <div className="mt-4 pt-4 border-t border-slate-600">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <h5 className="text-white font-medium mb-2">Issues Found</h5>
                                                            <ul className="space-y-1">
                                                                {page.issues.map((issue, i) => (
                                                                    <li key={i} className="text-slate-400 text-sm flex items-center space-x-2">
                                                                        <AlertTriangle className="w-4 h-4 text-yellow-400" />
                                                                        <span>{issue}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h5 className="text-white font-medium mb-2">Recommendations</h5>
                                                            <ul className="space-y-1">
                                                                {page.recommendations.map((rec, i) => (
                                                                    <li key={i} className="text-slate-400 text-sm flex items-center space-x-2">
                                                                        <Zap className="w-4 h-4 text-cyan-400" />
                                                                        <span>{rec}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={analyzeSEO}
                                    disabled={isAnalyzing}
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                                >
                                    <RefreshCw className={`w-5 h-5 ${isAnalyzing ? 'animate-spin' : ''}`} />
                                    <span>{isAnalyzing ? 'Analyzing...' : 'Re-analyze SEO'}</span>
                                </button>

                                <button
                                    onClick={exportReport}
                                    className="px-6 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 flex items-center space-x-2"
                                >
                                    <Download className="w-5 h-5" />
                                    <span>Export Report</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SEOOptimizer;