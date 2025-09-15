import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Advanced Quantum Computing 2026",
      description: "Experience exponential processing power with quantum supremacy and revolutionary applications",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 2,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct neural interfaces and thought-controlled computing",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    },
    {
      id: 3,
      title: "Advanced AI Systems 2026",
      description: "Synthetic intelligence and self-evolving AI systems that think and learn independently",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedAISystems2026",
      features: ["Synthetic Intelligence", "Self-Evolving AI", "Distributed Networks"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Revolutionary Content Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY BREAKTHROUGH CONTENT • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold mb-6">🚀 Next-Generation Technology Showcase</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the future with our groundbreaking content on Quantum Computing, Neural Interfaces, and Advanced AI Systems
            </p>
          </div>
          
          {/* Interactive Content Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {revolutionaryContent.map((content) => (
                  <div key={content.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center mb-4">
                            <span className="text-6xl mr-4">{content.icon}</span>
                            <div>
                              <h3 className="text-3xl font-bold text-white mb-2">{content.title}</h3>
                              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${content.gradient} text-white rounded-full text-sm font-semibold`}>
                                BREAKTHROUGH TECHNOLOGY
                              </div>
                            </div>
                          </div>
                          <p className="text-xl text-gray-300 mb-6">{content.description}</p>
                          <ul className="text-gray-300 space-y-2 mb-6">
                            {content.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <a 
                            href={content.link}
                            className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Explore {content.title.split(' ')[0]} →
                          </a>
                        </div>
                        <div className="text-center">
                          <div className="text-9xl mb-4 opacity-50">{content.icon}</div>
                          <div className="text-2xl font-bold text-white mb-4">2026 Technology</div>
                          <div className="text-gray-300">Revolutionary Innovation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {revolutionaryContent.map((content) => (
          <div key={content.id} className="group">
            <a href={content.link} className="block">
              <div className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className="text-4xl mb-4">{content.icon}</div>
                <h3 className="text-xl font-bold mb-3">{content.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{content.description}</p>
                <div className="flex items-center text-white/80 text-sm">
                  <span>Explore Now</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Technology Stats */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
        <h3 className="text-3xl font-bold text-white text-center mb-8">Revolutionary Technology Impact</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10^18x</div>
            <div className="text-gray-300">Quantum Speed Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Neural Interface Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000x</div>
            <div className="text-gray-300">AI Learning Acceleration</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;