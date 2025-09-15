import React from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const contentItems = [
    {
      id: 1,
      title: "Advanced AI Transformation 2026",
      description: "Experience the next generation of artificial intelligence that transforms businesses and accelerates innovation.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      href: "/pages/AdvancedAITransformation2026",
      features: ["Autonomous AI Agents", "Edge AI Computing", "Generative AI 2.0"]
    },
    {
      id: 2,
      title: "Next-Gen Tech Showcase 2026",
      description: "Discover the most advanced technologies reshaping our world, from quantum computing to neural interfaces.",
      image: "🌟",
      gradient: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      href: "/pages/NextGenTechShowcase2026",
      features: ["Quantum Computing", "Neural Interfaces", "Space Technology"]
    },
    {
      id: 3,
      title: "Quantum Computing Revolution 2026",
      description: "Revolutionary quantum computing solutions that solve impossible problems with exponential speed.",
      image: "⚛️",
      gradient: "from-indigo-600 to-purple-600",
      borderColor: "border-indigo-400",
      href: "/pages/QuantumComputingRevolution2026",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Quantum Simulation"]
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces that bridge the gap between human consciousness and digital systems.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      href: "/pages/NeuralInterfaceRevolution2026",
      features: ["Neural Interfaces", "Reality Augmentation", "Neural Processing"]
    },
    {
      id: 5,
      title: "Advanced Space Tech 2026",
      description: "Cutting-edge space exploration and colonization technologies for the next frontier.",
      image: "🚀",
      gradient: "from-orange-600 to-red-600",
      borderColor: "border-orange-400",
      href: "/pages/AdvancedSpaceTech2026",
      features: ["Space Colonization", "Interstellar Travel", "Advanced Propulsion"]
    },
    {
      id: 6,
      title: "Consciousness Computing 2026",
      description: "AI systems with genuine consciousness and self-awareness that transcend traditional limitations.",
      image: "🌟",
      gradient: "from-violet-600 to-fuchsia-600",
      borderColor: "border-violet-400",
      href: "/pages/ConsciousnessComputing2026",
      features: ["Self-Awareness", "Subjective Experience", "Unified Consciousness"]
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH INNOVATIONS
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content featuring cutting-edge AI, 
            Quantum Computing, Neural Interfaces, and Next-Generation Technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer border-2 ${item.borderColor} hover:shadow-2xl`}
            >
              <div className="text-6xl mb-6 text-center">{item.image}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-center opacity-90 mb-6">{item.description}</p>
              
              <div className="space-y-2 mb-6">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={item.href}
                className="block w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-center"
              >
                Explore {item.title} →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dive deep into revolutionary technologies that will reshape every aspect of human life 
            and unlock unprecedented possibilities.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </button>
            <button className="border border-purple-600 text-purple-600 px-10 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold text-lg">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;