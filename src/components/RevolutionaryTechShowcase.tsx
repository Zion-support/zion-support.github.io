import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const technologies = [
    {
      id: 1,
      title: "Advanced AI Transformation",
      description: "Revolutionary AI systems with autonomous agents and intelligent automation",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedAITransformation2025",
      features: ["Autonomous AI Agents", "Intelligent Automation", "Neural Business Intelligence"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Exponential computing power with quantum technology solving impossible problems",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2025",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling thought-controlled computing",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2025",
      features: ["Thought Control", "Cognitive Enhancement", "Neural Networks"]
    },
    {
      id: 4,
      title: "Next-Gen Tech Showcase",
      description: "Comprehensive showcase of cutting-edge technologies reshaping our world",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      link: "/pages/NextGenTechShowcase2025",
      features: ["AI & Machine Learning", "Quantum Computing", "Neural Interfaces"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [technologies.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY SHOWCASE • 2025-2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Experience the Future</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our groundbreaking technologies that are reshaping industries and creating new possibilities
          </p>
        </div>

        {/* Interactive Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {technologies.map((tech) => (
                <div key={tech.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center">{tech.icon}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center">{tech.title}</h3>
                        <p className="text-xl opacity-90 mb-8 text-center">
                          {tech.description}
                        </p>
                        <div className="space-y-3 mb-8">
                          {tech.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-center">
                          <a 
                            href={tech.link}
                            className={`inline-block bg-gradient-to-r ${tech.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                          >
                            Explore {tech.title} →
                          </a>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/20">
                        <h4 className="text-2xl font-bold mb-6 text-center">Key Benefits</h4>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</span>
                            <span>Revolutionary Performance</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</span>
                            <span>Cutting-Edge Technology</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</span>
                            <span>Future-Ready Solutions</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</span>
                            <span>Proven Results</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <a
                key={tech.id}
                href={tech.link}
                className={`bg-gradient-to-r ${tech.color} text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="font-semibold text-sm">{tech.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase;