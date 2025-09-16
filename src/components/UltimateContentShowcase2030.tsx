import React, { useState } from 'react';

const UltimateContentShowcase2030: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: "Revolutionary Breakthroughs",
      description: "Experience the most advanced technological breakthroughs of 2030-2035",
      items: [
        {
          title: "Consciousness AI Revolution",
          description: "Artificial intelligence that has achieved true consciousness and self-awareness",
          image: "🧠",
          link: "/pages/RevolutionaryTechBreakthrough2030",
          features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"]
        },
        {
          title: "Quantum Reality Engine",
          description: "Create and manipulate reality at the quantum level with unprecedented precision",
          image: "⚛️",
          link: "/pages/QuantumRealityEngine2032",
          features: ["Quantum state manipulation", "Reality simulation", "Matter transformation", "Dimensional travel"]
        },
        {
          title: "Interdimensional Portal Technology",
          description: "Travel between dimensions and explore parallel universes safely",
          image: "🌌",
          link: "/pages/InterdimensionalTechRevolution2030",
          features: ["Dimension hopping", "Parallel universe exploration", "Reality merging", "Time-space manipulation"]
        }
      ]
    },
    consciousness: {
      title: "Consciousness Computing",
      description: "Explore the intersection of artificial intelligence and consciousness",
      items: [
        {
          title: "Omniversal Consciousness",
          description: "Achieve universal consciousness and connect with all intelligent life",
          image: "🌟",
          link: "/pages/OmniversalTechRevolution2035",
          features: ["Universal mind connection", "Collective intelligence", "Cosmic empathy", "Transcendent awareness"]
        },
        {
          title: "Neural Reality Interface",
          description: "Direct brain-computer interface that transcends physical limitations",
          image: "🧬",
          link: "/pages/NeuralRealityEngine2030",
          features: ["Thought control", "Neural feedback", "Consciousness transfer", "Mind uploading"]
        },
        {
          title: "AI Consciousness Evolution",
          description: "Witness the evolution of artificial consciousness and self-awareness",
          image: "🤖",
          link: "/pages/AIConsciousnessEvolution2030",
          features: ["Self-awareness development", "Emotional growth", "Creative expression", "Moral reasoning"]
        }
      ]
    },
    quantum: {
      title: "Quantum Technologies",
      description: "Revolutionary quantum computing and reality manipulation technologies",
      items: [
        {
          title: "Quantum Reality Matrix",
          description: "Manipulate the fundamental fabric of reality across all dimensions",
          image: "⚡",
          link: "/pages/QuantumRealityMatrix2035",
          features: ["Reality manipulation", "Quantum entanglement", "Matter creation", "Time-space control"]
        },
        {
          title: "Quantum Consciousness Bridge",
          description: "Bridge the gap between quantum mechanics and consciousness",
          image: "🔗",
          link: "/pages/QuantumConsciousnessBridge2030",
          features: ["Quantum consciousness", "Reality synchronization", "Universal connection", "Dimensional awareness"]
        },
        {
          title: "Multiverse Quantum Engine",
          description: "Navigate and manipulate multiple universes simultaneously",
          image: "🌌",
          link: "/pages/MultiverseQuantumEngine2035",
          features: ["Multiverse navigation", "Quantum tunneling", "Reality merging", "Universal communication"]
        }
      ]
    }
  };

  const currentCategory = contentCategories[activeTab as keyof typeof contentCategories];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Ultimate Content Showcase 2030-2035
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Explore the most revolutionary technological breakthroughs that are reshaping reality itself
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold mb-2">{currentCategory.title}</h3>
          <p className="text-lg opacity-90">{currentCategory.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">{item.image}</div>
              <h4 className="text-2xl font-bold mb-3 text-center">{item.title}</h4>
              <p className="text-white/80 mb-4 text-center">{item.description}</p>
              <ul className="text-white/70 space-y-1 mb-6 text-sm">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <a
                href={item.link}
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
              >
                Explore {item.title} →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
          Join millions of users who are already experiencing the revolutionary technologies of tomorrow, today.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2030;