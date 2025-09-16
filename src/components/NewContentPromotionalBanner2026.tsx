import React, { useState, useEffect } from 'react';

const NewContentPromotionalBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newContent = [
    {
      title: "Advanced Tech Innovation 2026",
      description: "Revolutionary technologies that are reshaping our understanding of what's possible",
      icon: "🚀",
      link: "/pages/AdvancedTechInnovation2026",
      gradient: "from-purple-600 to-pink-600",
      features: ["Autonomous AI Ecosystems", "Quantum-Neural Hybrid", "Consciousness Interface", "Synthetic Reality"]
    },
    {
      title: "Quantum AI Revolution 2026",
      description: "Experience the convergence of quantum computing and artificial intelligence",
      icon: "⚛️",
      link: "/pages/QuantumAIRevolution2026",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum Neural Networks", "Quantum Machine Learning", "Consciousness Interface", "Exponential Processing"]
    },
    {
      title: "Revolutionary Tech Trends 2026",
      description: "Cutting-edge technologies that are defining the future of innovation",
      icon: "📈",
      link: "/pages/RevolutionaryTechTrends2026",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Synthetic Intelligence", "Quantum-Neural Fusion", "Holographic Reality", "Autonomous Ecosystems"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % newContent.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, newContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newContent.length) % newContent.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-emerald-500/20 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <divdiv
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BRAND NEW CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary New Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough content featuring cutting-edge AI, quantum computing, 
            neural interfaces, and revolutionary technologies that are reshaping our world.
          </p>
        </divdiv>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
              <divdiv
                key={currentSlide}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${newContent[currentSlide].gradient} p-12 rounded-2xl`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="text-8xl mb-6">{newContent[currentSlide].icon}</div>
                      <h3 className="text-4xl font-bold mb-6">{newContent[currentSlide].title}</h3>
                      <p className="text-xl opacity-90 mb-8">{newContent[currentSlide].description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {newContent[currentSlide].features.map((feature, index) => (
                          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                            <span className="text-sm font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <a
                          href={newContent[currentSlide].link}
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                        >
                          Explore Now →
                        </a>
                        <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-4">Why This Matters</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Revolutionary breakthrough technology</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Industry-leading performance</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Proven real-world applications</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Expert-backed research</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </divdiv>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All New Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {newContent.map((item, index) => (
              <divdiv
                key={item.title}
                whileInView={{ opacity: 1, y: 0 }}
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{item.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="block w-full bg-white/20 text-white text-center py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                >
                  Explore →
                </a>
              </divdiv>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore the Future?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of innovators who are already experiencing the next generation of technology.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/pages/AdvancedTechInnovation2026"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Exploring →
              </a>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Get Notifications
              </button>
            </div>
          </div>
        </divdiv>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;