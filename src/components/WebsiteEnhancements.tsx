import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WebsiteEnhancementsProps {
  isVisible: boolean;
  onClose: () => void;
}

interface Enhancement {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'inactive' | 'pending';
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'ux' | 'security';
}

const WebsiteEnhancements: React.FC<WebsiteEnhancementsProps> = ({ isVisible, onClose }) => {
  const [enhancements, setEnhancements] = useState<Enhancement[]>([
    {
      id: 'lazy-loading',
      title: 'Advanced Lazy Loading',
      description: 'Implement intelligent lazy loading for images and components to improve initial page load performance.',
      status: 'active',
      impact: 'high',
      category: 'performance'
    },
    {
      id: 'critical-css',
      title: 'Critical CSS Inlining',
      description: 'Automatically extract and inline critical CSS for above-the-fold content.',
      status: 'active',
      impact: 'high',
      category: 'performance'
    },
    {
      id: 'service-worker',
      title: 'Service Worker Optimization',
      description: 'Enhanced service worker with intelligent caching strategies and offline support.',
      status: 'active',
      impact: 'high',
      category: 'performance'
    },
    {
      id: 'accessibility-audit',
      title: 'Real-time Accessibility Audit',
      description: 'Continuous accessibility monitoring with automated fixes and suggestions.',
      status: 'active',
      impact: 'high',
      category: 'accessibility'
    },
    {
      id: 'seo-optimization',
      title: 'Dynamic SEO Optimization',
      description: 'Real-time SEO analysis and optimization recommendations.',
      status: 'active',
      impact: 'high',
      category: 'seo'
    },
    {
      id: 'security-headers',
      title: 'Security Headers',
      description: 'Comprehensive security headers implementation with CSP and HSTS.',
      status: 'active',
      impact: 'high',
      category: 'security'
    },
    {
      id: 'analytics-optimization',
      title: 'Analytics Optimization',
      description: 'Privacy-focused analytics with performance monitoring and user insights.',
      status: 'active',
      impact: 'medium',
      category: 'ux'
    },
    {
      id: 'error-tracking',
      title: 'Advanced Error Tracking',
      description: 'Comprehensive error tracking with automatic recovery and user feedback.',
      status: 'active',
      impact: 'high',
      category: 'ux'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'performance', 'accessibility', 'seo', 'ux', 'security'];

  const filteredEnhancements = enhancements.filter(enhancement => {
    const matchesCategory = selectedCategory === 'all' || enhancement.category === selectedCategory;
    const matchesSearch = enhancement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enhancement.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'inactive': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance': return '⚡';
      case 'accessibility': return '♿';
      case 'seo': return '🔍';
      case 'ux': return '✨';
      case 'security': return '🔒';
      default: return '📋';
    }
  };

  const toggleEnhancement = useCallback((id: string) => {
    setEnhancements(prev => prev.map(enhancement => 
      enhancement.id === id 
        ? { ...enhancement, status: enhancement.status === 'active' ? 'inactive' : 'active' }
        : enhancement
    ));
  }, []);

  const activeEnhancements = enhancements.filter(e => e.status === 'active').length;
  const totalEnhancements = enhancements.length;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Website Enhancements</h2>
                  <p className="text-gray-600 mt-1">
                    {activeEnhancements} of {totalEnhancements} enhancements active
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Search and Filter */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search enhancements..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
              <div className="grid gap-4">
                {filteredEnhancements.map((enhancement) => (
                  <motion.div
                    key={enhancement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{getCategoryIcon(enhancement.category)}</span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {enhancement.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(enhancement.status)}`}>
                            {enhancement.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(enhancement.impact)}`}>
                            {enhancement.impact} impact
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{enhancement.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="capitalize">{enhancement.category}</span>
                          <span>•</span>
                          <span>Enhanced performance and user experience</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleEnhancement(enhancement.id)}
                        className={`ml-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          enhancement.status === 'active'
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                        }`}
                      >
                        {enhancement.status === 'active' ? 'Disable' : 'Enable'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  All enhancements are automatically optimized for performance and compatibility.
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEnhancements(prev => prev.map(e => ({ ...e, status: 'active' })))}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Enable All
                  </button>
                  <button
                    onClick={() => setEnhancements(prev => prev.map(e => ({ ...e, status: 'inactive' })))}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Disable All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebsiteEnhancements;