import React, { useState, useEffect, useCallback } from 'react';'
import { motion, AnimatePresence } from 'framer-motion';'
import { ChartBarIcon, CogIcon, ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon, XMarkIcon, ArrowUpIcon, ArrowDownIcon, MinusIcon, EyeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';'
const WebsiteImprovementDashboard = ({ className = '', showOnLoad = false }) => {

    const [isOpen, setIsOpen] = useState(showOnLoad);'
    const [activeTab, setActiveTab] = useState('overview');
    const [metrics, setMetrics] = useState({

        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        timeToInteractive: 0
    });
    const [seoAnalysis, setSeoAnalysis] = useState({

        score: 0,
        issues[],;
        suggestions[],;
        metaTags: {

            title: false,
            description: false,
            keywords: false,
            canonical: false,
            ogTags: false,
            twitterTags: false
    });
    const [accessibilityReport, setAccessibilityReport] = useState({

        score: 0,
        issues[],;'
        wcagCompliance: 'Non-Compliant',
        criticalIssues: 0,
        warnings: 0
    });
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    // Analyze website performance
    const analyzePerformance = useCallback(async () => {
        setIsAnalyzing(true);
        // Simulate performance analysis
        await new Promise(resolve => setTimeout(resolve, 2000));'
        // Mock performance data (in a real app, you'd use Web Vitals API)
        const mockMetrics = {

  loadTime: Math.random() * 3000 + 1000, // 1-4 seconds
            firstContentfulPaint: Math.random() * 2000 + 500, // 0.5-2.5 seconds
            largestContentfulPaint: Math.random() * 3000 + 1000, // 1-4 seconds
            cumulativeLayoutShift: Math.random() * 0.1, // 0-0.1
            firstInputDelay: Math.random() * 100 + 50,
  // 50-150ms
            timeToInteractive: Math.random() * 4000 + 2000 // 2-6 seconds
};
        setMetrics(mockMetrics);
        setIsAnalyzing(false)}, []);
    // Analyze SEO
    const analyzeSEO = useCallback(async () => {
        setIsAnalyzing(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Mock SEO analysis
        const mockSEO = {
'