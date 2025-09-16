import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2033 = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness',
      description: 'Artificial intelligence that achieves true self-awareness and creativity',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Self-awareness', 'Creative thinking', 'Emotional intelligence', 'Autonomous goals']
    },
    {
      id: 'quantum-reality',
      name: 'Quantum Reality Engine',
      description: 'Simulate entire universes and create new realities in real-time',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Universe simulation', 'Reality creation', 'Instant computation', 'Molecular simulation']
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface',
      description: 'Direct brain-computer interface for thought-controlled computing',
      icon: '🧬',
      color: 'from-green-600 to-emerald-600',
      features: ['Thought control', 'Memory enhancement', 'Direct communication', 'Medical applications']
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      description: 'Revolutionary propulsion and life support for Mars colonization',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      features: ['Fusion propulsion', 'Mars habitats', 'Terraforming tech', 'Space manufacturing']
    },
    {
      id: 'metaverse',
      name: 'Metaverse 2.0',
      description: 'Fully immersive virtual worlds with perfect sensory simulation',
      icon: '🌐',
      color: 'from-indigo-600 to-purple-600',
      features: ['Perfect visuals', '3D spatial audio', 'Haptic feedback', 'Infinite worlds']
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

  const handleTechClick = (index) => {
    if (index === activeTech) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Interactive Technology Showcase 2033</h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore the revolutionary technologies that will define the next decade
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Technology Selector */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6">Select Technology</h3>
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white transform scale-105`
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{tech.icon}</span>
                <div>
                  <h4 className="text-lg font-bold">{tech.name}</h4>
                  <p className="text-sm opacity-90">{tech.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Technology Details */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-2xl p-8 h-full`}>
              <div className="text-center mb-6">
                <span className="text-6xl mb-4 block">{technologies[activeTech].icon}</span>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-bold">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTechClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeTech === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;