'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-breakthroughs');

  const contentSections = {
    'ai-breakthroughs': {
      title: 'AI Breakthroughs',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500',
      content: [
        {
          title: 'Neural Architecture Revolution',
          description: 'Next-generation neural networks with 99.9% accuracy',
          stats: '500% faster processing',
          category: 'Machine Learning'
        },
        {
          title: 'Quantum-Enhanced AI',
          description: 'Quantum computing integration for exponential speed',
          stats: '1000x performance boost',
          category: 'Quantum Computing'
        },
        {
          title: 'Conscious AI Systems',
          description: 'Self-aware AI with emotional intelligence',
          stats: 'Human-level reasoning',
          category: 'Artificial Consciousness'
        }
      ]
    },
    'quantum-tech': {
      title: 'Quantum Technology',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      content: [
        {
          title: 'Quantum Supremacy',
          description: 'Achieving computational superiority over classical computers',
          stats: 'Exponential speed increase',
          category: 'Quantum Computing'
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum principles',
          stats: '100% secure communication',
          category: 'Security'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'AI algorithms running on quantum processors',
          stats: 'Revolutionary optimization',
          category: 'Quantum AI'
        }
      ]
    },
    'neural-interfaces': {
      title: 'Neural Interfaces',
      icon: '🔗',
      color: 'from-emerald-500 to-teal-500',
      content: [
        {
          title: 'Brain-Computer Interface',
          description: 'Direct neural communication with AI systems',
          stats: 'Thought-to-action in <1ms',
          category: 'Neural Tech'
        },
        {
          title: 'Memory Enhancement',
          description: 'Augmented cognitive capabilities through neural interfaces',
          stats: '300% memory improvement',
          category: 'Cognitive Enhancement'
        },
        {
          title: 'Predictive Neural Networks',
          description: 'AI that anticipates your needs before you think them',
          stats: '95% prediction accuracy',
          category: 'Predictive AI'
        }
      ]
    },
    'autonomous-systems': {
      title: 'Autonomous Systems',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      content: [
        {
          title: 'Self-Managing AI',
          description: 'Fully autonomous systems requiring zero human intervention',
          stats: '24/7 autonomous operation',
          category: 'Autonomous AI'
        },
        {
          title: 'Adaptive Learning',
          description: 'Systems that evolve and improve continuously',
          stats: 'Real-time optimization',
          category: 'Self-Learning'
        },
        {
          title: 'Global AI Network',
          description: 'Interconnected AI systems across the globe',
          stats: 'Worldwide coordination',
          category: 'Distributed AI'
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-purple-400/30">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            The Future of Technology
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Explore groundbreaking innovations that are reshaping our world and creating unprecedented opportunities for growth and advancement.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${section.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentSections[activeTab as keyof typeof contentSections].content.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 rounded-xl border border-gray-600/30 hover:border-purple-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-lg">{contentSections[activeTab as keyof typeof contentSections].icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    {item.stats}
                  </span>
                  <Link
                    href={`/${activeTab}/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-8 rounded-2xl backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already leveraging these revolutionary technologies to transform their businesses and achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/revolutionary-tech-2025"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Innovations
              </Link>
              <Link
                href="/contact"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;