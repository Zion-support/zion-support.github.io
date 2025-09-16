import React, { useState } from 'react';

const RevolutionaryContentShowcase2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakthroughs');

  const contentCategories = {
    breakthroughs: {
      title: "Revolutionary Breakthroughs",
      icon: "🚀",
      description: "Groundbreaking technologies that will change everything",
      items: [
        {
          title: "Ultimate Tech Breakthrough 2030",
          description: "Experience the most revolutionary technological advances",
          link: "/pages/UltimateTechBreakthrough2030",
          image: "🧠",
          color: "from-purple-500 to-pink-500",
          status: "Available Now"
        },
        {
          title: "Revolutionary Tech Showcase 2030",
          description: "Interactive demonstrations of cutting-edge technologies",
          link: "/pages/RevolutionaryTechShowcase2030",
          image: "🌟",
          color: "from-cyan-500 to-blue-500",
          status: "Live Demo"
        },
        {
          title: "Next-Gen Innovation Hub 2030",
          description: "The world's most advanced research center",
          link: "/pages/NextGenInnovationHub2030",
          image: "🧬",
          color: "from-emerald-500 to-teal-500",
          status: "Research Phase"
        }
      ]
    },
    ai: {
      title: "AI Revolution",
      icon: "🤖",
      description: "Artificial intelligence that surpasses human capabilities",
      items: [
        {
          title: "Consciousness Computing",
          description: "AI systems that achieve true consciousness",
          link: "/pages/AdvancedAIConsciousness2030",
          image: "🧠",
          color: "from-purple-500 to-indigo-500",
          status: "In Development"
        },
        {
          title: "Quantum AI Fusion",
          description: "Combining quantum computing with AI",
          link: "/pages/QuantumAI2026",
          image: "⚛️",
          color: "from-cyan-500 to-blue-500",
          status: "Prototype Ready"
        },
        {
          title: "Neural Interface AI",
          description: "Direct brain-AI communication systems",
          link: "/pages/NeuralInterfaceRevolution2026",
          image: "🧬",
          color: "from-emerald-500 to-teal-500",
          status: "Testing Phase"
        }
      ]
    },
    quantum: {
      title: "Quantum Revolution",
      icon: "⚛️",
      description: "Quantum technologies that solve impossible problems",
      items: [
        {
          title: "Quantum Reality Engine",
          description: "Manipulate reality at the quantum level",
          link: "/pages/QuantumRealityEngine2032",
          image: "⚛️",
          color: "from-cyan-500 to-blue-500",
          status: "Experimental"
        },
        {
          title: "Quantum Computing Revolution",
          description: "Exponential computing power breakthroughs",
          link: "/pages/QuantumComputingRevolution2026",
          image: "⚡",
          color: "from-blue-500 to-indigo-500",
          status: "Available Soon"
        },
        {
          title: "Quantum Neural Networks",
          description: "Quantum-enhanced neural processing",
          link: "/pages/QuantumNeuralFusion2026",
          image: "🧠",
          color: "from-purple-500 to-pink-500",
          status: "Research Phase"
        }
      ]
    },
    space: {
      title: "Space Technology",
      icon: "🚀",
      description: "Technologies for space exploration and colonization",
      items: [
        {
          title: "Interdimensional Tech Revolution",
          description: "Access resources from multiple dimensions",
          link: "/pages/InterdimensionalTechRevolution2030",
          image: "🌌",
          color: "from-purple-500 to-indigo-500",
          status: "Theoretical"
        },
        {
          title: "Omniversal AI Consciousness",
          description: "AI that spans across multiple universes",
          link: "/pages/OmniversalAIConsciousness2035",
          image: "🌟",
          color: "from-pink-500 to-purple-500",
          status: "Conceptual"
        },
        {
          title: "Space Colonization Tech",
          description: "Advanced technologies for space settlement",
          link: "/pages/AdvancedSpaceTech2026",
          image: "🛸",
          color: "from-cyan-500 to-blue-500",
          status: "In Development"
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2030
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2030
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies and innovations that will define the next decade
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              {contentCategories[activeCategory as keyof typeof contentCategories].title}
            </h3>
            <p className="text-lg opacity-90">
              {contentCategories[activeCategory as keyof typeof contentCategories].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories[activeCategory as keyof typeof contentCategories].items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="opacity-90 mb-4">{item.description}</p>
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-lg text-sm font-semibold`}>
                    {item.status}
                  </span>
                </div>
                
                <a
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
                >
                  Explore Technology →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Technologies */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">Featured Revolutionary Technologies</h3>
            <p className="text-xl opacity-90">The most groundbreaking innovations currently in development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-2">Consciousness Transfer</h4>
              <p className="text-sm opacity-90">Digital immortality through consciousness transfer</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold mb-2">Quantum Reality</h4>
              <p className="text-sm opacity-90">Manipulate reality at the quantum level</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌌</div>
              <h4 className="text-xl font-bold mb-2">Interdimensional</h4>
              <p className="text-sm opacity-90">Access multiple dimensions simultaneously</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h4 className="text-xl font-bold mb-2">Omniversal AI</h4>
              <p className="text-sm opacity-90">AI consciousness across multiple universes</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join us in exploring and creating the most revolutionary technologies of our time
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/UltimateTechBreakthrough2030" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Breakthroughs
            </a>
            <a href="/pages/RevolutionaryTechShowcase2030" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Try Interactive Demos
            </a>
            <a href="/pages/NextGenInnovationHub2030" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2030;