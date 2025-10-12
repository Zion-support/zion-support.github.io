'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Video, Play, Zap, Star, CheckCircle, ArrowRight, 
  Clock, Users, Shield, Globe, Phone, Mail, MapPin,
  BarChart3, Palette, Settings, Download, Share2
} from 'lucide-react';

const ZionAiVideoGeneratorPage: React.FC = () => {
  const features = [
    'AI-powered video generation from text prompts',
    'Multiple video styles and templates',
    'Voice synthesis and lip-sync technology',
    '4K video export capabilities',
    'Real-time preview and editing',
    'Brand customization and watermarking',
    'Social media optimization',
    'Batch processing and automation'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10 videos per month',
        'HD quality (1080p)',
        'Basic templates',
        'Standard voice synthesis',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for content creators and agencies',
      features: [
        '50 videos per month',
        '4K quality export',
        'Premium templates',
        'Advanced voice synthesis',
        'Custom branding',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and teams',
      features: [
        'Unlimited videos',
        '4K + HDR quality',
        'All templates + custom',
        'Multi-language support',
        'White-label solution',
        'Dedicated support',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10M+', label: 'Videos Generated', icon: <Video className="w-6 h-6 text-cyan-400" /> },
    { number: '50K+', label: 'Active Users', icon: <Users className="w-6 h-6 text-emerald-400" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6 text-blue-400" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning videos with Zion AI Video Generator. Create professional-quality videos from text prompts using advanced AI technology." />
        <meta name="keywords" content="AI video generator, video creation, artificial intelligence, content creation, video marketing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-video-generator" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
              <Video className="w-4 h-4" />
              <span>AI-Powered Video Creation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Zion AI Video Generator
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your ideas into stunning professional videos with the power of AI. 
              Create engaging content in minutes, not hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>Start Creating Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#demo" 
                className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Watch Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Demo Video Placeholder */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-purple-800/30 to-cyan-800/30 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg">AI Video Generation Demo</p>
                    <p className="text-gray-400 text-sm">Click to see how easy it is to create professional videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Feature {index + 1}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your video creation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${plan.popular ? 'ring-2 ring-purple-400/50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700 shadow-lg shadow-purple-500/25' 
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Create Amazing Videos?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of creators who are already using AI to produce professional videos in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View All Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help Getting Started?</h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiVideoGeneratorPage;
