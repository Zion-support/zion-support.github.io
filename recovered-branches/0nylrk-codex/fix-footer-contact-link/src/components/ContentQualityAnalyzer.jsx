<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';

import { FileText, AlertTriangle, CheckCircle, Info, Search, Edit3, Eye, BarChart3, TrendingUp, Zap } from 'lucide-react';
const ContentQualityAnalyzer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [contentIssues, setContentIssues] = useState([]);
    const [report, setReport] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    // Sample data based on the analysis report
    const sampleIssues = [
        {
            id: '1',
            pageUrl: 'https://ziontechgroup.com/_next/static/chunks/polyfills-42372ed130431b0a.js',
            pageTitle: 'Missing',
            issueType: 'missing_title',
            severity: 'high',
            description: 'Short or missing title, No headings found, Missing meta description, Meta description too short',
            recommendation: 'Add proper page title, headings, and meta description for better SEO',
            status: 'open'
        },
        {
            id: '2',
            pageUrl: 'https://ziontechgroup.com/_next/static/chunks/webpack-e219339f62a4a96e.js',
            pageTitle: 'Missing',
            issueType: 'missing_meta',
            severity: 'high',
            description: 'Short or missing title, No headings found, Missing meta description, Meta description too short',
            recommendation: 'Add proper page title, headings, and meta description for better SEO',
            status: 'open'
        },
        {
            id: '3',
            pageUrl: 'https://ziontechgroup.com/about/',
            pageTitle: 'About',
            issueType: 'minimal_content',
            severity: 'medium',
            description: 'Suspiciously small HTML content',
            recommendation: 'Add more meaningful content, headings, and images to improve user experience',
            status: 'open'
        },
        {
            id: '4',
            pageUrl: 'https://ziontechgroup.com/services/',
            pageTitle: 'Services',
            issueType: 'no_headings',
            severity: 'medium',
            description: 'No headings found',
            recommendation: 'Add proper heading structure (H1, H2, H3) for better content organization and SEO',
            status: 'open'
        }
    ];
    useEffect(() => {
        setContentIssues(sampleIssues);
        generateReport(sampleIssues);
    }, []);
    const generateReport = (issues) => {
        const totalPages = 79; // From analysis report
        const pagesWithIssues = issues.length;
        const criticalIssues = issues.filter(i => i.severity === 'high').length;
        const mediumIssues = issues.filter(i => i.severity === 'medium').length;
        const lowIssues = issues.filter(i => i.severity === 'low').length;
        setReport({
            totalPages,
            pagesWithIssues,
            criticalIssues,
            mediumIssues,
            lowIssues,
            averageContentLength: 5000, // Sample data
            pagesWithImages: 45, // Sample data
            pagesWithMetaDescriptions: 32, // Sample data
            lastUpdated: new Date()
        });
    };
    const startAnalysis = async () => {
        setIsAnalyzing(true);
        // Simulate content analysis
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsAnalyzing(false);
    };
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
        const matchesFilter = selectedFilter === 'all' || issue.severity === selectedFilter;
        const matchesSearch = issue.pageTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });
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
    return (<>
      {/* Floating Action Button */}
      <motion.button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-24 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <FileText className="w-6 h-6"/>
      </motion.button>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ContentQualityAnalyzer: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ContentQualityAnalyzer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ContentQualityAnalyzer;