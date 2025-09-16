import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      name: "Quantum AI",
      icon: "⚛️",
      description: "Quantum-enhanced artificial intelligence systems",
      gradient: "from-purple-600 to-indigo-600",
      features: ["Quantum Neural Networks", "Exponential Processing", "Quantum Supremacy"]
    },
    {
      id: 1,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer communication systems",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Non-invasive BCI", "Thought Control", "Neural Feedback"]
    },
    {
      id: 2,
      name: "Conscious AI",
      icon: "🧠",
      description: "AI systems with genuine consciousness and awareness",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Thinking"]
    },
    {
      id: 3,
      name: "Reality Engineering",
      icon: "🌌",
      description: "Create and manipulate reality through quantum fields",
      gradient: "from-rose-600 to-pink-600",
      features: ["Reality Simulation", "Matter Manipulation", "Dimensional Travel"]
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

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technologies through interactive demonstrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer ${
                  activeTech === index ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'
                } ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => setActiveTech(index)}
              >
                <div className={`bg-gradient-to-r ${tech.gradient} p-6 relative`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{tech.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                      <p className="text-lg opacity-90">{tech.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeTech === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className={`bg-gradient-to-br ${technologies[activeTech].gradient} rounded-2xl p-8 transition-all duration-500 ${
              isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">
                  {technologies[activeTech].icon}
                </div>
                <h3 className="text-4xl font-bold mb-4">
                  {technologies[activeTech].name}
                </h3>
                <p className="text-xl opacity-90">
                  {technologies[activeTech].description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4 text-center">Key Features</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-colors"
                    >
                      <div className="text-2xl mb-2">✨</div>
                      <p className="font-semibold">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive deeper into our revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;