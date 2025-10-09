import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      image: '/images/analytics.jpg',
      cta: 'Learn More',
      href: '/ai-analytics-dashboard'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert guidance.',
      image: '/images/cloud.jpg',
      cta: 'Get Started',
      href: '/cloud-services'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with enterprise-grade security solutions and monitoring.',
      image: '/images/security.jpg',
      cta: 'Secure Now',
      href: '/cybersecurity'
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
    <div className="relative bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Solutions</h2>
          <p className="text-xl text-gray-600">Discover our most popular services and solutions</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <div className="h-64 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl font-bold text-white">{index + 1}</span>
                            </div>
                            <p className="text-gray-600">Solution Preview</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{slide.title}</h3>
                        <p className="text-gray-600 mb-6">{slide.description}</p>
                        <a
                          href={slide.href}
                          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                        >
                          {slide.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;