import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-8 mb-8 rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW: Revolutionary Content 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-4xl mx-auto">
            Discover groundbreaking innovations in AI, Quantum Computing, and Neural Interfaces that will reshape our world
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🌟 Explore Next-Gen Revolution →
            </a>
            <a 
              href="/pages/UltimateTechBreakthrough2025" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg border border-white/30 hover:border-white/50"
            >
              ⚡ Ultimate Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg border border-white/30 hover:border-white/50"
            >
              🚀 Interactive Showcase →
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
<<<<<<< HEAD
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
=======
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-ping delay-3000"></div>
      </div>
    </div>
>>>>>>> cursor/create-and-deploy-new-content-8d99
  );
};

export default RevolutionaryContentBanner2025;