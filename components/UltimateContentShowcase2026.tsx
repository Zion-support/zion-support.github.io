'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Target,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Code,
  Wrench,
  Eye,
  Heart
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-breakthroughs');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = {
    'ai-breakthroughs': {
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Quantum-Neural Fusion Technology',
          description: 'Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.',
          features: ['10,000x faster processing', 'Quantum consciousness simulation', 'Real-time decision making'],
          image: '/api/placeholder/400/300',
          category: 'Breakthrough Technology',
          readTime: '8 min read',
          difficulty: 'Advanced',
          rating: 4.9
        },
        {
          title: 'Synthetic Intelligence Evolution',
          description: 'Next-generation AI systems that can learn, adapt, and evolve autonomously.',
          features: ['Autonomous learning', 'Self-improvement algorithms', 'Emotional intelligence'],
          image: '/api/placeholder/400/300',
          category: 'AI Research',
          readTime: '12 min read',
          difficulty: 'Expert',
          rating: 4.8
        },
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces that enable seamless human-AI collaboration.',
          features: ['Thought-to-text conversion', 'Neural pattern recognition', 'Enhanced cognitive abilities'],
          image: '/api/placeholder/400/300',
          category: 'Neural Technology',
          readTime: '15 min read',
          difficulty: 'Expert',
          rating: 4.9
        }
      ]
    },
    'automation-solutions': {
      title: 'Automation Solutions',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with AI-powered decision making.',
          features: ['End-to-end automation', 'Intelligent workflow optimization', 'Predictive maintenance'],
          image: '/api/placeholder/400/300',
          category: 'Business Automation',
          readTime: '10 min read',
          difficulty: 'Intermediate',
          rating: 4.7
        },
        {
          title: 'Smart Manufacturing Systems',
          description: 'AI-driven manufacturing with real-time optimization and quality control.',
          features: ['Predictive quality control', 'Dynamic production scheduling', 'IoT integration'],
          image: '/api/placeholder/400/300',
          category: 'Manufacturing',
          readTime: '14 min read',
          difficulty: 'Advanced',
          rating: 4.8
        },
        {
          title: 'Intelligent Customer Service',
          description: 'Advanced AI chatbots and virtual assistants for superior customer experience.',
          features: ['Natural language processing', 'Emotional intelligence', 'Multi-language support'],
          image: '/api/placeholder/400/300',
          category: 'Customer Service',
          readTime: '6 min read',
          difficulty: 'Beginner',
          rating: 4.6
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      icon: Cpu,
      color: 'from-indigo-600 to-purple-600',
      content: [
        {
          title: 'Quantum Supremacy Applications',
          description: 'Practical applications of quantum computing in real-world scenarios.',
          features: ['Cryptography breakthroughs', 'Drug discovery acceleration', 'Financial modeling'],
          image: '/api/placeholder/400/300',
          category: 'Quantum Technology',
          readTime: '18 min read',
          difficulty: 'Expert',
          rating: 4.9
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Machine learning algorithms optimized for quantum computing systems.',
          features: ['Quantum neural networks', 'Exponential speedup', 'Pattern recognition'],
          image: '/api/placeholder/400/300',
          category: 'Quantum AI',
          readTime: '16 min read',
          difficulty: 'Expert',
          rating: 4.8
        },
        {
          title: 'Quantum Security Solutions',
          description: 'Unbreakable encryption and security systems powered by quantum mechanics.',
          features: ['Quantum key distribution', 'Post-quantum cryptography', 'Secure communications'],
          image: '/api/placeholder/400/300',
          category: 'Cybersecurity',
          readTime: '12 min read',
          difficulty: 'Advanced',
          rating: 4.7
        }
      ]
    },
    'future-predictions': {
      title: 'Future Predictions',
      icon: Eye,
      color: 'from-emerald-600 to-teal-600',
      content: [
        {
          title: 'AI Singularity Timeline 2030-2035',
          description: 'Comprehensive analysis of when and how AI will achieve technological singularity.',
          features: ['Timeline predictions', 'Impact assessment', 'Preparation strategies'],
          image: '/api/placeholder/400/300',
          category: 'Future Studies',
          readTime: '20 min read',
          difficulty: 'Advanced',
          rating: 4.9
        },
        {
          title: 'Human-AI Collaboration Future',
          description: 'How humans and AI will work together in the next decade.',
          features: ['Collaborative intelligence', 'Augmented human capabilities', 'Ethical considerations'],
          image: '/api/placeholder/400/300',
          category: 'Societal Impact',
          readTime: '14 min read',
          difficulty: 'Intermediate',
          rating: 4.6
        },
        {
          title: 'Technology Convergence 2030',
          description: 'How AI, quantum computing, and biotechnology will converge.',
          features: ['Convergence analysis', 'Emerging technologies', 'Market implications'],
          image: '/api/placeholder/400/300',
          category: 'Technology Trends',
          readTime: '16 min read',
          difficulty: 'Advanced',
          rating: 4.8
        }
      ]
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 1000],
              y: [0, Math.random() * 1000],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            ULTIMATE CONTENT SHOWCASE 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Content Hub
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI breakthroughs, automation solutions, and future predictions 
            that will shape the next decade of technological innovation.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            );
          })}
        </motion.div>

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
            {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {item.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {Math.floor(Math.random() * 1000) + 100} views
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/content/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"
                  >
                    Explore Content
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators, researchers, and technology leaders who are already 
              shaping the future with our cutting-edge content and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </Link>
              <Link
                href="/content-library"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Content
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;