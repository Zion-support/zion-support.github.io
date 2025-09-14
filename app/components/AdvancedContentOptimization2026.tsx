'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentOptimizationMetric {
  metric: string;
  current: number;
  target: number;
  improvement: string;
  impact: 'high' | 'medium' | 'low';
}

interface OptimizationResult {
  category: string;
  metrics: ContentOptimizationMetric[];
  totalImprovement: number;
  roi: number;
}

const AdvancedContentOptimization2026: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<OptimizationResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const optimizationCategories = [
    {
      name: 'SEO Performance',
      icon: '🔍',
      description: 'Advanced search engine optimization metrics',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Content Engagement',
      icon: '📊',
      description: 'User interaction and engagement analytics',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Conversion Optimization',
      icon: '💰',
      description: 'Revenue and conversion rate improvements',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Technical Performance',
      icon: '⚡',
      description: 'Site speed and technical optimization',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const analyzeContent = async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResults: OptimizationResult[] = [
      {
        category: 'SEO Performance',
        metrics: [
          { metric: 'Page Load Speed', current: 2.3, target: 1.2, improvement: '48% faster', impact: 'high' },
          { metric: 'Core Web Vitals', current: 75, target: 95, improvement: '27% improvement', impact: 'high' },
          { metric: 'Search Rankings', current: 12, target: 3, improvement: '75% better positioning', impact: 'high' }
        ],
        totalImprovement: 50,
        roi: 340
      },
      {
        category: 'Content Engagement',
        metrics: [
          { metric: 'Time on Page', current: 1.2, target: 3.8, improvement: '217% increase', impact: 'high' },
          { metric: 'Bounce Rate', current: 68, target: 35, improvement: '49% reduction', impact: 'medium' },
          { metric: 'Social Shares', current: 45, target: 180, improvement: '300% increase', impact: 'high' }
        ],
        totalImprovement: 189,
        roi: 420
      },
      {
        category: 'Conversion Optimization',
        metrics: [
          { metric: 'Lead Generation', current: 2.1, target: 8.5, improvement: '305% increase', impact: 'high' },
          { metric: 'Sales Conversion', current: 1.8, target: 6.2, improvement: '244% improvement', impact: 'high' },
          { metric: 'Customer Lifetime Value', current: 1250, target: 3800, improvement: '204% increase', impact: 'high' }
        ],
        totalImprovement: 251,
        roi: 890
      },
      {
        category: 'Technical Performance',
        metrics: [
          { metric: 'Server Response Time', current: 450, target: 120, improvement: '73% faster', impact: 'high' },
          { metric: 'Mobile Performance', current: 65, target: 92, improvement: '42% improvement', impact: 'medium' },
          { metric: 'Accessibility Score', current: 78, target: 98, improvement: '26% improvement', impact: 'medium' }
        ],
        totalImprovement: 47,
        roi: 180
      }
    ];
    
    setResults(mockResults);
    setIsAnalyzing(false);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Content Optimization 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered content optimization that delivers measurable improvements across SEO, engagement, and conversion metrics
            </p>
          </motion.div>
        </div>

        {/* Analysis Button */}
        <div className="text-center mb-12">
          <motion.button
            onClick={analyzeContent}
            disabled={isAnalyzing}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAnalyzing ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Analyzing Content...
              </div>
            ) : (
              'Start Content Analysis'
            )}
          </motion.button>
        </div>

        {/* Results */}
        <AnimatePresence>
          {results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {results.map((result, index) => (
                  <motion.div
                    key={result.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">📈</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {result.category}
                      </h3>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        +{result.totalImprovement}%
                      </div>
                      <div className="text-sm text-gray-600">
                        ROI: {result.roi}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Detailed Results */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {results.map((result, index) => (
                  <motion.div
                    key={result.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="mr-3">📊</span>
                      {result.category}
                    </h3>
                    
                    <div className="space-y-4">
                      {result.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="border-l-4 border-blue-500 pl-4">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-gray-900">{metric.metric}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(metric.impact)}`}>
                              {metric.impact} impact
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mb-1">
                            Current: {metric.current} → Target: {metric.target}
                          </div>
                          <div className="text-green-600 font-semibold">
                            {metric.improvement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Implement Optimizations
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Report
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Features */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Advanced Optimization Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {optimizationCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4`}>
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedContentOptimization2026;