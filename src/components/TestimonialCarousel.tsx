import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp',
    content: 'Zion Tech transformed our entire IT infrastructure. The AI solutions they provided increased our efficiency by 300%.',
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    content: 'Outstanding cybersecurity services. They protected our data and helped us achieve full compliance in record time.',
    avatar: '👨‍💼',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    company: 'GlobalTech',
    content: 'The cloud migration was seamless. We saved 50% on infrastructure costs while improving performance significantly.',
    avatar: '👩‍💻',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder',
    company: 'InnovateLab',
    content: 'Their data analytics solutions gave us insights we never had before. Our decision-making process is now data-driven.',
    avatar: '👨‍🔬',
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <p className="text-lg text-gray-700 italic leading-relaxed">
            "{testimonials[currentIndex].content}"
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-900">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-gray-600">
              {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;