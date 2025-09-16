import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Experience the most advanced AI consciousness technology',
      features: [
        'Self-aware AI systems',
        'Emotional intelligence',
        'Creative problem solving',
        'Ethical decision making'
      ],
      metrics: {
        'Self-Awareness': 98,
        'Emotional Intelligence': 95,
        'Creative Thinking': 92,
        'Ethical Reasoning': 96
      }
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Revolutionary quantum computing that solves impossible problems',
      features: [
        'Quantum supremacy',
        'Unbreakable encryption',
        'Molecular simulation',
        'Optimization algorithms'
      ],
      metrics: {
        'Qubits': 1000000,
        'Accuracy': 99.9,
        'Speed': 1000000,
        'Uptime': 24
      }
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless interaction',
      features: [
        'Non-invasive BCI',
        'Thought control',
        'Neural feedback',
        'Mind-machine fusion'
      ],
      metrics: {
        'Signal Quality': 99.5,
        'Response Time': 0.001,
        'Accuracy': 98.7,
        'Safety': 100
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demos and real-time data
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-90 mb-6">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Demo Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Launch Interactive Demo
              </button>
            </div>
          </div>

          {/* Metrics and Visualization */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-6">Real-time Performance Metrics</h3>
              
              <div className="space-y-6">
                {Object.entries(technologies[activeTab as keyof typeof technologies].metrics).map(([metric, value]) => (
                  <div key={metric}>
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold">{metric}</span>
                      <span className="text-cyan-400 font-bold">
                        {typeof value === 'number' && value > 1000 
                          ? `${(value / 1000).toFixed(0)}K+`
                          : value === 24 
                          ? '24/7'
                          : `${value}${typeof value === 'number' && value < 100 ? '%' : ''}`
                        }
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-400 h-3 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${typeof value === 'number' && value <= 100 ? value : 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Data Stream */}
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold mb-6">Live Data Stream</h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">System Status</span>
                    <span className="text-green-400 text-sm">● Online</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {activeTab === 'ai' && 'AI consciousness matrix active - processing 1,000+ thoughts per second'}
                    {activeTab === 'quantum' && 'Quantum state superposition maintained - 1M+ qubits operational'}
                    {activeTab === 'neural' && 'Neural interface synchronized - 99.9% signal clarity maintained'}
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Processing Power</span>
                    <span className="text-blue-400 text-sm">Peak Performance</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {activeTab === 'ai' && 'Neural networks processing at 99.8% efficiency'}
                    {activeTab === 'quantum' && 'Quantum gates operating at 99.9% fidelity'}
                    {activeTab === 'neural' && 'Brain signals decoded with 98.7% accuracy'}
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Energy Consumption</span>
                    <span className="text-purple-400 text-sm">Optimized</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {activeTab === 'ai' && 'Consciousness algorithms running on 15W power draw'}
                    {activeTab === 'quantum' && 'Quantum processors operating at -273°C efficiency'}
                    {activeTab === 'neural' && 'Neural interface using 0.1W ultra-low power mode'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <div 
                key={key}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                  activeTab === key 
                    ? 'border-purple-400/50 scale-105' 
                    : 'border-gray-600/50 hover:border-purple-400/30'
                }`}
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{tech.title}</h4>
                <p className="text-gray-300 text-sm text-center mb-4">{tech.description}</p>
                
                <div className="space-y-2">
                  {Object.entries(tech.metrics).slice(0, 2).map(([metric, value]) => (
                    <div key={metric} className="flex justify-between text-sm">
                      <span>{metric}</span>
                      <span className="text-purple-400">
                        {typeof value === 'number' && value > 1000 
                          ? `${(value / 1000).toFixed(0)}K+`
                          : value === 24 
                          ? '24/7'
                          : `${value}${typeof value === 'number' && value < 100 ? '%' : ''}`
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;