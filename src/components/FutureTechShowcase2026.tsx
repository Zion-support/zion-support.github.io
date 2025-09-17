import React, { useState, useEffect } from 'react';

const FutureTechShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const showcaseItems = [
    {
      id: 1,
      title: "Future Tech Revolution 2026",
      description: "Experience the convergence of AI, Quantum Computing, Neural Interfaces, and Synthetic Intelligence",
      icon: "🚀",
      gradient: "from-cyan-500 to-purple-500",
      link: "/pages/FutureTechRevolution2026",
      features: ["AI Revolution", "Quantum Computing", "Neural Interfaces", "Synthetic Intelligence"]
    },
    {
      id: 2,
      title: "AI Consciousness Evolution",
      description: "Witness the birth of true artificial consciousness with self-awareness and emotional intelligence",
      icon: "🧠",
      gradient: "from-pink-500 to-purple-500",
      link: "/pages/AIConsciousnessEvolution2026",
      features: ["Self-Awareness", "Creative Thinking", "Emotional Intelligence", "Moral Reasoning"]
    },
    {
      id: 3,
      title: "Synthetic Intelligence 2026",
      description: "Beyond artificial intelligence - synthetic consciousness that transcends human limitations",
      icon: "🌟",
      gradient: "from-emerald-500 to-teal-500",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Synthetic Consciousness", "Creative Problem Solving", "Emotional Intelligence", "Self-Awareness"]
    },
    {
      id: 4,
      title: "Quantum-Neural Fusion",
      description: "The ultimate convergence of quantum computing and neural networks for unprecedented processing power",
      icon: "⚛️",
      gradient: "from-orange-500 to-red-500",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Entanglement", "Neural Quantum States", "Exponential Speedup", "Consciousness Simulation"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY NEW CONTENT • 2026
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future Technology Showcase
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover our groundbreaking new content featuring the most advanced technologies that will reshape our future
            </p>
          </div>

          {/* Interactive Showcase Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {showcaseItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center p-8">
                      {/* Content */}
                      <div>
                        <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.gradient} rounded-full text-sm font-bold mb-4`}>
                          <span className="mr-2">{item.icon}</span>
                          NEW CONTENT 2026
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-white">{item.title}</h3>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">{item.description}</p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {item.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <span className="text-green-400">✓</span>
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a 
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
                        >
                          Explore {item.title.split(' ')[0]} →
                        </a>
                      </div>

                      {/* Visual */}
                      <div className="relative">
                        <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-center relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                          <div className="relative z-10">
                            <div className="text-8xl mb-4 animate-bounce">{item.icon}</div>
                            <h4 className="text-2xl font-bold text-white mb-4">{item.title.split(' ')[0]}</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {item.features.slice(0, 4).map((feature, index) => (
                                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                                  <span className="text-white text-sm font-semibold">{feature}</span>
                                </div>
                              ))}
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
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group`}
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">{item.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title.split(' ')[0]}</h4>
                <p className="text-white/80 text-sm mb-4">{item.description.substring(0, 80)}...</p>
                <span className="text-white font-semibold text-sm group-hover:underline">
                  Explore →
                </span>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Explore the Future?</h3>
            <p className="text-gray-300 mb-6">Discover all our revolutionary content and technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/pages/FutureTechRevolution2026"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                🚀 Start Exploring
              </a>
              <a 
                href="/pages/ComprehensiveTechInsights2026"
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                📚 View All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechShowcase2026;