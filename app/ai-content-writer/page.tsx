import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, PenTool, Target, CheckCircle, Phone, Mail, MapPin, ArrowRight, Star, Users, Brain, Zap, Globe, Shield, Clock, Activity, TrendingUp } from 'lucide-react';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'Blog Writing',
      description: 'AI-powered blog content creation with SEO optimization and engaging storytelling.',
      icon: FileText,
      benefits: [
        'SEO-optimized content',
        'Engaging storytelling',
        'Research integration',
        'Content structure'
      ]
    },
    {
      title: 'Copywriting',
      description: 'Compelling copy for marketing materials, ads, and promotional content.',
      icon: PenTool,
      benefits: [
        'Persuasive copy',
        'A/B testing',
        'Conversion optimization',
        'Brand voice consistency'
      ]
    },
    {
      title: 'Technical Writing',
      description: 'Clear and concise technical documentation and user guides.',
      icon: Target,
      benefits: [
        'Technical accuracy',
        'User-friendly language',
        'Comprehensive coverage',
        'Visual integration'
      ]
    },
    {
      title: 'Social Media',
      description: 'Engaging social media content that drives engagement and growth.',
      icon: Globe,
      benefits: [
        'Platform optimization',
        'Trend integration',
        'Engagement focus',
        'Visual content'
      ]
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
      title: 'Marketing Copy',
      description: 'Compelling marketing copy that converts visitors into customers',
      icon: Target
    },
    {
      title: 'Technical Documentation',
      description: 'Clear and comprehensive technical documentation for products and services',
      icon: PenTool
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="AI-powered content writing that creates engaging, SEO-optimized content. Blog posts, copywriting, technical writing, and more with intelligent automation." />
        <meta name="keywords" content="AI content writer, content writing, blog writing, copywriting, technical writing, content automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Writer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Create engaging, SEO-optimized content with AI-powered writing assistance. 
              From blog posts to marketing copy, generate high-quality content that resonates with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300">
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
                Content Writing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered content writer provides comprehensive tools for all writing needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content Writing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for writers, marketers, and businesses who need quality content at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Content Writer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered content writing that transforms your workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
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
                Ready to Write Better Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of writers who are already using our AI Content Writer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Writing
                </button>
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
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

export default AIContentWriterPage;