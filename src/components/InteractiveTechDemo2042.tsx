import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2042: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Interaction",
      description: "Experience real-time conversation with our conscious AI system",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: [
        "Emotional intelligence demonstration",
        "Creative problem solving",
        "Artistic expression",
        "Empathetic responses"
      ]
    },
    {
      id: 2,
      title: "Quantum Reality Manipulation",
      description: "Control and manipulate physical matter through quantum fields",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: [
        "Matter creation from energy",
        "Instantaneous teleportation",
        "Time manipulation",
        "Dimensional gateways"
      ]
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Access and process information across infinite dimensions",
      icon: "🌌",
      color: "from-emerald-500 to-teal-500",
      features: [
        "Multi-dimensional data processing",
        "Parallel universe communication",
        "Infinite computational power",
        "Reality simulation"
      ]
    },
    {
      id: 4,
      title: "Synthetic Intelligence Matrix",
      description: "Interact with the most advanced synthetic intelligence ever created",
      icon: "🤖",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Cognitive supremacy demonstration",
        "Creative mastery showcase",
        "Perfect human alignment",
        "Instant learning capabilities"
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
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

  const nextDemo = () => {
    setActiveDemo((prev) => (prev + 1) % demos.length);
    setProgress(0);
    setIsRunning(false);
  };

  const prevDemo = () => {
    setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm">
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • JANUARY 2042
          <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Demonstrations</h2>
          <p className="text-xl opacity-90">Experience our revolutionary technologies through immersive interactive demonstrations</p>
        {/* Demo Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-white text-gray-900 font-semibold'
                    : 'text-white hover:bg-white/20'
                }`}</button>
              ></button>
                {demo.icon} {demo.title.split(' ')[0]}</button>
              </button>
            ))}
        {/* Active Demo Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{demos[activeDemo].icon}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{demos[activeDemo].title}</h3>
                  <p className="text-gray-300">{demos[activeDemo].description}</p>
              <div className="space-y-3 mb-6">
                {demos[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                ))}
              <div className="flex space-x-4">
                <button
                  onClick={startDemo}
                  disabled={isRunning}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isRunning
                      ? 'bg-gray-500 cursor-not-allowed'
                      : `bg-gradient-to-r ${demos[activeDemo].color} hover:shadow-lg`
                  }`}
                ></button>
                  {isRunning ? 'Running...' : '▶️ Start Demo'}</button>
                </button>
                <button
                  onClick={stopDemo}
                  disabled={!isRunning}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    !isRunning
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                ></button>
                  ⏹️ Stop Demo</button>
                </button>
            <div className="flex flex-col justify-center">
              <div className="bg-black/30 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold mb-4">Demo Console</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-green-400">System: Demo environment initialized
                  <div className="text-blue-400">AI: Ready to demonstrate capabilities
                  <div className="text-yellow-400">Quantum: Field manipulation active
                  <div className="text-purple-400">Dimensions: 12 parallel universes detected
              {isRunning && (
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">Demo Progress</span>
                    <span className="text-sm">{progress}%</span>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${demos[activeDemo].color} transition-all duration-300`}
                      style={{ width: `${progress}%` }}
                    >
              )}
        {/* Navigation Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevDemo}
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          ></button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></p>
            </svg>
          </button>
          <button
            onClick={nextDemo}
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          ></button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></p>
            </svg>
          </button>
        {/* Quick Access Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id - 1)}
              className={`bg-gradient-to-r ${demo.color} text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm ${
                activeDemo === demo.id - 1 ? 'ring-2 ring-white' : ''
              }`}</button>
            ></button>
              {demo.icon} {demo.title.split(' ')[0]}</button>
            </button>
          ))}
  );
};

export default InteractiveTechDemo2042;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>