import React from "react";

const InteractiveTechShowcase2027 = () => {
  const techItems = [
    {
      id: 'ai-revolution',
      title: 'Next-Gen AI Revolution 2027',
      description: 'Conscious AI systems with quantum-enhanced processing',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      link: '/pages/NextGenAIRevolution2027'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution 2027',
      description: '1000+ qubit quantum computers achieving true supremacy',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      link: '/pages/QuantumComputingRevolution2027'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution 2027',
      description: 'Direct brain-computer interfaces for seamless interaction',
      icon: '🧬',
      color: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-400',
      bgColor: 'from-green-600/30 to-emerald-600/30',
      link: '/pages/NeuralInterfaceRevolution2025'
    },
    {
      id: 'space-tech',
      title: 'Space Technology Revolution 2027',
      description: 'Mars colonization and asteroid mining technologies',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-400',
      bgColor: 'from-orange-600/30 to-red-600/30',
      link: '/pages/SpaceTechInnovation2026'
    },
    {
      id: 'biotech',
      title: 'Biotechnology Revolution 2027',
      description: 'Gene editing and synthetic biology breakthroughs',
      icon: '🧪',
      color: 'from-teal-600 to-cyan-600',
      borderColor: 'border-teal-400',
      bgColor: 'from-teal-600/30 to-cyan-600/30',
      link: '/pages/SyntheticBiologyRevolution2027'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Revolution 2027',
      description: 'Quantum-resistant cryptography and decentralized systems',
      icon: '⛓️',
      color: 'from-indigo-600 to-purple-600',
      borderColor: 'border-indigo-400',
      bgColor: 'from-indigo-600/30 to-purple-600/30',
      link: '/pages/BlockchainRevolution2027'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the revolutionary technologies that will shape our future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.bgColor} rounded-xl p-6 backdrop-blur-sm border ${item.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => window.location.href = item.link}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {item.description}
              </p>
              <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <span className="mr-2">Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;