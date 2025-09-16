import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Star, BookOpen, Briefcase, Zap } from 'lucide-react';
import { REVOLUTIONARY_BLOG_POSTS_2026, REVOLUTIONARY_SERVICES_2026 } from '../data/revolutionaryContent2026';

const NewContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'services' | 'case-studies'>('blog');

  const blogPosts = REVOLUTIONARY_BLOG_POSTS_2026.slice(0, 6);
  const services = REVOLUTIONARY_SERVICES_2026.slice(0, 6);
  const caseStudies = [
    {
      id: 'tesla-autonomous-ai',
      title: 'Tesla\'s Autonomous AI Revolution',
      company: 'Tesla Inc.',
      industry: 'Automotive',
      results: ['$5.8B in cost savings', '25% improvement in production', 'Zero human error'],
      image: '/images/tesla-case-study.jpg',
      isNew: true
    },
    {
      id: 'google-quantum-ai',
      title: 'Google\'s Quantum AI Breakthrough',
      company: 'Google LLC',
      industry: 'Technology',
      results: ['1000x faster problem solving', '50% reduction in energy', 'Revolutionary search'],
      image: '/images/google-case-study.jpg',
      isNew: true
    },
    {
      id: 'microsoft-ai-transformation',
      title: 'Microsoft\'s AI-First Transformation',
      company: 'Microsoft Corporation',
      industry: 'Enterprise Software',
      results: ['40% increase in productivity', '90% reduction in manual tasks', 'AI-powered collaboration'],
      image: '/images/microsoft-case-study.jpg',
      isNew: true
    }
  ];

  const tabs = [
    { id: 'blog', label: 'Latest Articles', icon: BookOpen, count: blogPosts.length },
    { id: 'services', label: 'New Services', icon: Briefcase, count: services.length },
    { id: 'case-studies', label: 'Case Studies', icon: Star, count: caseStudies.length }
  ];

  const renderBlogPosts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-6xl text-white opacity-80">
                {post.category === 'AI' ? '🤖' : 
                 post.category === 'Quantum' ? '⚛️' : 
                 post.category === 'Neural' ? '🧠' : '✨'}
              </div>
            </div>
            {post.isNew && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                  NEW
                </span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
              {post.title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {post.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );

  const renderServices = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-sm text-gray-500">{service.category}</span>
                </div>
              </div>
              {service.isNew && (
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  NEW
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-4">
              {service.description}
            </p>
            
            <div className="space-y-2 mb-4">
              {service.features.slice(0, 3).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-gray-500">Pricing: </span>
                <span className="font-medium text-gray-800">{service.pricing}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                  {service.urgency}
                </span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderCaseStudies = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <div className="text-6xl text-white opacity-80">
              {study.company === 'Tesla Inc.' ? '🚗' : 
               study.company === 'Google LLC' ? '🔍' : '💼'}
            </div>
            {study.isNew && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                  NEW
                </span>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              {study.title}
            </h3>
            
            <div className="text-sm text-gray-600 mb-4">
              <div className="font-medium">{study.company}</div>
              <div>{study.industry}</div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="text-sm font-medium text-gray-700">Key Results:</div>
              {study.results.map((result, resultIndex) => (
                <div key={resultIndex} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>{result}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300">
              View Case Study
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            Fresh Content 2026
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Discover What's New
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our latest articles, revolutionary services, and groundbreaking case studies
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'blog' && renderBlogPosts()}
            {activeTab === 'services' && renderServices()}
            {activeTab === 'case-studies' && renderCaseStudies()}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore All Content
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;