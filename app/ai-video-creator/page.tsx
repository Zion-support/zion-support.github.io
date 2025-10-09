'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Video, Play, Zap, CheckCircle, Star, ArrowRight, Brain, Camera, Mic, Edit, Settings, Shield, Globe, Clock, Users, TrendingUp, Film, Music, Image } from 'lucide-react';

const AIVideoCreatorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Video Generation',
      description: 'Create professional videos from text descriptions in minutes',
      price: 'Included'
    },
    {
      icon: Camera,
      title: 'Auto Video Editing',
      description: 'Intelligent cuts, transitions, and effects automatically applied',
      price: 'Included'
    },
    {
      icon: Mic,
      title: 'AI Voiceover',
      description: 'Natural-sounding voiceovers in 50+ languages and accents',
      price: 'Included'
    },
    {
      icon: Music,
      title: 'Background Music',
      description: 'AI-generated royalty-free music that matches your content',
      price: 'Included'
    },
    {
      icon: Image,
      title: 'Stock Footage',
      description: 'Access to millions of high-quality stock videos and images',
      price: '+$99/month'
    },
    {
      icon: Settings,
      title: 'Advanced Customization',
      description: 'Custom branding, templates, and professional effects',
      price: '+$199/month'
    }
  ];

  const videoTypes = [
    { name: 'Marketing Videos', icon: TrendingUp, color: 'text-cyan-400' },
    { name: 'Social Media', icon: Globe, color: 'text-pink-400' },
    { name: 'Explainer Videos', icon: Play, color: 'text-blue-400' },
    { name: 'Training Content', icon: Users, color: 'text-green-400' },
    { name: 'Product Demos', icon: Camera, color: 'text-purple-400' },
    { name: 'Event Coverage', icon: Film, color: 'text-orange-400' }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$99',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        'Up to 50 videos/month',
        'Basic AI generation',
        'Standard templates',
        'Email support',
        'HD quality export',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for businesses',
      features: [
        'Up to 200 videos/month',
        'Advanced AI features',
        'Custom branding',
        'Priority support',
        '4K quality export',
        'Team collaboration (5 users)',
        'Stock footage access',
        'Advanced editing tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited videos',
        'Custom AI training',
        'White-label solution',
        '24/7 dedicated support',
        'Unlimited team members',
        'API access',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Create Videos 10x Faster',
      description: 'Generate professional videos in minutes instead of hours',
      icon: Zap,
      metric: '10x'
    },
    {
      title: 'Save $5,000+ Monthly',
      description: 'Eliminate the need for expensive video production teams',
      icon: TrendingUp,
      metric: '$5,000+'
    },
    {
      title: 'Increase Engagement 300%',
      description: 'AI-optimized videos drive higher engagement rates',
      icon: Play,
      metric: '300%'
    },
    {
      title: '50+ Languages',
      description: 'Create videos in any language with AI voiceovers',
      icon: Globe,
      metric: '50+'
    }
  ];

  const useCases = [
    {
      title: 'Marketing Campaigns',
      description: 'Create compelling marketing videos for social media and advertising',
      icon: TrendingUp,
      savings: 'Launch campaigns 5x faster'
    },
    {
      title: 'Training Content',
      description: 'Generate educational videos for employee training and onboarding',
      icon: Users,
      savings: 'Reduce training costs by 70%'
    },
    {
      title: 'Product Demos',
      description: 'Create professional product demonstration videos',
      icon: Camera,
      savings: 'Increase sales by 40%'
    },
    {
      title: 'Social Media',
      description: 'Generate engaging content for Instagram, TikTok, and YouTube',
      icon: Globe,
      savings: 'Grow followers 3x faster'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Video Creator - Zion Tech Group | Automated Video Production</title>
        <meta name="description" content="AI-powered video creation with automated editing, voiceovers, and effects. Create professional videos 10x faster. Starting at $99/month." />
        <meta name="keywords" content="AI video creator, video generation, automated video editing, AI voiceover, video production, content creation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-video-creator" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain-effect">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch">
              AI Video Creator
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Create Professional Videos with AI
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your ideas into stunning videos with AI-powered creation, editing, 
              and voiceovers. No technical skills required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Video className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            {/* Video Types */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {videoTypes.map((type, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <type.icon className={`w-8 h-8 mx-auto mb-2 ${type.color}`} />
                  <div className="text-white font-semibold text-sm">{type.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose AI Video Creation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card-advanced p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Powerful Video Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <div className="text-cyan-400 font-semibold">{feature.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card-advanced p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                      <div className="text-green-400 font-semibold mb-2">{useCase.savings}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              How AI Video Creation Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Edit className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Describe Your Video</h3>
                <p className="text-gray-300 text-lg">
                  Tell our AI what kind of video you want to create. Provide a script or description.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. AI Creates Your Video</h3>
                <p className="text-gray-300 text-lg">
                  Our AI generates visuals, adds voiceovers, music, and effects automatically.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Export & Share</h3>
                <p className="text-gray-300 text-lg">
                  Download your professional video in any format and share it anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Choose Your Video Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'border-2 border-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button-enhanced'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing Videos?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 2,000+ creators already using our AI video creator to produce professional content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Video className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIVideoCreatorPage;