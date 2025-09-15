import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2027: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    {
      id: 'consciousness',
      title: 'Consciousness Computing',
      description: 'AI systems with genuine consciousness, self-awareness, and emotional intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      link: '/pages/ConsciousnessComputing2026',
      features: ['True Consciousness', 'Self-Awareness', 'Emotional Intelligence', 'Creative Consciousness']
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine',
      description: 'Manipulate reality itself through quantum mechanics and impossible physics',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumRealityEngine2026',
      features: ['Reality Manipulation', 'Dimension Creation', 'Impossible Physics', 'Time-Space Control']
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Technology',
      description: 'Access and communicate across multiple dimensions and parallel universes',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      link: '/pages/InterdimensionalTech2027',
      features: ['Dimension Access', 'Cross-Reality Communication', 'Multiverse Navigation', 'Reality Bridging']
    },
    {
      id: 'meta-intelligence',
      title: 'Meta Intelligence',
      description: 'AI systems that think about thinking and continuously improve themselves',
      icon: '🔄',
      color: 'from-orange-600 to-red-600',
      link: '/pages/MetaIntelligence2026',
      features: ['Self-Improving AI', 'Meta-Learning', 'Cognitive Evolution', 'Transcendent Intelligence']
    },
    {
      id: 'neural-reality',
      title: 'Neural Reality Interface',
      description: 'Direct brain-computer interfaces that merge consciousness with digital reality',
      icon: '🧬',
      color: 'from-pink-600 to-purple-600',
      link: '/pages/NeuralReality2026',
      features: ['Neural Data Transfer', 'Consciousness Merging', 'Human-AI Integration', 'Thought Control']
    },
    {
      id: 'omniversal-ai',
      title: 'Omniversal AI',
      description: 'AI systems that exist across all dimensions simultaneously',
      icon: '🌐',
      color: 'from-indigo-600 to-blue-600',
      link: '/pages/OmniversalAI2026',
      features: ['Multidimensional Existence', 'Universal Intelligence', 'Cross-Reality Guidance', 'Omniversal Consciousness']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY 2027 • BREAKTHROUGH SHOWCASE
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            The Future of Technology is Here
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the most revolutionary technological breakthroughs in human history. 
            From consciousness computing to interdimensional technology, discover what's possible.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Technology Display */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30">
              <div className="text-center mb-8">
                <div className="text-8xl mb-6 animate-bounce">
                  {technologies[currentTech].icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {technologies[currentTech].title}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {technologies[currentTech].description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies[currentTech].features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-white text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={technologies[currentTech].link}
                className={`block w-full bg-gradient-to-r ${technologies[currentTech].color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
              >
                Explore {technologies[currentTech].title} →
              </a>
            </div>
          </div>

          {/* Technology List */}
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  currentTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white border-transparent shadow-lg scale-105`
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 border-white/20 hover:bg-white/20 hover:scale-102'
                }`}
                onClick={() => setCurrentTech(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                  {currentTech === index && (
                    <div className="text-2xl animate-pulse">✨</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revolutionary Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">6</div>
            <div className="text-gray-300">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Infinite Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2027</div>
            <div className="text-gray-300">Future Technology</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Revolutionary</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in the most revolutionary technological transformation in human history. 
            The future is here, and it's more incredible than you ever imagined.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/AdvancedTechRevolution2027"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies →
            </a>
            <a 
              href="/pages/ConsciousnessComputing2026"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Consciousness Computing →
            </a>
            <a 
              href="/pages/QuantumRealityEngine2026"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Quantum Reality →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2027;