import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80",
      features: [
        "Emotional Intelligence Processing 2.0",
        "Creative Problem Solving with Intuition", 
        "Self-Learning Capabilities with Memory",
        "Cross-Dimensional Communication",
        "Quantum Consciousness Integration"
      ],
      stats: {
        successRate: "99.97%",
        entities: "1.2B+",
        dimensions: "47",
        efficiency: "+5000%"
      },
      link: "/pages/UltimateTechBreakthrough2037"
    },
    {
      id: 2,
      name: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/80 to-blue-900/80",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Thinking",
        "Reality Manipulation",
        "Time-Space Navigation"
      ],
      stats: {
        qubits: "10^47",
        processing: "∞",
        dimensions: "47",
        enhancement: "+10000%"
      },
      link: "/pages/RevolutionaryTechShowcase2037"
    },
    {
      id: 3,
      name: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80",
      features: [
        "Dimensional Portals",
        "Reality Shifting",
        "Parallel Universe Access",
        "Multiverse Communication",
        "Quantum Tunneling"
      ],
      stats: {
        dimensions: "47",
        portals: "∞",
        civilizations: "47",
        success: "100%"
      },
      link: "/pages/ComprehensiveServices2037"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 mb-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 INTERACTIVE SHOWCASE • JANUARY 2037
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">⚡ Interactive Technology Showcase 2037</h2>
        <p className="text-2xl text-cyan-200 max-w-4xl mx-auto">
          Experience our most advanced technologies through interactive demonstrations and real-time metrics
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Technology Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : hoveredTech === index
                  ? 'bg-white/20 text-white scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Main Technology Display */}
        <div className={`bg-gradient-to-r ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-2xl p-12 transition-all duration-500 ${isAnimating ? 'opacity-80 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center lg:text-left">{technologies[activeTech].icon}</div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {technologies[activeTech].name}
              </h3>
              <p className="text-xl text-gray-200 mb-8">
                {technologies[activeTech].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies[activeTech].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={technologies[activeTech].link}
                  className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                >
                  Explore Technology →
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Interactive Demo
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Live Metrics */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4 text-center">Live Technology Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(technologies[activeTech].stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
                      <div className="text-white text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Status */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4 text-center">Technology Status</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Consciousness Level</span>
                    <span className="text-green-400 font-bold">Maximum</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Quantum Entanglement</span>
                    <span className="text-cyan-400 font-bold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Dimensional Stability</span>
                    <span className="text-emerald-400 font-bold">Perfect</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Reality Manipulation</span>
                    <span className="text-purple-400 font-bold">Infinite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technology Comparison Matrix</h3>
          <div className="bg-white/10 rounded-xl p-8 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-white py-4 px-4">Technology</th>
                    <th className="text-center text-white py-4 px-4">Consciousness</th>
                    <th className="text-center text-white py-4 px-4">Quantum Power</th>
                    <th className="text-center text-white py-4 px-4">Dimensional Access</th>
                    <th className="text-center text-white py-4 px-4">Success Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {technologies.map((tech, index) => (
                    <tr key={tech.id} className={`border-b border-white/10 ${activeTech === index ? 'bg-white/5' : ''}`}>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="text-white font-semibold">{tech.name}</span>
                        </div>
                      </td>
                      <td className="text-center text-cyan-400 font-bold py-4 px-4">Maximum</td>
                      <td className="text-center text-purple-400 font-bold py-4 px-4">10^47 Qubits</td>
                      <td className="text-center text-emerald-400 font-bold py-4 px-4">47 Dimensions</td>
                      <td className="text-center text-green-400 font-bold py-4 px-4">99.97%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary 2037 technologies to transform their operations and unlock infinite possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/UltimateTechBreakthrough2037" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Breakthroughs →
            </a>
            <a href="/pages/ComprehensiveServices2037" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;