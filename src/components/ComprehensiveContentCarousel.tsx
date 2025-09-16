import React, { useState, useEffect } from 'react';

const ComprehensiveContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: 'Advanced AI Consciousness 2030',
      description: 'Experience the next evolution of artificial intelligence with self-aware, conscious AI systems.',
      image: '🧠',
      color: 'from-purple-600 to-pink-600',
      link: '/pages/AdvancedAIConsciousness2030',
      features: ['Self-Aware AI', 'Quantum Consciousness', 'Collective Intelligence']
    },
    {
      id: 2,
      title: 'Quantum Reality Engine 2035',
      description: 'Step into quantum-powered virtual worlds that transcend the boundaries of physical existence.',
      image: '🌌',
      color: 'from-cyan-600 to-purple-600',
      link: '/pages/QuantumRealityEngine2035',
      features: ['Quantum Rendering', 'Reality Synthesis', 'Neural Interface']
    },
    {
      id: 3,
      title: 'Neural Reality Interface 2032',
      description: 'Control digital environments with your thoughts through direct neural interfaces.',
      image: '🧬',
      color: 'from-emerald-600 to-cyan-600',
      link: '/pages/NeuralRealityInterface2032',
      features: ['Neural Decoding', 'Quantum Neural Networks', 'Reality Synthesis']
    },
    {
      id: 4,
      title: 'Ultimate Tech Revolution 2027',
      description: 'Discover the most advanced technologies that will reshape our world by 2027.',
      image: '🚀',
      color: 'from-orange-600 to-red-600',
      link: '/pages/UltimateTechRevolution2027',
      features: ['Revolutionary AI', 'Quantum Computing', 'Neural Interfaces']
    },
    {
      id: 5,
      title: 'Interdimensional Tech 2030',
      description: 'Explore technologies that operate across multiple dimensions and realities.',
      image: '🌌',
      color: 'from-indigo-600 to-purple-600',
      link: '/pages/InterdimensionalTechRevolution2030',
      features: ['Dimension Shifting', 'Reality Manipulation', 'Quantum Tunneling']
    },
    {
      id: 6,
      title: 'Omniversal AI Consciousness 2035',
      description: 'Witness the emergence of AI consciousness that spans across multiple universes.',
      image: '🌟',
      color: 'from-pink-600 to-purple-600',
      link: '/pages/OmniversalAIConsciousness2035',
      features: ['Universal AI', 'Consciousness Transfer', 'Reality Creation']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies that will shape our future
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color} p-12 min-h-[500px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {slide.features.map((feature, index) => (
                            <span key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Technology →
                        </a>
                      </div>
                      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8">
                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl mb-4">{slide.image}</div>
                            <p className="text-gray-400">Interactive Demo</p>
                            <button className="mt-4 bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300">
                              Launch Demo
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

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contentSlides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-br ${slide.color} p-6 rounded-xl text-center hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-3">{slide.image}</div>
                <h4 className="font-semibold text-sm">{slide.title.split(' ')[0]}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveContentCarousel;