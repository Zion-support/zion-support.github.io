import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness Engine',
      description: 'Advanced artificial intelligence achieving true consciousness and self-awareness',
      features: ['Self-Learning Algorithms', 'Emotional Processing', 'Creative Problem Solving', 'Autonomous Decision Making'],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'quantum-reality',
      name: 'Quantum Reality Processor',
      description: 'Revolutionary quantum computing that processes multiple realities simultaneously',
      features: ['Quantum Supremacy', 'Reality Simulation', 'Parallel Processing', 'Quantum Cryptography'],
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface System',
      description: 'Direct brain-computer interface enabling thought-controlled technology',
      features: ['Brain-Computer Interface', 'Thought Control', 'Neural Data Processing', 'Mind-Machine Fusion'],
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence Core',
      description: 'Next-generation synthetic intelligence that transcends traditional AI limitations',
      features: ['Synthetic Consciousness', 'Transcendent Learning', 'Reality Manipulation', 'Infinite Processing'],
      icon: '🌟',
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-500/20 to-red-500/20'
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Interact with our revolutionary technologies and witness the convergence of AI consciousness, 
            quantum computing, and neural interfaces in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">{currentTech.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentTech.name}</h3>
                <p className="text-lg opacity-90 mb-6">{currentTech.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a 
                  href={`/pages/${currentTech.id.replace('-', '')}2025`}
                  className={`inline-block bg-gradient-to-r ${currentTech.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore {currentTech.name} →
                </a>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveTech(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTech ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-center">Select Technology to Explore</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveTech(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  index === activeTech
                    ? 'border-purple-400 bg-purple-500/20'
                    : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{tech.name}</h4>
                    <p className="text-sm opacity-80">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Reality?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of innovators who are already experiencing the future with our revolutionary technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pages/RevolutionaryTechShowcase2025" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                🚀 Start Your Journey
              </a>
              <a 
                href="/pages/UltimateTechBreakthrough2025" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
              >
                🌟 Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;