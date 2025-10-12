'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, Image, Video, Mic, Globe, CheckCircle, ArrowRight, Star, 
  BarChart, TrendingUp, Target, Zap, Brain, PieChart, 
  Activity, Clock, Award, Shield, Users, Smartphone, Mail, Palette
} from 'lucide-react';

const ZionAiContentStudioProPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      title: 'AI Blog Writing',
      description: 'Generate high-quality blog posts, articles, and long-form content with SEO optimization and brand voice consistency'
    },
    {
      icon: <Image className="w-6 h-6 text-purple-400" />,
      title: 'AI Image Generation',
      description: 'Create stunning visuals, graphics, and social media images using advanced AI image generation technology'
    },
    {
      icon: <Video className="w-6 h-6 text-red-400" />,
      title: 'AI Video Creation',
      description: 'Produce engaging video content with AI-generated scripts, voiceovers, and automated editing'
    },
    {
      icon: <Mic className="w-6 h-6 text-green-400" />,
      title: 'AI Voice Synthesis',
      description: 'Convert text to natural-sounding speech in multiple languages and voices for podcasts and videos'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Multi-Language Support',
      description: 'Create content in 50+ languages with accurate translations and cultural adaptations'
    },
    {
      icon: <Palette className="w-6 h-6 text-orange-400" />,
      title: 'Brand Consistency',
      description: 'Maintain consistent brand voice, tone, and visual style across all content types'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$79',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 100 content pieces/month',
        'Basic AI writing tools',
        'Standard image generation',
        'Email support',
        'Basic templates',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 500 content pieces/month',
        'Advanced AI writing tools',
        'Premium image generation',
        'Priority support',
        'All templates',
        'Team collaboration',
        'Brand voice training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited content pieces',
        'Premium AI tools',
        '24/7 dedicated support',
        'Custom templates',
        'Advanced analytics',
        'White-label options',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: '10x Content Production',
      description: 'Create content 10x faster than traditional methods while maintaining high quality'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Increase Engagement by 65%',
      description: 'AI-optimized content drives higher engagement rates and better performance'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: 'Save 25 Hours/Week',
      description: 'Automate content creation tasks and focus on strategy and creativity'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Industry Recognition',
      description: 'Trusted by 1,000+ content creators and marketers worldwide'
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'Long-form content optimized for SEO with engaging headlines and compelling narratives',
      icon: <FileText className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Social Media Content',
      description: 'Platform-specific posts for Instagram, Twitter, LinkedIn, and Facebook with hashtags',
      icon: <Smartphone className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Email Marketing',
      description: 'Newsletters, promotional emails, and drip campaigns with personalization',
      icon: <Mail className="w-8 h-8 text-red-400" />
    },
    {
      title: 'Video Scripts',
      description: 'YouTube scripts, TikTok content, and video marketing materials',
      icon: <Video className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Product Descriptions',
      description: 'E-commerce product descriptions, features, and benefits copy',
      icon: <Target className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Ad Copy & Landing Pages',
      description: 'High-converting ad copy and landing page content for all platforms',
      icon: <BarChart className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Content Studio Pro - Advanced AI Content Creation Platform | Zion Tech Group</title>
        <meta name="description" content="Create stunning content 10x faster with Zion AI Content Studio Pro. AI-powered writing, images, videos, and more. Start your free trial today!" />
        <meta name="keywords" content="AI content creation, content writing, AI image generation, video creation, content marketing, social media content" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-content-studio-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <FileText className="w-4 h-4" />
              <span>AI-Powered Content Creation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Zion AI Content{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Studio Pro
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create stunning content 10x faster with AI. Generate blogs, images, videos, and social media 
              content that engages your audience and drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Live Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-gray-300 text-sm">Faster Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">65%</div>
                <div className="text-gray-300 text-sm">Higher Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1,000+</div>
                <div className="text-gray-300 text-sm">Happy Creators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">25hrs</div>
                <div className="text-gray-300 text-sm">Time Saved/Week</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional content at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Create Any <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Content Type</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to videos, we support all your content creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((contentType, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      {contentType.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {contentType.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {contentType.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion AI Content Studio Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of creators already using our AI to transform their content strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
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
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/25' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20'
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Content Creation?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join 1,000+ creators already using Zion AI Content Studio Pro to create 
                  content 10x faster and increase engagement by 65%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your Free Trial
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiContentStudioProPage;