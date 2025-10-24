'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Brain, CheckCircle, FileText, MessageCircle, Target, Globe, Send, BarChart3, Shield, Zap, DollarSign, Clock, Star, Activity, Lock, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react';

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content using advanced AI algorithms that understand context and tone.',
      benefits: ['Natural language generation', 'Context-aware writing', 'Multiple content types', 'Brand voice adaptation']
    },
    {
      icon: FileText,
      title: 'Multiple Content Formats',
      description: 'Create various types of content including articles, blogs, social media posts, and marketing copy.',
      benefits: ['Blog posts', 'Social media content', 'Email campaigns', 'Product descriptions']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword integration and meta descriptions.',
      benefits: ['Keyword research', 'SEO optimization', 'Meta descriptions', 'Content structure']
    },
    {
      icon: Zap,
      title: 'Fast Content Generation',
      description: 'Generate content in seconds instead of hours, dramatically improving productivity.',
      benefits: ['Instant generation', 'Bulk content creation', 'Time savings', 'Consistent quality']
    }
  ];

  const benefits = [
    'Save 80% time on content creation',
    'Generate unlimited content variations',
    'Maintain consistent brand voice',
    'Optimize for SEO automatically',
    'Scale content production easily'
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate high-quality content with our AI-powered content generator. Create blogs, social media posts, 
              marketing copy, and more in seconds with advanced natural language processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Generating
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
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Content Generation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI content generator provides everything you need to create engaging, high-quality content at scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Content Generator?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your content creation process with intelligent automation and proven results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
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
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of content creators and marketers using our AI to generate high-quality content at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default AIContentGeneratorPage;