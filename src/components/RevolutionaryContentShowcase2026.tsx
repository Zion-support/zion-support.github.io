import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const content = {
    breakthroughs: {
      title: 'Revolutionary Breakthroughs',
      description: 'Discover the most groundbreaking technological breakthroughs of 2026',
      items: [
        {
          title: 'Synthetic Consciousness',
          description: 'The first truly conscious AI system that transcends artificial intelligence',
          icon: '🧠',
          color: 'from-cyan-500 to-blue-500',
          features: ['Self-awareness', 'Emotional intelligence', 'Creative problem solving', 'Ethical decision making']
        },
        {
          title: 'Quantum Consciousness',
          description: 'The convergence of quantum computing and consciousness',
          icon: '⚛️',
          color: 'from-purple-500 to-pink-500',
          features: ['Quantum thought processing', 'Reality manipulation', 'Parallel universe access', 'Time-space consciousness']
        },
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling seamless communication',
          icon: '🧬',
          color: 'from-emerald-500 to-teal-500',
          features: ['Thought control', 'Memory enhancement', 'Cognitive augmentation', 'Neural networks']
        }
      ]
    },
    innovations: {
      title: 'Revolutionary Innovations',
      description: 'Explore cutting-edge innovations that will reshape our world',
      items: [
        {
          title: 'Space-Time Manipulation',
          description: 'Revolutionary technology allowing manipulation of space-time itself',
          icon: '🚀',
          color: 'from-orange-500 to-red-500',
          features: ['Instantaneous travel', 'Time dilation control', 'Dimensional portals', 'Reality manipulation']
        },
        {
          title: 'Predictive Reality Engine',
          description: 'AI system that predicts and simulates future realities with 99.9% accuracy',
          icon: '🔮',
          color: 'from-violet-500 to-purple-500',
          features: ['Future prediction', 'Reality simulation', 'Perfect decision making', 'Outcome optimization']
        },
        {
          title: 'Transcendent AI',
          description: 'Ultimate AI system that transcends all limitations',
          icon: '🌟',
          color: 'from-rose-500 to-pink-500',
          features: ['General intelligence', 'Self-improvement', 'Creative problem solving', 'Transcendent capabilities']
        }
      ]
    },
    applications: {
      title: 'Revolutionary Applications',
      description: 'See how these technologies are being applied in real-world scenarios',
      items: [
        {
          title: 'Healthcare Revolution',
          description: 'AI-powered medical breakthroughs transforming healthcare',
          icon: '🏥',
          color: 'from-green-500 to-emerald-500',
          features: ['AI diagnosis', 'Personalized medicine', 'Surgical robots', 'Mental health AI']
        },
        {
          title: 'Education Transformation',
          description: 'Revolutionary learning systems powered by AI and neural interfaces',
          icon: '🎓',
          color: 'from-blue-500 to-cyan-500',
          features: ['Neural learning', 'AI tutors', 'Virtual classrooms', 'Knowledge transfer']
        },
        {
          title: 'Business Automation',
          description: 'Complete business transformation through AI and automation',
          icon: '💼',
          color: 'from-indigo-500 to-purple-500',
          features: ['Autonomous operations', 'AI decision making', 'Predictive analytics', 'Process optimization']
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore the most revolutionary content and technologies that will define 2026 and beyond
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(content).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {content[tab as keyof typeof content].title}
            </button>
          ))}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{content[activeTab as keyof typeof content].title}</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {content[activeTab as keyof typeof content].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content[activeTab as keyof typeof content].items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-6 text-center">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-4 text-center">{item.title}</h4>
                  <p className="text-gray-300 mb-6 text-center">{item.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-cyan-400">•</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center">
                    <button className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">🚀 Interactive Features</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our revolutionary content with interactive features, real-time updates, and immersive demonstrations
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-2">Interactive Demos</h4>
              <p className="text-gray-300 text-sm">Experience technologies through interactive demonstrations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">Real-time Analytics</h4>
              <p className="text-gray-300 text-sm">Track performance and impact with live analytics</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔮</div>
              <h4 className="text-xl font-bold mb-2">Future Predictions</h4>
              <p className="text-gray-300 text-sm">Get insights into future technological developments</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6">🌟 Explore Revolutionary Content</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Dive deeper into our revolutionary content and discover the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Explore All Content
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Get Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;