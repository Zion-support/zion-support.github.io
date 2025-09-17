import React, { useState, useEffect } from 'react';

const AnimatedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      subtitle: 'The Future is Here',
      description: 'Experience the next generation of artificial intelligence that thinks, learns, and adapts like never before.',
      image: '🤖',
      color: 'from-purple-600 to-pink-600',
      features: ['Autonomous Systems', 'Natural Language Processing', 'Predictive Analytics', 'Ethical AI']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      subtitle: 'Computing at Light Speed',
      description: 'Harness the power of quantum mechanics to solve problems that were previously impossible.',
      image: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Algorithms', 'Cryptography', 'Optimization', 'Simulation']
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      subtitle: 'Mind Meets Machine',
      description: 'Direct brain-computer interfaces that bridge the gap between human thought and digital action.',
      image: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Brain-Computer Interface', 'Thought Recognition', 'Neural Feedback', 'Medical Applications']
    },
    {
      id: 'blockchain-3',
      title: 'Blockchain 3.0',
      subtitle: 'Decentralized Future',
      description: 'Next-generation blockchain technology with infinite scalability and zero transaction fees.',
      image: '🔗',
      color: 'from-orange-600 to-red-600',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Marketplaces', 'Cross-Chain']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ANIMATED CONTENT CAROUSEL • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Animated Content Carousel 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through an immersive, interactive experience
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color} p-12 min-h-[600px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                      {/* Content */}
                      <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
                        <div className="text-6xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl mb-6 opacity-90">{slide.subtitle}</p>
                        <p className="text-lg mb-8 opacity-80">{slide.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {slide.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                            Learn More
                          </button>
                          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                            Try Demo
                          </button>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        <div className="text-center">
                          <div className="text-9xl mb-8 animate-bounce">{slide.image}</div>
                          <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                            <div className="text-6xl">{slide.image}</div>
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
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                setIsAnimating(false);
              }, 300);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setIsAnimating(false);
              }, 300);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedContentCarousel2025;