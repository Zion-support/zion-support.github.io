'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { FileText, Brain, Zap, Target, CheckCircle, ArrowRight, Star, Users, BarChart, Globe, Lock, PenTool } from 'lucide-react';

const AIContentGenerationProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Generation Pro | Zion Tech Group</title>
        <meta name="description" content="Advanced AI content generation platform with enterprise-grade features, multi-format support, and intelligent content optimization for professional content creation." />
        <meta name="keywords" content="AI content generation, content creation, AI writing, content automation, enterprise content" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Professional AI</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Content Generation
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI content generation platform with enterprise-grade features, 
                multi-format support, and intelligent content optimization for professional 
                content creation at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Professional Content Creation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate high-quality, professional content across multiple formats 
                with advanced AI capabilities and enterprise-grade features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Multi-Format Content</h3>
                <p className="text-gray-300 mb-4">
                  Generate content in multiple formats including articles, blogs, 
                  social media posts, emails, and technical documentation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Blog articles & posts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Social media content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Technical documentation
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced AI Models</h3>
                <p className="text-gray-300 mb-4">
                  Powered by state-of-the-art language models with context understanding, 
                  tone adaptation, and industry-specific knowledge.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Context-aware generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Tone & style adaptation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Industry expertise
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">SEO Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Automatically optimize content for search engines with keyword integration, 
                  meta descriptions, and content structure optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Keyword optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Meta descriptions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Content structure
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Batch Processing</h3>
                <p className="text-gray-300 mb-4">
                  Generate large volumes of content efficiently with batch processing, 
                  templates, and automated workflows for content production.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Bulk content generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Template system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Workflow automation
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Content Editing</h3>
                <p className="text-gray-300 mb-4">
                  Advanced editing tools with AI-powered suggestions, grammar checking, 
                  and style improvements for professional content refinement.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    AI editing suggestions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Grammar & style check
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Real-time collaboration
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
                <p className="text-gray-300 mb-4">
                  Track content performance with detailed analytics, engagement metrics, 
                  and optimization recommendations for better results.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Performance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Engagement metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Optimization tips
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Content Types & Formats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate professional content across all major formats and platforms 
                with specialized AI models for each content type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Blog Articles</h3>
                <p className="text-gray-400 text-sm">Long-form content, how-to guides, and thought leadership pieces</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
                <p className="text-gray-400 text-sm">Posts, captions, and content for all major social platforms</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Marketing Copy</h3>
                <p className="text-gray-400 text-sm">Ad copy, email campaigns, and promotional content</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Technical Docs</h3>
                <p className="text-gray-400 text-sm">API documentation, user guides, and technical specifications</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Scale Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators and businesses using AI Content Generation Pro 
              to produce high-quality content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
=======
import { FileText, PenTool, Image, Video, CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain, Target, Sparkles } from 'lucide-react';

const AIContentGenerationProPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Advanced Content Creation',
      description: 'Generate high-quality text, articles, and copy with AI-powered writing assistance'
    },
    {
      icon: Image,
      title: 'Visual Content Generation',
      description: 'Create stunning images, graphics, and visual content using AI image generation'
    },
    {
      icon: Video,
      title: 'Video Content Production',
      description: 'Generate video content, animations, and multimedia presentations automatically'
    },
    {
      icon: PenTool,
      title: 'Brand-Consistent Content',
      description: 'Maintain brand voice and style across all generated content with custom training'
    }
  ];

  const benefits = [
    'AI-powered content generation across multiple formats',
    'Brand-consistent content with custom voice and style',
    'Multi-language support with cultural adaptation',
    'Integration with popular content management systems',
    'Advanced content optimization for SEO and engagement',
    'Automated content scheduling and distribution',
    'Real-time content performance analytics',
    'Scalable content production for high-volume needs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generation Pro | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content generation platform for creating high-quality text, images, and video content at scale" />
        <meta name="keywords" content="content generation, AI writing, content creation, automated content, marketing content" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Content Generation Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create high-quality content at scale with our advanced AI-powered content generation platform. 
              Generate text, images, videos, and multimedia content that resonates with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Content Generation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers professional-quality content across all formats and channels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your content production with intelligent automation and AI creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Generate Content at Scale?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your content generation needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                Call Now
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2" size={20} />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/main
  );
};

export default AIContentGenerationProPage;