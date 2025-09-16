import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "Next-Gen Tech Revolution 2025",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/NextGenTechRevolution2025",
      features: ["AI Consciousness", "Quantum Reality", "Neural Interface"]
    },
    {
      id: 2,
      title: "Ultimate Tech Breakthrough 2025",
      description: "The most revolutionary technological breakthrough in human history",
      image: "⚡",
      gradient: "from-indigo-600/30 to-purple-600/30",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-100",
      link: "/pages/UltimateTechBreakthrough2025",
      features: ["Quantum Consciousness", "Reality Engine", "Neural Matrix"]
    },
    {
      id: 3,
      title: "Revolutionary Tech Showcase 2025",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      image: "🌟",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechShowcase2025",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"]
    },
    {
      id: 4,
      title: "AI Solutions Comprehensive 2025",
      description: "Complete AI solutions suite for every business need",
      image: "🤖",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/AISolutionsComprehensive2025",
      features: ["Enterprise AI", "Autonomous Systems", "Intelligent Automation"]
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

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white rounded-2xl p-8 mb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring the most advanced technologies
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Content */}
              <div>
                <div className={`text-6xl mb-6 ${contentSlides[currentSlide].textColor}`}>
                  {contentSlides[currentSlide].image}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {contentSlides[currentSlide].title}
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  {contentSlides[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {contentSlides[currentSlide].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={contentSlides[currentSlide].link}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                >
                  Explore Content →
                </a>
              </div>

              {/* Visual */}
              <div className={`bg-gradient-to-br ${contentSlides[currentSlide].gradient} backdrop-blur-sm rounded-xl p-8 border ${contentSlides[currentSlide].borderColor} hover:scale-105 transition-all duration-300`}>
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {contentSlides[currentSlide].image}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    {contentSlides[currentSlide].title}
                  </h4>
                  <div className="space-y-2">
                    {contentSlides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="text-sm opacity-90">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {contentSlides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`p-4 rounded-lg bg-gradient-to-br ${slide.gradient} backdrop-blur-sm border ${slide.borderColor} hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-3xl mb-2">{slide.image}</div>
              <div className="text-sm font-semibold">{slide.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentCarousel2025;