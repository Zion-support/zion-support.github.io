<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, {useState, useEffect}from 'react';
import {Cloud, Zap, Shield, Globe, Brain, Star}}from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {,
  const [currentFeature, setCurrentFeature] = useState(0);
=======
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Brain, Cloud, Zap, Shield, Globe, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
>>>>>>> origin/main
=======
import { Cloud, Zap, Shield, Globe, Users, Award, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
>>>>>>> main
=======
>>>>>>> origin/main

>>>>>>> origin/main
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
<<<<<<< HEAD

  const features = [
=======
  const [isPlaying, setIsPlaying] = useState(true);
>>>>>>> origin/main

  const features: Feature[] = [
=======
'use client'
<<<<<<< HEAD
import React from 'react';

const DynamicContentShowcase: React.FC = React.memo((props) => {
=======
import React, { useState, useEffect } from 'react'
import { Brain, Cloud, Zap, Shield, Globe, Users, CheckCircle, Star, ArrowRight } from 'lucide-react'
const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const features = [
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
    {
<<<<<<< HEAD
=======
      id: 1,
<<<<<<< HEAD
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
<<<<<<< HEAD
<<<<<<< HEAD
      color: 'from-purple-500 to-pink-600',},
    {id: 2,
=======
      color: 'from-purple-500 to-pink-600'
=======
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: Cloud,
      color: 'from-blue-500 to-purple-600'
>>>>>>> main
=======
      title: 'AI-Powered Intelligence',
<<<<<<< HEAD
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time'
=======
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time',
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '10x', label: 'Faster' },
        { value: '24/7', label: 'Learning' }
      ]
=======
      color: 'from-purple-500 to-pink-600'
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
    },
    {
      id: 2,
>>>>>>> origin/main
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-green-500 to-blue-600',},
    {id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      color: 'from-orange-500 to-red-600',},
    {id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',},
    {id: 5,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600',}];

=======
      color: 'from-yellow-500 to-orange-600'
=======
      color: 'from-orange-500 to-red-600'
>>>>>>> main
=======
      title: 'Lightning Fast Performance',
<<<<<<< HEAD
      description: 'Optimized for speed with sub-second response times and seamless user experience'
=======
      description: 'Optimized for speed with sub-second response times and seamless user experience',
      stats: [
        { value: '< 100ms', label: 'Response' },
        { value: '99.9%', label: 'Uptime' },
        { value: '10M+', label: 'Requests' }
      ]
=======
      color: 'from-yellow-500 to-orange-600'
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
<<<<<<< HEAD
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing'
=======
<<<<<<< HEAD
      title: 'Enterprise Security',
<<<<<<< HEAD
      description: 'Bank-level security with end-to-end encryption and compliance standards'
=======
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Breaches' }
      ]
=======
      color: 'from-red-500 to-pink-600'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
    },
    {
      id: 5,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 6,
      title: 'Global Scalability',
<<<<<<< HEAD
      description: 'Scale effortlessly across multiple regions with automatic load balancing'
=======
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
<<<<<<< HEAD
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Support' }
      ]
>>>>>>> origin/main
>>>>>>> origin/main
    }
  ];

=======
      icon: Globe,
      color: 'from-teal-500 to-cyan-600'
    }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
=======
  ]
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
<<<<<<< HEAD
    'Proven track record of success';
=======
>>>>>>> origin/main
    }
  ];
  const benefits = [
<<<<<<< HEAD
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
=======
    {
      icon: Award,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge artificial intelligence that delivers real results'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support from our team of specialists'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Trusted by 500+ companies worldwide'
    }
>>>>>>> main
=======
    'Proven track record of success'
<<<<<<< HEAD
>>>>>>> origin/main
  ];

<<<<<<< HEAD
>>>>>>> origin/main
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
=======
<<<<<<< HEAD
  const testimonials = [
=======
  const testimonials: Testimonial[] = [
=======
  ]
>>>>>>> origin/main
  const testimonials = [
<<<<<<< HEAD
    {name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5;,},
    {name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
<<<<<<< HEAD
<<<<<<< HEAD
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5;,},
    {name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
      rating: 5;,}];

  useEffect(() => {const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);}, 3000);
=======
      content: 'Outstanding performance and reliability. Our team productivity increased by 300%.',
