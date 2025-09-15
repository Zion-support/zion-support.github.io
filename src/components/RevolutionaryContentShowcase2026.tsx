import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      title: "Revolutionary Tech Showcase 2026",
      description: "Experience the most advanced technologies that will reshape our world",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2026",
      features: ["Quantum Consciousness", "Synthetic Intelligence", "Neural Interfaces"]
    },
    {
      title: "Next-Gen AI Consciousness",
      description: "Discover how AI is developing genuine consciousness and creativity",
      icon: "🧠",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/NextGenAIConsciousness2026",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative AI"]
    },
    {
      title: "Quantum Reality Simulation",
      description: "Step into a world where quantum mechanics shapes reality itself",
      icon: "⚛️",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/QuantumReality2026",
      features: ["Superposition", "Entanglement", "Quantum Tunneling"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
              <span className="text-cyan-400">✨</span>
              <span className="text-cyan-300 font-semibold">REVOLUTIONARY CONTENT 2026</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience the Future
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our groundbreaking new content featuring the most advanced technologies 
              that will define the next decade of human progress
            </p>
          </div>

          {/* Interactive Content Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {contentSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6">{slide.icon}</div>
                          <h3 className="text-4xl font-bold mb-6 text-white">{slide.title}</h3>
                          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{slide.description}</p>
                          <div className="space-y-3 mb-8">
                            {slide.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <a 
                            href={slide.link}
                            className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
                          >
                            Explore {slide.title.split(' ')[0]} →
                          </a>
                        </div>
                        <div className="relative">
                          <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/50 rounded-2xl p-8 border border-gray-600/30">
                            <div className="text-center">
                              <div className="text-6xl mb-4">{slide.icon}</div>
                              <h4 className="text-2xl font-bold mb-4 text-white">Interactive Demo</h4>
                              <p className="text-gray-300 mb-6">
                                Experience this technology through our interactive demonstrations
                              </p>
                              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30">
                                Try Interactive Demo
                              </button>
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
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-white mb-8">Quick Access to All Content</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {contentSlides.map((slide, index) => (
                <a
                  key={index}
                  href={slide.link}
                  className="group bg-gradient-to-br from-gray-800/30 to-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {slide.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 text-center group-hover:text-cyan-300 transition-colors">
                    {slide.title.split(' ')[0]}
                  </h4>
                  <p className="text-gray-300 text-sm text-center group-hover:text-gray-200 transition-colors">
                    {slide.description.substring(0, 80)}...
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Explore the Future?</h3>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                Join thousands of innovators who are already experiencing these revolutionary technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
                  🚀 Start Your Journey
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  📚 Learn More
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className={`w-80 h-80 mx-auto bg-gradient-to-br ${currentItem.gradient} rounded-full flex items-center justify-center text-8xl animate-pulse`}>
                  {currentItem.icon}
                </div>
                <div className="absolute inset-0 w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-400 scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-4 ring-cyan-400' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2 text-center">{item.title}</h4>
              <p className="text-white/80 text-sm text-center mb-4">{item.description}</p>
              <a 
                href={item.link}
                className="block w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-center text-sm"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Discover revolutionary technologies that will reshape our world and unlock unlimited possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg">
                Explore All Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold text-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;