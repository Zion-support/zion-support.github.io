'use client';
import React from 'react';
import { ArrowRight, Brain, CheckCircle, FileText, MessageCircle, Target, Globe, Send, BarChart3, Shield, Zap, DollarSign, Clock, Star, Activity, Lock, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react';

export default function AIContentGeneratorPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Writing',
      description: 'Advanced AI-powered content generation with high accuracy and human-like quality.',
      benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation']
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Content Templates',
      description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
      benefits: ['Industry-specific templates', 'Customizable layouts', 'SEO-optimized structure', 'Mobile-responsive design']
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: 'Social Media Content',
      description: 'Generate engaging social media posts, captions, and hashtags for all platforms.',
      benefits: ['Platform-specific content', 'Trending hashtags', 'Engagement optimization', 'Visual content suggestions']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'SEO Optimization',
      description: 'AI-optimized content that ranks higher in search engines and drives organic traffic.',
      benefits: ['Keyword research', 'Content optimization', 'Meta descriptions', 'Schema markup']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Generator</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content creation with our advanced AI-powered writing assistant. Generate high-quality, engaging content for any platform or purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Generating
              <ArrowRight className="w-8 h-8" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI content generator comes with everything you need to create compelling content at scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-8 h-8" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start generating high-quality content with our AI-powered writing assistant today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="w-8 h-8" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}