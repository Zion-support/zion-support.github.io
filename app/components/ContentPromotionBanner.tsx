'use client';

import React from 'react';
<<<<<<< HEAD
import {Zap, Shield, Star, Users, ArrowRight}}from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {,
=======
import { CheckCircle, ArrowRight, Zap, Shield, Star, Users } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
>>>>>>> origin/main
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap;,},
    {title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and operations.',
      icon: Shield;,},
    {title: 'Proven Results',
      description: 'Join 500+ companies that have transformed their operations with our solutions.',
      icon: Star;,},
    {title: 'Expert Support',
      description: '24/7 support from our team of AI and IT specialists.',
<<<<<<< HEAD
      icon: Users;,}];

  return(<div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">)</div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md: text-4xl font-bold mb-4">,</h2>
            Transform Your Business with AI;
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">Discover how our AI-powered solutions can revolutionize your operations and drive growth.</p>
          </p>
        </div>

        {/* Features Section */} <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-12">,</div>
          {features.map((feature, index) => (
            <div key={index}className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100 text-sm">{feature.description</p>}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */} <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Schedule a free consultation with our AI experts and discover how we can transform your business.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover: from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">,</button>
              Schedule Free Consultation;
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover: bg-white/10 transition-all duration-300">,</button>
              Download Case Study;
            </button>
          </div>
        </div>
=======
      icon: Users
    }
  ];];];
  const benefits = [
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success';
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Transform Your Business Today</h2>
        <p className="text-xl text-gray-300 mb-6">
          Join thousands of businesses already using our AI and IT solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
          Get Started Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
