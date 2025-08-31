import React, { useState, useEffect, useCallback } from 'react';
import { Search, TrendingUp, Zap, AlertTriangle, RefreshCw, Download } from 'lucide-react';

// Default SEO configuration
export const defaultSEO = {
  title: "Zion Tech Group - AI-Powered Technology Solutions",
  description: "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.",
  keywords: "AI solutions, quantum computing, cybersecurity, digital transformation, Zion Tech Group",
  url: "https://ziontechgroup.com",
  image: "https://ziontechgroup.com/images/zion-tech-group-logo.png",
  type: "website"
};

export const SEOOptimizer = () => {
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

        if (issues.some(issue => issue.includes('No images'))) {
            recommendations.push('Add relevant images with descriptive alt text for better accessibility and SEO');
        }

        if (issues.some(issue => issue.includes('internal linking'))) {
            recommendations.push('Add internal links to related pages to improve navigation and SEO');
        }

        if (issues.some(issue => issue.includes('keyword targeting'))) {
            recommendations.push('Research and implement relevant keywords throughout your content');
        }

        if (issues.some(issue => issue.includes('URL'))) {
            recommendations.push('Optimize URLs to be descriptive and include relevant keywords');
        }

        return recommendations;
    };

    const generateSummary = (pageAnalyses, topIssues) => {
        const totalIssues = pageAnalyses.reduce((sum, page) => sum + page.issues.length, 0);
        const averageIssues = Math.round(totalIssues / pageAnalyses.length);

        return {
            overallHealth: averageIssues === 0 ? 'Excellent' : averageIssues <= 2 ? 'Good' : averageIssues <= 5 ? 'Fair' : 'Poor',
            priorityActions: topIssues.slice(0, 3),
            improvementPotential: Math.round((100 - pageAnalyses.reduce((sum, page) => sum + page.score, 0) / pageAnalyses.length))
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
        a.download = 'seo-analysis-report.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    if (!report) {
        return (
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-zion-cyan text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan/90 transition-colors"
                    title="SEO Optimizer"
                >
                    <Search className="w-5 h-5" />
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-zion-cyan text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan/90 transition-colors"
                title="SEO Optimizer"
            >
                <Search className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-zion-slate-dark border border-zion-purple/30 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <Zap className="w-6 h-6 text-zion-cyan" />
                                SEO Analysis Report
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-zion-slate-light hover:text-white transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-zion-slate-dark/80 border border-zion-purple/30 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-zion-cyan">{report.totalPages}</div>
                                <div className="text-zion-slate-light text-sm">Pages Analyzed</div>
                            </div>
                            <div className="bg-zion-slate-dark/80 border border-zion-purple/30 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-zion-cyan">{report.averageScore}%</div>
                                <div className="text-zion-slate-light text-sm">Average Score</div>
                            </div>
                            <div className="bg-zion-slate-dark/80 border border-zion-purple/30 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-zion-cyan">{report.pagesWithIssues}</div>
                                <div className="text-zion-slate-light text-sm">Pages with Issues</div>
                            </div>
                            <div className="bg-zion-slate-dark/80 border border-zion-purple/30 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-zion-cyan">{report.topIssues.length}</div>
                                <div className="text-zion-slate-light text-sm">Top Issues</div>
                            </div>
                        </div>

                        {/* Top Issues */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                Top Issues Found
                            </h3>
                            <div className="space-y-2">
                                {report.topIssues.map((issue, index) => (
                                    <div key={index} className="bg-zion-slate-dark/60 border border-yellow-500/30 rounded-lg p-3">
                                        <div className="text-yellow-400 text-sm">{issue}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Page Details */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-3">Page Analysis</h3>
                            <div className="space-y-4">
                                {report.pageAnalyses.map((page, index) => (
                                    <div key={index} className="bg-zion-slate-dark/60 border border-zion-purple/30 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-white font-medium">{page.pageUrl}</h4>
                                            <div className="flex items-center gap-2">
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                    page.score >= 80 ? 'bg-green-500/20 text-green-400' :
                                                    page.score >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-red-500/20 text-red-400'
                                                }`}>
                                                    {page.score}%
                                                </span>
                                                <button
                                                    onClick={() => setSelectedPage(selectedPage === index ? null : index)}
                                                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                                                >
                                                    {selectedPage === index ? '▼' : '▶'}
                                                </button>
                                            </div>
                                        </div>
                                        
                                        {selectedPage === index && (
                                            <div className="mt-3 space-y-3">
                                                {page.issues.length > 0 && (
                                                    <div>
                                                        <h5 className="text-zion-slate-light font-medium mb-2">Issues:</h5>
                                                        <ul className="space-y-1">
                                                            {page.issues.map((issue, idx) => (
                                                                <li key={idx} className="text-red-400 text-sm">• {issue}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                
                                                {page.recommendations.length > 0 && (
                                                    <div>
                                                        <h5 className="text-zion-slate-light font-medium mb-2">Recommendations:</h5>
                                                        <ul className="space-y-1">
                                                            {page.recommendations.map((rec, idx) => (
                                                                <li key={idx} className="text-zion-cyan text-sm">• {rec}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={exportReport}
                                className="flex items-center gap-2 px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Export Report
                            </button>
                            
                            <button
                                onClick={analyzeSEO}
                                disabled={isAnalyzing}
                                className="flex items-center gap-2 px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple/90 transition-colors disabled:opacity-50"
                            >
                                <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
                                {isAnalyzing ? 'Analyzing...' : 'Re-analyze'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SEOOptimizer;