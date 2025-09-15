<<<<<<< HEAD
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
        { name: "Brain-Computer Interface", description: "Direct communication between brain and computer" },
        { name: "Neural Prosthetics", description: "AI-powered prosthetic devices controlled by thought" },
        { name: "Cognitive Enhancement", description: "Augmenting human cognitive abilities" },
        { name: "Medical Applications", description: "Neural interfaces for medical diagnosis and treatment" }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Technology Showcase</h2>
        <p className="text-lg text-gray-600">Explore our cutting-edge technologies</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === index
                  ? 'bg-white shadow-md text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {techCategories[activeTab].technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
            <p className="text-gray-600">{tech.description}</p>
          </motion.div>
        ))}
      </motion.div>
=======
import React from 'react';

const InteractiveTechShowcase = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">🤖</div>
        <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
        <p className="text-gray-600 mb-4">Cutting-edge artificial intelligence solutions for your business needs.</p>
        <a href="/pages/AdvancedAISolutions2026" className="text-blue-600 hover:text-blue-700 font-semibold">
          Explore AI →
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
        <p className="text-gray-600 mb-4">Revolutionary quantum computing solutions for complex problems.</p>
        <a href="/pages/AdvancedQuantumComputing2026" className="text-blue-600 hover:text-blue-700 font-semibold">
          Discover Quantum →
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">🧬</div>
        <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
        <p className="text-gray-600 mb-4">Direct brain-computer interfaces for seamless communication.</p>
        <a href="/pages/AdvancedNeuralInterface2026" className="text-blue-600 hover:text-blue-700 font-semibold">
          Connect Mind & Machine →
        </a>
      </div>
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    </div>
  );
};

export default InteractiveTechShowcase;