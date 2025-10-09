'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { PenTool, Image, Video, Share2, CheckCircle, Phone, Mail, Brain, Zap, Shield, Users, Target } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content for blogs, social media, emails, and marketing materials with advanced AI.',
      benefits: ['50+ content types', 'Brand voice matching', 'SEO optimization']
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Create stunning visuals, graphics, and images using AI-powered image generation technology.',
      benefits: ['Unlimited images', 'Custom styles', 'High resolution']
    },
    {
      icon: Video,
      title: 'Video Creation',
      description: 'Produce professional videos with AI-powered editing, voiceovers, and automated video generation.',
      benefits: ['Auto-editing', 'Voice synthesis', 'Multiple formats']
    },
    {
      icon: Share2,
      title: 'Social Media Automation',
      description: 'Automatically schedule and publish content across all social media platforms with optimal timing.',
      benefits: ['Multi-platform', 'Auto-scheduling', 'Performance tracking']
    },
    {
      icon: Brain,
      title: 'Content Strategy',
      description: 'AI-powered content planning and strategy recommendations based on your audience and goals.',
      benefits: ['Audience analysis', 'Trend prediction', 'Content calendar']
    },
    {
      icon: Target,
      title: 'Performance Analytics',
      description: 'Track content performance across all channels with detailed analytics and optimization suggestions.',
      benefits: ['Real-time metrics', 'ROI tracking', 'Optimization tips']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 content pieces/month',
        'Basic AI writing',
        'Standard image generation',
        'Email support',
        'Basic templates',
        '1 social media account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 content pieces/month',
        'Advanced AI writing',
        'Premium image generation',
        'Video creation',
        'Priority support',
        'Custom templates',
        '5 social media accounts',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited content',
        'Custom AI models',
        'All features included',
        'Dedicated support',
        'Custom development',
        'White-label options',
        'Unlimited accounts',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10x', label: 'Content Production' },
    { number: '85%', label: 'Time Savings' },
    { number: '300%', label: 'Engagement Increase' },
    { number: '50+', label: 'Content Types' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Studio - Zion Tech Group"
        description="Complete content creation suite with AI writing, image generation, video editing, and social media automation. 10x content production speed."
        keywords={['AI content creation', 'content studio', 'AI writing', 'image generation', 'video creation', 'social media automation']}
        canonicalUrl="https://ziontechgroup.com/ai-content-studio"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Content Studio
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Create 10x more content with AI-powered automation
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our complete content creation suite combines AI writing, image generation, video editing, 
                and social media automation to help you produce professional content at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Complete Content Creation Suite
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Scale Your Content Production?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 2,000+ businesses already using our content studio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIContentStudioPage;