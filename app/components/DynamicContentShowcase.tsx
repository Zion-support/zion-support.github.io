'use client';
import React from 'react';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';
import { CheckCircle, ArrowRight, Star, Quote, ChevronLeft, ChevronRight, Zap, Shield, Brain, Globe, Users, TrendingUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  benefits: string[];
}
const DynamicContentShowcase: React.FC = () => {

    },
    {
      icon: Zap,
      title: 'High Performance',
description: 'Lightning-fast processing and real-time analytics for optimal results',
      benefits: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
description: 'Bank-level security with encryption and compliance standards',
      benefits: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
description: 'Worldwide deployment and support for international businesses',
      benefits: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
description: 'Worldwide deployment and support for international businesses'
    }
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const currentTestimonial = testimonials[currentIndex];,

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5" />
              Start Demo;
  </
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More;
  </
          </div>
        </div>
{/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">,
</section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
</div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                    <p className="text-blue-400">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>

