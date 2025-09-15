import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      id: 'ai-trends',
      title: 'AI Trends 2026',
      icon: '🤖',
      color: 'from-blue-500 to-indigo-600',
      content: {
        title: 'Revolutionary AI Trends Shaping 2026',
        description: 'Discover the cutting-edge AI technologies that are transforming industries and reshaping our world.',
        features: [
          'Hyper-Personalized AI Systems',
          'Edge AI Dominance',
          'Explainable AI Evolution',
          'AI-Powered Generative Design',
          'Quantum-AI Hybrid Systems'
        ],
        link: '/pages/AITrends2026Blog'
      }
    },
    {
      id: 'quantum-breakthroughs',
      title: 'Quantum Breakthroughs',
      icon: '⚛️',
      color: 'from-purple-500 to-pink-600',
      content: {
        title: 'Quantum Computing Breakthroughs 2026',
        description: 'Explore the revolutionary advances in quantum computing that are making practical applications a reality.',
        features: [
          'Enhanced Qubit Stability',
          'Scalable Quantum Architectures',
          'Practical Quantum Algorithms',
          'Hybrid Quantum-Classical Computing',
          'Advanced Quantum Software'
        ],
        link: '/pages/QuantumBreakthroughs2026Blog'
      }
    },
    {
      id: 'ai-consulting',
      title: 'AI Consulting Services',
      icon: '🛠️',
      color: 'from-green-500 to-emerald-600',
      content: {
        title: 'AI Consulting Services 2026',
        description: 'Transform your business with strategic AI integration and cutting-edge solutions.',
        features: [
          'AI Strategy & Roadmap Development',
          'AI Solution Design & Architecture',
          'AI Implementation & Deployment',
          'AI Governance & Ethics'
        ],
        link: '/pages/AIConsultingServices2026'
      }
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-bold mb-6">
          🚀 NEW CONTENT 2026
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Latest Content & Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our newest blog posts, services, and interactive content designed to keep you at the forefront of technology
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {contentTabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
            }`}
          >
            {tab.icon} {tab.title}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${contentTabs[activeTab].color} rounded-xl flex items-center justify-center text-3xl`}>
                  {contentTabs[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {contentTabs[activeTab].content.title}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-semibold text-white">
                    NEW
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {contentTabs[activeTab].content.description}
              </p>

              <div className="space-y-3 mb-8">
                {contentTabs[activeTab].content.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={contentTabs[activeTab].content.link}
                className={`inline-block bg-gradient-to-r ${contentTabs[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
              >
                Explore Now →
              </a>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center">
              <div className={`w-80 h-80 bg-gradient-to-br ${contentTabs[activeTab].color} rounded-2xl flex items-center justify-center text-8xl shadow-2xl`}>
                {contentTabs[activeTab].icon}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Quick Access Grid */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Access</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {contentTabs.map((tab, index) => (
            <a
              key={tab.id}
              href={tab.content.link}
              className={`bg-gradient-to-br ${tab.color} rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                index === activeTab ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              <div className="text-center text-white">
                <div className="text-4xl mb-3">{tab.icon}</div>
                <h4 className="text-lg font-bold mb-2">{tab.title}</h4>
                <p className="text-white/80 text-sm mb-3">{tab.content.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                  NEW
                </div>
              </div>
<<<<<<< HEAD
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;