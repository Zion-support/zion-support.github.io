'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {,
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
    {,
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
      <>
        <>
          <div className = "bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4"></div>
          <div className="max-w-7xl mx-auto"></div>
        </>
      </>
    </>
        <>
          <>
            <>
              <div className="text-center mb-12"></div>
              <h2 className="text-3xl md: text-4xl font-bold mb-4"></h2>
            </>
          </>
        </>,
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto"></p>,
            Discover how our AI-powered solutions can revolutionize your operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-12"></div>
          {features.map((feature, index) => (
            <div key={index} className="text-center"></div>
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <>
                <>
                  <>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-purple-100 text-sm">{feature.description}</p>
                  </>
                </>
              </>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <>
            <>
              <>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-8"></div>
                <div></div>
              </>
            </>
          </>
              <>
                <>
                  <>
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                    <ul className="space-y-2"></ul>
                  </>
                </>
              </>
                {benefits.slice(0, 4).map((benefit, index) => (
                  <li key={index} className="flex items-center"></li>
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <>
              <>
                <>
                  <div></div>
                  <h3 className="text-2xl font-bold mb-4">Additional Benefits</h3>
                </>
              </>
            </>
              <ul className="space-y-2"></ul>
                {benefits.slice(4).map((benefit, index) => (
                  <li key = {index} className="flex items-center"></li>
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <>
          
            <>
          
              <>
          
                <div className="text-center mt-8"></div>
          
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold"></button>
          
              </>
          
            </>
          
          </>,
              Get Started Today
            </button>
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
          {features.map((feature, index) => (
            <div key = {index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover: border-purple-400 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <>
                <>
                  <>
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </>
                </>
              </>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <>
            <>
              <>
                <div className="text-center mb-8"></div>
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
              </>
            </>
          </>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>,
              We provide comprehensive AI and IT solutions that deliver real results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key = {index} className="flex items-start space-x-3"></div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <>
          <>
            <>
              <div className="text-center"></div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12"></div>
            </>
          </>
        </>
            <h2 className="text-3xl font-bold text-white mb-4"></h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">,
              Join the future of business technology. Get started with our AI solutions today and see the difference.
            </p>
            <>
              <>
                <>
                  <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"></button>
                </>
              </>
            </>
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">,
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