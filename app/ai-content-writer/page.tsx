'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, PenTool, Target, CheckCircle, Phone, Mail, MapPin, ArrowRight, Star, Users, Brain, Zap, Globe, Shield, Clock, Activity, TrendingUp } from 'lucide-react';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI Blog Writing',
      description: 'Advanced AI-powered blog content creation with SEO optimization and brand voice consistency.',
      benefits: ['SEO-optimized content', 'Brand voice consistency', 'Multi-language support', 'Content calendar automation']
    },
    {
      icon: PenTool,
      title: 'Creative Writing',
      description: 'Generate creative and engaging content for various purposes and audiences.',
      benefits: ['Creative storytelling', 'Engaging narratives', 'Audience targeting', 'Content personalization']
    },
    {
      icon: Target,
      title: 'Marketing Copy',
      description: 'Create compelling marketing copy that converts visitors into customers.',
      benefits: ['Conversion optimization', 'A/B testing', 'Call-to-action optimization', 'Sales copy generation']
    },
    {
      icon: Brain,
      title: 'Content Intelligence',
      description: 'AI-powered content analysis and optimization for better engagement and performance.',
      benefits: ['Content analysis', 'Performance optimization', 'Engagement prediction', 'SEO recommendations']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate content creation workflows and streamline production processes.',
      benefits: ['Automated workflows', 'Template automation', 'Scheduling tools', 'Production optimization']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Content',
      description: 'Create content optimized for different platforms and channels with AI assistance.',
      benefits: ['Platform optimization', 'Channel-specific content', 'Cross-platform consistency', 'Automated distribution']
    }
  ];

  const benefits = [
    'Increase content output by 10x',
    'Improve SEO rankings by 150%',
    'Save 80% of content creation time',
    'Increase engagement by 200%',
    'Enable consistent brand voice',
    'Automate content workflows',
    'Scale content across channels',
    'Enhance content quality'
  ];

  const useCases = [
    {
      title: 'Blog Writing',
      description: 'High-quality blog posts that engage readers and rank well in search engines',
      icon: FileText
    },
    {
      title: 'Social Media',
      description: 'Engaging social media content that drives engagement and conversions',
      icon: Globe
    },
    {
      title: 'Marketing Copy',
      description: 'Compelling marketing copy that converts visitors into customers',
      icon: Target
    },
    {
      title: 'E-commerce',
      description: 'Product descriptions and marketing content for online stores',
      icon: ShoppingCart
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered content writing platform. Create high-quality blog posts, marketing copy, and social media content with advanced AI technology." />
        <meta name="keywords" content="AI content writer, content creation, blog writing, marketing copy, social media content, content marketing, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Writer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered content writing platform. Create high-quality blog posts, 
              marketing copy, and social media content with advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Writing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Writing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for intelligent content creation and optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Content Writer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of content writing with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog writing to marketing copy, our AI writer adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Write Amazing Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start creating high-quality content with our AI-powered writing platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIContentWriterPage;