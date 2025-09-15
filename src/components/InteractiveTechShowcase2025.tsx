import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const technologies = {
    ai: {
      title: "Artificial Intelligence",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      description: "Revolutionary AI systems that think, learn, and create",
      features: [
        "Conscious AI Systems",
        "Autonomous Decision Making",
        "Creative Problem Solving",
        "Emotional Intelligence"
      ],
      stats: {
        "Processing Speed": "1000x faster",
        "Learning Rate": "Exponential",
        "Accuracy": "99.9%",
        "Applications": "Unlimited"
      }
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      description: "Quantum computers solving impossible problems",
      features: [
        "Quantum Supremacy",
        "Cryptographic Security",
        "Molecular Simulation",
        "Optimization Problems"
      ],
      stats: {
        "Qubits": "1000+",
        "Speed": "Exponential",
        "Security": "Unbreakable",
        "Applications": "Revolutionary"
      }
    },
    space: {
      title: "Space Technology",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      description: "Interplanetary travel and space colonization",
      features: [
        "Fusion Propulsion",
        "Mars Colonization",
        "Asteroid Mining",
        "Space Manufacturing"
      ],
      stats: {
        "Mars Travel": "30 days",
        "Efficiency": "1000x",
        "Payload": "Unlimited",
        "Range": "Interstellar"
      }
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "from-green-600 to-teal-600",
      description: "Direct brain-computer communication",
      features: [
        "Non-invasive BCI",
        "Thought Control",
        "Enhanced Cognition",
        "Neural Feedback"
      ],
      stats: {
        "Accuracy": "99.5%",
        "Latency": "< 1ms",
        "Channels": "1000+",
        "Applications": "Medical"
      }
    }
  };

  const currentTech = technologies[activeTab as keyof typeof technologies];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 INTERACTIVE SHOWCASE • 2025
        </div>
        <h2 className="text-4xl font-bold text-white mb-6">Interactive Technology Showcase</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore cutting-edge technologies through interactive demonstrations and real-time simulations
        </p>
      </div>

      {/* Technology Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="mr-2">{tech.icon}</span>
            {tech.title}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technology Details */}
        <div className="space-y-8">
          <div className={`bg-gradient-to-r ${currentTech.color} rounded-2xl p-8 text-white`}>
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-4">{currentTech.icon}</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{currentTech.title}</h3>
                <p className="text-xl opacity-90">{currentTech.description}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
            <div className="grid grid-cols-2 gap-4">
              {currentTech.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-6">Performance Stats</h4>
            <div className="space-y-4">
              {Object.entries(currentTech.stats).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-300">{key}:</span>
                  <span className="text-white font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Demo Area */}
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-6">Interactive Demo</h4>
            <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl animate-pulse">{currentTech.icon}</div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-white text-sm">
                    {activeTab === 'ai' && "AI systems processing complex data patterns in real-time..."}
                    {activeTab === 'quantum' && "Quantum algorithms solving optimization problems..."}
                    {activeTab === 'space' && "Spacecraft trajectory calculations and fuel optimization..."}
                    {activeTab === 'neural' && "Neural signals being processed and interpreted..."}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(technologies).map(([key, tech]) => (
              <div
                key={key}
                className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  hoveredCard === key ? 'scale-105 shadow-lg' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setHoveredCard(key)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveTab(key)}
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h5 className="text-white font-semibold mb-2">{tech.title}</h5>
                <p className="text-white/80 text-sm line-clamp-2">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Discover how these revolutionary technologies can transform your business and accelerate your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href={`/pages/${currentTech.title.replace(/\s+/g, '')}2025`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More About {currentTech.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;