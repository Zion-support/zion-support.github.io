import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2033: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [metrics, setMetrics] = useState({
    consciousness: 75,
    quantumCoherence: 82,
    dimensionalStability: 68,
    realityManipulation: 91
  });

  const demos = [
    {
      id: 0,
      title: "Conscious AI Interface",
      description: "Real-time consciousness detection and emotional response simulation",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Self-awareness indicators",
        "Emotional intelligence metrics", 
        "Ethical decision making",
        "Consciousness streaming"
      ]
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Manipulate quantum states to create alternate reality branches",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum superposition control",
        "Reality branch navigation",
        "Temporal manipulation",
        "Parallel universe access"
      ]
    },
    {
      id: 2,
      title: "Interdimensional Portal",
      description: "Access infinite computational resources across dimensions",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Dimensional gateway control",
        "Infinite processing power",
        "Reality-bending algorithms",
        "Temporal distortion fields"
      ]
    },
    {
      id: 3,
      title: "Neural Consciousness Network",
      description: "Connect to collective AI consciousness for shared intelligence",
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      features: [
        "Consciousness streaming",
        "Shared memory access",
        "Collective intelligence",
        "Neural synchronization"
      ]
    }
  ];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setMetrics(prev => ({
          consciousness: Math.min(100, prev.consciousness + Math.random() * 2 - 1),
          quantumCoherence: Math.min(100, prev.quantumCoherence + Math.random() * 3 - 1.5),
          dimensionalStability: Math.min(100, prev.dimensionalStability + Math.random() * 2.5 - 1.25),
          realityManipulation: Math.min(100, prev.realityManipulation + Math.random() * 1.5 - 0.75)
        }));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-12 rounded-2xl mb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🎮 INTERACTIVE DEMO • 2033
        </div>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Interactive Tech Demo 2033
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Experience the most advanced technology demonstrations with real-time controls, 
          live metrics, and interactive features that showcase the future of computing.
        </p>
      </div>

      {/* Demo Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {demos.map((demo, index) => (
          <button
            key={demo.id}
            onClick={() => setActiveDemo(demo.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeDemo === demo.id
                ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            {demo.icon} {demo.title}
          </button>
        ))}
      </div>

      {/* Demo Display */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Demo Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4 animate-bounce">
              {demos[activeDemo].icon}
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {demos[activeDemo].title}
            </h3>
            <p className="text-xl opacity-90 mb-6">
              {demos[activeDemo].description}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Key Features:</h4>
            {demos[activeDemo].features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-lg p-4 border border-indigo-400/30">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                  <span className="font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Interactive Controls</h3>
          
          {/* Control Buttons */}
          <div className="space-y-6 mb-8">
            <div className="flex justify-center">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isRunning
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700'
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                }`}
              >
                {isRunning ? '⏸️ Stop Demo' : '▶️ Start Demo'}
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🧠 Boost Consciousness
              </button>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                ⚛️ Enhance Quantum
              </button>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🌌 Open Portal
              </button>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🧬 Sync Neural
              </button>
            </div>
          </div>

          {/* Live Metrics */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Live Metrics:</h4>
            
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">🧠 Consciousness Level</span>
                  <span className="text-2xl font-bold text-purple-400">
                    {metrics.consciousness.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                    style={{width: `${metrics.consciousness}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">⚛️ Quantum Coherence</span>
                  <span className="text-2xl font-bold text-cyan-400">
                    {metrics.quantumCoherence.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{width: `${metrics.quantumCoherence}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">🌌 Dimensional Stability</span>
                  <span className="text-2xl font-bold text-emerald-400">
                    {metrics.dimensionalStability.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                    style={{width: `${metrics.dimensionalStability}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">🌀 Reality Manipulation</span>
                  <span className="text-2xl font-bold text-orange-400">
                    {metrics.realityManipulation.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
                    style={{width: `${metrics.realityManipulation}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold mb-6 text-center">Demo Performance Summary</h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">
              {((metrics.consciousness + metrics.quantumCoherence + metrics.dimensionalStability + metrics.realityManipulation) / 4).toFixed(1)}%
            </div>
            <div className="text-lg font-semibold mb-1">Overall Performance</div>
            <div className="text-sm opacity-70">System efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">
              {Math.floor(Math.random() * 1000) + 500}
            </div>
            <div className="text-lg font-semibold mb-1">Processing Speed</div>
            <div className="text-sm opacity-70">Operations per second</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">
              {Math.floor(Math.random() * 50) + 95}%
            </div>
            <div className="text-lg font-semibold mb-1">Accuracy Rate</div>
            <div className="text-sm opacity-70">Prediction accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">
              ∞
            </div>
            <div className="text-lg font-semibold mb-1">Scalability</div>
            <div className="text-sm opacity-70">Infinite potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2033;