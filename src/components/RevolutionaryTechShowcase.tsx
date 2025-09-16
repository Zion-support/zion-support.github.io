import React, { useState } from 'react';

const RevolutionaryTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "AI Revolutionary Breakthrough 2026",
      description: "Experience the most advanced AI systems ever created",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Neural Quantum Processing - 1000x faster",
        "Perfect Decision Making - 99.99% accuracy",
        "Autonomous Operations - 24/7 operation",
        "Revolutionary Impact - 5000% productivity increase"
      ]
    },
    quantum: {
      title: "Quantum Consciousness Revolution",
      description: "Merge human awareness with quantum computing power",
      icon: "🌌",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum Thought Processing - Infinite speed",
        "Consciousness Expansion - Beyond human limits",
        "Creative Transcendence - Unlimited creativity",
        "Scientific Discovery - Instant insights"
      ]
    },
    space: {
      title: "Space Technology Revolution 2026",
      description: "Pioneering the future of space exploration",
      icon: "🚀",
      color: "from-yellow-600 to-orange-600",
      features: [
        "Warp Drive Technology - Faster than light",
        "Planetary Colonization - New worlds",
        "Quantum Communication - Instant contact",
        "Space Commerce - $500B economy"
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the most advanced technologies that are reshaping our world and 
            creating unprecedented opportunities for innovation and growth.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-2 rounded-2xl">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tech.icon} {tech.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                🚀 Explore {technologies[activeTab as keyof typeof technologies].title.split(' ')[0]} Technology
              </button>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6">Revolutionary Features:</h4>
              <ul className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Revolution?</h3>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of innovators already transforming their future with our revolutionary technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              🚀 Start Your Revolution
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300">
              📞 Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase;