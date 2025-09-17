import React, { useState, useEffect } from 'react';

const NewContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "AI Transformation Revolution 2025",
      description: "Transform your business with revolutionary AI technology that thinks, learns, and creates",
      image: "🤖",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AITransformationRevolution2025",
      features: ["Neural Networks 2.0", "Creative AI", "Autonomous Systems"]
    },
    {
      id: 3,
      title: "Quantum Computing Revolution 2025",
      description: "Breakthrough quantum technology that achieves consciousness-level processing",
      image: "⚛️",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumComputingRevolution2025",
      features: ["Quantum Entanglement", "Reality Simulation", "Multidimensional Computing"]
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2025",
      description: "Direct brain-computer interfaces that bridge mind and machine",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2025",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring cutting-edge technology that will define the future
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} p-12 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{slide.description}</p>
                        <ul className="space-y-2 mb-8">
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-white rounded-full"></span>
                              <span className="opacity-90">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Content →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                          <h4 className="text-2xl font-bold mb-4">Interactive Preview</h4>
                          <div className="space-y-4">
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-sm opacity-80">Technology Type</div>
                              <div className="font-semibold">{slide.title.split(' ')[0]}</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-sm opacity-80">Revolution Level</div>
                              <div className="font-semibold">Ultimate Breakthrough</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-sm opacity-80">Impact Score</div>
                              <div className="font-semibold">99.9% Success Rate</div>
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

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {contentSlides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-br ${slide.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center ${
                index === currentSlide ? 'ring-2 ring-white' : ''
              }`}
            >
              <div className="text-4xl mb-3">{slide.image}</div>
              <h4 className="font-bold mb-2">{slide.title.split(' ')[0]}</h4>
              <p className="text-sm opacity-90">{slide.description.substring(0, 60)}...</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentCarousel2025;