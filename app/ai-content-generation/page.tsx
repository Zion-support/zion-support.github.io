'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight, FileText, Image, Video, Music, Globe, Zap, Brain, Target, Users } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI Blog Content Generator',
      description: 'Advanced AI-powered blog content creation with SEO optimization and brand voice consistency.',
      benefits: ['SEO-optimized content', 'Brand voice consistency', 'Multi-language support', 'Content calendar automation']
    },
    {
      icon: Image,
      title: 'Visual Content Creation',
      description: 'Generate stunning images, graphics, and visual content using AI-powered design tools.',
      benefits: ['AI image generation', 'Custom graphics', 'Brand consistency', 'High-quality output']
    },
    {
      icon: Video,
      title: 'Video Content Production',
      description: 'Create engaging video content with AI-powered editing, scripting, and production tools.',
      benefits: ['AI video editing', 'Script generation', 'Auto-captioning', 'Multi-format export']
    },
    {
      icon: Music,
      title: 'Audio Content Creation',
      description: 'Generate podcasts, voiceovers, and audio content with AI-powered voice synthesis.',
      benefits: ['Voice synthesis', 'Podcast generation', 'Audio editing', 'Multi-language voices']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Publishing',
      description: 'Automatically publish content across multiple platforms and social media channels.',
      benefits: ['Cross-platform publishing', 'Social media automation', 'Content scheduling', 'Analytics tracking']
    },
    {
      icon: Zap,
      title: 'Real-time Content Optimization',
      description: 'AI-powered content optimization based on performance data and audience engagement.',
      benefits: ['Performance analysis', 'A/B testing', 'Content optimization', 'Engagement tracking']
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'SEO-optimized blog content for all industries',
      icon: '📝'
    },
    {
      title: 'Social Media',
      description: 'Engaging social media posts and captions',
      icon: '📱'
    },
    {
      title: 'Marketing Copy',
      description: 'Compelling marketing copy and ad content',
      icon: '📢'
    },
    {
      title: 'Product Descriptions',
      description: 'Detailed product descriptions and specifications',
      icon: '🛍️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered content generation platform. Create blog posts, social media content, videos, and more with advanced AI technology." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, social media content, video production, content marketing" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Generation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered content generation platform. Create blog posts, social media content, videos, and more with advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for comprehensive content creation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create any type of content with our AI-powered platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((contentType, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{contentType.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{contentType.title}</h3>
                  <p className="text-gray-300">{contentType.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Amazing Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using our AI Content Generation platform today and boost your content creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIContentGenerationPage;