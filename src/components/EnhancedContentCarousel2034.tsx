import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2034",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2034",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2034",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2034",
      features: ["Autonomous AI Agents", "Neural Interface Pro", "Quantum Internet"]
    },
    {
      id: 3,
      title: "Comprehensive Services 2034",
      description: "Complete suite of revolutionary services designed to transform your business",
      image: "🌐",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/ComprehensiveServices2034",
      features: ["AI Transformation", "Quantum Computing", "Neural Interfaces"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 FEATURED CONTENT • JANUARY 2034
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary Technology Content 2034</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough content featuring the most advanced technologies of 2034
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-12 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{item.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{item.description}</p>
                        <ul className="space-y-3 mb-8">
                          {item.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Content →
                        </a>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-4 text-center">Key Features</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Technology Level</span>
                            <span className="text-sm font-semibold">2034</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Innovation Score</span>
                            <span className="text-sm font-semibold">99.9%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Future Readiness</span>
                            <span className="text-sm font-semibold">100%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Impact Potential</span>
                            <span className="text-sm font-semibold">Revolutionary</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2034;