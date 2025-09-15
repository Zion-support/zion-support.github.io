import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      technologies: [
        { name: "Deep Learning", description: "Advanced neural networks for complex pattern recognition" },
        { name: "Natural Language Processing", description: "AI-powered language understanding and generation" },
        { name: "Computer Vision", description: "Image and video analysis using AI algorithms" },
        { name: "Predictive Analytics", description: "Data-driven predictions and forecasting" }
      ]
    },
    {
      title: "Quantum Computing",
      icon: "⚛️",
      technologies: [
        { name: "Quantum Algorithms", description: "Revolutionary algorithms for quantum computers" },
        { name: "Quantum Cryptography", description: "Unbreakable encryption using quantum principles" },
        { name: "Quantum Simulation", description: "Simulating complex quantum systems" },
        { name: "Quantum Optimization", description: "Solving optimization problems with quantum speedup" }
      ]
    },
    {
      title: "Neural Interfaces",
      icon: "🧬",
      technologies: [
        { name: "Brain-Computer Interfaces", description: "Direct communication between brain and computers" },
        { name: "Neural Implants", description: "Advanced neural prosthetics and implants" },
        { name: "Cognitive Enhancement", description: "Augmenting human cognitive abilities" },
        { name: "Neural Networks", description: "Biological-inspired computing architectures" }
      ]
    },
    {
      title: "Space Technology",
      icon: "🚀",
      technologies: [
        { name: "Space Exploration", description: "Advanced spacecraft and exploration missions" },
        { name: "Space Colonization", description: "Technologies for human settlement in space" },
        { name: "Space Manufacturing", description: "Production in zero-gravity environments" },
        { name: "Interplanetary Travel", description: "Fast and efficient space transportation" }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Technology Showcase</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the cutting-edge technologies that are shaping our future
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {techCategories[activeTab].title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {techCategories[activeTab].technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h4>
                  <p className="text-gray-600">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;