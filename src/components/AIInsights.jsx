import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// AI Insights Component
const AIInsights = () => {
  const [insights, setInsights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Insights', icon: '🔍' },
    { id: 'performance', name: 'Performance', icon: '⚡' },
    { id: 'security', name: 'Security', icon: '🛡️' },
    { id: 'user-experience', name: 'User Experience', icon: '👥' },
    { id: 'business', name: 'Business', icon: '📈' }
  ];

  useEffect(() => {
    // Simulate AI insights generation
    const generateInsights = async () => {
      setIsLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockInsights = [
        {
          id: 1,
          category: 'performance',
          title: 'Page Load Optimization Opportunity',
          description: 'AI analysis suggests implementing lazy loading could improve page load times by 23%',
          confidence: 94,
          impact: 'high',
          recommendation: 'Implement intersection observer for below-the-fold images',
          priority: 'urgent',
          estimatedSavings: '$2,400/month'
        },
        {
          id: 2,
          category: 'security',
          title: 'Potential XSS Vulnerability Detected',
          description: 'User input validation needs enhancement in contact form',
          confidence: 87,
          impact: 'high',
          recommendation: 'Add input sanitization and CSRF tokens',
          priority: 'high',
          estimatedSavings: 'Prevent potential data breach'
        },
        {
          id: 3,
          category: 'user-experience',
          title: 'Mobile Navigation Improvement',
          description: 'Users spend 40% more time on mobile when navigation is simplified',
          confidence: 91,
          impact: 'medium',
          recommendation: 'Implement hamburger menu with better touch targets',
          priority: 'medium',
          estimatedSavings: '15% increase in mobile conversions'
        },
        {
          id: 4,
          category: 'business',
          title: 'Content Personalization Opportunity',
          description: 'AI suggests personalized content could increase engagement by 35%',
          confidence: 89,
          impact: 'high',
          recommendation: 'Implement user behavior tracking and dynamic content',
          priority: 'medium',
          estimatedSavings: '$5,200/month'
        },
        {
          id: 5,
          category: 'performance',
          title: 'Bundle Size Optimization',
          description: 'Current bundle size is 15% larger than industry average',
          confidence: 96,
          impact: 'medium',
          recommendation: 'Implement code splitting and tree shaking',
          priority: 'low',
          estimatedSavings: '12% faster load times'
        },
        {
          id: 6,
          category: 'user-experience',
          title: 'Accessibility Enhancement Needed',
          description: 'Screen reader compatibility issues detected in 3 components',
          confidence: 92,
          impact: 'high',
          recommendation: 'Add ARIA labels and improve keyboard navigation',
          priority: 'high',
          estimatedSavings: 'Compliance and better UX'
        }
      ];
      
      setInsights(mockInsights);
      setIsLoading(false);
    };

    generateInsights();
  }, []);

  const filteredInsights = selectedCategory === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'text-red-400 bg-red-900 bg-opacity-30';
      case 'high': return 'text-orange-400 bg-orange-900 bg-opacity-30';
      case 'medium': return 'text-yellow-400 bg-yellow-900 bg-opacity-30';
      case 'low': return 'text-green-400 bg-green-900 bg-opacity-30';
      default: return 'text-gray-400 bg-gray-900 bg-opacity-30';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">AI is analyzing your data...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent analysis and recommendations to optimize your digital presence
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">
                      {categories.find(cat => cat.id === insight.category)?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{insight.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(insight.priority)}`}>
                          {insight.priority.toUpperCase()}
                        </span>
                        <span className={`text-sm font-semibold ${getImpactColor(insight.impact)}`}>
                          {insight.impact.toUpperCase()} IMPACT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{insight.confidence}%</div>
                    <div className="text-sm text-gray-400">Confidence</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {insight.description}
                </p>

                <div className="bg-white bg-opacity-5 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Recommendation:</h4>
                  <p className="text-gray-300 text-sm">{insight.recommendation}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Potential Savings: <span className="text-green-400 font-semibold">{insight.estimatedSavings}</span>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Implement
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* AI Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">AI Summary</h3>
          <p className="text-xl text-white mb-6">
            Based on your current data, implementing these recommendations could result in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold text-white">$7,600</div>
              <div className="text-purple-100">Monthly Savings</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold text-white">35%</div>
              <div className="text-purple-100">Performance Improvement</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold text-white">92%</div>
              <div className="text-purple-100">User Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIInsights;