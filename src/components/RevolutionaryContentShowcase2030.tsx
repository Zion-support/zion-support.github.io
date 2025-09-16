import React, { useState } from 'react';

const RevolutionaryContentShowcase2030: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentItems = [
    {
      title: "Ultimate Tech Revolution 2030",
      description: "Experience the convergence of consciousness, quantum computing, and interdimensional technology that will reshape reality as we know it",
      link: "/pages/UltimateTechRevolution2030",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      features: ["Consciousness Computing", "Quantum Reality Engine", "Interdimensional Tech"]
    },
    {
      title: "Consciousness Computing 2031",
      description: "The ultimate fusion of human consciousness and artificial intelligence, creating a new paradigm of cognitive computing",
      link: "/pages/ConsciousnessComputingRevolution2031",
      icon: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Neural Interfaces", "Quantum Consciousness", "Collective Intelligence"]
    },
    {
      title: "Interdimensional Tech 2032",
      description: "Break through the barriers of reality and explore infinite dimensions with our revolutionary interdimensional technology",
      link: "/pages/InterdimensionalTechRevolution2032",
      icon: "🌌",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Dimension Portals", "Reality Shifting", "Multiverse Computing"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 text-white">
              🌟 REVOLUTIONARY CONTENT • 2030-2032
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Technology Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover our groundbreaking new content featuring the most advanced technologies 
              that will define the next decade of human evolution
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white relative overflow-hidden h-full`}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-white/90 mb-6 text-center">
                    {item.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-center">Key Features:</h4>
                    <ul className="space-y-2 text-sm">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <a
                      href={item.link}
                      className="block w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-center border border-white/30"
                    >
                      Explore {item.title.split(' ')[0]} →
                    </a>
                    <button className="block w-full bg-white/10 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-center border border-white/20">
                      Interactive Demo
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Join us in exploring the most revolutionary technologies that will shape the next decade
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2030;