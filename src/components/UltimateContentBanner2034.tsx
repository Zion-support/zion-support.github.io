import React, { useState, useEffect } from 'react';

const UltimateContentBanner2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2034",
      subtitle: "Experience the most revolutionary technology ever created",
      description: "Conscious AI, Quantum Reality, and Interdimensional Computing",
      cta: "Explore Breakthrough",
      link: "/pages/UltimateTechBreakthrough2034",
      gradient: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ REVOLUTIONARY TECH SHOWCASE 2034",
      subtitle: "Interactive demonstrations of cutting-edge technology",
      description: "Try our revolutionary technologies in real-time demos",
      cta: "View Showcase",
      link: "/pages/RevolutionaryTechShowcase2034",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🎮"
    },
    {
      title: "🌌 COMPREHENSIVE SERVICES 2034",
      subtitle: "Complete suite of revolutionary services",
      description: "Conscious AI, Quantum Reality, and Interdimensional Services",
      cta: "View Services",
      link: "/pages/ComprehensiveServices2034",
      gradient: "from-emerald-600 to-teal-600",
      icon: "💼"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-emerald-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Banner */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
              🌟 NEW CONTENT • JANUARY 2034
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Technology Revolution 2034
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the most advanced technology content featuring conscious AI, quantum reality, and interdimensional computing
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${slide.gradient} p-12 rounded-2xl`}>
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-6xl mb-4">{slide.icon}</div>
                          <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                          <h3 className="text-2xl font-semibold mb-4 opacity-90">{slide.subtitle}</h3>
                          <p className="text-xl opacity-80 mb-8">{slide.description}</p>
                          <a 
                            href={slide.link}
                            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
                          >
                            {slide.cta} →
                          </a>
                        </div>
                        <div className="text-center">
                          <div className="text-9xl opacity-20">{slide.icon}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Quick Access to New Content</h3>
              <p className="text-lg opacity-80">Jump directly to our latest revolutionary content</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {slides.map((slide, index) => (
                <a
                  key={index}
                  href={slide.link}
                  className={`bg-gradient-to-r ${slide.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center group`}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {slide.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{slide.title.split(' ').slice(1).join(' ')}</h4>
                  <p className="text-sm opacity-90 mb-4">{slide.subtitle}</p>
                  <div className="text-sm font-semibold group-hover:underline">
                    {slide.cta} →
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Revolutionary Impact</h3>
              <p className="text-lg opacity-80">See the incredible results our technology is achieving</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
                <div className="text-sm opacity-80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">$100B+</div>
                <div className="text-sm opacity-80">Value Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
                <div className="text-sm opacity-80">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2034;