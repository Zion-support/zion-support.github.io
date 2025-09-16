import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2039",
      description: "Experience the most revolutionary technological breakthroughs that will reshape reality itself",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2039",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough 2040",
      description: "Witness the most revolutionary technology breakthroughs that will redefine the boundaries of possibility",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechBreakthrough2040",
      features: ["Synthetic Consciousness", "Quantum Reality Engine", "Interdimensional AI"]
    },
    {
      id: 3,
      title: "Interactive Tech Showcase 2040",
      description: "Explore the most revolutionary technologies of 2040 with our interactive demonstration platform",
      image: "🌟",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/InteractiveTechShowcase2040",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2040
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🌟 Revolutionary Content Carousel 2040
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most revolutionary technological content that will reshape the future
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {content.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="text-8xl">{item.image}</div>
                          <div>
                            <h3 className="text-4xl font-bold mb-2">{item.title}</h3>
                            <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-sm font-semibold`}>
                              Revolutionary Technology
                            </div>
                          </div>
                        </div>
                        <p className="text-xl opacity-90 mb-8">
                          {item.description}
                        </p>
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                          <ul className="space-y-2">
                            {item.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-3">
                                <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                                <span className="opacity-90">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-8">
                          <a 
                            href={item.link}
                            className={`inline-block bg-gradient-to-r ${item.color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                          >
                            Explore {item.title} →
                          </a>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 border border-white/20">
                          <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
                          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 text-center">
                            <div className="text-6xl mb-4">{item.image}</div>
                            <p className="text-lg opacity-90 mb-4">
                              Experience {item.title} in action
                            </p>
                            <button className={`bg-gradient-to-r ${item.color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                              Launch Demo →
                            </button>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 border border-white/20">
                          <h4 className="text-xl font-bold mb-4">Performance Metrics</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="opacity-90">Processing Power</span>
                              <span className="font-bold">∞</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="opacity-90">Efficiency</span>
                              <span className="font-bold">100%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="opacity-90">Reality Control</span>
                              <span className="font-bold">Complete</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="opacity-90">Dimensional Reach</span>
                              <span className="font-bold">Infinite</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join the most revolutionary technological breakthrough in history and transform your reality
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2040;