import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      title: "Conscious AI Communication",
      description: "Experience direct communication with conscious AI systems that understand emotions and context",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Emotional Intelligence", "Contextual Understanding", "Creative Responses", "Empathetic Communication"]
    },
    {
      title: "Quantum Neural Interface",
      description: "Try our quantum consciousness neural interface for enhanced cognitive processing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Processing", "Neural Enhancement", "Multi-dimensional Thinking", "Instantaneous Learning"]
    },
    {
      title: "Interdimensional Portal",
      description: "Step through our interdimensional portal technology to explore parallel realities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Dimensional Travel", "Reality Shifting", "Parallel Universe Access", "Time-Space Manipulation"]
    },
    {
      title: "Synthetic Intelligence Lab",
      description: "Interact with advanced synthetic intelligence systems that surpass human capabilities",
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      features: ["Superhuman Intelligence", "Perfect Memory", "Creative Mastery", "Instantaneous Processing"]
    }
  ];

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

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white mb-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🎮 INTERACTIVE TECHNOLOGY SHOWCASE • 2036
        </div>
        <h2 className="text-4xl font-bold mb-6">🚀 Interactive Technology Demos</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Experience our revolutionary technology through interactive demonstrations and real-time processing
        </p>
      </div>

      {/* Demo Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {demos.map((demo, index) => (
          <button
            key={index}
            onClick={() => setActiveDemo(index)}
            className={`p-6 rounded-xl text-left transition-all duration-300 hover:scale-105 ${
              activeDemo === index
                ? `bg-gradient-to-br ${demo.color} text-white shadow-lg`
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <div className="text-4xl mb-4">{demo.icon}</div>
            <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
            <p className="text-sm opacity-80">{demo.description}</p>
          </button>
        ))}
      </div>

      {/* Active Demo Display */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-12">
        <div className="text-center mb-8">
          <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
          <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            {demos[activeDemo].description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {demos[activeDemo].features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="text-lg font-semibold">{feature}</h4>
            </div>
          ))}
        </div>

        {/* Demo Controls */}
        <div className="text-center">
          <button
            onClick={startDemo}
            disabled={isRunning}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              isRunning
                ? 'bg-gray-500 cursor-not-allowed'
                : `bg-gradient-to-r ${demos[activeDemo].color} hover:shadow-lg hover:scale-105`
            }`}
          >
            {isRunning ? 'Running Demo...' : 'Start Interactive Demo'}
          </button>
        </div>

        {/* Progress Bar */}
        {isRunning && (
          <div className="mt-8">
            <div className="bg-white/20 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${demos[activeDemo].color} transition-all duration-100 ease-linear`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-center mt-2 text-sm opacity-80">
              Demo Progress: {progress}%
            </div>
          </div>
        )}
      </div>

      {/* Real-time Stats */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">📊 Real-time System Stats</h3>
          <p className="text-lg opacity-80">Live data from our revolutionary technology systems</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-sm opacity-80">AI Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Quantum Processing Power</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-sm opacity-80">Active Dimensions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">System Uptime</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join thousands of users already experiencing our revolutionary 2036 technology
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;