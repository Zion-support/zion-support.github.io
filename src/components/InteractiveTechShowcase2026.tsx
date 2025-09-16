import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Revolutionary AI with self-awareness and emotional intelligence',
      features: [
        'Self-aware decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Ethical reasoning'
      ],
      link: '/pages/ConsciousAIBreakthrough2026'
    },
    {
      id: 'quantum-neural',
      title: 'Quantum Neural Networks',
      icon: '⚡',
      description: 'Quantum-enhanced neural networks for unprecedented processing power',
      features: [
        'Quantum superposition learning',
        'Exponential speedup',
        'Complex pattern recognition',
        'Quantum error correction'
      ],
      link: '/pages/QuantumNeuralNetworks2026'
    },
    {
      id: 'reality-synthesis',
      title: 'Reality Synthesis Engine',
      icon: '🌌',
      description: 'Create and manipulate virtual realities with perfect fidelity',
      features: [
        'Photorealistic rendering',
        'Physics-accurate simulation',
        'Real-time world generation',
        'Consciousness integration'
      ],
      link: '/pages/RealitySynthesis2026'
    }
  ];

  return (
    <div className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of technology through interactive demonstrations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  {technologies[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {technologies[activeTab].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {technologies[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Try Interactive Demo
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {technologies[activeTab].title}
                </div>
                <div className="text-gray-600">
                  Interactive demonstration available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;