'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Pause, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface DynamicContentShowcaseProps {
  contentItems?: ContentItem[];
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  contentItems = [
    {
      id: '1',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Transform your data into actionable insights with our advanced analytics platform.',
      image: '/images/showcase/analytics-dashboard.jpg',
      category: 'Analytics',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable and secure cloud solutions designed for modern businesses.',
      image: '/images/showcase/cloud-infrastructure.jpg',
      category: 'Cloud',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Platform',
      description: 'Protect your business with enterprise-grade security solutions.',
      image: '/images/showcase/cybersecurity.jpg',
      category: 'Security',
      featured: true
    }
  ],
  testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business operations with their AI solutions. The results exceeded our expectations.',
      rating: 5,
      avatar: '/images/testimonials/sarah-johnson.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'CloudFirst Inc',
      role: 'CTO',
      content: 'The cloud infrastructure solutions provided by Zion Tech Group have been game-changing for our scalability.',
      rating: 5,
      avatar: '/images/testimonials/michael-chen.jpg'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'SecureData Ltd',
      role: 'Security Director',
      content: 'Their cybersecurity platform has given us peace of mind with comprehensive protection and monitoring.',
      rating: 5,
      avatar: '/images/testimonials/emily-rodriguez.jpg'
    }
  ],
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (isPlaying && autoPlay) {
      const interval = setInterval(() => {
        setCurrentContentIndex((prev) => (prev + 1) % contentItems.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlay, autoPlayInterval, contentItems.length]);

  useEffect(() => {
    if (isPlaying && autoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      }, autoPlayInterval * 2);
      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlay, autoPlayInterval, testimonials.length]);

  const nextContent = () => {
    setCurrentContentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevContent = () => {
    setCurrentContentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentContent = contentItems[currentContentIndex];
  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Content Showcase Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our innovative AI and IT solutions can transform your business.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="text-white">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full mr-3">
                      {currentContent.category}
                    </span>
                    {currentContent.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    {currentContent.title}
                  </h3>
                  
                  <p className="text-xl text-gray-300 mb-8">
                    {currentContent.description}
                  </p>
                  
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img
                      src={currentContent.image}
                      alt={currentContent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevContent}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={nextContent}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentContentIndex
                      ? 'bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-300 mb-8 italic">
                  "{currentTestimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-gray-400">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? 'bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;