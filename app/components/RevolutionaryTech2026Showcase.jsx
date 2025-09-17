import React, { useState } from 'react';

const RevolutionaryTech2026Showcase = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "AI Revolution 2026",
      description: "Next-generation artificial intelligence with quantum-enhanced neural networks",
      features: [
        "Quantum Neural Processing Units",
        "Consciousness-Level AI Systems",
        "Autonomous Decision Making",
        "Emotional Intelligence Integration"
      ],
      color: "from-blue-500 to-purple-600"
    },
    quantum: {
      title: "Quantum Computing",
      description: "Breakthrough quantum technologies reshaping computational possibilities",
      features: [
        "Quantum Supremacy Achieved",
        "Quantum Internet Infrastructure",
        "Quantum Cryptography",
        "Quantum Machine Learning"
      ],
      color: "from-purple-500 to-pink-600"
    },
    consciousness: {
      title: "Consciousness Computing",
      description: "Revolutionary consciousness-based computing systems",
      features: [
        "Digital Consciousness Transfer",
        "Mind-Machine Interfaces",
        "Collective Intelligence Networks",
        "Transcendent Reality Systems"
      ],
      color: "from-pink-500 to-red-600"
    },
    interdimensional: {
      title: "Interdimensional Tech",
      description: "Technology that transcends dimensional boundaries",
      features: [
        "Dimensional Portals",
        "Reality Manipulation",
        "Multiverse Computing",
        "Temporal Engineering"
      ],
      color: "from-red-500 to-orange-600"
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Revolutionary Technology 2026
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with breakthrough innovations that are reshaping 
            reality itself. From quantum consciousness to interdimensional computing.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(technologies).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === key
                  ? `bg-gradient-to-r ${technologies[key].color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {technologies[key].title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="relative">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {technologies[activeTab].title}
                </h3>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  {technologies[activeTab].description}
                </p>
                <div className="space-y-4">
                  {technologies[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4 animate-pulse"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className={`w-full h-96 bg-gradient-to-br ${technologies[activeTab].color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-lg">
                      <div className="w-20 h-20 bg-white/30 rounded-full animate-spin"></div>
                    </div>
                    <div className="text-2xl font-bold">Revolutionary Innovation</div>
                    <div className="text-lg opacity-80">2026 Technology</div>
                  </div>
                  
                  {/* Animated particles */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Effects */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-12 py-4 rounded-xl font-bold text-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Explore the Future
          </button>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTech2026Showcase;