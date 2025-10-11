'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, ArrowRight, Star, Users, TrendingUp, Zap, Shield, Brain, Globe } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Real-time data processing and intelligent insights',
      stats: '95% accuracy'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Ultra-fast processing and response times',
      stats: '10x faster'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance',
      stats: '99.9% uptime'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Worldwide deployment and support',
      stats: '50+ countries'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions are incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'InnovateLabs',
      content: 'Outstanding service and cutting-edge technology. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering',
      company: 'DataFlow Inc',
      content: 'The best decision we made was partnering with Zion Tech Group.',
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPlaying, testimonials.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dynamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Content Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of our cutting-edge solutions with real-time demonstrations 
            and interactive showcases that bring your business to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={togglePlay}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? 'Pause Demo' : 'Start Demo'}
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make our solutions stand out from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <div className="text-purple-400 font-semibold">
                  {feature.stats}
                </div>
              </div>
            ))}
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

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                "{currentTestimonial.content}"
              </blockquote>
              <div className="text-cyan-400 font-semibold">
                {currentTestimonial.name}
              </div>
              <div className="text-gray-300">
                {currentTestimonial.role}, {currentTestimonial.company}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;