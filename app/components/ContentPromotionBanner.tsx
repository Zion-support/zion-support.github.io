'use client';
import React from 'react';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Brain } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized performance with 99.9% uptime and sub-second response times.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const benefits = [
    'Free 14-day trial',
    'No credit card required',
    '24/7 expert support',
    '30-day money-back guarantee',
    'Setup in under 5 minutes'
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
              Transform Your Business Today
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of businesses already using our AI-powered solutions to drive growth and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;