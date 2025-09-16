import React, { useState } from 'react';

const InteractiveTechDemo2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isRunning, setIsRunning] = useState(false);

  const demos = {
    ai: {
      title: "AI Consciousness Test",
      description: "Test the consciousness level of our AI systems",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80",
      features: [
        "Self-aware responses",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning"
      ]
    },
    quantum: {
      title: "Quantum Simulator",
      description: "Experience quantum computing in action",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/80 to-blue-900/80",
      features: [
        "Quantum state visualization",
        "Superposition demonstration",
        "Entanglement effects",
        "Quantum algorithms"
      ]
    },
    neural: {
      title: "Neural Interface",
      description: "Direct neural interface technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80",
      features: [
        "Thought-controlled computing",
        "Neural signal processing",
        "Brain-computer interface",
        "Real-time feedback"
      ]
    }
  };

  const runDemo = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Demo 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        {/* Demo Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === key
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].bgColor} backdrop-blur-sm rounded-2xl p-12`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{demos[activeDemo as keyof typeof demos].icon}</div>
              <h3 className="text-4xl font-bold mb-6">{demos[activeDemo as keyof typeof demos].title}</h3>
              <p className="text-xl opacity-90 mb-8">{demos[activeDemo as keyof typeof demos].description}</p>
              
              <div className="space-y-4 mb-8">
                {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={runDemo}
                disabled={isRunning}
                className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg disabled:opacity-50`}
              >
                {isRunning ? 'Running Demo...' : 'Start Demo →'}
              </button>
            </div>
            
            <div className="relative">
              {/* Demo Visualization */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-80 flex items-center justify-center">
                {isRunning ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-spin">⚡</div>
                    <p className="text-xl">Running {demos[activeDemo as keyof typeof demos].title}...</p>
                    <div className="mt-4 flex justify-center space-x-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-8xl mb-4 opacity-50">{demos[activeDemo as keyof typeof demos].icon}</div>
                    <p className="text-xl opacity-75">Click "Start Demo" to begin</p>
                  </div>
                )}
              </div>
              
              {/* Demo Status */}
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Demo Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    isRunning ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {isRunning ? 'Running' : 'Ready'}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: isRunning ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Demo Grid */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🎯 Quick Demo Access</h3>
            <p className="text-xl opacity-90">Try different technology demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(demos).map(([key, demo]) => (
              <div
                key={key}
                className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeDemo === key ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setActiveDemo(key)}
              >
                <div className="text-4xl mb-4 text-center">{demo.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-center">{demo.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{demo.description}</p>
                <button className={`w-full bg-gradient-to-r ${demo.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Select Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2036;