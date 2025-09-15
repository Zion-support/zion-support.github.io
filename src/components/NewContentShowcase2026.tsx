import React, { useState } from 'react';

const NewContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('space');

  const contentData = {
    space: {
      title: "Advanced Space Technology 2026",
      description: "Pioneering the next frontier with revolutionary space technologies, quantum propulsion systems, and interplanetary communication networks.",
      icon: "🚀",
      color: "from-slate-900 via-purple-900 to-slate-900",
      features: [
        "Quantum Propulsion Systems",
        "Autonomous Space Mining",
        "Interplanetary Internet",
        "Self-Sustaining Space Habitats",
        "Luxury Space Tourism",
        "Space Defense Networks"
      ],
      link: "/pages/AdvancedSpaceTech2026",
      metrics: {
        investment: "$7.5B Raised",
        timeline: "2026-2030",
        status: "Operational"
      }
    },
    quantum: {
      title: "Quantum Computing Breakthrough 2026",
      description: "Witness the dawn of practical quantum computing with revolutionary 1000-qubit processors and real-world applications.",
      icon: "⚛️",
      color: "from-indigo-900 via-purple-900 to-pink-900",
      features: [
        "1000-Qubit Processor",
        "Quantum Error Correction",
        "Quantum Machine Learning",
        "Quantum Cryptography",
        "Quantum Simulation",
        "Quantum Internet"
      ],
      link: "/pages/QuantumComputingBreakthrough2026",
      metrics: {
        investment: "$36.2B Raised",
        timeline: "Available Now",
        status: "Breakthrough"
      }
    },
    robotics: {
      title: "Advanced Robotics 2026",
      description: "Experience the next generation of intelligent robots with human-like dexterity and autonomous decision-making capabilities.",
      icon: "🤖",
      color: "from-gray-900 via-blue-900 to-indigo-900",
      features: [
        "Humanoid Robots",
        "Industrial Automation",
        "Medical Robots",
        "Service Robots",
        "Space Robots",
        "Agricultural Robots"
      ],
      link: "/pages/AdvancedRobotics2026",
      metrics: {
        investment: "$56.9B Raised",
        timeline: "Production Ready",
        status: "Deployed"
      }
    }
  };

  const tabs = [
    { id: 'space', label: 'Space Tech', icon: '🚀' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚛️' },
    { id: 'robotics', label: 'Advanced Robotics', icon: '🤖' }
  ];

  const currentContent = contentData[activeTab as keyof typeof contentData];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY NEW CONTENT • 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Next-Generation Technology Showcase</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our latest breakthrough content featuring cutting-edge space technology, 
            quantum computing, and advanced robotics that will reshape the future.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/20 backdrop-blur-sm text-gray-300 hover:bg-white/30 hover:text-white'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Content Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl">{currentContent.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentContent.title}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="px-3 py-1 bg-green-600/30 rounded-full text-sm font-semibold">
                      {currentContent.metrics.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-600/30 rounded-full text-sm font-semibold">
                      {currentContent.metrics.timeline}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">🌟 Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Info */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
              <h4 className="text-xl font-bold text-white mb-4">💰 Investment Status</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.investment}</div>
                  <div className="text-gray-300 text-sm">Total Funding</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.timeline}</div>
                  <div className="text-gray-300 text-sm">Timeline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Preview */}
          <div className="space-y-6">
            {/* Visual Preview */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 animate-bounce">{currentContent.icon}</div>
                <div className="text-2xl font-bold text-white mb-2">{currentContent.title}</div>
                <div className="text-gray-300">Interactive Preview</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href={currentContent.link}
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg"
              >
                🚀 Explore {currentContent.title} →
              </a>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                  💰 Invest Now
                </button>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                  📧 Learn More
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">📊 Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1000+</div>
                  <div className="text-gray-300">Qubits/Features</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24/7</div>
                  <div className="text-gray-300">Operation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">10x</div>
                  <div className="text-gray-300">Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of innovators, investors, and technology leaders who are already 
            transforming their industries with our revolutionary technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🌟 Explore All Technologies
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              💼 Schedule Demo
            </button>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              📞 Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;