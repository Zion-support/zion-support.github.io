'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business with their AI solutions. We saw a 300% increase in productivity within the first month.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Global Manufacturing',
      role: 'CTO',
      content: 'Their AI predictive analytics helped us reduce costs by 25% and improve our supply chain efficiency significantly.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Healthcare Plus',
      role: 'Operations Director',
      content: 'The AI cybersecurity monitoring saved us from multiple potential breaches. Their 24/7 support is exceptional.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'David Kim',
      company: 'E-commerce Solutions',
      role: 'Founder',
      content: 'Their micro SAAS tools are game-changers. We implemented 5 different solutions and our efficiency skyrocketed.',
      rating: 5,
      image: '/api/placeholder/80/80'
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
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300">Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-4">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <div className="text-white text-2xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        Verified Customer
                      </div>
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                        <span>Read Full Story</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
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