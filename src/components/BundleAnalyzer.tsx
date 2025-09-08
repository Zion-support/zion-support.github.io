import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, AlertTriangle, CheckCircle, Info, HardDrive, Zap, Target, X, RefreshCw } from 'lucide-react';
export const BundleAnalyzer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [analysis, setAnalysis] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    // Analyze bundle size from build output
    const analyzeBundle = useCallback(async () => {
        setIsAnalyzing(true);
        try {
            // Simulate bundle analysis based on build output
            // In a real implementation, this would fetch actual bundle stats
            const mockAnalysis = {
                totalSize: 1200000, // ~1.2MB
                totalGzipSize: 400000, // ~400KB gzipped
                chunkCount: 45,
                chunks: [
                    {
                        name: 'react-vendor',
                        size: 170000,
                        gzipSize: 55000,
                        type: 'vendor',
                        optimization: 'good'
                    },
                    {
                        name: 'animation-vendor',
                        size: 114000,
                        gzipSize: 36000,
                        type: 'vendor',
                        optimization: 'warning'
                    },
                    {
                        name: 'ui-vendor',
                        size: 72000,
                        gzipSize: 24000,
                        type: 'vendor',
                        optimization: 'good'
                    },
                    {
                        name: 'index',
                        size: 89000,
                        gzipSize: 24000,
                        type: 'page',
                        optimization: 'good'
                    },
                    {
                        name: 'ServicesOverview',
                        size: 42800,
                        gzipSize: 10700,
                        type: 'page',
                        optimization: 'good'
                    },
                    {
                        name: 'Pricing',
                        size: 51200,
                        gzipSize: 11900,
                        type: 'page',
                        optimization: 'warning'
                    },
                    {
                        name: 'stripe-vendor',
                        size: 0,
                        gzipSize: 0,
                        type: 'vendor',
                        optimization: 'critical'
                    },
                    {
                        name: 'pdf-vendor',
                        size: 0,
                        gzipSize: 0,
                        type: 'vendor',
                        optimization: 'critical'
                    }
                ],
                recommendations: [
                    'Consolidate empty vendor chunks (stripe-vendor, pdf-vendor)',
                    'Consider code splitting for ServicesOverview page',
                    'Optimize animation-vendor bundle size',
                    'Implement tree shaking for unused dependencies',
                    'Add bundle size monitoring to CI/CD pipeline'
                ],
                score: 78,
                lastUpdated: new Date()
            };
            setAnalysis(mockAnalysis);
        }
        catch (error) {
            // // // console.error('Bundle analysis failed:', error);
        }
        finally {
            setIsAnalyzing(false);
        }
    }, []);
    useEffect(() => {
        analyzeBundle();
    }, [analyzeBundle]);
    const formatBytes = (bytes) => {
        if (bytes === 0)
            return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    const getScoreColor = (score) => {
        if (score >= 80)
            return 'text-green-500';
        if (score >= 60)
            return 'text-yellow-500';
        return 'text-red-500';
    };
    const getScoreIcon = (score) => {
        if (score >= 80)
            return <CheckCircle className="w-5 h-5"/>;
        if (score >= 60)
            return <AlertTriangle className="w-5 h-5"/>;
        return <AlertTriangle className="w-5 h-5"/>;
    };
    const getOptimizationColor = (optimization) => {
        switch (optimization) {
            case 'good': return 'text-green-500 bg-green-100 dark:bg-green-900/20';
            case 'warning': return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20';
            case 'critical': return 'text-red-500 bg-red-100 dark:bg-red-900/20';
            default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
        }
    };
    const getOptimizationIcon = (optimization) => {
        switch (optimization) {
            case 'good': return <CheckCircle className="w-4 h-4"/>;
            case 'warning': return <AlertTriangle className="w-4 h-4"/>;
            case 'critical': return <AlertTriangle className="w-4 h-4"/>;
            default: return <Info className="w-4 h-4"/>;
        }
    };
    if (!analysis)
        return null;
    return (<React.Fragment>
      {/* Bundle Analyzer Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Bundle analyzer" aria-expanded={isOpen}>
        <BarChart3 className="w-6 h-6"/>
      </motion.button>

export default function BundleAnalyzer() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="BundleAnalyzer - Zion Tech Group" description="Professional BundleAnalyzer services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">BundleAnalyzer</h1>
        <p className="text-gray-300 text-lg">
          Professional BundleAnalyzer services to help your business grow.
        </p>
      </div>
    </div>
  )}