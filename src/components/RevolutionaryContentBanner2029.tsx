import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2029: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "🌟 Revolutionary Tech Breakthrough 2029",
      description: "Experience the most advanced technological innovations that will reshape our world",
      link: "/pages/RevolutionaryTechBreakthrough2029",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟"
    },
    {
      id: 2,
      title: "🚀 Ultimate Tech Showcase 2029",
      description: "Interactive demonstrations of cutting-edge technologies that will define the future",
      link: "/pages/UltimateTechShowcase2029",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🚀"
    },
    {
      id: 3,
      title: "🧠 Next-Gen Innovation Hub 2029",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      link: "/pages/NextGenInnovationHub2029",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH CONTENT • JANUARY 2029
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Revolutionary Technology 2029
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technological innovations that will reshape our world in 2029
          </p>
        </div>

        {/* Slides */}
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-500 ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full absolute inset-0'
                  : 'opacity-0 translate-x-full absolute inset-0'
              }`}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">{slide.icon}</div>
                  <h3 className="text-3xl font-bold mb-4 text-white">{slide.title}</h3>
                  <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">{slide.description}</p>
                  <a
                    href={slide.link}
                    className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                  >
                    Explore Innovation →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {slides.map((slide) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`group bg-gradient-to-br ${slide.gradient} bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {slide.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">{slide.title}</h4>
                <p className="text-sm opacity-90 mb-4">{slide.description}</p>
                <div className="text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Learn More →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Experience the Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join us in exploring the most revolutionary technologies that will define 2029 and beyond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
                Start Your Journey
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                View All Innovations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2029;