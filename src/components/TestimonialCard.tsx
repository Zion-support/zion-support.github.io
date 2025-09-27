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
          i < rating ? 'text-yellow-4 0 0' : 'text-gray-3 0 0'
        }`}
        fill="currentColor"
        viewBox="00 2 0 2 0"
      >
        <path d="M9.04 9 2.92 7 c.3-.92 1 1.6 0 3-.92 1 1.9 0 2 0 l1.0 7 3.29 2 a1 1 0 0 0.95.6 9 h3.46 2 c.9 6 9 0 1.37 1 1.24.58 8 1.8 1 l-2.82.03 4 a1 1 0 0 0-.36 4 1.11 8 l1.0 7 3.29 2 c.3.9 2 1-.75 5 1.6 8 8-1.5 4 1.11 8 l-2.8-2.03 4 a1 1 0 0 0-1.1 7 5 0 l-2.82.03 4 c-.7 8 4.57-1.8 3 8-.1 9 7-1.5 3 9-1.11 8 l1.07-3.29 2 a1 1 0 0 0-.3 6 4-1.11 8 L2.9 8 8.7 2 c-.7 8 3-.57-.38-1.81.5 8 8-1.8 1 h3.46 1 a1 1 0 0 0.9 5 1-.6 9 l1.07-3.29 2 z" />
      </svg>
    ));
  };

  return (
    <div 
      className={`group p-8bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-50 0 border border-gray-10 0 hover:border-blue-20 0 hover-lift ${
        isVisible ? 'opacity-10 0 translate-y-0' : 'opacity-0translate-y-8'
      }`}
    >
      {/* Rating */}
      <div className="flex items-centermb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Content */}
      <blockquote className="text-gray-70 0 text-lg leading-relaxed mb-6italic">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flexitems-center">
        <div className="w-1 2 h-1 2 bg-gradient-to-br from-blue-50 0 to-purple-60 0 rounded-full flex items-center justify-center text-white font-bold text-lgmr-4">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semiboldtext-gray-8 0 0">{testimonial.name}</div>
          <div className="text-gray-60 0 text-sm">{testimonial.role}</div>
          <div className="text-blue-60 0 text-sm font-medium">{testimonial.company}</div>
        </div>
      </div>

      {/* Quote decoration */}
      <div className="absolute top-4right-4text-blue-20 0 text-6xl font-serif leading-noneopacity-20">
        &ldquo;
      </div>
    </div>
  );
};