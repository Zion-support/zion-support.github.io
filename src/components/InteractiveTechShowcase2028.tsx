import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🤖',
      description: 'Revolutionary AI systems with consciousness-level processing',
      features: [
        'Conscious AI Systems',
        'Quantum Neural Networks',
        'Synthetic Intelligence',
        'Autonomous AI Agents'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Quantum systems that solve impossible problems',
      features: [
        'Quantum Supremacy 2.0',
        'Quantum Internet',
        'Quantum AI Integration',
        'Quantum Consciousness'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless interaction',
      features: [
        'Brain-Computer Interfaces',
        'Thought-Controlled Systems',
        'Neural Enhancement',
        'Consciousness Transfer'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    metaverse: {
      title: 'Metaverse & VR',
      icon: '🌐',
      description: 'Immersive virtual worlds indistinguishable from reality',
      features: [
        'Immersive Virtual Worlds',
        'Haptic Feedback Systems',
        'Digital Twin Technology',
        'Interdimensional Reality'
      ],
      color: 'from-orange-500 to-red-500'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience cutting-edge technologies with interactive demos and real-time demonstrations
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Interactive Demo</h4>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    {technologies[activeTab as keyof typeof technologies].icon}
                  </div>
                  <p className="text-lg opacity-90 mb-6">
                    Experience this technology in action
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Launch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Technology Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <div
                key={key}
                className={`bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  activeTab === key ? 'border-purple-400' : 'border-white/20'
                }`}
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-center">{tech.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {tech.features.length}
                  </div>
                  <div className="text-xs opacity-75">Features</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary technologies to transform their operations and create a better future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;