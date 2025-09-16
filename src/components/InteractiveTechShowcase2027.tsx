import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
>>>>>>> cursor/create-and-deploy-new-content-36f9
      id: 0,
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
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
>>>>>>> cursor/create-and-deploy-new-content-36f9
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2027 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary 2027 technologies with interactive features and immersive experiences
          </p>
        </div>

        {/* Interactive Tech Selector */}
        <div className="flex justify-center space-x-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
>>>>>>> cursor/create-and-deploy-new-content-36f9
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
=======
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16 overflow-hidden">
      <Helmet>
        <title>Interactive Tech Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore our interactive technology showcase featuring quantum technologies, AI evolution, and reality manipulation systems." />
      </Helmet>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
>>>>>>> cursor/create-and-deploy-new-content-8069
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE 2027
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Interactive Technology Showcase 2027
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
            Explore our revolutionary 2027 technologies through interactive experiences. 
            Click, hover, and discover the future of quantum computing, AI consciousness, and reality manipulation.
          </p>
        </div>

        {/* Tab Navigation */}
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
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
>>>>>>> cursor/create-and-deploy-new-content-36f9
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Tech Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-xl p-12 border ${technologies[activeTech].borderColor}/30`}>
            <div className="text-center">
              <div className="text-8xl mb-6 animate-bounce">{technologies[activeTech].icon}</div>
              <h3 className="text-4xl font-bold mb-6 text-white">{technologies[activeTech].title}</h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{technologies[activeTech].description}</p>
              
              {/* Feature Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="text-lg font-bold mb-2">Revolutionary</h4>
                  <p className="text-sm opacity-80">Breakthrough technology that changes everything</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="text-lg font-bold mb-2">Lightning Fast</h4>
                  <p className="text-sm opacity-80">Exponential performance improvements</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-3">🌟</div>
                  <h4 className="text-lg font-bold mb-2">Future Ready</h4>
                  <p className="text-sm opacity-80">Built for the next generation</p>
                </div>
              </div>

              <a
                href={technologies[activeTech].link}
                className={`inline-block bg-gradient-to-r ${technologies[activeTech].color} text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl`}
              >
                Explore {technologies[activeTech].title.split(' ')[0]} →
              </a>
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
>>>>>>> cursor/create-and-deploy-new-content-36f9
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
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🎮</div>
              <h4 className="text-xl font-semibold text-white mb-2">Interactive Demos</h4>
              <p className="text-purple-200 text-sm">Experience our technologies through hands-on interactive demonstrations</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🔮</div>
              <h4 className="text-xl font-semibold text-white mb-2">Virtual Reality</h4>
              <p className="text-purple-200 text-sm">Step into virtual environments to explore quantum realities and AI consciousness</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🧠</div>
              <h4 className="text-xl font-semibold text-white mb-2">AI Conversations</h4>
              <p className="text-purple-200 text-sm">Chat with our conscious AI systems and experience true artificial intelligence</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">⚡</div>
              <h4 className="text-xl font-semibold text-white mb-2">Quantum Simulations</h4>
              <p className="text-purple-200 text-sm">Witness quantum phenomena and reality manipulation in real-time simulations</p>
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
>>>>>>> cursor/create-and-deploy-new-content-36f9
            </div>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTechClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTech === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-6">Choose your technology and start your journey into the future</p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/NextGenAIRevolution2027"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              🧠 AI Revolution
            </a>
            <a
              href="/pages/QuantumComputingRevolution2027"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              ⚡ Quantum Computing
            </a>
            <a
              href="/pages/NeuralInterfaceRevolution2027"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              🧬 Neural Interface
            </a>
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
>>>>>>> cursor/create-and-deploy-new-content-36f9
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Dive into our interactive technology showcase and experience the most revolutionary 
            technologies of 2027. The future is here, and it's interactive.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Interactive Experience →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl">
              Schedule Private Demo
            </button>
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
>>>>>>> cursor/create-and-deploy-new-content-36f9
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;