import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🧠 Synthetic Intelligence 2026",
      description: "Beyond artificial intelligence - synthetic consciousness that transcends human limitations",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚛️ Quantum-Neural Fusion",
      description: "The ultimate convergence of consciousness, quantum mechanics, and neural networks",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      title: "🧬 Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless human-machine integration",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      title: "🚀 Space Technology Innovation",
      description: "Revolutionary space technologies enabling interplanetary exploration and colonization",
      link: "/pages/SpaceTechInnovation2026",
      gradient: "from-orange-600 to-red-600",
      icon: "🚀"
    },
    {
      title: "🤖 Advanced AI Systems",
      description: "Next-generation artificial intelligence systems with unprecedented capabilities",
      link: "/pages/AdvancedAISystems2026",
      gradient: "from-violet-600 to-purple-600",
      icon: "🤖"
    },
    {
      title: "🧬 Biotech Revolution",
      description: "Advanced biotechnology enabling human enhancement and longevity",
      link: "/pages/AdvancedBiotechRevolution2026",
      gradient: "from-pink-600 to-rose-600",
      icon: "🧬"
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
              <span className="text-cyan-400 animate-pulse">✨</span>
              <span className="text-cyan-300 font-semibold ml-2">REVOLUTIONARY CONTENT SHOWCASE 2026</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              🌟 Experience the Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our most revolutionary content featuring cutting-edge AI, Quantum Computing, 
              Neural Interfaces, and breakthrough technologies that are reshaping our world
            </p>
          </div>

          {/* Main Showcase Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${slide.gradient}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20 hover:scale-105 transition-all duration-300`}>
                      <div className="text-center">
                        <div className="text-8xl mb-6 animate-bounce">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4 text-white">{slide.title}</h3>
                        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                          {slide.description}
                        </p>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
                        >
                          🚀 Explore {slide.title.split(' ')[0]} →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {slides.slice(0, 6).map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`bg-gradient-to-br ${slide.gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {slide.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                  {slide.title}
                </h4>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                  {slide.description.substring(0, 80)}...
                </p>
                <div className="mt-4 text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                  Explore Now →
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <h3 className="text-3xl font-bold mb-4 text-white">
                🚀 Ready to Experience the Future?
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Join millions of users who are already experiencing the next generation of technology. 
                Start your journey into the future today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/pages/UltimateTechRevolution2026"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
                >
                  🌟 Start Your Journey →
                </a>
                <a 
                  href="/pages/NextGenInnovationHub2026"
                  className="inline-block border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
                >
                  🧪 Join Innovation Lab
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;