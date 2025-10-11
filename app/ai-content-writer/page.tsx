'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that understand context and generate high-quality content.',
      benefits: ['Natural Language', 'Context Awareness', 'Multiple Languages', 'Style Adaptation'],
      icon: <Brain className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Content Optimization',
      description: 'SEO-optimized content that ranks higher and engages better.',
      benefits: ['SEO Analysis', 'Keyword Integration', 'Readability Score', 'Performance Metrics'],
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Brand Consistency',
      description: 'Maintain your brand voice and style across all content.',
      benefits: ['Brand Guidelines', 'Tone Matching', 'Style Templates', 'Quality Control'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Analytics & Insights',
      description: 'Track content performance and optimize based on data.',
      benefits: ['Performance Tracking', 'Engagement Metrics', 'A/B Testing', 'ROI Analysis'],
      icon: <BarChart className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer | Zion Tech Group</title>
        <meta name="description" content="Professional AI content writing solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI content writing, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Writer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create compelling, SEO-optimized content at scale with our AI-powered writing platform. 
              Boost your content marketing with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create amazing content with AI
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using our AI content writing platform
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentWriterPage;