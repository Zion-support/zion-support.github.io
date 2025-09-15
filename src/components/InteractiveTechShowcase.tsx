import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = [
    {
      id: 0,
      name: "AI Revolution",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      description: "Experience the future of artificial intelligence",
      features: [
        "Autonomous AI Agents",
        "Quantum-Enhanced AI",
        "Synthetic Intelligence",
        "Edge AI Networks"
      ]
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Unlock exponential computing power",
      features: [
        "Exponential Speed",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Optimization Problems"
      ]
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      description: "Bridge mind and machine",
      features: [
        "Thought Control",
        "Neural Feedback",
        "Non-Invasive BCI",
        "AI Integration"
      ]
    },
    {
      id: 3,
      name: "Cyber-Physical Systems",
      icon: "🌐",
      color: "from-orange-600 to-red-600",
      description: "Seamless digital-physical integration",
      features: [
        "Intelligent Orchestration",
        "Digital Twin Integration",
        "Cybersecurity Mesh",
        "Real-time Control"
      ]
    }
  ];

  const stats = [
    { label: "AI Adoption", value: "85%", color: "text-purple-400" },
    { label: "Quantum Maturity", value: "45%", color: "text-cyan-400" },
    { label: "Neural Interface", value: "30%", color: "text-emerald-400" },
    { label: "Cyber-Physical", value: "60%", color: "text-orange-400" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore cutting-edge technologies with interactive features and real-time demonstrations
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white/80 hover:bg-white/30 hover:scale-105'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Content Display */}
        <div className="mb-12">
          {techCategories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeTab === category.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute pointer-events-none'
              }`}
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-12 text-center`}>
                <div className="text-8xl mb-6 animate-bounce">{category.icon}</div>
                <h3 className="text-4xl font-bold mb-4">{category.name}</h3>
                <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{category.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {category.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300"
                    >
                      <div className="text-sm font-semibold">{feature}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
                    Explore {category.name} →
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`text-4xl font-bold mb-2 ${stat.color} ${
                hoveredCard === index ? 'animate-pulse' : ''
              }`}>
                {stat.value}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    hoveredCard === index ? 'animate-pulse' : ''
                  }`}
                  style={{
                    width: stat.value,
                    background: `linear-gradient(90deg, ${stat.color.replace('text-', '')}, ${stat.color.replace('text-', '')}80)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Real-time AI Processing",
              description: "Experience AI in action with live demonstrations",
              icon: "⚡",
              color: "from-purple-600 to-pink-600"
            },
            {
              title: "Quantum Simulation",
              description: "Visualize quantum computing concepts interactively",
              icon: "🔮",
              color: "from-cyan-600 to-blue-600"
            },
            {
              title: "Neural Interface Demo",
              description: "Try brain-computer interface technology",
              icon: "🧠",
              color: "from-emerald-600 to-teal-600"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-white/90 text-center mb-4">{feature.description}</p>
              <button className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                Try Interactive Demo
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive into our interactive technology showcase and discover the innovations shaping tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Journey →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;