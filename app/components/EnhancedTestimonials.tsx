'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
  results: string[];
}

const EnhancedTestimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow Solutions',
      content: 'Zion Tech Group transformed our operations with their AI automation platform. We reduced manual processing time by 85% and increased our team productivity by 300%. The ROI was evident within the first quarter.',
      rating: 5,
      avatar: '👩‍💼',
      industry: 'Technology',
      results: ['85% reduction in manual work', '300% productivity increase', 'ROI in first quarter']
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'Operations Director',
      company: 'Global Manufacturing Co.',
      content: 'Their micro SaaS solution streamlined our inventory management across 15 facilities. The real-time analytics and predictive insights have saved us millions in operational costs.',
      rating: 5,
      avatar: '👨‍💼',
      industry: 'Manufacturing',
      results: ['15 facilities connected', 'Millions saved in costs', 'Real-time analytics']
    },
    {
      id: '3',
      name: 'Dr. Emily Watson',
      role: 'VP of Innovation',
      company: 'HealthTech Innovations',
      content: 'The enterprise AI platform revolutionized our patient data analysis. We can now process complex medical datasets 10x faster while maintaining 99.9% accuracy.',
      rating: 5,
      avatar: '👩‍⚕️',
      industry: 'Healthcare',
      results: ['10x faster processing', '99.9% accuracy', 'Complex data analysis']
    },
    {
      id: '4',
      name: 'James Thompson',
      role: 'CEO',
      company: 'FinTech Dynamics',
      content: 'Zion\'s AI assessment tools helped us identify $2M in potential savings. Their ROI calculator was spot-on, and the implementation exceeded our expectations.',
      rating: 5,
      avatar: '👨‍💻',
      industry: 'Finance',
      results: ['$2M potential savings', 'Exceeded expectations', 'Spot-on ROI predictions']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about their transformation with Zion Tech Group.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-gray-800 text-center mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="text-6xl">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-lg text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-blue-600 font-semibold">
                    {testimonials[activeTestimonial].company}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {testimonials[activeTestimonial].industry} Industry
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {testimonials[activeTestimonial].results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium">{result}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Industry Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
            <div className="text-gray-600">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24h</div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;