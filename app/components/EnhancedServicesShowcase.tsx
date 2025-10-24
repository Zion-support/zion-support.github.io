'use client';
import React from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Users } from 'lucide-react';

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      color: 'text-purple-400',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '95% Accuracy'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Boost your application performance with our expert optimization services',
      color: 'text-yellow-400',
      features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Balancing'],
      stats: '10x Faster'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'text-green-400',
      features: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance'],
      stats: '99.9% Uptime'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      color: 'text-blue-400',
      features: ['Cloud Migration', 'Auto Scaling', 'Backup Solutions', 'Monitoring'],
      stats: '50% Cost Reduction'
    }
  ];

  const _stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white text-center mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-center mb-4 text-sm">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div className={`text-2xl font-bold ${service.color} mb-1`}>
                  {service.stats}
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="mr-2 h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;
