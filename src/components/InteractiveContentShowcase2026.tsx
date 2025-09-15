import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const contentItems = [
    {
      id: 'ai-transformation',
      title: 'Advanced AI Transformation 2026',
      description: 'Revolutionary autonomous systems and synthetic intelligence platforms',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/AdvancedAITransformation2026',
      features: ['Synthetic Intelligence', 'Quantum-Enhanced AI', 'Autonomous Agents'],
      stats: { users: '1M+', efficiency: '400%', accuracy: '99.7%' }
    },
    {
      id: 'nextgen-showcase',
      title: 'Next-Gen Tech Showcase',
      description: 'Interactive demos of cutting-edge technologies across multiple domains',
      icon: '🌟',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/NextGenTechShowcase2026',
      features: ['AI Technology', 'Quantum Computing', 'Neural Interfaces'],
      stats: { patents: '500+', uptime: '99.9%', performance: '10x' }
    },
    {
      id: 'ultimate-showcase',
      title: 'Ultimate Tech Showcase',
      description: 'The most comprehensive technology experience with live demos',
      icon: '🚀',
      gradient: 'from-yellow-500 to-orange-500',
      link: '/pages/UltimateTechShowcase2026',
      features: ['Interactive Demos', 'Live Simulations', 'Breakthrough Innovations'],
      stats: { countries: '50+', value: '$2B+', impact: 'Global' }
    },
    {
      id: 'quantum-neural',
      title: 'Quantum-Neural Fusion',
      description: 'Revolutionary fusion of quantum computing and neural interfaces',
      icon: '⚡',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/QuantumNeuralFusion2026',
      features: ['Quantum Processing', 'Neural Networks', 'Exponential Speed'],
      stats: { speed: '1000x', accuracy: '99.9%', innovation: 'Breakthrough' }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % contentItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6">
              🚀 REVOLUTIONARY CONTENT 2026
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Interactive Content Showcase
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Experience our most advanced content with interactive features, 
              live demos, and breakthrough innovations that are reshaping the future
            </p>
          </motion.div>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Selector */}
          <div className="space-y-6">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeContent === index
                    ? 'border-purple-400 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:shadow-md'
                }`}
                onClick={() => setActiveContent(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${contentItems[activeContent].gradient} rounded-2xl p-8 text-white relative overflow-hidden`}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="text-8xl mb-4 animate-bounce">
                      {contentItems[activeContent].icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      {contentItems[activeContent].title}
                    </h3>
                    <p className="text-xl opacity-90 mb-6">
                      {contentItems[activeContent].description}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(contentItems[activeContent].stats).map(([key, value], idx) => (
                      <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold">{value}</div>
                        <div className="text-sm opacity-80 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {contentItems[activeContent].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="text-center">
                    <a
                      href={contentItems[activeContent].link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:shadow-lg"
                    >
                      Explore Content →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Promotional Cards */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🌟 More Revolutionary Content
            </h3>
            <p className="text-xl text-gray-600">
              Discover our complete portfolio of breakthrough technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Neural Interface Revolution', icon: '🧬', link: '/pages/NeuralInterfaceRevolution2026' },
              { title: 'Quantum Computing Revolution', icon: '⚡', link: '/pages/QuantumComputingRevolution2026' },
              { title: 'Comprehensive Tech Insights', icon: '🔍', link: '/pages/ComprehensiveTechInsights2026' },
              { title: 'Revolutionary Tech Blog', icon: '📚', link: '/pages/RevolutionaryTechBlog2026' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => window.location.href = item.link}
              >
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 text-center">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-8 text-white text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-pulse">🎉</span>
            <h3 className="text-3xl font-bold">LIMITED TIME OFFER</h3>
            <span className="text-3xl animate-pulse">🎉</span>
          </div>
          <p className="text-xl mb-6">
            Get exclusive access to our premium content and interactive demos. 
            Free consultation with our technology experts included!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-all duration-300 font-semibold text-lg">
              Claim Free Access
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;