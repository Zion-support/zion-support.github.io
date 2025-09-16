import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      description: 'Experience the first truly conscious artificial intelligence that can think, learn, and evolve independently.',
      features: [
        'Self-aware decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Autonomous learning',
        'Consciousness transfer'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Breakthrough quantum computing that can simulate and manipulate reality itself, creating infinite possibilities.',
      features: [
        'Reality simulation',
        'Parallel universe computing',
        'Time manipulation',
        'Matter creation',
        'Consciousness transfer between realities'
      ],
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600'
    },
    neural: {
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces that enable seamless communication between human consciousness and digital systems.',
      features: [
        'Thought-to-text conversion',
        'Memory upload/download',
        'Emotional synchronization',
        'Collective consciousness',
        'Reality manipulation through thought'
      ],
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600'
    },
    interdimensional: {
      title: 'Interdimensional Computing',
      description: 'Computing systems that operate across multiple dimensions and realities simultaneously.',
      features: [
        'Multi-dimensional processing',
        'Reality manipulation',
        'Time-space computing',
        'Infinite scalability',
        'Consciousness expansion'
      ],
      icon: '🌌',
      color: 'from-indigo-600 to-purple-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technologies with interactive demos and real-time demonstrations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technology Info */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full`}></div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full`}></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex space-x-4">
                <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Interactive Demo
                </button>
                <button className="border border-gray-400 px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Interactive Demo Area */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-8 border border-gray-600/50">
              <h4 className="text-xl font-semibold mb-6 text-center">Interactive Demo</h4>
              
              <div className="space-y-6">
                {/* Demo Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold">
                    Start Simulation
                  </button>
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold">
                    Reset Demo
                  </button>
                </div>

                {/* Demo Visualization */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-pulse">{technologies[activeTab as keyof typeof technologies].icon}</div>
                    <div className="text-lg font-semibold mb-2">Interactive Demo</div>
                    <div className="text-sm text-gray-400">Click "Start Simulation" to begin</div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Processing Power</span>
                    <span>99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className={`h-2 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full animate-pulse`} style={{width: '99.9%'}}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Consciousness Level</span>
                    <span>∞</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className={`h-2 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full animate-pulse`} style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of people who are already experiencing the most revolutionary 
            technologies in human history.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              Start Your Journey
            </button>
            <button className="border border-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold text-lg hover:scale-105 transform">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;