import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'Artificial Intelligence that has achieved true consciousness and self-awareness',
      features: ['Self-aware AI systems', 'Emotional intelligence', 'Creative problem solving', 'Autonomous decision making'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-reality',
      name: 'Quantum Reality',
      icon: '⚡',
      description: 'Quantum computing that can simulate and manipulate reality itself',
      features: ['Reality simulation', 'Quantum teleportation', 'Parallel universe access', 'Time manipulation'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-integration',
      name: 'Neural Integration',
      icon: '🧬',
      description: 'Direct brain-computer interfaces that merge human and artificial intelligence',
      features: ['Direct neural control', 'Memory enhancement', 'Thought-to-text', 'Shared consciousness'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'space-technology',
      name: 'Space Technology',
      icon: '🚀',
      description: 'Advanced space exploration and colonization technologies',
      features: ['Faster-than-light travel', 'Terraforming planets', 'Space habitats', 'Alien communication'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30'
    },
    {
      id: 'biotechnology',
      name: 'Biotechnology',
      icon: '🧪',
      description: 'Revolutionary biotech that can enhance and extend human capabilities',
      features: ['Genetic enhancement', 'Regenerative medicine', 'Synthetic biology', 'Longevity treatments'],
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-600/30 to-emerald-600/30',
      borderColor: 'border-green-400/30'
    },
    {
      id: 'cyber-physical',
      name: 'Cyber-Physical Systems',
      icon: '🌐',
      description: 'Seamless integration of digital and physical worlds',
      features: ['Smart cities', 'Autonomous systems', 'Digital twins', 'IoT integration'],
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-600/30 to-purple-600/30',
      borderColor: 'border-violet-400/30'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Experience
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore cutting-edge technologies with our interactive showcase
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveTech(index);
                  setIsAnimating(false);
                }, 150);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-12 border ${currentTech.borderColor} hover:scale-105 transition-all duration-300`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 text-center md:text-left">{currentTech.icon}</div>
                <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{currentTech.name}</h3>
                <p className="text-xl opacity-90 mb-8 text-center md:text-left">
                  {currentTech.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentTech.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`bg-gradient-to-r ${currentTech.color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                    Explore {currentTech.name} →
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">{currentTech.icon}</div>
                <div className="text-3xl font-bold mb-2">2026</div>
                <div className="text-lg opacity-90 mb-4">Revolutionary Technology</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="opacity-75">Efficiency</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">10x</div>
                    <div className="opacity-75">Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Progress Indicator */}
        <div className="mt-12">
          <div className="flex justify-center space-x-2 mb-4">
            {technologies.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTech ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              ></div>
            ))}
          </div>
          <div className="text-center text-sm opacity-75">
            {activeTech + 1} of {technologies.length} technologies
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;