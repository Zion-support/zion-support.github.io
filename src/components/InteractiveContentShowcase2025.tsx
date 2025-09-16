import React, { useState } from 'react';

const InteractiveContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const contentTabs = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🧠',
      color: 'from-blue-600 to-purple-600',
      content: [
        {
          title: 'AI Consciousness Breakthrough',
          description: 'Revolutionary AI systems achieving self-awareness and autonomous decision-making',
          stats: '99.7% accuracy',
          link: '/pages/AdvancedAIConsciousness2026'
        },
        {
          title: 'Neural Network Evolution',
          description: 'Next-generation neural networks with human-like reasoning capabilities',
          stats: '10x faster processing',
          link: '/pages/AdvancedAISystems2026'
        },
        {
          title: 'AI-Powered Automation',
          description: 'Intelligent automation systems transforming business operations',
          stats: '300% efficiency gain',
          link: '/pages/AIBusinessAutomation2026'
        }
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Practical quantum computing solving real-world problems in seconds',
          stats: '1000+ qubits',
          link: '/pages/QuantumComputingRevolution2025'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Combining quantum computing with AI for unprecedented capabilities',
          stats: 'Exponential speedup',
          link: '/pages/QuantumAIRevolution2026'
        },
        {
          title: 'Quantum Security',
          description: 'Unbreakable encryption using quantum principles',
          stats: '100% secure',
          link: '/pages/AdvancedCybersecurity2026'
        }
      ]
    },
    biotech: {
      title: 'Biotechnology',
      icon: '🧬',
      color: 'from-green-600 to-teal-600',
      content: [
        {
          title: 'Gene Editing Revolution',
          description: 'Precision gene editing curing previously incurable diseases',
          stats: '95% success rate',
          link: '/pages/BiotechRevolution2026'
        },
        {
          title: 'Synthetic Biology',
          description: 'Engineering biological systems for sustainable solutions',
          stats: '50% cost reduction',
          link: '/pages/AdvancedBiotechRevolution2026'
        },
        {
          title: 'Neural Interfaces',
          description: 'Direct brain-computer interfaces enhancing human capabilities',
          stats: 'Real-time processing',
          link: '/pages/NeuralInterfaceRevolution2026'
        }
      ]
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Mars Colonization',
          description: 'Advanced technologies enabling sustainable human presence on Mars',
          stats: '2030 timeline',
          link: '/pages/SpaceTechInnovation2026'
        },
        {
          title: 'Interplanetary Travel',
          description: 'Revolutionary propulsion systems for faster space travel',
          stats: '10x speed increase',
          link: '/pages/AdvancedSpaceTech2026'
        },
        {
          title: 'Space Mining',
          description: 'Extracting resources from asteroids and other celestial bodies',
          stats: 'Trillion $ industry',
          link: '/pages/SpaceTechRevolution2026'
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 mb-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <span className="text-5xl animate-pulse">🌟</span>
          <h2 className="text-5xl font-bold text-white">Interactive Content Showcase</h2>
          <span className="text-5xl animate-pulse">🌟</span>
        </div>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore cutting-edge technologies through our interactive content. Click on different categories 
          to discover the latest breakthroughs and innovations in each field.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(contentTabs).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === key
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{contentTabs[activeTab as keyof typeof contentTabs].icon}</div>
          <h3 className="text-4xl font-bold text-white mb-4">
            {contentTabs[activeTab as keyof typeof contentTabs].title}
          </h3>
          <div className={`inline-block bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} text-white px-6 py-2 rounded-full text-sm font-semibold`}>
            Latest Breakthroughs
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contentTabs[activeTab as keyof typeof contentTabs].content.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className={`bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                  {item.stats}
                </div>
                <a
                  href={item.link}
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Explore More?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Dive deeper into these revolutionary technologies and discover how they can transform your industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              View All Content
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;