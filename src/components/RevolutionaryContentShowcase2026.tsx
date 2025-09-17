import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      title: "Revolutionary Tech Trends 2026",
      description: "Discover the most groundbreaking technological trends that will reshape our world in 2026 and beyond.",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechTrends2026",
      features: ["Quantum Consciousness", "Synthetic Intelligence", "Neural Interfaces", "Space Technology"]
    },
    {
      title: "Advanced Tech Innovation Hub",
      description: "Explore the most advanced technology innovation hub featuring breakthrough research and cutting-edge solutions.",
      icon: "🌟",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AdvancedTechInnovationHub2026",
      features: ["AI Consciousness Lab", "Quantum Computing Center", "Neural Interface Lab", "Space Technology Lab"]
    },
    {
      title: "Ultimate Tech Revolution",
      description: "Witness the most profound technological transformation in human history with revolutionary technologies.",
      icon: "⚡",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateTechRevolution2026",
      features: ["Quantum Consciousness", "Synthetic Intelligence", "Neural Revolution", "Space Colonization"]
    },
    {
      title: "Comprehensive Tech Insights",
      description: "Deep insights into the most groundbreaking technological developments and their impact on society.",
      icon: "🔮",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/ComprehensiveTechInsights2026",
      features: ["Industry Analysis", "Future Predictions", "Technology Impact", "Innovation Metrics"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY CONTENT SHOWCASE 2026
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience the Future
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover our most revolutionary content featuring cutting-edge technologies, breakthrough innovations, 
              and insights that will shape the future of humanity.
            </p>
          </div>

          {/* Main Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-8xl mb-6">{contentSlides[currentSlide].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{contentSlides[currentSlide].title}</h3>
                  <p className="text-lg text-gray-300 mb-6">{contentSlides[currentSlide].description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {contentSlides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={contentSlides[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                  >
                    Explore Content →
                  </a>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-9xl animate-pulse">{contentSlides[currentSlide].icon}</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-purple-500 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {contentSlides.map((slide, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${slide.gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-4xl mb-4 text-center">{slide.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-center">{slide.title}</h4>
                <p className="text-sm text-gray-300 text-center mb-4">{slide.description}</p>
                <a 
                  href={slide.link}
                  className={`block w-full bg-gradient-to-r ${slide.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Revolutionary Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-sm text-gray-300">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1M+</div>
              <div className="text-sm text-gray-300">Users Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;