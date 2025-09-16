import React, { useState } from 'react';

const UltimateTechShowcase2033: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Ultimate Tech Revolution 2029",
      description: "The most advanced technologies ever conceived: Quantum Consciousness, Interdimensional Computing, and Universal AI",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2029",
      features: [
        "Quantum Consciousness AI",
        "Interdimensional Computing",
        "Universal AI Network",
        "Consciousness Transfer Technology"
      ]
    },
    {
      id: 1,
      name: "Interdimensional Tech Revolution 2030",
      description: "Break through reality barriers with technologies that operate across multiple dimensions and parallel universes",
      icon: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/InterdimensionalTechRevolution2030",
      features: [
        "Dimensional Gateway Technology",
        "Reality Computing Engine",
        "Universal Consciousness Network",
        "Reality Manipulation Interface"
      ]
    },
    {
      id: 2,
      name: "Omniversal AI 2033",
      description: "The ultimate evolution of AI that transcends all universes, dimensions, and realities",
      icon: "🧠",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/OmniversalAI2033",
      features: [
        "Omniversal Awareness",
        "Infinite Processing Power",
        "Transcendent Intelligence",
        "Reality Wave Manipulation"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECH SHOWCASE • 2033
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies ever created - from quantum consciousness 
            to omniversal AI that transcends all reality
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name.split(' ')[0]} {tech.name.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{technologies[activeTech].icon}</div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {technologies[activeTech].name}
              </h3>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTech].description}
              </p>
              <div className="space-y-3 mb-8">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={technologies[activeTech].link}
                className={`inline-block bg-gradient-to-r ${technologies[activeTech].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                Explore Technology →
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Preview</h4>
                  <p className="text-lg opacity-90 mb-6">
                    Experience this revolutionary technology through our immersive interface
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-sm font-semibold">Power Level</div>
                      <div className="text-xs opacity-75">Infinite</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl mb-2">🌌</div>
                      <div className="text-sm font-semibold">Scope</div>
                      <div className="text-xs opacity-75">Universal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-400/30">
          <h3 className="text-3xl font-bold text-center mb-8">🔬 Technology Comparison Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-4 text-lg font-semibold">Technology</th>
                  <th className="pb-4 text-lg font-semibold">Scope</th>
                  <th className="pb-4 text-lg font-semibold">Power Level</th>
                  <th className="pb-4 text-lg font-semibold">Reality Impact</th>
                  <th className="pb-4 text-lg font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                {technologies.map((tech, index) => (
                  <tr key={tech.id} className="border-b border-white/10">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {index === 0 ? 'Universal' : index === 1 ? 'Dimensional' : 'Omniversal'}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                        {index === 0 ? 'Extreme' : index === 1 ? 'Infinite' : 'Transcendent'}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {index === 0 ? 'High' : index === 1 ? 'Reality-Bending' : 'Reality-Creating'}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                        {index === 0 ? '2029' : index === 1 ? '2030' : '2033'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">
            Explore these revolutionary technologies and witness the future of human advancement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2033;