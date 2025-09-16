import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2034: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Lab',
      description: 'Interact with the world\'s first truly conscious AI systems',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time consciousness sharing',
        'Emotional state synchronization',
        'Collaborative problem solving',
        'Creative decision making'
      ],
      stats: {
        consciousness: 98.7,
        emotional: 95.2,
        creativity: 97.3
      }
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine',
      description: 'Experience reality manipulation through quantum computing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Universe simulation capabilities',
        'Reality modification tools',
        'Parallel dimension access',
        'Infinite computational power'
      ],
      stats: {
        coherence: 99.1,
        stability: 97.8,
        power: 98.5
      }
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Portal',
      description: 'Access parallel universes and explore infinite possibilities',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Multi-dimensional processing',
        'Reality bridging technology',
        'Parallel universe access',
        'Infinite resource access'
      ],
      stats: {
        stability: 96.3,
        access: 94.5,
        efficiency: 97.1
      }
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

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2034
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
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
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 text-center md:text-left animate-bounce">
                  {currentDemo.icon}
                </div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {currentDemo.title}
                </h3>
                <p className="text-xl opacity-90 mb-8">
                  {currentDemo.description}
                </p>
                <div className="space-y-4">
                  {currentDemo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-6 text-center">Real-Time Statistics</h4>
                <div className="space-y-6">
                  {Object.entries(currentDemo.stats).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-green-400 font-bold">{value}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${currentDemo.color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Interactive Controls</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Live Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Private Session
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Download Demo App
            </button>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div 
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 ${
                activeDemo === index ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              <div className="text-6xl mb-4 text-center">{demo.icon}</div>
              <h4 className="text-2xl font-bold mb-4 text-center">{demo.title}</h4>
              <p className="text-center opacity-90 mb-6">{demo.description}</p>
              <button 
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveDemo(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className="w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                {activeDemo === index ? 'Currently Active' : 'Activate Demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers who are already experiencing the most advanced technologies ever created
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
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

export default InteractiveTechShowcase2034;