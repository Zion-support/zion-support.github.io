import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ContentCarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const defaultSlides: Slide[] = [
  {
    id: 1,
    title: "AI-Powered Solutions",
    description: "Transform your business with cutting-edge artificial intelligence technology.",
    image: "/images/ai-solutions.jpg",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for modern businesses.",
    image: "/images/cloud-infrastructure.jpg",
    features: ["AWS Integration", "Azure Solutions", "Google Cloud", "Hybrid Cloud"]
  },
  {
    id: 3,
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced security measures.",
    image: "/images/cybersecurity.jpg",
    features: ["Threat Detection", "Data Encryption", "Security Audits", "Compliance"]
  }
];

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  slides = defaultSlides,
  autoPlay = true,
  interval = 5000,
  className = ""
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{slide.description}</p>
                      <ul className="space-y-2">
                        {slide.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-slate-700 rounded-lg p-4 h-64 flex items-center justify-center">
                        <span className="text-gray-400">Image placeholder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;