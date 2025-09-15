import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2026',
      description: 'Experience conscious AI with self-awareness and creative intelligence',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      features: ['Conscious AI', 'Emotional Intelligence', 'Creative AI', 'Autonomous Decision Making'],
      link: '/pages/AIRevolution2026'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution',
      description: 'Exponential computing power that solves impossible problems',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Supremacy', 'Molecular Simulation', 'Quantum Cryptography', 'Quantum AI'],
      link: '/pages/QuantumComputingRevolution2026'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Revolution',
      description: 'Direct mind-machine connection for thought-controlled technology',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Thought Control', 'Neural Enhancement', 'Brain-Computer Interface', 'Mind-to-Mind Communication'],
      link: '/pages/NeuralInterfaceRevolution2026'
    },
    {
      id: 'tech-trends',
      title: 'Technology Trends 2026',
      description: 'Comprehensive insights into the future of technology',
      icon: '📈',
      color: 'from-orange-600 to-red-600',
      features: ['AI Revolution', 'Quantum Computing', 'Neural Interfaces', 'Emerging Technologies'],
      link: '/pages/TechnologyTrends2026'
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

  const handleTechClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTech(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase</h2>
          <p className="text-xl opacity-90">Click on any technology to explore its capabilities</p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl mr-4">{technologies[activeTech].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{technologies[activeTech].title}</h3>
                    <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies[activeTech].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={technologies[activeTech].link}
                  className={`inline-block bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore {technologies[activeTech].title} →
                </a>
              </div>

              <div className="relative">
                <div className={`bg-gradient-to-br ${technologies[activeTech].color} rounded-xl p-8 text-center`}>
                  <div className="text-8xl mb-4 animate-pulse">{technologies[activeTech].icon}</div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                  <p className="text-lg opacity-90 mb-6">
                    Experience this technology in action with our interactive demonstrations
                  </p>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                    Launch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-purple-400">300%</div>
            <div className="text-sm opacity-80">Productivity Increase</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-cyan-400">10^15</div>
            <div className="text-sm opacity-80">Operations/Second</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">99.9%</div>
            <div className="text-sm opacity-80">Accuracy Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-orange-400">2026</div>
            <div className="text-sm opacity-80">Future Ready</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;