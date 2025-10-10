'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Star, Users, Zap, Shield, Brain, Globe, Award, Target } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations for your business.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with real-time processing and instant response times.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and advanced threat protection.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Scalability',
      description: 'Built to scale with your business across multiple regions and time zones.'
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce operational costs by 30%',
    'Improve decision-making with AI insights',
    'Scale without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    '24/7 automated monitoring and support'
  ];

  const stats = [
    { value: '10,000+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9/5', label: 'Rating' },
    { value: '50+', label: 'Countries' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of our AI-driven solutions through interactive demonstrations and real-time insights.
          </p>
        </div>

        {/* Features Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                {features[currentIndex].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{features[currentIndex].title}</h3>
                <p className="text-gray-300">{features[currentIndex].description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? 'bg-white/10 border-white/30'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {features[currentIndex].icon}
                </div>
                <h4 className="text-xl font-semibold mb-4">{features[currentIndex].title}</h4>
                <p className="text-gray-300 mb-6">{features[currentIndex].description}</p>
                <div className="flex justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI-powered solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;