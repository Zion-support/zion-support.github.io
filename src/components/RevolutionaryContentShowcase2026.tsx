import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "Advanced Quantum Computing 2026",
      description: "Experience the next generation of quantum computing with revolutionary 2026 solutions that are reshaping computational boundaries.",
      image: "⚡",
      gradient: "from-cyan-500 to-blue-500",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["1000+ Qubit Systems", "Quantum Cryptography", "Molecular Simulation"],
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "Advanced Space Technology 2026",
      description: "Pioneering the future of space exploration with cutting-edge technology making interplanetary travel and colonization a reality.",
      image: "🚀",
      gradient: "from-blue-500 to-purple-500",
      link: "/pages/AdvancedSpaceTech2026",
      features: ["Advanced Propulsion", "Space Habitats", "Satellite Networks"],
      badge: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "Advanced Robotics 2026",
      description: "Experience the future of robotics with revolutionary 2026 systems transforming industries and redefining human-robot collaboration.",
      image: "🤖",
      gradient: "from-cyan-500 to-blue-500",
      link: "/pages/AdvancedRobotics2026",
      features: ["AI-Powered Intelligence", "Humanoid Dexterity", "Human Collaboration"],
      badge: "INNOVATIVE"
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Next-generation artificial intelligence that transcends traditional AI with synthetic consciousness and autonomous decision-making.",
      image: "🧠",
      gradient: "from-purple-500 to-pink-500",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Synthetic Consciousness", "Autonomous Learning", "Creative Problem Solving"],
      badge: "FUTURE"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural interfaces creating unprecedented human-machine symbiosis.",
      image: "⚛️",
      gradient: "from-indigo-500 to-purple-500",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Neural Networks", "Direct Brain Interface", "Consciousness Transfer"],
      badge: "BREAKTHROUGH"
    },
    {
      id: 6,
      title: "Cyber-Physical Systems 2026",
      description: "Advanced integration of physical and digital systems creating intelligent, autonomous, and self-healing infrastructure.",
      image: "🌐",
      gradient: "from-emerald-500 to-teal-500",
      link: "/pages/CyberPhysicalSystems2026",
      features: ["Smart Infrastructure", "Autonomous Systems", "Self-Healing Networks"],
      badge: "ADVANCED"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future Today
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our revolutionary 2026 technology showcase featuring the most advanced innovations in quantum computing, space technology, robotics, and beyond.
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-12 rounded-2xl relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-6">
                          <span className="text-6xl">{item.image}</span>
                          <div>
                            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-2">
                              {item.badge}
                            </div>
                            <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-xl opacity-90 mb-8 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="space-y-3 mb-8">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                        >
                          Explore {item.title.split(' ')[0]} →
                        </a>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-9xl mb-6 opacity-80">{item.image}</div>
                        <div className="text-6xl font-bold opacity-60">2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contentItems.slice(0, 6).map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{item.image}</span>
                <div>
                  <div className="inline-block px-2 py-1 bg-white/20 rounded-full text-xs font-bold mb-1">
                    {item.badge}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">{item.description}</p>
              <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                Explore Now →
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already transforming their industries with our revolutionary 2026 technology solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;