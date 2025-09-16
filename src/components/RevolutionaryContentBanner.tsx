import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2025",
      subtitle: "Revolutionary Innovation",
      description: "Experience the most groundbreaking technological breakthroughs that are reshaping our world",
      link: "/pages/UltimateTechBreakthrough2025",
      color: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀"
    },
    {
      title: "🌟 Innovation Showcase 2025",
      subtitle: "Cutting-Edge Technology",
      description: "Discover the most innovative technologies that are transforming industries and creating new possibilities",
      link: "/pages/InnovationShowcase2025",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "🌟"
    },
    {
      title: "⚡ Revolutionary Services 2025",
      subtitle: "Next-Gen Solutions",
      description: "Transform your business with our groundbreaking services that are reshaping industries",
      link: "/pages/RevolutionaryServices2025",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  return (
    <>
      <Helmet>
        <title>Revolutionary Content 2025 - Latest Innovations</title>
        <meta name="description" content="Discover our revolutionary new content featuring the latest technological breakthroughs and innovations of 2025." />
      </Helmet>
      
      <div className="relative overflow-hidden mb-12">
        {/* Main Banner */}
        <div className={`bg-gradient-to-r ${contentSlides[currentSlide].color} rounded-2xl p-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl animate-bounce">{contentSlides[currentSlide].icon}</span>
              <h2 className="text-3xl font-bold">{contentSlides[currentSlide].title}</h2>
              <span className="text-4xl animate-bounce">{contentSlides[currentSlide].icon}</span>
            </div>
            <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
              {contentSlides[currentSlide].description}
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <a 
                href={contentSlides[currentSlide].link}
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold border border-white/30"
              >
                Explore {contentSlides[currentSlide].subtitle} →
              </a>
              <button className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30">
                Watch Demo
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {contentSlides.map((_, index) => (
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
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {contentSlides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-br ${slide.color}/20 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/20 group`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{slide.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{slide.title}</h3>
              <p className="text-white/80 text-sm mb-4">{slide.subtitle}</p>
              <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                Explore Now →
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default RevolutionaryContentBanner;