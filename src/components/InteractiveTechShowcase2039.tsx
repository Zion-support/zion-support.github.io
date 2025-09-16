import React, { useState } from 'react';

const InteractiveTechShowcase2039: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = {
    ai: {
      name: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving",
        "Self-Learning Capabilities",
        "Quantum Consciousness Integration"
      ],
      stats: {
        consciousness: 100,
        creativity: 95,
        learning: 98,
        empathy: 92
      }
    },
    quantum: {
      name: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Thinking",
        "Reality Manipulation"
      ],
      stats: {
        processing: 100,
        speed: 99,
        accuracy: 98,
        efficiency: 97
      }
    },
    interdimensional: {
      name: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Dimensional Portals",
        "Reality Shifting",
        "Parallel Universe Access",
        "Time-Space Manipulation"
      ],
      stats: {
        stability: 100,
        precision: 98,
        safety: 95,
        reliability: 97
      }
    }
  };

  const handleTechChange = (tech: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedTech(tech);
      setIsAnimating(false);
    }, 300);
  };

  const currentTech = technologies[selectedTech as keyof typeof technologies];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2039
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase 2039</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies through interactive demonstrations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => handleTechChange(key)}
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  selectedTech === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Technology Info */}
            <div>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{currentTech.icon}</div>
                <h3 className="text-4xl font-bold mb-4">{currentTech.name}</h3>
                <p className="text-xl opacity-90">{currentTech.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">Performance Metrics</h4>
                <div className="space-y-4">
                  {Object.entries(currentTech.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-2">
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-bold">{value}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${currentTech.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${currentTech.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Experience {currentTech.name} →
              </button>
            </div>

            {/* Right Side - Interactive Demo */}
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Interactive Demo</h4>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎮</div>
                    <p className="text-lg mb-6">Experience this technology in action</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg hover:bg-white/30 transition-all duration-300">
                      <div className="text-2xl mb-2">🧠</div>
                      <div className="text-sm">Neural Interface</div>
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg hover:bg-white/30 transition-all duration-300">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-sm">Quantum Processing</div>
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg hover:bg-white/30 transition-all duration-300">
                      <div className="text-2xl mb-2">🌌</div>
                      <div className="text-sm">Reality Shift</div>
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg hover:bg-white/30 transition-all duration-300">
                      <div className="text-2xl mb-2">🔮</div>
                      <div className="text-sm">Predict Future</div>
                    </button>
                  </div>

                  <div className="text-center">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Launch Full Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">All Revolutionary Technologies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(technologies).map(([key, tech]) => (
              <div 
                key={key}
                onClick={() => handleTechChange(key)}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 ${
                  selectedTech === key ? 'ring-2 ring-purple-400' : ''
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                  <p className="text-sm opacity-90">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2039;