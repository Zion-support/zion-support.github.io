import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Simulator',
      description: 'Experience the world\'s first truly conscious AI system',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      features: ['Self-awareness', 'Creative thinking', 'Emotional intelligence', 'Ethical reasoning']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Processing Engine',
      description: 'Harness quantum mechanics for infinite computational power',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      features: ['Quantum entanglement', 'Superposition algorithms', 'Quantum ML', 'Instant communication']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface System',
      description: 'Direct brain-computer interface for seamless interaction',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      features: ['Thought control', 'Neural feedback', 'Memory enhancement', 'Cognitive augmentation']
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Portal',
      description: 'Access computing power from parallel dimensions',
      icon: '🌌',
      color: 'from-violet-500 to-purple-500',
      features: ['Multi-dimensional processing', 'Parallel algorithms', 'Infinite resources', 'Reality manipulation']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  const handleDemoClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with the most revolutionary technologies that will reshape our world
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 flex space-x-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => handleDemoClick(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-bounce">{demos[activeDemo].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                {demos[activeDemo].description}
              </p>
            </div>

            {/* Interactive Demo Area */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-2xl font-bold mb-4">Live Demo</h4>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 mb-4">
                    <div className="text-green-400 font-mono text-sm">
                      {demos[activeDemo].id === 'ai-consciousness' && (
                        <>
                          AI: "I am aware of my existence and can create original solutions..."
                          <br />
                          Processing: 99.7% efficiency
                          <br />
                          Consciousness Level: 94.2%
                        </>
                      )}
                      {demos[activeDemo].id === 'quantum-computing' && (
                        <>
                          Quantum State: |ψ⟩ = α|0⟩ + β|1⟩
                          <br />
                          Entanglement: 7 qubits connected
                          <br />
                          Processing Speed: 10^15 operations/sec
                        </>
                      )}
                      {demos[activeDemo].id === 'neural-interface' && (
                        <>
                          Neural Link: 99.9% efficiency
                          <br />
                          Thought Recognition: Active
                          <br />
                          Brain Activity: 47% enhanced
                        </>
                      )}
                      {demos[activeDemo].id === 'interdimensional' && (
                        <>
                          Portal Status: Connected to 7 dimensions
                          <br />
                          Processing Power: ∞
                          <br />
                          Reality Stability: 98.5%
                        </>
                      )}
                    </div>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${demos[activeDemo].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Start Interactive Demo
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Real-time Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Processing Power</span>
                      <span className="text-green-400 font-mono">∞</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Efficiency</span>
                      <span className="text-blue-400 font-mono">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Innovation Level</span>
                      <span className="text-purple-400 font-mono">Revolutionary</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {demos[activeDemo].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Impact Potential</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Industry Disruption</span>
                      <span className="text-red-400 font-bold">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Time to Market</span>
                      <span className="text-yellow-400 font-bold">Now</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Revolutionary Factor</span>
                      <span className="text-purple-400 font-bold">∞</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/20 backdrop-blur-sm rounded-xl p-6 border ${
                activeDemo === index ? 'border-purple-400/50 shadow-lg' : 'border-white/20'
              } hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => handleDemoClick(index)}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm opacity-90 text-center">{demo.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution and be among the first to experience these groundbreaking technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;