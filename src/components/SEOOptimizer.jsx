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
        }
        catch (error) {
            // // // // // console.error('Error analyzing SEO:', error)}
        finally {
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
        }
        else if (page.title.length > 0) {
            score += 10;
        }
        // Meta description (0-15 points)
        maxScore += 15;
        if (page.metaDescription.length >= 120 && page.metaDescription.length <= 160) {
            score += 15;
        }
        else if (page.metaDescription.length > 0) {
            score += 8;
        }
        // Headings (0-15 points)
        maxScore += 15;
        if (page.headings.length >= 3) {
            score += 15;
        }
        else if (page.headings.length >= 1) {
            score += 10;
        }
        // Images (0-10 points)
        maxScore += 10;
        if (page.images.length >= 2) {
            score += 10;
        }
        else if (page.images.length >= 1) {
            score += 5;
        }
        // Internal links (0-15 points)
        maxScore += 15;
        if (page.links.length >= 3) {
            score += 15;
        }
        else if (page.links.length >= 1) {
            score += 10;
        }
        // Keywords (0-10 points)
        maxScore += 10;
        if (page.keywords.length >= 3) {
            score += 10;
        }
        else if (page.keywords.length >= 1) {
            score += 5;
        }
        // URL structure (0-15 points)
        maxScore += 15;
        if (page.url === '/' || page.url.includes('-')) {
            score += 15;
        }
        else if (page.url.length > 0) {
            score += 8;
        }
        return Math.round((score / maxScore) * 100);
    };
    const identifySEOIssues = (page) => {
        const issues = [];
        if (!page.title || page.title.length < 30) {
            issues.push('Title is too short (should be 30-60 characters)');
        }
        else if (page.title.length > 60) {
            issues.push('Title is too long (should be 30-60 characters)');
        }
        if (!page.metaDescription || page.metaDescription.length < 120) {
            issues.push('Meta description is too short (should be 120-160 characters)');
        }
        else if (page.metaDescription.length > 160) {
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
            recommendations.push('Research and include relevant keywords naturally throughout the content');
        }
        if (issues.some(issue => issue.includes('URL'))) {
            recommendations.push('Use SEO-friendly URLs with hyphens and descriptive terms');
        }
        recommendations.push('Ensure content is unique, valuable, and addresses user intent');
        recommendations.push('Implement structured data markup for better search engine understanding');
        recommendations.push('Optimize page loading speed for better user experience and SEO');
        return recommendations;
    };
    const generateSummary = (pageAnalyses, topIssues) => {
        const totalPages = pageAnalyses.length;
        const excellentPages = pageAnalyses.filter(page => page.score >= 80).length;
        const goodPages = pageAnalyses.filter(page => page.score >= 60).length;
        const poorPages = pageAnalyses.filter(page => page.score < 40).length;
        let summary = `Analyzed ${totalPages} pages for SEO. `;
        if (excellentPages > 0) {
            summary += `${excellentPages} pages have excellent SEO. `;
        }
        if (goodPages > 0) {
            summary += `${goodPages} pages have good SEO. `;
        }
        if (poorPages > 0) {
            summary += `${poorPages} pages need significant SEO improvement. `;
        }
        if (topIssues.length > 0) {
            summary += `Top SEO issues to address: ${topIssues.slice(0, 3).join(', ')}.`;
        }
        return summary;
    };
    const exportSEOReport = () => {
        if (!report)
            return;
        const csvContent = [
            ['Page URL', 'Title', 'SEO Score', 'Issues', 'Recommendations'],
            ...report.pageAnalyses.map(page => [
                page.pageUrl,
                page.title,
                page.score.toString(),
                page.issues.join('; '),
                page.recommendations.join('; ')
            ])
        ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'seo-optimization-report.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    };
    const getScoreColor = (score) => {
        if (score >= 80)
            return 'text-green-600 bg-green-50 border-green-200';
        if (score >= 60)
            return 'text-yellow-600 bg-yellow-50 border-yellow-200';
        if (score >= 40)
            return 'text-orange-600 bg-orange-50 border-orange-200';
        return 'text-red-600 bg-red-50 border-red-200';
    };
    const getScoreText = (score) => {
        if (score >= 80)
            return 'Excellent';
        if (score >= 60)
            return 'Good';
        if (score >= 40)
            return 'Fair';
        return 'Poor';
    };
    return (<div className="fixed bottom-6 right-24 z-50">
      {/* Floating Action Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" aria-label="Toggle SEO Optimizer">
        <Search className="w-6 h-6"/>
      </button>

