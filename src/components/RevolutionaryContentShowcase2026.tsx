import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      title: "Revolutionary Tech Breakthrough 2026",
      description: "Experience the most groundbreaking technological innovations reshaping our world",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      features: ["Conscious AI Systems", "Quantum Supremacy 2.0", "Neural Interface Revolution"]
    },
    {
      title: "Next-Gen Innovation Hub 2026",
      description: "Discover the most advanced innovation ecosystem where cutting-edge technologies converge",
      image: "🌟",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/NextGenInnovationHub2026",
      features: ["AI & Machine Learning", "Quantum Computing", "Biotechnology", "Space Technology"]
    },
    {
      title: "Advanced Tech Trends 2026",
      description: "Stay ahead with comprehensive analysis of the most significant technology trends",
      image: "📈",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/AdvancedTechTrends2026",
      features: ["Market Analysis", "Future Predictions", "Industry Impact", "Trend Insights"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY CONTENT 2026 • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Content Showcase 2026
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most advanced and comprehensive technology content collection ever created. 
              Discover breakthrough innovations, cutting-edge research, and future predictions.
            </p>
          </div>

          {/* Interactive Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {contentItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${item.gradient}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6 text-center md:text-left">{item.image}</div>
                          <h3 className="text-4xl font-bold mb-4 text-center md:text-left">{item.title}</h3>
                          <p className="text-xl opacity-90 mb-6 text-center md:text-left">{item.description}</p>
                          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                            {item.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold border border-white/30">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <div className="text-center md:text-left">
                            <a 
                              href={item.link}
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg inline-block"
                            >
                              Explore {item.title} →
                            </a>
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                            <h4 className="text-2xl font-bold mb-4 text-center">Key Highlights</h4>
                            <ul className="space-y-3">
                              {item.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-lg">
                                  <span className="text-cyan-400 mr-3">✓</span>
                                  <span className="text-white/90">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contentItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 text-center">{item.image}</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-cyan-300">{item.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{item.description}</p>
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <a 
                    href={item.link}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Features */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">🎯 Interactive Features</h3>
              <p className="text-xl opacity-90">Experience our content with cutting-edge interactive features</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h4 className="text-lg font-bold mb-2 text-cyan-300">Auto-Rotating</h4>
                <p className="text-gray-300 text-sm">Content automatically rotates every 5 seconds</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="text-lg font-bold mb-2 text-purple-300">Responsive</h4>
                <p className="text-gray-300 text-sm">Optimized for all devices and screen sizes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-lg font-bold mb-2 text-emerald-300">Fast Loading</h4>
                <p className="text-gray-300 text-sm">Lightning-fast content delivery and rendering</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="text-lg font-bold mb-2 text-pink-300">Beautiful Design</h4>
                <p className="text-gray-300 text-sm">Stunning visual design with smooth animations</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Dive into our revolutionary content collection and discover the technologies that will shape tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/pages/RevolutionaryTechBreakthrough2026" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg">
                Start Exploring →
              </a>
              <a href="/pages/NextGenInnovationHub2026" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg border border-white/30">
                Join Innovation Hub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;