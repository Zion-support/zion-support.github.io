import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.02),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
            <Quote className="w-8 h-8 text-white" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 text-center relative">
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white">{currentTestimonial.name}</h4>
                <p className="text-cyan-400 font-medium">{currentTestimonial.position}</p>
                <p className="text-gray-400 text-sm">{currentTestimonial.company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-gray-500 text-xs">🏥 Healthcare</div>
            <div className="text-gray-500 text-xs">🏦 Finance</div>
            <div className="text-gray-500 text-xs">🏭 Manufacturing</div>
            <div className="text-gray-500 text-xs">🛒 Retail</div>
            <div className="text-gray-500 text-xs">🏛️ Government</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <div className="w-4 h-4 bg-blue-500 rounded-full opacity-40"></div>
      </div>

      {/* CSS animations will be handled by Tailwind classes */}
    </section>
  );
};

export default TestimonialsSection;