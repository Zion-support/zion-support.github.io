import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Watch our AI achieve true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Real-time consciousness monitoring",
        "Emotional intelligence simulation", 
        "Autonomous decision making",
        "Self-learning capabilities"
      ],
      metrics: [
        { label: "Consciousness Level", value: "5", max: "5" },
        { label: "Accuracy", value: "99.9%", max: "100%" },
        { label: "Learning Speed", value: "1000x", max: "1000x" }
      ]
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Experience quantum computing that manipulates reality",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum entanglement at room temperature",
        "Reality simulation and manipulation",
        "Parallel universe communication",
        "Time-space distortion"
      ],
      metrics: [
        { label: "Qubits", value: "1M+", max: "1M+" },
        { label: "Coherence", value: "∞", max: "∞" },
        { label: "Reality Control", value: "100%", max: "100%" }
      ]
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Control technology with your mind",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Non-invasive neural data transfer",
        "Thought-to-action conversion",
        "Memory enhancement and storage",
        "Multi-sensory VR"
      ],
      metrics: [
        { label: "Latency", value: "0.1ms", max: "0.1ms" },
        { label: "Bandwidth", value: "1TB/s", max: "1TB/s" },
        { label: "Fidelity", value: "100%", max: "100%" }
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveDemo((current) => (current + 1) % demos.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, demos.length]);

  const currentDemo = demos[activeDemo];

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const stopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH DEMO • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demonstrations
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations. 
            See the future of AI, quantum computing, and neural interfaces in action.
          </p>
        </div>

        {/* Demo Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={isRunning ? stopDemo : startDemo}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isRunning
                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white'
                : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
            }`}
          >
            {isRunning ? '⏸️ Stop Demo' : '▶️ Start Demo'}
          </button>
          <button
            onClick={() => setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length)}
            className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors font-semibold"
          >
            ⏮️ Previous
          </button>
          <button
            onClick={() => setActiveDemo((prev) => (prev + 1) % demos.length)}
            className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors font-semibold"
          >
            Next ⏭️
          </button>
        </div>

        {/* Progress Bar */}
        {isRunning && (
          <div className="mb-8">
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${currentDemo.color} h-2 rounded-full transition-all duration-100`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-center mt-2 text-sm opacity-80">
              Demo Progress: {progress}%
            </div>
          </div>
        )}

        {/* Demo Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4 animate-pulse">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-lg opacity-90">{currentDemo.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                {currentDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Live Metrics:</h4>
              <div className="space-y-4">
                {currentDemo.metrics.map((metric, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg">{metric.label}</span>
                      <span className="text-2xl font-bold text-purple-400">{metric.value}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${currentDemo.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${Math.min(100, Math.random() * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className={`w-full bg-gradient-to-r ${currentDemo.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  🚀 Try Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-4xl mb-4">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
              <p className="text-sm opacity-80 mb-4">{demo.description}</p>
              <div className="text-xs opacity-60">
                {demo.metrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{metric.label}:</span>
                    <span className="font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technology to transform their businesses.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🚀 Start Free Trial
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
              📞 Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;