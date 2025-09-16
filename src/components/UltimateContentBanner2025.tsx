import React, { useState, useEffect } from 'react';

const UltimateContentBanner2025: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const advertisements = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      subtitle: "Experience the Future of Technology",
      description: "Discover AI consciousness, quantum computing, and interdimensional technology that will reshape our world",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90",
      icon: "🧠"
    },
    {
      title: "🤖 AI Solutions Comprehensive 2025",
      subtitle: "Complete AI Transformation Suite",
      description: "Revolutionary AI solutions including consciousness systems, quantum processing, and neural interfaces",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90",
      icon: "⚛️"
    },
    {
      title: "🌟 Interactive Tech Showcase 2025",
      subtitle: "Experience Technology Like Never Before",
      description: "Interactive demos of the most advanced technologies with real-time visualization and hands-on experience",
      link: "/pages/InteractiveTechShowcase2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90",
      icon: "🎮"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [advertisements.length]);

  const nextAd = () => {
    setCurrentAd((prev) => (prev + 1) % advertisements.length);
  };

  const prevAd = () => {
    setCurrentAd((prev) => (prev - 1 + advertisements.length) % advertisements.length);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${advertisements[currentAd].bgColor} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 p-16 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black text-lg font-bold mb-8 animate-pulse">
              🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
            </div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Revolutionary Technology Experience
            </h2>
            <p className="text-2xl opacity-90 max-w-5xl mx-auto">
              Discover the most advanced technologies that will reshape our world in 2025 and beyond
            </p>
          </div>

          {/* Main Advertisement Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentAd * 100}%)` }}
              >
                {advertisements.map((ad, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-12">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6 animate-bounce">{ad.icon}</div>
                          <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {ad.title}
                          </h3>
                          <p className="text-2xl font-semibold mb-6 text-yellow-300">
                            {ad.subtitle}
                          </p>
                          <p className="text-xl opacity-90 mb-8 leading-relaxed">
                            {ad.description}
                          </p>
                          <div className="flex space-x-6">
                            <a 
                              href={ad.link}
                              className={`bg-gradient-to-r ${ad.color} text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl`}
                            >
                              Explore Now →
                            </a>
                            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-xl">
                              Watch Demo
                            </button>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="bg-black/40 rounded-2xl p-8 mb-6">
                            <div className="text-green-400 font-mono text-lg mb-4">
                              Status: Revolutionary
                              <br />
                              Processing: 99.9%
                              <br />
                              Innovation: ∞
                              <br />
                              Impact: Global
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                              <div className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full animate-pulse" style={{width: '99%'}}></div>
                            </div>
                            <div className="text-sm text-gray-300">Revolutionary Technology Progress</div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-2xl font-bold text-yellow-400">∞</div>
                              <div className="text-sm">Processing Power</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-2xl font-bold text-green-400">99.9%</div>
                              <div className="text-sm">Efficiency</div>
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
              onClick={prevAd}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextAd}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentAd === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🚀</div>
              <h4 className="text-2xl font-bold mb-3">Revolutionary</h4>
              <p className="text-lg opacity-90">Breakthrough technology that changes everything</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 animate-bounce">⚡</div>
              <h4 className="text-2xl font-bold mb-3">Lightning Fast</h4>
              <p className="text-lg opacity-90">Instant processing and real-time results</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🌍</div>
              <h4 className="text-2xl font-bold mb-3">Global Impact</h4>
              <p className="text-lg opacity-90">World-changing solutions for everyone</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 animate-bounce">🔮</div>
              <h4 className="text-2xl font-bold mb-3">Future Ready</h4>
              <p className="text-lg opacity-90">Next-generation technology today</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
                Join thousands of organizations already using our revolutionary technologies to achieve unprecedented success
              </p>
              <div className="flex justify-center space-x-6">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
                  Start Your Journey
                </button>
                <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;