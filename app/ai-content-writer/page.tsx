'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Generation',
      description: 'Generate high-quality content using advanced AI algorithms and natural language processing'
    },
    {
      icon: Shield,
      title: 'Content Optimization',
      description: 'AI-driven content optimization for SEO, readability, and engagement'
    },
    {
      icon: Zap,
      title: 'Fast Content Creation',
      description: 'Create content at scale with lightning-fast AI-powered writing tools'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Generate content in multiple languages with accurate translations'
    }
  ];

  const benefits = [
    'Automated content generation for blogs, articles, and marketing materials',
    'SEO-optimized content with keyword research and optimization',
    'Multi-language content creation and translation',
    'Content tone and style customization',
    'Plagiarism detection and originality checking',
    'Content performance analytics and insights',
    'Easy integration with existing content management systems',
    '24/7 content creation support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer - Zion Tech Group | Intelligent Content Solutions</title>
        <meta name="description" content="Advanced AI-powered content writing solutions by Zion Tech Group. Generate high-quality content with AI assistance." />
        <meta name="keywords" content="AI content writer, content generation, AI writing, content marketing, SEO content" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Content Writer
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content creation process with AI-powered writing tools. Generate high-quality, 
            engaging content at scale with intelligent assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Content Writing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered content writing platform provides comprehensive solutions for all your content needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our AI Content Writer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of artificial intelligence in content creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Advanced Capabilities</h3>
              <p className="text-gray-300 mb-6">
                Our AI content writing platform uses advanced natural language processing and machine learning 
                to generate high-quality, engaging content that matches your brand voice and style preferences.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your content needs and get a customized AI writing solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all duration-200 flex items-center justify-center gap-2">
              Start Writing
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
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