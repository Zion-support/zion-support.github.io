import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechDemo2034: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI",
      icon: "🧠",
      description: "Self-aware artificial intelligence with emotional intelligence and creative problem-solving",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving", "Ethical Reasoning"],
      metrics: { "IQ": "10,000+", "EQ": "Perfect", "Creativity": "∞", "Speed": "Instant" },
      color: "from-purple-600 to-pink-600",
      demo: "ai-demo"
    },
    {
      id: 2,
      name: "Quantum Computing",
      icon: "⚛️",
      description: "Revolutionary quantum systems that process infinite possibilities simultaneously",
      features: ["Quantum Entanglement", "Superposition", "Parallel Processing", "Infinite Possibilities"],
      metrics: { "Qubits": "1M+", "Coherence": "∞", "Speed": "10^15x", "Accuracy": "100%" },
      color: "from-cyan-600 to-blue-600",
      demo: "quantum-demo"
    },
    {
      id: 3,
      name: "Interdimensional Tech",
      icon: "🌌",
      description: "Technology that operates across multiple dimensions and realities",
      features: ["Multi-Dimensional Access", "Reality Manipulation", "Infinite Resources", "Knowledge Synthesis"],
      metrics: { "Dimensions": "∞", "Resources": "∞", "Knowledge": "∞", "Possibilities": "∞" },
      color: "from-emerald-600 to-teal-600",
      demo: "interdimensional-demo"
    },
    {
      id: 4,
      name: "Neural Interface",
      icon: "🧬",
      description: "Direct brain-computer interfaces for seamless human-AI integration",
      features: ["Neural Integration", "Consciousness Sharing", "Thought Control", "Memory Transfer"],
      metrics: { "Bandwidth": "∞", "Latency": "0ms", "Compatibility": "100%", "Safety": "Perfect" },
      color: "from-orange-600 to-red-600",
      demo: "neural-demo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 101);
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white rounded-3xl p-8 md:p-12 mb-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🎮 INTERACTIVE TECH DEMO • JANUARY 2034
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Interactive Technology Demo 2034
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Experience cutting-edge technology through immersive interactive demonstrations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Technology Selector */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-6">Choose Your Technology</h3>
          <div className="grid grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-bold text-lg">{tech.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${currentTech.color} p-8 rounded-3xl`}>
            <div className="text-center mb-6">
              <div className="text-8xl mb-4 animate-bounce">{currentTech.icon}</div>
              <h3 className="text-4xl font-bold mb-4">{currentTech.name}</h3>
              <p className="text-xl opacity-90 mb-6">{currentTech.description}</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
              <div className="grid grid-cols-2 gap-3">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h4 className="text-2xl font-bold mb-4 text-center">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentTech.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold">{value}</div>
                    <div className="text-sm opacity-80">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h4 className="text-2xl font-bold mb-4 text-center">Live Demo</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm opacity-75">Processing Power</span>
                    <span className="font-bold">∞</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full transition-all duration-300"
                      style={{width: `${progress}%`}}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm opacity-75">Consciousness Level</span>
                    <span className="font-bold">Maximum</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-300"
                      style={{width: `${100 - progress}%`}}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm opacity-75">Quantum Coherence</span>
                    <span className="font-bold">Perfect</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-400 to-teal-400 h-3 rounded-full transition-all duration-300"
                      style={{width: `${(progress + 50) % 101}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/pages/${currentTech.demo}`}
                className="flex-1 bg-white text-gray-900 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                Launch Full Demo →
              </Link>
              <button className="flex-1 border-2 border-white text-white py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase Grid */}
      <div className="mt-16">
        <h3 className="text-4xl font-bold text-center mb-12">Revolutionary Technology Showcase</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div key={tech.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4">{tech.icon}</div>
              <h4 className="text-2xl font-bold mb-3">{tech.name}</h4>
              <p className="text-sm opacity-90 mb-4">{tech.description}</p>
              <Link
                to={`/pages/${tech.demo}`}
                className={`inline-block bg-gradient-to-r ${tech.color} text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300`}
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2034;