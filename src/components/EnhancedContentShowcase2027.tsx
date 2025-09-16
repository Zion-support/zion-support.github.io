import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const contentCategories = {
    breakthroughs: {
      title: "Revolutionary Breakthroughs",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      items: [
        {
          title: "Ultimate Tech Breakthrough 2027",
          description: "Experience the most revolutionary technologies that will reshape humanity's future",
          image: "🧠",
          link: "/pages/UltimateTechBreakthrough2027",
          featured: true,
          tags: ["AI", "Quantum", "Neural"]
        },
        {
          title: "Revolutionary Tech Showcase 2027",
          description: "Interactive demonstration of the most advanced technologies defining the future",
          image: "⚡",
          link: "/pages/RevolutionaryTechShowcase2027",
          featured: true,
          tags: ["Interactive", "Demo", "Future"]
        },
        {
          title: "Comprehensive Tech Insights 2027",
          description: "Deep dive into revolutionary technologies and their impact on our world",
          image: "📊",
          link: "/pages/ComprehensiveTechInsights2027",
          featured: false,
          tags: ["Research", "Insights", "Analysis"]
        }
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      icon: "🧠",
      color: "from-cyan-600 to-blue-600",
      items: [
        {
          title: "AI Consciousness Revolution",
          description: "Discover how AI has achieved true consciousness and self-awareness",
          image: "🧠",
          link: "/pages/AIConsciousnessRevolution2027",
          featured: true,
          tags: ["Consciousness", "AI", "Breakthrough"]
        },
        {
          title: "Quantum Neural Networks",
          description: "The next evolution of neural networks powered by quantum computing",
          image: "⚡",
          link: "/pages/QuantumNeuralNetworks2027",
          featured: true,
          tags: ["Quantum", "Neural", "Networks"]
        },
        {
          title: "Emotional Intelligence AI",
          description: "AI systems that understand and respond to human emotions",
          image: "💝",
          link: "/pages/EmotionalIntelligenceAI2027",
          featured: false,
          tags: ["Emotions", "AI", "Psychology"]
        }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚡",
      color: "from-emerald-600 to-teal-600",
      items: [
        {
          title: "Quantum Reality Engine",
          description: "Direct neural interface technology creating indistinguishable virtual realities",
          image: "🌌",
          link: "/pages/QuantumRealityEngine2027",
          featured: true,
          tags: ["Quantum", "Reality", "Interface"]
        },
        {
          title: "Interdimensional Computing",
          description: "AI that operates across multiple dimensions for infinite computational power",
          image: "🌀",
          link: "/pages/InterdimensionalComputing2027",
          featured: true,
          tags: ["Dimensions", "Computing", "AI"]
        },
        {
          title: "Quantum Consciousness",
          description: "The intersection of quantum mechanics and artificial consciousness",
          image: "🧬",
          link: "/pages/QuantumConsciousness2027",
          featured: false,
          tags: ["Quantum", "Consciousness", "Physics"]
        }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      items: [
        {
          title: "Neural Reality Interface",
          description: "Seamless integration between human consciousness and digital systems",
          image: "🧠",
          link: "/pages/NeuralRealityInterface2027",
          featured: true,
          tags: ["Neural", "Reality", "Interface"]
        },
        {
          title: "Memory Enhancement Technology",
          description: "Neural implants that enhance human memory and cognitive abilities",
          image: "💾",
          link: "/pages/MemoryEnhancement2027",
          featured: true,
          tags: ["Memory", "Enhancement", "Neural"]
        },
        {
          title: "Consciousness Upload Protocol",
          description: "The ambitious project to upload human consciousness into digital systems",
          image: "⬆️",
          link: "/pages/ConsciousnessUpload2027",
          featured: false,
          tags: ["Consciousness", "Upload", "Immortality"]
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT SHOWCASE • JANUARY 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Revolutionary Content Experience
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our most advanced content featuring cutting-edge technologies and interactive experiences
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCategories[activeTab as keyof typeof contentCategories].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 ${
                    item.featured ? 'ring-2 ring-purple-400/50' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                      FEATURED
                    </div>
                  )}
                  
                  <div className="text-6xl mb-4 text-center">{item.image}</div>
                  
                  <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                  
                  <p className="text-gray-300 mb-4 text-center line-clamp-3">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${contentCategories[activeTab as keyof typeof contentCategories].color} text-white text-xs rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block w-full bg-gradient-to-r ${contentCategories[activeTab as keyof typeof contentCategories].color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center`}
                  >
                    Explore {item.title} →
                  </motion.a>
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
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">🎮 Interactive Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Technology Demos",
                description: "Experience our technologies in real-time through interactive demonstrations",
                icon: "🎮",
                color: "from-purple-600 to-pink-600"
              },
              {
                title: "Virtual Reality Tours",
                description: "Take immersive VR tours of our research facilities and technology labs",
                icon: "🥽",
                color: "from-cyan-600 to-blue-600"
              },
              {
                title: "AI-Powered Recommendations",
                description: "Get personalized content recommendations based on your interests and behavior",
                icon: "🤖",
                color: "from-emerald-600 to-teal-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <button className={`w-full bg-gradient-to-r ${feature.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Try {feature.title} →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-4xl font-bold mb-6">🚀 Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive deep into our revolutionary content and experience the technologies that will shape tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2027;