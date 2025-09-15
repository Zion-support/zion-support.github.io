import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'Experience quantum-enhanced AI processing in real-time',
      icon: '⚛️',
      color: 'from-purple-600 to-pink-600',
      features: ['Quantum Neural Networks', 'Reality Manipulation', 'Consciousness Transfer', 'Energy Generation']
    },
    {
      id: 'transcendent-tech',
      title: 'Transcendent Technology',
      description: 'Explore technologies that transcend current limitations',
      icon: '🌌',
      color: 'from-cyan-600 to-blue-600',
      features: ['Synthetic Biology 2.0', 'Time Dilation', 'Precognition', 'Matter Creation']
    },
    {
      id: 'ultimate-revolution',
      title: 'Ultimate Revolution',
      description: 'Witness the convergence of all technologies',
      icon: '🚀',
      color: 'from-yellow-600 to-orange-600',
      features: ['Universal Consciousness', 'Reality Engine', 'Omniscience', 'Transcendence']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • 2027
          </div>
          <h2 className="text-5xl font-bold mb-4">🌟 Experience the Future</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with revolutionary technologies through our immersive demo experience
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveDemo(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
              <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
            </div>

            {/* Interactive Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Key Features</h4>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-purple-400">Interactive Controls</h4>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🎮 Start Interactive Demo
                  </button>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    📊 View Analytics
                  </button>
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🔬 Deep Dive
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Technology Integration</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${demos[activeDemo].color} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <a href={`/pages/${demos[activeDemo].title.replace(/\s+/g, '')}2027`} className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
            🚀 Explore {demos[activeDemo].title} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2027;