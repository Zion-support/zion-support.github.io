import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, BarChart3, DollarSign, Users, TrendingUp, Settings } from 'lucide-react';

const AdManagementPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Advanced Targeting',
      description: 'Precise audience targeting with AI-powered demographic and behavioral analysis.',
      benefits: ['Demographic targeting', 'Behavioral analysis', 'Interest-based ads', 'Lookalike audiences']
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and reporting for all your advertising campaigns.',
      benefits: ['Performance metrics', 'ROI tracking', 'Conversion analysis', 'Custom reports']
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'AI-powered budget allocation and bid optimization for maximum ROI.',
      benefits: ['Automated bidding', 'Budget allocation', 'Cost optimization', 'ROI maximization']
    },
    {
      icon: Users,
      title: 'Audience Management',
      description: 'Create and manage custom audiences across multiple platforms and channels.',
      benefits: ['Custom audiences', 'Cross-platform sync', 'Audience insights', 'Segmentation tools']
    },
    {
      icon: TrendingUp,
      title: 'Campaign Optimization',
      description: 'Continuous optimization of ad campaigns for better performance and results.',
      benefits: ['A/B testing', 'Performance optimization', 'Creative testing', 'Landing page optimization']
    },
    {
      icon: Settings,
      title: 'Multi-Platform Management',
      description: 'Manage advertising campaigns across multiple platforms from a single dashboard.',
      benefits: ['Unified dashboard', 'Cross-platform campaigns', 'Centralized management', 'Platform integration']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ad Management - Advanced Advertising Solutions | Zion Tech Group</title>
        <meta name="description" content="Optimize your advertising with our advanced ad management platform. Targeting, analytics, budget optimization, and multi-platform management." />
        <meta name="keywords" content="ad management, advertising platform, campaign optimization, ad analytics, budget optimization, multi-platform ads" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ad
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your advertising with our advanced ad management platform. 
              Targeting, analytics, budget optimization, and multi-platform management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Ad Management Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Advertising?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our ad management platform and maximize your advertising ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your Ad Campaign
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdManagementPage;