'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Brain, 
  Target,
  Award,
  Globe,
  Rocket,
  Shield,
  Lightbulb,
  ChevronRight,
  Play,
  Download,
  Share2,
  Bookmark,
  Eye,
  Clock
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedContent, setSelectedContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const contentCategories = [
    {
      id: 'trending',
      name: 'Trending Now',
      icon: TrendingUp,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'ai-breakthroughs',
      name: 'AI Breakthroughs',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'quantum-revolution',
      name: 'Quantum Revolution',
      icon: Zap,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: Target,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'future-predictions',
      name: 'Future Predictions',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI 2026: The Neural Consciousness Revolution",
      description: "Discover how artificial intelligence is evolving beyond traditional computing to achieve true neural consciousness and emotional intelligence.",
      category: "ai-breakthroughs",
      readTime: "12 min read",
      views: "2.3M",
      likes: "45.2K",
      isTrending: true,
      isNew: true,
      tags: ["AI 2026", "Neural Networks", "Consciousness", "Breakthrough"],
      image: "/api/placeholder/600/400",
      author: "Dr. Sarah Chen",
      publishedAt: "2026-01-15",
      content: "The convergence of quantum computing and neural networks has created unprecedented opportunities for AI consciousness evolution..."
    },
    {
      id: 2,
      title: "Quantum Neural Fusion: The Next Computing Paradigm",
      description: "Explore how quantum computing and neural interfaces are merging to create the most powerful computational system ever conceived.",
      category: "quantum-revolution",
      readTime: "15 min read",
      views: "1.8M",
      likes: "38.7K",
      isTrending: true,
      isNew: false,
      tags: ["Quantum Computing", "Neural Fusion", "Computing", "Revolution"],
      image: "/api/placeholder/600/400",
      author: "Prof. Michael Rodriguez",
      publishedAt: "2026-01-12",
      content: "Quantum neural fusion represents the ultimate synthesis of quantum mechanics and biological neural processing..."
    },
    {
      id: 3,
      title: "Autonomous Business Systems: 10,000% ROI Achieved",
      description: "Real-world case studies showing how autonomous AI systems are delivering unprecedented returns on investment across industries.",
      category: "autonomous-systems",
      readTime: "18 min read",
      views: "3.1M",
      likes: "67.3K",
      isTrending: true,
      isNew: true,
      tags: ["Autonomous Systems", "ROI", "Business", "AI Implementation"],
      image: "/api/placeholder/600/400",
      author: "Zion Tech Research Team",
      publishedAt: "2026-01-10",
      content: "Our latest research reveals how autonomous AI systems are transforming business operations with measurable results..."
    },
    {
      id: 4,
      title: "Neural Interface Revolution: Direct Brain-Computer Integration",
      description: "The future of human-computer interaction through direct neural interfaces and brain-computer integration technologies.",
      category: "neural-interfaces",
      readTime: "14 min read",
      views: "2.7M",
      likes: "52.1K",
      isTrending: false,
      isNew: true,
      tags: ["Neural Interface", "BCI", "Human-Computer", "Integration"],
      image: "/api/placeholder/600/400",
      author: "Dr. Elena Volkov",
      publishedAt: "2026-01-08",
      content: "Neural interfaces are bridging the gap between human cognition and digital systems in ways previously thought impossible..."
    },
    {
      id: 5,
      title: "AI 2030 Predictions: The Singularity Approaches",
      description: "Comprehensive predictions for AI development through 2030, including the potential for artificial general intelligence.",
      category: "future-predictions",
      readTime: "20 min read",
      views: "4.2M",
      likes: "89.4K",
      isTrending: true,
      isNew: false,
      tags: ["AI 2030", "Singularity", "Predictions", "AGI"],
      image: "/api/placeholder/600/400",
      author: "Dr. James Mitchell",
      publishedAt: "2026-01-05",
      content: "Our analysis of current AI trends suggests we're approaching a critical inflection point in artificial intelligence development..."
    },
    {
      id: 6,
      title: "Revolutionary Content Discovery: AI-Powered Learning",
      description: "How AI is transforming content discovery and personalized learning experiences for maximum knowledge retention.",
      category: "ai-breakthroughs",
      readTime: "10 min read",
      views: "1.5M",
      likes: "31.8K",
      isTrending: false,
      isNew: true,
      tags: ["Content Discovery", "AI Learning", "Personalization", "Education"],
      image: "/api/placeholder/600/400",
      author: "Dr. Maria Santos",
      publishedAt: "2026-01-03",
      content: "Advanced AI algorithms are revolutionizing how we discover, consume, and retain information in the digital age..."
    }
  ];

  const filteredContent = featuredContent.filter(content => 
    activeTab === 'trending' ? content.isTrending : content.category === activeTab
  );

  const handleContentClick = (content) => {
    setSelectedContent(content);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const closeModal = () => {
    setSelectedContent(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4"
        >
          <Star className="w-4 h-4" />
          Ultimate Content Showcase 2026
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
          Revolutionary AI Content
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover the most advanced AI breakthroughs, quantum computing innovations, and future predictions 
          that are reshaping our world. Curated content delivering 10,000%+ ROI insights.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {contentCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredContent.map((content, index) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => handleContentClick(content)}
          >
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {content.isNew && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </div>
              )}
              {content.isTrending && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  TRENDING
                </div>
              )}
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  {content.readTime}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {content.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {content.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {content.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {content.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {content.likes}
                  </div>
                </div>
                <span>{content.publishedAt}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {content.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{content.author}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
      >
        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of companies already achieving 10,000%+ ROI with our AI solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/ai-2026-ultimate-breakthrough"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            Explore AI 2026
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>

      {/* Content Modal */}
      <AnimatePresence>
        {selectedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedContent.title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 mb-6">
                    {selectedContent.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700">
                      {selectedContent.content}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedContent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {selectedContent.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{selectedContent.author}</div>
                        <div className="text-sm text-gray-500">{selectedContent.publishedAt}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <Bookmark className="w-4 h-4" />
                        Save
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UltimateContentShowcase2026;