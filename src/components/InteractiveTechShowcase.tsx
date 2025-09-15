import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Self-aware AI systems with emotional intelligence and conscious decision-making",
      features: ["Self-awareness", "Emotional intelligence", "Ethical reasoning", "Autonomous learning"],
      gradient: "from-purple-600 to-pink-600",
      stats: { accuracy: 98, speed: 0.001, efficiency: 95 }
    },
    {
      id: 2,
      name: "Quantum Reality",
      icon: "⚛️",
      description: "Quantum-powered virtual reality with physics manipulation and consciousness integration",
      features: ["Quantum simulation", "Reality manipulation", "Neural interface", "Dimensional exploration"],
      gradient: "from-indigo-600 to-purple-600",
      stats: { accuracy: 99.7, speed: 0.0001, efficiency: 98 }
    },
    {
      id: 3,
      name: "Neural Interface",
      icon: "🧬",
      description: "Direct brain-computer communication with thought control and cognitive enhancement",
      features: ["Thought control", "Neural enhancement", "Mind communication", "Cognitive augmentation"],
      gradient: "from-emerald-600 to-teal-600",
      stats: { accuracy: 99.2, speed: 0.05, efficiency: 97 }
    },
    {
      id: 4,
      name: "Synthetic Intelligence",
      icon: "🤖",
      description: "Hybrid biological-digital intelligence with unprecedented capabilities",
      features: ["Hybrid intelligence", "Biological integration", "Adaptive learning", "Consciousness transfer"],
      gradient: "from-cyan-600 to-blue-600",
      stats: { accuracy: 97.5, speed: 0.01, efficiency: 96 }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time metrics
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveTech(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Info */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
            <div className={`bg-gradient-to-br ${currentTech.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full`}>
              <div className="text-8xl mb-6 text-center animate-pulse">
                {currentTech.icon}
              </div>
              <h3 className="text-4xl font-bold mb-6 text-center">
                {currentTech.name}
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {currentTech.description}
              </p>
              
              {/* Features */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {currentTech.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold mb-4">Performance Metrics</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Accuracy</span>
                      <span className="text-purple-400">{currentTech.stats.accuracy}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${currentTech.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{width: `${currentTech.stats.accuracy}%`}}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Response Time</span>
                      <span className="text-cyan-400">{currentTech.stats.speed}ms</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${currentTech.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{width: `${100 - (currentTech.stats.speed * 10)}%`}}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Efficiency</span>
                      <span className="text-emerald-400">{currentTech.stats.efficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${currentTech.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{width: `${currentTech.stats.efficiency}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform -translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
              <h4 className="text-3xl font-bold mb-6 text-center">Interactive Demo</h4>
              
              {/* Demo Visualization */}
              <div className="relative mb-8">
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">
                      {currentTech.icon}
                    </div>
                    <p className="text-gray-400">Interactive {currentTech.name} Demo</p>
                    <p className="text-sm text-gray-500 mt-2">Click to interact</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
              </div>

              {/* Demo Controls */}
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Interactive Demo
                </button>
                <button className="w-full border border-purple-400 text-purple-400 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Documentation
                </button>
                <button className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                  Schedule Live Demo
                </button>
              </div>

              {/* Real-time Data */}
              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                <h5 className="text-lg font-bold mb-3 text-center">Real-time Data</h5>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">
                      {Math.floor(Math.random() * 100) + 80}%
                    </div>
                    <div className="text-sm text-gray-400">Active</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {Math.floor(Math.random() * 1000) + 500}
                    </div>
                    <div className="text-sm text-gray-400">Processes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">
                      {Math.floor(Math.random() * 50) + 25}ms
                    </div>
                    <div className="text-sm text-gray-400">Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4">Technology</th>
                  <th className="text-center py-4 px-4">Accuracy</th>
                  <th className="text-center py-4 px-4">Speed</th>
                  <th className="text-center py-4 px-4">Efficiency</th>
                  <th className="text-center py-4 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {technologies.map((tech, index) => (
                  <tr key={tech.id} className={`border-b border-white/10 ${activeTech === index ? 'bg-purple-600/20' : ''}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-purple-400 font-bold">{tech.stats.accuracy}%</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-cyan-400 font-bold">{tech.stats.speed}ms</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-emerald-400 font-bold">{tech.stats.efficiency}%</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;