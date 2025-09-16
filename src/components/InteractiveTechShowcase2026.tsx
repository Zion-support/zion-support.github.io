import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Synthetic Intelligence",
      icon: "🧠",
      description: "AI systems that think and reason like humans but with superhuman capabilities",
      features: ["Self-evolving algorithms", "Emotional intelligence", "Creative problem solving"],
      gradient: "from-pink-600 to-purple-600",
      applications: ["Healthcare", "Finance", "Creative Arts"],
      status: "BREAKTHROUGH"
    },
    {
      id: 2,
      name: "Quantum Computing",
      icon: "⚡",
      description: "Quantum-enhanced processing that operates at the speed of light",
      features: ["Exponential speedup", "Quantum cryptography", "Molecular simulation"],
      gradient: "from-cyan-600 to-blue-600",
      applications: ["Drug Discovery", "Cryptography", "Optimization"],
      status: "REVOLUTIONARY"
    },
    {
      id: 3,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces for seamless thought-to-action communication",
      features: ["Non-invasive reading", "Thought control", "Memory enhancement"],
      gradient: "from-emerald-600 to-teal-600",
      applications: ["Medical", "Gaming", "Accessibility"],
      status: "FUTURE"
    },
    {
      id: 4,
      name: "Quantum AI Fusion",
      icon: "🌌",
      description: "The ultimate fusion of quantum computing and neural networks",
      features: ["Quantum neural networks", "Instant learning", "Parallel processing"],
      gradient: "from-indigo-600 to-purple-600",
      applications: ["Research", "Simulation", "Prediction"],
      status: "FUSION"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Interact with our revolutionary technologies and see how they will transform your world
          </p>
        </div>

        {/* Main Interactive Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Technology Selector */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Choose Your Technology</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveTech(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} border-white/50 text-white`
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                    <div className="mt-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        activeTech === index ? 'bg-white/20' : 'bg-gray-500/20'
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentTech.gradient} rounded-3xl p-12 text-white transition-all duration-500 ${
              isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-6 animate-bounce">{currentTech.icon}</div>
                <h3 className="text-4xl font-bold mb-4">{currentTech.name}</h3>
                <p className="text-xl opacity-90 mb-8">{currentTech.description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/20 rounded-lg p-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentTech.applications.map((app, index) => (
                    <span key={index} className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-white text-purple-600 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
                  Try Demo
                </button>
                <button className="flex-1 border-2 border-white text-white py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-bold text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Technology Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={tech.id} className={`bg-gradient-to-br ${tech.gradient} rounded-xl p-6 text-white ${
                activeTech === index ? 'ring-4 ring-white/50 scale-105' : ''
              } transition-all duration-300`}>
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{tech.name}</h4>
                <div className="space-y-2">
                  {tech.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm opacity-90">
                      • {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                    {tech.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technology 
            to transform their businesses and reshape the world.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;