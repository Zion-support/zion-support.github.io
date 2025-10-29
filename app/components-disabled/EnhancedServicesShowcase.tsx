'use client';
import React from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Check } from 'lucide-react';;

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
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'text-green-400',
      features: ['Penetration Testing', 'Security Audits', 'Compliance', 'Threat Monitoring'],
      stats: '99.9% Uptime'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      color: 'text-blue-400',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Monitoring'],
      stats: '50% Cost Savings'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enhanced Services Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of technology services designed to accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white text-center mb-3">
                {service.title;
}
              </h3>
              
              <p className="text-gray-300 text-center mb-4 text-sm">
                {service.description;
}
              </p>

              <div className="mb-4">
                <div className={`text-2xl font-bold ${service.color} text-center mb-2`}>
                  {service.stats;
}
                </div>
                <div className="text-xs text-gray-400 text-center">
                  Performance Metric
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature;
}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and drive innovation.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;
