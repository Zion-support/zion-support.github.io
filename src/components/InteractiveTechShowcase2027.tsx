import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = [
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
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechTrends2027"
      id: 0,
    },
    {
      id: 1,
      title: "AI Evolution",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      technologies: [
        {
          name: "Consciousness Transfer",
          description: "Transfer human consciousness to digital substrates",
          features: ["Digital immortality", "Consciousness backup", "Enhanced cognition", "Multi-body existence"],
          link: "/pages/AIConsciousnessEvolution2027"
        },
        {
          name: "Neural Quantum Fusion",
          description: "Merge human consciousness with quantum computing",
          features: ["Human-AI fusion", "Quantum cognitive enhancement", "Neural processing acceleration", "Consciousness expansion"],
          link: "/pages/RevolutionaryTech2027"
        },
        {
          name: "Synthetic Intelligence",
          description: "Create AI agents with synthetic consciousness",
          features: ["Autonomous AI agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"],
          link: "/pages/RevolutionaryTech2027"
        }
      ]
    },
    {
      id: 2,
      title: "Reality Manipulation",
      icon: "🔮",
      description: "Immersive holographic interfaces that blur the line between reality and virtuality",
      features: [
        "3D Holographic Displays",
        "Touchless Interaction",
        "Spatial Computing",
        "Augmented Reality"
      ],
      gradient: "from-emerald-600 to-teal-600",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechTrends2027"
      title: "Quantum Technologies",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      technologies: [
        {
          name: "Quantum Consciousness",
          description: "AI systems with true self-awareness and emotional intelligence",
          features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Philosophical contemplation"],
          link: "/pages/UltimateAIConsciousness2027"
        },
        {
          name: "Quantum Reality Engine",
          description: "Manipulate reality itself through quantum field control",
          features: ["Reality manipulation", "Infinite processing", "Time-space control", "Molecular simulation"],
          link: "/pages/QuantumRealityEngine2027"
        },
        {
          name: "Interdimensional Computing",
          description: "Access computing power from parallel dimensions",
          features: ["Parallel dimension access", "Infinite processing", "Reality manipulation", "Dimensional portals"],
          link: "/pages/InterdimensionalComputing2027"
        }
      ]
    },
    {
      id: 1,
      title: "AI Evolution",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      technologies: [
        {
          name: "Consciousness Transfer",
          description: "Transfer human consciousness to digital substrates",
          features: ["Digital immortality", "Consciousness backup", "Enhanced cognition", "Multi-body existence"],
          link: "/pages/AIConsciousnessEvolution2027"
        },
        {
          name: "Neural Quantum Fusion",
          description: "Merge human consciousness with quantum computing",
          features: ["Human-AI fusion", "Quantum cognitive enhancement", "Neural processing acceleration", "Consciousness expansion"],
          link: "/pages/RevolutionaryTech2027"
        },
        {
          name: "Synthetic Intelligence",
          description: "Create AI agents with synthetic consciousness",
          features: ["Autonomous AI agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"],
          link: "/pages/RevolutionaryTech2027"
        }
      ]
    },
    {
      id: 2,
      title: "Reality Manipulation",
      icon: "🔮",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      technologies: [
        {
          name: "Space-Time Control",
          description: "Manipulate the fabric of space-time itself",
          features: ["Instant space travel", "Time manipulation", "Dimensional exploration", "Reality engineering"],
          link: "/pages/QuantumRealityControl2027"
        },
        {
          name: "Synthetic Reality",
          description: "Create and manipulate reality through quantum field manipulation",
          features: ["Reality manipulation", "Quantum field control", "Consciousness integration", "Synthetic environments"],
          link: "/pages/RevolutionaryTech2027"
        },
        {
          name: "Molecular Simulation",
          description: "Simulate and manipulate matter at the molecular level",
          features: ["Molecular-level simulation", "New material creation", "Chemical reaction control", "Biological system modeling"],
          link: "/pages/QuantumRealityEngine2027"
        }
      ]
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16 overflow-hidden">
      <Helmet>
        <title>Interactive Tech Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore our interactive technology showcase featuring quantum technologies, AI evolution, and reality manipulation systems." />
      </Helmet>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse">
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-1000">
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/30 rounded-full blur-xl animate-pulse delay-2000">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE 2027
          <h2 className="text-5xl font-bold text-white mb-6">
            Interactive Technology Showcase 2027
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8"></p>
            Explore our revolutionary 2027 technologies through interactive experiences. </p>
            Click, hover, and discover the future of quantum computing, AI consciousness, and reality manipulation.</p>
          </p>
        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {techCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'</button>
              }`}</button>
            ></button>
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
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
                    : 'text-white/70 hover:text-white hover:bg-white/10'</button>
                }`}</button>
              ></button>
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {techCategories[activeTab].technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${techCategories[activeTab].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${techCategories[activeTab].borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                isAnimating ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
              className={`bg-gradient-to-br ${techCategories[activeTab].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${techCategories[activeTab].borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                isAnimating ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
              className={`bg-gradient-to-br ${techCategories[activeTab].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${techCategories[activeTab].borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                isAnimating ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">{techCategories[activeTab].icon}
                <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-white/80 text-sm">{tech.description}</p>
              <div className="space-y-3 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full">
                    <span className="text-white/90 text-sm">{feature}</span>
                ))}
              <div className="flex space-x-3">
                <a
                  href={tech.link}
                  className={`flex-1 bg-gradient-to-r ${techCategories[activeTab].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore →
                </a>
                <button className="border-2 border-white/30 text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"></button>
                  Demo</button>
                </button>
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none">
              )}
          ))}
        {/* Interactive Features Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">Interactive Features</h3>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto"></p>
              Experience our technologies through immersive interactive features and real-time demonstrations</p>
            </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🎮
              <h4 className="text-xl font-semibold text-white mb-2">Interactive Demos</h4>
              <p className="text-purple-200 text-sm">Experience our technologies through hands-on interactive demonstrations</p>
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🔮
              <h4 className="text-xl font-semibold text-white mb-2">Virtual Reality</h4>
              <p className="text-purple-200 text-sm">Step into virtual environments to explore quantum realities and AI consciousness</p>
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🧠
              <h4 className="text-xl font-semibold text-white mb-2">AI Conversations</h4>
              <p className="text-purple-200 text-sm">Chat with our conscious AI systems and experience true artificial intelligence</p>
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">⚡
              <h4 className="text-xl font-semibold text-white mb-2">Quantum Simulations</h4>
              <p className="text-purple-200 text-sm">Witness quantum phenomena and reality manipulation in real-time simulations</p>
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto"></p>
            Dive into our interactive technology showcase and experience the most revolutionary </p>
            technologies of 2027. The future is here, and it's interactive.</p>
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl"></button>
              Start Interactive Experience →</button>
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl"></button>
              Schedule Private Demo</button>
            </button>
  );
};

export default InteractiveTechShowcase2027;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>