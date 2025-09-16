import React, { useState, useEffect } from 'react';

const UltimatePromoBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-orange-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🔥</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse delay-500">⚡</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-1000">💥</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-pulse delay-1500">🚀</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center text-white">
          {/* Main Promo Content */}
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-sm font-bold mb-6 animate-pulse">
              🔥 ULTIMATE PROMO • LIMITED TIME OFFER
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🚀 ULTIMATE TECH PACKAGE 2025
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
              Get Access to ALL Revolutionary Technologies
            </h3>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
              Experience the complete suite of breakthrough technologies including AI Consciousness, Quantum Computing, Neural Interfaces, and Space Technology
            </p>

            {/* Price Display */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="text-6xl md:text-7xl font-bold text-yellow-400">
                $99
              </div>
              <div className="text-right">
                <div className="text-3xl text-white/60 line-through">
                  $2,999
                </div>
                <div className="text-2xl font-bold text-green-400">
                  97% OFF
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold mb-6">⏰ Offer Expires In:</div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4">
                    <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-sm">Hours</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4">
                    <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-sm">Minutes</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4">
                    <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-sm">Seconds</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4">
                    <div className="text-3xl font-bold">99</div>
                    <div className="text-sm">MS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-12 py-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl transform hover:scale-105 animate-pulse">
                🚀 CLAIM ULTIMATE PACKAGE NOW →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🧠</div>
                <div className="text-sm font-semibold">AI Consciousness</div>
                <div className="text-xs text-white/70">$999 value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="text-sm font-semibold">Quantum Computing</div>
                <div className="text-xs text-white/70">$1,299 value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🧬</div>
                <div className="text-sm font-semibold">Neural Interfaces</div>
                <div className="text-xs text-white/70">$799 value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-sm font-semibold">Space Technology</div>
                <div className="text-xs text-white/70">$1,499 value</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">👥</div>
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm text-white/70">Happy Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/70">User Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">🔒</div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-white/70">Secure</div>
              </div>
            </div>

            {/* Urgency Message */}
            <div className="mt-8 bg-red-600/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-red-400/30">
              <div className="text-center">
                <div className="text-lg font-bold text-red-300 mb-2">⚠️ URGENT: Limited Time Offer</div>
                <div className="text-white/80">
                  Only 47 spots left at this price! Once the timer reaches zero, the price goes back to $2,999.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default UltimatePromoBanner2025;