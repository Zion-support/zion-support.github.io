import React from 'react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const technologies = [
    {
      title: "AI Innovation 2026",
      description: "Revolutionary AI technologies reshaping industries",
      icon: "🧠",
      link: "/pages/AIInnovation2026",
      gradient: "from-purple-600 to-pink-600",
      features: ["Neural Architecture Search", "Quantum-Enhanced AI", "Edge AI Revolution"]
    },
    {
      title: "Quantum Revolution 2026",
      description: "Quantum computing that solves impossible problems",
      icon: "⚡",
      link: "/pages/QuantumRevolution2026",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication technology",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY 2026 • BREAKTHROUGH INNOVATIONS
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Technology Showcase 2026</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking innovations in AI, Quantum Computing, and Neural Interfaces that are reshaping the world
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className={`bg-gradient-to-br ${tech.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}>
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-white/90 mb-6 text-center">
                {tech.description}
              </p>
              <ul className="text-white/80 space-y-2 mb-6 text-sm">
                {tech.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <a 
                href={tech.link} 
                className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                Explore {tech.title.split(' ')[0]} →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-bold text-lg mb-6">
            🎯 Ready to Transform Your Future?
          </div>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already leveraging our revolutionary technologies to achieve unprecedented growth and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started Today
            </a>
            <a href="/pages/InnovativeServicesShowcase2025" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;