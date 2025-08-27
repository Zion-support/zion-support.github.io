import React, { useState, useEffect, useCallback } from 'react';
import { BarChart3, FileText, AlertTriangle, Zap, RefreshCw, Download, Search, X } from 'lucide-react';
import ContentQualityAnalyzer from '../utils/contentQualityAnalyzer';
const ContentQualityDashboard = ({ className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState(null);
    const [selectedPage, setSelectedPage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const contentAnalyzer = ContentQualityAnalyzer.getInstance();
    const analyzeAllPages = useCallback(async () => {
        setIsLoading(true);
        try {
            // Simulate analyzing all pages in the application
            // In a real implementation, you would analyze actual page content
            const samplePages = [
                {
                    url: '/',
                    title: 'Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services',
                    content: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology.',
                    metaDescription: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.',
                    images: ['/images/hero-ai-solutions.jpg', '/images/hero-it-services.jpg'],
                    links: ['/services', '/ai-solutions', '/about', '/contact']
                },
                {
                    url: '/services',
                    title: 'Our Services - Comprehensive Technology Solutions',
                    content: 'We offer a wide range of technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation. Our expert team delivers innovative solutions tailored to your business needs.',
                    metaDescription: 'Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation.',
                    images: ['/images/services-overview.jpg'],
                    links: ['/ai-solutions', '/cloud-devops', '/cybersecurity', '/about']
                },
                {
                    url: '/ai-solutions',
                    title: 'AI Solutions - Artificial Intelligence Services',
                    content: 'Cutting-edge artificial intelligence solutions for modern businesses. Machine learning, predictive analytics, and AI automation to drive innovation and efficiency.',
                    metaDescription: 'Cutting-edge artificial intelligence solutions including machine learning, predictive analytics, and AI automation.',
                    images: ['/images/ai-solutions.jpg'],
                    links: ['/services', '/about', '/contact']
                },
                {
                    url: '/about',
                    title: 'About Us - Zion Tech Group',
                    content: 'Learn about Zion Tech Group, our mission, values, and commitment to delivering innovative technology solutions. Discover our team of experts and our journey in the tech industry.',
                    metaDescription: 'Learn about Zion Tech Group, our mission, values, and commitment to delivering innovative technology solutions.',
                    images: ['/images/about-team.jpg'],
                    links: ['/services', '/team', '/contact', '/mission']
                },
                {
                    url: '/contact',
                    title: 'Contact Us - Get in Touch',
                    content: 'Contact Zion Tech Group for all your technology needs. Our team is ready to help you transform your business with cutting-edge solutions.',
                    metaDescription: 'Contact Zion Tech Group for all your technology needs. Our team is ready to help you transform your business.',
                    images: ['/images/contact-office.jpg'],
                    links: ['/services', '/about', '/team']
                }
            ];
            for (const page of samplePages) {
                contentAnalyzer.analyzePageContent(page.url, page.title, page.content, page.metaDescription, page.images, page.links);
            }
            const newReport = contentAnalyzer.generateReport();
            setReport(newReport);
        }
        catch (error) {
            console.error('Error analyzing pages:', error);
        }
        finally {
            setIsLoading(false);
        }
    }, [contentAnalyzer]);
    useEffect(() => {
        // Auto-analyze pages when component mounts
        analyzeAllPages();
    }, [analyzeAllPages]);
    const getFilteredPages = () => {
        if (!report)
            return [];
        let filtered = report.pageMetrics;
        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(page => page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                page.pageUrl.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        // Apply status filter
        if (filterStatus !== 'all') {
            filtered = filtered.filter(page => {
                switch (filterStatus) {
                    case 'excellent':
                        return page.overallScore >= 80;
                    case 'good':
                        return page.overallScore >= 60 && page.overallScore < 80;
                    case 'poor':
                        return page.overallScore < 40;
                    default:
                        return true;
                }
            });
        }
        return filtered;
    };
    const getStatusColor = (score) => {
        if (score >= 80)
            return 'text-green-600 bg-green-50 border-green-200';
        if (score >= 60)
            return 'text-yellow-600 bg-yellow-50 border-yellow-200';
        if (score >= 40)
            return 'text-orange-600 bg-orange-50 border-orange-200';
        return 'text-red-600 bg-red-50 border-red-200';
    };
    const getStatusText = (score) => {
        if (score >= 80)
            return 'Excellent';
        if (score >= 60)
            return 'Good';
        if (score >= 40)
            return 'Fair';
        return 'Poor';
    };
    const exportReport = () => {
        if (!report)
            return;
        const csvContent = [
            ['Page URL', 'Title', 'Word Count', 'SEO Score', 'Overall Score', 'Issues', 'Recommendations'],
            ...report.pageMetrics.map(page => [
                page.pageUrl,
                page.title,
                page.wordCount.toString(),
                page.seoScore.toString(),
                page.overallScore.toString(),
                page.issues.join('; '),
                page.recommendations.join('; ')
            ])
        ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'content-quality-report.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    };
    const filteredPages = getFilteredPages();
    return (<div className={`fixed bottom-6 left-6 z-50 ${className}`}>
      {/* Floating Action Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" aria-label="Toggle Content Quality Dashboard">
        <BarChart3 className="w-6 h-6"/>
      </button>
      {/* Dashboard Panel */}
      {isOpen && (<div className="absolute bottom-16 left-0 w-[800px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5"/>
                Content Quality Dashboard
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                ×
              </button>
            </div>
            
            {/* Summary Stats */}
            {report && (<div className="grid grid-cols-4 gap-4 mt-3">
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.totalPages}</div>
                  <div className="text-sm text-green-100">Total Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.averageWordCount}</div>
                  <div className="text-sm text-green-100">Avg Words</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.averageSeoScore}%</div>
                  <div className="text-sm text-green-100">Avg SEO</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.pagesWithIssues}</div>
                  <div className="text-sm text-red-100">Need Fixes</div>
                </div>
              </div>)}
          </div>
          {/* Content */}
          <div className="p-4 max-h-[600px] overflow-y-auto">
            {isLoading ? (<div className="flex items-center justify-center py-8">
                <RefreshCw className="w-6 h-6 animate-spin text-green-600"/>
                <span className="ml-2 text-gray-600">Analyzing content...</span>
              </div>) : report ? (<div className="space-y-4">
                {/* Filters and Search */}
                <div className="flex gap-3 items-center">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
                    <input type="text" placeholder="Search pages..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
                  </div>
                  <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="all">All Pages</option>
                    <option value="excellent">Excellent (80%+)</option>
                    <option value="good">Good (60-79%)</option>
                    <option value="poor">Poor (&lt;40%)</option>
                  </select>
                  <button onClick={exportReport} className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4"/>
                    Export
                  </button>
                </div>
                {/* Top Issues */}
                {report.topIssues.length > 0 && (<div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4"/>
                      Top Issues to Address
                    </h4>
                    <div className="space-y-1">
                      {report.topIssues.slice(0, 3).map((issue, index) => (<div key={index} className="text-sm text-yellow-700 dark:text-yellow-300">
                          • {issue}
                        </div>))}
                    </div>
                  </div>)}
                {/* Pages Table */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Page
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Word Count
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            SEO Score
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Overall
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {filteredPages.map((page, index) => (<tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setSelectedPage(page)}>
                            <td className="px-4 py-3">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {page.title}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {page.pageUrl}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              {page.wordCount}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              {page.seoScore}%
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              {page.overallScore}%
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(page.overallScore)}`}>
                                {getStatusText(page.overallScore)}
                              </span>
                            </td>
                          </tr>))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Page Details Modal */}
                {selectedPage && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Page Analysis: {selectedPage.title}
                        </h3>
                        <button onClick={() => setSelectedPage(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <X className="w-5 h-5"/>
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Word Count</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.wordCount}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Headings</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.headingCount}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Images</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.imageCount}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Links</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.linkCount}</div>
                          </div>
                        </div>
                        {selectedPage.issues.length > 0 && (<div>
                            <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">Issues Found</h4>
                            <div className="space-y-2">
                              {selectedPage.issues.map((issue, index) => (<div key={index} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0"/>
                                  <span>{issue}</span>
                                </div>))}
                            </div>
                          </div>)}
                        {selectedPage.recommendations.length > 0 && (<div>
                            <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">Recommendations</h4>
                            <div className="space-y-2">
                              {selectedPage.recommendations.map((rec, index) => (<div key={index} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0"/>
                                  <span>{rec}</span>
                                </div>))}
                            </div>
                          </div>)}
                      </div>
                    </div>
                  </div>)}
              </div>) : (<div className="text-center py-8 text-gray-500">
                No content quality data available
              </div>)}
          </div>
          {/* Footer Actions */}
          <div className="bg-gray-50 dark:bg-gray-800 p-3 flex gap-2">
            <button onClick={analyzeAllPages} disabled={isLoading} className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`}/>
              {isLoading ? 'Analyzing...' : 'Analyze All Pages'}
            </button>
            <button onClick={() => contentAnalyzer.clearCache()} className="px-3 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors">
              Clear Cache
            </button>
          </div>
        </div>)}
    </div>);
};
export default ContentQualityDashboard;
