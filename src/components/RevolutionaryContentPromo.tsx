import React, { useState } from 'react';

const RevolutionaryContentPromo: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentItems = [
    {
      title: "Ultimate Tech Showcase 2026",
      description: "Experience the most advanced technologies that will reshape our world",
      icon: "🚀",
      link: "/pages/UltimateTechShowcase2026",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30",
      features: ["Interactive demos", "Live technology previews", "Expert insights"]
    },
    {
      title: "Future Tech Trends 2026",
      description: "Discover the revolutionary technologies that will shape our future",
      icon: "🔮",
      link: "/pages/FutureTechTrends2026",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/30",
      features: ["Trend analysis", "Future predictions", "Industry impact"]
    },
    {
      title: "Consciousness Computing",
      description: "The next frontier where AI achieves true consciousness and self-awareness",
      icon: "🧠",
      link: "/pages/AIConsciousnessEvolution2026",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/30",
      features: ["AI consciousness", "Emotional intelligence", "Creative AI"]
    },
    {
      title: "Quantum Supremacy",
      description: "Exponential computing power that solves impossible problems",
      icon: "⚡",
      link: "/pages/QuantumComputingRevolution2026",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-600/20 to-purple-600/20",
      borderColor: "border-violet-400/30",
      features: ["1000+ qubits", "Quantum algorithms", "Supremacy achieved"]
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication and enhancement",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2026",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-400/30",
      features: ["Brain-computer interface", "Thought control", "Neural enhancement"]
    },
    {
      title: "Space Technology Innovation",
      description: "Revolutionary space exploration and colonization",
      icon: "🌌",
      link: "/pages/SpaceTechInnovation2026",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-400/30",
      features: ["Mars colonization", "Space habitats", "Interstellar travel"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <divdiv
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY NEW CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Explore our latest breakthrough content featuring cutting-edge AI, Quantum Computing, 
            Neural Interfaces, and Next-Generation Technologies that will transform our world
          </p>
        </divdiv>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <divdiv
              key={index}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${item.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-purple-200 mb-6 text-center">
                  {item.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-purple-300 text-sm">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore {item.title.split(' ')[0]} →
                </a>
              </div>

              {/* Hover Effect */}
              {hoveredCard === index && (
                <divdiv
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                />
              )}
            </divdiv>
          ))}
        </div>

        {/* Interactive Features Section */}
        <divdiv
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-white mb-4">🎮 Interactive Features</h3>
            <p className="text-xl text-purple-200">Experience our content with cutting-edge interactive features</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-2">Interactive Demos</h4>
              <p className="text-purple-200">Try our technologies in real-time with interactive demonstrations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold text-white mb-2">Live Analytics</h4>
              <p className="text-purple-200">See real-time data and analytics for all our technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h4 className="text-xl font-bold text-white mb-2">Future Predictions</h4>
              <p className="text-purple-200">Get AI-powered predictions about technology trends</p>
            </div>
          </div>
        </divdiv>

        {/* Call to Action */}
        <divdiv
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies 
            to transform their businesses and change the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
              Download All Content
            </button>
          </div>
        </divdiv>
      </div>
    </div>
  );
};

export default RevolutionaryContentPromo;