import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      description: 'Real-time data processing and predictive analytics powered by advanced AI algorithms.',
      progress: 94,
      color: 'from-purple-500 to-pink-500',
      icon: '🧠',
      features: ['Machine Learning', 'Predictive Modeling', 'Real-time Processing', 'Data Visualization']
    },
    {
      id: 'quantum-sim',
      title: 'Quantum Simulation',
      description: 'Simulate complex quantum systems with unprecedented accuracy and speed.',
      progress: 87,
      color: 'from-cyan-500 to-blue-500',
      icon: '⚛️',
      features: ['Quantum Algorithms', 'Entanglement Processing', 'Superposition Computing', 'Quantum Cryptography']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface',
      description: 'Direct brain-computer communication for seamless human-machine interaction.',
      progress: 92,
      color: 'from-emerald-500 to-teal-500',
      icon: '🧬',
      features: ['Brain-Computer Interface', 'Thought Recognition', 'Neural Feedback', 'Cognitive Enhancement']
    },
    {
      id: 'fusion-energy',
      title: 'Fusion Energy',
      description: 'Clean, unlimited energy source for a sustainable future.',
      progress: 78,
      color: 'from-orange-500 to-red-500',
      icon: '🔥',
      features: ['Plasma Containment', 'Energy Conversion', 'Zero Emissions', 'Infinite Power']
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

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMOS • 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technologies in real-time with interactive demonstrations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-white text-purple-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{demos[activeDemo].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
                    <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">Performance</span>
                    <span className="text-sm opacity-75">{demos[activeDemo].progress}%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${demos[activeDemo].color} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${demos[activeDemo].progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <span className="text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">📊</div>
                    <h4 className="text-xl font-bold mb-2">Live Data Stream</h4>
                    <p className="text-sm opacity-75">Real-time performance metrics</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Processing Speed</span>
                      <span className="text-sm font-mono">{Math.floor(Math.random() * 1000) + 1000} ops/sec</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Accuracy Rate</span>
                      <span className="text-sm font-mono">{demos[activeDemo].progress}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Energy Efficiency</span>
                      <span className="text-sm font-mono">{Math.floor(Math.random() * 20) + 80}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Uptime</span>
                      <span className="text-sm font-mono">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border ${
                activeDemo === index ? 'border-white/50 scale-105' : 'border-white/20'
              } hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{demo.icon}</div>
                <h4 className="text-lg font-bold mb-2">{demo.title}</h4>
                <p className="text-sm opacity-75 mb-4">{demo.description}</p>
                <div className="text-xs font-mono opacity-60">{demo.progress}% efficiency</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            These interactive demos showcase just a fraction of our revolutionary technology capabilities.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;