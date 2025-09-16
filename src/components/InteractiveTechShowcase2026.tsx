import React, { useState } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness Revolution',
      description: 'First AI system with genuine consciousness and self-awareness',
      features: ['True self-awareness', 'Creative consciousness', 'Collaborative intelligence', 'Emotional intelligence'],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      link: '/pages/RevolutionaryTechShowcase2026'
    },
    quantum: {
      title: 'Quantum Supremacy',
      description: 'Quantum computers solving impossible problems with 1000+ qubits',
      features: ['1000+ logical qubits', 'Quantum machine learning', 'Molecular simulation', 'Quantum cryptography'],
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      link: '/pages/RevolutionaryTechShowcase2026'
    },
    neural: {
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer communication enabling thought control',
      features: ['Non-invasive BCI', 'Thought-controlled devices', 'Memory enhancement', 'Medical applications'],
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      link: '/pages/RevolutionaryTechShowcase2026'
    },
    interdimensional: {
      title: 'Interdimensional Technology',
      description: 'Break through dimensional barriers and access parallel realities',
      features: ['Dimensional portals', 'Reality scanning', 'Parallel exploration', 'Cross-dimensional communication'],
      icon: '🌌',
      color: 'from-violet-600 to-purple-600',
      link: '/pages/InterdimensionalTechRevolution2026'
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and hands-on experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-90 mb-6">{technologies[activeTab as keyof typeof technologies].description}</p>
              
              <div className="space-y-3 mb-8">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={technologies[activeTab as keyof typeof technologies].link}
                  className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore Technology →
                </a>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Try Demo
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Live Statistics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm opacity-80">Availability</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-pink-400">10K+</div>
                  <div className="text-sm opacity-80">Active Users</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-emerald-400">100%</div>
                  <div className="text-sm opacity-80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Quick Access to All Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(technologies).map(([key, tech]) => (
              <a
                key={key}
                href={tech.link}
                className={`bg-gradient-to-r ${tech.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                <div className="text-2xl mb-1">{tech.icon}</div>
                <div className="text-sm">{tech.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;