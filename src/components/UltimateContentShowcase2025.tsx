import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai', name: 'AI Services', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'tech', name: 'Tech Showcase', icon: '🚀' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary AI Services 2025",
      description: "Next-generation AI with autonomous agents, quantum-enhanced computing, and conscious AI systems",
      category: 'ai',
      image: "🤖",
      gradient: "from-purple-600 to-pink-600",
      features: ["Autonomous Agents", "Quantum AI", "Conscious Systems", "Neural Interfaces"],
      link: "/pages/RevolutionaryAIServices2025",
      isNew: true,
      rating: 5.0
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough 2025",
      description: "Interactive quantum demos and real-world applications solving impossible problems",
      category: 'quantum',
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum Supremacy", "Cryptography", "Machine Learning", "Optimization"],
      link: "/pages/QuantumComputingBreakthrough2025",
      isNew: true,
      rating: 4.9
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2025",
      description: "Direct brain-computer interfaces enabling seamless mind-AI communication",
      category: 'neural',
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Brain-Computer Interface", "Thought Control", "Neural Feedback", "Mind-AI Fusion"],
      link: "/pages/NeuralInterfaceRevolution2025",
      isNew: true,
      rating: 4.8
    },
    {
      id: 4,
      title: "Revolutionary Tech Showcase 2025",
      description: "Comprehensive showcase of cutting-edge technologies reshaping the future",
      category: 'tech',
      image: "🚀",
      gradient: "from-orange-600 to-red-600",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech", "Future Vision"],
      link: "/pages/RevolutionaryTechShowcase2025",
      isNew: true,
      rating: 4.9
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Ultimate Content Showcase
          </h2>
          <p className="text-2xl text-indigo-200 max-w-4xl mx-auto">
            Discover our most comprehensive collection of revolutionary technology content featuring AI, quantum computing, neural interfaces, and more.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-indigo-200 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="font-semibold text-lg">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl">{item.image}</div>
                <div className="flex items-center space-x-2">
                  {item.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white font-semibold">{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-indigo-200 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-indigo-700/50 text-indigo-200 px-3 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <a
                  href={item.link}
                  className={`flex-1 bg-gradient-to-r ${item.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
                >
                  Explore Now
                </a>
                <button className="border border-indigo-400 text-indigo-300 px-4 py-3 rounded-lg hover:bg-indigo-700/50 transition-all duration-300">
                  ⚡
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/30">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Future?
            </h3>
            <p className="text-indigo-200 mb-8 max-w-3xl mx-auto text-xl">
              Join thousands of innovators already using our revolutionary technology content to drive their success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
                Start Exploring
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-xl">
                View All Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;