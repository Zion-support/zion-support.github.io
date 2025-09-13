'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Brain } from 'lucide-react';

const NewContentShowcase2025 = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Revolutionary AI technologies transforming business operations",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized systems delivering unprecedented speed and efficiency",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protecting your most valuable assets",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Seamlessly scale your operations across the world",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Success Rate", value: "99.9%", icon: TrendingUp },
    { label: "Uptime", value: "99.99%", icon: Shield },
    { label: "Satisfaction", value: "4.9/5", icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            New Content 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest innovations in AI, quantum computing, and automation that are reshaping the future of business.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link 
                  href="/ai-solutions" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our cutting-edge solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;