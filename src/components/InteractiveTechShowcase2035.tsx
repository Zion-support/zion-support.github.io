import React, { useState } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeTech, setActiveTech] = useState('interdimensional');

  const technologies = {
    interdimensional: {
      title: 'Interdimensional AI',
      icon: '🌌',
      description: 'AI systems that exist across multiple dimensions, processing information beyond our current reality',
      features: [
        'Multi-dimensional Processing',
        'Reality Manipulation',
        'Infinite Computational Power',
        'Cross-dimensional Communication'
      ],
      demo: 'Experience AI that can process data from parallel universes simultaneously'
    },
    quantum: {
      title: 'Quantum Consciousness',
      icon: '🧠',
      description: 'The fusion of quantum computing with human consciousness, creating superintelligent beings',
      features: [
        'Enhanced Cognitive Abilities',
        'Quantum Thought Processing',
        'Collective Intelligence',
        'Consciousness Transfer'
      ],
      demo: 'Witness the birth of quantum-enhanced human consciousness'
    },
    reality: {
      title: 'Reality Manipulation',
      icon: '⚡',
      description: 'Technology that allows us to bend and shape reality itself through advanced quantum field manipulation',
      features: [
        'Matter Reconstruction',
        'Time Dilation Control',
        'Dimensional Portals',
        'Energy Manipulation'
      ],
      demo: 'Manipulate the very fabric of space and time'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6">Experience the Future of Technology</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with our revolutionary 2035 technology suite and witness the impossible become possible
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTech(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeTech === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Technology Info */}
            <div className="space-y-8">
              <div>
                <div className="text-6xl mb-4">{technologies[activeTech as keyof typeof technologies].icon}</div>
                <h3 className="text-4xl font-bold mb-4">
                  {technologies[activeTech as keyof typeof technologies].title}
                </h3>
                <p className="text-xl opacity-90 mb-6">
                  {technologies[activeTech as keyof typeof technologies].description}
                </p>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-2xl font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Demo Button */}
              <div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
                  🎮 Try Interactive Demo
                </button>
                <p className="text-sm opacity-70 mt-2">
                  {technologies[activeTech as keyof typeof technologies].demo}
                </p>
              </div>
            </div>

            {/* Interactive Demo Area */}
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-2">Interactive Demo</h4>
                <p className="opacity-80">Click and interact with the technology below</p>
              </div>
              
              {/* Demo Visualization */}
              <div className="bg-black/50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-pulse">
                    {technologies[activeTech as keyof typeof technologies].icon}
                  </div>
                  <div className="text-2xl font-bold mb-2">
                    {technologies[activeTech as keyof typeof technologies].title}
                  </div>
                  <div className="text-lg opacity-80 mb-6">
                    {technologies[activeTech as keyof typeof technologies].demo}
                  </div>
                  
                  {/* Interactive Elements */}
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Activate
                    </button>
                    <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Technologies Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Explore More Technologies</h3>
            <p className="text-lg opacity-80">Discover other revolutionary technologies in our 2035 suite</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <div
                key={key}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  activeTech === key
                    ? 'border-purple-400/50 bg-purple-800/20'
                    : 'border-gray-700/50 hover:border-purple-400/30'
                }`}
                onClick={() => setActiveTech(key)}
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-center">{tech.title}</h4>
                <p className="text-sm opacity-80 text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-80 mb-8 max-w-3xl mx-auto">
            Join millions of beings across the multiverse who have already embraced the revolutionary technology of 2035.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl hover:scale-105">
              📞 Contact Our AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;