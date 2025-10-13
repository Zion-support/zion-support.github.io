import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, CheckCircle, Star, Cloud, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Edit, Image, Video, Mic, Palette, Zap, Globe, Smartphone, Activity } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionContentStudio = () => {
  const features = [
    'AI Content Generation',
    'Multi-format Support',
    'Brand Voice Training',
    'SEO Optimization',
    'Content Calendar',
    'Team Collaboration',
    'Plagiarism Detection',
    'Content Templates',
    'Social Media Scheduling',
    'Analytics Dashboard',
    'White-label Options',
    'API Integration'
  ];

  const pricingTiers = [
    {
      name: 'Creator',
      price: '$19',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '50 content pieces/month',
        'Basic templates',
        'SEO optimization',
        'Email support',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for content teams',
      features: [
        '200 content pieces/month',
        'Advanced templates',
        'Brand voice training',
        'Priority support',
        'Up to 5 user accounts',
        'Advanced analytics',
        'Content calendar',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large content teams',
      features: [
        'Unlimited content',
        'Custom templates',
        'White-label options',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'Advanced analytics',
        'API access'
      ],
      popular: false
    }
  ];

  const contentTypes = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Blog Posts',
      description: 'SEO-optimized blog articles with research and formatting.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Marketing',
      description: 'Engaging email campaigns and newsletters.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Social Media',
      description: 'Platform-specific posts for all major social networks.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Scripts',
      description: 'Compelling scripts for YouTube, TikTok, and more.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: 'Product Descriptions',
      description: 'Persuasive product copy for e-commerce.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Podcast Scripts',
      description: 'Professional podcast episode scripts and show notes.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const integrations = [
    { name: 'WordPress', icon: <FileText className="w-6 h-6" /> },
    { name: 'HubSpot', icon: <Users className="w-6 h-6" /> },
    { name: 'Mailchimp', icon: <Mail className="w-6 h-6" /> },
    { name: 'Hootsuite', icon: <Globe className="w-6 h-6" /> },
    { name: 'Canva', icon: <Image className="w-6 h-6" /> },
    { name: 'Google Docs', icon: <Edit className="w-6 h-6" /> },
    { name: 'Slack', icon: <Users className="w-6 h-6" /> },
    { name: 'Zapier', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Zion Content Studio - AI Content Creation Platform | Zion Tech Group"
        description="Create high-quality content with AI-powered tools. Blog posts, social media, emails, and more. Starting at $19/month with 14-day free trial."
        keywords="content creation, AI writing, blog posts, social media content, email marketing, content marketing, copywriting"
        canonical="https://ziontechgroup.com/zion-content-studio"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <FileText className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI Content Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
              Zion Content Studio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create high-quality content at scale with our AI-powered content creation platform. 
            Blog posts, social media, emails, and more - all optimized for engagement and SEO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <FileText className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-gray-300 text-sm">Content Pieces Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Content Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From blog posts to social media, our AI creates engaging content for every platform and purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Content Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your content at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-purple-300 transition-colors">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a complete content workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors mb-2 flex justify-center">
                  {integration.icon}
                </div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Creation Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-purple-500/50 shadow-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Creating Amazing Content
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of content creators and marketers who use Zion Content Studio to 
            create engaging content at scale. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <FileText className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionContentStudio;