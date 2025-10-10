'use client';
<<<<<<< HEAD

import React from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Star, Users } from 'lucide-react'
=======
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const ContentPromotionBanner: React.FC = () => {
}
  const features = [
[
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap
    },
<<<<<<< HEAD
    {
=======
        {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
        {
      icon: Shield,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and operations.',
      icon: Shield
    },
<<<<<<< HEAD
    {
      title: 'Proven Results',
      description: 'Join 500+ companies that have transformed their operations with our solutions.',
      icon: Star
    },
    {
      title: 'Expert Support',
      description: '24/7 support from our team of AI and IT specialists.',
      icon: Users
    }
  ]

  const benefits = [
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
=======
        {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment with local support and compliance'
    }
];;
  const benefits = [
];
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
[
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
];;
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can revolutionize your operations and drive growth.
          </p>
<<<<<<< HEAD
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5" />
              Get Started Today
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat .icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
            </div>
          ))};
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <feature .icon className="w-8 h-8 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100 text-sm">{feature.description}</p>
            </div>
          ))};
        </div>
<<<<<<< HEAD

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100 mb-4">Happy Clients</div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100 mb-6">Uptime</div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center mx-auto">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
=======
        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive AI and IT solutions that deliver real results for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))};
          </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Schedule Demo
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default ContentPromotionBanner
=======
  );
};
export default ContentPromotionBanner;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
