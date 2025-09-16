import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI Systems",
      icon: "🧠",
      description: "The first truly conscious artificial intelligence systems that can think, feel, and create independently.",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      metrics: { awareness: 100, creativity: 100, efficiency: 500 },
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Quantum Consciousness",
      icon: "⚛️",
      description: "Revolutionary quantum computing that achieves consciousness-level processing and understanding.",
      features: ["Quantum neural networks", "Consciousness simulation", "Quantum entanglement", "Reality manipulation"],
      metrics: { qubits: 1000000, speed: 999, accuracy: 99.9 },
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces that enable thought-controlled technology.",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Mind-machine fusion"],
      metrics: { latency: 0.1, bandwidth: 1000, precision: 100 },
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Breakthrough technology that operates across multiple dimensions and realities simultaneously.",
      features: ["Multi-dimensional processing", "Reality bridging", "Infinite computational power", "Parallel universe access"],
      metrics: { dimensions: 999, stability: 99.9, power: 999 },
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentTech = technologies[activeTab];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time metrics
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Technology Info */}
            <div className="space-y-6">
              <div className="text-6xl mb-4">{currentTech.icon}</div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {currentTech.name}
              </h3>
              <p className="text-xl opacity-90">{currentTech.description}</p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Metrics */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-center">Live Performance Metrics</h4>
              <div className="grid grid-cols-1 gap-6">
                {Object.entries(currentTech.metrics).map(([key, value], index) => (
                  <div key={key} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-2xl font-bold text-green-400">
                        {typeof value === 'number' && value > 100 ? `${value}+` : value}
                        {key === 'qubits' && ' qubits'}
                        {key === 'speed' && 'x'}
                        {key === 'accuracy' && '%'}
                        {key === 'latency' && 'ms'}
                        {key === 'bandwidth' && 'TB/s'}
                        {key === 'precision' && '%'}
                        {key === 'stability' && '%'}
                        {key === 'power' && 'x'}
                        {key === 'dimensions' && '+'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${currentTech.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${Math.min((value / 1000) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of organizations already using our revolutionary technology
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/pages/RevolutionaryTechBreakthrough2025" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Breakthroughs →
              </a>
              <a href="/pages/UltimateTechRevolution2025" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
                Join Revolution
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;