'use client';
import React from 'react';
import { Search, TrendingUp, Target, BarChart, CheckCircle, ArrowRight, Phone, Globe, Zap, Users } from 'lucide-react';
import Link from 'next/link';

const SEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Find high-value keywords with AI-powered research tools'
    },
    {
      icon: Target,
      title: 'On-Page Optimization',
      description: 'Optimize titles, meta descriptions, and content structure'
    },
    {
      icon: BarChart,
      title: 'Rank Tracking',
      description: 'Monitor your search rankings across multiple keywords'
    },
    {
      icon: Globe,
      title: 'Technical SEO',
      description: 'Fix technical issues that impact search visibility'
    },
    {
      icon: Zap,
      title: 'Content Optimization',
      description: 'AI-powered content suggestions for better rankings'
    },
    {
      icon: Users,
      title: 'Competitor Analysis',
      description: 'Analyze competitors and discover new opportunities'
    }
  ];

  const benefits = [
    {
      title: '50% More Traffic',
      description: 'Average increase in organic traffic within 3 months'
    },
    {
      title: 'Top 3 Rankings',
      description: 'Achieve first-page rankings for target keywords'
    },
    {
      title: '300% ROI',
      description: 'Proven return on investment for SEO campaigns'
    },
    {
      title: '24/7 Monitoring',
      description: 'Continuous tracking and optimization of your SEO performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            SEO <span className="text-cyan-400">Optimizer</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Boost your search rankings with our AI-powered SEO optimization platform. 
            Get more organic traffic, higher rankings, and better visibility in search results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <BarChart className="w-5 h-5 mr-2" />
              View Demo
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful <span className="text-cyan-400">SEO Tools</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Proven <span className="text-cyan-400">Results</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our SEO optimizer to rank higher and get more traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Optimizing
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOOptimizerPage;