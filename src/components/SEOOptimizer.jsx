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
        
        // Internal links (0-15 points)
        maxScore += 15;
        if (page.links.length >= 3) {
            score += 15;
        } else if (page.links.length >= 1) {
            score += 10;
        }
        
        // Keywords (0-10 points)
        maxScore += 10;
        if (page.keywords.length >= 3) {
            score += 10;
        } else if (page.keywords.length >= 1) {
            score += 5;
        }
        
        // URL structure (0-15 points)
        maxScore += 15;
        if (page.url === '/' || page.url.includes('-')) {
            score += 15;
        } else if (page.url.length > 0) {
            score += 8;
        }
        
        return Math.round((score / maxScore) * 100);
    };

    const identifySEOIssues = (page) => {
        const issues = [];
        
        if (!page.title || page.title.length < 30) {
            issues.push('Title is too short (should be 30-60 characters)');
        } else if (page.title.length > 60) {
            issues.push('Title is too long (should be 30-60 characters)');
        }
        
        if (!page.metaDescription || page.metaDescription.length < 120) {
            issues.push('Meta description is too short (should be 120-160 characters)');
        } else if (page.metaDescription.length > 160) {
            issues.push('Meta description is too long (should be 120-160 characters)');
        }
        
        if (page.headings.length < 2) {
            issues.push('Insufficient heading structure (should have at least 2 headings)');
        }
        
        if (page.images.length === 0) {
            issues.push('No images found (consider adding relevant images with alt text)');
        }
        
        if (page.links.length < 2) {
            issues.push('Insufficient internal linking (should have at least 2 internal links)');
        }
        
        if (page.keywords.length < 2) {
            issues.push('Insufficient keyword targeting (should have at least 2 relevant keywords)');
        }
        
        if (page.url !== '/' && !page.url.includes('-')) {
            issues.push('URL could be more SEO-friendly (consider using hyphens)');
        }
        
        return issues;
    };

    const generateSEORecommendations = (issues) => {
        const recommendations = [];
        
        if (issues.some(issue => issue.includes('Title'))) {
            recommendations.push('Optimize page titles with relevant keywords and compelling copy');
        }
        
        if (issues.some(issue => issue.includes('Meta description'))) {
            recommendations.push('Write compelling meta descriptions that accurately describe the page content');
        }
        
        if (issues.some(issue => issue.includes('heading structure'))) {
            recommendations.push('Add H1, H2, and H3 headings to improve content structure and SEO');
        }
        
        if (issues.some(issue => issue.includes('images'))) {
            recommendations.push('Add relevant images with descriptive alt text for better user experience');
        }
        
        if (issues.some(issue => issue.includes('internal linking'))) {
            recommendations.push('Increase internal linking to improve site navigation and SEO');
        }
        
        if (issues.some(issue => issue.includes('keyword targeting'))) {
            recommendations.push('Research and target relevant keywords for better search visibility');
        }
        
        if (issues.some(issue => issue.includes('URL'))) {
            recommendations.push('Use SEO-friendly URLs with hyphens and descriptive terms');
        }
        
        return recommendations;
    };

    const generateSummary = (pageAnalyses, topIssues) => {
        const totalScore = pageAnalyses.reduce((sum, page) => sum + page.score, 0);
        const averageScore = Math.round(totalScore / pageAnalyses.length);
        
        let overallGrade = 'A';
        if (averageScore < 90) overallGrade = 'B';
        if (averageScore < 80) overallGrade = 'C';
        if (averageScore < 70) overallGrade = 'D';
        if (averageScore < 60) overallGrade = 'F';
        
        return {
            grade: overallGrade,
            averageScore,
            totalPages: pageAnalyses.length,
            topIssues,
            recommendations: [
                'Focus on optimizing titles and meta descriptions for better click-through rates',
                'Improve heading structure for better content organization',
                'Add relevant images with proper alt text',
                'Increase internal linking for better site navigation',
                'Research and implement relevant keywords'
            ]
        };
    };

    if (!report) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">SEO Optimizer</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Analyze and optimize your website's search engine performance
                        </p>
                        <button
                            onClick={analyzeSEO}
                            disabled={isAnalyzing}
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
                        >
                            {isAnalyzing ? (
                                <div className="flex items-center space-x-2">
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                    <span>Analyzing...</span>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <Search className="w-5 h-5" />
                                    <span>Start SEO Analysis</span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">SEO Analysis Report</h1>
                    <p className="text-xl text-gray-300">
                        Comprehensive analysis of your website's search engine optimization
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{report.averageScore}%</div>
                        <div className="text-gray-300">Average SEO Score</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">{report.totalPages}</div>
                        <div className="text-gray-300">Pages Analyzed</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-orange-400 mb-2">{report.pagesWithIssues}</div>
                        <div className="text-gray-300">Pages with Issues</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">{report.summary.grade}</div>
                        <div className="text-gray-300">Overall Grade</div>
                    </div>
                </div>

                {/* Top Issues */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <AlertTriangle className="w-6 h-6 text-orange-400 mr-2" />
                        Top SEO Issues
                    </h2>
                    <div className="space-y-3">
                        {report.topIssues.map((issue, index) => (
                            <div key={index} className="flex items-center space-x-3 text-gray-300">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <span>{issue}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Page Details */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-6">Detailed Page Analysis</h2>
                    <div className="space-y-6">
                        {report.pageAnalyses.map((page, index) => (
                            <div key={index} className="border border-slate-700/50 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-cyan-400">{page.title}</h3>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-white">{page.score}%</div>
                                        <div className="text-sm text-gray-400">SEO Score</div>
                                    </div>
                                </div>
                                <div className="text-gray-300 mb-3">{page.metaDescription}</div>
                                <div className="text-sm text-gray-400 mb-3">URL: {page.pageUrl}</div>
                                
                                {page.issues.length > 0 && (
                                    <div className="mb-3">
                                        <div className="text-sm font-semibold text-orange-400 mb-2">Issues:</div>
                                        <div className="space-y-1">
                                            {page.issues.map((issue, issueIndex) => (
                                                <div key={issueIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                                    <span>{issue}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {page.recommendations.length > 0 && (
                                    <div>
                                        <div className="text-sm font-semibold text-green-400 mb-2">Recommendations:</div>
                                        <div className="space-y-1">
                                            {page.recommendations.map((rec, recIndex) => (
                                                <div key={recIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                    <span>{rec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center mt-12 space-x-4">
                    <button
                        onClick={analyzeSEO}
                        disabled={isAnalyzing}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
                    >
                        {isAnalyzing ? 'Analyzing...' : 'Re-analyze SEO'}
                    </button>
                    <button className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300">
                        <Download className="w-5 h-5 inline mr-2" />
                        Download Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SEOOptimizer;