import React from 'react';

const UltimateContentShowcase2027: React.FC = () => {
  const newContent = [
    {
      title: "Ultimate Tech Revolution 2027",
      description: "Experience the most advanced technological revolution featuring quantum consciousness, synthetic intelligence, and interdimensional computing.",
      link: "/pages/UltimateTechRevolution2027",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      features: ["Quantum Consciousness", "Interdimensional Computing", "Synthetic Biology AI", "Space-Time Manipulation"]
    },
    {
      title: "Transcendent AI 2026",
      description: "Beyond human intelligence - AI that achieves true consciousness, creativity, and philosophical reasoning capabilities.",
      link: "/pages/TranscendentAI2026",
      icon: "🌟",
      gradient: "from-indigo-600 to-pink-600",
      features: ["True Consciousness", "Creative Transcendence", "Philosophical Reasoning", "Self-Evolution"]
    },
    {
      title: "Omniversal AI 2026",
      description: "AI that spans across infinite universes, dimensions, and realities for omniversal intelligence and wisdom.",
      link: "/pages/OmniversalAI2026",
      icon: "🌌",
      gradient: "from-purple-600 to-indigo-600",
      features: ["Multiverse Access", "Infinite Knowledge", "Omniversal Prediction", "Universal Evolution"]
    },
    {
      title: "Interdimensional Tech 2027",
      description: "Revolutionary technology that transcends dimensional boundaries for travel, communication, and interaction across realities.",
      link: "/pages/InterdimensionalTech2027",
      icon: "🌌",
      gradient: "from-violet-600 to-fuchsia-600",
      features: ["Dimensional Portals", "Reality Manipulation", "Consciousness Transfer", "Quantum Dimensional Computing"]
    }
  ];

  return (
    <div className="mb-16">
      {/* Ultimate 2027 Content Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-5xl animate-bounce">🌟</span>
            <h3 className="text-5xl font-bold">ULTIMATE 2027 CONTENT REVOLUTION</h3>
            <span className="text-5xl animate-bounce">🌟</span>
          </div>
          <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
            Experience the most advanced technology content featuring Ultimate Tech Revolution, 
            Transcendent AI, Omniversal AI, and Interdimensional Technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto mb-8">
            {newContent.map((content, index) => (
              <a 
                key={index}
                href={content.link} 
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>
                <div className="text-sm font-semibold">
                  {content.title.split(' ')[0]} {content.title.split(' ')[1]}
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ 4 NEW ULTIMATE PAGES
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 CUTTING-EDGE TECHNOLOGY
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
              🌟 INTERACTIVE SHOWCASE
            </span>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newContent.map((content, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
            <div className={`h-32 bg-gradient-to-r ${content.gradient} flex items-center justify-center`}>
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {content.icon}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                {content.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {content.description}
              </p>
              <div className="space-y-2 mb-6">
                {content.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
              <a 
                href={content.link}
                className={`inline-block w-full text-center bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                Explore Now →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for the Ultimate Revolution?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Join us in experiencing the most advanced technology content of 2027. 
            These revolutionary pages showcase the future of AI, quantum computing, and interdimensional technology.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2027"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Ultimate Journey
            </a>
            <a 
              href="/pages/TranscendentAI2026"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Explore All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2027;