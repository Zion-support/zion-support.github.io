'use client';
import React from 'react';
import { Palette, Brain, FileText, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate high-quality content across all formats using advanced AI models',
      benefits: ['Blog posts & articles', 'Social media content', 'Marketing copy']
    },
    {
      icon: Palette,
      title: 'Visual Design Tools',
      description: 'Create stunning visuals, graphics, and multimedia content with AI assistance',
      benefits: ['Image generation', 'Video editing', 'Brand assets']
    },
    {
      icon: FileText,
      title: 'Content Optimization',
      description: 'Optimize content for SEO, engagement, and conversion with AI insights',
      benefits: ['SEO optimization', 'A/B testing', 'Performance analytics']
    }
  ];

  const contentTypes = [
    {
      title: 'Written Content',
      description: 'Blog posts, articles, whitepapers, and long-form content',
      icon: FileText,
      examples: ['SEO-optimized articles', 'Technical documentation', 'Marketing copy']
    },
    {
      title: 'Visual Content',
      description: 'Images, infographics, videos, and interactive media',
      icon: Palette,
      examples: ['Social media graphics', 'Presentation slides', 'Video content']
    },
    {
      title: 'Multimedia Content',
      description: 'Podcasts, webinars, and interactive experiences',
      icon: Zap,
      examples: ['Audio content', 'Live streams', 'Interactive demos']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Content Studio
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create, design, and optimize content at scale with our comprehensive AI-powered content studio. 
              From written articles to visual graphics, produce professional content 10x faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Try Free Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Complete Content Creation Suite</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize content across all channels and formats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Types Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Content for Every Channel</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create content that resonates across all your marketing channels and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <type.icon className="w-8 h-8 text-pink-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Content Studio?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">10x Faster Creation</h3>
                    <p className="text-gray-300">Produce content 10x faster than traditional methods</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Brand Consistency</h3>
                    <p className="text-gray-300">Maintain consistent brand voice and style across all content</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Content Production</h3>
                    <p className="text-gray-300">Never run out of content with continuous AI-powered generation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Create Amazing Content?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of content creators and marketers using our AI content studio 
                to produce professional content at scale.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Start Creating Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Try Free Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Content Strategy
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop struggling with content creation. Our AI content studio will help you 
            produce high-quality, engaging content that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentStudioPage;