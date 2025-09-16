import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      subtitle: "Experience the most revolutionary technological advances reshaping our world",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/80 to-pink-900/80",
      borderColor: "border-purple-400",
      textColor: "text-purple-100"
    },
    {
      id: 2,
      title: "🌟 Ultimate Tech Revolution 2025",
      subtitle: "Witness the convergence of AI, quantum computing, and neural interfaces",
      link: "/pages/UltimateTechRevolution2025",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900/80 to-purple-900/80",
      borderColor: "border-indigo-400",
      textColor: "text-indigo-100"
    },
    {
      id: 3,
      title: "⚡ Next-Gen Innovation Hub 2025",
      subtitle: "Discover cutting-edge technologies transforming every industry",
      link: "/pages/NextGenInnovationHub2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/80 to-blue-900/80",
      borderColor: "border-cyan-400",
      textColor: "text-cyan-100"
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative overflow-hidden rounded-2xl mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
              🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary Technology Showcase
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced and revolutionary technologies that are reshaping our world
            </p>
          </div>

          {/* Slides Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-8 md:p-12 border ${slide.borderColor}/30`}>
                      <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {slide.title}
                        </h3>
                        <p className={`text-lg ${slide.textColor} mb-8 max-w-2xl mx-auto`}>
                          {slide.subtitle}
                        </p>
                        <div className="flex justify-center space-x-4">
                          <Link
                            to={slide.link}
                            className={`bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
                          >
                            Explore Now →
                          </Link>
                          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/pages/RevolutionaryTechBreakthrough2025"
              className="group bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-white mb-2">Revolutionary Breakthrough</h4>
                <p className="text-purple-200 text-sm">Most advanced tech breakthroughs</p>
              </div>
            </Link>

            <Link
              to="/pages/UltimateTechRevolution2025"
              className="group bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h4 className="text-xl font-bold text-white mb-2">Ultimate Revolution</h4>
                <p className="text-indigo-200 text-sm">Complete tech transformation</p>
              </div>
            </Link>

            <Link
              to="/pages/NextGenInnovationHub2025"
              className="group bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-white mb-2">Innovation Hub</h4>
                <p className="text-cyan-200 text-sm">Next-generation technologies</p>
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-2xl">🎯</div>
              <div>
                <div className="text-lg font-semibold text-white">Ready to Experience the Future?</div>
                <div className="text-sm text-purple-200">Join thousands exploring revolutionary technologies</div>
              </div>
              <Link
                to="/pages/RevolutionaryTechBreakthrough2025"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Exploring →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;