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
  ChevronRight
} from 'lucide-react';

const UltimateContentShowcase2027 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentCategories = [
    {
      id: 'ai-innovations',
      title: 'AI Innovations 2027',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Revolutionary AI breakthroughs transforming industries'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      description: 'Next-generation quantum solutions for complex problems'
    },
    {
      id: 'automation',
      title: 'Advanced Automation',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      description: 'Intelligent automation systems for modern businesses'
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: Star,
      color: 'from-orange-600 to-red-600',
      description: 'Cutting-edge technologies shaping tomorrow'
    }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI Consciousness Evolution Platform 2027",
      description: "Revolutionary AI system achieving near-human consciousness levels with advanced neural architectures and emotional intelligence capabilities.",
      category: "ai-innovations",
      image: "/api/placeholder/600/400",
      tags: ["AI", "Consciousness", "Neural Networks", "2027"],
      readTime: "8 min read",
      views: "2.3M",
      rating: 4.9,
      featured: true
    },
    {
      id: 2,
      title: "Quantum Neural Fusion Breakthrough",
      description: "First successful integration of quantum computing with neural networks, achieving unprecedented processing speeds and problem-solving capabilities.",
      category: "quantum-computing",
      image: "/api/placeholder/600/400",
      tags: ["Quantum", "Neural Networks", "Breakthrough", "2027"],
      readTime: "12 min read",
      views: "1.8M",
      rating: 4.8,
      featured: true
    },
    {
      id: 3,
      title: "Autonomous Business Operations Suite",
      description: "Complete business automation platform that can run entire operations without human intervention, adapting and optimizing in real-time.",
      category: "automation",
      image: "/api/placeholder/600/400",
      tags: ["Automation", "Business", "AI", "2027"],
      readTime: "15 min read",
      views: "3.1M",
      rating: 4.9,
      featured: true
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2027",
      description: "Direct brain-computer interface technology enabling seamless interaction between human consciousness and digital systems.",
      category: "future-tech",
      image: "/api/placeholder/600/400",
      tags: ["Neural Interface", "BCI", "Future", "2027"],
      readTime: "10 min read",
      views: "2.7M",
      rating: 4.7,
      featured: true
    },
    {
      id: 5,
      title: "Synthetic Intelligence Ecosystem",
      description: "Comprehensive AI ecosystem featuring multiple specialized intelligences working in harmony to solve complex global challenges.",
      category: "ai-innovations",
      image: "/api/placeholder/600/400",
      tags: ["Synthetic Intelligence", "Ecosystem", "AI", "2027"],
      readTime: "20 min read",
      views: "1.9M",
      rating: 4.8,
      featured: false
    },
    {
      id: 6,
      title: "Quantum-Safe Cryptography Suite",
      description: "Advanced cryptographic solutions designed to protect against quantum computing threats, ensuring future-proof security.",
      category: "quantum-computing",
      image: "/api/placeholder/600/400",
      tags: ["Cryptography", "Security", "Quantum", "2027"],
      readTime: "14 min read",
      views: "1.5M",
      rating: 4.6,
      featured: false
    }
  ];

  const filteredContent = featuredContent.filter(item => 
    activeTab === 'all' || item.category === activeTab
  );

  const featuredItems = filteredContent.filter(item => item.featured);
  const regularItems = filteredContent.filter(item => !item.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length]);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            ULTIMATE CONTENT SHOWCASE 2027
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Content
            </span>
            <br />
            <span className="text-4xl md:text-6xl">Showcase</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most groundbreaking content, innovations, and technologies 
            that are reshaping our world in 2027 and beyond.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{category.title}</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></div>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Content Carousel */}
        {featuredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Featured Content</h2>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        {featuredItems[currentSlide].tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {featuredItems[currentSlide].title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {featuredItems[currentSlide].description}
                      </p>
                      
                      <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <BookOpen className="w-4 h-4" />
                          <span>{featuredItems[currentSlide].readTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Users className="w-4 h-4" />
                          <span>{featuredItems[currentSlide].views} views</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span>{featuredItems[currentSlide].rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                          <Play className="w-5 h-5" />
                          Watch Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                          <BookOpen className="w-5 h-5" />
                          Read More
                        </button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl overflow-hidden">
                        <img
                          src={featuredItems[currentSlide].image}
                          alt={featuredItems[currentSlide].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Carousel Controls */}
                <div className="flex justify-center gap-2 mt-6">
                  {featuredItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex gap-2">
                    {item.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {item.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {item.views}
                    </span>
                  </div>
                </div>
                
                <button className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Explore Content
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of innovators, entrepreneurs, and visionaries who are 
              already transforming their businesses with our cutting-edge content and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5" />
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                <Globe className="w-5 h-5" />
                View All Content
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2027;