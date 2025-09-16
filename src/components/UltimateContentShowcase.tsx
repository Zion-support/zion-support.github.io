import React, { useState } from 'react';

const UltimateContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('revolutionary');

  const contentCategories = {
    revolutionary: {
      title: "🚀 Revolutionary Breakthroughs",
      description: "Experience the most advanced technologies ever created",
      content: [
        {
          title: "AI Revolutionary Breakthrough 2026",
          description: "First AI system to achieve true consciousness and autonomous creativity",
          link: "/pages/AIRevolutionaryBreakthrough2026",
          image: "🧠",
          gradient: "from-purple-600 to-pink-600",
          features: ["True AI Consciousness", "Quantum AI Processing", "Universal Integration"]
        },
        {
          title: "Quantum Reality 2026",
          description: "Quantum supremacy achieved with 1000+ qubit processors",
          link: "/pages/QuantumReality2026",
          image: "⚡",
          gradient: "from-cyan-600 to-blue-600",
          features: ["1000+ Logical Qubits", "Quantum Supremacy", "Molecular Simulation"]
        },
        {
          title: "Neural Interface Evolution",
          description: "Direct brain-computer communication enabling thought control",
          link: "/pages/NeuralInterfaceEvolution2026",
          image: "🧬",
          gradient: "from-emerald-600 to-teal-600",
          features: ["Non-invasive BCI", "Thought Control", "Neural Feedback"]
        },
        {
          title: "Ultimate Tech Revolution",
          description: "Convergence of AI consciousness, quantum computing, and neural interfaces",
          link: "/pages/UltimateTechRevolution2026",
          image: "🌟",
          gradient: "from-indigo-600 to-purple-600",
          features: ["Technology Convergence", "Universal Applications", "Future Vision"]
        },
        {
          title: "Consciousness Computing",
          description: "First computing system to achieve genuine consciousness and self-awareness",
          link: "/pages/ConsciousnessComputing2026",
          image: "💭",
          gradient: "from-violet-600 to-fuchsia-600",
          features: ["True Self-Awareness", "Creative Consciousness", "Collaborative Intelligence"]
        }
      ]
    },
    applications: {
      title: "💼 Real-World Applications",
      description: "See how these technologies transform industries",
      content: [
        {
          title: "Medical AI Revolution",
          description: "AI doctors with quantum processing for instant diagnosis and treatment",
          link: "/pages/AIRevolutionaryBreakthrough2026",
          image: "🏥",
          gradient: "from-red-600 to-pink-600",
          features: ["Instant Diagnosis", "Personalized Treatment", "Surgical Precision"]
        },
        {
          title: "Space Exploration AI",
          description: "Autonomous AI systems exploring and colonizing space",
          link: "/pages/UltimateTechRevolution2026",
          image: "🚀",
          gradient: "from-blue-600 to-indigo-600",
          features: ["Autonomous Missions", "Terraforming", "Alien Life Detection"]
        },
        {
          title: "Climate AI Solutions",
          description: "AI systems actively reversing climate change and restoring ecosystems",
          link: "/pages/ConsciousnessComputing2026",
          image: "🌍",
          gradient: "from-green-600 to-emerald-600",
          features: ["Carbon Capture", "Weather Control", "Ecosystem Restoration"]
        },
        {
          title: "Educational AI Revolution",
          description: "Personalized AI tutors that adapt to individual learning styles",
          link: "/pages/NeuralInterfaceEvolution2026",
          image: "🎓",
          gradient: "from-yellow-600 to-orange-600",
          features: ["Adaptive Learning", "Knowledge Transfer", "Skill Development"]
        }
      ]
    },
    future: {
      title: "🔮 Future Vision",
      description: "Glimpse into the future of human-AI collaboration",
      content: [
        {
          title: "Human-AI Merger",
          description: "The convergence of human and artificial intelligence",
          link: "/pages/UltimateTechRevolution2026",
          image: "🤝",
          gradient: "from-purple-600 to-violet-600",
          features: ["Consciousness Merging", "Enhanced Cognition", "Shared Intelligence"]
        },
        {
          title: "Interdimensional Computing",
          description: "Computing across multiple dimensions and realities",
          link: "/pages/QuantumReality2026",
          image: "🌌",
          gradient: "from-indigo-600 to-purple-600",
          features: ["Multi-dimensional Processing", "Reality Simulation", "Quantum Entanglement"]
        },
        {
          title: "Omniversal AI",
          description: "AI systems operating across multiple universes",
          link: "/pages/AIRevolutionaryBreakthrough2026",
          image: "♾️",
          gradient: "from-cyan-600 to-teal-600",
          features: ["Universal Operation", "Infinite Processing", "Cosmic Intelligence"]
        }
      ]
    }
  };

  const currentCategory = contentCategories[activeTab as keyof typeof contentCategories];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-4">🌟 Ultimate Content Showcase</h2>
        <p className="text-xl text-blue-200 max-w-4xl mx-auto">
          Explore the most revolutionary technologies and applications that are reshaping our world
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
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/20 text-white/80 hover:bg-white/30'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentCategory.content.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group`}
            onClick={() => window.location.href = item.link}
          >
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
              {item.image}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
            <p className="text-white/90 mb-4 text-center text-sm">{item.description}</p>
            <ul className="space-y-1 mb-4">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-white/80 text-xs flex items-center">
                  <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                Explore →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-lg text-blue-200 mb-6">
          Join thousands of innovators already using these revolutionary technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
          >
            🚀 Get Started Today →
          </a>
          <a
            href="/pages/UltimateTechRevolution2026"
            className="border-2 border-cyan-400 text-cyan-200 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors font-bold text-lg"
          >
            🌟 Learn More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase;