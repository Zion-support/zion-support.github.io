import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');

  const contentCategories = {
    'ai-solutions': {
      title: 'AI Solutions',
      icon: '🤖',
      description: 'Advanced artificial intelligence and machine learning solutions',
      items: [
        { title: 'Neural Network Optimization', link: '/ai-2025-neural-optimization', badge: 'NEW' },
        { title: 'Autonomous Systems', link: '/ai-2025-autonomous-systems', badge: 'HOT' },
        { title: 'Predictive Analytics', link: '/ai-2025-predictive-analytics', badge: 'POPULAR' },
        { title: 'Natural Language Processing', link: '/ai-2025-nlp', badge: 'TRENDING' }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Quantum algorithms and computing solutions for the future',
      items: [
        { title: 'Quantum Machine Learning', link: '/quantum-2025-ml', badge: 'BREAKTHROUGH' },
        { title: 'Quantum Cryptography', link: '/quantum-2025-crypto', badge: 'SECURE' },
        { title: 'Quantum Optimization', link: '/quantum-2025-optimization', badge: 'FAST' },
        { title: 'Quantum Simulation', link: '/quantum-2025-simulation', badge: 'ADVANCED' }
      ]
    },
    'automation': {
      title: 'Automation',
      icon: '🔧',
      description: 'Intelligent automation and workflow optimization',
      items: [
        { title: 'Smart Workflow Engine', link: '/automation-2025-workflow', badge: 'EFFICIENT' },
        { title: 'Process Automation', link: '/automation-2025-process', badge: 'SMART' },
        { title: 'Task Orchestration', link: '/automation-2025-orchestration', badge: 'INTELLIGENT' },
        { title: 'Decision Automation', link: '/automation-2025-decision', badge: 'ADAPTIVE' }
      ]
    },
    'future-tech': {
      title: 'Future Tech',
      icon: '🚀',
      description: 'Next-generation technologies and innovation platforms',
      items: [
        { title: 'Neural Interfaces', link: '/neural-2025-interfaces', badge: 'FUTURISTIC' },
        { title: 'Augmented Reality', link: '/ar-2025-platforms', badge: 'IMMERSIVE' },
        { title: 'Blockchain Solutions', link: '/blockchain-2025-solutions', badge: 'DECENTRALIZED' },
        { title: 'IoT Ecosystems', link: '/iot-2025-ecosystems', badge: 'CONNECTED' }
      ]
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of cutting-edge technology solutions and innovations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`mx-2 mb-4 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">{contentCategories[activeTab as keyof typeof contentCategories].icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {contentCategories[activeTab as keyof typeof contentCategories].title}
              </h3>
              <p className="text-gray-600">
                {contentCategories[activeTab as keyof typeof contentCategories].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contentCategories[activeTab as keyof typeof contentCategories].items.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="group p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.badge === 'NEW' ? 'bg-green-100 text-green-800' :
                      item.badge === 'HOT' ? 'bg-red-100 text-red-800' :
                      item.badge === 'POPULAR' ? 'bg-blue-100 text-blue-800' :
                      item.badge === 'TRENDING' ? 'bg-purple-100 text-purple-800' :
                      item.badge === 'BREAKTHROUGH' ? 'bg-yellow-100 text-yellow-800' :
                      item.badge === 'SECURE' ? 'bg-indigo-100 text-indigo-800' :
                      item.badge === 'FAST' ? 'bg-orange-100 text-orange-800' :
                      item.badge === 'ADVANCED' ? 'bg-pink-100 text-pink-800' :
                      item.badge === 'EFFICIENT' ? 'bg-teal-100 text-teal-800' :
                      item.badge === 'SMART' ? 'bg-cyan-100 text-cyan-800' :
                      item.badge === 'INTELLIGENT' ? 'bg-emerald-100 text-emerald-800' :
                      item.badge === 'ADAPTIVE' ? 'bg-violet-100 text-violet-800' :
                      item.badge === 'FUTURISTIC' ? 'bg-sky-100 text-sky-800' :
                      item.badge === 'IMMERSIVE' ? 'bg-rose-100 text-rose-800' :
                      item.badge === 'DECENTRALIZED' ? 'bg-amber-100 text-amber-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Discover innovative solutions and cutting-edge technology implementations
                  </p>
                  <div className="flex items-center mt-4 text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">Explore Now</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/content-library"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;