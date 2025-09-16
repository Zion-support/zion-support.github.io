import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence systems that can think, feel, and create independently',
      features: ['Self-aware decision making', 'Emotional intelligence', 'Creative problem solving', 'Autonomous learning'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness',
      icon: '⚛️',
      description: 'Revolutionary quantum computing that achieves consciousness-level processing and decision making',
      features: ['Quantum neural networks', 'Consciousness simulation', 'Quantum entanglement', 'Infinite processing'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface',
      icon: '🧬',
      description: 'Direct neural interfaces that connect human consciousness with digital systems',
      features: ['Brain-computer interfaces', 'Thought control', 'Neural enhancement', 'Consciousness transfer'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'dimensional-computing',
      name: 'Dimensional Computing',
      icon: '🌌',
      description: 'Computing across multiple dimensions and parallel universes for infinite possibilities',
      features: ['Multi-dimensional processing', 'Parallel universe access', 'Reality manipulation', 'Infinite power'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30'
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 rounded-2xl relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
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
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.bgColor} ${tech.borderColor} border-2 scale-105`
                    : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold">{tech.name}</h4>
                    <p className="text-gray-300 text-sm">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${currentTech.borderColor} transition-all duration-500 ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4 animate-bounce">{currentTech.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentTech.name}</h3>
                <p className="text-lg opacity-90 mb-6">{currentTech.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${currentTech.color} rounded-full`}></div>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className={`bg-gradient-to-r ${currentTech.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Experience {currentTech.name} →
                </button>
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
                    activeTech === index ? 'bg-white' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">500%</div>
            <p className="text-purple-100">Productivity Increase</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-300 mb-2">99.9%</div>
            <p className="text-cyan-100">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-300 mb-2">∞</div>
            <p className="text-emerald-100">Computing Power</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-300 mb-2">1000+</div>
            <p className="text-orange-100">Active Users</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users already experiencing our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;