import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "AI Consciousness",
      icon: "🧠",
      description: "Self-aware AI systems with emotional intelligence and conscious decision-making",
      features: ["Self-awareness", "Emotional intelligence", "Ethical reasoning", "Autonomous learning"],
      gradient: "from-purple-600 to-pink-600",
      stats: { accuracy: 98, speed: 0.001, efficiency: 95 }
    },
    {
      id: 2,
      name: "Quantum Reality",
      icon: "⚛️",
      description: "Quantum-powered virtual reality with physics manipulation and consciousness integration",
      features: ["Quantum simulation", "Reality manipulation", "Neural interface", "Dimensional exploration"],
      gradient: "from-indigo-600 to-purple-600",
      stats: { accuracy: 99.7, speed: 0.0001, efficiency: 98 }
    },
    {
      id: 3,
      name: "Neural Interface",
      icon: "🧬",
      description: "Direct brain-computer communication with thought control and cognitive enhancement",
      features: ["Thought control", "Neural enhancement", "Mind communication", "Cognitive augmentation"],
      gradient: "from-emerald-600 to-teal-600",
      stats: { accuracy: 99.2, speed: 0.05, efficiency: 97 }
    },
    {
      id: 4,
      name: "Synthetic Intelligence",
      icon: "🤖",
      description: "Hybrid biological-digital intelligence with unprecedented capabilities",
      features: ["Hybrid intelligence", "Biological integration", "Adaptive learning", "Consciousness transfer"],
      gradient: "from-cyan-600 to-blue-600",
      stats: { accuracy: 97.5, speed: 0.01, efficiency: 96 }
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time metrics
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
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
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Info */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
            <div className={`bg-gradient-to-br ${currentTech.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full`}>
              <div className="text-8xl mb-6 text-center animate-pulse">
                {currentTech.icon}
              </div>
>>>>>>> cursor/create-and-deploy-new-content-cc9d
          </div>
>>>>>>> cursor/create-and-deploy-new-content-6f13
>>>>>>> cursor/create-and-deploy-new-content-c439
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;