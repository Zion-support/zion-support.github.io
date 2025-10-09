'use client';
import React from 'react';
import { PenTool, CheckCircle, ArrowRight, Phone, Mail, Clock, Users, Shield, Target, BarChart, Settings, Brain, FileText, Image, Video, Mic } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content for blogs, articles, and marketing materials'
    },
    {
      icon: Image,
      title: 'Visual Content Creation',
      description: 'Create stunning images, infographics, and visual assets with AI'
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Generate video content, animations, and multimedia presentations'
    },
    {
      icon: Mic,
      title: 'Audio Content',
      description: 'Create podcasts, voiceovers, and audio content with AI voices'
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'SEO-optimized content that ranks and engages readers',
      features: ['SEO optimization', 'Multiple formats', 'Research integration', 'Brand voice consistency']
    },
    {
      title: 'Social Media Content',
      description: 'Engaging posts for all social platforms with optimal timing',
      features: ['Platform optimization', 'Hashtag research', 'Visual content', 'Engagement tracking']
    },
    {
      title: 'Marketing Materials',
      description: 'Compelling copy for ads, emails, and promotional content',
      features: ['A/B testing', 'Conversion optimization', 'Personalization', 'Campaign management']
    },
    {
      title: 'Technical Documentation',
      description: 'Clear, comprehensive documentation and user guides',
      features: ['Technical accuracy', 'User-friendly language', 'Visual aids', 'Version control']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '10x Faster Creation',
      description: 'Create content 10 times faster than traditional methods'
    },
    {
      icon: Target,
      title: 'Higher Quality',
      description: 'AI ensures consistent quality and brand voice across all content'
    },
    {
      icon: Users,
      title: 'Scalable Production',
      description: 'Produce unlimited content without increasing your team size'
    },
    {
      icon: BarChart,
      title: 'Better Performance',
      description: 'AI-optimized content performs 3x better in engagement metrics'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Studio
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create stunning content at scale with our AI-powered content studio. 
                Generate text, images, videos, and audio content that engages and converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
                  <PenTool className="w-5 h-5 mr-2" />
                  Start Creating
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all">
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Content Creation Features</h2>
            <p className="text-gray-400">Everything you need to create amazing content</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Types Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Content Types We Create</h2>
            <p className="text-gray-400">Professional content for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Content Studio?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Simple process to create amazing content</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Define Requirements</h3>
              <p className="text-gray-400">Tell us what type of content you need and your brand guidelines</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Generation</h3>
              <p className="text-gray-400">Our AI creates high-quality content based on your specifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review & Edit</h3>
              <p className="text-gray-400">Review the content and make any necessary adjustments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Publish & Track</h3>
              <p className="text-gray-400">Publish your content and track performance metrics</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Amazing Content?</h2>
            <p className="text-gray-300 mb-8">Start creating professional content with AI today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIContentStudioPage;