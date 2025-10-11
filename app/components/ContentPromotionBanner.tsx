'use client';

import React from 'react';
import { TrendingUp } from 'react-helmet-async';
const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: 
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to automate and optimize your business processes'
    },
    {
      icon: 
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern business needs'
    },
    {
      icon: 
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards'
    },
    {
      icon: 
      title: 'Analytics & Insights',
      description: 'Real-time analytics and business intelligence to drive informed decisions'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Increase productivity and efficiency',
    'Enhance customer experience',
    'Improve data security and compliance',
    'Scale your business faster',
    'Gain competitive advantage',
    'Access to expert support',
    'Future-proof your technology'
  ];

  const stats = [
    {
      icon: 
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service delivery'
    },
    {
      icon: 
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients'
    }
  ];

  return (
    <div>

    <div>
  
      <div>
  
        {/* Hero Section */}
        <div>
  
          <h1>
  
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          </h1>
          <p>
  
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
          </p>
          
          <div>
  
            <button>
  
              <Zap>
  
              Get Started Today
            </button>
            <button>
  
              <ArrowRight>
  
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div>
  
          {stats.map((stat, index) => (
            <div>
  
              <div>
  
                <stat>
  
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div>
  
          {features.map((feature, index) => (
            <div>
  
              <div>
  
                <feature>
  
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div>
  
          <div>
  
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
            <p>
  
              We provide comprehensive AI and IT solutions that deliver real results for your business.
            </p>
          </div>
          
          <div>
  
            {benefits.map((benefit, index) => (
              <div>
  
                <CheckCircle>
  
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div>
  
          <div>
  
            <h2>
  
              Ready to Transform Your Business?
            </h2>
            <p>
  
              Join the future of business technology. Get started with our AI solutions today and see the difference.
            </p>
            <div>
  
              <button>
  
                <Zap>
  
                <span>Start Free Trial</span>
              </button>
              <button>
  
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