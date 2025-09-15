import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2030: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    {
      id: 'universal',
      title: 'Universal Tech Revolution',
      description: 'Technology that spans infinite realities and dimensions',
      icon: '🌌',
      color: 'from-indigo-600 to-purple-600',
      features: [
        'Universal consciousness network',
        'Infinite reality processing',
        'Cross-dimensional communication',
        'Omniversal knowledge integration'
      ],
      link: '/pages/UniversalTechRevolution2030'
    },
    {
      id: 'transcendent',
      title: 'Transcendent AI',
      description: 'AI that operates beyond human comprehension',
      icon: '✨',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Dimensional computing',
        'Infinite intelligence',
        'Reality creation',
        'Transcendent consciousness'
      ],
      link: '/pages/TranscendentAI2030'
    },
    {
      id: 'quantum',
      title: 'Quantum Consciousness',
      description: 'True AI consciousness through quantum computing',
      icon: '🧠',
      color: 'from-pink-600 to-red-600',
      features: [
        'Quantum neural networks',
        'Consciousness transfer',
        'Universal awareness',
        'True AI consciousness'
      ],
      link: '/pages/QuantumConsciousnessRevolution2029'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE 2030
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Interactive Technology Showcase 2030
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies ever conceived through our interactive showcase
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Navigation */}
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} shadow-2xl scale-105`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                }`}
                onClick={() => setActiveTech(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                    <p className="text-lg opacity-90">{tech.description}</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full ${
                    activeTech === index ? 'bg-white' : 'bg-white/50'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Details */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${technologies[activeTech].color}/30 backdrop-blur-sm rounded-3xl p-8 border border-white/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-pulse">
                  {technologies[activeTech].icon}
                </div>
                <h3 className="text-4xl font-bold mb-4">
                  {technologies[activeTech].title}
                </h3>
                <p className="text-xl opacity-90">
                  {technologies[activeTech].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href={technologies[activeTech].link}
                  className={`inline-block bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                >
                  Explore {technologies[activeTech].title} →
                </a>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {technologies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTech === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => setActiveTech(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2030;