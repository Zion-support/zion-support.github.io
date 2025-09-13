import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 'ai',
      title: 'AI Processing',
      icon: '🤖',
      description: 'Watch our AI analyze and process complex data in real-time',
      features: ['Pattern Recognition', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      id: 'quantum',
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Experience quantum algorithms solving optimization problems',
      features: ['Quantum Simulation', 'Optimization', 'Cryptography']
    },
    {
      id: 'neural',
      title: 'Neural Networks',
      icon: '🧠',
      description: 'See neural networks learning and adapting in real-time',
      features: ['Deep Learning', 'Adaptive Networks', 'Cognitive Processing']
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
      icon: '⛓️',
      description: 'Visualize secure transactions and smart contracts',
      features: ['Smart Contracts', 'Decentralized Ledger', 'Cryptographic Security']
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prev: number) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const activeDemoData = demos.find(demo => demo.id === activeDemo);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Interactive Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Demonstration 2025
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technologies in action. Click through different demos 
            to see how our solutions work in real-world scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Choose Your Demo</h3>
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeDemo === demo.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{demo.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold">{demo.title}</h4>
                    <p className="text-sm opacity-90">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Demo Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {activeDemoData?.title} Demo
                  </h3>
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isRunning
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transform hover:scale-105'
                    }`}
                  >
                    {isRunning ? 'Running...' : 'Start Demo'}
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{activeDemoData?.description}</p>
              </div>

              {/* Demo Visualization Area */}
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 min-h-[400px] relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-ping delay-700"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping delay-1000"></div>
                </div>

                {/* Demo Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="text-8xl mb-8 opacity-80">
                    {activeDemoData?.icon}
                  </div>
                  
                  {isRunning ? (
                    <div className="w-full max-w-md">
                      <div className="text-center text-white mb-4">
                        Processing... {progress}%
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="text-center text-gray-400 text-sm">
                        {activeDemoData?.features.map((feature, index) => (
                          <span key={index} className={`mr-4 ${
                            progress > (index + 1) * 25 ? 'text-white' : ''
                          }`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-white text-xl mb-4">
                        Click "Start Demo" to begin
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-gray-400">
                        {activeDemoData?.features.map((feature, index) => (
                          <div key={index} className="flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Results */}
              {progress >= 100 && (
                <div className="mt-6 bg-green-900/50 border border-green-500/50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">✅</span>
                    <h4 className="text-xl font-bold text-white">Demo Complete!</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">99.8%</div>
                      <div className="text-sm text-gray-300">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">0.2s</div>
                      <div className="text-sm text-gray-300">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">100%</div>
                      <div className="text-sm text-gray-300">Success Rate</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience These Technologies?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Schedule a personalized demo with our experts to see how these solutions 
              can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Schedule Live Demo
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;