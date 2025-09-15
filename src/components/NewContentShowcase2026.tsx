import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
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
      </div>
    </div>
  );
};

export default NewContentShowcase2026;