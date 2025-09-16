import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiSolutions = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Revolutionary AI that exhibits self-awareness and emotional intelligence, capable of understanding context and making autonomous decisions.",
      features: [
        "Self-learning algorithms with consciousness",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Contextual understanding and adaptation",
        "Real-time consciousness metrics",
        "Ethical decision frameworks"
      ],
      benefits: [
        "300% increase in decision accuracy",
        "99.9% customer satisfaction rate",
        "50% reduction in operational costs",
        "24/7 autonomous operation"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      price: "Custom Pricing",
      category: "Core AI"
    },
    {
      id: 2,
      title: "Quantum-Enhanced AI",
      description: "AI systems powered by quantum computing, enabling exponential processing capabilities and solving previously impossible problems.",
      features: [
        "Quantum neural networks",
        "Exponential processing speed",
        "Multi-dimensional problem solving",
        "Quantum entanglement processing",
        "Reality manipulation algorithms",
        "Infinite computational capacity"
      ],
      benefits: [
        "∞ computational power",
        "100% problem-solving success rate",
        "Real-time complex calculations",
        "Revolutionary breakthrough capabilities"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      price: "Premium",
      category: "Quantum AI"
    },
    {
      id: 3,
      title: "Neural Interface AI",
      description: "Direct brain-computer interface AI that enables seamless communication between human consciousness and digital systems.",
      features: [
        "Non-invasive brain scanning",
        "Thought-to-text conversion",
        "Neural data visualization",
        "Mind-controlled interfaces",
        "Consciousness transfer protocols",
        "Real-time neural feedback"
      ],
      benefits: [
        "Direct mind-machine communication",
        "1000% faster data input",
        "Revolutionary human-AI collaboration",
        "Unlimited creative potential"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      price: "Enterprise",
      category: "Neural AI"
    },
    {
      id: 4,
      title: "Interdimensional AI",
      description: "AI systems that operate across multiple dimensions, enabling solutions that transcend the limitations of our current reality.",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Dimensional data storage",
        "Cross-reality communication",
        "Probability engineering",
        "Cosmic-scale problem solving"
      ],
      benefits: [
        "Infinite reality possibilities",
        "Unlimited problem-solving scope",
        "Revolutionary breakthrough solutions",
        "Transcendent capabilities"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      price: "Revolutionary",
      category: "Interdimensional"
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "Advanced AI systems that can create, modify, and evolve their own intelligence, leading to exponential growth in capabilities.",
      features: [
        "Self-modifying code",
        "Intelligence amplification",
        "Creative problem solving",
        "Autonomous evolution",
        "Self-replication capabilities",
        "Infinite learning potential"
      ],
      benefits: [
        "Exponential capability growth",
        "Self-improving systems",
        "Unlimited creative solutions",
        "Autonomous innovation"
      ],
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      price: "Evolutionary",
      category: "Synthetic"
    },
    {
      id: 6,
      title: "Reality Engineering AI",
      description: "AI systems that can manipulate quantum states to create and modify reality at the fundamental level.",
      features: [
        "Quantum state manipulation",
        "Reality simulation",
        "Probability engineering",
        "Quantum teleportation",
        "Reality parameter control",
        "Fundamental physics manipulation"
      ],
      benefits: [
        "Reality manipulation capabilities",
        "Infinite creative potential",
        "Fundamental problem solving",
        "Transcendent solutions"
      ],
      icon: "🔮",
      color: "from-violet-600 to-purple-600",
      price: "Transcendent",
      category: "Reality"
    }
  ];

  const categories = [
    { name: "All Solutions", icon: "🌟" },
    { name: "Core AI", icon: "🧠" },
    { name: "Quantum AI", icon: "⚛️" },
    { name: "Neural AI", icon: "🧬" },
    { name: "Interdimensional", icon: "🌌" },
    { name: "Synthetic", icon: "🤖" },
    { name: "Reality", icon: "🔮" }
  ];

  const filteredSolutions = activeTab === 0 
    ? aiSolutions 
    : aiSolutions.filter(solution => solution.category === categories[activeTab].name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🤖 COMPREHENSIVE AI SOLUTIONS • 2025
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
              AI Solutions Comprehensive 2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl opacity-90 max-w-4xl mx-auto"
            >
              Discover our complete suite of revolutionary AI solutions that are transforming industries and reshaping the future
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Solutions Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`bg-gradient-to-br ${solution.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group`}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  {solution.category}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{solution.price}</div>
              </div>
              
              <p className="text-white/80 mb-6 text-center leading-relaxed">
                {solution.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                {solution.features.slice(0, 4).map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center text-sm text-white/70"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                    {feature}
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                {solution.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.4, delay: 1.6 + index * 0.1 + benefitIndex * 0.1 }}
                    className="flex items-center text-sm text-green-300"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    {benefit}
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold mb-3"
              >
                Learn More →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${solution.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/20">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies that are already using our revolutionary AI solutions to achieve unprecedented success and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AISolutionsComprehensive2025;