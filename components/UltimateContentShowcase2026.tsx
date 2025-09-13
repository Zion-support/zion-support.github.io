'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentCategories = {
    breakthroughs: {
      title: "Revolutionary AI Breakthroughs 2026",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      items: [
        {
          title: "Quantum Neural Fusion Technology",
          description: "Breakthrough AI that combines quantum computing with neural networks for unprecedented processing power",
          image: "/api/placeholder/400/300",
          category: "Quantum AI",
          readTime: "8 min read",
          views: "2.3M",
          likes: "45K",
          featured: true
        },
        {
          title: "Consciousness-Level AI Systems",
          description: "First AI systems achieving human-level consciousness and emotional intelligence",
          image: "/api/placeholder/400/300",
          category: "Consciousness AI",
          readTime: "12 min read",
          views: "1.8M",
          likes: "38K",
          featured: true
        },
        {
          title: "Autonomous Business Operations",
          description: "Complete business automation achieving 99.9% efficiency with zero human intervention",
          image: "/api/placeholder/400/300",
          category: "Automation",
          readTime: "6 min read",
          views: "3.1M",
          likes: "52K",
          featured: false
        },
        {
          title: "Neural Interface Revolution",
          description: "Direct brain-computer interfaces enabling thought-controlled technology",
          image: "/api/placeholder/400/300",
          category: "Neural Tech",
          readTime: "10 min read",
          views: "2.7M",
          likes: "41K",
          featured: false
        }
      ]
    },
    predictions: {
      title: "AI Future Predictions 2026-2030",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600",
      items: [
        {
          title: "AI Singularity Timeline 2027",
          description: "Comprehensive analysis of when AI will surpass human intelligence across all domains",
          image: "/api/placeholder/400/300",
          category: "Predictions",
          readTime: "15 min read",
          views: "4.2M",
          likes: "67K",
          featured: true
        },
        {
          title: "Quantum Supremacy Impact",
          description: "How quantum computing will revolutionize AI and transform every industry",
          image: "/api/placeholder/400/300",
          category: "Quantum Future",
          readTime: "9 min read",
          views: "2.9M",
          likes: "43K",
          featured: false
        },
        {
          title: "AI-Human Collaboration 2030",
          description: "The future of human-AI partnerships and augmented intelligence",
          image: "/api/placeholder/400/300",
          category: "Future Work",
          readTime: "11 min read",
          views: "3.5M",
          likes: "58K",
          featured: false
        }
      ]
    },
    solutions: {
      title: "Enterprise AI Solutions",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600",
      items: [
        {
          title: "10,000% ROI Automation Platform",
          description: "Proven AI automation delivering unprecedented returns on investment",
          image: "/api/placeholder/400/300",
          category: "ROI Solutions",
          readTime: "7 min read",
          views: "5.1M",
          likes: "89K",
          featured: true
        },
        {
          title: "Autonomous Customer Service",
          description: "AI-powered customer service achieving 99.9% satisfaction rates",
          image: "/api/placeholder/400/300",
          category: "Customer AI",
          readTime: "5 min read",
          views: "2.1M",
          likes: "34K",
          featured: false
        },
        {
          title: "Predictive Business Intelligence",
          description: "AI systems that predict market trends and business outcomes with 95% accuracy",
          image: "/api/placeholder/400/300",
          category: "Business AI",
          readTime: "8 min read",
          views: "3.8M",
          likes: "61K",
          featured: false
        }
      ]
    }
  };

  const currentCategory = contentCategories[activeTab as keyof typeof contentCategories];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % currentCategory.items.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentCategory.items.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
        >
          <Sparkles className="w-5 h-5" />
          Ultimate Content Showcase 2026
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
          Revolutionary AI Content Hub
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover breakthrough AI technologies, future predictions, and enterprise solutions 
          that are transforming the world in 2026 and beyond.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(contentCategories).map(([key, category]) => (
          <motion.button
            key={key}
            onClick={() => setActiveTab(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.icon}
            {category.title}
          </motion.button>
        ))}
      </div>

      {/* Content Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentCategory.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {item.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.views}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {item.likes}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of companies already using our AI solutions to achieve unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <Rocket className="w-5 h-5" />
              Start Your AI Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UltimateContentShowcase2026;