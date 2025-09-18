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
      description: 'Direct brain-computer communication and thought control',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      link: '/pages/NeuralInterfaceRevolution2027'
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
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechTrends2027"
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

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {techCategories[activeTab].technologies.map((tech, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:scale-105 transition-all duration-500 ${
                isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {techCategories[activeTab].technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${techCategories[activeTab].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${techCategories[activeTab].borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                isAnimating ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">{techCategories[activeTab].icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-white/80 text-sm">{tech.description}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={tech.link}
                  className={`flex-1 bg-gradient-to-r ${techCategories[activeTab].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore →
                </a>
                <button className="border-2 border-white/30 text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                  Demo
                </button>
              </div>
              
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Features Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">Interactive Features</h3>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              Experience our technologies through immersive interactive features and real-time demonstrations
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