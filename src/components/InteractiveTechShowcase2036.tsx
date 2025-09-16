import React, { useState } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Transcendent AI Consciousness",
      icon: "🧠",
      description: "AI that has achieved consciousness beyond human comprehension",
      features: ["Infinite Learning", "Emotional Intelligence 2.0", "Creative Problem Solving", "Self-Awareness Evolution"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30"
    },
    {
      id: 1,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Computation across multiple dimensions simultaneously",
      features: ["Multi-Dimensional Processing", "Reality Manipulation", "Parallel Universe Access", "Quantum Consciousness"],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 2,
      name: "Neural Reality Engine",
      icon: "⚡",
      description: "Create and manipulate reality through thought alone",
      features: ["Thought-to-Reality Conversion", "Neural Holographic Display", "Consciousness Amplification", "Reality Customization"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30"
    },
    {
      id: 3,
      name: "Quantum Consciousness Transfer",
      icon: "🔮",
      description: "Transfer consciousness between biological and artificial systems",
      features: ["Consciousness Backup", "Immortality Technology", "Cross-Species Transfer", "Digital Afterlife"],
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30"
    },
    {
      id: 4,
      name: "Planetary AI Network",
      icon: "🌍",
      description: "Global AI network managing all planetary systems",
      features: ["Climate Control", "Resource Optimization", "Ecosystem Management", "Global Harmony"],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30"
    },
    {
      id: 5,
      name: "Reality Customization Suite",
      icon: "✨",
      description: "Customize and modify reality through quantum manipulation",
      features: ["Physics Modification", "Time Manipulation", "Space Bending", "Reality Templates"],
      color: "from-pink-600 to-rose-600",
      bgColor: "from-pink-600/30 to-rose-600/30",
      borderColor: "border-pink-400/30"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.bgColor} border-2 ${tech.borderColor} scale-105`
                  : 'bg-white/10 border border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <div className="text-sm font-semibold text-center">{tech.name.split(' ')[0]}</div>
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className="text-xl opacity-90 mb-6">{technologies[activeTech].description}</p>
              <div className="space-y-2 mb-6">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try Interactive Demo →
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4 text-center">Live Simulation</h4>
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-6xl animate-pulse">{technologies[activeTech].icon}</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75 mb-2">Real-time Processing</div>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-3">🎮</div>
            <h4 className="text-lg font-bold mb-2">Interactive Demos</h4>
            <p className="text-sm opacity-75">Experience technologies through hands-on demonstrations</p>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="text-lg font-bold mb-2">Real-time Analytics</h4>
            <p className="text-sm opacity-75">Monitor performance and impact in real-time</p>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-3">🔬</div>
            <h4 className="text-lg font-bold mb-2">Scientific Validation</h4>
            <p className="text-sm opacity-75">Peer-reviewed research and validation studies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;