'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Megaphone, Target, BarChart, ArrowRight, CheckCircle, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesAdvertisingPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Precision-targeted advertising campaigns that reach your ideal audience.',
      benefits: ['Audience segmentation', 'Demographic targeting', 'Behavioral analysis', 'Custom audiences']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track and optimize your advertising performance.',
      benefits: ['Real-time metrics', 'Conversion tracking', 'ROI analysis', 'Performance reports']
    },
    {
      icon: Users,
      title: 'Multi-Platform',
      description: 'Advertise across all major platforms and channels for maximum reach.',
      benefits: ['Social media ads', 'Search advertising', 'Display networks', 'Video platforms']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'AI-powered optimization to continuously improve your ad performance.',
      benefits: ['A/B testing', 'Automated bidding', 'Creative optimization', 'Budget allocation']
    }
  ];

  const benefits = [
    'Increase brand visibility by 300%',
    'Reduce cost per acquisition by 40%',
    'Improve click-through rates by 150%',
    'Maximize return on ad spend',
    'Real-time campaign monitoring',
    'Cross-platform campaign management'
  ];

  return (
    <>
      <Helmet>
        <title>Services Advertising - Zion Tech Group</title>
        <meta name="description" content="Professional advertising services to promote your business and drive growth" />
        <meta name="keywords" content="advertising, marketing, digital ads, campaign management, ROI optimization" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Advertising</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Promote your services effectively with our comprehensive advertising solutions. Drive growth and maximize your marketing ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advertising Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive advertising solutions for your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Advertising Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results and expertise in digital advertising
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Advertising?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you create effective advertising campaigns that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ServicesAdvertisingPage;