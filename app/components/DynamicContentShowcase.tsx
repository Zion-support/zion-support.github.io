'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const features: Feature[] = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      stats: [
        { value: '300%', label: 'Faster Insights' },
        { value: '95%', label: 'Accuracy Rate' }
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Protect your business with our comprehensive security solutions and compliance tools.',
      stats: [
        { value: '99.9%', label: 'Security Uptime' },
        { value: '0', label: 'Data Breaches' }
      ]
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scale your business globally with our robust cloud infrastructure and services.',
      stats: [
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '50+', label: 'Countries' }
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      content: 'Zion Tech Group transformed our entire operation. Their AI solutions increased our efficiency by 300% and reduced costs by 50%. Best decision we ever made.',
      rating: 5,
      avatar: '/images/avatars/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The security solutions provided by Zion Tech Group are top-notch. We\'ve had zero security incidents since implementation, and our compliance scores have improved dramatically.',
      rating: 5,
      avatar: '/images/avatars/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudScale Ltd',
      role: 'VP of Operations',
      content: 'Their cloud infrastructure solutions allowed us to scale globally without any hiccups. The 99.99% uptime guarantee is not just a promise - they deliver.',
      rating: 5,
      avatar: '/images/avatars/emily-rodriguez.jpg'
    }
  ];

  // Auto-advance features
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, features.length]);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentFeatureData = features[currentFeature];
  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dynamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our cutting-edge solutions in action with interactive demonstrations and real-time data.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
                      <currentFeatureData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {currentFeatureData.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    {currentFeatureData.description}
                  </p>

                  {/* Stats */}
                  {currentFeatureData.stats && (
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {currentFeatureData.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    Try It Live
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <currentFeatureData.icon className="w-24 h-24 text-white/50 mx-auto mb-4" />
                      <div className="text-white/50 text-lg">Interactive Demo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevFeature}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentFeature ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextFeature}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
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
                  {[...Array(currentTestimonialData.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-300 mb-8 italic max-w-4xl mx-auto">
                  "{currentTestimonialData.content}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">{currentTestimonialData.name}</div>
                    <div className="text-gray-400">{currentTestimonialData.role}, {currentTestimonialData.company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of businesses that have transformed their operations with our dynamic solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;