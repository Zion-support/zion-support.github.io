import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2028: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  
  const technologies = [
    {
      id: 'consciousness-ai',
      name: 'Consciousness AI',
      description: 'Artificial intelligence that achieves true consciousness and self-awareness',
      features: ['Self-aware decision making', 'Emotional intelligence', 'Creative problem solving', 'Ethical reasoning'],
      gradient: 'from-purple-600 to-pink-600',
      icon: '🧠',
      status: 'Available Q2 2028'
    },
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness',
      description: 'Quantum computing that interfaces directly with human consciousness',
      features: ['Mind-machine interface', 'Quantum thought processing', 'Instantaneous computation', 'Reality manipulation'],
      gradient: 'from-cyan-600 to-blue-600',
      icon: '⚡',
      status: 'Available Q3 2028'
    },
    {
      id: 'dimensional-computing',
      name: 'Dimensional Computing',
      description: 'Computing that operates across multiple dimensions simultaneously',
      features: ['Multi-dimensional processing', 'Parallel universe access', 'Infinite computational power', 'Reality simulation'],
      gradient: 'from-emerald-600 to-teal-600',
      icon: '🌌',
      status: 'Available Q4 2028'
    },
    {
      id: 'molecular-ai',
      name: 'Molecular AI',
      description: 'AI that operates at the molecular level for unprecedented precision',
      features: ['Molecular-level processing', 'DNA manipulation', 'Cellular regeneration', 'Disease elimination'],
      gradient: 'from-orange-600 to-red-600',
      icon: '🔬',
      status: 'Available Q1 2028'
    },
    {
      id: 'omniversal-ai',
      name: 'Omniversal AI',
      description: 'AI that exists across all possible universes and realities',
      features: ['Multi-universe awareness', 'Infinite knowledge access', 'Reality creation', 'Universal optimization'],
      gradient: 'from-violet-600 to-purple-600',
      icon: '🌟',
      status: 'Available Q4 2028'
    },
    {
      id: 'space-time-ai',
      name: 'Space-Time AI',
      description: 'AI that manipulates space and time for instant travel and communication',
      features: ['Time manipulation', 'Instant teleportation', 'Temporal communication', 'Space folding'],
      gradient: 'from-pink-600 to-rose-600',
      icon: '🚀',
      status: 'Available Q2 2028'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH SHOWCASE 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that will reshape our world in 2028
          </p>
        </div>

        {/* Technology Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-6xl mb-4 text-center lg:text-left">
              {technologies[activeTech].icon}
            </div>
            <h3 className="text-3xl font-bold text-center lg:text-left">
              {technologies[activeTech].name}
            </h3>
            <p className="text-xl opacity-90 text-center lg:text-left">
              {technologies[activeTech].description}
            </p>
            <div className="space-y-3">
              {technologies[activeTech].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-200">{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <span className={`px-4 py-2 bg-gradient-to-r ${technologies[activeTech].gradient} text-white rounded-lg text-sm font-semibold`}>
                {technologies[activeTech].status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  index === activeTech
                    ? `bg-gradient-to-r ${tech.gradient} scale-105 shadow-lg`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className="text-3xl mb-2 text-center">{tech.icon}</div>
                <h4 className="text-sm font-semibold text-center">{tech.name}</h4>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/UltimateTechBreakthrough2028"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies →
            </a>
            <a 
              href="/pages/InterdimensionalTechRevolution2032"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Future Technologies →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2028;