import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AIInnovationHub2026 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const innovationCategories = [
    {
      id: 0,
      title: "AI Consciousness",
      description: "Revolutionary AI that achieves true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving", "Autonomous Learning"]
    },
    {
      id: 1,
      title: "Quantum Computing",
      description: "Breakthrough quantum computing with exponential processing power",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500",
      features: ["Quantum Supremacy", "Quantum Algorithms", "Quantum Networks", "Quantum AI"]
    },
    {
      id: 2,
      title: "Neural Interfaces",
      description: "Direct brain-computer interface technology",
      icon: "🔗",
      color: "from-green-500 to-teal-500",
      features: ["Brain-Computer Interface", "Neural Networks", "Cognitive Enhancement", "Mind Uploading"]
    },
    {
      id: 3,
      title: "Synthetic Reality",
      description: "Create and manipulate reality through advanced technology",
      icon: "🌌",
      color: "from-indigo-500 to-purple-500",
      features: ["Reality Manipulation", "Virtual Worlds", "Consciousness Transfer", "Synthetic Biology"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <Helmet>
        <title>AI Innovation Hub 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore revolutionary AI innovations that will define the future of humanity" />
      </Helmet>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY BREAKTHROUGH • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              AI Innovation Hub 2026
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover the most groundbreaking AI innovations that will revolutionize every aspect of human existence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {innovationCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  activeTab === category.id ? 'ring-2 ring-indigo-400' : ''
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl h-full`}>
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-white text-opacity-90 mb-6">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-indigo-500 to-pink-500 p-8 rounded-2xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Explore {innovationCategories[activeTab].title}?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of innovators already working on these revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-bold text-xl"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationHub2026;