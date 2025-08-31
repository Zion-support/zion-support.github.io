import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, AlertTriangle, Info, CheckCircle, X, Search, Filter, BarChart3, TrendingUp, AlertCircle, Clock, Calendar, User, Tag, Hash, Eye, EyeOff, Download, RefreshCw, Settings, HelpCircle, Star, Zap, Target, Shield, Lightbulb, BookOpen, Code, Database, Globe, Smartphone, Monitor, Server, Cloud, Lock, Unlock, Key, Wrench, Cog, Tool, Rocket, ArrowRight, ChevronDown, ChevronUp, Plus, Minus, Edit, Trash2, Copy, ExternalLink, Link, Unlink, Image, Video, File, Folder, Archive, Compass, Navigation, Map, Location, Home, Building, Factory, Store, ShoppingCart, CreditCard, DollarSign, Percent, Chart, Graph, Analytics, Report, Document, FileText as FileTextIcon, FileCode, FileImage, FileVideo, FileAudio, FileArchive, FilePdf, FileWord, FileExcel, FilePowerpoint, FileZip, FileRar, File7z, FileTar, FileGz, FileBz2, FileXz, FileLzma, FileLz4, FileZstd, FileBrotli, FileLzop, FileLzip, FileLz, FileLha, FileLzh, FileArj, FileCab, FileMsi, FileExe, FileMsi, FileDmg, FileIso, FileVhd, FileVmdk, FileOva, FileOvf, FileVbox, FileVdi, FileHdd, FileQed, FileQcow, FileQcow2, FileVhdx, FileVpcx, FileVhd, FileVmdk, FileOva, FileOvf, FileVbox, FileVdi, FileHdd, FileQed, FileQcow, FileQcow2, FileVhdx, FileVpcx } from 'lucide-react';

