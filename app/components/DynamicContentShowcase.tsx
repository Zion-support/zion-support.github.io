'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  change?: string;
}

interface DynamicContentShowcaseProps {
  testimonials?: Testimonial[];
  stats?: Stat[];
  title?: string;
  description?: string;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The AI solutions provided by Zion Tech Group have transformed our business operations. The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5,
      avatar: '/images/avatars/sarah-johnson.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'InnovateLab',
      role: 'Founder',
      content: 'Outstanding technical expertise and excellent customer service. They helped us implement a complex AI system that exceeded our expectations.',
      rating: 5,
      avatar: '/images/avatars/michael-chen.jpg'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5,
      avatar: '/images/avatars/emily-rodriguez.jpg'
    }
  ],
  stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', change: '+25%' },
    { icon: TrendingUp, value: '300%', label: 'Average Growth', change: '+15%' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating', change: '+0.2' },
    { icon: Award, value: '15', label: 'Industry Awards', change: '+3' }
  ],
  title = 'What Our Clients Say',
  description = 'Don\'t just take our word for it. Here\'s what our clients have to say about our services.',
  autoRotate = true,
  rotationInterval = 5000
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (!autoRotate || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [autoRotate, rotationInterval, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 mb-1">{stat.label}</div>
              {stat.change && (
                <div className="text-green-400 text-sm font-semibold">
                  {stat.change} from last year
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
                    <div className="text-center">
                      <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl text-gray-300 mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center gap-4">
                        {testimonial.avatar && (
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <div className="font-semibold text-white text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-400">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-purple-500' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Join Our Success Stories
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