=======
      content: 'The best investment we made for our business. ROI was visible within weeks.',
>>>>>>> main
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
<<<<<<< HEAD
      content: 'Outstanding performance and reliability. Our team productivity increased by 300%.',
=======
<<<<<<< HEAD
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
=======
<<<<<<< HEAD
      content: 'Outstanding performance and reliability. Our team productivity increased by 300% and we\'ve seen a 50% reduction in operational costs.',
=======
      content: 'Outstanding performance and reliability. Our team productivity increased by 300%.',
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
<<<<<<< HEAD
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
=======
<<<<<<< HEAD
<<<<<<< HEAD
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'The best investment we made. Seamless integration and exceptional support.',
=======
      company: 'InnovateLab',
      role: 'Head of Operations',
      content: 'Seamless integration and outstanding performance. Highly recommended!',
>>>>>>> main
=======
      company: 'InnovateLab',
      role: 'Product Manager',
<<<<<<< HEAD
      content: 'The best investment we made this year. ROI was evident within the first month.',
=======
      content: 'The best investment we made this year. ROI was evident within the first month, and the support team is absolutely fantastic.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
<<<<<<< HEAD
      content: 'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.',
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
      rating: 5
    }
  ]

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {];];
    const timer = setInterval(() => {;
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
>>>>>>> origin/main
=======
  useEffect(() => {
<<<<<<< HEAD
    const timer = setInterval(() => {
=======
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
>>>>>>> main
>>>>>>> origin/main

    return () => clearInterval(timer);
  }, [features.length]);

<<<<<<< HEAD
<<<<<<< HEAD
  return(<div className="py-16 px-4">)</div>
      <div className="max-w-7xl mx-auto">{/* Header */</div>} <div className="text-center mb-16">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
            Dynamic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our AI and IT solutions through interactive demonstrations and real-world applications.</p>
          </p>
        </div>

        {/* Features Carousel */} <div className="mb-16">
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">,</div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {features[currentFeature].title} </h3>
              <p className="text-xl text-gray-300 mb-6">{features[currentFeature].description</p>} </p>
              <div className="flex space-x-2">{features.map((_, index) => (</div>
                  <button;
                    key={index}onClick={() =>setCurrentFeature(index)</button>}className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature ? 'bg-blue-500' : 'bg-gray-400'}`}
                  />
                ))}
=======
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of our AI and IT solutions through interactive demonstrations and real-world applications.
          </p>
        </div>

            </div>

            {/* Feature Visual */}
            <div className="flex justify-center">
              <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10" })}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
>>>>>>> main
              </div>
            </div>

            {/* Feature Visual */} <div className="flex justify-center">
              <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color}rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10" ,)})}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
=======
=======
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        </section>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Dynamic <span className="text-cyan-400">Content Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of our cutting-edge solutions with real-time demonstrations 
            and interactive showcases that bring your business to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Start Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
>>>>>>> origin/main
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      <section className="py-20 px-4">
        </section>
>>>>>>> origin/main
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our DynamicContentShowcase?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our dynamiccontentshowcase solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
<<<<<<< HEAD
    ))
  );
};

=======
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our dynamiccontentshowcase solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
=======
      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{currentTestimonial.name}</div>
                  <div className="text-gray-300">{currentTestimonial.role}</div>
                  <div className="text-purple-400">{currentTestimonial.company}</div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
>>>>>>> origin/main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your dynamiccontentshowcase needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
=======
      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages that make our solutions the preferred choice for businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have transformed their operations with our cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </button>
>>>>>>> origin/main
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default DynamicContentShowcasePage;
=======
export default DynamicContentShowcase;
=======
      content: 'The best investment we made. Seamless integration and exceptional support.',
      rating: 5
    }
  ]
  useEffect(() => {]
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [features.length])
>>>>>>> origin/main
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Features Showcase */}
      </div><div className="text-center mb-16">
        </div><h2 className="text-3xl font-bold text-white mb-4">
          Dynamic Content Showcase
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience our cutting-edge solutions through interactive demonstrations
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          </div><$2 />
            key={feature.id}
            className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl text-white transform transition-all duration-500 ${
              index === currentIndex ? 'scale-105 shadow-2xl' : 'scale-100'
            }`}
          >
<<<<<<< HEAD
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <feature.icon className="w-6 h-6" />
>>>>>>> origin/main
=======
            </div><div className="flex items-center mb-4">
              </div><div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                </div><feature.icon className="w-6 h-6" />
>>>>>>> origin/main
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
            <p className="text-white/90">{feature.description}</p>
          </div>
        ))}
      </div>

<<<<<<< HEAD
        {/* Benefits Section */} <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
              </div>
            ))}
          </div>
