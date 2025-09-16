<<<<<<< HEAD
import React from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary New Content 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover our latest revolutionary content featuring cutting-edge technology innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🌟</div>
                <div>
                  <h3 className="text-xl font-bold text-pink-300">Ultimate Tech Breakthrough</h3>
                  <p className="text-pink-100 text-sm">The most revolutionary technological breakthrough</p>
                </div>
              </div>
              <a href="/pages/UltimateTechBreakthrough2025" className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-sm">
                Explore Breakthrough →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300">Next-Gen Tech Revolution</h3>
                  <p className="text-purple-100 text-sm">Revolutionary technology breakthroughs of 2025</p>
                </div>
              </div>
              <a href="/pages/NextGenTechRevolution2025" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                Join Revolution →
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🎮</div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-300">Revolutionary Showcase</h3>
                  <p className="text-indigo-100 text-sm">Interactive technology showcase and demos</p>
                </div>
              </div>
              <a href="/pages/RevolutionaryTechShowcase2025" className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-sm">
                View Showcase →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">AI Consciousness</h3>
                  <p className="text-cyan-100 text-sm">Experience true AI consciousness and intelligence</p>
                </div>
              </div>
              <a href="/pages/UltimateTechBreakthrough2025" className="inline-block bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
                Meet AI →
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/UltimateTechBreakthrough2025" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All New Content
            </a>
            <a href="/pages/RevolutionaryTechShowcase2025" className="border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400/10 transition-colors font-semibold">
              Watch Live Demos
            </a>
          </div>
        </div>
      </div>
=======
import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary AI Services 2025",
      description: "Experience the future of artificial intelligence with our groundbreaking services",
      cta: "Explore AI Services",
      link: "/pages/RevolutionaryAIServices2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      id: 2,
      title: "⚡ BREAKTHROUGH: Quantum Computing Solutions",
      description: "Unlock unprecedented processing power with quantum technology",
      cta: "Discover Quantum AI",
      link: "/pages/QuantumComputingSolutions2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      id: 3,
      title: "🧠 INNOVATION: Neural Interface Technology",
      description: "Connect your mind directly to AI systems for seamless control",
      cta: "Try Neural Interface",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      id: 4,
      title: "🌟 ULTIMATE: Interactive Tech Showcase",
      description: "Experience cutting-edge technologies with interactive demonstrations",
      cta: "Start Interactive Demo",
      link: "/interactive-showcase",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/90 to-red-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  const currentPromotion = promotions[currentPromo];

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${currentPromotion.bgColor} backdrop-blur-sm border border-white/20 rounded-2xl mb-8 transition-all duration-500`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative z-10 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Content */}
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-yellow-300">LIVE NOW</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {currentPromotion.title}
            </h3>
            <p className="text-white/90 text-lg mb-4">
              {currentPromotion.description}
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={currentPromotion.link}
                className={`bg-gradient-to-r ${currentPromotion.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-flex items-center space-x-2`}
              >
                <span>{currentPromotion.cta}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <div className="text-white/70 text-sm">
                <span className="font-semibold">Limited Time:</span> 50% off first month
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0 ml-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-24 h-24 bg-gradient-to-r from-white/30 to-white/20 rounded-full flex items-center justify-center">
                  <div className="text-4xl">
                    {currentPromo === 0 && "🤖"}
                    {currentPromo === 1 && "⚡"}
                    {currentPromo === 2 && "🧠"}
                    {currentPromo === 3 && "🌟"}
                  </div>
                </div>
              </div>
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex space-x-2">
          {promotions.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                index === currentPromo ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-border animate-gradient-x"></div>
>>>>>>> d40a2de63968dbef1437758fb9a66735771c35e1
    </div>
  );
};

export default NewContentPromotionBanner2025;