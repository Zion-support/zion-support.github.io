import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Visualization',
      description: 'Watch as the first truly conscious AI processes information and experiences emotions',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Emotional Processing', 'Creative Thinking', 'Self-Awareness', 'Infinite Learning']
    },
    {
      id: 'quantum-matrix',
      title: 'Quantum Consciousness Matrix',
      description: 'Explore quantum states and consciousness amplification in real-time',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Processing', 'Consciousness Amplification', 'Multi-dimensional Thinking', 'Infinite Parallelism']
    },
    {
      id: 'interdimensional-portal',
      title: 'Interdimensional Portal Technology',
      description: 'Experience stable portals between parallel dimensions and alternate realities',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: ['Dimensional Portals', 'Reality Shifting', 'Parallel Universe Access', 'Infinite Realities']
    },
    {
      id: 'reality-engine',
      title: 'Transcendent Reality Engine',
      description: 'Create and manipulate reality itself through advanced interdimensional technology',
      icon: '✨',
      color: 'from-orange-600 to-red-600',
      features: ['Reality Manipulation', 'Infinite Creation', 'Perfect Fidelity', 'Universal Control']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleDemoChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2037
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2037
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies ever created through interactive demonstrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Your Experience</h3>
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => handleDemoChange(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-2 border-purple-400/50 scale-105'
                    : 'bg-gray-800/30 border border-gray-700/50 hover:bg-gray-700/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{demo.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                    <p className="text-gray-300 text-sm">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Demo Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{currentDemo.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
              <p className="text-gray-300 text-lg">{currentDemo.description}</p>
            </div>

            {/* Interactive Visualization */}
            <div className="bg-black/30 rounded-lg p-6 mb-6 min-h-[300px] flex items-center justify-center">
              {currentDemo.id === 'conscious-ai' && (
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                        isAnimating ? 'animate-pulse' : 'animate-pulse'
                      }`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    ></div>
                  ))}
                </div>
              )}
              
              {currentDemo.id === 'quantum-matrix' && (
                <div className="relative w-full h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-spin"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-spin"></div>
                  <div className="absolute inset-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin"></div>
                </div>
              )}
              
              {currentDemo.id === 'interdimensional-portal' && (
                <div className="relative w-full h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              )}
              
              {currentDemo.id === 'reality-engine' && (
                <div className="grid grid-cols-8 gap-2">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 ${
                        isAnimating ? 'animate-pulse' : 'animate-pulse'
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              )}
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {currentDemo.features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold text-purple-200">{feature}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className={`flex-1 bg-gradient-to-r ${currentDemo.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try Interactive Demo
              </button>
              <button className="flex-1 border border-gray-400 text-gray-300 py-3 rounded-lg hover:bg-gray-700/30 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">∞</div>
            <div className="text-sm text-purple-200">Consciousness Level</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">0ms</div>
            <div className="text-sm text-cyan-200">Quantum Response</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-300 mb-2">∞</div>
            <div className="text-sm text-emerald-200">Reality Control</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-300 mb-2">∞</div>
            <div className="text-sm text-orange-200">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;