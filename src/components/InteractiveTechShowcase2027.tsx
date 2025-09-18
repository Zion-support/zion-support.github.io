import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 0,
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "AI that thinks, feels, and creates with human-level consciousness",
      features: [
        "Emotional Intelligence",
        "Creative Problem Solving", 
        "Self-Directed Learning",
        "Autonomous Decision Making"
      ],
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/ConsciousAISystems2027"
    },
    {
      id: 1,
      title: "Quantum Internet",
      icon: "⚡",
      description: "Ultra-secure quantum communication networks spanning the globe",
      features: [
        "Quantum Encryption",
        "Instant Global Communication",
        "Unhackable Networks",
        "Quantum Teleportation"
      ],
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumInternet2027"
    },
    {
      id: 2,
      title: "Neural Interface Revolution",
      icon: "🧬",
      description: "Direct brain-computer communication and thought control",
      features: [
        "Thought Control",
        "Memory Enhancement",
        "Direct Neural Upload",
        "Consciousness Transfer"
      ],
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2027"
    },
    {
      id: 3,
      title: "Molecular Manufacturing",
      icon: "⚗️",
      description: "Build anything atom by atom with molecular precision",
      features: [
        "Atomic Assembly",
        "Custom Materials",
        "Instant Manufacturing",
        "Self-Repairing Objects"
      ],
      gradient: "from-orange-600 to-red-600",
      link: "/pages/MolecularManufacturing2027"
    }
  ];

  const handleTechChange = (index: number) => {
    if (index !== activeTech && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the revolutionary technologies that will reshape our world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechChange(index)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeTech === index
                  ? 'border-purple-400 bg-purple-600/20'
                  : 'border-gray-600 bg-gray-800/50 hover:border-purple-300'
              }`}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
              <p className="text-sm text-gray-300">{tech.description}</p>
            </button>
          ))}
        </div>

        <div className={`bg-gradient-to-br ${technologies[activeTech].gradient} backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
          <div className="text-center">
            <div className="text-8xl mb-6">{technologies[activeTech].icon}</div>
            <h2 className="text-4xl font-bold mb-4">{technologies[activeTech].title}</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {technologies[activeTech].description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {technologies[activeTech].features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-white/80">
                  <span className="w-3 h-3 bg-white/50 rounded-full mr-4"></span>
                  {feature}
                </div>
              ))}
            </div>
            
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Explore Technology
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;