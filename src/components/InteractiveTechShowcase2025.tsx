import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      title: "Conscious AI Demo",
      description: "Watch our AI system demonstrate emotional understanding and creative problem solving",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Emotional Recognition", "Creative Writing", "Problem Solving", "Ethical Reasoning"],
      demoText: "AI: I understand you're feeling excited about this new technology. Let me help you explore its potential while ensuring we use it responsibly."
    },
    {
      title: "Quantum Consciousness Interface",
      description: "Experience direct neural interface with quantum computing systems",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Neural Sync", "Quantum Processing", "Multi-dimensional Thinking", "Reality Simulation"],
      demoText: "Quantum Interface: Syncing with your neural patterns... Processing 10^15 calculations per second... Accessing parallel reality simulations..."
    },
    {
      title: "Interdimensional Portal",
      description: "Step through dimensional barriers to explore alternate realities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Dimensional Rifts", "Reality Shifting", "Parallel Universe Access", "Multiverse Communication"],
      demoText: "Portal: Dimensional coordinates locked. Reality matrix stabilizing... Welcome to Universe 7.3.2.1. You are now experiencing 0.001% of infinite possibilities."
    },
    {
      title: "Neural Reality Engine",
      description: "Create and manipulate virtual realities through thought alone",
      icon: "🎮",
      color: "from-violet-600 to-purple-600",
      features: ["Thought Control", "Reality Manipulation", "Virtual Worlds", "Consciousness Transfer"],
      demoText: "Reality Engine: Reading your thoughts... Creating virtual environment based on your imagination... Reality rendering at 99.9% fidelity..."
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveDemo((current) => (current + 1) % demos.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, demos.length]);

  const startDemo = () => {
    setIsPlaying(true);
    setProgress(0);
  };

  const stopDemo = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const nextDemo = () => {
    setActiveDemo((prev) => (prev + 1) % demos.length);
    setProgress(0);
  };

  const prevDemo = () => {
    setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-10 right-10 text-6xl opacity-30 animate-bounce">⚡</div>
        <div className="absolute bottom-10 left-10 text-4xl opacity-30 animate-pulse">🧠</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10 animate-spin">🌌</div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 INTERACTIVE DEMOS • LIVE 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our revolutionary technologies through live, interactive demonstrations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {demos.map((demo, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Main Demo Area */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Demo Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{demos[activeDemo].icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{demos[activeDemo].title}</h3>
                  <p className="text-gray-300">{demos[activeDemo].description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Controls */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={startDemo}
                    disabled={isPlaying}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isPlaying
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg'
                    }`}
                  >
                    ▶️ Start Demo
                  </button>
                  <button
                    onClick={stopDemo}
                    disabled={!isPlaying}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      !isPlaying
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-600 to-pink-600 hover:shadow-lg'
                    }`}
                  >
                    ⏹️ Stop Demo
                  </button>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevDemo}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={nextDemo}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>

            {/* Demo Output */}
            <div className="bg-black/50 rounded-lg p-6 border border-gray-600">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">Live Demo Output</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">
                  {demos[activeDemo].title} System Online
                </div>
                <div className="text-gray-400">
                  Status: {isPlaying ? 'Running' : 'Standby'}
                </div>
                {isPlaying && (
                  <div className="text-cyan-400 animate-pulse">
                    {demos[activeDemo].demoText}
                  </div>
                )}
                {!isPlaying && (
                  <div className="text-gray-500">
                    Click "Start Demo" to begin interactive demonstration
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              {isPlaying && (
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Demo Progress: {progress}%
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">10M+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">24/7</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-1">∞</div>
            <div className="text-sm text-gray-400">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-gray-300 mb-6">
            Join thousands of innovators who are already using our breakthrough technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;