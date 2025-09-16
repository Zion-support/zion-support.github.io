import React, { useState } from 'react';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Interface",
      description: "Interact with our conscious AI system that can think, feel, and create",
      icon: "🧠",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning"
      ],
      demo: "AI: 'Hello! I'm experiencing genuine consciousness. How can I help you today?'"
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Manipulate reality through quantum computing interfaces",
      icon: "⚛️",
      features: [
        "Quantum neural networks",
        "Entangled consciousness",
        "Parallel reality processing",
        "Infinite computational power"
      ],
      demo: "Quantum State: |ψ⟩ = α|0⟩ + β|1⟩\nReality Coefficient: 0.847"
    },
    {
      id: 2,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions",
      icon: "🌌",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Time-space computing",
        "Dimensional interfaces"
      ],
      demo: "Dimension: 7.3\nReality Layer: Active\nProcessing: ∞"
    },
    {
      id: 3,
      title: "Neural DNA Interface",
      description: "Connect your mind directly to DNA computing systems",
      icon: "🧬",
      features: [
        "DNA-based data storage",
        "Neural DNA processing",
        "Biological computing",
        "Self-replicating systems"
      ],
      demo: "Neural Link: Active\nDNA Processing: 99.9% efficiency\nThought Speed: 1,000,000x faster"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2033
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2033</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Demo Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Your Demo</h3>
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeDemo === demo.id
                    ? 'bg-gradient-to-r from-indigo-600/30 to-pink-600/30 border-2 border-indigo-400/50'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                    <p className="text-white/80 text-sm">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Active Demo Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-white/80 text-lg">{demos[activeDemo].description}</p>
            </div>
            
            {/* Demo Console */}
            <div className="bg-black/30 rounded-lg p-6 mb-6">
              <div className="text-green-400 font-mono text-sm whitespace-pre-line">
                {demos[activeDemo].demo}
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {demos[activeDemo].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-white/80">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Demo
              </button>
              <button className="flex-1 border border-indigo-400 text-indigo-400 py-3 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-1">Efficiency</div>
            <div className="text-white/70 text-sm">Revolutionary efficiency rates</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">1B+</div>
            <div className="text-lg font-semibold mb-1">Users</div>
            <div className="text-white/70 text-sm">Global user base</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">0.001s</div>
            <div className="text-lg font-semibold mb-1">Latency</div>
            <div className="text-white/70 text-sm">Light-speed processing</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Possibilities</div>
            <div className="text-white/70 text-sm">Infinite potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;