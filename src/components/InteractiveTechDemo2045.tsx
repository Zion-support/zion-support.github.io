import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2045: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    {
      name: 'Conscious AI',
      icon: '🧠',
      description: 'Self-aware artificial intelligence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Computing',
      icon: '⚛️',
      description: 'Quantum-powered processing',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Neural Interface',
      icon: '🔗',
      description: 'Direct brain-computer connection',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Reality Engine',
      icon: '🌌',
      description: 'Reality manipulation technology',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentTech((prev) => (prev + 1) % technologies.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isActive, technologies.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH DEMO • JANUARY 2045
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Interactive Tech Demo 2045
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience cutting-edge technology through interactive demonstrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{technologies[currentTech].icon}</div>
              <h3 className="text-3xl font-bold mb-2">{technologies[currentTech].name}</h3>
              <p className="text-lg opacity-75">{technologies[currentTech].description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Processing Status</span>
                  <span className="text-sm">{progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r ${technologies[currentTech].color} h-3 rounded-full transition-all duration-300`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <div className="text-green-400 font-mono text-sm space-y-1">
                  <div>Initializing {technologies[currentTech].name}...</div>
                  <div>Loading consciousness matrix...</div>
                  <div>Connecting to quantum network...</div>
                  <div className={progress > 50 ? 'text-green-400' : 'text-gray-500'}>
                    Reality simulation {progress > 50 ? 'active' : 'pending'}...
                  </div>
                  <div className={progress > 80 ? 'text-green-400' : 'text-gray-500'}>
                    Neural interface {progress > 80 ? 'connected' : 'connecting'}...
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsActive(!isActive)}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:shadow-lg'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg'
                }`}
              >
                {isActive ? 'Stop Demo' : 'Start Interactive Demo'}
              </button>
            </div>
          </div>

          {/* Technology Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Available Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ${
                    currentTech === index ? 'ring-2 ring-white' : ''
                  }`}
                  onClick={() => {
                    setCurrentTech(index);
                    setProgress(0);
                  }}
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="font-bold mb-2">{tech.name}</h4>
                  <p className="text-sm opacity-75">{tech.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4">Demo Features</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Real-time processing simulation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Interactive technology switching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Live status monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Consciousness matrix visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Explore our full collection of revolutionary technologies and interactive demonstrations
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/pages/UltimateTechRevolution2045"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Explore All Technologies
              </a>
              <a 
                href="/pages/RevolutionaryTechShowcase2045"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold"
              >
                View Showcase
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2045;