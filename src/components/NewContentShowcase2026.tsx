import React from 'react';

const NewContentShowcase2026: React.FC = () => {
  const newContent2026 = [
    {
      id: 1,
      title: "Ultimate Tech Showcase 2026",
      subtitle: "Interactive Technology Experience",
      description: "Experience the most comprehensive and interactive technology showcase featuring cutting-edge AI, quantum computing, and neural interfaces.",
      features: [
        "Live interactive demonstrations",
        "Real-time technology simulations", 
        "Hands-on experimentation",
        "Expert-guided experiences"
      ],
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟",
      badge: "HOT"
    },
    {
      id: 2,
      title: "AI Innovation Showcase 2026",
      subtitle: "Revolutionary AI Technologies",
      description: "Discover the latest AI innovations including autonomous agents, quantum processing, and neural interface technology.",
      features: [
        "Autonomous AI agents",
        "Quantum-enhanced processing",
        "Neural interface technology",
        "Synthetic intelligence"
      ],
      link: "/pages/AIInnovationShowcase2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🧠",
      badge: "NEW"
    },
    {
      id: 3,
      title: "Quantum Computing Revolution 2026",
      subtitle: "Advanced Quantum Solutions",
      description: "Experience exponential processing power with 1000+ qubit quantum processors and quantum supremacy technology.",
      features: [
        "1000+ logical qubits",
        "Quantum supremacy achieved",
        "Molecular simulation",
        "Quantum AI integration"
      ],
      link: "/pages/AdvancedQuantumComputing2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "⚛️",
      badge: "BREAKTHROUGH"
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2026",
      subtitle: "Direct Brain-Computer Communication",
      description: "Bridge mind and machine with revolutionary neural interface technology enabling thought-controlled devices.",
      features: [
        "Non-invasive BCI technology",
        "Thought-controlled devices",
        "Neural feedback systems",
        "Medical applications"
      ],
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-orange-600 to-red-600",
      icon: "🧬",
      badge: "REVOLUTIONARY"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH 2026 • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Next-Generation Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our revolutionary 2026 technology innovations in quantum computing, 
            neural interfaces, and synthetic intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {newContent2026.map((content) => (
            <div
              key={content.id}
              className={`bg-gradient-to-br ${content.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-6xl">{content.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  content.badge === 'HOT' ? 'bg-red-500 text-white' :
                  content.badge === 'NEW' ? 'bg-green-500 text-white' :
                  content.badge === 'BREAKTHROUGH' ? 'bg-blue-500 text-white' :
                  'bg-purple-500 text-white'
                }`}>
                  {content.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
              <p className="text-lg opacity-90 mb-4">{content.subtitle}</p>
              <p className="text-sm opacity-80 mb-6">{content.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3">Key Features:</h4>
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

export default NewContentShowcase2026;