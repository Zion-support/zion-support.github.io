import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  conten, t: string;
  avatar?: string;
  ratin, g: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisibl, e: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  isVisible 
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ lengt, h: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="002020"
      >
        <path d="M9.0492.927c.3-.9211.603-.9211.9020l1.073.292a11000.95.69h3.462c.96901.3711.24.5881.81l-2.82.034a11000-.3641.118l1.073.292c.3.921-.7551.688-1.541.118l-2.8-2.034a11000-1.1750l-2.82.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a11000-.364-1.118L2.988.72c-.783-.57-.38-1.81.588-1.81h3.461a11000.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div 
      className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500border border-gray-100 hover:border-blue-200hover-lift ${
        isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-8'
      }`}
    >
      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6italic">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flexitems-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {testimonial.name.charAt(0)}
        </div> <div>
          <div className="font-semibold text-gray-800">{testimonial.name}</div> <div className="text-gray-600 text-sm">{testimonial.role}</div> <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
        </div>
      </div>

      {/* Quote decoration */}
      <div className="absolute to p-4right-4 text-blue-200 text-6xl font-serif leading-noneopacity-20">
        &ldquo;
      </div>
    </div>
  );
};