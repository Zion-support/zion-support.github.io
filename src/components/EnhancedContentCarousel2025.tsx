import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Experience conscious AI, quantum consciousness, and interdimensional computing",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Ultimate Tech Breakthrough 2026",
      description: "The most advanced technologies that will reshape our world in 2026",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateTechBreakthrough2026",
      features: ["Neural Interface Revolution", "Synthetic Intelligence", "Reality Engine"]
    },
    {
      id: 3,
      title: "Interactive Technology Showcase",
      description: "Experience our revolutionary technologies through interactive demonstrations",
      image: "🚀",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/InteractiveTechShowcase2025",
      features: ["Live Demos", "Real-time Processing", "Interactive Features"]
    },
    {
      id: 4,
      title: "AI Innovation Hub 2025",
      description: "Discover cutting-edge AI solutions and innovative technologies",
      image: "🤖",
      color: "from-orange-600 to-red-600",
      link: "/pages/AIInnovationHub2025",
      features: ["AI Solutions", "Machine Learning", "Deep Learning"]
    },
    {
      id: 5,
      title: "Quantum Computing Revolution",
      description: "Explore the future of computing with quantum technology",
      image: "⚛️",
      color: "from-violet-600 to-purple-600",
      link: "/pages/QuantumComputingRevolution2025",
      features: ["Quantum Processing", "Entanglement Computing", "Quantum Algorithms"]
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌟 Enhanced Content Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest revolutionary technologies and innovations through an interactive content carousel
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.color}/30 backdrop-blur-sm rounded-2xl p-12 text-center`}>
                    <div className="text-8xl mb-6">{item.image}</div>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{item.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                      {item.features.map((feature, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-sm font-semibold">{feature}</div>
                        </div>
                      ))}
                    </div>

                    <a 
                      href={item.link}
                      className={`inline-block bg-gradient-to-r ${item.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore {item.title} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Quick Access to All Content</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {contentItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                {item.image} {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;