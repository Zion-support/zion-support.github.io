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
      id: 'synthetic-ai',
      title: 'Synthetic Intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      description: 'The next evolution of artificial intelligence',
      features: [
        'Synthetic Neural Networks',
        'Creative Synthesis Engine',
        'Predictive Consciousness',
        'Human-AI Collaboration'
      ]
    },
    {
      id: 'quantum-neural',
      title: 'Quantum-Neural Fusion',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      description: 'Where quantum computing meets neural networks',
      features: [
        'Quantum Superposition Processing',
        'Neural Quantum States',
        'Quantum Entanglement Networks',
        'Quantum Optimization'
      ]
    },
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      icon: '🤖',
      color: 'from-emerald-600 to-teal-600',
      description: 'Transforming industries with advanced AI',
      features: [
        'Autonomous AI Agents',
        'Edge AI Computing',
        'Generative AI 2.0',
        'Intelligent Automation'
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface',
      icon: '🧬',
      color: 'from-orange-600 to-red-600',
      description: 'Bridge mind and machine',
      features: [
        'Non-Invasive BCI',
        'Thought Control',
        'Neural Feedback',
        'Mind-Machine Integration'
      ]
    }
  ];

  const stats = [
    { label: 'Processing Power', value: '10^18', unit: 'ops/sec', color: 'text-cyan-400' },
    { label: 'Accuracy Rate', value: '99.99%', unit: '', color: 'text-blue-400' },
    { label: 'Parallel States', value: '∞', unit: '', color: 'text-purple-400' },
    { label: 'Latency', value: '0ms', unit: '', color: 'text-pink-400' }
  ];

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ENHANCED SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Showcase
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of technology with our cutting-edge innovations in AI, Quantum Computing, and Neural Interfaces
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Explore Our Technologies</h2>
          <p className="text-xl opacity-80">Click on any technology to discover its capabilities</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentTabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
            </motion.button>
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
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">{contentTabs[activeTab].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{contentTabs[activeTab].title}</h3>
                    <p className="text-xl opacity-80">{contentTabs[activeTab].description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                  {contentTabs[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className={`bg-gradient-to-r ${contentTabs[activeTab].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                    Learn More About {contentTabs[activeTab].title}
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className={`bg-gradient-to-br ${contentTabs[activeTab].color} rounded-2xl p-8 text-center`}>
                  <div className="text-8xl mb-4">{contentTabs[activeTab].icon}</div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                  <p className="text-lg opacity-90 mb-6">
                    Experience {contentTabs[activeTab].title} in action with our interactive demonstration
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    Launch Demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Performance Stats */}
      <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Performance Metrics</h2>
            <p className="text-xl opacity-80">Unprecedented computational capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-purple-200">{stat.unit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
          <p className="text-xl opacity-80">See how our technologies are transforming industries</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
            <p className="text-purple-100 mb-6">
              Revolutionizing medical diagnosis, drug discovery, and personalized treatment with AI and quantum computing.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• 95% accuracy in early disease detection</li>
              <li>• 60% faster drug development</li>
              <li>• Personalized treatment optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4">Finance</h3>
            <p className="text-cyan-100 mb-6">
              Transforming financial markets with quantum-enhanced risk assessment and AI-powered trading algorithms.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• 99.9% accurate market predictions</li>
              <li>• Real-time risk optimization</li>
              <li>• Quantum-secure transactions</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4">Creative Industries</h3>
            <p className="text-emerald-100 mb-6">
              Unleashing creativity with AI-generated content, art, and entertainment that rivals human imagination.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• AI-generated movies and music</li>
              <li>• Interactive storytelling</li>
              <li>• Real-time creative collaboration</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already using our revolutionary technologies to transform their operations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;