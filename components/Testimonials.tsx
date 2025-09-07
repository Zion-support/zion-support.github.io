import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsProps {
  className?: string;
  showAll?: boolean;
}

export default function Testimonials({ className = '', showAll = false }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      content: 'Zion Tech Group transformed our digital infrastructure completely. Their AI solutions increased our efficiency by 40% and their team\'s expertise is unmatched.',
      rating: 5,
      avatar: '/testimonials/sarah-johnson.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'InnovateLabs',
      role: 'CTO',
      content: 'The mobile app they developed for us exceeded all expectations. Clean code, excellent performance, and outstanding support throughout the project.',
      rating: 5,
      avatar: '/testimonials/michael-chen.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'DataFlow Inc',
      role: 'Product Manager',
      content: 'Their cloud migration services saved us thousands of dollars and improved our system reliability. Highly professional and results-driven team.',
      rating: 5,
      avatar: '/testimonials/emily-rodriguez.jpg'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'From concept to launch, Zion Tech Group delivered an exceptional web platform. Their attention to detail and user experience is remarkable.',
      rating: 5,
      avatar: '/testimonials/david-thompson.jpg'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      company: 'Enterprise Systems',
      role: 'IT Director',
      content: 'The cybersecurity solutions they implemented have given us peace of mind. Their proactive approach and 24/7 monitoring are invaluable.',
      rating: 5,
      avatar: '/testimonials/lisa-wang.jpg'
    }
  ];

  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  useEffect(() => {
    if (!isAutoPlaying || showAll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === displayTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, displayTestimonials.length, showAll]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === displayTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayTestimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (showAll) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
        {displayTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-3">
              {renderStars(testimonial.rating)}
            </div>
            
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <span className="text-gray-600 font-semibold text-lg">
              {displayTestimonials[currentIndex]?.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              {displayTestimonials[currentIndex]?.name}
            </h4>
            <p className="text-gray-600">
              {displayTestimonials[currentIndex]?.role}, {displayTestimonials[currentIndex]?.company}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center mb-4">
          {renderStars(displayTestimonials[currentIndex]?.rating || 5)}
        </div>
        
        <blockquote className="text-lg text-gray-600 italic mb-6">
          "{displayTestimonials[currentIndex]?.content}"
        </blockquote>
        
        <div className="flex items-center justify-center space-x-2">
          {displayTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}