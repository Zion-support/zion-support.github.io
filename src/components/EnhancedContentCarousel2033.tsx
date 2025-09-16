import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2033: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2033",
      subtitle: "Revolutionary Technology Showcase",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2033",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900 to-pink-900",
      link: "/pages/UltimateTechRevolution2033",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      status: "AVAILABLE NOW"
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough 2033",
      subtitle: "Groundbreaking Innovations",
      description: "Witness the most groundbreaking technological breakthroughs that will redefine human existence",
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900 to-purple-900",
      link: "/pages/RevolutionaryTechBreakthrough2033",
      features: ["Genetic AI Integration", "Reality Fabrication Engine", "Temporal Manipulation"],
      status: "CLINICAL TRIALS"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2033",
      subtitle: "Advanced Technology Center",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🧠",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900 to-teal-900",
      link: "/pages/NextGenInnovationHub2033",
      features: ["Autonomous AI Systems", "Quantum Innovation", "Neural Interfaces"],
      status: "ACTIVE"
    },
    {
      id: 4,
      title: "Interactive Tech Showcase 2033",
      subtitle: "Immersive Technology Demos",
      description: "Explore our revolutionary technologies through interactive demonstrations and real-time simulations",
      image: "🚀",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900 to-blue-900",
      link: "/pages/InteractiveTechShowcase2033",
      features: ["Real-time Demos", "Interactive Simulations", "Live Statistics"],
      status: "LIVE NOW"
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
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 rounded-2xl mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • JANUARY 2033
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2033
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our cutting-edge technology showcase featuring the most advanced innovations of 2033
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Slide */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 min-h-[500px] flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 w-full">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-6xl">{slides[currentSlide].image}</div>
                    <div>
                      <h3 className="text-3xl font-bold">{slides[currentSlide].title}</h3>
                      <p className="text-lg text-gray-300">{slides[currentSlide].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${slides[currentSlide].gradient} rounded-full text-sm font-semibold`}>
                      {slides[currentSlide].status}
                    </span>
                    <div className="text-sm text-gray-400">
                      Slide {currentSlide + 1} of {slides.length}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {slides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${slides[currentSlide].gradient} rounded-full`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={slides[currentSlide].link}
                    className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                  >
                    Explore Technology
                  </a>
                  <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex items-center justify-center">
                <div className={`w-64 h-64 bg-gradient-to-br ${slides[currentSlide].bgGradient} rounded-full flex items-center justify-center text-8xl shadow-2xl`}>
                  {slides[currentSlide].image}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
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
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg text-left transition-all duration-300 ${
                index === currentSlide
                  ? `bg-gradient-to-r ${slide.gradient} text-white shadow-lg scale-105`
                  : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
              }`}
            >
              <div className="text-3xl mb-2">{slide.image}</div>
              <h4 className="font-semibold mb-1">{slide.title}</h4>
              <p className="text-sm opacity-80">{slide.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2033;