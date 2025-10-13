import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users } from 'lucide-react';

const DemoPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Experience our cutting-edge AI technology in action',
      icon: <Zap className="w-6 h-6" />,
      benefits: [
        'Real-time AI processing',
        'Intelligent automation',
        'Predictive analytics',
        'Natural language processing'
      ]
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance',
      icon: <Shield className="w-6 h-6" />,
      benefits: [
        'End-to-end encryption',
        'SOC 2 compliance',
        'GDPR compliance',
        'Regular security audits'
      ]
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and reporting for data-driven decisions',
      icon: <BarChart className="w-6 h-6" />,
      benefits: [
        'Real-time dashboards',
        'Custom reporting',
        'Performance metrics',
        'Predictive insights'
      ]
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for distributed teams',
      icon: <Users className="w-6 h-6" />,
      benefits: [
        'Real-time collaboration',
        'Project management',
        'Communication tools',
        'File sharing'
      ]
    }
  ];

  const benefits = [
    'See AI in action with live demos',
    'Experience our user-friendly interface',
    'Test our powerful features',
    'Get personalized recommendations',
    'Speak with our experts',
    'No commitment required'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions with interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI solutions, IT services, interactive demo, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Experience Our Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See our AI and IT solutions in action with interactive demos. 
            Experience the power of our technology firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Start Demo
              <Play className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                What You'll Experience
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Interactive demos showcasing our powerful features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Try Our Demo?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of our solutions firsthand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your demo today and discover how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Demo Now
                <Play className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoPage;