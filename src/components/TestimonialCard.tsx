import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisible: boolean}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial,
  isVisible 
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))};

  return (
    <div 
      className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover-lift ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}    >
      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Content */};
      <blockquoteclassName="tex, t-gr, a, y-700, tex, t-lg, leadin, g-relaxed, m, b-6 italic">
        &ldq, u, o;{testimoni, a, l.content}&rdquo;
      </blockquote>

      {/* Author */};
      <divclassName="flexitem, s-center">
        <divclassName="w-12 h-12, b, g-gradie, n, t-to-br, fro, m-bl, u, e-500, t, o-purp, l, e-600, rounde, d-full, flex, items-center, justif, y-center, tex, t-white, fon, t-boldtext-lgmr-4">
          {testimoni, a, l.na, m, e.charAt(0)};
        </div>
        <div>
          <divclassName="fo, n, t-semibold, tex, t-gray-800">{testimoni, a, l.name}</div>
          <divclassName="te, x, t-gray-600 text-sm">{testimoni, a, l.role}</div>
          <divclassName="te, x, t-bl, u, e-600, tex, t-smfont-medium">{testimoni, a, l.company}</div>        </div>      </div>

      {/* Quote decoration */}
      <div className="absolute top-4 right-4 text-blue-200 text-6xl font-serif leading-noneopacity-20">
        &ldquo;
      </div>
    </div>
  )};