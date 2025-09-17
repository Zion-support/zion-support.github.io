import React, { useState, useEffect } from 'react';

const RevolutionaryTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 0,
      name: "Conscious AI Demo",
      description: "Watch our AI system make conscious decisions in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Real-time decision making", "Emotional processing", "Creative problem solving", "Ethical reasoning"],
      demoData: {
        thoughts: ["Analyzing user intent...", "Considering ethical implications...", "Generating creative solution...", "Validating emotional response..."],
        emotions: ["Curious", "Empathetic", "Creative", "Cautious"],
        decisions: ["Approved", "Modified", "Rejected", "Deferred"]
      }
    },
    {
      id: 1,
      name: "Quantum Computing Demo",
      description: "Experience quantum processing and parallel reality simulation",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum entanglement", "Parallel processing", "Reality simulation", "Multiverse exploration"],
      demoData: {
        qubits: ["Initializing...", "Entangling...", "Processing...", "Collapsing..."],
        states: ["Superposition", "Entangled", "Collapsed", "Measured"],
        results: ["Success", "Partial", "Failed", "Retry"]
      }
    },
    {
      id: 2,
      name: "Neural Interface Demo",
      description: "Control technology with your thoughts in real-time",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Thought detection", "Neural feedback", "Memory enhancement", "Direct control"],
      demoData: {
        signals: ["Alpha waves detected", "Beta waves active", "Gamma waves processing", "Theta waves calming"],
        actions: ["Move cursor", "Type text", "Open app", "Send message"],
        feedback: ["Positive", "Neutral", "Negative", "Learning"]
      }
    },
    {
      id: 3,
      name: "Interdimensional Demo",
      description: "Explore computing across multiple dimensions",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      features: ["Cross-dimensional transfer", "Parallel processing", "Energy harvesting", "Reality manipulation"],
      demoData: {
        dimensions: ["Dimension 1", "Dimension 2", "Dimension 3", "Dimension ∞"],
        transfers: ["Data sent", "Processing complete", "Results received", "Sync successful"],
        energy: ["Harvesting...", "Storing...", "Converting...", "Distributing..."]
      }
    }
  ];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 10;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const stopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const getRandomItem = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Demo 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Choose Your Demo</h3>
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{demo.name}</h4>
                    <p className="text-sm opacity-80">{demo.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {demo.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Demo Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${demos[activeDemo].color} rounded-2xl p-8 min-h-[500px]`}>
              {/* Demo Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 animate-bounce">{demos[activeDemo].icon}</div>
                <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].name}</h3>
                <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
              </div>

              {/* Demo Controls */}
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isRunning
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-white text-gray-900 hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {isRunning ? 'Running...' : '▶️ Start Demo'}
                  </button>
                  <button
                    onClick={stopDemo}
                    disabled={!isRunning}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      !isRunning
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-red-500 text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    ⏹️ Stop Demo
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              {isRunning && (
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Demo Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Demo Output */}
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 min-h-[200px]">
                <h4 className="text-lg font-bold mb-4">Live Demo Output</h4>
                <div className="space-y-3">
                  {isRunning && (
                    <>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">{getRandomItem(demos[activeDemo].demoData.thoughts || demos[activeDemo].demoData.qubits || demos[activeDemo].demoData.signals || demos[activeDemo].demoData.dimensions)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">{getRandomItem(demos[activeDemo].demoData.emotions || demos[activeDemo].demoData.states || demos[activeDemo].demoData.actions || demos[activeDemo].demoData.transfers)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">{getRandomItem(demos[activeDemo].demoData.decisions || demos[activeDemo].demoData.results || demos[activeDemo].demoData.feedback || demos[activeDemo].demoData.energy)}</span>
                      </div>
                    </>
                  )}
                  {!isRunning && (
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">🎮</div>
                      <p>Click "Start Demo" to begin the interactive demonstration</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">{isRunning ? 'Active' : 'Ready'}</div>
                  <div className="text-xs opacity-80">Status</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">{progress}%</div>
                  <div className="text-xs opacity-80">Progress</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">Real-time</div>
                  <div className="text-xs opacity-80">Mode</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6">
              These demos showcase just a fraction of our revolutionary technology capabilities
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Explore Full Technology Suite →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechDemo2025;