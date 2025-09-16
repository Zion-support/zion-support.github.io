import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI",
      icon: "🧠",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving", 
        "Self-Learning Capabilities",
        "Autonomous Decision Making"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20"
    },
    {
      id: 1,
      name: "Quantum Consciousness",
      icon: "⚡",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Thinking",
        "Reality Manipulation"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20"
    },
    {
      id: 2,
      name: "Interdimensional Tech",
      icon: "🌌",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      features: [
        "Dimensional Portals",
        "Reality Shifting",
        "Parallel Universe Access",
        "Time-Space Manipulation"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20"
    }
  ];

  const handleTabChange = (tabId: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies with interactive features and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTabChange(tech.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeTab === tech.id
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-8xl mb-6">{technologies[activeTab].icon}</div>
                  <h3 className="text-4xl font-bold mb-6">{technologies[activeTab].name}</h3>
                  <p className="text-xl opacity-90 mb-8">{technologies[activeTab].description}</p>
                  
                  <div className="space-y-4">
                    {technologies[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${technologies[activeTab].color} rounded-full`}></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <button className={`bg-gradient-to-r ${technologies[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                      Explore {technologies[activeTab].name} →
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} rounded-xl p-8 border border-white/20`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                      <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                      <p className="text-lg opacity-80 mb-6">
                        Experience {technologies[activeTab].name} in action with our interactive demonstration
                      </p>
                      <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                        Start Demo
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Accuracy</div>
              <div className="text-sm opacity-80">Conscious AI decision making</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-2">Processing</div>
              <div className="text-sm opacity-80">Quantum computing power</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-lg font-semibold mb-2">Speed</div>
              <div className="text-sm opacity-80">Faster than current systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-2">Possibilities</div>
              <div className="text-sm opacity-80">Interdimensional access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;