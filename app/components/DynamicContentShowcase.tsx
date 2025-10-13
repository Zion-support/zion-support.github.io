'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

const DynamicContentShowcasePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
import React, {useState, useEffect}from 'react';
import {Cloud, Zap, Shield, Globe, Brain, Star}}from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {,
  const [currentFeature, setCurrentFeature] = useState(0);
import { Brain, Cloud, Zap, Shield, Globe, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, TrendingUp, BarChart } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
import React from 'react';

const DynamicContentShowcase: React.FC = React.memo((props) => {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with sub-second response times and seamless user experience',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',},
    {id: 5,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600',}];

      description: 'Optimized for speed with sub-second response times and seamless user experience'
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  ];];];
    'Proven track record of success';
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>DynamicContentShowcase | Zion Tech Group</title>
        <meta name="description" content="Professional DynamicContentShowcase services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="DynamicContentShowcase, AI solutions, IT services, Zion Tech Group, dynamiccontentshowcase" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DynamicContentShowcase
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced dynamiccontentshowcase solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
  const testimonials = [
    {name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5;,},
    {name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5;,},
    {name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
      rating: 5;,}];

  useEffect(() => {const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);}, 3000);
      content: 'Outstanding performance and reliability. Our team productivity increased by 300%.',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      content: 'Outstanding performance and reliability. Our team productivity increased by 300% and we\'ve seen a 50% reduction in operational costs.',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'The best investment we made. Seamless integration and exceptional support.',
      content: 'The best investment we made this year. ROI was evident within the first month.',
      content: 'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.',
      rating: 5
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Award, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="cyber-card hologram-card p-8 md:p-12 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Content Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of our cutting-edge solutions with real-time demonstrations 
            and interactive showcases that bring your business to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button">
              <span>Start Demo</span>
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
            <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
              <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Solutions?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="cyber-card hologram-card p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
