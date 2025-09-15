import React, { useState } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Synthetic Intelligence',
      icon: '🧠',
      description: 'AI systems with consciousness, creativity, and emotional intelligence',
      features: [
        'Self-evolving algorithms',
        'Creative problem solving',
        'Emotional intelligence',
        'Autonomous innovation'
      ],
      metrics: {
        'Processing Speed': '+5000%',
        'Accuracy': '99.99%',
        'Learning Rate': '10x faster',
        'Creativity': 'Unlimited'
      }
    },
    quantum: {
      title: 'Quantum Supremacy',
      icon: '⚛️',
      description: 'Quantum computers achieving practical quantum advantage',
      features: [
        'Exponential processing power',
        'Quantum cryptography',
        'Molecular simulation',
        'Infinite parallelization'
      ],
      metrics: {
        'Processing Power': '10^15x',
        'Energy Efficiency': '-90%',
        'Security': 'Unbreakable',
        'Speed': 'Instant'
      }
    },
    neural: {
      title: 'Neural Integration',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for thought control',
      features: [
        'Thought-to-text conversion',
        'Memory augmentation',
        'Enhanced learning',
        'Telepathic communication'
      ],
      metrics: {
        'Response Time': '0.1ms',
        'Accuracy': '99.8%',
        'Learning Speed': '10x',
        'Control': '100%'
      }
    },
    bio: {
      title: 'Bio-Quantum Fusion',
      icon: '🔬',
      description: 'Revolutionary biotechnology merging quantum computing',
      features: [
        'Quantum gene editing',
        'Cellular regeneration',
        'Disease elimination',
        'Life extension'
      ],
      metrics: {
        'Gene Editing': '100%',
        'Disease Prevention': '95%',
        'Life Extension': '+50 years',
        'Success Rate': '99.9%'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-8 mb-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 ULTIMATE TECH SHOWCASE • 2026
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Interactive Technology Showcase</h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore the most advanced technologies that are reshaping our world. Click on each technology to discover its revolutionary capabilities.
        </p>
      </div>

      {/* Technology Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-6xl">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {technologies[activeTab as keyof typeof technologies].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {technologies[activeTab as keyof typeof technologies].description}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
              <ul className="space-y-2">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Performance Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(technologies[activeTab as keyof typeof technologies].metrics).map(([metric, value], index) => (
                <div key={index} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-gray-300">{metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Interactive Demo</h3>
          <p className="text-xl text-gray-300">
            Experience {technologies[activeTab as keyof typeof technologies].title} in action
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🎮</div>
            <h4 className="text-lg font-bold text-white mb-2">Try It Now</h4>
            <p className="text-gray-300 text-sm mb-4">Experience the technology firsthand</p>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Launch Demo →
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="text-lg font-bold text-white mb-2">View Analytics</h4>
            <p className="text-gray-300 text-sm mb-4">See real-time performance data</p>
            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              View Data →
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🔧</div>
            <h4 className="text-lg font-bold text-white mb-2">Customize</h4>
            <p className="text-gray-300 text-sm mb-4">Configure for your needs</p>
            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Configure →
            </button>
          </div>
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Technology Comparison</h3>
          <p className="text-xl text-gray-300">Compare all technologies side by side</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-4 px-2">Technology</th>
                <th className="text-center py-4 px-2">Processing Speed</th>
                <th className="text-center py-4 px-2">Accuracy</th>
                <th className="text-center py-4 px-2">Energy Efficiency</th>
                <th className="text-center py-4 px-2">Innovation Level</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(technologies).map(([key, tech]) => (
                <tr key={key} className={`border-b border-gray-700 hover:bg-white/5 ${activeTab === key ? 'bg-blue-600/20' : ''}`}>
                  <td className="py-4 px-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-semibold">{tech.title}</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">{tech.metrics['Processing Speed'] || tech.metrics['Processing Power']}</td>
                  <td className="text-center py-4 px-2">{tech.metrics['Accuracy']}</td>
                  <td className="text-center py-4 px-2">{tech.metrics['Energy Efficiency'] || 'N/A'}</td>
                  <td className="text-center py-4 px-2">
                    <div className="flex justify-center">
                      <div className="w-20 bg-gray-600 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;