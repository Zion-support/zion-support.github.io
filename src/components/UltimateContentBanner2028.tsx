import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UltimateContentBanner2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2028",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      link: "/pages/UltimateTechBreakthrough2028",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2028",
      subtitle: "Interactive showcase of cutting-edge technologies",
      description: "Explore AI, Quantum, Neural, and Synthetic Intelligence",
      link: "/pages/RevolutionaryTechShowcase2028",
      gradient: "from-indigo-600 to-purple-600",
      icon: "⚡"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2028",
      subtitle: "Discover revolutionary technologies shaping the future",
      description: "50+ Active Innovations with 99.9% Success Rate",
      link: "/pages/NextGenInnovationHub2028",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH CONTENT • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology Content 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} rounded-2xl p-12 text-center`}>
                    <div className="text-8xl mb-6 animate-bounce">{slide.icon}</div>
                    <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-xl mb-4 opacity-90">{slide.subtitle}</p>
                    <p className="text-lg mb-8 opacity-75">{slide.description}</p>
                    <Link 
                      to={slide.link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                    >
                      Explore {slide.title.split(' ')[0]} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">🌟 Quick Access to Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
              <Link
                key={index}
                to={slide.link}
                className={`bg-gradient-to-br ${slide.gradient} rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="text-5xl mb-4">{slide.icon}</div>
                <h4 className="text-xl font-bold mb-2">{slide.title}</h4>
                <p className="text-sm opacity-90 mb-4">{slide.description}</p>
                <div className="text-sm font-semibold">Explore Now →</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring these revolutionary technologies and be part of the next evolution of human consciousness.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/pages/UltimateTechBreakthrough2028"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/pages/NextGenInnovationHub2028"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Explore Innovation Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2028;