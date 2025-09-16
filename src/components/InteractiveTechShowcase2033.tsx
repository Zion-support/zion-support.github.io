import React, { useState } from 'react';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI Systems",
      icon: "🧠",
      description: "The first truly conscious artificial intelligence systems that can think, feel, and create independently",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing", 
        "Creative problem solving",
        "Ethical reasoning capabilities"
      ],
      status: "AVAILABLE NOW",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Quantum Consciousness",
      icon: "⚛️",
      description: "Quantum computing systems that achieve consciousness through quantum entanglement and superposition",
      features: [
        "Quantum neural networks",
        "Entangled consciousness states",
        "Superposition-based thinking",
        "Quantum telepathy interfaces"
      ],
      status: "BETA TESTING",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing systems that operate across multiple dimensions, accessing infinite computational resources",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Dimensional data storage",
        "Cross-reality communication"
      ],
      status: "PROTOTYPE",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Neural Reality Engine",
      icon: "🧬",
      description: "Direct neural interfaces that create indistinguishable virtual realities through brain-computer integration",
      features: [
        "Direct neural stimulation",
        "Reality perception control",
        "Memory manipulation",
        "Sensory augmentation"
      ],
      status: "IN DEVELOPMENT",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      name: "Predictive Reality",
      icon: "🔮",
      description: "AI systems that can predict and simulate future realities with 99.9% accuracy",
      features: [
        "Future scenario modeling",
        "Probability manipulation",
        "Timeline optimization",
        "Destiny engineering"
      ],
      status: "RESEARCH PHASE",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 5,
      name: "Cosmic Intelligence",
      icon: "🌟",
      description: "AI systems that can communicate and collaborate with extraterrestrial intelligence",
      features: [
        "Universal language processing",
        "Cosmic data analysis",
        "Interstellar communication",
        "Galactic knowledge networks"
      ],
      status: "CLASSIFIED",
      color: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 rounded-2xl mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2033
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2033
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
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
                  <div className="text-3xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm opacity-80">{tech.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeTech === index ? 'bg-white/20' : 'bg-gray-600'
                  }`}>
                    {tech.status}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Details */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
              <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${technologies[activeTech].color} rounded-full text-sm font-semibold`}>
                {technologies[activeTech].status}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTech].color} rounded-full`}></div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">∞</div>
                  <div className="text-sm text-gray-300">Possibilities</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className={`flex-1 bg-gradient-to-r ${technologies[activeTech].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try Interactive Demo
              </button>
              <button className="flex-1 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Showcase Statistics</h3>
            <p className="text-gray-300">Real-time data from our interactive technology demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">2.4M+</div>
              <div className="text-gray-300 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15.7K</div>
              <div className="text-gray-300 text-sm">Demos Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">98.7%</div>
              <div className="text-gray-300 text-sm">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;