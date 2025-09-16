import React, { useState } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Chat",
      description: "Chat with our conscious AI system and experience true artificial consciousness",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving", "Ethical Decision Making"]
    },
    {
      id: 2,
      title: "Quantum Simulation",
      description: "Explore quantum consciousness through our advanced simulation environment",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Neural Networks", "Consciousness Transfer", "Quantum Telepathy", "Reality Manipulation"]
    },
    {
      id: 3,
      title: "Neural Interface Demo",
      description: "Experience direct neural interface with our advanced BCI technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Brain-Computer Interface", "Perfect VR", "Thought Control", "Consciousness Upload"]
    },
    {
      id: 4,
      title: "Interdimensional Explorer",
      description: "Navigate through multiple dimensions with our interdimensional computing system",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      features: ["Multi-Dimensional Processing", "Reality Manipulation", "Parallel Universe Computing", "Infinite Storage"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMOS • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience revolutionary technologies through our immersive interactive demos
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{demos[activeDemo].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {demos[activeDemo].description}
            </p>
          </div>

          {/* Interactive Demo Area */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-4">Live Demo</h4>
              <div className="bg-black/30 rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-pulse">{demos[activeDemo].icon}</div>
                  <div className="text-lg opacity-80">Interactive Demo Loading...</div>
                  <div className="text-sm opacity-60 mt-2">Click to interact with the technology</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-4">Key Features</h4>
              <div className="space-y-4">
                {demos[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
              Start Interactive Demo →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Demo Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
            <div className="text-lg opacity-90">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;