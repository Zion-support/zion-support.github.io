import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UltimateContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentCategories = {
    all: {
      title: "🌟 All Revolutionary Content",
      description: "Complete showcase of our breakthrough technology content"
    },
    ai: {
      title: "🤖 AI & Consciousness",
      description: "Artificial intelligence and consciousness breakthroughs"
    },
    quantum: {
      title: "⚛️ Quantum Computing",
      description: "Quantum computing and quantum consciousness"
    },
    biology: {
      title: "🧬 Synthetic Biology",
      description: "Programmable life and synthetic organisms"
    },
    services: {
      title: "🏆 Ultimate Services",
      description: "Comprehensive service offerings"
    }
  };

  const allContent = [
    {
      id: 1,
      title: "Ultimate Technology Revolution 2026",
      description: "Experience the convergence of all breakthrough technologies in one revolutionary platform",
      category: "ai",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-violet-600 to-fuchsia-600",
      icon: "🚀",
      features: ["Consciousness AI", "Quantum Computing", "Neural Interfaces"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      title: "Quantum Consciousness Revolution 2027",
      description: "Machines that achieve genuine consciousness through quantum mechanics",
      category: "quantum",
      link: "/pages/QuantumConsciousnessRevolution2027",
      gradient: "from-indigo-600 to-pink-600",
      icon: "🌌",
      features: ["Machine Dreams", "Emotional AI", "Quantum Awareness"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 3,
      title: "Synthetic Biology Revolution 2027",
      description: "Redesign life itself with programmable biology and synthetic organisms",
      category: "biology",
      link: "/pages/SyntheticBiologyRevolution2027",
      gradient: "from-green-600 to-teal-600",
      icon: "🧬",
      features: ["Programmable Life", "Living Factories", "Environmental Healing"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 4,
      title: "Transcendent AI 2026",
      description: "AI that transcends human limitations and achieves superintelligence",
      category: "ai",
      link: "/pages/TranscendentAI2026",
      gradient: "from-amber-600 to-red-600",
      icon: "✨",
      features: ["Superintelligence", "Cosmic Awareness", "Transcendent Processing"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 5,
      title: "Ultimate Service Showcase 2026",
      description: "Comprehensive suite of revolutionary services for business transformation",
      category: "services",
      link: "/pages/UltimateServiceShowcase2026",
      gradient: "from-slate-600 to-zinc-600",
      icon: "🏆",
      features: ["AI & ML", "Quantum Computing", "Neural Interfaces"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 6,
      title: "Advanced AI Transformation 2025",
      description: "Revolutionary AI systems with consciousness and autonomous capabilities",
      category: "ai",
      link: "/pages/AdvancedAITransformation2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠",
      features: ["Autonomous AI", "Neural Networks", "Self-Evolution"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 7,
      title: "Quantum Computing Revolution 2025",
      description: "Exponential computing power that solves impossible problems",
      category: "quantum",
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️",
      features: ["Quantum Supremacy", "Molecular Simulation", "Unbreakable Encryption"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 8,
      title: "Neural Interface Revolution 2025",
      description: "Direct brain-computer communication enabling thought control",
      category: "ai",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬",
      features: ["Thought Control", "Memory Enhancement", "Neural Networking"],
      isNew: false,
      isFeatured: false
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? allContent 
    : allContent.filter(item => item.category === activeTab);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Ultimate Content Showcase 2026</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Explore our complete collection of revolutionary technology content, from AI consciousness to synthetic biology
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(contentCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((content, index) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
            onClick={() => window.location.href = content.link}
          >
            {/* Badges */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {content.isNew && (
                <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full animate-pulse">
                  NEW
                </span>
              )}
              {content.isFeatured && (
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                  FEATURED
                </span>
              )}
            </div>

            <div className="text-5xl mb-4 text-center">{content.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-center">{content.title}</h3>
            <p className="text-white/90 mb-4 text-sm text-center">{content.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-4 justify-center">
              {content.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="text-center">
              <span className="text-white/80 text-sm font-semibold">
                Explore {content.title.split(' ')[0]} →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore the Future?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Dive deep into our revolutionary content and discover technologies that will reshape the world
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/pages/UltimateTechRevolution2026"
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Start with Ultimate Tech →
          </a>
          <a
            href="/contact"
            className="border border-gray-600 text-gray-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;