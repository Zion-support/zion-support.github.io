'use client';
import React from 'react';
import { CheckCircle, Shield, BarChart, Zap, Target } from 'lucide-react';

const AiApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'API Gateway',
      description: 'Centralized API management and routing',
      benefits: ['Centralized control', 'Load balancing', 'Request routing', 'Protocol translation']
    },
    {
      icon: BarChart,
      title: 'Rate Limiting',
      description: 'Control API usage and prevent abuse',
      benefits: ['Traffic control', 'Fair usage policies', 'DDoS protection', 'Resource optimization']
    },
    {
      icon: Zap,
      title: 'Analytics & Monitoring',
      description: 'Track API performance and usage',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Usage analytics', 'Error tracking']
    },
    {
      icon: Target,
      title: 'Security & Authentication',
      description: 'Secure your APIs with advanced auth',
      benefits: ['OAuth 2.0', 'JWT tokens', 'API keys', 'Role-based access']
    }
  ];

  const benefits = [
    'Increase API efficiency by up to 80%',
    'Reduce infrastructure costs by 30%',
    'Improve security with centralized management',
    'Scale APIs without proportional complexity increases',
    'Real-time monitoring and analytics',
    'Seamless integration with existing systems'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced API management solutions powered by AI to streamline your API infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <p className="text-white">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your APIs?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our AI-powered API management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AiApiManagementPage;