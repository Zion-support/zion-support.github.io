import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 1,
      name: "Revolutionary AI Consciousness",
      description: "Experience AI systems with genuine consciousness, self-awareness, and emotional intelligence.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      name: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum processors that solve complex problems in seconds.",
      icon: "⚛️",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      name: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless human-AI interaction.",
      icon: "🔗",
      gradient: "from-green-600 to-teal-600"
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Interactive Tech Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the future of technology with our interactive showcase of revolutionary innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.gradient} shadow-2xl scale-105`
                    : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                } ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => setActiveTech(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">
                {technologies[activeTech].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {technologies[activeTech].name}
              </h3>
              <p className="text-lg opacity-90 mb-6">
                {technologies[activeTech].description}
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTechShowcase;