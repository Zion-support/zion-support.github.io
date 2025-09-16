import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Conscious AI Systems",
      description: "Self-aware AI that thinks, learns, and creates like humans",
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing",
      description: "Revolutionary processing power that solves impossible problems",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer connection for enhanced capabilities",
      icon: "🧬",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Interdimensional Tech",
      description: "Access computing resources across multiple dimensions",
      icon: "🌌",
      color: "from-orange-500 to-red-500"
    }
  ];

  const contentPages = [
    {
      title: "Revolutionary Tech Showcase",
      description: "Experience the future of technology",
      link: "/pages/RevolutionaryTechShowcase2025",
      badge: "NEW"
    },
    {
      title: "AI Solutions Comprehensive",
      description: "Complete AI transformation suite",
      link: "/pages/AISolutionsComprehensive2025",
      badge: "HOT"
    },
    {
      title: "Ultimate Tech Breakthrough",
      description: "Most revolutionary innovations ever",
      link: "/pages/UltimateTechBreakthrough2025",
      badge: "BREAKTHROUGH"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 REVOLUTIONARY CONTENT • 2025
          </motion.div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover groundbreaking technologies that will reshape the future of humanity
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">🌟 Featured Technology</h3>
              <p className="text-xl opacity-90">Experience the cutting edge of innovation</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-8xl mb-6">{features[currentFeature].icon}</div>
                  <h4 className="text-3xl font-bold mb-4">{features[currentFeature].title}</h4>
                  <p className="text-xl opacity-90">{features[currentFeature].description}</p>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                      currentFeature === index
                        ? `bg-gradient-to-r ${feature.color} text-white`
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{feature.icon}</span>
                      <div>
                        <div className="font-semibold">{feature.title}</div>
                        <div className="text-sm opacity-75">{feature.description}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Pages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contentPages.map((page, index) => (
            <motion.a
              key={index}
              href={page.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                  {page.badge}
                </span>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  {page.title}
                </h4>
                <p className="text-gray-300 mb-6">{page.description}</p>
                <div className="inline-flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  Explore Content →
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">2025</div>
            <div className="text-white/80">Revolutionary Year</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-white/80">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-white/80">Innovation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">🚀</div>
            <div className="text-white/80">Future Ready</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8">
              Explore our revolutionary content and discover technologies that will change everything
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pages/RevolutionaryTechShowcase2025"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Exploring →
              </a>
              <a
                href="/pages/UltimateTechBreakthrough2025"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Breakthroughs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;