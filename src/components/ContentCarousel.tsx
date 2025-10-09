import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ContentCarouselProps {
  className?: string;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI-Powered Business Intelligence 2025",
      description: "Revolutionary AI solutions for enterprise data analysis and decision-making",
      link: "/ai-business-intelligence",
      image: "🤖",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Advanced Automation Solutions",
      description: "Streamline your operations with intelligent process automation",
      link: "/ai-automation",
      image: "⚙️",
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Quantum Computing Services",
      description: "Next-generation computing power for complex problem solving",
      link: "/quantum-computing",
      image: "⚛️",
      color: "from-purple-600 to-pink-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-300">
            Discover our latest AI and IT innovations
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} p-8 md:p-12 rounded-xl`}>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="text-6xl md:text-8xl">
                        {slide.image}
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {slide.title}
                        </h3>
                        <p className="text-lg text-white/90 mb-6">
                          {slide.description}
                        </p>
                        <Link
                          to={slide.link}
                          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;