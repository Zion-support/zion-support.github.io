<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> origin/cursor/create-and-deploy-new-content-42b7

const NewContentShowcase2026: React.FC = () => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
<<<<<<< HEAD
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
      id: 'ai-transformation',
      title: 'AI Transformation 2026',
      icon: '🧠',
      description: 'Advanced AI systems with synthetic consciousness and quantum enhancement',
      link: '/pages/AdvancedAITransformation2026',
      color: 'from-purple-600 to-pink-600',
      features: ['Synthetic Consciousness', 'Quantum-Enhanced AI', 'Autonomous Agents']
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Revolution 2025',
      icon: '⚡',
      description: 'Revolutionary quantum computing that solves impossible problems',
      link: '/pages/QuantumComputingRevolution2025',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Supremacy', 'Quantum Cryptography', 'Molecular Simulation']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface 2025',
      icon: '🧬',
      description: 'Direct brain-computer communication and thought-controlled devices',
      link: '/pages/NeuralInterfaceRevolution2025',
      color: 'from-emerald-600 to-teal-600',
      features: ['Non-Invasive BCI', 'Neural Implants', 'Optical Interfaces']
>>>>>>> origin/cursor/create-and-deploy-new-content-42b7
    }
  ];

  const additionalContent = [
    {
      title: 'Synthetic Intelligence 2026',
      icon: '🤖',
      description: 'AI agents with synthetic consciousness and autonomous capabilities',
      link: '/pages/SyntheticIntelligence2026',
      color: 'from-violet-600 to-purple-600'
    },
    {
      title: 'Advanced Quantum Computing 2026',
      icon: '⚛️',
      description: 'Next-generation quantum processors with 1000+ logical qubits',
      link: '/pages/AdvancedQuantumComputing2026',
      color: 'from-indigo-600 to-cyan-600'
    },
    {
      title: 'Neural Interface Revolution 2026',
      icon: '🧠',
      description: 'Revolutionary brain-computer interfaces with thought control',
      link: '/pages/NeuralInterfaceRevolution2026',
      color: 'from-teal-600 to-emerald-600'
    },
    {
      title: 'Revolutionary Tech Blog 2026',
      icon: '📚',
      description: 'Comprehensive insights into cutting-edge technology trends',
      link: '/pages/RevolutionaryTechBlog2026',
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 BREAKTHROUGH 2026 • REVOLUTIONARY NEW CONTENT
>>>>>>> origin/cursor/create-and-deploy-new-content-42b7
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">🌟 Revolutionary Technology Showcase 2026</h2>
        <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
          Experience the future with our groundbreaking new content covering the most advanced technologies 
          that are reshaping industries and creating new possibilities.
        </p>
      </div>

<<<<<<< HEAD
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
            </motion.div>
          ))}
=======
      {/* Interactive Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {contentTabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span className="text-2xl mr-2">{tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-6">{contentTabs[activeTab].icon}</div>
                <h3 className="text-4xl font-bold text-white mb-4">{contentTabs[activeTab].title}</h3>
                <p className="text-xl text-purple-200 mb-6">{contentTabs[activeTab].description}</p>
                <div className="space-y-2 mb-8">
                  {contentTabs[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-purple-200">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={contentTabs[activeTab].link}
                  className={`inline-block bg-gradient-to-r ${contentTabs[activeTab].color} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300`}
                >
                  Explore {contentTabs[activeTab].title} →
                </a>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <h4 className="text-2xl font-bold text-white mb-4">Key Highlights</h4>
                <ul className="space-y-3 text-purple-200">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400 mt-1">✨</span>
                    <span>Cutting-edge technology implementation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400 mt-1">🚀</span>
                    <span>Revolutionary breakthrough capabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400 mt-1">🔬</span>
                    <span>Advanced research and development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400 mt-1">💡</span>
                    <span>Innovative problem-solving approaches</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Additional Content Grid */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white text-center mb-8">🌟 More Revolutionary Content</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalContent.map((content, index) => (
            <motion.div
              key={content.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{content.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3 text-center">{content.title}</h4>
              <p className="text-purple-200 text-sm mb-4 text-center">{content.description}</p>
              <a
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.color} text-white py-2 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300`}
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

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
>>>>>>> origin/cursor/create-and-deploy-new-content-42b7
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
    </div>
  );
};

export default NewContentShowcase2026;