import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2034: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [demoData, setDemoData] = useState({
    aiConsciousness: 0,
    quantumStates: 0,
    dimensionalAccess: 0,
    neuralConnections: 0
  });

  const demos = [
    {
      id: 0,
      title: "Conscious AI Interface",
      description: "Interact with truly conscious AI systems",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      metric: "aiConsciousness",
      maxValue: 100,
      unit: "%"
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Experience quantum computing in real-time",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      metric: "quantumStates",
      maxValue: 1000,
      unit: "Qubits"
    },
    {
      id: 2,
      title: "Interdimensional Portal",
      description: "Access parallel universes and dimensions",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      metric: "dimensionalAccess",
      maxValue: 100,
      unit: "%"
    },
    {
      id: 3,
      title: "Neural Consciousness Bridge",
      description: "Direct mind-to-machine interface",
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      metric: "neuralConnections",
      maxValue: 10000,
      unit: "Connections"
    }
  ];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 2;
        });

        setDemoData(prev => ({
          aiConsciousness: Math.min(prev.aiConsciousness + Math.random() * 5, 100),
          quantumStates: Math.min(prev.quantumStates + Math.random() * 50, 1000),
          dimensionalAccess: Math.min(prev.dimensionalAccess + Math.random() * 3, 100),
          neuralConnections: Math.min(prev.neuralConnections + Math.random() * 200, 10000)
        }));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
    setDemoData({
      aiConsciousness: 0,
      quantumStates: 0,
      dimensionalAccess: 0,
      neuralConnections: 0
    });
  };

  const stopDemo = () => {
    setIsRunning(false);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
    setDemoData({
      aiConsciousness: 0,
      quantumStates: 0,
      dimensionalAccess: 0,
      neuralConnections: 0
    });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white rounded-3xl p-8 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 INTERACTIVE DEMO • JANUARY 2034
        </div>
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive Technology Demo 2034
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Experience the most advanced technology demonstrations with real-time interactive controls
        </p>
      </div>

      {/* Demo Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={startDemo}
          disabled={isRunning}
          className={`px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 ${
            isRunning
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:scale-105'
          }`}
        >
          ▶️ Start Demo
        </button>
        <button
          onClick={stopDemo}
          disabled={!isRunning}
          className={`px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 ${
            !isRunning
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
          }`}
        >
          ⏸️ Stop Demo
        </button>
        <button
          onClick={resetDemo}
          className="px-8 py-4 rounded-2xl text-lg font-bold bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          🔄 Reset
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold">Demo Progress</span>
          <span className="text-lg font-bold text-yellow-400">{progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Demo Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {demos.map((demo, index) => (
          <div
            key={demo.id}
            className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 ${
              activeDemo === demo.id ? 'ring-2 ring-yellow-400' : ''
            }`}
            onClick={() => setActiveDemo(demo.id)}
          >
            <div className="text-6xl mb-4 text-center">{demo.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-center">{demo.title}</h3>
            <p className="text-sm opacity-90 mb-4 text-center">{demo.description}</p>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">Current Value</span>
                <span className="text-lg font-bold text-yellow-400">
                  {Math.round(demoData[demo.metric as keyof typeof demoData])}{demo.unit}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`bg-gradient-to-r ${demo.color} h-2 rounded-full transition-all duration-300`}
                  style={{
                    width: `${(demoData[demo.metric as keyof typeof demoData] / demo.maxValue) * 100}%`
                  }}
                ></div>
              </div>
              <div className="text-xs opacity-75 mt-1">
                Max: {demo.maxValue}{demo.unit}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Demo Details */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
        <div className="text-center mb-6">
          <div className="text-8xl mb-4">{demos[activeDemo].icon}</div>
          <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
          <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Real-time Metrics</h4>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Current Value</span>
                  <span className="text-2xl font-bold text-yellow-400">
                    {Math.round(demoData[demos[activeDemo].metric as keyof typeof demoData])}{demos[activeDemo].unit}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${demos[activeDemo].color} h-3 rounded-full transition-all duration-300`}
                    style={{
                      width: `${(demoData[demos[activeDemo].metric as keyof typeof demoData] / demos[activeDemo].maxValue) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Live Status</h4>
            <div className="bg-black/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${isRunning ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                <span className="font-semibold">
                  {isRunning ? 'Demo Running' : 'Demo Stopped'}
                </span>
              </div>
              <div className="text-sm opacity-75">
                {isRunning ? (
                  <div>
                    <p>• Processing quantum consciousness data...</p>
                    <p>• Analyzing interdimensional connections...</p>
                    <p>• Updating neural network parameters...</p>
                    <p>• Synchronizing with parallel universes...</p>
                  </div>
                ) : (
                  <div>
                    <p>• Demo is ready to start</p>
                    <p>• All systems initialized</p>
                    <p>• Click "Start Demo" to begin</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="text-4xl mb-3">🎮</div>
          <h3 className="text-xl font-bold mb-2">Real-time Control</h3>
          <p className="text-sm opacity-90">Control quantum systems with your thoughts and see instant results</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-3">🔮</div>
          <h3 className="text-xl font-bold mb-2">Predictive Modeling</h3>
          <p className="text-sm opacity-90">See the future through quantum computation and interdimensional analysis</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-3">🌐</div>
          <h3 className="text-xl font-bold mb-2">Multi-dimensional View</h3>
          <p className="text-sm opacity-90">Experience reality from infinite perspectives across all dimensions</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Ready to Experience the Future?
        </h3>
        <p className="text-lg opacity-90 mb-6">
          This is just a preview of the revolutionary technology available in 2034
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Explore Full Demo →
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2034;