export function ContentQualityAnalyzer() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [sortBy, setSortBy] = useState('severity');
    const [sortOrder, setSortOrder] = useState('desc');
    const [selectedIssues, setSelectedIssues] = useState([]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisProgress, setAnalysisProgress] = useState(0);
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const [filterOptions, setFilterOptions] = useState({
        severity: ['high', 'medium', 'low'],
        status: ['open', 'in_progress', 'resolved'],
        type: ['missing_title', 'missing_meta', 'no_headings', 'minimal_content', 'no_images']
    });

    // Mock data for demonstration
    const contentIssues = useMemo(() => [
        {
            id: 1,
            pageTitle: 'Homepage',
            url: '/',
            type: 'missing_meta',
            severity: 'high',
            status: 'open',
            description: 'Missing meta description for SEO optimization',
            impact: 'High impact on search engine visibility',
            recommendation: 'Add a compelling meta description between 150-160 characters',
            priority: 1,
            createdAt: '2024-01-15',
            updatedAt: '2024-01-15',
            assignedTo: 'SEO Team',
            tags: ['seo', 'meta', 'homepage'],
            pageType: 'landing',
            wordCount: 1200,
            headingCount: 5,
            imageCount: 8,
            linkCount: 12,
            loadTime: 2.3,
            mobileScore: 85,
            accessibilityScore: 78,
            seoScore: 65
        },
        {
            id: 2,
            pageTitle: 'Services Overview',
            url: '/services',
            type: 'no_headings',
            severity: 'medium',
            status: 'in_progress',
            description: 'Page lacks proper heading structure (H1, H2, H3)',
            impact: 'Medium impact on readability and SEO',
            recommendation: 'Implement proper heading hierarchy with H1 for main title and H2/H3 for sections',
            priority: 2,
            createdAt: '2024-01-14',
            updatedAt: '2024-01-16',
            assignedTo: 'Content Team',
            tags: ['content', 'headings', 'structure'],
            pageType: 'services',
            wordCount: 800,
            headingCount: 1,
            imageCount: 3,
            linkCount: 8,
            loadTime: 1.8,
            mobileScore: 92,
            accessibilityScore: 82,
            seoScore: 58
        },
        {
            id: 3,
            pageTitle: 'Contact Form',
            url: '/contact',
            type: 'minimal_content',
            severity: 'low',
            status: 'resolved',
            description: 'Contact page has very little content beyond the form',
            impact: 'Low impact but affects user engagement',
            recommendation: 'Add helpful content, FAQ section, or company information',
            priority: 3,
            createdAt: '2024-01-13',
            updatedAt: '2024-01-17',
            assignedTo: 'UX Team',
            tags: ['content', 'engagement', 'contact'],
            pageType: 'contact',
            wordCount: 150,
            headingCount: 2,
            imageCount: 1,
            linkCount: 3,
            loadTime: 1.2,
            mobileScore: 95,
            accessibilityScore: 88,
            seoScore: 72
        }
    ], []);

    const getSeverityIcon = (severity) => {
        switch (severity) {
            case 'high':
                return <AlertTriangle className="w-4 h-4 text-red-400"/>;
            case 'medium':
                return <AlertTriangle className="w-4 h-4 text-yellow-400"/>;
            case 'low':
                return <Info className="w-4 h-4 text-blue-400"/>;
            default:
                return <Info className="w-4 h-4 text-gray-400"/>;
        }
    };

    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'high':
                return 'text-red-400';
            case 'medium':
                return 'text-yellow-400';
            case 'low':
                return 'text-blue-400';
            default:
                return 'text-gray-400';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'resolved':
                return 'text-green-400';
            case 'in_progress':
                return 'text-yellow-400';
            case 'open':
                return 'text-red-400';
            default:
                return 'text-gray-400';
        }
    };

    const filteredIssues = contentIssues.filter(issue => {
        const matchesSearch = issue.pageTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const matchesFilter = selectedFilter === 'all' || 
        filterOptions.severity.includes(selectedFilter) ||
        filterOptions.status.includes(selectedFilter) ||
        filterOptions.type.includes(selectedFilter);

    const getIssueTypeLabel = (type) => {
        switch (type) {
            case 'missing_title':
                return 'Missing Title';
            case 'missing_meta':
                return 'Missing Meta Description';
            case 'no_headings':
                return 'No Headings';
            case 'minimal_content':
                return 'Minimal Content';
            case 'no_images':
                return 'No Images';
            default:
                return type;
        }
    };

    const handleBulkAction = (action) => {
        if (selectedIssues.length === 0) return;
        
        switch (action) {
            case 'resolve':
                // Handle bulk resolve
                break;
            case 'assign':
                // Handle bulk assign
                break;
            case 'export':
                // Handle bulk export
                break;
        }
    };

    const startAnalysis = async () => {
        setIsAnalyzing(true);
        setAnalysisProgress(0);
        
        // Simulate analysis progress
        for (let i = 0; i <= 100; i += 10) {
            await new Promise(resolve => setTimeout(resolve, 100));
            setAnalysisProgress(i);
        }
        
        setIsAnalyzing(false);
        setAnalysisProgress(100);
    };

    const exportReport = () => {
        const dataStr = JSON.stringify(filteredIssues, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = 'content-quality-report.json';
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button 
                onClick={() => setIsOpen(true)} 
                className="fixed bottom-6 right-24 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
            >
                <FileText className="w-6 h-6"/>
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" 
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }} 
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                        <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400"/>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Content Quality Analyzer
                                        </h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Monitor and improve your content quality
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    <X className="w-5 h-5"/>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-4 h-full">
                                    {/* Sidebar */}
                                    <div className="lg:col-span-1 bg-gray-50 dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700">
                                        <div className="space-y-6">
                                            {/* Search */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Search Issues
                                                </label>
                                                <div className="relative">
                                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
                                                    <input
                                                        type="text"
                                                        placeholder="Search issues..."
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>

                                            {/* Filters */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Filter by
                                                </label>
                                                <select
                                                    value={selectedFilter}
                                                    onChange={(e) => setSelectedFilter(e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                >
                                                    <option value="all">All Issues</option>
                                                    <option value="high">High Severity</option>
                                                    <option value="medium">Medium Severity</option>
                                                    <option value="low">Low Severity</option>
                                                    <option value="open">Open Status</option>
                                                    <option value="in_progress">In Progress</option>
                                                    <option value="resolved">Resolved</option>
                                                </select>
                                            </div>

                                            {/* Sort Options */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Sort by
                                                </label>
                                                <div className="space-y-2">
                                                    <select
                                                        value={sortBy}
                                                        onChange={(e) => setSortBy(e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                    >
                                                        <option value="severity">Severity</option>
                                                        <option value="priority">Priority</option>
                                                        <option value="createdAt">Date Created</option>
                                                        <option value="updatedAt">Last Updated</option>
                                                    </select>
                                                    <select
                                                        value={sortOrder}
                                                        onChange={(e) => setSortOrder(e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                    >
                                                        <option value="desc">Descending</option>
                                                        <option value="asc">Ascending</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="space-y-3">
                                                <button
                                                    onClick={startAnalysis}
                                                    disabled={isAnalyzing}
                                                    className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                >
                                                    {isAnalyzing ? (
                                                        <>
                                                            <RefreshCw className="w-4 h-4 mr-2 animate-spin"/>
                                                            Analyzing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Zap className="w-4 h-4 mr-2"/>
                                                            Start Analysis
                                                        </>
                                                    )}
                                                </button>
                                                
                                                {isAnalyzing && (
                                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                        <div 
                                                            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                                            style={{ width: `${analysisProgress}%` }}
                                                        />
                                                    </div>
                                                )}

                                                <button
                                                    onClick={exportReport}
                                                    className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                                >
                                                    <Download className="w-4 h-4 mr-2"/>
                                                    Export Report
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="lg:col-span-3 p-6 overflow-y-auto">
                                        {/* Summary Cards */}
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center">
                                                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                                        <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400"/>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">High Priority</p>
                                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">1</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center">
                                                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                                        <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400"/>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">In Progress</p>
                                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">1</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center">
                                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400"/>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Resolved</p>
                                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">1</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center">
                                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                                        <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400"/>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Issues</p>
                                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">3</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Issues Table */}
                                        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Content Issues ({filteredIssues.length})
                                                    </h3>
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => handleBulkAction('resolve')}
                                                            disabled={selectedIssues.length === 0}
                                                            className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                        >
                                                            Resolve Selected
                                                        </button>
                                                        <button
                                                            onClick={() => handleBulkAction('export')}
                                                            disabled={selectedIssues.length === 0}
                                                            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                        >
                                                            Export Selected
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                                        <tr>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                Issue
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                Severity
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                Status
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                Priority
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                Assigned
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                                        {filteredIssues.map((issue) => (
                                                            <tr key={issue.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                                <td className="px-6 py-4">
                                                                    <div>
                                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                            {issue.pageTitle}
                                                                        </div>
                                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                                            {issue.description}
                                                                        </div>
                                                                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                                                            {issue.url}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    <div className="flex items-center">
                                                                        {getSeverityIcon(issue.severity)}
                                                                        <span className={`ml-2 text-sm font-medium ${getSeverityColor(issue.severity)}`}>
                                                                            {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                                                                        {issue.status.replace('_', ' ').charAt(0).toUpperCase() + issue.status.replace('_', ' ').slice(1)}
                                                                    </span>
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    <div className="text-sm text-gray-900 dark:text-white">
                                                                        P{issue.priority}
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    <div className="text-sm text-gray-900 dark:text-white">
                                                                        {issue.assignedTo}
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    <div className="flex items-center space-x-2">
                                                                        <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                                            <Edit className="w-4 h-4"/>
                                                                        </button>
                                                                        <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
                                                                            <CheckCircle className="w-4 h-4"/>
                                                                        </button>
                                                                        <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                                                                            <Trash2 className="w-4 h-4"/>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default ContentQualityAnalyzer;