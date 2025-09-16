import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "🚀 Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2025",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      link: "/pages/UltimateTechRevolution2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900 via-indigo-900 to-blue-900"
    },
    {
      id: 2,
      title: "⚡ Revolutionary Tech Breakthrough 2025",
      description: "Witness the most groundbreaking technological breakthrough that will redefine what's possible",
      features: ["Neural Interface Revolution", "Quantum Wave Computing", "Predictive Reality Engine"],
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900 via-purple-900 to-pink-900"
    },
    {
      id: 3,
      title: "🧠 Next-Gen Innovation Hub 2025",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      features: ["247+ Active Projects", "99.9% Success Rate", "Infinite Possibilities"],
      link: "/pages/NextGenInnovationHub2025",
      gradient: "from-emerald-600 to-cyan-600",
      bgGradient: "from-emerald-900 via-teal-900 to-cyan-900"
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

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW CONTENT 2025 • REVOLUTIONARY TECHNOLOGY
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h3>
                  <p className="text-lg opacity-90 mb-6">{slides[currentSlide].description}</p>
                  <ul className="space-y-2 mb-6">
                    {slides[currentSlide].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={slides[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Now →
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {currentSlide === 0 && "🚀"}
                    {currentSlide === 1 && "⚡"}
                    {currentSlide === 2 && "🧠"}
                  </div>
                  <div className="text-2xl font-bold mb-2">
                    {currentSlide === 0 && "Ultimate Revolution"}
                    {currentSlide === 1 && "Revolutionary Breakthrough"}
                    {currentSlide === 2 && "Innovation Hub"}
                  </div>
                  <div className="text-sm opacity-75">
                    {currentSlide === 0 && "Conscious AI • Quantum Computing • Interdimensional Tech"}
                    {currentSlide === 1 && "Neural Interface • Quantum Waves • Predictive Reality"}
                    {currentSlide === 2 && "247+ Projects • 99.9% Success • Infinite Possibilities"}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
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

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
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
      </div>
    </div>
  );
};

export default NewContentCarousel2025;