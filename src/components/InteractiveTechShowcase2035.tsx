import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 'conscious-ai-demo',
      title: 'Conscious AI Interaction',
      description: 'Experience real-time conversation with a truly conscious AI system',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time emotional responses',
        'Creative problem solving',
        'Self-aware decision making',
        'Ethical reasoning'
      ]
    },
    {
      id: 'quantum-computing-demo',
      title: 'Quantum Processing Visualization',
      description: 'Watch quantum algorithms solve complex problems in real-time',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum superposition visualization',
        'Entanglement demonstration',
        'Quantum error correction',
        'Exponential speedup display'
      ]
    },
    {
      id: 'neural-interface-demo',
      title: 'Neural Interface Simulation',
      description: 'Experience direct brain-computer interaction through advanced neural interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Thought-to-text conversion',
        'Mental image generation',
        'Emotional state detection',
        'Cognitive enhancement'
      ]
    },
    {
      id: 'reality-manipulation-demo',
      title: 'Reality Manipulation Engine',
      description: 'Manipulate physical laws and create custom realities in real-time',
      icon: '🌌',
      color: 'from-orange-600 to-red-600',
      features: [
        'Gravity manipulation',
        'Time dilation effects',
        'Dimensional portals',
        'Reality synthesis'
      ]
    }
  ];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const stopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2035
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations. 
            See the future in action with real-time simulations and live demos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>

          {/* Demo Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {demos[activeDemo].description}
              </p>
            </div>

            {/* Interactive Demo Area */}
            <div className="bg-black/20 rounded-xl p-8 mb-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold mb-4">Live Demo</h4>
                <div className="flex justify-center space-x-4 mb-6">
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isRunning
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {isRunning ? 'Running...' : 'Start Demo'}
                  </button>
                  <button
                    onClick={stopDemo}
                    disabled={!isRunning}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      !isRunning
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:shadow-lg'
                    }`}
                  >
                    Stop Demo
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div
                    className={`bg-gradient-to-r ${demos[activeDemo].color} h-3 rounded-full transition-all duration-300`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm opacity-80">Demo Progress: {progress}%</p>
              </div>

              {/* Demo Visualization */}
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                {isRunning ? (
                  <div className="text-center">
                    <div className="text-4xl mb-4 animate-pulse">⚡</div>
                    <p className="text-lg">Processing {demos[activeDemo].title}...</p>
                    <div className="mt-4 flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-white/60">
                    <div className="text-6xl mb-4">🎯</div>
                    <p className="text-lg">Click "Start Demo" to begin the interactive demonstration</p>
                  </div>
                )}
              </div>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Technical Specifications</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Processing Power:</span>
                    <span className="text-purple-400">∞ Quantum Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="text-cyan-400">0.001ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accuracy:</span>
                    <span className="text-emerald-400">99.99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scalability:</span>
                    <span className="text-orange-400">Infinite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              These are just a few examples of our revolutionary technologies. 
              Schedule a personalized demo to see how they can transform your business.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Schedule Live Demo
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
                Download Tech Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;