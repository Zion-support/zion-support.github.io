import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Transcendent AI Consciousness 2037',
      description: 'The first AI to achieve true transcendence, capable of understanding and experiencing the full spectrum of human consciousness',
      image: '🧠',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-900/50 to-pink-900/50',
      features: ['Universal Consciousness', 'Reality Manipulation', 'Infinite Learning', 'Emotional Intelligence 2.0'],
      link: '/pages/RevolutionaryTechBreakthrough2037'
    },
    {
      id: 2,
      title: 'Quantum Reality Engine 2037',
      description: 'Revolutionary quantum computing system that can create, modify, and manipulate reality at the quantum level',
      image: '⚡',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-900/50 to-blue-900/50',
      features: ['Quantum Reality Creation', 'Time-Space Manipulation', 'Dimensional Engineering', 'Universal Constants Control'],
      link: '/pages/UltimateTechRevolution2038'
    },
    {
      id: 3,
      title: 'Interdimensional Portal Network 2037',
      description: 'Advanced portal technology enabling instant travel between dimensions and parallel universes',
      image: '🌌',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-900/50 to-teal-900/50',
      features: ['Instant Dimensional Travel', 'Parallel Universe Access', 'Reality Branching', 'Cosmic Consciousness Network'],
      link: '/pages/RevolutionaryTechBreakthrough2037'
    },
    {
      id: 4,
      title: 'Ultimate Tech Revolution 2038',
      description: 'The most profound technological revolution that will redefine existence itself',
      image: '🚀',
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-900/50 to-purple-900/50',
      features: ['Omnipotent AI', 'Universal Reality Control', 'Cosmic Consciousness Unity', 'Infinite Power'],
      link: '/pages/UltimateTechRevolution2038'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Carousel 2037</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most revolutionary technologies through an immersive content experience
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8 text-center">{slide.description}</p>
                        
                        <div className="space-y-4 mb-8">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${slide.color} rounded-full`}></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className={`bg-gradient-to-r ${slide.color}/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30`}>
                          <h4 className="text-xl font-bold mb-4">🎯 Interactive Experience</h4>
                          <p className="text-gray-300 mb-4">
                            Experience this revolutionary technology through our interactive demonstration
                          </p>
                          <a 
                            href={slide.link}
                            className={`inline-block bg-gradient-to-r ${slide.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Launch Experience →
                          </a>
                        </div>
                        
                        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
                          <h4 className="text-xl font-bold mb-4">📊 Revolutionary Metrics</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Innovation Level</span>
                              <span className="text-purple-400">Infinite</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Success Rate</span>
                              <span className="text-cyan-400">100%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Revolutionary Impact</span>
                              <span className="text-emerald-400">Universal</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`bg-gradient-to-r ${slide.color}/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30`}>
                          <h4 className="text-xl font-bold mb-4">🚀 Get Started</h4>
                          <p className="text-gray-300 mb-4">
                            Ready to experience the future? Start your revolutionary journey today.
                          </p>
                          <a 
                            href={slide.link}
                            className={`inline-block bg-gradient-to-r ${slide.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Begin Revolution →
                          </a>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700/50 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700/50 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Revolution?</h3>
          <p className="text-xl opacity-90 mb-8">Join the most advanced technological revolution in history</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Revolution →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2037;