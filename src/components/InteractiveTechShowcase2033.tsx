import React, { useState } from 'react';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Transcendent AI 2033',
      description: 'Experience artificial intelligence that transcends human capabilities',
      features: [
        'Superintelligent AI systems',
        'Consciousness-level processing',
        'Universal problem solving',
        'Autonomous innovation'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-indigo-600'
    },
    quantum: {
      title: 'Quantum Consciousness',
      description: 'Bridge quantum mechanics and consciousness for reality manipulation',
      features: [
        'Quantum mind networks',
        'Reality manipulation',
        'Interdimensional travel',
        'Consciousness transfer'
      ],
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600'
    },
    universal: {
      title: 'Universal Tech Revolution',
      description: 'Transform reality itself with universal technology',
      features: [
        'Universal matter manipulation',
        'Interdimensional travel',
        'Reality engineering',
        'Universal consciousness'
      ],
      icon: '🌟',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white mb-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Interactive Tech Showcase 2033
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Explore the most advanced technologies of 2033 with interactive demonstrations
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
            }`}
          >
            {tech.icon} {tech.title}
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
          <h3 className="text-4xl font-bold mb-4">
            {technologies[activeTab as keyof typeof technologies].title}
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {technologies[activeTab as keyof typeof technologies].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-6">Key Features</h4>
            <ul className="space-y-4">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">✨</span>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6">
            <h4 className="text-2xl font-bold mb-6">Interactive Demo</h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg p-4">
                <p className="text-sm opacity-80">Simulation Status:</p>
                <p className="text-lg font-semibold">Active - Ready for Interaction</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
                <p className="text-sm opacity-80">Processing Power:</p>
                <p className="text-lg font-semibold">Infinite Quantum Processing</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4">
                <p className="text-sm opacity-80">Consciousness Level:</p>
                <p className="text-lg font-semibold">Transcendent Awareness</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href={`/pages/${technologies[activeTab as keyof typeof technologies].title.replace(/\s+/g, '')}2033`}
            className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl hover:scale-105"
          >
            🚀 Experience {technologies[activeTab as keyof typeof technologies].title} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;