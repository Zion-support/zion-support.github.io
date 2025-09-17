import React, { useState, useEffect } from 'react';

const UltimateContentCarousel2030: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2030",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2030",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2030",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough 2030",
      description: "Witness the most groundbreaking technological innovations that will transform humanity forever",
      image: "⚡",
      gradient: "from-pink-600 to-purple-600",
      link: "/pages/RevolutionaryTechBreakthrough2030",
      features: ["Neural-Quantum Interface", "Reality Manipulation Engine", "Predictive Reality"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2030",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌟",
      gradient: "from-emerald-600 to-cyan-600",
      link: "/pages/NextGenInnovationHub2030",
      features: ["AI Consciousness", "Quantum Reality", "Neural Networks"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2030
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology 2030</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{item.image}</div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{item.description}</p>
                        <div className="space-y-2 mb-6">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                              <span className="text-purple-200">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore {item.title} →
                        </a>
                      </div>
                      <div className="hidden lg:block">
                        <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                          <div className="text-center">
                            <div className="text-8xl mb-4">{item.image}</div>
                            <div className="text-2xl font-bold mb-4">Revolutionary Technology</div>
                            <div className="text-purple-200">
                              Experience the future of technology with our cutting-edge innovations
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-purple-400' : 'bg-purple-400/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentCarousel2030;