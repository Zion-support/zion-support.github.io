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
      role: 'CTO',
      content: 'Zion Tech Group transformed our AI capabilities. Their solutions increased our efficiency by 300% and reduced costs by 50%.',
      rating: 5,
      image: '/images/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The cloud migration service was flawless. Zero downtime and seamless transition. Highly recommend their expertise.',
      rating: 5,
      image: '/images/testimonials/michael.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'SecureBank Ltd',
      role: 'Security Director',
      content: 'Their cybersecurity solutions are top-notch. We feel completely protected with their 24/7 monitoring and support.',
      rating: 5,
      image: '/images/testimonials/emily.jpg'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'InnovateTech',
      role: 'VP of Engineering',
      content: 'The AI implementation exceeded our expectations. The team was professional, knowledgeable, and delivered on time.',
      rating: 5,
      image: '/images/testimonials/david.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-cyan-400 font-semibold">{testimonial.role}</p>
                        <p className="text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-300 text-lg leading-relaxed">
                      <Quote className="w-6 h-6 text-cyan-400 mb-2" />
                      {testimonial.content}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;