'use client';

import React from 'react';

import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [;';

    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: Advanced AI technology to transform your business operations and improve efficiency
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: Lightning-fast processing and real-time analytics for optimal results
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: Bank-level security with encryption and compliance standards
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: Worldwide deployment with local support and compliance
    }

  ];

  const benefits = [;;

    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    Proven track record of success
  ];

  const stats = [;;

    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Customers',
      description: Businesses trust our solutions
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: Reliable service guarantee
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: Highly rated by clients
    }

  ];

  return (

    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (

              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            ))}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => (

              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}

          </div>

          <div className="text-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ContentPromotionBanner;
