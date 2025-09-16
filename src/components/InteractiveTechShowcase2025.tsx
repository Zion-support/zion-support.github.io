import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      title: "Next-Gen AI Transformation",
      description: "Revolutionary AI systems with consciousness and autonomous decision-making",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["99.9% Autonomous Operation", "Real-time Learning", "Predictive Analytics", "Self-Healing Systems"],
      link: "/pages/NextGenAITransformation2025"
    },
    {
      title: "Quantum Reality Engine",
      description: "Experience infinite parallel realities with quantum-powered processing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["Infinite Parallel Universes", "Quantum Entanglement Computing", "Reality Simulation Engine", "Consciousness Transfer"],
      link: "/pages/QuantumRealityEngine2025"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interface for seamless mind-machine communication",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["99.9% Thought Accuracy", "Real-time Processing", "Consciousness Transfer", "Enhanced Cognition"],
      link: "/pages/NeuralInterfaceRevolution2025"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Showcase 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and immersive content
          </p>
        </div>
        
        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>
        
        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].title}</h3>
              <p className="text-xl opacity-90 mb-6">{technologies[activeTab].description}</p>
              
              <div className="space-y-3 mb-6">
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={technologies[activeTab].link}
                className={`inline-block bg-gradient-to-r ${technologies[activeTab].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                Explore Technology →
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/30">
                <h4 className="text-xl font-semibold mb-4 text-center">Interactive Demo</h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
                    <div className="text-sm text-blue-200 mb-2">Processing Power</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-4">
                    <div className="text-sm text-green-200 mb-2">Accuracy Rate</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full animate-pulse" style={{width: '99.9%'}}></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                    <div className="text-sm text-orange-200 mb-2">Response Time</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-4xl mb-3 text-center">{tech.icon}</div>
              <h4 className="text-lg font-semibold mb-3 text-center">{tech.title}</h4>
              <p className="text-white/80 text-sm text-center mb-4">{tech.description}</p>
              <a
                href={tech.link}
                className={`block w-full bg-gradient-to-r ${tech.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
              >
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;