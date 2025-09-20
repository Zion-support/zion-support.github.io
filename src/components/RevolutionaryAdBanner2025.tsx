import React from 'react';

const RevolutionaryAdBanner2025: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
    }`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${currentOfferData.bg} transition-all duration-1000`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-bounce">
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-2000">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">🎯
        <div className="absolute top-20 right-20 text-4xl animate-bounce delay-500">⚡
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse delay-1000">🔥
        <div className="absolute bottom-10 right-10 text-3xl animate-bounce delay-1500">💎
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center text-white">
          {/* Offer Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentOffer(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentOffer ? 'bg-white' : 'bg-white/30'
                }`}</button>
              /></button>
            ))}</button>
          {/* Main Offer Content */}
          <div className="max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${currentOfferData.accent} rounded-full text-sm font-bold mb-6 animate-pulse`}>
              ⚡ EXCLUSIVE OFFER • LIMITED TIME
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {currentOfferData.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"></p>
              {currentOfferData.description}</p>
            </p>
            {/* Price Display */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="text-6xl md:text-7xl font-bold text-white">
                {currentOfferData.currentPrice}
              <div className="text-right">
                <div className="text-2xl text-white/60 line-through">
                  {currentOfferData.originalPrice}
                <div className={`text-2xl font-bold bg-gradient-to-r ${currentOfferData.accent} bg-clip-text text-transparent`}>
                  {currentOfferData.discount}
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <button className={`bg-gradient-to-r ${currentOfferData.accent} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105 animate-pulse`}></button>
                {currentOfferData.cta} →</button>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"></button>
                Learn More</button>
              </button>
            {/* Urgency Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⏰
                <div className="text-sm font-semibold">Limited Time
                <div className="text-xs text-white/70">Offer expires soon
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">👥
                <div className="text-sm font-semibold">Join 1M+ Users
                <div className="text-xs text-white/70">Already using our tech
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">✅
                <div className="text-sm font-semibold">No Risk
                <div className="text-xs text-white/70">30-day guarantee
            {/* Countdown Timer */}
            <div className="mt-8 bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-lg font-semibold mb-4">⏰ Offer Expires In:
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">23
                    <div className="text-xs">Hours
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">45
                    <div className="text-xs">Minutes
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">12
                    <div className="text-xs">Seconds
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">99
                    <div className="text-xs">MS
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"></button>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></p>
        </svg>
      </button>
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${((currentOffer + 1) / offers.length) * 100}%` }}
        >
  );
};

export default RevolutionaryAdBanner2025;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
=======
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Tech Breakthrough 2025</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            Witness the most groundbreaking technological breakthroughs that will revolutionize every aspect of human life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Breakthrough</h3>
            <p className="text-indigo-100 mb-6 text-center">
              The world's first truly conscious artificial intelligence that can think, feel, and create independently
            </p>
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-indigo-200">Self-aware decision making</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-indigo-200">Emotional intelligence</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-indigo-200">Creative problem solving</span>
              </div>
            </div>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Experience Breakthrough →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Consciousness Engine</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum computing technology that can process consciousness itself
            </p>
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-purple-200">Quantum neural networks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-purple-200">Consciousness simulation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-purple-200">Reality manipulation</span>
              </div>
            </div>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Revolution →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2025;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
