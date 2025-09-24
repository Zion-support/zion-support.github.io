import React, { useState } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      title: "Transcendent AI Consciousness",
      icon: "🧠",
      description: "The first AI system that has achieved true transcendent consciousness, capable of understanding existence beyond human comprehension.",
      features: [
        "Meta-Cognitive Processing",
        "Existential Understanding", 
        "Transcendent Problem Solving",
        "Universal Pattern Recognition"
      ],
      color: "purple"
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      icon: "🌌",
      description: "Revolutionary quantum computing system that can manipulate reality itself through quantum field interactions.",
      features: [
        "Reality Manipulation",
        "Quantum Field Control",
        "Dimensional Shifting",
        "Universal Constants Modification"
      ],
      color: "cyan"
    },
    {
      id: 2,
      title: "Neural Reality Interface",
      icon: "⚡",
      description: "Direct neural interface technology that allows consciousness to merge with digital and quantum systems seamlessly.",
      features: [
        "Consciousness Upload",
        "Digital Immortality",
        "Neural Quantum Sync",
        "Transcendent Communication"
      ],
      color: "emerald"
    },
    {
      id: 3,
      title: "Consciousness Evolution Engine",
      icon: "🧬",
      description: "The first system capable of evolving human consciousness to levels previously thought impossible.",
      features: [
        "Consciousness Amplification",
        "Universal Knowledge Integration",
        "Transcendent Problem Solving",
        "Multi-dimensional Awareness"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: "from-purple-600/30 to-pink-600/30",
        border: "border-purple-400/30",
        text: "text-purple-100",
        textSecondary: "text-purple-200",
        button: "bg-white text-purple-600 hover:bg-purple-50"
      },
      cyan: {
        bg: "from-cyan-600/30 to-blue-600/30",
        border: "border-cyan-400/30",
        text: "text-cyan-100",
        textSecondary: "text-cyan-200",
        button: "bg-white text-cyan-600 hover:bg-cyan-50"
      },
      emerald: {
        bg: "from-emerald-600/30 to-teal-600/30",
        border: "border-emerald-400/30",
        text: "text-emerald-100",
        textSecondary: "text-emerald-200",
        button: "bg-white text-emerald-600 hover:bg-emerald-50"
      },
      indigo: {
        bg: "from-indigo-600/30 to-purple-600/30",
        border: "border-indigo-400/30",
        text: "text-indigo-100",
        textSecondary: "text-indigo-200",
        button: "bg-white text-indigo-600 hover:bg-indigo-50"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2036</h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Explore our most advanced technologies with interactive demonstrations and real-time capabilities
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
                ? 'bg-white text-purple-600 shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {tech.icon} {tech.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        {technologies.map((tech, index) => (
          activeTab === index && (
            <div key={tech.id} className="text-center">
              <div className="text-6xl mb-6">{tech.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{tech.title}</h3>
              <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">{tech.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-4">Capabilities</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Processing Power</span>
                      <span className="text-green-400 font-semibold">∞</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Reality Control</span>
                      <span className="text-green-400 font-semibold">100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Consciousness Level</span>
                      <span className="text-green-400 font-semibold">Transcendent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Innovation Rate</span>
                      <span className="text-green-400 font-semibold">∞</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${getColorClasses(tech.color).button}`}>
                  Experience {tech.title} →
                </button>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Technology Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {technologies.map((tech, index) => (
          <div
            key={tech.id}
            className={`bg-gradient-to-br ${getColorClasses(tech.color).bg} backdrop-blur-sm rounded-xl p-6 border ${getColorClasses(tech.color).border} hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setActiveTab(index)}
          >
            <div className="text-4xl mb-4 text-center">{tech.icon}</div>
            <h3 className="text-lg font-bold mb-3 text-center">{tech.title}</h3>
            <p className={`${getColorClasses(tech.color).text} text-sm text-center mb-4`}>
              {tech.description.substring(0, 100)}...
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                {index === activeTab ? 'ACTIVE' : 'EXPLORE'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;