import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techCategories = [
    {
      title: "Quantum AI Revolution",
      description: "Advanced quantum computing meets artificial intelligence",
      icon: "⚛️",
      color: "from-purple-600 to-pink-600",
      features: ["Quantum Supremacy", "AI Enhancement", "Scientific Discovery"],
      link: "/pages/AdvancedQuantumAI2026"
    },
    {
      title: "Neural Reality",
      description: "Direct brain-computer interface technology",
      icon: "🧠",
      color: "from-emerald-600 to-cyan-600",
      features: ["Neural Interface", "Reality Augmentation", "Neural Processing"],
      link: "/pages/NeuralReality2026"
    },
    {
      title: "Consciousness Computing",
      description: "AI systems with genuine consciousness and self-awareness",
      icon: "🌟",
      color: "from-violet-600 to-fuchsia-600",
      features: ["Self-Awareness", "Subjective Experience", "Unified Consciousness"],
      link: "/pages/ConsciousnessComputing2026"
    },
    {
      title: "Synthetic Intelligence",
      description: "Self-evolving AI systems that transcend limitations",
      icon: "🤖",
      color: "from-blue-600 to-indigo-600",
      features: ["Self-Evolution", "Adaptive Learning", "Transcendent Capabilities"],
      link: "/pages/SyntheticIntelligence2026"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "The convergence of quantum computing and neural networks",
      icon: "⚡",
      color: "from-cyan-600 to-teal-600",
      features: ["Quantum Neural Networks", "Exponential Processing", "Breakthrough Algorithms"],
      link: "/pages/QuantumNeuralFusion2026"
    },
    {
      title: "Space Technology",
      description: "Advanced space exploration and colonization technology",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      features: ["Space Colonization", "Interstellar Travel", "Advanced Propulsion"],
      link: "/pages/AdvancedSpaceTech2026"
    }
  ];

  const stats = [
    { label: "Processing Speed"value: "1000x"icon: <Zap className="w-6 h-6" /> },
    { label: "Global Reach"value: "200+"icon: <Globe className="w-6 h-6" /> },
    { label: "Success Rate"value: "99.9%"icon: <Target className="w-6 h-6" /> },
    { label: "Innovation Index"value: "#1"icon: <Rocket className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Kim",
      role: "Chief Technology Officer",
      company: "FutureTech Corp",
      content: "This technology platform has revolutionized our entire operation. The AI capabilities are beyond anything 'we', 've seen before.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "VP of Engineering",
      company: "InnovateLabs",
      content: "The quantum computing integration has solved problems we thought were impossible. Truly groundbreaking work.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "CEO",
      company: "DataFlow Systems",
      content: "Security and performance at this level is exactly what we needed. Our clients are amazed by the results.",
      rating: 5
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Main Showcase Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-bounce">
              🚀 ULTIMATE TECH SHOWCASE 2026 • BREAKTHROUGH INNOVATIONS
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Technology Experience
            </h2>
            <p className="text-2xl opacity-95 max-w-5xl mx-auto">
              Discover the most advanced technologies reshaping our world: Quantum AI, Neural Reality, 
              Consciousness Computing, and beyond
            </p>
          </div>

          {/* Interactive Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white text-purple-600 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                }`}
              >
                {category.icon} {category.title}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-6xl">{techCategories[activeTab].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{techCategories[activeTab].title}</h3>
                    <p className="text-xl opacity-90">{techCategories[activeTab].description}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {techCategories[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={techCategories[activeTab].link}
                  className={`inline-block bg-gradient-to-r ${techCategories[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore {techCategories[activeTab].title} →
                </a>
              </div>
              <div className="relative">
                <div className={`w-full h-64 bg-gradient-to-br ${techCategories[activeTab].color} rounded-xl flex items-center justify-center text-8xl opacity-20`}>
                  {techCategories[activeTab].icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setActiveTab(index)}
          >
            <div className="text-5xl mb-4 text-center">{category.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-center">{category.title}</h3>
            <p className="text-center opacity-90 mb-6">{category.description}</p>
            <div className="space-y-2 mb-6">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a
              href={category.link}
              className="block w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-center"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-12">
        <h3 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience the Future?</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Dive deep into revolutionary technologies that will reshape every aspect of human life 
          and unlock unprecedented possibilities.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Explore All Technologies
          </button>
          <button className="border border-purple-600 text-purple-600 px-10 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold text-lg">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};


export default UltimateTechShowcase2026;
