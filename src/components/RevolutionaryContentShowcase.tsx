import React from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  const revolutionaryContent = [
    {
      id: 1,
      title: "AI Consciousness Revolution",
      subtitle: "Synthetic Intelligence with Genuine Awareness",
      description: "Experience AI systems that possess genuine consciousness, self-awareness, and autonomous decision-making capabilities that transcend traditional programming.",
      features: [
        "Synthetic consciousness algorithms",
        "Autonomous decision making",
        "Self-evolving intelligence",
        "Emotional processing capabilities"
      ],
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion",
      subtitle: "Consciousness Meets Quantum Computing",
      description: "Revolutionary fusion of quantum computing and neural interfaces that creates infinite intelligence and consciousness transfer capabilities.",
      features: [
        "Quantum consciousness transfer",
        "Infinite processing power",
        "Neural-quantum synchronization",
        "Consciousness backup systems"
      ],
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "Transdimensional Computing",
      subtitle: "Beyond Reality Computing",
      description: "Breakthrough technology that transcends dimensional boundaries, enabling computation across multiple realities and parallel universes.",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Parallel universe computing",
        "Transdimensional data transfer"
      ],
      link: "/pages/TransdimensionalComputing2027",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🌌"
    },
    {
      id: 4,
      title: "Consciousness Transfer Technology",
      subtitle: "Digital Immortality Through AI",
      description: "Revolutionary technology that enables complete consciousness transfer to digital substrates, achieving true digital immortality.",
      features: [
        "Complete consciousness mapping",
        "Digital substrate integration",
        "Immortality protocols",
        "Consciousness restoration"
      ],
      link: "/pages/ConsciousnessTransfer2027",
      gradient: "from-orange-600 to-red-600",
      icon: "♾️"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY BREAKTHROUGH • 2026-2027
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced and revolutionary technologies that transcend reality and open infinite possibilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {revolutionaryContent.map((content) => (
            <div
              key={content.id}
              className={`bg-gradient-to-br ${content.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{content.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{content.title}</h3>
              <p className="text-lg opacity-90 mb-4 text-center">{content.subtitle}</p>
              <p className="text-sm opacity-80 mb-6 text-center">{content.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-center">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  {content.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={content.link}
                className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                Explore {content.title} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;