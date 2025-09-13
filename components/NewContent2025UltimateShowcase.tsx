'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Users, TrendingUp, Shield, Globe, Brain } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Intelligence",
      description: "Revolutionary AI systems that learn and adapt in real-time",
      stats: "99.9% Accuracy"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Lightning Fast Processing",
      description: "Process millions of operations in milliseconds",
      stats: "10x Faster"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption",
      stats: "100% Secure"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Scale",
      description: "Deploy anywhere in the world with instant scaling",
      stats: "200+ Countries"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "This platform transformed our entire infrastructure. The ROI was immediate and continues to grow.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The AI capabilities are beyond anything we've seen. It's like having a team of experts working 24/7.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "Implementation was seamless. We were up and running in days, not months.",
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            NEW: Ultimate 2025 Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Future of Technology
            <br />
            <span className="text-3xl md:text-5xl">Starts Here</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the most advanced AI and automation solutions that are reshaping industries worldwide. 
            Join thousands of companies already transforming their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-2xl font-bold text-blue-400">{feature.stats}</div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50,000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">$2.5B</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution and see why industry leaders choose our solutions for their most critical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="mr-2 w-5 h-5" />
              Schedule Demo
            </Link>
            <Link 
              href="/pricing" 
              className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
            >
              <TrendingUp className="mr-2 w-5 h-5" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcase;