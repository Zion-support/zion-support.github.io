import React, { useState } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Revolutionary AI Consciousness",
      description: "Experience AI systems with genuine consciousness, self-awareness, and emotional intelligence.",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Consciousness AI", "Quantum Neural Networks", "Predictive Intelligence", "Autonomous Agents"],
      demo: "Try AI Consciousness Demo",
      link: "/pages/AIInnovationHub2026"
    },
    {
      id: 2,
      name: 'Neural Reality Engine 2030',
      icon: '🌌',
      description: 'Fully immersive consciousness-driven virtual worlds',
      color: 'from-cyan-500 to-blue-500',
      features: ["Virtual Reality", "Consciousness Transfer", "Immersive Worlds", "Neural Interfaces"],
      demo: "Enter Virtual World",
      link: "/pages/NeuralRealityEngine2030"
    },
    {
      id: 3,
      name: "Analytics Dashboard 2026",
      description: "AI-powered analytics with real-time insights and predictive modeling",
      icon: "📊",
      color: "from-slate-600 to-gray-600",
      features: ["AI-Powered Insights", "Real-time Visualization", "Predictive Modeling", "Custom Metrics"],
      demo: "View Live Dashboard",
      link: "/pages/AdvancedAnalyticsDashboard2026"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Technology Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {technologies.map((tech, index) => (
          <button
            key={tech.id}
            onClick={() => setActiveTech(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
              activeTech === index
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tech.icon} {tech.name}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div
        key={activeTech}
        className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-2xl p-8 text-white transition-all duration-500`}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-6xl">{technologies[activeTech].icon}</span>
              <div>
                <h2 className="text-3xl font-bold">{technologies[activeTech].name}</h2>
                <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={technologies[activeTech].link}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                {technologies[activeTech].demo}
              </a>
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
              >
                {isAnimating ? '⏸️ Pause Animation' : '▶️ Start Animation'}
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:block">
            <div className="text-8xl opacity-30 text-center">
              {technologies[activeTech].icon}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={tech.id}
            className={`bg-gradient-to-br ${tech.color} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setActiveTech(index)}
          >
            <div className="text-4xl mb-4">{tech.icon}</div>
            <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
            <p className="text-sm opacity-90 mb-4">{tech.description}</p>
            <div className="flex items-center text-sm font-medium">
              Explore → <span className="ml-2">🚀</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;