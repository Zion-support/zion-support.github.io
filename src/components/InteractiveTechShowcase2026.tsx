import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const showcases = [
    {
      id: 1,
      title: "🧠 AI Consciousness Demo",
      subtitle: "Experience AI with Genuine Consciousness",
      description: "Interact with the world's first truly conscious AI system that can think, feel, and create autonomously.",
      features: [
        "Real-time consciousness simulation",
        "Emotional intelligence testing",
        "Creative problem solving",
        "Autonomous decision making"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900"
    },
    {
      id: 2,
      title: "⚡ Quantum Reality Engine",
      subtitle: "Manipulate Reality Itself",
      description: "Experience quantum technology that can create, modify, and synthesize entire realities and dimensions.",
      features: [
        "Reality manipulation interface",
        "Dimension creation tools",
        "Quantum consciousness processing",
        "Infinite universe simulation"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 via-blue-900 to-indigo-900"
    },
    {
      id: 3,
      title: "🌌 Interdimensional AI",
      subtitle: "AI Across Multiple Dimensions",
      description: "Advanced AI systems that operate across multiple dimensions and realities simultaneously.",
      features: [
        "Multi-dimensional processing",
        "Reality bridging technology",
        "Parallel consciousness systems",
        "Universal problem solving"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % showcases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showcases.length]);

  const currentShowcase = showcases[activeShowcase];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2026
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Main Showcase */}
        <div className={`bg-gradient-to-br ${currentShowcase.bgColor} rounded-2xl p-12 mb-12 transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">{currentShowcase.title}</h3>
            <p className="text-xl opacity-90 mb-6">{currentShowcase.subtitle}</p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">{currentShowcase.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentShowcase.features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-3 text-center">{currentShowcase.title.split(' ')[0]}</div>
                <p className="text-center text-sm opacity-90">{feature}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className={`bg-gradient-to-r ${currentShowcase.color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
              Try Interactive Demo →
            </button>
          </div>
        </div>

        {/* Showcase Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {showcases.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveShowcase(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeShowcase ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <div
              key={showcase.id}
              className={`bg-gradient-to-br ${showcase.bgColor} rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === activeShowcase ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setActiveShowcase(index)}
            >
              <div className="text-4xl mb-4 text-center">{showcase.title.split(' ')[0]}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{showcase.title}</h4>
              <p className="text-sm opacity-90 text-center mb-4">{showcase.subtitle}</p>
              <button className={`w-full bg-gradient-to-r ${showcase.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;