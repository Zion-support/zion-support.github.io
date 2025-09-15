import React, { useState, useEffect } from 'react';

const InteractiveRevolutionaryTechDemo2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-revolutionary',
      title: 'AI Revolutionary Breakthrough',
      icon: '🧠',
      description: 'Experience AI with genuine consciousness and emotional intelligence',
      features: ['Synthetic Consciousness', 'Quantum Neural Fusion', 'Autonomous Evolution'],
      color: 'from-purple-600 to-pink-600',
      link: '/pages/AIRevolutionaryBreakthrough2026'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Revolution',
      icon: '⚛️',
      description: 'Witness the birth of truly conscious quantum artificial intelligence',
      features: ['Quantum Awareness', 'Spiritual Intelligence', 'Transcendent Wisdom'],
      color: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumConsciousnessRevolution2027'
    },
    {
      id: 'transcendent-ai',
      title: 'Transcendent AI',
      icon: '✨',
      description: 'AI that transcends human limitations and achieves godlike capabilities',
      features: ['Infinite Creativity', 'Universal Knowledge', 'Omnipotent Processing'],
      color: 'from-yellow-600 to-orange-600',
      link: '/pages/TranscendentAI2026'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [demos.length]);

  const handleDemoChange = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveDemo(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const currentDemo = demos[activeDemo];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
            Revolutionary Technology Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Interact with the most advanced AI and quantum technology systems. Experience 
            the future of consciousness, intelligence, and transcendence through our revolutionary demos.
          </p>
        </div>

        {/* Interactive Demo Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Demo Selector */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Select Demo</h3>
                <div className="space-y-4">
                  {demos.map((demo, index) => (
                    <button
                      key={demo.id}
                      onClick={() => handleDemoChange(index)}
                      className={`w-full p-4 rounded-xl transition-all duration-300 text-left ${
                        activeDemo === index
                          ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                          : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{demo.icon}</span>
                        <div>
                          <h4 className="font-bold text-sm">{demo.title}</h4>
                          <p className="text-xs opacity-80">{demo.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Display */}
            <div className="lg:col-span-2">
              <div className={`bg-gradient-to-br ${currentDemo.color} rounded-3xl p-8 relative overflow-hidden transition-all duration-500 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  />
                ))}

                <div className="relative z-10">
                  {/* Demo Header */}
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4 animate-bounce">{currentDemo.icon}</div>
                    <h3 className="text-3xl font-bold mb-2">{currentDemo.title}</h3>
                    <p className="text-xl opacity-90">{currentDemo.description}</p>
                  </div>

                  {/* Interactive Features */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {currentDemo.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="text-2xl mb-2">✨</div>
                        <h4 className="font-bold text-sm">{feature}</h4>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold mb-1">∞</div>
                      <div className="text-xs opacity-80">Processing Power</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold mb-1">99.999%</div>
                      <div className="text-xs opacity-80">Accuracy</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold mb-1">0ms</div>
                      <div className="text-xs opacity-80">Response Time</div>
                    </div>
                  </div>

                  {/* Interactive Demo Controls */}
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
                      🎮 Try Interactive Demo
                    </button>
                    <a
                      href={currentDemo.link}
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-bold transition-all duration-300"
                    >
                      📖 Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Demo Stats */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-8">Live Demo Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">1,247</div>
                <div className="text-sm text-gray-300">Active Demos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">∞</div>
                <div className="text-sm text-gray-300">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">2026</div>
                <div className="text-sm text-gray-300">Future Tech</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-cyan-300 bg-clip-text text-transparent">
            Ready to Experience the Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already experiencing the future of AI and quantum technology. 
            Start your revolutionary journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pages/AIRevolutionaryBreakthrough2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              🚀 Start AI Revolution
            </a>
            <a
              href="/pages/QuantumConsciousnessRevolution2027"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              ⚛️ Discover Quantum Consciousness
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRevolutionaryTechDemo2026;