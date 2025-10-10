'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, FileText, Image, Video, Mic, Globe, Lock, Sparkles, Target, Award, PenTool, Palette, Share2 } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <PenTool className="w-6 h-6 text-cyan-400" />,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content for blogs, social media, emails, and marketing materials'
    },
    {
      icon: <Image className="w-6 h-6 text-blue-400" />,
      title: 'AI Image Generation',
      description: 'Create stunning visuals, graphics, and illustrations with AI-powered image generation'
    },
    {
      icon: <Video className="w-6 h-6 text-green-400" />,
      title: 'Video Creation',
      description: 'Produce engaging videos with AI-generated scripts, voiceovers, and editing'
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      title: 'Brand Consistency',
      description: 'Maintain consistent brand voice and visual identity across all content'
    },
    {
      icon: <Share2 className="w-6 h-6 text-orange-400" />,
      title: 'Multi-Platform Publishing',
      description: 'Publish content across multiple channels with automated scheduling'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
      title: 'Performance Analytics',
      description: 'Track content performance and optimize based on AI insights'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$199',
      period: '/month',
      description: 'Perfect for content creators and small teams',
      features: [
        'Unlimited AI writing',
        '100 AI-generated images/month',
        '5 video projects/month',
        'Basic templates',
        'Social media scheduling',
        'Basic analytics',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for marketing teams and agencies',
      features: [
        'Everything in Creator',
        'Unlimited AI images',
        'Unlimited video projects',
        'Advanced templates',
        'Brand voice training',
        'Advanced analytics',
        'Priority support',
        '25 team members',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'API access',
        'Dedicated support manager',
        'Custom integrations',
        'Advanced security',
        'Unlimited team members',
        'Custom workflows'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '25K+', label: 'Content Creators' },
    { icon: <FileText className="w-8 h-8 text-green-500" />, value: '1M+', label: 'Content Pieces Created' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, value: '300%', label: 'Content Production Increase' },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: '4.9/5', label: 'User Rating' }
  ];

  const contentTypes = [
    'Blog Posts & Articles',
    'Social Media Content',
    'Email Campaigns',
    'Product Descriptions',
    'Marketing Copy',
    'Video Scripts',
    'Podcast Scripts',
    'Press Releases',
    'Case Studies',
    'White Papers',
    'Infographics',
    'Presentations'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Studio - Zion Tech Group | Complete Content Creation Suite</title>
        <meta name="description" content="Revolutionary AI-powered content creation platform with writing, image generation, video creation, and multi-platform publishing. Starting at $199/month." />
        <meta name="keywords" content="AI content creation, content marketing, AI writing, image generation, video creation, content automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Complete Content Creation Suite
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Studio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Create stunning content at scale with our AI-powered studio. Generate blog posts, 
            social media content, videos, images, and more with just a few clicks. 
            Increase your content production by 300% while maintaining quality and brand consistency.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Watch Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Create Any Type of Content</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From blog posts to videos, our AI can create any content you need for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                <span className="text-gray-300 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and publish content at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular ? 'border-cyan-500 scale-105' : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {plan.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose AI Content Studio?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of content creators and marketers who have transformed their workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">10x Faster Content Creation</h3>
              <p className="text-gray-300">Create content 10x faster than traditional methods while maintaining high quality.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Brand Consistency</h3>
              <p className="text-gray-300">Maintain consistent brand voice and visual identity across all content types.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Better Performance</h3>
              <p className="text-gray-300">AI-optimized content performs 40% better in engagement and conversions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your 14-day free trial today and experience the future of content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Plans</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentStudioPage;