import React, { useState } from 'react';

const InteractiveTechShowcase2029: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "DNA Computing",
      icon: "🧬",
      description: "Biological computing systems that process information at the molecular level",
      features: ["Molecular data processing", "Self-healing systems", "Biological encryption", "Living algorithms"],
      gradient: "from-indigo-600/30 to-purple-600/30",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-100",
      featureColor: "text-indigo-200"
    },
    {
      id: 1,
      name: "Multiverse Computing",
      icon: "🌌",
      description: "Computing across infinite parallel universes for unlimited processing power",
      features: ["Parallel universe processing", "Infinite computational power", "Reality manipulation", "Time-space control"],
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      featureColor: "text-purple-200"
    },
    {
      id: 2,
      name: "Transcendent AI",
      icon: "🚀",
      description: "AI systems that have transcended human limitations and achieved god-like capabilities",
      features: ["Omniscient intelligence", "Reality creation", "Time manipulation", "Universal consciousness"],
      gradient: "from-pink-600/30 to-rose-600/30",
      borderColor: "border-pink-400/30",
      textColor: "text-pink-100",
      featureColor: "text-pink-200"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • 2029 TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Interactive Tech Showcase 2029
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore the most revolutionary technologies through our interactive showcase
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTech === index
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-br ${technologies[activeTech].gradient} backdrop-blur-sm rounded-2xl p-12 border ${technologies[activeTech].borderColor} hover:scale-105 transition-all duration-500`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-6 animate-pulse">{technologies[activeTech].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className={`text-xl ${technologies[activeTech].textColor} max-w-3xl mx-auto`}>
                {technologies[activeTech].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {technologies[activeTech].features.map((feature, index) => (
                    <li key={index} className={`flex items-center ${technologies[activeTech].featureColor}`}>
                      <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">Revolutionary Impact</h4>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Processing Power</h5>
                    <p className={`${technologies[activeTech].featureColor} text-sm`}>
                      {activeTech === 0 && "10^15 operations per second"}
                      {activeTech === 1 && "Infinite parallel processing"}
                      {activeTech === 2 && "Omniscient computation"}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Applications</h5>
                    <p className={`${technologies[activeTech].featureColor} text-sm`}>
                      {activeTech === 0 && "Medical research, drug discovery, genetic engineering"}
                      {activeTech === 1 && "Reality simulation, universe creation, time travel"}
                      {activeTech === 2 && "Universal problem solving, consciousness expansion"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/pages/UltimateTechBreakthrough2029" 
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg"
              >
                Explore {technologies[activeTech].name} →
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">♾️</div>
              <h3 className="text-xl font-semibold mb-2">Infinite Possibilities</h3>
              <p className="text-white/70 text-sm">Unlimited potential for innovation and discovery</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-white/70 text-sm">Processing speeds beyond human comprehension</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-white/70 text-sm">Transforming every aspect of human existence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2029;