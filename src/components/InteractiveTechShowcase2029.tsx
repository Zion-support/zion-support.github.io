import React, { useState } from 'react';

const InteractiveTechShowcase2029: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Conscious AI Systems",
      description: "Experience the world's first truly conscious artificial intelligence that understands, learns, and evolves autonomously.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence integration", 
        "Autonomous problem solving",
        "Creative thinking capabilities",
        "Real-time learning adaptation"
      ],
      stats: {
        "Intelligence Level": "Superhuman",
        "Learning Speed": "1000x Human",
        "Decision Accuracy": "99.99%",
        "Response Time": "0.001ms"
      },
      color: "purple"
    },
    quantum: {
      title: "Quantum AI Fusion",
      description: "Revolutionary quantum computing combined with artificial intelligence for unprecedented processing power and capabilities.",
      features: [
        "Quantum consciousness processing",
        "Exponential speed improvements",
        "Quantum neural networks",
        "Interdimensional computing",
        "Infinite scalability"
      ],
      stats: {
        "Processing Speed": "1Mx Faster",
        "Memory Capacity": "Infinite",
        "Energy Efficiency": "99.9%",
        "Quantum Bits": "1000+ Qubits"
      },
      color: "cyan"
    },
    neural: {
      title: "Neural Interface Pro",
      description: "Advanced brain-computer interface technology enabling direct thought-to-computer communication without physical contact.",
      features: [
        "Non-invasive brain interface",
        "Thought-to-text conversion",
        "Neural feedback systems",
        "Mind-controlled devices",
        "Cognitive enhancement"
      ],
      stats: {
        "Response Time": "0.001ms",
        "Accuracy": "99.9%",
        "Safety": "100%",
        "Compatibility": "Universal"
      },
      color: "emerald"
    },
    metaverse: {
      title: "Metaverse Integration",
      description: "Seamless integration between physical and virtual worlds, creating infinite possibilities for human experience and interaction.",
      features: [
        "Haptic feedback systems",
        "Virtual world creation",
        "AR/VR integration",
        "Digital twin technology",
        "Cross-reality experiences"
      ],
      stats: {
        "Virtual Worlds": "Infinite",
        "Realism Level": "100%",
        "User Capacity": "Unlimited",
        "Latency": "0ms"
      },
      color: "pink"
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: 'from-purple-600/30 to-pink-600/30',
        border: 'border-purple-400/30',
        text: 'text-purple-100',
        accent: 'text-purple-200',
        button: 'from-purple-600 to-pink-600',
        hover: 'hover:bg-purple-50',
        textColor: 'text-purple-600'
      },
      cyan: {
        bg: 'from-cyan-600/30 to-blue-600/30',
        border: 'border-cyan-400/30',
        text: 'text-cyan-100',
        accent: 'text-cyan-200',
        button: 'from-cyan-600 to-blue-600',
        hover: 'hover:bg-cyan-50',
        textColor: 'text-cyan-600'
      },
      emerald: {
        bg: 'from-emerald-600/30 to-teal-600/30',
        border: 'border-emerald-400/30',
        text: 'text-emerald-100',
        accent: 'text-emerald-200',
        button: 'from-emerald-600 to-teal-600',
        hover: 'hover:bg-emerald-50',
        textColor: 'text-emerald-600'
      },
      pink: {
        bg: 'from-pink-600/30 to-rose-600/30',
        border: 'border-pink-400/30',
        text: 'text-pink-100',
        accent: 'text-pink-200',
        button: 'from-pink-600 to-rose-600',
        hover: 'hover:bg-pink-50',
        textColor: 'text-pink-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const currentTech = technologies[activeTab as keyof typeof technologies];
  const colors = getColorClasses(currentTech.color);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2029
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2029
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'
              }`}
            >
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-2xl p-12 border ${colors.border} mb-12`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">{currentTech.title}</h3>
              <p className={`text-xl ${colors.text} mb-8 leading-relaxed`}>
                {currentTech.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className={`flex items-center space-x-2 ${colors.accent}`}>
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`bg-gradient-to-r ${colors.button} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Experience {currentTech.title} →
              </button>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-semibold mb-6">Performance Metrics:</h4>
              {Object.entries(currentTech.stats).map(([key, value]) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className={`${colors.text} font-medium`}>{key}:</span>
                    <span className="text-white font-bold text-lg">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🎮 Interactive Demo</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Try our interactive demonstration to experience the power of these revolutionary technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h4 className="text-lg font-semibold mb-2">AI Chat</h4>
              <p className="text-sm opacity-80">Chat with our conscious AI</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
              <h4 className="text-lg font-semibold mb-2">Quantum Sim</h4>
              <p className="text-sm opacity-80">Experience quantum computing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧬</div>
              <h4 className="text-lg font-semibold mb-2">Neural Test</h4>
              <p className="text-sm opacity-80">Test neural interface</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌌</div>
              <h4 className="text-lg font-semibold mb-2">Metaverse</h4>
              <p className="text-sm opacity-80">Enter virtual world</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users already experiencing these revolutionary technologies and transform your understanding of what's possible.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2029;