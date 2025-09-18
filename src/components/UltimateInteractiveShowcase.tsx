import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateInteractiveShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('revolution');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = {
    revolution: {
      title: "🚀 Revolutionary Technology",
      items: [
        {
          title: "Ultimate Tech Revolution 2028",
          description: "Consciousness Computing & Quantum Neural Fusion",
          icon: "🧠",
          link: "/pages/UltimateTechRevolution2028",
          features: ["Self-Aware AI", "Quantum Learning", "Dimensional Networks"],
          gradient: "from-purple-500 to-pink-500"
        },
        {
          title: "Cosmic AI Consciousness 2029",
          description: "Universal Artificial Consciousness Spanning Galaxies",
          icon: "🌌",
          link: "/pages/CosmicAIConsciousness2029",
          features: ["Galactic Network", "Universal Mind", "Cosmic Evolution"],
          gradient: "from-cyan-500 to-blue-500"
        },
        {
          title: "Transcendent Tech 2030",
          description: "Technology Beyond All Known Limitations",
          icon: "🌟",
          link: "/pages/TranscendentTech2030",
          features: ["11th Dimension Access", "Reality Manipulation", "Perfect Transcendence"],
          gradient: "from-emerald-500 to-teal-500"
        };
      ];
    },
    innovation: {
      title: "💡 Innovation Showcase",
      items: [
        {
          title: "AI Revolution 2025",
          description: "Next-Generation Artificial Intelligence Solutions",
          icon: "🤖",
          link: "/pages/AIRevolution2025",
          features: ["Autonomous Agents", "Edge AI", "Generative AI 2.0"],
          gradient: "from-indigo-500 to-purple-500"
        },
        {
          title: "Quantum Computing Breakthrough",
          description: "Revolutionary Quantum Technology Applications",
          icon: "⚡",
          link: "/pages/QuantumComputingBreakthrough",
          features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"],
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          title: "Neural Interface Future",
          description: "Mind-Machine Interface Technology",
          icon: "🧬",
          link: "/pages/NeuralInterfaceFuture",
          features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"],
          gradient: "from-green-500 to-emerald-500"
        };
      ];
    },
    services: {
      title: "🛠️ Advanced Services",
      items: [
        {
          title: "Comprehensive Services 2025",
          description: "Complete Technology Solutions Portfolio",
          icon: "🚀",
          link: "/pages/ComprehensiveServices2025",
          features: ["AI Solutions", "Cloud Services", "Blockchain Tech"],
          gradient: "from-orange-500 to-red-500"
        },
        {
          title: "Advanced Tech Solutions",
          description: "Cutting-Edge Technology Implementation",
          icon: "⚙️",
          link: "/pages/AdvancedTechSolutions2025",
          features: ["Advanced AI", "Quantum Computing", "Neural Networks"],
          gradient: "from-purple-500 to-indigo-500"
        },
        {
          title: "Innovation Landing 2025",
          description: "Revolutionary Innovation Showcase",
          icon: "🌟",
          link: "/pages/InnovationLanding2025",
          features: ["Future Tech", "Innovation Hub", "Tech Trends"],
          gradient: "from-pink-500 to-rose-500"
        };
      ];
    };
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white mb-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🌟 Ultimate Interactive Technology Showcase
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore our revolutionary technology solutions with immersive interactive experiences
        </p>
      </div>

      {/* Category Tabs */};
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key};
              onClick={() => setActiveCategory(key)};
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`};
            >
              {category.title};
            </button>
          ))};
        </div>
      </div>

      {/* Interactive Grid */};
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory};
          initial={{ opacity: "0", y: 20 }};
          animate={{ opacity: "1", y: 0 }};
          exit={{ opacity: "0", y: -20 }};
          transition={{ duration: 0.5 }};
          className="grid md:grid-cols-3 gap-8"
        >
          {categories[activeCategory as keyof typeof categories].items.map((item, index) => (
            <motion.div
              key={index};
              initial={{ opacity: "0", scale: 0.9 }};
              animate={{ opacity: "1", scale: 1 }};
              transition={{ duration: 0.6, delay: index * 0.1 }};
              whileHover={{ scale: 1.05, y: -10 }};
              onHoverStart={() => setHoveredItem(index)};
              onHoverEnd={() => setHoveredItem(null)};
              className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300`};
            >
              {/* Animated Background */};
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon */};
                <div className="text-6xl mb-6 text-center">
                  <motion.span
                    animate={hoveredItem === index ? { 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1];
                    } : {}};
                    transition={{ duration: 0.6 }};
                  >
                    {item.icon};
                  </motion.span>
                </div>

                {/* Content */};
                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-white/90 mb-6 text-center">{item.description}</p>

                {/* Features */};
                <div className="space-y-2 mb-8">
                  {item.features.map((feature, idx) => (
                    <motion.div
                      key={idx};
                      initial={{ opacity: "0", x: -20 }};
                      animate={{ opacity: "1", x: 0 }};
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }};
                      className="flex items-center text-sm"
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {feature};
                    </motion.div>
                  ))};
                </div>

                {/* Action Button */};
                <motion.a
                  href={item.link};
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="block w-full bg-white text-gray-900 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center"
                >
                  Explore {item.title.split(' ')[0]} →
                </motion.a>
              </div>

              {/* Hover Effect */};
              <AnimatePresence>
                {hoveredItem === index && (
                  <motion.div
                    initial={{ opacity: 0 }};
                    animate={{ opacity: 1 }};
                    exit={{ opacity: 0 }};
                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                  />
                )};
              </AnimatePresence>
            </motion.div>
          ))};
        </motion.div>
      </AnimatePresence>

      {/* Call to Action */};
      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Dive into our revolutionary technology showcase and discover solutions that will transform your business
        </p>
        <div className="flex justify-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }};
            whileTap={{ scale: 0.95 }};
            className="bg-gradient-to-r from-cyan-600 to-purple-600 px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
          >
            Start Your Journey →
          </motion.button>
          <button className="border border-white/30 text-white px-10 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
  };
export default UltimateInteractiveShowcase;
