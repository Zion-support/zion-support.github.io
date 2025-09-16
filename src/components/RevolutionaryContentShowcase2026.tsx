import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      id: 0,
      title: "Holographic Reality",
      icon: "👁️",
      description: "Advanced holographic technology that blurs the line between digital and physical worlds",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-600/30",
      link: "/pages/AdvancedHolographicReality2026"
    },
    {
      id: 1,
      title: "Space Technology",
      icon: "🚀",
      description: "Revolutionary space technologies enabling interplanetary travel and cosmic exploration",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-600/30",
      link: "/pages/AdvancedSpaceTech2026"
    },
    {
      id: 2,
      title: "Biotech Revolution",
      icon: "🧬",
      description: "Cutting-edge biotechnology enhancing human capabilities and curing diseases",
      color: "from-green-600 to-emerald-600",
      borderColor: "border-green-400",
      bgColor: "bg-green-600/30",
      link: "/pages/AdvancedBiotechRevolution2026"
    },
    {
      id: 3,
      title: "Quantum Computing",
      icon: "⚡",
      description: "Next-generation quantum computing solving impossible problems with exponential speed",
      color: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      bgColor: "bg-cyan-600/30",
      link: "/pages/QuantumComputingRevolution2026"
    },
    {
      id: 4,
      title: "Neural Interfaces",
      icon: "🧠",
      description: "Direct neural interfaces bridging the gap between mind and machine",
      color: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      bgColor: "bg-emerald-600/30",
      link: "/pages/NeuralInterfaceRevolution2026"
    },
    {
      id: 5,
      title: "AI Revolution",
      icon: "🤖",
      description: "Artificial intelligence reshaping industries and creating new opportunities",
      color: "from-indigo-600 to-purple-600",
      borderColor: "border-indigo-400",
      bgColor: "bg-indigo-600/30",
      link: "/pages/NextGenAIRevolution2026"
    }
  ];

  const features = [
    {
      title: "Immersive Experience",
      description: "Experience technology like never before with our cutting-edge interfaces",
      icon: "🌟"
    },
    {
      title: "Real-time Interaction",
      description: "Interact with advanced systems in real-time with minimal latency",
      icon: "⚡"
    },
    {
      title: "Future-Ready",
      description: "Built for the future with scalable and adaptable technology",
      icon: "🚀"
    },
    {
      title: "Industry Leading",
      description: "Leading the industry with breakthrough innovations and solutions",
      icon: "🏆"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • 2026
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Showcase
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Explore our groundbreaking technologies that are reshaping the future of humanity. 
              From holographic reality to space exploration, discover innovations that were once science fiction.
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                  : `bg-white/10 text-white/80 hover:bg-white/20 border ${tab.borderColor}`
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Content Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Info */}
                <div>
                  <div className="text-6xl mb-6">{contentTabs[activeTab].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{contentTabs[activeTab].title}</h3>
                  <p className="text-xl opacity-90 mb-8">{contentTabs[activeTab].description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="text-2xl">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold">{feature.title}</h4>
                          <p className="text-sm opacity-80">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={contentTabs[activeTab].link}
                      className={`bg-gradient-to-r ${contentTabs[activeTab].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                    >
                      Explore Technology
                    </a>
                    <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                      Watch Demo
                    </button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className={`w-full h-96 rounded-2xl ${contentTabs[activeTab].bgColor} border ${contentTabs[activeTab].borderColor} flex items-center justify-center`}>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-8xl"
                    >
                      {contentTabs[activeTab].icon}
                    </motion.div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, 20, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Revolutionary Impact</h3>
            <p className="text-xl opacity-80">Transforming industries and human potential</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <p className="text-purple-200">Technologies Developed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
              <p className="text-blue-200">Lives Impacted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
              <p className="text-green-200">Success Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <p className="text-cyan-200">Innovation</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;