=======
      {/* Benefits Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
        </div><h3 className="text-2xl font-bold text-white mb-6 text-center">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            </div><div key={index} className="flex items-center space-x-3">
              </div><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
>>>>>>> origin/main
        </div>
      </div>

<<<<<<< HEAD
        {/* Testimonials Section */} <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {testimonials.map((testimonial, index) => (
              <div key={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div>
                    <Star key={i}className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content</p>}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name</p>}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role</p>}, {testimonial.company}</p>
                </div>
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
>>>>>>> main
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */} <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md: p-12">,</div>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Try Our Solutions</h3>
<<<<<<< HEAD
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the power of our AI and IT solutions with interactive demos and live examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">AI Demo</h4>
              <p className="text-gray-300 text-sm mb-4">See AI in action with our interactive demos</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Cloud Trial</h4>
              <p className="text-gray-300 text-sm mb-4">Test our cloud solutions with a free trial</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Start Trial
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Security Scan</h4>
              <p className="text-gray-300 text-sm mb-4">Get a free security assessment</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Scan Now
              </button>
            </div>
=======
<<<<<<< HEAD
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Experience the power of our AI and IT solutions with interactive demos and live examples.</p>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">AI Demo</h4>
              <p className="text-gray-300 text-sm mb-4">See AI in action with our interactive demos</p>
              <button className="bg-cyan-500 hover: bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">,</button>
                Try Demo;
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Cloud Trial</h4>
              <p className="text-gray-300 text-sm mb-4">Test our cloud solutions with a free trial</p>
              <button className="bg-blue-500 hover: bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">,</button>
                Start Trial;
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Security Scan</h4>
              <p className="text-gray-300 text-sm mb-4">Get a free security assessment</p>
              <button className="bg-green-500 hover: bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">,</button>
                Scan Now;
              </button>
=======
      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            </div><div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                </div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
            <div className="border-t border-white/10 pt-4">
              </div><p className="text-white font-semibold">{testimonial.name}</p>
              <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
>>>>>>> origin/main
            </div>
=======
            <p className="text-gray-300 text-lg">Experience the power of our AI technology firsthand</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
>>>>>>> main
>>>>>>> origin/main
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        </div><button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
          Get Started Today
          </button><ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
<<<<<<< HEAD
  );
});

export default DynamicContentShowcase;
=======
  )
}
export default DynamicContentShowcase
      content: 'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.',
      rating: 5
    }
  ]
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isPlaying, testimonials.length])
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }
  const currentTestimonial = testimonials[currentIndex]
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5" />
              Start Demo
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More
{/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}
              <p className="text-gray-300">{feature.description}
          ))}
        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
        {/* Testimonials */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">What Our Clients Say
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}
                <div className="text-gray-300">{stat.label}
            ))}
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                <p className="text-gray-300 mb-6">{feature.description}
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{stat.value}
                        <div className="text-gray-400 text-xs">{stat.label}
                    ))}
                )}
            ))}
      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center">
                <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <p className="text-xl text-gray-300 mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  "{currentTestimonial.content}"
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name.charAt(0)}
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}
                    <p className="text-blue-400">{testimonials[currentTestimonial].company}
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <$2 />
                onClick={prevTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronLeft className="w-6 h-6" />
              <$2 />
                onClick={togglePlayPause}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              <$2 />
                onClick={nextTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronRight className="w-6 h-6" />
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <$2 />
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Benefits
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages that make our solutions the preferred choice for businesses worldwide.
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}
              ))}
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers and start your transformation journey today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started Today
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">Schedule Demo
  )
}
export default DynamicContentShowcase</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></button></button></button></button></a></a></p></p></p></p></p></p></p></p></p></p></h1></h2></h2></h2></h2></h3></h3></h3></h3></h4></section></section></section></section></section>
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
