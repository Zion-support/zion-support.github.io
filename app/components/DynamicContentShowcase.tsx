'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      benefits: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      benefits: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      benefits: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'CEO',
      content: 'Outstanding service and cutting-edge technology. Highly recommended for any business looking to scale.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Systems',
      role: 'VP of Engineering',
      content: 'Their cloud migration expertise saved us months of work and significantly improved our performance.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Countries Served' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our solutions deliver unmatched performance, security, and scalability for modern businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Clients</span> Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Users className="mr-2 w-5 h-5" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;