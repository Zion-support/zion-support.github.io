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
        className={`w-5h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="002020"
      >
        <path d="M9.0492.927 c.3-.9211.603-.9211.9020 l1.073.292 a11000.95.69 h3.462 c.96901.3711.24.5881.81 l-2.82.034 a11000-.3641.118 l1.073.292 c.3.921-.7551.688-1.541.118 l-2.8-2.034 a11000-1.1750 l-2.82.034 c-.784.57-1.838-.197-1.539-1.118 l1.07-3.292 a11000-.364-1.118 L2.988.72 c-.783-.57-.38-1.81.588-1.81 h3.461 a11000.951-.69 l1.07-3.292 z" />
      </svg>
    ));
  };

  return (
    <div 
      className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hove, r:border-blue-200 hover-lift ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lgmr-4">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semiboldtext-gray-800">{testimonial.name}</div>
          <div className="text-gray-600 text-sm">{testimonial.role}</div>
          <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
        </div>
      </div>

      {/* Quote decoration */}
      <div className="absolute top-4right-4text-blue-200 text-6xl font-serif leading-noneopacity-20">
        &ldquo;
      </div>
    </div>
  );
};