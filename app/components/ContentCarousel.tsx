'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business with their AI solutions. We saw a 300% increase in efficiency and 50% reduction in costs.',
      rating: 5,
      image: '/images/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'InnovateLabs',
      role: 'CTO',
      content: 'The team at Zion Tech Group delivered exceptional results. Their expertise in AI and cloud solutions is unmatched.',
      rating: 5,
      image: '/images/testimonials/michael.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      role: 'VP of Operations',
      content: 'Outstanding service and support. They helped us implement AI solutions that revolutionized our operations.',
      rating: 5,
      image: '/images/testimonials/emily.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <div className="text-2xl font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <Quote className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                      
                      <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                        "{testimonial.content}"
                      </p>
                      
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-cyan-400 font-medium">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-500' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;