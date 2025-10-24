'use client';;
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3 } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {}
  const features = [
    {
    icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to automate and optimize your business processes'
  },
    {
    icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern business needs'
  },
    {
    icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards'
  },
    {
    icon: BarChart3,
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
    icon: Users,
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
    icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients'
  }
  ];

  return ()
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        {/* Hero Section */}
        <div className="text-center mb-16"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
              <Zap className="w-5 h-5" /></Zap>
              Get Started Today
            </button>
            <button className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button>
              <ArrowRight className="w-5 h-5" /></ArrowRight>
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"></div>
          {stats.map((stat, index) => ()
            <div key={index} className="text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                <stat.icon className="w-8 h-8 text-white" /></stat>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
          {features.map((feature, index) => ()
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:border-purple-400 transition-all duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                <feature.icon className="w-8 h-8 text-white" /></feature>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16"></div>
          <div className="text-center mb-8"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We provide comprehensive AI and IT solutions that deliver real results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {benefits.map((benefit, index) => ()
              <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" /></CheckCircle>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12"></div>
            <h2 className="text-3xl font-bold text-white mb-4"></h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"></p>
              Join the future of business technology. Get started with our AI solutions today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"></button>
                <Zap className="w-5 h-5" /></Zap>
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"></button>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContentPromotionBannerPage;
