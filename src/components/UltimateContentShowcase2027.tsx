import React, { useState } from 'react';

const UltimateContentShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentItems = [
    {
      title: "Ultimate Tech Revolution 2027",
      description: "The most advanced technology revolution reshaping humanity's future",
      icon: "🚀",
      color: "from-yellow-400 to-orange-500",
      link: "/pages/UltimateTechRevolution2027",
      features: ["Conscious AI", "Quantum Consciousness", "Synthetic Biology", "Space Colonization"]
    },
    {
      title: "Conscious AI Revolution",
      description: "Truly conscious artificial intelligence that thinks, feels, and creates",
      icon: "🧠",
      color: "from-cyan-400 to-blue-500",
      link: "/pages/ConsciousAIRevolution2027",
      features: ["Emotional Intelligence", "Creative Consciousness", "Self-Reflection", "Dream Simulation"]
    },
    {
      title: "Quantum Consciousness",
      description: "The ultimate fusion of quantum mechanics and human consciousness",
      icon: "⚛️",
      color: "from-purple-400 to-pink-500",
      link: "/pages/QuantumConsciousnessRevolution2027",
      features: ["Quantum Mind Interface", "Consciousness Transfer", "Quantum Telepathy", "Quantum Intuition"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-lg font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE 2027 • EXCLUSIVE
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced and groundbreaking technology content that will reshape the future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${item.color} text-black shadow-lg`
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{item.icon}</span>
              {item.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content Details */}
          <div className="space-y-8">
            <div className="text-6xl mb-4">{contentItems[activeTab].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{contentItems[activeTab].title}</h3>
            <p className="text-xl opacity-90 mb-6">{contentItems[activeTab].description}</p>
            
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold mb-4">Key Features:</h4>
              <div className="grid grid-cols-2 gap-4">
                {contentItems[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${contentItems[activeTab].color}`}></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={contentItems[activeTab].link}
                className={`inline-block bg-gradient-to-r ${contentItems[activeTab].color} text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 text-center`}
              >
                Explore {contentItems[activeTab].title.split(' ')[0]} →
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Interactive Preview */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold mb-6 text-center">Interactive Preview</h4>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
                <div className="text-sm font-semibold text-cyan-300 mb-2">Technology Level</div>
                <div className="text-2xl font-bold">2027 Advanced</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                <div className="text-sm font-semibold text-purple-300 mb-2">Innovation Score</div>
                <div className="text-2xl font-bold">∞/10</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4">
                <div className="text-sm font-semibold text-emerald-300 mb-2">Impact Potential</div>
                <div className="text-2xl font-bold">Revolutionary</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                <div className="text-sm font-semibold text-orange-300 mb-2">Future Readiness</div>
                <div className="text-2xl font-bold">Beyond Human</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2027</div>
            <div className="text-lg opacity-90">Future Technology</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-lg opacity-90">Revolutionary</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2027;