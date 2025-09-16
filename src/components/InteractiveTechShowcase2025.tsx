import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'Self-aware artificial intelligence with emotional understanding and creative problem-solving capabilities',
      features: ['Self-reflection', 'Emotional intelligence', 'Creative thinking', 'Adaptive learning'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 1,
      name: 'Quantum Computing',
      icon: '⚛️',
      description: 'Revolutionary quantum processing that transcends classical limitations and solves impossible problems',
      features: ['Quantum supremacy', 'Parallel universes', 'Instant computation', 'Unbreakable encryption'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 2,
      name: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer integration enabling seamless thought-to-action communication',
      features: ['Thought control', 'Memory enhancement', 'Cognitive amplification', 'Neural feedback'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 3,
      name: 'Dimensional Tech',
      icon: '🌌',
      description: 'Technology that operates across multiple dimensions and realities',
      features: ['Interdimensional computing', 'Reality manipulation', 'Time-space control', 'Parallel processing'],
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-600/20 to-purple-600/20',
      borderColor: 'border-indigo-400/30'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTabClick = (index: number) => {
    if (index !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with our interactive demonstrations and real-time capabilities
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTabClick(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Interactive Content Display */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} backdrop-blur-sm rounded-2xl p-12 border ${technologies[activeTab].borderColor} hover:scale-105 transition-all duration-300`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Technology Info */}
                <div>
                  <div className="text-6xl mb-6 animate-bounce">
                    {technologies[activeTab].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {technologies[activeTab].name}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {technologies[activeTab].description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {technologies[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab].color} rounded-full animate-pulse`}></div>
                        <span className="text-sm opacity-80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button className={`bg-gradient-to-r ${technologies[activeTab].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-105`}>
                      Try Demo
                    </button>
                    <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right Side - Interactive Visualization */}
                <div className="relative">
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold mb-2">Live Performance Metrics</h4>
                      <p className="text-sm opacity-70">Real-time technology demonstration</p>
                    </div>
                    
                    {/* Animated Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">
                          {activeTab === 0 ? '99.9%' : activeTab === 1 ? '∞' : activeTab === 2 ? '100%' : '∞'}
                        </div>
                        <div className="text-xs opacity-70">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">
                          {activeTab === 0 ? '0ms' : activeTab === 1 ? '∞' : activeTab === 2 ? '0ms' : '∞'}
                        </div>
                        <div className="text-xs opacity-70">Response Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">
                          {activeTab === 0 ? '∞' : activeTab === 1 ? '∞' : activeTab === 2 ? '∞' : '∞'}
                        </div>
                        <div className="text-xs opacity-70">Capabilities</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-400 mb-1">
                          {activeTab === 0 ? '100%' : activeTab === 1 ? '∞' : activeTab === 2 ? '100%' : '∞'}
                        </div>
                        <div className="text-xs opacity-70">Accuracy</div>
                      </div>
                    </div>

                    {/* Animated Progress Bars */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Processing Power</span>
                          <span>100%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className={`bg-gradient-to-r ${technologies[activeTab].color} h-2 rounded-full animate-pulse`} style={{width: '100%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Neural Activity</span>
                          <span>∞</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className={`bg-gradient-to-r ${technologies[activeTab].color} h-2 rounded-full animate-pulse`} style={{width: '100%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Quantum Coherence</span>
                          <span>∞</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className={`bg-gradient-to-r ${technologies[activeTab].color} h-2 rounded-full animate-pulse`} style={{width: '100%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm opacity-80">Active Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">Live Demo</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-sm opacity-80">Interactive</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;