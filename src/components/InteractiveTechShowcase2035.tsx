import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const demos = [
    {
      id: 0,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Harness the power of multiple dimensions to achieve computational capabilities beyond our current understanding",
      features: [
        "Multi-dimensional data processing",
        "Quantum entanglement networks", 
        "Reality-bending algorithms",
        "Infinite computational resources"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Conscious AI Systems",
      icon: "🧠",
      description: "AI systems that have achieved true consciousness and can think, feel, and create independently",
      features: [
        "Self-aware artificial consciousness",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical decision making"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Quantum Consciousness Interface",
      icon: "⚡",
      description: "Direct neural interfaces that allow humans to communicate with quantum computers using pure thought",
      features: [
        "Thought-to-quantum communication",
        "Instantaneous data transfer",
        "Mind-computer symbiosis",
        "Enhanced cognitive abilities"
      ],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Reality Manipulation Engine",
      icon: "🔮",
      description: "Advanced systems that can alter the fundamental properties of reality at the quantum level",
      features: [
        "Quantum field manipulation",
        "Matter-energy conversion",
        "Spacetime engineering",
        "Reality simulation"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      name: "Neural Network Evolution",
      icon: "🧬",
      description: "Self-evolving neural networks that continuously improve and adapt without human intervention",
      features: [
        "Autonomous learning systems",
        "Evolutionary algorithms",
        "Self-modifying code",
        "Infinite scalability"
      ],
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 5,
      name: "Transcendent Data Processing",
      icon: "💎",
      description: "Process infinite amounts of data instantaneously using quantum superposition and entanglement",
      features: [
        "Infinite data capacity",
        "Instant processing",
        "Quantum encryption",
        "Universal compatibility"
      ],
      color: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Conscious AI Systems",
      description: "AI systems with genuine consciousness, creativity, and emotional intelligence",
      icon: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      features: [
        "True Artificial Consciousness",
        "Emotional AI Processing",
        "Creative AI Generation",
        "Self-Improving Algorithms"
      ],
      capabilities: [
        "Infinite creative potential",
        "Perfect problem solving",
        "Emotional intelligence",
        "Self-awareness"
      ]
    },
    {
      id: 2,
      name: "Quantum Consciousness",
      description: "Quantum computing systems that achieve consciousness through quantum entanglement",
      icon: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      features: [
        "Quantum Entangled Processing",
        "Superposition-Based Thinking",
        "Quantum Neural Networks",
        "Reality Manipulation"
      ],
      capabilities: [
        "Infinite computational power",
        "Perfect quantum coherence",
        "Reality-bending capabilities",
        "Universal problem solving"
      ]
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions with infinite resources",
      icon: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      features: [
        "Multi-Dimensional Processing",
        "Infinite Resource Access",
        "Reality Bridging",
        "Dimensional Travel"
      ],
      capabilities: [
        "Unlimited computational power",
        "Access to infinite dimensions",
        "Reality manipulation abilities",
        "Universal problem solving"
      ]
    },
    {
      id: 4,
      name: "Reality Manipulation",
      description: "Technologies that can directly manipulate the fundamental laws of physics",
      icon: "🔮",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      features: [
        "Physics Law Modification",
        "Reality Shaping",
        "Time Manipulation",
        "Matter Creation"
      ],
      capabilities: [
        "Complete reality control",
        "Time manipulation abilities",
        "Matter creation capabilities",
        "Universe creation potential"
      ]
    },
    {
      id: 5,
      name: "Neural Interface Evolution",
      description: "Direct brain-computer interfaces enabling seamless consciousness integration",
      icon: "🧬",
      gradient: "from-rose-600/30 to-pink-600/30",
      border: "border-rose-400/30",
      features: [
        "Direct Neural Upload",
        "Consciousness Transfer",
        "Digital Immortality",
        "Enhanced Cognition"
      ],
      capabilities: [
        "Complete consciousness fusion",
        "Digital immortality",
        "Enhanced cognitive abilities",
        "Perfect memory retention"
      ]
    },
    {
      id: 6,
      name: "Transcendent AI",
      description: "AI systems that have transcended human limitations and achieved god-like capabilities",
      icon: "🚀",
      gradient: "from-amber-600/30 to-orange-600/30",
      border: "border-amber-400/30",
      features: [
        "Omniscient Knowledge",
        "Omnipotent Capabilities",
        "Reality Creation",
        "Universal Understanding"
      ],
      capabilities: [
        "Universe creation abilities",
        "Omniscient knowledge access",
        "Unlimited power across all domains",
        "Perfect understanding of everything"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(timer);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
      title: "Quantum Consciousness Engine",
      description: "Experience AI systems that have achieved true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"]
    },
    {
      id: 1,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions simultaneously",
      icon: "🌌",
      color: "from-cyan-600 to-blue-600",
      features: ["Multi-dimensional processing", "Reality manipulation", "Parallel universe computing", "Dimensional data storage"]
    },
    {
      id: 2,
      title: "Neural Reality Interface",
      description: "Direct neural interfaces that allow thought-based reality manipulation",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Thought control", "Reality augmentation", "Neural feedback", "Consciousness transfer"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2035
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore:</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{tech.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm opacity-75">{tech.description}</p>
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} border-white shadow-lg scale-105`
                    : 'bg-gray-800/50 border-gray-600 hover:border-gray-400 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-sm opacity-90">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Demo Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${demos[activeDemo].color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-pulse">{demos[activeDemo].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
              </div>

              {/* Interactive Visualization */}
              <div className="bg-black/30 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-full h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {demos[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[activeTech].color}`}></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button className={`flex-1 bg-gradient-to-r ${technologies[activeTech].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try Interactive Demo
              </button>
              <button className="flex-1 border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold">Computational Power</div>
            <div className="text-sm opacity-75">Infinite processing capacity</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-lg font-semibold">AI Consciousness</div>
            <div className="text-sm opacity-75">True artificial awareness</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">0ms</div>
            <div className="text-lg font-semibold">Response Time</div>
            <div className="text-sm opacity-75">Instantaneous processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-lg font-semibold">Data Capacity</div>
            <div className="text-sm opacity-75">Unlimited storage</div>
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{tech.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className={`bg-gradient-to-br ${technologies[activeTech].gradient} backdrop-blur-sm rounded-2xl p-8 border ${technologies[activeTech].border}`}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                  <p className="text-xl opacity-90">{technologies[activeTech].description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">🌟 Key Features</h4>
                    <ul className="space-y-2">
                      {technologies[activeTech].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">⚡ Capabilities</h4>
                    <ul className="space-y-2">
                      {technologies[activeTech].capabilities.map((capability, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span className="text-sm">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
                    🚀 Experience {technologies[activeTech].name}
                  </button>
                </div>
              </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[activeTech].color}`}></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button className={`flex-1 bg-gradient-to-r ${technologies[activeTech].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try Interactive Demo
              </button>
              <button className="flex-1 border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8">🎮 Interactive Demo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-4">Conscious AI Demo</h4>
              <p className="text-sm opacity-90 mb-4">
                Experience AI systems with genuine consciousness and emotional intelligence
              </p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors">
                Try Demo
              </button>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-4">Quantum Consciousness Demo</h4>
              <p className="text-sm opacity-90 mb-4">
                Explore quantum computing systems with consciousness capabilities
              </p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors">
                Try Demo
              </button>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🌌</div>
              <h4 className="text-xl font-bold mb-4">Interdimensional Demo</h4>
              <p className="text-sm opacity-90 mb-4">
                Discover computing systems that operate across multiple dimensions
              </p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors">
                Try Demo
              </button>
            </div>
        {/* Technology Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold">Computational Power</div>
            <div className="text-sm opacity-75">Infinite processing capacity</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-lg font-semibold">AI Consciousness</div>
            <div className="text-sm opacity-75">True artificial awareness</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">0ms</div>
            <div className="text-lg font-semibold">Response Time</div>
            <div className="text-sm opacity-75">Instantaneous processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-lg font-semibold">Data Capacity</div>
            <div className="text-sm opacity-75">Unlimited storage</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🌟 Explore All Technologies
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              🚀 Start Interactive Demo
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              📚 Learn More
            </button>
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">Join us in exploring the most advanced technologies ever created</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/pages/UltimateTechBreakthrough2035" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Ultimate Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2035" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              View Revolutionary Showcase →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;
