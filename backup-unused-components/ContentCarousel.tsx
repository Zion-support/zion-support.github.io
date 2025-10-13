<<<<<<< HEAD
import React from 'react';
import { useState, useEffect } from "react";
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
//     id: 1,
//     title: "AI-Powered Solutions",
//     description:
      "Transform your business with cutting-edge artificial intelligence technologies.",
//     image: "/api/placeholder/600/400",
//     features: [
//       "Machine Learning",
//       "Natural Language Processing",
//       "Computer Vision",
//     ],
  },
  {
//     id: 2,
//     title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for modern businesses.",
//     image: "/api/placeholder/600/400",
//     features: ["Scalable Architecture", "99.9% Uptime", "Global CDN"],
  },
  {
//     id: 3,
//     title: "Cybersecurity",
//     description:
//       "Protect your digital assets with enterprise-grade security solutions.",
//     image: "/api/placeholder/600/400",
//     features: ["Threat Detection", "Data Encryption", "Compliance"],
  },
];

export default function ContentCarousel({
  slides = defaultSlides,
  autoPlay = true,
  interval = 5000,
  className = "",
}: ContentCarouselProps) {
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

=======
interface ContentCarouselProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentCarousel({ className = '', children }: ContentCarouselProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
//         <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8 items-center">
//                   <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {slide.title}
</h3>
                    <p className="text-gray-300 mb-6">{slide.description}</p>
                    <ul className="space-y-2">
                      {slide.features.map((feature, index) => (
//                         <li
                          key={index}
                          className="flex items-center text-gray-300"
//                         >
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
//                         </li>
                      ))}
//                     </ul>
</div>
                  <div className="flex justify-center">
//                     <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full max-w-md h-64 object-cover rounded-lg"
//                     />
</div>
</div>
</div>
</div>
          ))}
</div>
</div>

      {/* Navigation Arrows */}
//       <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
//       >
        <ChevronLeft className="w-6 h-6" />
</button>

//       <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
//       >
        <ChevronRight className="w-6 h-6" />
</button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
//           <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-cyan-400" : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
//           />
        ))}
</div>
</div>
=======
  );
}
