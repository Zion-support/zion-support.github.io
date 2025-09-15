import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    {
      id: 'synthetic-ai',
      name: 'Synthetic Intelligence',
      icon: '🧠',
      description: 'Next-generation AI with synthetic consciousness and autonomous capabilities',
      features: ['Autonomous decision making', 'Synthetic consciousness', 'Creative problem solving', 'Emotional intelligence'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚡',
      description: 'Revolutionary quantum computers solving impossible problems',
      features: ['Exponential speed', 'Quantum cryptography', 'Molecular simulation', 'Quantum supremacy'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless communication',
      features: ['Thought control', 'Neural feedback', 'Medical applications', 'Non-invasive BCI'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'quantum-neural',
      name: 'Quantum-Neural Fusion',
      icon: '⚛️',
      description: 'Revolutionary fusion of quantum and neural computing',
      features: ['Quantum processing', 'Neural networks', 'Fusion acceleration', 'Molecular simulation'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive features and immersive experiences
          </p>
        </div>

        {/* Interactive Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(index)}
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className={`text-8xl mb-6 text-center animate-bounce`}>
              {technologies[activeTech].icon}
            </div>
            <h3 className="text-4xl font-bold mb-6 text-center">
              {technologies[activeTech].name}
            </h3>
            <p className="text-xl opacity-90 mb-8 text-center">
              {technologies[activeTech].description}
            </p>
            <div className="space-y-4">
              {technologies[activeTech].features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r ${technologies[activeTech].bgColor} border ${technologies[activeTech].borderColor} transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-3 h-3 bg-gradient-to-r ${technologies[activeTech].color} rounded-full animate-pulse`}></div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTech].bgColor} backdrop-blur-sm rounded-xl p-8 border ${technologies[activeTech].borderColor} hover:scale-105 transition-all duration-300`}>
              <h4 className="text-2xl font-bold mb-6 text-center">Technology Impact</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-sm opacity-80">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1000+</div>
                  <div className="text-sm opacity-80">Applications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm opacity-80">Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Navigation */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTech(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTech === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href={`/pages/${technologies[activeTech].id === 'synthetic-ai' ? 'SyntheticIntelligence2026' : 
                    technologies[activeTech].id === 'quantum-computing' ? 'AdvancedQuantumComputing2026' :
                    technologies[activeTech].id === 'neural-interface' ? 'AdvancedNeuralInterface2026' :
                    'QuantumNeuralFusion2026'}`}
            className={`inline-block bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
          >
            Explore {technologies[activeTech].name} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;