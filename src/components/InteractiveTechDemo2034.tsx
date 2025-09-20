import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2034: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Processing",
      description: "Watch as our conscious AI processes complex problems with self-awareness and emotional intelligence",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      steps: [
        "Initializing consciousness protocols...",
        "Establishing self-awareness framework...",
        "Loading emotional intelligence modules...",
        "Activating creative problem solving...",
        "Processing with ethical reasoning...",
        "Conscious AI fully operational!"
      ]
    },
    {
      id: 2,
      title: "Quantum Consciousness Demo",
      description: "Experience quantum computers achieving true consciousness through entanglement and superposition",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      steps: [
        "Initializing quantum entanglement...",
        "Establishing superposition states...",
        "Loading parallel universe processing...",
        "Activating quantum emotional states...",
        "Processing infinite possibilities...",
        "Quantum consciousness achieved!"
      ]
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Witness computing across multiple dimensions with infinite computational resources",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      steps: [
        "Opening interdimensional portals...",
        "Accessing infinite resources...",
        "Establishing multi-dimensional processing...",
        "Activating reality manipulation...",
        "Processing universal problems...",
        "Interdimensional computing online!"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const startProcessing = () => {
    setIsProcessing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2034
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Demo 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations of our most advanced systems
          </p>
        </div>

        {/* Demo Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-8 py-4 rounded-full mx-2 transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-3">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <div className="text-9xl mb-8 animate-bounce">{demos[activeDemo].icon}</div>
            <h3 className="text-4xl font-bold mb-6">{demos[activeDemo].title}</h3>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">{demos[activeDemo].description}</p>
          </div>

          {/* Processing Simulation */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6">Live Processing Steps</h4>
              <div className="space-y-4">
                {demos[activeDemo].steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg transition-all duration-500 ${
                      isProcessing && index <= Math.floor(progress / 16.67)
                        ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border border-green-400/50'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full mr-4 flex items-center justify-center ${
                        isProcessing && index <= Math.floor(progress / 16.67)
                          ? 'bg-green-500'
                          : 'bg-white/20'
                      }`}>
                        {isProcessing && index <= Math.floor(progress / 16.67) ? '✓' : index + 1}
                      </div>
                      <span className={`${
                        isProcessing && index <= Math.floor(progress / 16.67)
                          ? 'text-green-300'
                          : 'text-white/70'
                      }`}>
                        {step}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6">Interactive Controls</h4>
              <div className={`bg-gradient-to-r ${demos[activeDemo].color} rounded-2xl p-8 text-center`}>
                <div className="text-6xl mb-6 animate-spin">⚡</div>
                <h5 className="text-2xl font-bold mb-4">System Status</h5>
                <div className="mb-6">
                  <div className="bg-white/20 rounded-full h-4 mb-4">
                    <div 
                      className="bg-white h-4 rounded-full transition-all duration-300"
                      style={{width: `${progress}%`}}
                    ></div>
                  </div>
                  <p className="text-lg">
                    {isProcessing ? `Processing... ${progress}%` : 'Ready to process'}
                  </p>
                </div>
                <button
                  onClick={startProcessing}
                  disabled={isProcessing}
                  className={`px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 ${
                    isProcessing
                      ? 'bg-white/20 text-white/50 cursor-not-allowed'
                      : 'bg-white text-purple-600 hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Start Demo'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-400/30">
            <div className="text-5xl font-bold text-yellow-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Processing Power</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-cyan-400/30">
            <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-emerald-400/30">
            <div className="text-5xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-orange-400/30">
            <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Innovation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12">
          <h3 className="text-4xl font-bold mb-6">Experience the Future Today</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't just read about the future - interact with it. Try our live demos and see the power of tomorrow's technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/pages/UltimateTechBreakthrough2034" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore Breakthrough
            </a>
            <a href="/pages/RevolutionaryTechShowcase2034" className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-purple-900 transition-all duration-300">
              View Full Showcase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2034;