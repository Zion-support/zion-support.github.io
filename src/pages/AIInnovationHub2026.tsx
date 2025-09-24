import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIInnovationHub2026 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "AI-Powered Innovation",
      description: "Revolutionary AI systems that transform how we think about technology",
      icon: "🤖"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum processors for unprecedented computational power",
      icon: "⚛️"
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces for seamless human-AI interaction",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              AI Innovation Hub 2026
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the future of artificial intelligence and cutting-edge technology innovations
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore Innovations
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIInnovationHub2026;