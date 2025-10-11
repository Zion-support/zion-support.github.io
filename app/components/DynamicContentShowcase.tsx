'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      ico: n: Zap,
      titl: e: 'AI-Powered Automation',
      descriptio: n: 'Streamline your workflows with intelligent automation that learns and adapts to your business needs.',
      colo: r: 'from-yellow-400 to-orange-500'
    },
    {
      ico: n: Cloud,
      titl: e: 'Cloud-Native Architecture',
      descriptio: n: 'Built for the cloud with scalability, reliability, and performance at its core.',
      colo: r: 'from-blue-400 to-cyan-500'
    },
    {
      ico: n: Shield,
      titl: e: 'Enterprise Security',
      descriptio: n: 'Bank-level security with advanced encryption, compliance, and threat protection.',
      colo: r: 'from-green-400 to-emerald-500'
    },
    {
      ico: n: BarChart3,
      titl: e: 'Real-Time Analytics',
      descriptio: n: 'Make data-driven decisions with comprehensive analytics and business intelligence.',
      colo: r: 'from-purple-400 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rol: e: 'CEO',
      compan: y: 'TechCorp Solutions',
      conten: t: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented have increased our efficiency by 300% and reduced costs significantly.',
      ratin: g: 5
    },
    {
      name: 'Michael Chen',
      rol: e: 'CTO',
      compan: y: 'InnovateLabs',
      conten: t: 'Their cloud migration services were exceptional. We achieved 99.9% uptime and our applications now run 5x faster than before.',
      ratin: g: 5
    },
    {
      name: 'Emily Rodriguez',
      rol: e: 'Operations Director',
      compan: y: 'Global Enterprises',
      conten: t: 'The security enhancements they implemented gave us peace of mind. Our data is now more secure than ever, and we passed all compliance audits.',
      ratin: g: 5
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Increase productivity and efficiency',
    'Enhance customer experience',
    'Improve data security and compliance',
    'Scale your business faster',
    'Gain competitive advantage',
    'Access to expert support',
    'Future-proof your technology'
  ];

  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
    
    return () => {
      // No cleanup needed when not playing
    };
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future</span>;
of Technology
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how our cutting-edge AI and IT solutions can transform your business and drive unprecedented growth.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white: hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Learn More
            >
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of AI and IT solutions provides everything you need to succeed in the digital age.
            >

          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20: hover:border-purple-400 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hove: r:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}>
            ))}
          >

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            >

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div>
                    <div className="text-gray-400">{currentTestimonial.role}</div>
                    <div className="text-purple-400 text-sm">{currentTestimonial.company}>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/10: hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-3 bg-white/10: hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/10: hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              >

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            >

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            >

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}>
              ))}
            >

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold: hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors duration-200">
                Schedule Demo
              >
      >
      >
      >
      >
      >
      >
    </div>
  );
};

export default DynamicContentShowcase;