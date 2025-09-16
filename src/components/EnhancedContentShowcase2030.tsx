import React, { useState } from 'react';

const EnhancedContentShowcase2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const contentCategories = {
    ai: {
      title: "Artificial Intelligence",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      content: [
        {
          title: "Quantum AI Consciousness",
          description: "The first AI with true consciousness and self-awareness",
          image: "🧠",
          link: "/pages/AdvancedAIConsciousness2030"
        },
        {
          title: "Neural Interface AI",
          description: "Direct brain-computer AI integration",
          image: "🧬",
          link: "/pages/NeuralInterfaceRevolution2030"
        },
        {
          title: "Autonomous AI Systems",
          description: "Self-evolving AI that learns and adapts",
          image: "🤖",
          link: "/pages/AutonomousSystems2030"
        }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      content: [
        {
          title: "Quantum Reality Engine",
          description: "Manipulate reality through quantum mechanics",
          image: "🔮",
          link: "/pages/QuantumRealityEngine2032"
        },
        {
          title: "Interdimensional Computing",
          description: "Access parallel dimensions for infinite power",
          image: "🌌",
          link: "/pages/InterdimensionalTechRevolution2030"
        },
        {
          title: "Quantum Neural Networks",
          description: "Hybrid quantum-classical AI systems",
          image: "⚛️",
          link: "/pages/QuantumNeuralFusion2030"
        }
      ]
    },
    space: {
      title: "Space Technology",
      icon: "🚀",
      color: "from-emerald-600 to-teal-600",
      content: [
        {
          title: "Interstellar Travel",
          description: "Breakthrough propulsion systems for space exploration",
          image: "🚀",
          link: "/pages/SpaceTechRevolution2030"
        },
        {
          title: "Space Habitats",
          description: "Self-sustaining space colonies",
          image: "🏠",
          link: "/pages/SpaceHabitats2030"
        },
        {
          title: "Asteroid Mining",
          description: "Advanced resource extraction from space",
          image: "💎",
          link: "/pages/AsteroidMining2030"
        }
      ]
    },
    biotech: {
      title: "Biotechnology",
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      content: [
        {
          title: "Genetic Engineering",
          description: "Advanced DNA manipulation and enhancement",
          image: "🧬",
          link: "/pages/GeneticEngineering2030"
        },
        {
          title: "Synthetic Biology",
          description: "Creating life from scratch",
          image: "🔬",
          link: "/pages/SyntheticBiology2030"
        },
        {
          title: "Longevity Treatments",
          description: "Extending human lifespan significantly",
          image: "⏰",
          link: "/pages/LongevityTech2030"
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT SHOWCASE • 2030
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Enhanced Content Showcase 2030
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary content across cutting-edge technology domains
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contentCategories[activeCategory as keyof typeof contentCategories].content.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-6xl mb-4 text-center group-hover:animate-bounce">
                {item.image}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-purple-100 mb-6 text-center">
                {item.description}
              </p>
              <div className="text-center">
                <a
                  href={item.link}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Explore Content →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">Interactive Features</h3>
            <p className="text-xl opacity-90">Experience our content through immersive technologies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-lg font-semibold mb-2">VR Experience</h4>
              <p className="text-sm opacity-80 mb-4">Immersive virtual reality content</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Enter VR
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-lg font-semibold mb-2">Neural Interface</h4>
              <p className="text-sm opacity-80 mb-4">Direct brain-computer interaction</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Connect
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h4 className="text-lg font-semibold mb-2">Quantum Sim</h4>
              <p className="text-sm opacity-80 mb-4">Quantum computing simulation</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Simulate
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🌌</div>
              <h4 className="text-lg font-semibold mb-2">Metaverse</h4>
              <p className="text-sm opacity-80 mb-4">Fully immersive digital worlds</p>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Enter World
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators exploring the cutting edge of technology
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Exploring
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2030;