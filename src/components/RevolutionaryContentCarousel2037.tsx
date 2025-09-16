import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "🚀 Ultimate Tech Breakthrough 2037",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2037",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2037"
    },
    {
      id: 2,
      title: "⚡ Revolutionary Tech Showcase 2037",
      description: "Interactive showcase of cutting-edge technologies that will define the future of humanity",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2037"
    },
    {
      id: 3,
      title: "🧠 Next-Gen Innovation Hub 2037",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌌",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2037"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Carousel 2037</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on Transcendent AI, Quantum Reality, and Multiverse Technology
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8 text-center md:text-left">{slide.description}</p>
                        <div className="text-center md:text-left">
                          <a 
                            href={slide.link}
                            className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                          >
                            Explore {slide.title.split(' ')[0]} →
                          </a>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-4">🌟 Key Features</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Revolutionary Technology</li>
                            <li>• Interactive Demos</li>
                            <li>• Real-time Processing</li>
                            <li>• Multi-dimensional Access</li>
                          </ul>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-4">⚡ Advanced Capabilities</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 99.9% Accuracy Rate</li>
                            <li>• Infinite Possibilities</li>
                            <li>• Cross-Dimensional Tech</li>
                            <li>• Future-Ready Solutions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
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
        
        {/* Quick Access Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {slides.map((slide) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-br ${slide.color} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-3">{slide.image}</div>
              <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
              <p className="text-sm opacity-90 mb-4">{slide.description}</p>
              <div className="text-white text-sm font-semibold">
                Explore Now →
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2037;