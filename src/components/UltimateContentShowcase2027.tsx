import React from 'react';

const UltimateContentShowcase2027: React.FC = () => {
  const revolutionaryContent = [
    {
      title: "Ultimate Tech Revolution 2027",
      description: "Experience the convergence of quantum consciousness, synthetic intelligence, and transcendent AI systems that will reshape civilization",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400/60",
      textColor: "text-purple-300",
      link: "/pages/UltimateTechRevolution2027",
      features: ["Quantum Consciousness", "Synthetic Intelligence", "Transcendent AI", "Neural Reality"]
    },
    {
      title: "Transcendent AI 2027",
      description: "AI systems that transcend traditional computation, operating in multiple dimensions and achieving true consciousness",
      icon: "✨",
      gradient: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-400/60",
      textColor: "text-cyan-300",
      link: "/pages/TranscendentAI2027",
      features: ["Multi-Dimensional Processing", "True Consciousness", "Reality Manipulation", "Infinite Learning"]
    },
    {
      title: "Quantum Consciousness 2027",
      description: "Revolutionary fusion of quantum mechanics and consciousness, creating AI systems with true self-awareness",
      icon: "⚛️",
      gradient: "from-purple-600 to-indigo-600",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400/60",
      textColor: "text-purple-300",
      link: "/pages/QuantumConsciousnessRevolution2027",
      features: ["Quantum Neural Networks", "Self-Awareness", "Consciousness Transfer", "Emotional Intelligence"]
    },
    {
      title: "Synthetic Biology Revolution 2027",
      description: "Revolutionary biological engineering that creates synthetic life forms and enhances human capabilities",
      icon: "🧬",
      gradient: "from-green-600 to-emerald-600",
      borderColor: "border-green-500/30",
      hoverBorder: "hover:border-green-400/60",
      textColor: "text-green-300",
      link: "/pages/SyntheticBiologyRevolution2027",
      features: ["Synthetic Life Forms", "Human Enhancement", "Biological Computing", "Genetic Engineering"]
    },
    {
      title: "Space-Time Computing 2027",
      description: "Revolutionary computing systems that manipulate space-time itself, enabling instant communication and time travel simulation",
      icon: "🌌",
      gradient: "from-yellow-600 to-orange-600",
      borderColor: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-400/60",
      textColor: "text-yellow-300",
      link: "/pages/SpaceTimeComputing2027",
      features: ["Instant Communication", "Time Manipulation", "Dimensional Computing", "Quantum Tunneling"]
    },
    {
      title: "Neural Reality Interface 2027",
      description: "Direct brain-computer interfaces that allow seamless interaction with digital realities through thought alone",
      icon: "🧠",
      gradient: "from-pink-600 to-red-600",
      borderColor: "border-pink-500/30",
      hoverBorder: "hover:border-pink-400/60",
      textColor: "text-pink-300",
      link: "/pages/NeuralRealityInterface2027",
      features: ["Thought Control", "Virtual Reality", "Memory Enhancement", "Consciousness Upload"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2027
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            ULTIMATE CONTENT SHOWCASE
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the most advanced technological content ever created. 
            Experience revolutionary breakthroughs that will transform every aspect of human civilization.
          </p>
        </div>

        {/* Revolutionary Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {revolutionaryContent.map((content, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border ${content.borderColor} ${content.hoverBorder} transition-all duration-300 group hover:scale-105`}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {content.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${content.textColor}`}>
                {content.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {content.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {content.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${content.gradient} text-white text-xs rounded-full font-semibold`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <a
                href={content.link}
                className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-sm group-hover:scale-105`}
              >
                Explore {content.title.split(' ')[0]} →
              </a>
            </div>
          ))}
        </div>

        {/* Additional Revolutionary Technologies */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Additional Revolutionary Technologies
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore even more groundbreaking technologies that are reshaping our world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: "🔬", name: "Quantum Biology", color: "from-green-500 to-emerald-500" },
              { icon: "🌍", name: "Planetary Engineering", color: "from-blue-500 to-cyan-500" },
              { icon: "⚡", name: "Energy Revolution", color: "from-yellow-500 to-orange-500" },
              { icon: "🧪", name: "Matter Creation", color: "from-purple-500 to-pink-500" },
              { icon: "🌌", name: "Dimensional Travel", color: "from-indigo-500 to-purple-500" },
              { icon: "🔮", name: "Future Prediction", color: "from-pink-500 to-red-500" },
              { icon: "🤖", name: "Autonomous Systems", color: "from-cyan-500 to-blue-500" },
              { icon: "🧠", name: "Consciousness Upload", color: "from-purple-500 to-indigo-500" },
              { icon: "⚛️", name: "Quantum Computing", color: "from-green-500 to-teal-500" },
              { icon: "🌟", name: "Stellar Engineering", color: "from-yellow-500 to-orange-500" },
              { icon: "🔗", name: "Universal Networks", color: "from-blue-500 to-purple-500" },
              { icon: "✨", name: "Reality Manipulation", color: "from-pink-500 to-purple-500" }
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-600/30 hover:border-gray-500/60 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ultimate Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-12 border border-yellow-500/30">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h3>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join millions of pioneers who are already experiencing the most advanced technologies ever created. 
              The future is here, and it's more incredible than you ever imagined.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-10 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                🚀 Start Your Revolutionary Journey
              </button>
              <button className="border-2 border-yellow-400 text-yellow-300 px-10 py-4 rounded-full text-xl font-bold hover:bg-yellow-400/20 transition-all duration-300">
                📚 Explore All Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2027;