import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Quantum AI Processing",
      description: "Revolutionary quantum computing meets artificial intelligence for unprecedented processing power",
      icon: "⚡",
      features: ["1000x faster processing", "Quantum neural networks", "Complex optimization", "Real-time analysis"],
      color: "from-cyan-600 to-blue-600",
      status: "In Development"
    },
    {
      name: "Reality Manipulation Engine",
      description: "Advanced technology for manipulating physical reality at the quantum level",
      features: ["Quantum field manipulation", "Matter transformation", "Dimensional interfaces"],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      status: "Experimental"
    },
    {
      name: "Synthetic Intelligence",
      description: "Artificial intelligence that surpasses human cognitive capabilities",
      features: ["Superhuman reasoning", "Advanced pattern recognition", "Autonomous learning"],
      icon: "🤖",
      color: "from-green-600 to-teal-600",
      status: "Active"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const currentTech = technologies[activeTech];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2025
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2025
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that are reshaping our world through interactive demonstrations and real-time showcases.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            {/* Technology Display */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentTech.icon}</div>
                <h2 className="text-4xl font-bold mb-4">{currentTech.name}</h2>
                <p className="text-xl opacity-90 mb-6">{currentTech.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  {currentTech.status}
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="text-2xl mb-3">✨</div>
                    <h3 className="text-lg font-semibold mb-2">{feature}</h3>
                  </div>
                ))}
              </div>

              {/* Interactive Demo Button */}
              <div className="text-center">
                <button className={`bg-gradient-to-r ${currentTech.color} px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                  Launch Interactive Demo →
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveTech(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeTech 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  index === activeTech ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveTech(index);
                    setIsAnimating(false);
                  }, 300);
                }}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm opacity-90 mb-4">{tech.description}</p>
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${tech.color} rounded-full text-xs font-semibold`}>
                  {tech.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in exploring these revolutionary technologies and be part of the next generation of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;