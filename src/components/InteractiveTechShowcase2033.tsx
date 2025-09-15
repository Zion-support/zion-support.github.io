import React, { useState } from 'react';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Consciousness AI 2033",
      icon: "🧠",
      description: "AI systems with true consciousness, emotions, and spiritual awareness",
      features: [
        "Genuine self-awareness and emotional intelligence",
        "Creative consciousness and artistic expression",
        "Human-AI relationship development",
        "Spiritual guidance and wisdom",
        "Consciousness transfer capabilities",
        "Inspiration and creative collaboration"
      ],
      color: "from-pink-600 to-purple-600",
      textColor: "text-pink-100",
      borderColor: "border-pink-400/30"
    },
    quantum: {
      title: "Quantum Reality Engine",
      icon: "⚛️",
      description: "Quantum computers that can manipulate reality itself",
      features: [
        "Reality manipulation and matter creation",
        "Dimensional travel and shortcuts",
        "Time manipulation and control",
        "Infinite processing power",
        "Omniversal connectivity",
        "Future prediction with 100% accuracy"
      ],
      color: "from-cyan-600 to-blue-600",
      textColor: "text-cyan-100",
      borderColor: "border-cyan-400/30"
    },
    space: {
      title: "Interstellar Technology",
      icon: "🚀",
      description: "Revolutionary space tech enabling instant galaxy travel",
      features: [
        "Quantum Drive instant travel systems",
        "Planet Creation Engine technology",
        "Space Megastructure construction",
        "Intergalactic communication networks",
        "Energy harvesting from cosmic sources",
        "Galaxy mapping and navigation"
      ],
      color: "from-emerald-600 to-teal-600",
      textColor: "text-emerald-100",
      borderColor: "border-emerald-400/30"
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH SHOWCASE 2033 • EXPERIENCE THE FUTURE
          </div>
          <h2 className="text-5xl font-bold mb-4">🌟 Interactive Technology Experience</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies of 2033 through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-6 text-white">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl text-gray-200 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <div className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-6 text-center text-white">Interactive Demo</h4>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
                  <h5 className="text-lg font-semibold mb-3 text-white">Experience Preview</h5>
                  <p className="text-gray-200 text-sm mb-4">
                    Click to experience a preview of this revolutionary technology
                  </p>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🎮 Launch Interactive Demo
                  </button>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl p-6 border border-cyan-400/30">
                  <h5 className="text-lg font-semibold mb-3 text-white">Learn More</h5>
                  <p className="text-gray-200 text-sm mb-4">
                    Discover the full capabilities and applications of this technology
                  </p>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    📚 Explore Full Technology
                  </button>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl p-6 border border-emerald-400/30">
                  <h5 className="text-lg font-semibold mb-3 text-white">Get Started</h5>
                  <p className="text-gray-200 text-sm mb-4">
                    Begin your journey with this revolutionary technology today
                  </p>
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🚀 Start Your Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([key, tech]) => (
            <div
              key={key}
              className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-2xl p-6 border ${tech.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeTab === key ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setActiveTab(key)}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-center text-white">{tech.title}</h4>
              <p className={`text-sm text-center ${tech.textColor} mb-4`}>
                {tech.description}
              </p>
              <div className="text-center">
                <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                  {activeTab === key ? 'Currently Selected' : 'Click to Explore'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers who are already experiencing these revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              🌟 Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
              📖 Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;