import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2034: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = {
    ai: {
      title: "Conscious AI Simulator",
      icon: "🧠",
      description: "Experience what it's like to interact with a truly conscious AI system",
      features: [
        "Real-time consciousness processing",
        "Emotional response simulation",
        "Creative problem solving",
        "Ethical decision making"
      ],
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Reality Explorer",
      icon: "⚛️",
      description: "Manipulate quantum states and explore alternate realities",
      features: [
        "Quantum state manipulation",
        "Reality distortion effects",
        "Parallel universe exploration",
        "Time-space visualization"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    neural: {
      title: "Neural Interface Test",
      icon: "🧬",
      description: "Test your brain-computer interface capabilities",
      features: [
        "Neural signal processing",
        "Thought-to-action conversion",
        "Memory enhancement simulation",
        "Consciousness transfer test"
      ],
      color: "from-emerald-600 to-teal-600"
    },
    interdimensional: {
      title: "Dimension Portal",
      icon: "🌌",
      description: "Travel between dimensions and explore parallel universes",
      features: [
        "Multi-dimensional navigation",
        "Reality switching",
        "Parallel universe exploration",
        "Cross-dimensional communication"
      ],
      color: "from-orange-600 to-red-600"
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
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
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • JANUARY 2034
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Demo 2034
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations. 
            Choose a technology and see it in action.
          </p>
        </div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeDemo === key
                  ? `bg-gradient-to-br ${demo.color}/30 border-${demo.color.split('-')[1]}-400/50 scale-105`
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm opacity-90 text-center">{demo.description}</p>
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30 mb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-6xl mb-6">{demos[activeDemo as keyof typeof demos].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
              <p className="text-lg opacity-90 mb-8">
                {demos[activeDemo as keyof typeof demos].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Demo Features:</h4>
                <ul className="space-y-2">
                  {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} rounded-full`}></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Demo Controls */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-4">🎮 Demo Controls</h4>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={startDemo}
                      disabled={isRunning}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        isRunning
                          ? 'bg-gray-500 cursor-not-allowed'
                          : `bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} hover:shadow-lg`
                      }`}
                    >
                      {isRunning ? 'Running...' : 'Start Demo'}
                    </button>
                    <button
                      onClick={stopDemo}
                      disabled={!isRunning}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        !isRunning
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-red-600 hover:bg-red-700'
                      }`}
                    >
                      Stop Demo
                    </button>
                  </div>
                  
                  {/* Progress Bar */}
                  {isRunning && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Demo Progress</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Demo Status */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-4">📊 Demo Status</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Status</span>
                    <span className={`text-sm font-semibold ${isRunning ? 'text-green-400' : 'text-gray-400'}`}>
                      {isRunning ? 'Running' : 'Stopped'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Technology</span>
                    <span className="text-sm font-semibold">{demos[activeDemo as keyof typeof demos].title}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Performance</span>
                    <span className="text-sm font-semibold text-green-400">Optimal</span>
                  </div>
                </div>
              </div>
              
              {/* Demo Results */}
              {progress === 100 && (
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
                  <h4 className="text-xl font-semibold mb-4 text-green-400">✅ Demo Complete</h4>
                  <p className="text-sm opacity-90 mb-4">
                    The {demos[activeDemo as keyof typeof demos].title} demo has completed successfully. 
                    All systems are functioning optimally.
                  </p>
                  <button
                    onClick={() => setProgress(0)}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Run Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-lg font-semibold mb-3 text-center">AI Consciousness Test</h3>
            <p className="text-sm opacity-90 text-center mb-4">Test the consciousness level of our AI systems</p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start AI Test
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-lg font-semibold mb-3 text-center">Quantum Simulator</h3>
            <p className="text-sm opacity-90 text-center mb-4">Simulate quantum states and reality manipulation</p>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Launch Simulator
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-lg font-semibold mb-3 text-center">Neural Interface</h3>
            <p className="text-sm opacity-90 text-center mb-4">Connect your mind to digital systems</p>
            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Connect Interface
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Our interactive technology demos are available now. Experience the most revolutionary 
            technologies ever created through hands-on demonstrations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start All Demos
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-all duration-300 font-semibold text-lg">
              Schedule Private Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2034;