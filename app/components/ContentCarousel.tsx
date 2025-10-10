'use client';
import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

interface ContentCarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  slides,
  autoPlay = true,
  interval = 5000,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) {
    return <div className="text-center text-gray-500">No slides available</div>;
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Our Solutions
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered solutions designed to transform your business.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-500 ease-in-out">
              <div className="w-full flex-shrink-0">
                <div className="bg-white rounded-xl p-8 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {currentSlideData.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {currentSlideData.description}
                      </p>
                      <a
                        href={currentSlideData.ctaLink}
                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        {currentSlideData.cta}
                      </a>
                    </div>
                    <div className="text-center">
                      <img
                        src={currentSlideData.image}
                        alt={currentSlideData.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
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