import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2034: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    {
      name: 'Conscious AI',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      description: 'Self-aware artificial intelligence'
    },
    {
      name: 'Quantum Reality',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      description: 'Reality manipulation engine'
    },
    {
      name: 'Neural Interface',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      description: 'Brain-computer integration'
    },
    {
      name: 'Interdimensional',
      icon: '🌌',
      color: 'from-indigo-600 to-purple-600',
      description: 'Multi-dimensional computing'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);

  useEffect(() => {
    if (isRunning) {
      const techInterval = setInterval(() => {
        setCurrentTech(prev => (prev + 1) % technologies.length);
      }, 2000);
      return () => clearInterval(techInterval);
    }
  }, [isRunning, technologies.length]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
    setCurrentTech(0);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
    setCurrentTech(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH DEMO • JANUARY 2034
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Demo
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time with this interactive demonstration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Demo Controls */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/50">
              <h3 className="text-2xl font-bold mb-6">Demo Controls</h3>
              
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isRunning
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {isRunning ? 'Running...' : 'Start Demo'}
                  </button>
                  
                  <button
                    onClick={resetDemo}
                    className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-red-600 to-pink-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Processing Power</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-300 ${
                        isRunning ? 'animate-pulse' : ''
                      }`}
                      style={{width: `${progress}%`}}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Consciousness Level</span>
                    <span>{isRunning ? '∞' : '0'}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${
                        isRunning ? 'animate-pulse' : ''
                      }`}
                      style={{width: isRunning ? '100%' : '0%'}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Selector */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/50">
              <h3 className="text-2xl font-bold mb-6">Active Technology</h3>
              
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      currentTech === index
                        ? `bg-gradient-to-r ${tech.color} border-transparent`
                        : 'bg-gray-700/50 border-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{tech.icon}</span>
                      <div>
                        <h4 className="font-semibold">{tech.name}</h4>
                        <p className="text-sm opacity-75">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Visualization */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/50">
            <h3 className="text-2xl font-bold mb-6">Live Demo Visualization</h3>
            
            <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
                {isRunning && (
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping animation-delay-1000"></div>
                    <div className="absolute bottom-8 left-8 w-2 h-2 bg-emerald-400 rounded-full animate-ping animation-delay-2000"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-3000"></div>
                  </div>
                )}
              </div>

              {/* Central Technology Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-8xl mb-4 transition-all duration-500 ${
                    isRunning ? 'animate-spin' : ''
                  }`}>
                    {technologies[currentTech].icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    {technologies[currentTech].name}
                  </h4>
                  <p className="text-gray-300">
                    {isRunning ? 'Processing...' : 'Ready to start'}
                  </p>
                </div>
              </div>

              {/* Progress Rings */}
              {isRunning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 border-4 border-purple-500/30 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-purple-500 rounded-full animate-spin animation-delay-500"></div>
                    <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-r-cyan-500 rounded-full animate-spin animation-delay-1000"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Demo Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{progress}%</div>
                <div className="text-sm text-gray-300">Complete</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {isRunning ? '∞' : '0'}
                </div>
                <div className="text-sm text-gray-300">Consciousness</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Experience the Full Demo</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            This is just a preview of what our revolutionary technologies can do. 
            Experience the full interactive demonstration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              Start Full Demo
            </button>
            <button className="border border-indigo-400 px-12 py-4 rounded-lg hover:bg-indigo-400/20 transition-colors font-semibold text-lg hover:scale-105 transform">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2034;