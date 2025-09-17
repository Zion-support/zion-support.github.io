import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2030: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('hologram');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress(prev => (prev + 1) % 101);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const demos = {
    hologram: {
      title: "Holographic Display",
      description: "3D holograms projected in mid-air",
      icon: "🌟",
      color: "from-purple-500 to-pink-500",
      features: ["360° Viewing", "Touch Interaction", "Real-time Rendering", "Multi-user Support"]
    },
    teleportation: {
      title: "Quantum Teleportation",
      description: "Instantaneous matter transportation",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      features: ["Zero Latency", "Perfect Fidelity", "Energy Efficient", "Safe Transport"]
    },
    timeDilation: {
      title: "Time Dilation Field",
      description: "Localized time manipulation",
      icon: "⏰",
      color: "from-green-500 to-emerald-500",
      features: ["Variable Speed", "Precise Control", "Reversible Effects", "Energy Conservation"]
    },
    mindReading: {
      title: "Neural Interface",
      description: "Direct brain-computer communication",
      icon: "🧠",
      color: "from-orange-500 to-red-500",
      features: ["Thought Control", "Memory Access", "Emotion Detection", "Learning Enhancement"]
    }
  };

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
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Technology Demos
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Experience cutting-edge technologies through interactive demonstrations. 
            Control the future with your own hands.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Select Technology</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(demos).map(([key, demo]) => (
                  <button
                    key={key}
                    onClick={() => setActiveDemo(key)}
                    className={`p-4 rounded-lg text-left transition-all duration-300 ${
                      activeDemo === key
                        ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-3xl mb-2">{demo.icon}</div>
                    <h4 className="text-lg font-bold">{demo.title}</h4>
                    <p className="text-sm opacity-80">{demo.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-2xl font-bold mb-4">Demo Controls</h4>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50"
                  >
                    {isRunning ? 'Running...' : 'Start Demo'}
                  </button>
                  <button
                    onClick={stopDemo}
                    disabled={!isRunning}
                    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50"
                  >
                    Stop Demo
                  </button>
                </div>
                
                {isRunning && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm opacity-80">Demo Progress</span>
                      <span className="text-sm font-semibold">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Demo Visualization */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">
                  {demos[activeDemo as keyof typeof demos].icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {demos[activeDemo as keyof typeof demos].title}
                </h3>
                <p className="text-lg opacity-80 mb-6">
                  {demos[activeDemo as keyof typeof demos].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3 text-center">
                      <span className="text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`w-full h-64 bg-gradient-to-br ${demos[activeDemo as keyof typeof demos].color} rounded-lg flex items-center justify-center ${
                  isRunning ? 'animate-pulse' : ''
                }`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">
                      {demos[activeDemo as keyof typeof demos].icon}
                    </div>
                    <p className="text-2xl font-bold">
                      {isRunning ? 'Demo Active' : 'Ready to Start'}
                    </p>
                    <p className="text-lg opacity-80">
                      {isRunning ? 'Technology in action...' : 'Click start to begin'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Capabilities</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2">Lightning Fast</h4>
              <p className="opacity-80">Instantaneous response times</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-bold mb-2">Secure</h4>
              <p className="opacity-80">Military-grade encryption</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold mb-2">Global</h4>
              <p className="opacity-80">Worldwide connectivity</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Revolutionary</h4>
              <p className="opacity-80">Breakthrough technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2030;