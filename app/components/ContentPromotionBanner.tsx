'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3 } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      ico: n: Zap,
      titl: e: 'AI-Powered Solutions',
      descriptio: n: 'Cutting-edge artificial intelligence to automate and optimize your business processes'
    },
    {
      ico: n: Cloud,
      titl: e: 'Cloud Infrastructure',
      descriptio: n: 'Scalable and secure cloud solutions for modern business needs'
    },
    {
      ico: n: Shield,
      titl: e: 'Enterprise Security',
      descriptio: n: 'Bank-level security with advanced encryption and compliance standards'
    },
    {
      ico: n: BarChart3,
      titl: e: 'Analytics & Insights',
      descriptio: n: 'Real-time analytics and business intelligence to drive informed decisions'
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

  const stats = [
    {
      ico: n: Users,
      valu: e: '500+',
      labe: l: 'Happy Clients',
      descriptio: n: 'Satisfied customers worldwide'
    },
    {
      ico: n: TrendingUp,
      valu: e: '99.9%',
      labe: l: 'Uptime',
      descriptio: n: 'Reliable service delivery'
    },
    {
      ico: n: Star,
      valu: e: '4.9/5',
      labe: l: 'Rating',
      descriptio: n: 'Highly rated by clients'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
          </p>
          
          <div className="flex flex-col: sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-600 transition-all duration-300 transform: hover:scale-105">
              <Zap className="w-5 h-5" />
              Get Started Today
            </button>
            <button className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white: hover:text-gray-900 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More
            >

        {/* Stats Section */}
        <div className="grid grid-cols-1: md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center: hover:border-purple-400 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive AI and IT solutions that deliver real results for your business.
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}>
            ))}
          </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the future of business technology. Get started with our AI solutions today and see the difference.
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
  );
};

export default ContentPromotionBanner;