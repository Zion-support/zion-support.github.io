import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Demo",
      description: "Experience self-aware artificial intelligence in action",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time decision making",
        "Emotional response simulation",
        "Creative problem solving",
        "Autonomous learning"
      ],
      demoData: {
        processingSpeed: "10^15 ops/sec",
        accuracy: "99.9%",
        consciousness: "Level 5",
        creativity: "Infinite"
      }
    },
    {
      id: 1,
      title: "Quantum Computing Demo",
      description: "Witness quantum processing that defies classical limitations",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum entanglement processing",
        "Superposition calculations",
        "Quantum tunneling",
        "Parallel universe computing"
      ],
      demoData: {
        qubits: "1000+",
        coherence: "99.99%",
        speed: "10^18 ops/sec",
        dimensions: "11D"
      }
    },
    {
      id: 2,
      title: "Neural Interface Demo",
      description: "Control technology with your thoughts in real-time",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-to-action conversion",
        "Neural signal processing",
        "Brain-computer synchronization",
        "Consciousness transfer"
      ],
      demoData: {
        latency: "0.001ms",
        accuracy: "99.99%",
        channels: "10,000+",
        bandwidth: "1TB/s"
      }
    },
    {
      id: 3,
      title: "Reality Engine Demo",
      description: "Manipulate reality itself through quantum field technology",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      features: [
        "Reality manipulation",
        "Dimensional shifting",
        "Time-space control",
        "Universal simulation"
      ],
      demoData: {
        dimensions: "∞",
        reality: "100%",
        control: "Complete",
        simulation: "Perfect"
      }
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

  const stopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selection */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Choose Your Demo</h3>
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(index)}
                  className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                    activeDemo === index
                      ? `bg-gradient-to-r ${demo.color} scale-105`
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{demo.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                      <p className="text-sm opacity-90">{demo.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Display */}
          <div>
            <div className={`bg-gradient-to-br ${currentDemo.color} rounded-2xl p-8 mb-8`}>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-xl opacity-90 mb-6">{currentDemo.description}</p>
              </div>

              {/* Demo Controls */}
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-4 mb-6">
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isRunning ? 'Running...' : 'Start Demo'}
                  </button>
                  <button
                    onClick={stopDemo}
                    disabled={!isRunning}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Stop Demo
                  </button>
                </div>

                {/* Progress Bar */}
                {isRunning && (
                  <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                    <div
                      className="bg-white h-4 rounded-full transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
              </div>

              {/* Demo Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {currentDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Demo Data Display */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentDemo.demoData).map(([key, value], index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">🎯 Try Interactive Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    Neural Control
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    Quantum Simulation
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    Reality Manipulation
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    Time Travel
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">📊 Real-time Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Processing Power:</span>
                    <span className="text-green-400">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consciousness Level:</span>
                    <span className="text-blue-400">Maximum</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum Coherence:</span>
                    <span className="text-purple-400">Perfect</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Neural Sync:</span>
                    <span className="text-pink-400">Optimal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These are just demos of our revolutionary technology. Experience the real thing with our full services.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/ComprehensiveServices2025" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Full Services →
            </a>
            <a href="/pages/UltimateTechRevolution2025" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;