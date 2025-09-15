import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentTabs = [
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      content: {
        title: 'Revolutionary AI Platform',
        description: 'Experience the next evolution of artificial intelligence with our breakthrough synthetic intelligence platform.',
        features: [
          'Quantum Neural Networks with exponential processing power',
          'Autonomous decision-making systems that adapt in real-time',
          'Multi-domain intelligence across scientific research and creative arts',
          'Advanced predictive analytics with unprecedented accuracy',
          'Seamless human-AI collaboration interfaces',
          'Built-in ethical AI framework for responsible deployment'
        ],
        metrics: [
          { label: 'Processing Speed', value: '10^15x faster' },
          { label: 'Learning Accuracy', value: '99.97%' },
          { label: 'Energy Efficiency', value: '90% less consumption' }
        ]
      }
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      content: {
        title: 'Quantum Computing Breakthrough',
        description: 'The world\'s first quantum-neural hybrid system combining quantum computing with advanced neural networks.',
        features: [
          'Quantum superposition processing for multiple neural states',
          'Entangled neural networks with instant information transfer',
          'Quantum tunneling learning for impossible solution spaces',
          'Coherent state optimization for efficient learning',
          '1,000,000+ logical qubits with error correction',
          '99.99% quantum gate operation accuracy'
        ],
        metrics: [
          { label: 'Qubit Count', value: '1M+' },
          { label: 'Coherence Time', value: '100+ seconds' },
          { label: 'Gate Fidelity', value: '99.99%' }
        ]
      }
    },
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      icon: '🤖',
      color: 'from-green-600 to-emerald-600',
      content: {
        title: 'Autonomous AI Systems',
        description: 'Discover how artificial intelligence is reshaping industries and creating new opportunities in 2025.',
        features: [
          'Autonomous AI agents for business process automation',
          'Edge AI computing for real-time decision making',
          'Generative AI 2.0 for creative content production',
          'Advanced computer vision and natural language processing',
          'Self-evolving algorithms that improve without human intervention',
          'Cross-industry AI solutions for healthcare, finance, and manufacturing'
        ],
        metrics: [
          { label: 'Efficiency Gain', value: '300%' },
          { label: 'Cost Reduction', value: '40%' },
          { label: 'Accuracy', value: '99.9%' }
        ]
      }
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-orange-600 to-red-600',
      content: {
        title: 'Mind-Machine Connection',
        description: 'Bridge the gap between mind and machine with direct neural interfaces and brain-computer communication.',
        features: [
          'Non-invasive brain-computer interfaces (BCI)',
          'Thought-controlled device operation',
          'Neural feedback systems for enhanced learning',
          'Direct neural data processing and analysis',
          'Mind-to-mind communication protocols',
          'Neural pattern recognition and interpretation'
        ],
        metrics: [
          { label: 'Response Time', value: '< 100ms' },
          { label: 'Accuracy', value: '95%' },
          { label: 'Safety', value: '100%' }
        ]
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Enhanced Technology Showcase
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through an interactive, immersive experience
          </p>
        </div>
      </motion.div>

      {/* Interactive Tabs */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Tab Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {contentTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="text-2xl">{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Content Description */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <h2 className="text-4xl font-bold mb-4">{contentTabs[activeTab].content.title}</h2>
                    <p className="text-xl text-gray-300 mb-6">{contentTabs[activeTab].content.description}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                    {contentTabs[activeTab].content.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{feature}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Metrics and Visual */}
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h3>
                    <div className="space-y-4">
                      {contentTabs[activeTab].content.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0"
                        >
                          <span className="text-gray-300">{metric.label}</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {metric.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0 }}
                    className={`bg-gradient-to-br ${contentTabs[activeTab].color} rounded-xl p-8 text-center`}
                  >
                    <div className="text-6xl mb-4">{contentTabs[activeTab].icon}</div>
                    <h3 className="text-2xl font-bold mb-2">Interactive Demo</h3>
                    <p className="text-lg opacity-90 mb-6">
                      Experience this technology in action
                    </p>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                      Launch Demo →
                    </button>
                  </motion.div>
                </div>

                <a
                  href={contentItems[currentIndex].link}
                  className={`inline-block bg-gradient-to-r ${contentItems[currentIndex].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore {contentItems[currentIndex].title} →
                </a>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${contentItems[currentIndex].gradient} rounded-2xl p-8 text-center`}>
                  <div className="text-8xl mb-4">{contentItems[currentIndex].image}</div>
                  <div className="text-2xl font-bold mb-2">{contentItems[currentIndex].title}</div>
                  <div className="text-lg opacity-90">2025 Innovation</div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Additional Interactive Features */}
      <div className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Interactive Features</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore additional interactive elements and demonstrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Virtual Reality Demo',
                description: 'Experience our technologies in immersive VR environments',
                icon: '🥽',
                action: 'Enter VR'
              },
              {
                title: 'Live Data Visualization',
                description: 'Watch real-time data processing and analysis',
                icon: '📊',
                action: 'View Live Data'
              },
              {
                title: 'AI Chat Assistant',
                description: 'Interact with our AI systems through natural conversation',
                icon: '💬',
                action: 'Start Chat'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  {feature.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already transforming their operations with our revolutionary technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;