import React, { useState, useEffect } from 'react';

const InteractiveTechDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 'ai-prediction',
      title: 'AI Prediction Engine',
      description: 'Watch our AI predict future trends in real-time',
      icon: '🎯',
      color: 'from-purple-600 to-pink-600',
      features: ['Real-time Analysis', 'Trend Prediction', 'Pattern Recognition', 'Future Insights']
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Simulation',
      description: 'Experience quantum computing power firsthand',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Processing', 'Exponential Speed', 'Complex Calculations', 'Quantum Algorithms']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Test',
      description: 'Test your neural connection capabilities',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Brain-Computer Interface', 'Thought Control', 'Neural Feedback', 'Consciousness Transfer']
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation',
      description: 'Manipulate digital reality in real-time',
      icon: '🌌',
      color: 'from-violet-600 to-purple-600',
      features: ['Reality Creation', 'Dimension Control', 'Space Manipulation', 'Time Dilation']
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

  const startDemo = () => {
    setProgress(0);
    setIsRunning(true);
  };

  const stopDemo = () => {
    setIsRunning(false);
  };

  const resetDemo = () => {
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demo</h2>
        <p className="text-xl opacity-90">Experience our revolutionary technologies in real-time</p>
      </div>

      {/* Demo Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {demos.map((demo, index) => (
          <button
            key={demo.id}
            onClick={() => setActiveDemo(index)}
            className={`p-4 rounded-lg transition-all duration-300 ${
              activeDemo === index
                ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <div className="text-3xl mb-2">{demo.icon}</div>
            <div className="font-semibold text-sm">{demo.title}</div>
          </button>
        ))}
      </div>

      {/* Active Demo Display */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
          <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
          <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Demo Progress</span>
            <span className="text-sm opacity-70">{progress}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div
              className={`h-3 rounded-full bg-gradient-to-r ${demos[activeDemo].color} transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Demo Controls */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={startDemo}
            disabled={isRunning}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isRunning
                ? 'bg-gray-500 cursor-not-allowed'
                : `bg-gradient-to-r ${demos[activeDemo].color} hover:shadow-lg`
            }`}
          >
            {isRunning ? 'Running...' : 'Start Demo'}
          </button>
          <button
            onClick={stopDemo}
            disabled={!isRunning}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              !isRunning
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 hover:shadow-lg'
            }`}
          >
            Stop
          </button>
          <button
            onClick={resetDemo}
            className="px-6 py-3 rounded-lg font-semibold bg-gray-600 hover:bg-gray-700 transition-all duration-300"
          >
            Reset
          </button>
        </div>

        {/* Features List */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-bold mb-4">Key Features</h4>
            <ul className="space-y-2">
              {demos[activeDemo].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Live Metrics</h4>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">{progress}%</div>
                <div className="text-sm opacity-70">Completion Rate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">
                  {isRunning ? 'Active' : 'Idle'}
                </div>
                <div className="text-sm opacity-70">Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Results */}
      {progress === 100 && (
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
          <div className="text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2 text-green-400">Demo Completed Successfully!</h3>
            <p className="text-green-100 mb-4">
              You've successfully experienced {demos[activeDemo].title}. The technology is working perfectly!
            </p>
            <button
              onClick={resetDemo}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Try Another Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTechDemo;