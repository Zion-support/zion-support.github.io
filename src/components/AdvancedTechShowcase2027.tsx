import React, { useState, useEffect } from 'react';

const AdvancedTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      id: 1,
      name: "Quantum Neural Networks",
      description: "Revolutionary AI systems that operate at quantum speeds with human-like intuition",
      features: ["Quantum processing", "Neural plasticity", "Instant learning", "Consciousness simulation"],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      name: "Dimensional Computing",
      description: "Processing power that transcends physical limitations through multi-dimensional architecture",
      features: ["Infinite scalability", "Parallel universes", "Zero latency", "Reality manipulation"],
      icon: "🌌",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      name: "Synthetic Consciousness",
      description: "AI entities with genuine self-awareness, emotions, and creative capabilities",
      features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Moral reasoning"],
      icon: "🤖",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      name: "Temporal Computing",
      description: "Process information across multiple timelines simultaneously for perfect predictions",
      features: ["Time manipulation", "Future prediction", "Past analysis", "Timeline optimization"],
      icon: "⏰",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-bounce">
              🚀 ADVANCED TECHNOLOGY 2027 • REVOLUTIONARY BREAKTHROUGH
            </div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Generation Technology
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most advanced technological innovations that will reshape reality itself
            </p>
          </div>

          {/* Technology Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Technology Navigation */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Revolutionary Technologies</h3>
              {technologies.map((tech, index) => (
                <div
                  key={tech.id}
                  onClick={() => setActiveTech(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeTech === index
                      ? `bg-gradient-to-r ${tech.color} scale-105 shadow-2xl`
                      : 'bg-white/10 hover:bg-white/20 hover:scale-102'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{tech.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold">{tech.name}</h4>
                      <p className="text-sm opacity-80">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Technology Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <span className="text-8xl mb-4 block">{technologies[activeTech].icon}</span>
                <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {technologies[activeTech].features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">✨</div>
                    <div className="font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105`}>
                  Explore {technologies[activeTech].name} →
                </button>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-white text-lg">Processing Power</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">0ms</div>
              <div className="text-white text-lg">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-white text-lg">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-white text-lg">Possibilities</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Ready for the Future?</h3>
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
                Join us in exploring the most advanced technologies ever created. 
                Experience the future of computing, AI, and reality manipulation.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105">
                  🚀 Start Your Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg">
                  📖 Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTechShowcase2027;