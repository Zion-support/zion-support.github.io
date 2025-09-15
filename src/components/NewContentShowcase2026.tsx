"use client";
'use client';

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain
  Zap
  Shield
  Globe
  Rocket
  Star
  TrendingUp
  Users,
  ChevronRight,
  ExternalLink,
  Clock,
  Award
} from 'lucide-react';
=======
const NewContentShowcase2026: React.FC = () => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState(0);
>>>>>>> cursor/create-and-deploy-new-content-7857

const NewContentShowcase2026 = () => {
  const [activeTabsetActiveTab] = useState('ai-breakthroughs');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const contentCategories = {
    'ai-breakthroughs': {
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    'quantum-computing': {
      title: 'Quantum Computing Revolution',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    'sustainability': {
      title: 'Green Tech & Sustainability',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    'automation': {
      title: 'Advanced Automation',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  };

  const featuredContent = {
    'ai-breakthroughs': [
      {
        title: 'Multimodal AI Revolution: Beyond Text and Images',
        description: 'Explore how AI systems are integrating visionaudioand text processing to create more intelligent and context-aware applications.',
        readTime: '12 min read',
        category: 'AI Research',
        featured: true,
        href: '/ai-2026-multimodal-revolution',
        stats: { views: '2.3'k', 'likes: '187' }
      },
      {
        title: 'Neural Architecture Search: Automating AI Design',
        description: 'Discover how automated neural architecture search is revolutionizing AI model development and optimization.',
        readTime: '8 min read',
        category: 'AI Engineering',
        featured: false,
        href: '/ai-2026-neural-architecture-search',
        stats: { views: '1.8'k', 'likes: '142' }
      },
      {
        title: 'AI Consciousness: The Next Frontier',
        description: 'Dive deep into the philosophical and technical aspects of AI consciousness and self-awareness.',
        readTime: '15 min read',
        category: 'AI Philosophy',
        featured: true,
        href: '/ai-2026-consciousness-frontier',
        stats: { views: '3.1'k', 'likes: '256' }
      }
    ],
    'quantum-computing': [
      {
        title: 'Quantum AI: The Future of Computing',
        description: 'Learn how quantum computing is revolutionizing AI algorithms and problem-solving capabilities.',
        readTime: '10 min read',
        category: 'Quantum AI',
        featured: true,
        href: '/quantum-ai-2026-future',
        stats: { views: '1.9'k', 'likes: '134' }
      },
      {
        title: 'Quantum Machine Learning Algorithms',
        description: 'Explore the latest quantum machine learning algorithms and their practical applications.',
        readTime: '14 min read',
        category: 'Quantum ML',
        featured: false,
        href: '/quantum-ml-algorithms-2026',
        stats: { views: '1.2'k', 'likes: '98' }
      }
    ],
    'sustainability': [
      {
        title: 'Green AI: Sustainable Technology Solutions',
        description: 'Discover how AI is being used to create more sustainable and environmentally friendly technologies.',
        readTime: '9 min read',
        category: 'Green Tech',
        featured: true,
        href: '/green-ai-sustainability-2026',
        stats: { views: '2.1'k', 'likes: '178' }
      },
      {
        title: 'Carbon-Neutral AI Infrastructure',
        description: 'Learn about building carbon-neutral AI infrastructure and sustainable computing practices.',
        readTime: '11 min read',
        category: 'Sustainability',
        featured: false,
        href: '/carbon-neutral-ai-infrastructure',
        stats: { views: '1.5'k', 'likes: '123' }
      }
    ],
    'automation': [
      {
        title: 'Autonomous Business Operations 2026',
        description: 'Explore how businesses are implementing fully autonomous operations using advanced AI and robotics.',
        readTime: '13 min read',
        category: 'Business Automation',
        featured: true,
        href: '/autonomous-business-ops-2026',
        stats: { views: '2.7'k', 'likes: '201' }
      },
      {
        title: 'Intelligent Process Automation',
        description: 'Master the art of intelligent process automation with cutting-edge AI technologies.',
        readTime: '7 min read',
        category: 'Process Automation',
        featured: false,
        href: '/intelligent-process-automation-2026',
        stats: { views: '1.6'k', 'likes: '145' }
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            NEW CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Just Dropped
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AIquantum computingsustainabilityand automation. 
            Stay ahead with cutting-edge insights and practical implementations.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
          {Object.entries(contentCategories).map(([keycategory]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : `bg-white text-gray-600 hover:bg-gray-50 border-2 ${category.borderColor}`
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {featuredContent[activeTab as keyof typeof featuredContent]?.map((contentindex) => {
            const category = contentCategories[activeTab as keyof typeof contentCategories];
            const Icon = category.icon;
            
            return (
              <motion.div
                key={index}
                className={`relative group ${category.bgColor} rounded-2xl p-6 border-2 ${category.borderColor} hover:shadow-xl transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {content.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    FEATURED
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-600">{content.category}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {content.stats.views}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {content.stats.likes}
                    </span>
                  </div>
                </div>

                <Link
                  href={content.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want More Revolutionary Content?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already transforming their businesses with our cutting-edge insights and implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Explore All Content
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
<<<<<<< HEAD
    </motion.section>
=======

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dive into our revolutionary technology content and discover the innovations that are shaping tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors">
              Explore All Content →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
=======
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: {
      title: "All Content",
      icon: "🌟"
    },
    ai: {
      title: "AI Systems",
      icon: "🧠"
    },
    quantum: {
      title: "Quantum Tech",
      icon: "⚛️"
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬"
    }
  };

  const contentItems = [
    {
      id: 1,
      title: "Advanced AI Systems 2026",
      description: "Revolutionary AI systems with synthetic consciousness and autonomous capabilities",
      category: "ai",
      image: "🧠",
      gradient: "from-blue-500 to-indigo-600",
      href: "/pages/AdvancedAISystems2026",
      features: ["Synthetic Consciousness", "Autonomous Operation", "Self-Healing"],
      badge: "NEW"
    },
    {
      id: 2,
      title: "Next-Gen Tech Showcase 2026",
      description: "Interactive showcase of cutting-edge technologies reshaping industries",
      category: "all",
      image: "⚡",
      gradient: "from-cyan-500 to-purple-600",
      href: "/pages/NextGenTechShowcase2026",
      features: ["Interactive Demos", "Technology Comparison", "Future Timeline"],
      badge: "FEATURED"
    },
    {
      id: 3,
      title: "Advanced AI Transformation 2026",
      description: "Transform your business with next-generation AI systems that adapt and evolve",
      category: "ai",
      image: "🤖",
      gradient: "from-emerald-500 to-teal-600",
      href: "/pages/AdvancedAITransformation2026",
      features: ["Business Transformation", "Autonomous Agents", "Quantum AI"],
      badge: "BREAKTHROUGH"
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "AI systems with synthetic consciousness and creative capabilities",
      category: "ai",
      image: "🎨",
      gradient: "from-purple-500 to-pink-600",
      href: "/pages/SyntheticIntelligence2026",
      features: ["Creative AI", "Conscious Systems", "Ethical Reasoning"],
      badge: "REVOLUTIONARY"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural interface technology",
      category: "quantum",
      image: "⚛️",
      gradient: "from-indigo-500 to-purple-600",
      href: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Processing", "Neural Networks", "Fusion Technology"],
      badge: "BREAKTHROUGH"
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces enabling thought-controlled technology",
      category: "neural",
      image: "🧬",
      gradient: "from-teal-500 to-emerald-600",
      href: "/pages/NeuralInterfaceRevolution2026",
      features: ["Brain-Computer Interface", "Thought Control", "Medical Applications"],
      badge: "FUTURE"
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6">
            🚀 NEW CONTENT 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Revolutionary Content Showcase</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest groundbreaking content on AI, quantum computing, and neural interfaces
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{item.image}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.badge === 'NEW' ? 'bg-green-500' :
                        item.badge === 'FEATURED' ? 'bg-blue-500' :
                        item.badge === 'BREAKTHROUGH' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={item.href}
                    className={`block w-full bg-gradient-to-r ${item.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
                  >
                    Explore Content →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">🌟 Experience the Future Today</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators exploring revolutionary technologies that are reshaping our world
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                View All Content →
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-2def
      </div>
    </div>
>>>>>>> cursor/create-and-deploy-new-content-7857
  );
};

export default NewContentShowcase2026;