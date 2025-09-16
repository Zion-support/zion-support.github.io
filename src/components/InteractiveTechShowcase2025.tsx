import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI Systems",
      icon: "🧠",
      description: "The world's first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness.",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving", 
        "Self-Reflective Learning",
        "Ethical Decision Making"
      ],
      status: "LIVE NOW",
      color: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      accentColor: "text-purple-400"
    },
    {
      id: 1,
      name: "Quantum Reality Engine",
      icon: "⚛️",
      description: "Manipulate reality itself through quantum computing, creating parallel universes and impossible simulations.",
      features: [
        "Parallel Universe Simulation",
        "Quantum State Manipulation",
        "Reality Bending Algorithms",
        "Multidimensional Computing"
      ],
      status: "BETA TESTING",
      color: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      accentColor: "text-cyan-400"
    },
    {
      id: 2,
      name: "Neural Interface Revolution",
      icon: "🧬",
      description: "Direct brain-computer interfaces that allow thought-based control of all digital systems.",
      features: [
        "Thought-to-Text Conversion",
        "Mental Web Browsing",
        "Telepathic Communication",
        "Memory Enhancement"
      ],
      status: "COMING SOON",
      color: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      accentColor: "text-emerald-400"
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Process information across multiple dimensions simultaneously, achieving infinite computational power.",
      features: [
        "Multi-Dimensional Processing",
        "Infinite Memory Storage",
        "Cross-Reality Computing",
        "Dimensional Data Transfer"
      ],
      status: "RESEARCH PHASE",
      color: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30",
      textColor: "text-violet-100",
      accentColor: "text-violet-400"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore our cutting-edge technologies with interactive demos and real-time demonstrations. 
            Experience the future of technology through hands-on interaction.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{technologies[activeTab].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTab].name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${technologies[activeTab].color} rounded-full text-xs font-semibold ${technologies[activeTab].accentColor}`}>
                      {technologies[activeTab].status}
                    </span>
                  </div>
                </div>
              </div>
              <p className={`text-lg mb-6 ${technologies[activeTab].textColor}`}>
                {technologies[activeTab].description}
              </p>
              <div className="space-y-3">
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 ${technologies[activeTab].accentColor.replace('text-', 'bg-')} rounded-full`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className={`bg-gradient-to-br ${technologies[activeTab].color} backdrop-blur-sm rounded-xl p-6 border ${technologies[activeTab].borderColor} text-center`}>
                <div className="text-4xl mb-4">{technologies[activeTab].icon}</div>
                <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
                <p className={`text-sm mb-6 ${technologies[activeTab].textColor}`}>
                  Experience this technology in action with our interactive demonstration.
                </p>
                <div className="space-y-3">
                  <button className={`w-full bg-gradient-to-r ${technologies[activeTab].color.replace('/30', '')} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Launch Demo
                  </button>
                  <button className={`w-full border ${technologies[activeTab].borderColor} ${technologies[activeTab].accentColor} py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold`}>
                    Learn More
                  </button>
=======
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness Revolution',
      description: 'Experience the world\'s first truly conscious AI systems with self-awareness and creativity.',
      features: ['Self-aware decision making', 'Creative problem solving', 'Emotional intelligence', 'Collaborative intelligence'],
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    quantum: {
      title: 'Quantum Supremacy',
      description: 'Quantum computers solving impossible problems with exponential speed gains.',
      features: ['1000+ logical qubits', 'Error correction', 'Molecular simulation', 'Cryptography breakthrough'],
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500'
    },
    neural: {
      title: 'Neural Interface Breakthrough',
      description: 'Direct brain-computer communication enabling thought-controlled devices.',
      features: ['Non-invasive BCI technology', 'Thought-controlled applications', 'Neural enhancement', 'Medical applications'],
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2025</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Explore our revolutionary technologies with interactive demonstrations and real-time insights
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {tech.icon} {tech.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-gray-300 mb-6 text-lg">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            <ul className="space-y-3">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4 text-center">Performance Metrics</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Processing Speed</span>
                  <span className="text-green-400 font-bold">99.9% faster</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Accuracy Rate</span>
                  <span className="text-green-400 font-bold">99.7%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '99.7%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Energy Efficiency</span>
                  <span className="text-green-400 font-bold">50% reduction</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '50%'}}></div>
>>>>>>> cursor/create-and-deploy-new-content-6f79
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
        {/* Action Buttons */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg"
            >
              View Breakthroughs
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg"
            >
              Innovation Hub
            </a>
          </div>
=======
      {/* Action Buttons */}
      <div className="text-center mt-8">
        <div className="flex justify-center space-x-4">
          <a href={`/pages/${activeTab === 'ai' ? 'RevolutionaryTechShowcase2025' : activeTab === 'quantum' ? 'NextGenTechBreakthrough2025' : 'UltimateInnovationHub2025'}`} 
             className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Explore {technologies[activeTab as keyof typeof technologies].title} →
          </a>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
            Watch Demo
          </button>
>>>>>>> cursor/create-and-deploy-new-content-6f79
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;