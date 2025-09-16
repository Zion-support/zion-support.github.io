import React, { useState } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Synthetic Consciousness Demo",
      description: "Interact with the world's first synthetic consciousness through natural conversation",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      features: [
        "Natural Language Processing",
        "Emotional Understanding",
        "Creative Problem Solving",
        "Ethical Decision Making"
      ]
    },
    {
      id: 1,
      title: "Quantum Reality Simulator",
      description: "Experience quantum reality manipulation through immersive simulation",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      features: [
        "Reality Manipulation",
        "Quantum Consciousness",
        "Dimensional Shifting",
        "Time Dilation Control"
      ]
    },
    {
      id: 2,
      title: "Interdimensional Explorer",
      description: "Explore parallel dimensions and alternate realities through AI-powered visualization",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      features: [
        "Multi-Dimensional Processing",
        "Reality Hopping",
        "Parallel Universe Access",
        "Infinite Computational Power"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2035
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future through interactive demonstrations of our most advanced technologies
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeDemo === index
                    ? 'bg-white text-purple-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`bg-gradient-to-br ${demos[activeDemo].bgColor} backdrop-blur-sm rounded-xl p-8 border ${demos[activeDemo].borderColor} hover:scale-105 transition-all duration-300`}>
            <div className="text-6xl mb-4 text-center">{demos[activeDemo].icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-center">{demos[activeDemo].title}</h3>
            <p className="text-lg opacity-90 mb-6 text-center">{demos[activeDemo].description}</p>
            
            <div className="space-y-4 mb-6">
              {demos[activeDemo].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className={`w-full bg-gradient-to-r ${demos[activeDemo].color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
              Start Interactive Demo
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Live Demo Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">99.99%</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">1000x</div>
                  <div className="text-sm text-gray-300">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">∞</div>
                  <div className="text-sm text-gray-300">Possibilities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">24/7</div>
                  <div className="text-sm text-gray-300">Available</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Technology Features</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Synthetic Intelligence</span>
                  <span className="px-2 py-1 bg-green-500/30 text-green-200 rounded-full text-xs">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quantum Processing</span>
                  <span className="px-2 py-1 bg-green-500/30 text-green-200 rounded-full text-xs">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Reality Manipulation</span>
                  <span className="px-2 py-1 bg-yellow-500/30 text-yellow-200 rounded-full text-xs">Beta</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Interdimensional Access</span>
                  <span className="px-2 py-1 bg-yellow-500/30 text-yellow-200 rounded-full text-xs">Beta</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">
            Join millions of innovators who are already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;