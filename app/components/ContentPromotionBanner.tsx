'use client';
import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  const stats = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and operations.',
      icon: Shield
    },
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
  ];
  const benefits = [
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-12"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can revolutionize your operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (</div>
            <div key={index} className="text-center"></div>
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (</div>
            <div key={index} className="text-center"></div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4"></div>
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our AI experts and discover how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
              Schedule Free Consultation</button>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
              Download Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;