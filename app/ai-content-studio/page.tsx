'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Code, Zap, Shield, Target, TrendingUp, Clock, Star, Image, Video, FileText, Palette, Globe, Award } from 'lucide-react';

const AiContentStudioPage: React.FC = () => {
  const features = [
    'AI writing for 50+ content types (blogs, social media, emails, ads)',
    'Image generation and editing with DALL-E and Midjourney integration',
    'Video creation and editing with AI-powered tools',
    'Social media content calendar with optimal posting times',
    'SEO optimization for all content types',
    'Brand voice training and consistency checking',
    'Multi-language support for 25+ languages',
    'Content plagiarism detection and originality scoring',
    'Automated content scheduling across platforms',
    'Team collaboration and approval workflows',
    'Content performance analytics and insights',
    'Template library with 1000+ pre-designed templates'
  ];

  const contentTypes = [
    'Blog Posts & Articles', 'Social Media Posts', 'Email Campaigns', 'Product Descriptions',
    'Ad Copy & Headlines', 'Press Releases', 'Case Studies', 'White Papers',
    'Website Copy', 'Landing Pages', 'Sales Letters', 'Newsletters',
    'Video Scripts', 'Podcast Scripts', 'Presentation Slides', 'Infographics',
    'Social Media Stories', 'LinkedIn Posts', 'Twitter Threads', 'Instagram Captions',
    'Facebook Ads', 'Google Ads', 'YouTube Descriptions', 'TikTok Scripts'
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$89',
      period: '/month',
      users: 'Up to 5 users',
      features: [
        '10,000 words/month',
        '50 images/month',
        '5 videos/month',
        'Basic templates',
        'Email support',
        '1 brand voice'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$179',
      period: '/month',
      users: 'Up to 20 users',
      features: [
        '50,000 words/month',
        '200 images/month',
        '20 videos/month',
        'All templates',
        'Priority support',
        '5 brand voices',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$349',
      period: '/month',
      users: 'Unlimited users',
      features: [
        'Unlimited words',
        'Unlimited images',
        'Unlimited videos',
        'Custom templates',
        'Dedicated support',
        'Unlimited brand voices',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: FileText, value: '1M+', label: 'Content Pieces Created' },
    { icon: TrendingUp, value: '400%', label: 'Content Production' },
    { icon: Clock, value: '90%', label: 'Time Saved' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' }
  ];

  const benefits = [
    'Create 10x more content in half the time',
    'Maintain consistent brand voice across all channels',
    'Generate SEO-optimized content that ranks higher',
    'Reduce content creation costs by up to 80%',
    'Scale content production without hiring more writers',
    'Improve content quality with AI-powered suggestions'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Content Studio - Complete Content Creation Suite | Zion Tech Group</title>
        <meta name="description" content="Create professional content at scale with our AI-powered content studio. Writing, design, video generation, and social media management in one platform." />
        <meta name="keywords" content="AI content creation, content marketing, AI writing, video generation, social media content, content automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-studio" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <Code className="w-20 h-20 text-pink-400 mx-auto mb-6 neon-glow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 neon-text">Studio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Create professional content at scale with our complete AI-powered content creation suite. 
              Generate written content, images, videos, and social media posts that engage your audience 
              and drive results for your business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6 rounded-xl">
                  <stat.icon className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1 neon-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button w-full sm:w-auto text-center">
                Start 14-Day Free Trial
              </button>
              <a 
                href="tel:+13024640950"
                className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">50+ Content Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create any type of content your business needs
              </p>
            </div>

            <div className="cyber-card p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {contentTypes.map((type, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="text-gray-300 text-sm font-medium">{type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Why Choose Our AI Content Studio?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI in content creation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create amazing content at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Simple Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative cyber-card p-8 ${
                    plan.popular ? 'border-2 border-pink-400 shadow-2xl shadow-pink-500/25 scale-105' : 'border border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.users}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-pink-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Create Amazing Content?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Start your free trial today and see how AI can transform your content creation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button w-full sm:w-auto text-center">
                  Start Free Trial
                </button>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiContentStudioPage;