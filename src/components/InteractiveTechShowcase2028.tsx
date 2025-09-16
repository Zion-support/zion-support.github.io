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
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-gray-600/30">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-bounce">
              {technologies[activeTab as keyof typeof technologies].icon}
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">
              {technologies[activeTab as keyof typeof technologies].title}
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-cyan-300">Key Features</h4>
              <div className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 text-purple-300">Interactive Demo</h4>
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <p className="text-purple-100 mb-4">
                  Experience this technology through our interactive demonstration
                </p>
                <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Start Interactive Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">Interactive Features</h3>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              Experience our technologies through immersive interactive features and real-time demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">🎮</div>
              <h4 className="text-xl font-semibold text-white mb-2">Interactive Demos</h4>
              <p className="text-purple-200 text-sm">Experience our technologies through hands-on interactive demonstrations</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">🔮</div>
              <h4 className="text-xl font-semibold text-white mb-2">Virtual Reality</h4>
              <p className="text-purple-200 text-sm">Step into virtual environments to explore quantum realities and AI consciousness</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">🧠</div>
              <h4 className="text-xl font-semibold text-white mb-2">AI Conversations</h4>
              <p className="text-purple-200 text-sm">Chat with our conscious AI systems and experience true artificial intelligence</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">⚡</div>
              <h4 className="text-xl font-semibold text-white mb-2">Quantum Simulations</h4>
              <p className="text-purple-200 text-sm">Witness quantum phenomena and reality manipulation in real-time simulations</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Dive into our interactive technology showcase and experience the most revolutionary 
            technologies of 2028. The future is here, and it's interactive.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Interactive Experience →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl">
              Schedule Private Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;