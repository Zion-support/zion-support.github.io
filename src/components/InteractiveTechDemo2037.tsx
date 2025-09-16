import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2037: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const demos = {
    ai: {
      title: "Conscious AI Simulation",
      description: "Experience how our conscious AI processes thoughts and emotions",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      steps: [
        "Initializing consciousness matrix...",
        "Loading emotional intelligence protocols...",
        "Activating creative problem solving...",
        "Establishing ethical decision framework...",
        "Connecting to human collaboration interface...",
        "Conscious AI is now active!"
      ]
    },
    quantum: {
      title: "Quantum Reality Engine",
      description: "Watch as quantum computing processes reality itself",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      steps: [
        "Calibrating quantum processors...",
        "Initializing reality manipulation algorithms...",
        "Loading parallel universe interfaces...",
        "Activating time-space optimization...",
        "Establishing infinite computational power...",
        "Quantum Reality Engine is operational!"
      ]
    },
    interdimensional: {
      title: "Interdimensional Portal",
      description: "Step through dimensions with our interdimensional technology",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      steps: [
        "Scanning dimensional frequencies...",
        "Establishing cross-reality connections...",
        "Loading multi-dimensional data storage...",
        "Activating reality bridging protocols...",
        "Synchronizing infinite scalability...",
        "Interdimensional Portal is open!"
      ]
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && progress < demos[activeDemo as keyof typeof demos].steps.length) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= demos[activeDemo as keyof typeof demos].steps.length - 1) {
            setIsRunning(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress, activeDemo]);

  const startDemo = () => {
    setProgress(0);
    setIsRunning(true);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Demo 2037
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selection */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">Choose Your Demo</h3>
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`w-full p-6 rounded-xl transition-all duration-300 ${
                  activeDemo === key
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold">{demo.title}</h4>
                    <p className="text-sm opacity-80">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Demo Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[activeDemo as keyof typeof demos].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
              <p className="text-lg opacity-90">{demos[activeDemo as keyof typeof demos].description}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{progress}/{demos[activeDemo as keyof typeof demos].steps.length}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${(progress / demos[activeDemo as keyof typeof demos].steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Current Step */}
            <div className="bg-white/10 rounded-lg p-6 mb-8 min-h-[120px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4 animate-spin">⚡</div>
                <p className="text-lg font-semibold">
                  {isRunning && progress < demos[activeDemo as keyof typeof demos].steps.length
                    ? demos[activeDemo as keyof typeof demos].steps[progress]
                    : progress >= demos[activeDemo as keyof typeof demos].steps.length
                    ? "Demo Complete! 🎉"
                    : "Ready to start demo"
                  }
                </p>
              </div>
            </div>

            {/* Control Buttons */}
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
                onClick={resetDemo}
                className="flex-1 py-3 px-6 rounded-lg font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
            <p className="text-sm opacity-80">Experience technology as it happens</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Interactive Controls</h3>
            <p className="text-sm opacity-80">Take control of the demonstration</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold mb-2">Future Technology</h3>
            <p className="text-sm opacity-80">Preview tomorrow's innovations today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2037;