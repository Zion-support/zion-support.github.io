import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Award, TrendingUp } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: "📊",
      stats: "95% faster insights",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Automated Customer Support",
      description: "24/7 AI-powered customer service that understands context and provides instant solutions.",
      icon: "🤖",
      stats: "99.2% satisfaction rate",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Intelligent Process Automation",
      description: "Streamline workflows and eliminate manual tasks with our smart automation solutions.",
      icon: "⚙️",
      stats: "80% time savings",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Forecast trends and make data-driven decisions with our machine learning algorithms.",
      icon: "🔮",
      stats: "300% ROI improvement",
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800/50 to-purple-900/50 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Featured Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our most popular AI and IT solutions that are transforming businesses worldwide
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12 rounded-lg`}>
                    <div className="text-center">
                      <div className="text-6xl mb-6">{slide.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                        {slide.description}
                      </p>
                      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                        <TrendingUp className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold">{slide.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;