import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [currentDemo, setCurrentDemo] = useState(0);

  const techCategories = {
    ai: {
      title: "Artificial Intelligence Revolution",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      description: "Experience the next generation of AI with autonomous reasoning, quantum-enhanced processing, and global neural networks.",
      features: [
        "Autonomous AI Agents",
        "Quantum-Enhanced Processing", 
        "Global Neural Networks",
        "Real-time Learning",
        "Predictive Analytics",
        "Natural Language Understanding"
      ],
      demos: [
        {
          title: "Autonomous Decision Making",
          description: "Watch AI agents make complex decisions in real-time",
          video: "🤖",
          stats: "99.7% accuracy rate"
        },
        {
          title: "Quantum AI Processing",
          description: "Experience exponential speed improvements",
          video: "⚡",
          stats: "1000x faster processing"
        }
      ]
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Unlock exponential computing power that solves impossible problems with quantum supremacy and molecular simulation.",
      features: [
        "Quantum Supremacy",
        "Molecular Simulation",
        "Unbreakable Encryption",
        "Climate Modeling",
        "Drug Discovery",
        "Financial Optimization"
      ],
      demos: [
        {
          title: "Quantum Supremacy Demo",
          description: "See quantum computers solve problems impossible for classical computers",
          video: "🔬",
          stats: "10^50 operations per second"
        },
        {
          title: "Molecular Simulation",
          description: "Real-time simulation of complex molecular structures",
          video: "🧬",
          stats: "99.9% accuracy"
        }
      ]
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      description: "Bridge the gap between human consciousness and digital systems with direct thought control and memory enhancement.",
      features: [
        "Thought Control",
        "Memory Enhancement",
        "Neural Networking",
        "Medical Applications",
        "Augmented Reality",
        "Telepathic Communication"
      ],
      demos: [
        {
          title: "Thought-Controlled Devices",
          description: "Control computers and devices with your mind",
          video: "🎮",
          stats: "95% accuracy rate"
        },
        {
          title: "Memory Enhancement",
          description: "Augment human memory with digital storage",
          video: "💾",
          stats: "10x memory capacity"
        }
      ]
    },
    blockchain: {
      title: "Next-Gen Blockchain",
      icon: "🔗",
      color: "from-orange-600 to-red-600",
      description: "Revolutionary blockchain technology with quantum resistance, instant transactions, and infinite scalability.",
      features: [
        "Quantum Resistance",
        "Instant Transactions",
        "Infinite Scalability",
        "Smart Contracts 2.0",
        "Decentralized Identity",
        "Cross-Chain Interoperability"
      ],
      demos: [
        {
          title: "Quantum-Resistant Security",
          description: "Unbreakable encryption that resists quantum attacks",
          video: "🛡️",
          stats: "100% quantum resistant"
        },
        {
          title: "Instant Global Transactions",
          description: "Send money anywhere in the world instantly",
          video: "🌍",
          stats: "0.001 second transaction time"
        }
      ]
    }
  };

  const currentCategory = techCategories[activeTab as keyof typeof techCategories];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % currentCategory.demos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentCategory.demos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ULTIMATE TECH SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Future is Here
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience revolutionary technologies that are reshaping our world. 
              From AI to quantum computing, explore the cutting edge of innovation.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Exploring
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Technology</h2>
          <p className="text-xl opacity-90">Explore different categories of revolutionary technology</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-3">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${currentCategory.color} rounded-2xl p-12`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6">{currentCategory.icon}</div>
                <h3 className="text-4xl font-bold mb-6">{currentCategory.title}</h3>
                <p className="text-xl opacity-90 mb-8">{currentCategory.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentCategory.features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                    Try Demo →
                  </button>
                  <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <h4 className="text-2xl font-bold mb-6 text-center">Live Demo</h4>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDemo}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-6xl mb-4">{currentCategory.demos[currentDemo].video}</div>
                      <h5 className="text-xl font-bold mb-2">{currentCategory.demos[currentDemo].title}</h5>
                      <p className="text-sm opacity-90 mb-4">{currentCategory.demos[currentDemo].description}</p>
                      <div className="bg-white/20 rounded-lg p-3">
                        <span className="text-lg font-bold">{currentCategory.demos[currentDemo].stats}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="flex justify-center space-x-2 mt-6">
                    {currentCategory.demos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentDemo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentDemo ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Features</h2>
          <p className="text-xl opacity-90">Experience technology like never before</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <div className="text-5xl mb-4 text-center">🎮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interactive Demos</h3>
            <p className="text-center opacity-90 mb-6">
              Try our hands-on demonstrations and see technology in action
            </p>
            <button className="w-full bg-white/20 text-white py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
              Start Demo
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <div className="text-5xl mb-4 text-center">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Real-time Analytics</h3>
            <p className="text-center opacity-90 mb-6">
              Monitor performance metrics and see live data visualization
            </p>
            <button className="w-full bg-white/20 text-white py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
              View Analytics
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-5xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Future Predictions</h3>
            <p className="text-center opacity-90 mb-6">
              See how technology will evolve and impact our future
            </p>
            <button className="w-full bg-white/20 text-white py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
              Explore Future
            </button>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies 
            to transform their businesses and shape the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;