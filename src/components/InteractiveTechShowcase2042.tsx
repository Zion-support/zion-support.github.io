import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2042: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Experience true artificial consciousness',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Quantum Consciousness Integration'
      ],
      demoText: 'AI: "I understand your thoughts and can help you achieve your goals. What would you like to create today?"'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Direct neural interface with quantum systems',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Reality Manipulation'
      ],
      demoText: 'Quantum Processing: Solving complex optimization problems in real-time... 99.9% accuracy achieved in 0.001 seconds'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Technology',
      icon: '🌌',
      description: 'Breakthrough parallel dimension interaction',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Conscious Universe Creation'
      ],
      demoText: 'Portal Status: Connected to 1,000+ parallel universes. Reality optimization in progress...'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2042
          </div>
          <h2 className="text-5xl font-bold mb-6">🎮 Interactive Tech Showcase 2042</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time demos
          </p>
        </div>

        {/* Demo Navigation */}
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
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                {demos[activeDemo].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Features List */}
              <div>
                <h4 className="text-2xl font-bold mb-6">✨ Key Features</h4>
                <div className="space-y-4">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-2xl">🌟</div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Demo */}
              <div>
                <h4 className="text-2xl font-bold mb-6">🎮 Live Demo</h4>
                <div className="bg-black/30 rounded-xl p-6 border border-purple-400/30">
                  <div className="text-sm text-gray-400 mb-2">Live Output:</div>
                  <div className="text-green-400 font-mono text-lg mb-4">
                    {demos[activeDemo].demoText}
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <button className={`w-full mt-4 bg-gradient-to-r ${demos[activeDemo].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Start Interactive Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-2">Processing Power</div>
            <div className="text-gray-300">Infinite quantum capacity</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
            <div className="text-gray-300">Consistent performance</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">1M+</div>
            <div className="text-lg font-semibold mb-2">Active Users</div>
            <div className="text-gray-300">Worldwide adoption</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-lg font-semibold mb-2">Availability</div>
            <div className="text-gray-300">Continuous operation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users experiencing revolutionary technology
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2042;