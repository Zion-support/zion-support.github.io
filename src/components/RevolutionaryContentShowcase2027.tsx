import React, { useState } from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trends');

  const contentCategories = {
    trends: {
      title: "🚀 Tech Trends 2027",
      description: "Discover the revolutionary technologies shaping our future",
      content: [
        {
          title: "Advanced Tech Trends 2027",
          description: "Explore quantum consciousness, synthetic biology, and space-time manipulation",
          link: "/pages/AdvancedTechTrends2027",
          image: "🧠",
          category: "Quantum Tech",
          featured: true
        },
        {
          title: "Quantum Consciousness Revolution",
          description: "Direct mind-machine interfaces and digital immortality protocols",
          link: "/pages/QuantumConsciousnessRevolution2027",
          image: "⚛️",
          category: "Consciousness",
          featured: true
        },
        {
          title: "Synthetic Biology Revolution",
          description: "Programmable biology and living machines that surpass silicon",
          link: "/pages/SyntheticBiologyRevolution2027",
          image: "🧬",
          category: "Biology",
          featured: true
        }
      ]
    },
    ai: {
      title: "🤖 AI Revolution 2027",
      description: "Next-generation artificial intelligence and autonomous systems",
      content: [
        {
          title: "Advanced AI Systems 2026",
          description: "Revolutionary AI systems with unprecedented capabilities",
          link: "/pages/AdvancedAISystems2026",
          image: "🤖",
          category: "AI Systems"
        },
        {
          title: "Synthetic Intelligence 2026",
          description: "Artificial consciousness and synthetic minds",
          link: "/pages/SyntheticIntelligence2026",
          image: "🧠",
          category: "Consciousness"
        },
        {
          title: "Next Gen AI Revolution",
          description: "The future of artificial intelligence and machine learning",
          link: "/pages/NextGenAIRevolution2026",
          image: "⚡",
          category: "Revolution"
        }
      ]
    },
    quantum: {
      title: "⚛️ Quantum Computing 2027",
      description: "Quantum supremacy and consciousness integration",
      content: [
        {
          title: "Advanced Quantum Computing 2026",
          description: "Breakthrough quantum processors and applications",
          link: "/pages/AdvancedQuantumComputing2026",
          image: "⚛️",
          category: "Quantum"
        },
        {
          title: "Quantum Neural Fusion 2026",
          description: "Integration of quantum computing with neural networks",
          link: "/pages/QuantumNeuralFusion2026",
          image: "🧬",
          category: "Fusion"
        },
        {
          title: "Quantum Computing Revolution",
          description: "Revolutionary quantum computing applications and breakthroughs",
          link: "/pages/QuantumComputingRevolution2026",
          image: "🚀",
          category: "Revolution"
        }
      ]
    },
    space: {
      title: "🚀 Space Technology 2027",
      description: "Interplanetary exploration and space-based innovations",
      content: [
        {
          title: "Space Tech Innovation 2026",
          description: "Revolutionary space technologies and exploration systems",
          link: "/pages/SpaceTechInnovation2026",
          image: "🚀",
          category: "Space"
        },
        {
          title: "Next Gen Space Tech",
          description: "Advanced space exploration and colonization technologies",
          link: "/pages/NextGenSpaceTech2026",
          image: "🌌",
          category: "Exploration"
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-4">
          🌟 REVOLUTIONARY CONTENT 2027
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Explore the Future of Technology
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover groundbreaking content covering the most advanced technologies 
          that will reshape our world in 2027 and beyond.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(contentCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
              item.featured ? 'ring-2 ring-purple-500/50' : ''
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">{item.image}</span>
              <div>
                <div className="text-xs text-purple-400 font-semibold uppercase tracking-wide">
                  {item.category}
                </div>
                {item.featured && (
                  <div className="text-xs text-yellow-400 font-semibold">⭐ FEATURED</div>
                )}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              {item.title}
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm">
              {item.description}
            </p>
            
            <a
              href={item.link}
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              <span>Explore Now</span>
              <span>→</span>
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-3">
            Stay Updated with the Latest Breakthroughs
          </h3>
          <p className="text-gray-300 mb-4">
            Get exclusive access to our revolutionary content and be the first to know about new developments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Subscribe to Updates
            </button>
            <button className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors">
              View All Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;