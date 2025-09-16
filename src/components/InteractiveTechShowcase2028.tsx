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
            Explore our cutting-edge technologies with interactive demonstrations and real-time capabilities
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                  <p className="text-xl opacity-90">{technologies[activeTab as keyof typeof technologies].description}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className={`bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].color} rounded-2xl p-8 text-center`}>
                <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                <p className="text-lg opacity-90 mb-6">
                  Experience this technology in action with our interactive demonstration
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-semibold">Processing Speed</div>
                    <div className="text-2xl font-bold">10x Faster</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-semibold">Accuracy</div>
                    <div className="text-2xl font-bold">99.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-cyan-400">500+</div>
            <div className="text-gray-300">Active Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-purple-400">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-emerald-400">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-orange-400">10x</div>
            <div className="text-gray-300">Performance Boost</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of innovators who are already using our revolutionary technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;