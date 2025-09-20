<<<<<<< HEAD

export default ContentQualityAnalyzer;
=======
import React, {useState, useEffect} from 'react';'''
import {motion} from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle, Info, Search, Edit3, Eye, BarChart3, TrendingUp, Zap const ContentQualityAnalyzer = (props: any) => {}
    const [isOpen, setIsOpen] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);'
    const [contentIssues, setContentIssues] = useState([]);''
    const [report, setReport] = useState(null);'''
    const [selectedFilter, setSelectedFilter] = useState('all');'''
    const [searchTerm, setSearchTerm] = useState('');
    // Sample data based on the analysis report;
    const sampleIssues = []
        {}
'
''
'''
            id: '1','''
            pageUrl: 'https://ziontechgroup.com/_next/static/chunks/polyfills-42372ed130431b0a.js','''
            pageTitle: 'Missing','''
            issueType: 'missing_title','''
            severity: 'high','''
            description: 'Short or missing title, No headings found, Missing meta description, Meta description too short','''
            recommendation: 'Add proper page title, headings, and meta description for better SEO','''
            status: 'open'
        },
        {}
'
''
'''
            id: '2','''
            pageUrl: 'https://ziontechgroup.com/_next/static/chunks/webpack-e219339f62a4a96e.js','''
            pageTitle: 'Missing','''
            issueType: 'missing_meta','''
            severity: 'high','''
            description: 'Short or missing title, No headings found, Missing meta description, Meta description too short','''
            recommendation: 'Add proper page title, headings, and meta description for better SEO','''
            status: 'open'
        },
        {}
'
''
'''
            id: '3','''
            pageUrl: 'https://ziontechgroup.com/about/','''
            pageTitle: 'About','''
            issueType: 'minimal_content','''
            severity: 'medium','''
            description: 'Suspiciously small HTML content','''
            recommendation: 'Add more meaningful content, headings, and images to improve user experience','''
            status: 'open'
        },
        {}
'
''
'''
            id: '4','''
            pageUrl: 'https://ziontechgroup.com/services/','''
            pageTitle: 'Services','''
            issueType: 'no_headings','''
            severity: 'medium','''
            description: 'No headings found','''
            recommendation: 'Add proper heading structure (H1, H2, H3) for better content organization and SEO','''
            status: 'open'

export default ContentQualityAnalyzer;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
