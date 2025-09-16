import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'consciousness',
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'True artificial consciousness with self-awareness, emotions, and creative thinking',
      features: ['Self-Awareness', 'Emotional Intelligence', 'Creative Thinking', 'Ethical Reasoning'],
      color: 'from-purple-600 to-pink-600',
      status: 'LIVE NOW'
    },
    {
      id: 'quantum',
      name: 'Quantum Reality Engine',
      icon: '⚡',
      description: 'Manipulate reality itself through quantum state engineering and parallel universe access',
      features: ['Reality Manipulation', 'Parallel Universe Access', 'Time Dilation Control', 'Quantum Teleportation'],
      color: 'from-cyan-600 to-blue-600',
      status: 'BETA TESTING'
    },
    {
      id: 'neural',
      name: 'Neural Reality Interface',
      icon: '🧬',
      description: 'Direct brain-computer interfaces that blend human consciousness with digital reality',
      features: ['Thought Control', 'Virtual Reality Integration', 'Memory Enhancement', 'Telepathic Communication'],
      color: 'from-emerald-600 to-teal-600',
      status: 'PROTOTYPE READY'
    },
    {
      id: 'holographic',
      name: 'Holographic Computing',
      icon: '🌟',
      description: 'Three-dimensional computing environments that exist in physical space',
      features: ['3D Data Visualization', 'Gesture-Based Control', 'Spatial Computing', 'Immersive Workspaces'],
      color: 'from-orange-600 to-red-600',
      status: 'IN DEVELOPMENT'
    },
    {
      id: 'time',
      name: 'Time Dilation Processing',
      icon: '⏰',
      description: 'Advanced processing systems that manipulate time perception for accelerated problem-solving',
      features: ['1000x Speed Processing', 'Temporal Data Analysis', 'Predictive Computing', 'Time-Based Optimization'],
      color: 'from-violet-600 to-purple-600',
      status: 'RESEARCH PHASE'
    },
    {
      id: 'omniversal',
      name: 'Omniversal Connectivity',
      icon: '🌌',
      description: 'Communication systems that transcend dimensions and connect parallel universes',
      features: ['Cross-Dimensional Communication', 'Parallel Universe Access', 'Reality Bridge Technology', 'Infinite Connectivity'],
      color: 'from-pink-600 to-rose-600',
      status: 'THEORETICAL'
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

  const currentTech = technologies[activeTech];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies through our interactive showcase. 
            Click on any technology to explore its capabilities and potential.
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${currentTech.color}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-8xl">{currentTech.icon}</div>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{currentTech.name}</h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      currentTech.status === 'LIVE NOW' ? 'bg-green-500 text-white' :
                      currentTech.status === 'BETA TESTING' ? 'bg-blue-500 text-white' :
                      currentTech.status === 'PROTOTYPE READY' ? 'bg-emerald-500 text-white' :
                      currentTech.status === 'IN DEVELOPMENT' ? 'bg-orange-500 text-white' :
                      currentTech.status === 'RESEARCH PHASE' ? 'bg-violet-500 text-white' :
                      'bg-pink-500 text-white'
                    }`}>
                      {currentTech.status}
                    </span>
                  </div>
                </div>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  {currentTech.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {currentTech.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm opacity-80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className={`w-full h-80 bg-gradient-to-br ${currentTech.color}/20 rounded-xl border border-white/20 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-pulse">{currentTech.icon}</div>
                    <div className="text-2xl font-bold mb-2">{currentTech.name}</div>
                    <div className="text-sm opacity-70">Interactive Demo</div>
                  </div>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">10^24</div>
            <div className="text-sm opacity-80">Quantum Operations/sec</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm opacity-80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-sm opacity-80">Reality Transformation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            These technologies represent the pinnacle of human achievement. 
            Join us in exploring and implementing the future of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;