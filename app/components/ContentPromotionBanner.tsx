'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
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
      description: 'Worldwide deployment with local support and compliance'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
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
    <>
      <div className="bg-gradient-to-br from-slate-900via-purple-900to-slate-900py-20px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        {/* Hero Section */}
        <div className="text-center mb-16"></div>
          <h1 className="text-4xl md:text-6xlfont-boldtext-whitemb-6">
            Transform Your Business with <span className="text-transparent bg-clip-textbg-gradient-to-rfrom-blue-400to-purple-400">AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-300max-w-3xlmx-automb-8">
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
          </p>
          
          <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
            <button className="inline-flex items-centergap-2bg-gradient-to-rfrom-purple-500to-blue-500text-whitepx-8py-4rounded-lgfont-semiboldhover:from-purple-600hover:to-blue-600transition-allduration-300transformhover:scale-105">
              <Zap className="w-5 h-5" />
              Get Started Today
            </button>
            <button className="inline-flex items-centergap-2bg-white/10text-whitepx-8py-4rounded-lgfont-semiboldborderborder-white/20hover:bg-white/20transition-allduration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1md:grid-cols-3gap-8mb-16"></div>
          {stats.map((stat, index) => (
            <div key={index} className="text-center"></div>
              <div className="w-16 h-16bg-gradient-to-rfrom-purple-500to-blue-500rounded-fullmx-automb-4flexitems-centerjustify-center"></div>
                <stat.icon className="w-8 h-8text-white" />
              </div>
              <div className="text-3xl font-boldtext-whitemb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xsmt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8mb-16"></div>
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lgrounded-2xlp-6borderborder-white/20text-centerhover:border-purple-400transition-allduration-300"></div>
              <div className="w-16 h-16bg-gradient-to-rfrom-purple-500to-blue-500rounded-fullmx-automb-4flexitems-centerjustify-center"></div>
                <feature.icon className="w-8 h-8text-white" />
              </div>
              <h3 className="text-lg font-boldtext-whitemb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lgrounded-2xlp-8borderborder-white/20mb-16"></div>
          <div className="text-center mb-8"></div>
            <h2 className="text-3xl font-boldtext-whitemb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              We provide comprehensive AI and IT solutions that deliver real results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-startspace-x-3"></div>
                <CheckCircle className="w-5 h-5text-green-400flex-shrink-0mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center"></div>
          <div className="bg-gradient-to-r from-purple-600to-blue-600rounded-2xlp-12"></div>
            <h2 className="text-3xl font-boldtext-whitemb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90mb-8max-w-2xlmx-auto">
              Join the future of business technology. Get started with our AI solutions today and see the difference.
            </p>
            <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
              <button className="bg-white text-purple-600px-8py-4rounded-lgfont-semiboldhover:bg-gray-100transition-colorsduration-200flexitems-centerjustify-centerspace-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colorsduration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;