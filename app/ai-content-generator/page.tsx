'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { PenTool, Brain, Zap, Target, CheckCircle, Star, ArrowRight, Users, BarChart, Clock, FileText, Image, Video, Mic } from 'lucide-react';

const AiContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality written content with AI-powered writing assistance.',
      benefits: ['Blog posts', 'Articles', 'Product descriptions', 'Marketing copy']
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning visuals and images using AI-powered image generation.',
      benefits: ['Custom graphics', 'Product images', 'Social media visuals', 'Banner ads']
    },
    {
      icon: Video,
      title: 'Video Content',
      description: 'Generate engaging video content with AI-powered video creation tools.',
      benefits: ['Promotional videos', 'Tutorial videos', 'Social media content', 'Presentations']
    },
    {
      icon: Mic,
      title: 'Audio Content',
      description: 'Create audio content including podcasts, voiceovers, and music.',
      benefits: ['Podcast episodes', 'Voiceovers', 'Background music', 'Audio ads']
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: 'Blog Posts',
      description: 'Generate engaging blog posts on any topic',
      benefits: ['SEO optimized', 'Multiple formats', 'Research integration', 'Plagiarism free']
    },
    {
      icon: Target,
      title: 'Marketing Copy',
      description: 'Create compelling marketing materials and advertisements',
      benefits: ['Persuasive writing', 'A/B testing', 'Brand voice', 'Call-to-action']
    },
    {
      icon: Users,
      title: 'Social Media',
      description: 'Generate content for all social media platforms',
      benefits: ['Platform specific', 'Trending topics', 'Hashtag optimization', 'Engagement focused']
    },
    {
      icon: BarChart,
      title: 'Technical Content',
      description: 'Create technical documentation and guides',
      benefits: ['Technical accuracy', 'Step-by-step guides', 'Code examples', 'API documentation']
    }
  ];

  const benefits = [
    'Generate content 10x faster than manual writing',
    'Maintain consistent brand voice across all content',
    'Optimize content for SEO and engagement',
    'Create multilingual content for global reach',
    'Reduce content creation costs by 70%',
    'Scale content production without additional staff'
  ];

  const stats = [
    { number: '10x', label: 'Faster Content Creation', icon: Zap },
    { number: '70%', label: 'Cost Reduction', icon: Target },
    { number: '50+', label: 'Content Types', icon: FileText },
    { number: '24/7', label: 'Content Generation', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content with our AI-powered content generator. Create blog posts, images, videos, and more with intelligent automation." />
        <meta name="keywords" content="AI content generator, content creation, AI writing, content automation, blog generator, image generator" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Generator</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Generate high-quality content with our AI-powered content generator. Create blog posts, images, videos, and more with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Generating
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate various types of content to meet all your content marketing needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
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

        {/* Core Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Content Generator?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered content generator provides intelligent solutions for all your content creation needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your content creation process with AI-driven automation and achieve exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Generate Amazing Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our AI content generator today and create high-quality content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiContentGeneratorPage;