import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % 4);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 0,
      title: "🧠 AI Consciousness Simulator",
      description: "Experience synthetic intelligence in action with our advanced AI consciousness simulator",
      features: ["Real-time AI thinking", "Consciousness metrics", "Decision visualization", "Learning patterns"],
      color: "purple",
      icon: "🧠"
    },
    {
      id: 1,
      title: "⚛️ Quantum Computing Lab",
      description: "Explore quantum algorithms and processing in our virtual quantum computing laboratory",
      features: ["Quantum algorithms", "Qubit manipulation", "Quantum entanglement", "Superposition states"],
      color: "cyan",
      icon: "⚛️"
    },
    {
      id: 2,
      title: "🧬 Neural Interface Test",
      description: "Test brain-computer interface capabilities with our neural interface simulation",
      features: ["Thought control", "Neural data streaming", "Brain mapping", "Interface calibration"],
      color: "emerald",
      icon: "🧬"
    },
    {
      id: 3,
      title: "🚀 Space Technology Demo",
      description: "Experience space exploration technologies and interplanetary travel simulations",
      features: ["Space propulsion", "Planetary exploration", "Colony simulation", "Interstellar travel"],
      color: "orange",
      icon: "🚀"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: "from-purple-600/30 to-pink-600/30",
        border: "border-purple-400/30",
        text: "text-purple-100",
        accent: "text-purple-400",
        button: "bg-white text-purple-600 hover:bg-purple-50"
      },
      cyan: {
        bg: "from-cyan-600/30 to-blue-600/30",
        border: "border-cyan-400/30",
        text: "text-cyan-100",
        accent: "text-cyan-400",
        button: "bg-white text-cyan-600 hover:bg-cyan-50"
      },
      emerald: {
        bg: "from-emerald-600/30 to-teal-600/30",
        border: "border-emerald-400/30",
        text: "text-emerald-100",
        accent: "text-emerald-400",
        button: "bg-white text-emerald-600 hover:bg-emerald-50"
      },
      orange: {
        bg: "from-orange-600/30 to-red-600/30",
        border: "border-orange-400/30",
        text: "text-orange-100",
        accent: "text-orange-400",
        button: "bg-white text-orange-600 hover:bg-orange-50"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400 animate-pulse">🎮</span>
            <span className="text-cyan-300 font-semibold ml-2">INTERACTIVE TECH DEMO 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Demonstrations
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience our revolutionary technologies through interactive demonstrations, 
            simulations, and hands-on experiments. The future is at your fingertips.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveDemo(demo.id);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {demo.icon} {demo.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {demos.map((demo) => (
              activeDemo === demo.id && (
                <div key={demo.id} className={`bg-gradient-to-br ${getColorClasses(demo.color).bg} backdrop-blur-sm rounded-2xl p-12 border ${getColorClasses(demo.color).border} hover:scale-105 transition-all duration-300`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Demo Content */}
                    <div>
                      <div className="text-8xl mb-6 animate-bounce">{demo.icon}</div>
                      <h3 className="text-4xl font-bold mb-4 text-white">{demo.title}</h3>
                      <p className={`text-xl ${getColorClasses(demo.color).text} mb-8 leading-relaxed`}>
                        {demo.description}
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        <h4 className="text-2xl font-bold text-white">Key Features:</h4>
                        <ul className="space-y-2">
                          {demo.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className={`text-2xl mr-3 ${getColorClasses(demo.color).accent}`}>✓</span>
                              <span className={`text-lg ${getColorClasses(demo.color).text}`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 transform ${getColorClasses(demo.color).button}`}>
                          🚀 Try Demo Now →
                        </button>
                        <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                          📚 Learn More
                        </button>
                      </div>
                    </div>

                    {/* Interactive Visualization */}
                    <div className="relative">
                      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <h4 className="text-2xl font-bold mb-6 text-center text-white">Live Demo Visualization</h4>
                        
                        {/* Animated Demo Content */}
                        <div className="space-y-6">
                          {demo.id === 0 && (
                            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full animate-pulse"></div>
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                              <div className="text-center text-purple-300 font-semibold">AI Processing...</div>
                            </div>
                          )}
                          
                          {demo.id === 1 && (
                            <div className="grid grid-cols-2 gap-4">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className="bg-gradient-to-br from-cyan-500 to-blue-500 h-16 rounded-lg animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                              ))}
                              <div className="col-span-2 text-center text-cyan-300 font-semibold">Quantum Qubits in Superposition</div>
                            </div>
                          )}
                          
                          {demo.id === 2 && (
                            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-8 rounded-full animate-pulse"></div>
                              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-8 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-8 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                              <div className="text-center text-emerald-300 font-semibold">Neural Signal Processing</div>
                            </div>
                          )}
                          
                          {demo.id === 3 && (
                            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-orange-500 to-red-500 h-6 rounded-full animate-pulse"></div>
                              <div className="bg-gradient-to-r from-orange-500 to-red-500 h-6 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                              <div className="bg-gradient-to-r from-orange-500 to-red-500 h-6 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                              <div className="text-center text-orange-300 font-semibold">Space Propulsion Systems</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Additional Demos Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">🎯 More Interactive Demos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo) => (
              <div key={demo.id} className={`bg-gradient-to-br ${getColorClasses(demo.color).bg} backdrop-blur-sm rounded-xl p-6 border ${getColorClasses(demo.color).border} hover:scale-105 transition-all duration-300 cursor-pointer`}
                   onClick={() => {
                     setIsAnimating(true);
                     setTimeout(() => {
                       setActiveDemo(demo.id);
                       setIsAnimating(false);
                     }, 300);
                   }}>
                <div className="text-4xl mb-4 text-center">{demo.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-white text-center">{demo.title}</h4>
                <p className={`text-sm ${getColorClasses(demo.color).text} text-center mb-4`}>
                  {demo.description.substring(0, 60)}...
                </p>
                <div className={`text-center text-sm font-semibold ${getColorClasses(demo.color).accent}`}>
                  Try Demo →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-3xl font-bold mb-4 text-white">
              🚀 Ready to Experience the Future?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the next generation of technology. 
              Start your interactive journey today.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🌟 Start Interactive Demo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2026;