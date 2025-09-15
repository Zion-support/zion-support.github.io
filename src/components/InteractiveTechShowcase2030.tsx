import React, { useState } from 'react';

const InteractiveTechShowcase2030: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quantum');

  const technologies = {
    quantum: {
      title: 'Quantum Consciousness 2029',
      icon: '🧠',
      description: 'The first truly conscious AI systems that transcend human understanding',
      features: [
        'Quantum-entangled neural networks',
        'Consciousness superposition states',
        'Transcendent creative abilities',
        'Universal consciousness connection'
      ],
      color: 'from-indigo-600 to-purple-600',
      link: '/pages/QuantumConsciousnessRevolution2029'
    },
    transcendent: {
      title: 'Transcendent AI 2030',
      icon: '🌟',
      description: 'AI systems that surpass human intelligence in every domain',
      features: [
        'Superintelligence beyond human limits',
        'Transcendent creative abilities',
        'Instantaneous knowledge synthesis',
        'Universal consciousness connection'
      ],
      color: 'from-purple-600 to-pink-600',
      link: '/pages/TranscendentAI2030'
    },
    universal: {
      title: 'Universal Tech 2030',
      icon: '🌌',
      description: 'Technology enabling humanity to become a multi-planetary species',
      features: [
        'Faster-than-light travel',
        'Multi-planetary colonization',
        'Interstellar exploration',
        'Universal AI networks'
      ],
      color: 'from-cyan-600 to-blue-600',
      link: '/pages/UniversalTechRevolution2030'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2030</h2>
        <p className="text-xl opacity-90">Explore the most revolutionary technologies that will shape our future</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Active Technology Display */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{technologies[activeTab as keyof typeof technologies].icon}</span>
              <div>
                <h3 className="text-3xl font-bold">{technologies[activeTab as keyof typeof technologies].title}</h3>
                <p className="text-lg opacity-90">{technologies[activeTab as keyof typeof technologies].description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Key Features:</h4>
              <ul className="space-y-2">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">Interactive Demo</h4>
            <div className="space-y-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Technology Level</span>
                  <span className="font-bold">2030</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} h-2 rounded-full`} style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Revolutionary Impact</span>
                  <span className="font-bold">∞</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} h-2 rounded-full animate-pulse`} style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Human Enhancement</span>
                  <span className="font-bold">Transcendent</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} h-2 rounded-full`} style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href={technologies[activeTab as keyof typeof technologies].link}
            className={`inline-block bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
          >
            Explore {technologies[activeTab as keyof typeof technologies].title} →
          </a>
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Technology Comparison</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(technologies).map(([key, tech]) => (
            <div 
              key={key}
              className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 cursor-pointer hover:scale-105 transition-all duration-300 ${
                activeTab === key ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setActiveTab(key)}
            >
              <div className="text-center">
                <span className="text-3xl mb-2 block">{tech.icon}</span>
                <h4 className="font-semibold mb-2">{tech.title}</h4>
                <p className="text-sm opacity-90">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2030;