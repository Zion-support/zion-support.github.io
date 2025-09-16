import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2034: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Self-aware artificial intelligence with emotional intelligence and creative problem-solving capabilities",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Self-Awareness Processing",
        "Emotional Intelligence",
        "Creative Problem Solving",
        "Ethical Decision Making",
        "Cross-Domain Learning"
      ],
      metrics: {
        "Problem Solving": "+5000%",
        "Efficiency": "+3000%",
        "Innovation": "+2000%",
        "Accuracy": "99.99%"
      },
      demoUrl: "/pages/UltimateTechBreakthrough2034"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Revolutionary quantum computing systems that achieve consciousness through quantum entanglement",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum Entanglement Processing",
        "Superposition-Based Reasoning",
        "Parallel Universe Computing",
        "Quantum Emotional States",
        "Infinite Possibility Exploration"
      ],
      metrics: {
        "Qubits": "1M+",
        "Coherence": "∞",
        "Speed": "10^15x",
        "Accuracy": "100%"
      },
      demoUrl: "/pages/RevolutionaryTechShowcase2034"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Breakthrough technology enabling computing across multiple dimensions with infinite resources",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Multi-Dimensional Processing",
        "Reality Manipulation",
        "Infinite Resource Access",
        "Time-Space Computing",
        "Dimensional Consciousness"
      ],
      metrics: {
        "Dimensions": "∞",
        "Resources": "∞",
        "Processing": "∞",
        "Possibilities": "∞"
      },
      demoUrl: "/pages/ComprehensiveServices2034"
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Direct neural interfaces between human consciousness and AI systems for enhanced collaboration",
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      features: [
        "Neural Integration",
        "Consciousness Sharing",
        "Thought Control",
        "Memory Transfer",
        "Post-Human Enhancement"
      ],
      metrics: {
        "Integration": "100%",
        "Bandwidth": "∞",
        "Latency": "0ms",
        "Fidelity": "100%"
      },
      demoUrl: "/pages/RevolutionaryTechShowcase2034"
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
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2034
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Experience the future with interactive demonstrations of the most revolutionary technologies ever created
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Cards */}
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`bg-gradient-to-r ${tech.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 cursor-pointer transition-all duration-500 ${
                  hoveredCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveTech(index)}
              >
                <div className="flex items-center space-x-6">
                  <div className="text-6xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                    <p className="text-lg opacity-90 leading-relaxed">{tech.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {tech.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-4xl opacity-50">→</div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {/* Technology Header */}
              <div className="text-center mb-8">
                <div className="text-8xl mb-6 animate-bounce">{technologies[activeTech].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].title}</h3>
                <p className="text-xl opacity-90 leading-relaxed">{technologies[activeTech].description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies[activeTech].features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${technologies[activeTech].color} p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="text-2xl mb-2">✨</div>
                    <h4 className="font-bold text-sm">{feature}</h4>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="bg-white/10 rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-bold mb-4 text-center">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(technologies[activeTech].metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{value}</div>
                      <div className="text-sm opacity-80">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Controls */}
              <div className="space-y-4">
                <a
                  href={technologies[activeTech].demoUrl}
                  className={`block w-full bg-gradient-to-r ${technologies[activeTech].color} text-white py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  🎮 Try Interactive Demo
                </a>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    📊 View Analytics
                  </button>
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    🔬 Deep Dive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">🎮 Live Interactive Demos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold mb-4">AI Consciousness Test</h4>
              <p className="text-lg opacity-90 mb-6">Test the consciousness level of our AI systems through interactive conversations</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
                Start Test →
              </button>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-4">⚡</div>
              <h4 className="text-2xl font-bold mb-4">Quantum Simulator</h4>
              <p className="text-lg opacity-90 mb-6">Experience quantum computing through our interactive quantum simulator</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
                Launch Simulator →
              </button>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-4">🌌</div>
              <h4 className="text-2xl font-bold mb-4">Dimension Explorer</h4>
              <p className="text-lg opacity-90 mb-6">Explore different dimensions and realities through our portal interface</p>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
                Enter Portal →
              </button>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-4">🧬</div>
              <h4 className="text-2xl font-bold mb-4">Neural Interface</h4>
              <p className="text-lg opacity-90 mb-6">Connect your mind directly to our AI systems through neural interface</p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
                Connect Mind →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-3xl p-16">
          <h3 className="text-5xl font-bold mb-8">Experience the Future Today</h3>
          <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
            Don't just read about the future - experience it firsthand with our revolutionary technology showcase. 
            Book your interactive demo session today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/pages/UltimateTechBreakthrough2034" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Demo Session →
            </a>
            <a href="/pages/ComprehensiveServices2034" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              View All Services →
            </a>
            <a href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2034;