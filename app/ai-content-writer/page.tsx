'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, PenTool, Zap, Brain, Globe } from 'lucide-react';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'AI-Powered Content Generation',
      description: 'Generate high-quality, engaging content using advanced AI algorithms trained on millions of articles.',
      benefits: ['Blog posts', 'Social media content', 'Product descriptions', 'Email campaigns']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Real-time Optimization',
      description: 'Automatically optimize content for SEO, readability, and engagement based on real-time data.',
      benefits: ['SEO optimization', 'Readability scores', 'Engagement metrics', 'A/B testing']
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Smart Content Strategy',
      description: 'AI-driven content planning and strategy recommendations based on your audience and goals.',
      benefits: ['Content calendars', 'Topic suggestions', 'Audience analysis', 'Performance predictions']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Multi-language Support',
      description: 'Create content in multiple languages with native-level quality and cultural adaptation.',
      benefits: ['25+ languages', 'Cultural adaptation', 'Local SEO', 'Translation management']
    }
  ];

  const benefits = [
    'Increase content production by 300%',
    'Improve SEO rankings by 40%',
    'Reduce content creation costs by 60%',
    'Enhance audience engagement',
    'Maintain consistent brand voice',
    'Scale content across multiple channels'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content writing solutions by Zion Tech Group. Generate high-quality, SEO-optimized content at scale." />
        <meta name="keywords" content="AI content writing, content generation, SEO content, blog writing, content marketing, Zion Tech Group" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Content Writer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your content strategy with AI-powered writing that generates engaging, SEO-optimized content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
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
              Our AI content writing platform provides everything you need to create, optimize, and scale your content strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4 text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered content creation that scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
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
            Join thousands of content creators and marketers already using our AI-powered content writing platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIContentWriterPage;