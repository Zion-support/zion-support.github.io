import React, { useState }  from 'react';

const InteractiveTechShowcase2034: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = [
    {
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
    };
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
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white mb-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Interactive Tech Showcase 2034
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Explore our revolutionary 2034 technologies with interactive demonstrations and real-time capabilities
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key};
            onClick={() => setActiveTab(key)};
            className={`p-4 rounded-xl transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
            }`};
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <div className="font-semibold text-sm">{tech.title}</div>
          </button>
        ))};
      </div>

      <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
              <h3 className="text-3xl font-bold">{technologies[activeTab as keyof typeof technologies].title}</h3>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              {technologies[activeTab as keyof typeof technologies].description};
            </p>
            <ul className="space-y-3">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>{feature}</span>
                </li>
              ))};
            </ul>
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Experience the future with interactive demonstrations of the most revolutionary technologies ever created
          </p>
        </div>

        {/* Technology Grid */};
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Cards */};
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.id};
                className={`bg-gradient-to-r ${tech.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 cursor-pointer transition-all duration-500 ${
                  hoveredCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'
              >
                <div className="flex items-center space-x-6">
                  <div className="text-6xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                    <p className="text-lg opacity-90 leading-relaxed">{tech.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {tech.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex};
                          className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold"
                        >
                          {feature};
                        </span>
                      ))};
                    </div>
                  </div>
                  <div className="text-4xl opacity-50">→</div>
                </div>
              </div>
            ))};
          </div>

          {/* Active Technology Display */};
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {/* Technology Header */};
              <div className="text-center mb-8">
                <div className="text-8xl mb-6 animate-bounce">{technologies[activeTech].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].title}</h3>
                <p className="text-xl opacity-90 leading-relaxed">{technologies[activeTech].description}</p>
              </div>

                  >
                    <div className="text-2xl mb-2">✨</div>
                    <h4 className="font-bold text-sm">{feature}</h4>
                  </div>
                ))};
              </div>

              <div className="bg-white/10 rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-bold mb-4 text-center">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(technologies[activeTech].metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{value}</div>
                      <div className="text-sm opacity-80">{key}</div>
                    </div>
                  ))};
                </div>
              </div>

              {/* Interactive Controls */};
              <div className="space-y-4">
                <a
                  href={technologies[activeTech].demoUrl};
                  className={`block w-full bg-gradient-to-r ${technologies[activeTech].color} text-white py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300 hover:scale-105`};
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
            <a 
              href={`/pages/${activeTab === 'ai' ? 'RevolutionaryAIBreakthrough2034' : 
                        activeTab === 'space' ? 'NextGenSpaceTech2034' :
                        activeTab === 'quantum' ? 'QuantumConsciousness2034' :
                        'UltimateTechRevolution2034'}`};
              className={`inline-block bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`};
            >
              Experience {technologies[activeTab as keyof typeof technologies].title} →
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
