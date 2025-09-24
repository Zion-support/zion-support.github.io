'use client';

import { useState, useEffect } from 'react';
import TestimonialCard, { testimonials } from './TestimonialCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className='bg-gray-50 dark:bg-gray-900 py-16'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            What Our Clients Say
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Don't just take our word for it. Here's what industry leaders say
            about our solutions.
          </p>
        </div>

        <div className='relative'>
          {testimonials[currentIndex] && (
            <TestimonialCard
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
          )}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700'
            aria-label='Previous testimonial'
          >
            <ChevronLeftIcon className='h-6 w-6 text-gray-600 dark:text-gray-300' />
          </button>

          <button
            onClick={goToNext}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700'
            aria-label='Next testimonial'
          >
            <ChevronRightIcon className='h-6 w-6 text-gray-600 dark:text-gray-300' />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className='flex justify-center mt-8 space-x-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className='text-center mt-6'>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className='text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
          >
            {isAutoPlaying ? 'Pause' : 'Resume'} auto-play
          </button>
        </div>
      </div>
    </div>
  );
}
