'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, PenTool, Brain, Zap, Globe, FileText, Users } from 'lucide-react';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that understand context and generate high-quality, engaging content.'
    },
    {
      icon: PenTool,
      title: 'Multiple Content Types',
      description: 'Create blogs, articles, marketing copy, technical documentation, and more with ease.'
    },
    {
      icon: Zap,
      title: 'Fast Content Generation',
      description: 'Generate high-quality content in minutes, not hours, with our intelligent writing assistant.'
    },
    {
      icon: FileText,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with built-in SEO best practices.'
    },
    {
      icon: Users,
      title: 'Brand Voice Consistency',
      description: 'Maintain consistent brand voice and tone across all your content with AI training.'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Generate content in multiple languages with accurate translations and cultural adaptation.'
    }
  ];

  const benefits = [
    'Reduce content creation time by up to 80%',
    'Improve content quality and engagement',
    'Maintain consistent brand voice',
    'Optimize for SEO automatically',
    'Generate content in multiple languages',
    'Scale content production efficiently',
    'Reduce content creation costs',
    'Focus on strategy, not writing'
  ];

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'Engaging blog posts and articles that drive traffic and engagement.',
      features: ['SEO Optimized', 'Engaging Headlines', 'Proper Structure', 'Call-to-Actions']
    },
    {
      title: 'Marketing Copy',
      description: 'Compelling marketing copy for ads, emails, and promotional materials.',
      features: ['Persuasive Language', 'A/B Testing Ready', 'Brand Aligned', 'Conversion Focused']
    },
    {
      title: 'Technical Documentation',
      description: 'Clear and comprehensive technical documentation for products and services.',
      features: ['Technical Accuracy', 'User-Friendly', 'Well-Organized', 'Searchable']
    },
    {
      title: 'Social Media Content',
      description: 'Engaging social media posts that resonate with your audience.',
      features: ['Platform Optimized', 'Trending Topics', 'Visual Descriptions', 'Hashtag Suggestions']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer - Intelligent Content Creation | Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with AI-powered writing tools. Generate high-quality, SEO-optimized content at scale." />
        <meta name="keywords" content="AI content writer, content creation, AI writing, content marketing, SEO content, automated writing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Content Writer
              </span>
              <br />
              <span className="text-white">Intelligent Creation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content creation process with AI-powered writing tools that generate 
              high-quality, engaging content at scale while maintaining your brand voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Writing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Content Writer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered writing platform combines intelligence with creativity to deliver exceptional content.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Types We Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate various types of content tailored to your specific needs and audience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of AI Content Writing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the advantages of intelligent content creation for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your content needs and get started with AI-powered writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <PenTool className="mr-2 h-5 w-5" />
                Start Writing
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <FileText className="mr-2 h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentWriterPage;