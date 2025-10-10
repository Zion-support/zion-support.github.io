'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'services'>('testimonials');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions they implemented have increased our efficiency by 300%.',
      rating: 5,
      avatar: 'https://via.placeholder.com/80x80/6366f1/ffffff?text=SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5,
      avatar: 'https://via.placeholder.com/80x80/10b981/ffffff?text=MC'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'CloudFirst Inc.',
      role: 'VP of Engineering',
      content: 'Their cloud migration expertise saved us months of work and thousands of dollars. Exceptional service!',
      rating: 5,
      avatar: 'https://via.placeholder.com/80x80/f59e0b/ffffff?text=ER'
    },
    {
      id: 4,
      name: 'David Kim',
      company: 'SecureNet Corp',
      role: 'Security Director',
      content: 'The cybersecurity solutions they implemented have given us peace of mind. Our data has never been safer.',
      rating: 5,
      avatar: 'https://via.placeholder.com/80x80/ef4444/ffffff?text=DK'
    }
  ];

  const services: Service[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: '🤖',
      features: ['Real-time processing', 'Predictive modeling', 'Custom dashboards', 'API integration']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs.',
      icon: '☁️',
      features: ['Auto-scaling', 'Disaster recovery', 'Cost optimization', '24/7 monitoring']
    },
    {
      id: 3,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: '🛡️',
      features: ['Threat detection', 'Compliance management', 'Incident response', 'Security training']
    },
    {
      id: 4,
      title: 'Micro SaaS Tools',
      description: 'Specialized business tools designed to streamline your operations.',
      icon: '⚡',
      features: ['Quick deployment', 'User-friendly interface', 'Scalable pricing', 'Regular updates']
    }
  ];

  useEffect(() => {
    if (!isPlaying || activeTab !== 'testimonials') return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, activeTab, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Client Testimonials
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'testimonials' ? (
          <div className="relative">
            {/* Testimonial Display */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-cyan-400 mr-2" />
                <div className="flex">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white text-center mb-8 max-w-4xl mx-auto">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-center">
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-cyan-400">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-500 w-8'
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicContentShowcase;