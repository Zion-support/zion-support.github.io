import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ComprehensiveContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 'ai-procurement-playbook',
      title: 'AI Procurement Playbook 2025',
      type: 'guide',
      category: 'ai-strategy',
      description: 'Complete guide to buying AI solutions faster, reducing risk, and ensuring successful implementation.',
      readTime: '15 min read',
      publishDate: '2025-01-15',
      featured: true,
      tags: ['AI Procurement', 'Risk Management', 'Implementation'],
      image: '/images/content/ai-procurement-playbook.jpg'
    },
    {
      id: 'agent-safety-guardrails',
      title: 'Agent Safety & Guardrails 2025',
      type: 'guide',
      category: 'ai-safety',
      description: 'Comprehensive framework for implementing AI agent safety measures and guardrails in production.',
      readTime: '12 min read',
      publishDate: '2025-01-14',
      featured: true,
      tags: ['AI Safety', 'Guardrails', 'Production'],
      image: '/images/content/agent-safety-guardrails.jpg'
    },
    {
      id: 'ai-roadmap-2026',
      title: 'AI Roadmap 2026: Strategic Implementation',
      type: 'strategy',
      category: 'ai-strategy',
      description: 'Strategic roadmap for AI implementation in 2026, covering emerging technologies and best practices.',
      readTime: '20 min read',
      publishDate: '2025-01-13',
      featured: true,
      tags: ['Strategic Planning', 'AI Roadmap', '2026 Trends'],
      image: '/images/content/ai-roadmap-2026.jpg'
    },
    {
      id: 'ai-implementation-checklist',
      title: 'AI Implementation Checklist 2025',
      type: 'resource',
      category: 'ai-strategy',
      description: 'Comprehensive checklist for successful AI implementation, from planning to deployment.',
      readTime: '8 min read',
      publishDate: '2025-01-12',
      featured: false,
      tags: ['Implementation', 'Checklist', 'Best Practices'],
      image: '/images/content/ai-implementation-checklist.jpg'
    },
    {
      id: 'ai-go-to-market-2025',
      title: 'AI Go-to-Market Strategies 2025',
      type: 'strategy',
      category: 'ai-strategy',
      description: 'Advanced go-to-market strategies for AI products and services in the competitive 2025 landscape.',
      readTime: '18 min read',
      publishDate: '2025-01-11',
      featured: false,
      tags: ['Go-to-Market', 'AI Products', 'Strategy'],
      image: '/images/content/ai-gtm-2025.jpg'
    },
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI Breakthrough: Enterprise Applications',
      type: 'research',
      category: 'quantum-ai',
      description: 'Exploring the intersection of quantum computing and AI for enterprise applications.',
      readTime: '25 min read',
      publishDate: '2025-01-10',
      featured: false,
      tags: ['Quantum Computing', 'AI', 'Enterprise'],
      image: '/images/content/quantum-ai-breakthrough.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-strategy', label: 'AI Strategy', count: contentItems.filter(item => item.category === 'ai-strategy').length },
    { id: 'ai-safety', label: 'AI Safety', count: contentItems.filter(item => item.category === 'ai-safety').length },
    { id: 'quantum-ai', label: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum-ai').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  const featuredContent = contentItems.filter(item => item.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return '📚';
      case 'strategy': return '🎯';
      case 'resource': return '📋';
      case 'research': return '🔬';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'from-blue-500 to-blue-600';
      case 'strategy': return 'from-purple-500 to-purple-600';
      case 'resource': return 'from-green-500 to-green-600';
      case 'research': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📚 Ultimate Content Library
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access our comprehensive collection of AI guides, strategies, and resources. 
            Everything you need to master AI implementation and stay ahead of the curve.
          </p>
        </motion.div>

        {/* Featured Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800">🌟 Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {getTypeIcon(item.type)} {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{item.readTime}</span>
                    <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                  </div>

                  <Link
                    to={`/blog/${item.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Article →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-200"
              >
                <div className={`h-32 bg-gradient-to-r ${getTypeColor(item.type)} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {getTypeIcon(item.type)} {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </div>
                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{item.readTime}</span>
                    <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                  </div>

                  <Link
                    to={`/blog/${item.id}`}
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold text-center block hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest AI Insights</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ AI professionals.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase;