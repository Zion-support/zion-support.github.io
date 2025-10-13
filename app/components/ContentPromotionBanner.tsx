'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = React.memo((props) => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm sm:text-base"><span className="sr-only">Screen reader: </span>New AI Solutions Available</span>
            <Star className="w-4 h-4 text-yellow-300 animate-bounce" />
          </div>
          
          <div className="flex items-center space-x-4 ml-0 sm:ml-6">
            <span className="text-sm sm:text-base"><span className="sr-only">Screen reader: </span>
              Transform your business with cutting-edge AI technology
            </span>
            <a
              href="/services"
              className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <span><span className="sr-only">Screen reader: </span>Learn More</span>
              <ArrowRight className="w-3 h-3" />
            </a>
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentPromotionBannerPage: React.FC = () => {
import {Zap, Shield, Star, Users, ArrowRight}}from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {,
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap;,},
    {title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and operations.',
      icon: Shield;,},
    {title: 'Proven Results',
      description: 'Join 500+ companies that have transformed their operations with our solutions.',
      icon: Star;,},
    {title: 'Expert Support',
      description: '24/7 support from our team of AI and IT specialists.',
      icon: Users;,}];
        {/* Features Section */} <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-12">,</div>
              <p className="text-purple-100 text-sm">{feature.description</p>}</p>
        {/* CTA Section */} <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
      description: 'Worldwide deployment and support for international businesses'
  ];

  ];

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Customers',
      description: 'Businesses trust our solutions'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients'
    }
  ];

  return (
    <div className="relative py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main Banner */}
        <div className="cyber-card hologram-card p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">Trusted by 500+ Companies</span>
              <Star className="w-6 h-6 text-yellow-400 ml-2" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business with 
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge AI and IT solutions. 
              Experience unprecedented growth and efficiency.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300 text-sm">Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button text-center">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="cyber-card hologram-card p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why Choose Zion Tech Group?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

export default ContentPromotionBannerPage;
  );
});

export default ContentPromotionBanner;
