<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      id: 1,
      title: "Advanced Analytics Dashboard 2026",
      description: "Transform your data into actionable insights with our revolutionary analytics platform featuring real-time intelligence and AI-powered recommendations",
      icon: "📊",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/AdvancedAnalyticsDashboard2026",
      features: ["AI-Powered Insights", "Real-time Visualization", "Predictive Modeling", "Custom Metrics"],
      category: "Analytics & Data"
    },
    {
      id: 2,
      title: "Biotech Revolution 2026",
      description: "Revolutionizing healthcare, agriculture, and environmental solutions through cutting-edge biotechnology, gene editing, and synthetic biology innovations",
      icon: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/BiotechRevolution2026",
      features: ["Gene Editing & CRISPR", "Synthetic Biology", "Neural Interfaces", "Personalized Medicine"],
      category: "Biotechnology"
    },
    {
      id: 3,
      title: "Space Tech Innovation 2026",
      description: "Pioneering the future of space exploration with revolutionary technologies that enable sustainable space travel, asteroid mining, and interplanetary colonization",
      icon: "🚀",
      gradient: "from-purple-600 to-indigo-600",
      link: "/pages/SpaceTechInnovation2026",
      features: ["Advanced Propulsion", "Space Habitats", "Asteroid Mining", "Planetary Exploration"],
      category: "Space Technology"
    },
    {
      id: 4,
      title: "Advanced AI Systems 2026",
      description: "Synthetic intelligence and self-evolving AI systems that think and learn independently, revolutionizing how we interact with technology",
      icon: "🤖",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/AdvancedAISystems2026",
      features: ["Synthetic Intelligence", "Self-Evolving AI", "Distributed Networks", "Autonomous Operation"],
      category: "Artificial Intelligence"
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Experience exponential processing power with quantum supremacy and revolutionary applications that solve impossible problems",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Molecular Simulation", "Exponential Speed"],
      category: "Quantum Computing"
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct neural interfaces and thought-controlled computing that enhances human capabilities",
      icon: "🧠",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback", "Cognitive Augmentation"],
      category: "Neural Technology"
=======
"use client";
'use client';

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
>>>>>>> cursor/create-and-deploy-new-content-abae
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Main Showcase Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-lg font-bold mb-8 animate-pulse"
            >
              🌟 BRAND NEW CONTENT • JANUARY 2026
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
            >
              Revolutionary Technology Showcase
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl opacity-90 max-w-5xl mx-auto leading-relaxed"
            >
              Experience the future with our groundbreaking new content featuring cutting-edge AI, 
              Quantum Computing, Biotechnology, Space Technology, and Neural Interface innovations
            </motion.p>
          </div>
          
          {/* Interactive Content Carousel */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {newContent.map((content) => (
                  <div key={content.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          <div className="flex items-center mb-6">
                            <span className="text-8xl mr-6">{content.icon}</span>
                            <div>
                              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-3">
                                {content.category}
                              </div>
                              <h3 className="text-4xl font-bold text-white mb-3">{content.title}</h3>
                            </div>
                          </div>
                          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{content.description}</p>
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {content.features.map((feature, index) => (
                              <div key={index} className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <a 
                            href={content.link}
                            className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 transform`}
                          >
                            Explore {content.title.split(' ')[0]} →
                          </a>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-center"
                        >
                          <div className="text-9xl mb-6 opacity-60">{content.icon}</div>
                          <div className="text-3xl font-bold text-white mb-4">2026 Technology</div>
                          <div className="text-gray-300 text-xl">Revolutionary Innovation</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-3">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {newContent.map((content) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <a href={content.link} className="block">
              <div className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}>
                <div className="text-6xl mb-6 text-center">{content.icon}</div>
                <div className="text-center mb-4">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3">
                    {content.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
                  <p className="text-white/90 mb-6 text-sm leading-relaxed">{content.description}</p>
                </div>
                <div className="flex items-center justify-center text-white/80 text-sm group-hover:text-white transition-colors">
                  <span className="mr-2">Explore Now</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Technology Impact Stats */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-white mb-4">Revolutionary Technology Impact</h3>
          <p className="text-xl text-gray-300">See how our new technologies are transforming industries</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "10^18x", label: "Quantum Speed Increase", icon: "⚛️" },
            { value: "99.9%", label: "Neural Interface Accuracy", icon: "🧠" },
            { value: "1000x", label: "AI Learning Acceleration", icon: "🤖" },
            { value: "24/7", label: "Autonomous Operation", icon: "🚀" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
>>>>>>> cursor/create-and-deploy-new-content-cc9d
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Explore the Future?</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Dive into our revolutionary new content and discover technologies that will shape tomorrow
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/pages/AdvancedAnalyticsDashboard2026" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start with Analytics
          </a>
          <a href="/pages/BiotechRevolution2026" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Explore Biotech
          </a>
          <a href="/pages/SpaceTechInnovation2026" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Journey to Space
          </a>
        </div>
      </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-cc9d
    </div>
=======
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
    </motion.section>
>>>>>>> cursor/create-and-deploy-new-content-abae
  );
};

export default NewContentShowcase2026;