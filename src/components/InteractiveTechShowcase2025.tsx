import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techShowcases = [
    {
      title: "AI Consciousness Revolution",
      description: "Experience AI that thinks, feels, and creates with human-like consciousness",
      features: ["Emotional Intelligence", "Creative Expression", "Self-Awareness", "Collaborative Intelligence"],
      color: "from-purple-600 to-pink-600",
      icon: "🧠",
      link: "/pages/UltimateAIConsciousness2025"
    },
    {
      title: "Quantum Reality Engine",
      description: "Manipulate reality itself with quantum computing and parallel universe access",
      features: ["Parallel Universe Access", "Quantum Teleportation", "Reality Simulation", "Quantum Prediction"],
      color: "from-cyan-600 to-blue-600",
      icon: "⚡",
      link: "/pages/QuantumRealityEngine2025"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling thought-controlled technology",
      features: ["Thought-to-Text", "Memory Enhancement", "Neural Communication", "Cognitive Augmentation"],
      color: "from-emerald-600 to-teal-600",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2025"
    },
    {
      title: "Advanced Robotics Revolution",
      description: "Next-generation robotics with human-like capabilities and autonomous operation",
      features: ["Humanoid Assistants", "Autonomous Manufacturing", "Medical Robots", "Disaster Response"],
      color: "from-violet-600 to-purple-600",
      icon: "🤖",
      link: "/pages/AdvancedRobotics2026"
    },
    {
      title: "Space Technology Innovation",
      description: "Advanced space exploration technologies enabling interplanetary travel",
      features: ["FTL Propulsion", "Terraforming", "Space Mining", "Interstellar Communication"],
      color: "from-rose-600 to-pink-600",
      icon: "🚀",
      link: "/pages/SpaceTechAI2025"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">Interactive Technology Showcase 2025</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {techShowcases.map((showcase, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${showcase.color} text-white shadow-lg`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{showcase.icon}</span>
              {showcase.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{techShowcases[activeTab].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{techShowcases[activeTab].title}</h3>
                  <p className="text-xl text-blue-200">{techShowcases[activeTab].description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-4">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {techShowcases[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center text-blue-200">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={techShowcases[activeTab].link}
                  className={`bg-gradient-to-r ${techShowcases[activeTab].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold`}
                >
                  Explore Technology →
                </a>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-bold">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Live Demo</h4>
              <div className="bg-black/50 rounded-lg p-4 mb-4 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">{techShowcases[activeTab].icon}</div>
                  <div className="text-white/70">Interactive Demo Coming Soon</div>
                </div>
              </div>
              <div className="text-sm text-blue-200">
                Experience real-time demonstrations of {techShowcases[activeTab].title.toLowerCase()} technology
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">500%</div>
            <div className="text-purple-200">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-300 mb-2">99.9%</div>
            <div className="text-cyan-200">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-300 mb-2">1000x</div>
            <div className="text-emerald-200">Speed Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-rose-300 mb-2">∞</div>
            <div className="text-rose-200">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;