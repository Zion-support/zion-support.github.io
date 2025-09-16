import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EnhancedContentShowcase2025: React.FC = () => {
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
    },
    {
      id: 5,
      title: "AI Innovation Hub 2025",
      description: "Central hub for all AI innovations and breakthrough technologies",
      category: 'ai',
      image: "🧠",
      gradient: "from-violet-600 to-purple-600",
      features: ["Innovation Center", "AI Research", "Breakthrough Tech", "Future Solutions"],
      link: "/pages/AIInnovationHub2025",
      isNew: false,
      rating: 4.7
    },
    {
      id: 6,
      title: "Ultimate Tech Revolution 2025",
      description: "The ultimate collection of revolutionary technologies and innovations",
      category: 'tech',
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Revolutionary Tech", "Ultimate Innovation", "Future Vision", "Breakthrough Solutions"],
      link: "/pages/UltimateTechRevolution2025",
      isNew: false,
      rating: 4.8
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 ENHANCED CONTENT SHOWCASE • 2025
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">
          Revolutionary Technology Content
        </h2>
        <p className="text-xl text-purple-200 max-w-4xl mx-auto">
          Explore our comprehensive collection of cutting-edge technology content featuring AI, quantum computing, neural interfaces, and more.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-semibold">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContent.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="text-5xl">{item.image}</div>
              <div className="flex items-center space-x-2">
                {item.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
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
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {item.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs"
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
              <button className="border border-gray-600 text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                ⚡
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Explore the Future?
          </h3>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Join thousands of innovators already using our revolutionary technology content to drive their success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              View All Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2025;