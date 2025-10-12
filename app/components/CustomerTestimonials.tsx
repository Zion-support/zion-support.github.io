'use client';
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
}

const CustomerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions reduced our operational costs by 40% while improving efficiency. The team is incredibly professional and their expertise in cloud migration is unmatched.',
      rating: 5,
      avatar: 'SJ',
      industry: 'Technology'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'Global Finance Inc',
      role: 'VP of Operations',
      content: 'The AI-powered analytics dashboard they built for us has revolutionized our decision-making process. We can now predict market trends with 95% accuracy. This is game-changing technology.',
      rating: 5,
      avatar: 'MC',
      industry: 'Finance'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'HealthTech Innovations',
      role: 'CEO',
      content: 'Their cybersecurity solutions protected us from multiple sophisticated attacks. The AI threat detection system they implemented works 24/7 and has never failed us. Highly recommended!',
      rating: 5,
      avatar: 'ER',
      industry: 'Healthcare'
    },
    {
      id: '4',
      name: 'David Thompson',
      company: 'E-commerce Plus',
      role: 'Founder',
      content: 'The custom e-commerce platform they developed increased our conversion rates by 60%. Their attention to detail and understanding of our business needs was exceptional.',
      rating: 5,
      avatar: 'DT',
      industry: 'E-commerce'
    },
    {
      id: '5',
      name: 'Lisa Wang',
      company: 'Manufacturing Pro',
      role: 'Operations Director',
      content: 'Their IoT integration and AI automation solutions streamlined our manufacturing process. We saw a 35% increase in productivity within the first quarter of implementation.',
      rating: 5,
      avatar: 'LW',
      industry: 'Manufacturing'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-2xl p-8 border border-purple-700">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h3>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what industry leaders say about our AI and IT solutions.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative overflow-hidden">
          {/* Quote decoration */}
          <div className="absolute top-4 right-4 text-purple-500 opacity-20">
            <Quote className="w-16 h-16" />
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar and basic info */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto md:mx-0">
                {currentTestimonial.avatar}
              </div>
              <div className="text-white font-semibold text-lg">{currentTestimonial.name}</div>
              <div className="text-purple-400 text-sm">{currentTestimonial.role}</div>
              <div className="text-gray-400 text-sm">{currentTestimonial.company}</div>
              <div className="text-gray-500 text-xs mt-1">{currentTestimonial.industry}</div>
            </div>

            {/* Testimonial content */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                "{currentTestimonial.content}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Auto-play toggle */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
            }`}
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="mt-8 text-center">
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>4.9/5 Average Rating</span>
          </div>
          <div className="flex items-center">
            <span>500+ Happy Clients</span>
          </div>
          <div className="flex items-center">
            <span>99% Client Retention</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;