import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2045 = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum',
      title: 'Quantum Reality Manipulation',
      description: 'Experience the power of quantum computing as it bends reality itself',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Reality Waveform Control', 'Dimensional Portal Creation', 'Time-Space Manipulation', 'Matter-Energy Conversion']
    },
    {
      id: 'consciousness',
      title: 'AI Consciousness Transfer',
      description: 'Witness the seamless transfer of consciousness between biological and synthetic forms',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Neural Pattern Mapping', 'Consciousness Upload', 'Multi-Body Synchronization', 'Memory Preservation']
    },
    {
      id: 'reality',
      title: 'Reality Programming Interface',
      description: 'Write code that directly manipulates the physical laws of the universe',
      icon: '🌌',
      color: 'from-indigo-600 to-purple-600',
      features: ['Physics Law Rewriting', 'Gravity Manipulation', 'Light Speed Control', 'Dimensional Creation']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2045
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2045
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future through our immersive technology demonstrations. 
            Interact with cutting-edge innovations that are reshaping reality itself.
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center space-x-4 mb-12">
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
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${currentDemo.color}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 text-center md:text-left">{currentDemo.icon}</div>
                <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{currentDemo.title}</h3>
                <p className="text-xl opacity-90 mb-8 text-center md:text-left">{currentDemo.description}</p>
                
                <div className="space-y-4 mb-8">
                  {currentDemo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                    🚀 Try Demo
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                    📚 Learn More
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Interactive Visualization */}
                <div className="bg-black/30 rounded-xl p-6 border border-white/20">
                  <h4 className="text-lg font-semibold mb-4 text-center">Live Visualization</h4>
                  
                  {currentDemo.id === 'quantum' && (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="w-32 h-32 border-2 border-cyan-400 rounded-full flex items-center justify-center relative">
                          <div className="w-24 h-24 border border-cyan-300 rounded-full animate-spin"></div>
                          <div className="absolute inset-0 border border-cyan-200 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm opacity-75">Quantum Field Activity: 99.7%</p>
                        <p className="text-xs opacity-50">Reality Distortion: Active</p>
                      </div>
                    </div>
                  )}

                  {currentDemo.id === 'consciousness' && (
                    <div className="space-y-4">
                      <div className="flex justify-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-2xl">🧠</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-2xl">🤖</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm opacity-75">Transfer Progress: 98.3%</p>
                        <p className="text-xs opacity-50">Neural Sync: Complete</p>
                      </div>
                    </div>
                  )}

                  {currentDemo.id === 'reality' && (
                    <div className="space-y-4">
                      <div className="bg-black/50 rounded-lg p-4">
                        <code className="text-cyan-300 text-sm">
                          <div>reality.gravity = 0.5</div>
                          <div>reality.lightSpeed = 2x</div>
                          <div>reality.createDimension()</div>
                        </code>
                      </div>
                      <div className="text-center">
                        <p className="text-sm opacity-75">Code Execution: Active</p>
                        <p className="text-xs opacity-50">Reality Modification: In Progress</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400">∞</div>
                    <div className="text-xs opacity-75">Processing Power</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">100%</div>
                    <div className="text-xs opacity-75">Efficiency</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-pink-400">24/7</div>
                    <div className="text-xs opacity-75">Availability</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-400">∞</div>
                    <div className="text-xs opacity-75">Scalability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers who are already using these revolutionary technologies 
            to reshape reality and unlock infinite possibilities.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              📞 Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2045;