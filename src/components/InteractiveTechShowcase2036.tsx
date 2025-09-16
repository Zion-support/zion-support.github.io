import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Ethical Decision Making',
        'Human-AI Collaboration'
      ],
      stats: '99.9% Success Rate',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Direct neural interface with quantum computing systems for enhanced cognitive processing',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Reality Manipulation',
        'Time Perception Control'
      ],
      stats: '1000x Processing Power',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'interdimensional-tech',
      title: 'Interdimensional Technology',
      icon: '🌌',
      description: 'Breakthrough technology that allows interaction with parallel dimensions and alternate realities',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Multiverse Communication',
        'Temporal Navigation'
      ],
      stats: 'Infinite Possibilities',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE TECHNOLOGY SHOWCASE • 2036
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Interact with our cutting-edge technologies and discover how they're reshaping the world
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl mr-4">{technologies[activeTab].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{technologies[activeTab].title}</h3>
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${technologies[activeTab].color} rounded-full text-sm font-semibold`}>
                      🚀 {technologies[activeTab].stats}
                    </div>
                  </div>
                </div>
                
                <p className="text-lg opacity-90 mb-6">
                  {technologies[activeTab].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {technologies[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <button className={`bg-gradient-to-r ${technologies[activeTab].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Learn More
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
                    Try Demo
                  </button>
                </div>
              </div>

              {/* Right Side - Interactive Demo */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 rounded-xl p-6 border border-purple-400/30">
                  <h4 className="text-lg font-semibold mb-4 text-center">Interactive Demo</h4>
                  <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-6xl animate-pulse">
                      {technologies[activeTab].icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm opacity-80 mb-2">Real-time Processing</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className={`bg-gradient-to-r ${technologies[activeTab].color} h-2 rounded-full animate-pulse`} style={{width: '85%'}}></div>
                    </div>
                    <div className="text-xs opacity-60 mt-2">85% Complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50M+</div>
            <div className="text-lg opacity-80">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
            <div className="text-lg opacity-80">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-lg opacity-80">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;