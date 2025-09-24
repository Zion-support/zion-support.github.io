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
      gradient: "from-violet-600 to-fuchsia-600",
      borderColor: "border-violet-400",
      href: "/pages/NextGenTechShowcase2026",
      features: ["Neural Interfaces", "Quantum Computing", "Synthetic Intelligence"]
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented processing power.",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      href: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Neural Networks", "Exponential Processing", "Advanced Cryptography"]
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "AI systems that exhibit human-like creativity, reasoning, and emotional intelligence.",
      image: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      href: "/pages/SyntheticIntelligence2026",
      features: ["Human-like Creativity", "Emotional Intelligence", "Advanced Reasoning"]
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Revolutionary computing power that solves impossible problems and accelerates discovery.",
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      borderColor: "border-indigo-400",
      href: "/pages/QuantumComputingRevolution2026",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces enabling thought-controlled devices and enhanced cognition.",
      image: "🧬",
      gradient: "from-rose-600 to-pink-600",
      borderColor: "border-rose-400",
      href: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Enhanced Cognition"]
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 REVOLUTIONARY CONTENT • JANUARY 2026
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Revolutionary Technology Content 2026
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Explore our groundbreaking new content that showcases the most advanced technologies 
          and innovations shaping the future of humanity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {contentItems.map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border ${item.borderColor}/30 hover:scale-105 transition-all duration-300 group`}
          >
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
              {item.image}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              {item.description}
            </p>
            
            <div className="space-y-2 mb-6">
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`}></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <a
              href={item.href}
              className={`block w-full bg-gradient-to-r ${item.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
            >
              Explore {item.title.split(' ')[0]} →
            </a>
          </div>
        ))}
      </div>

      {/* Interactive Features */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Interactive Technology Experience</h3>
          <p className="text-xl text-gray-300">
            Experience these revolutionary technologies through interactive demos and simulations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              🎮
            </div>
            <h4 className="text-xl font-semibold mb-2">Interactive Demos</h4>
            <p className="text-gray-400">
              Hands-on demonstrations of cutting-edge technologies
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              🔬
            </div>
            <h4 className="text-xl font-semibold mb-2">Live Simulations</h4>
            <p className="text-gray-400">
              Real-time simulations of quantum and neural technologies
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              🚀
            </div>
            <h4 className="text-xl font-semibold mb-2">Future Vision</h4>
            <p className="text-gray-400">
              Explore how these technologies will shape our future
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;