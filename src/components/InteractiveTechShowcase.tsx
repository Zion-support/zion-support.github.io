import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      id: 0,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 1,
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      title: 'Neural Interfaces',
      description: 'Brain-computer interface technology',
      icon: '🧬',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Technology Showcase</h2>
          <p className="text-xl text-gray-300">Explore our cutting-edge technologies</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${category.color} rounded-xl p-8 text-center`}
            >
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <p className="text-white/90">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;