import React, { useState } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 0,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Artificial Intelligence that has achieved true consciousness and self-awareness",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning"
      ],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      link: "/pages/AdvancedAIConsciousness2026"
    },
    {
      id: 1,
      name: "Quantum Neural Networks",
      icon: "⚡",
      description: "Combining quantum computing with neural networks for unprecedented processing power",
      features: [
        "Exponential speed increase",
        "Quantum entanglement learning",
        "Parallel universe processing",
        "Instant pattern recognition"
      ],
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      link: "/pages/QuantumNeuralFusion2026"
    },
    {
      id: 2,
      name: "Neural Reality Interface",
      icon: "🧬",
      description: "Direct brain-computer interface that creates immersive virtual realities",
      features: [
        "Thought-controlled computing",
        "Immersive virtual worlds",
        "Memory enhancement",
        "Telepathic communication"
      ],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500/20 to-teal-500/20",
      link: "/pages/NeuralInterfaceRevolution2026"
    },
    {
      id: 3,
      name: "Holographic Computing",
      icon: "🌟",
      description: "Three-dimensional holographic displays and computing interfaces",
      features: [
        "3D holographic displays",
        "Gesture-based interaction",
        "Spatial computing",
        "Augmented reality overlay"
      ],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-500/20 to-red-500/20",
      link: "/pages/AdvancedHolographicTechnology2026"
    },
    {
      id: 4,
      name: "Autonomous Systems",
      icon: "🤖",
      description: "Fully autonomous AI systems that operate independently across all domains",
      features: [
        "Self-managing infrastructure",
        "Autonomous decision making",
        "Continuous learning",
        "Predictive maintenance"
      ],
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-500/20 to-purple-500/20",
      link: "/pages/AdvancedAutonomousSystems2026"
    },
    {
      id: 5,
      name: "Space Technology",
      icon: "🚀",
      description: "Advanced space exploration and colonization technologies",
      features: [
        "Faster-than-light travel",
        "Terraforming capabilities",
        "Space manufacturing",
        "Interstellar communication"
      ],
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-500/20 to-rose-500/20",
      link: "/pages/AdvancedSpaceTech2026"
    }
  ];

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Interactive Technology Showcase</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 transform ${
                  activeTech === tech.id
                    ? `bg-gradient-to-br ${tech.bgGradient} scale-105 shadow-2xl`
                    : 'bg-white/10 hover:bg-white/20 hover:scale-105'
                } ${hoveredCard === tech.id ? 'z-10' : ''}`}
                onClick={() => setActiveTech(tech.id)}
                onMouseEnter={() => setHoveredCard(tech.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-sm font-semibold text-white mb-2">{tech.name}</h3>
                  {activeTech === tech.id && (
                    <div className="absolute inset-0 border-2 border-white/50 rounded-xl animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentTech.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20`}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{currentTech.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-4">{currentTech.name}</h3>
                <p className="text-lg text-gray-200 mb-6">{currentTech.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-200">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={currentTech.link}
                  className={`flex-1 bg-gradient-to-r ${currentTech.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center transform hover:scale-105`}
                >
                  Explore {currentTech.name} →
                </a>
                <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Try Demo
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-300">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their businesses
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;