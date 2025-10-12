'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Mail, Zap, Brain, 
  Sparkles, Clock, Users, Award, Shield, Globe, 
  BarChart, TrendingUp, MessageCircle, Heart, Target, 
  Send, Eye, ThumbsUp, Settings, Bell, Calendar,
  DollarSign, PieChart, MousePointer, Filter
} from 'lucide-react';

const ZionAiEmailMarketingProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate compelling email subject lines, content, and CTAs using advanced AI that understands your audience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'AI automatically segments your audience based on behavior, preferences, and engagement patterns',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Create complex email sequences that trigger based on user actions, time delays, and behavioral data',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track open rates, click-through rates, conversions, and revenue with detailed AI-powered insights',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const emailTypes = [
    {
      title: 'Welcome Series',
      description: 'Onboard new subscribers with personalized welcome sequences',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      openRate: '45%'
    },
    {
      title: 'Abandoned Cart',
      description: 'Recover lost sales with AI-optimized cart abandonment emails',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      openRate: '38%'
    },
    {
      title: 'Product Recommendations',
      description: 'Increase sales with personalized product recommendations',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      openRate: '42%'
    },
    {
      title: 'Re-engagement',
      description: 'Win back inactive subscribers with smart re-engagement campaigns',
      icon: RefreshCw,
      color: 'from-orange-500 to-red-500',
      openRate: '35%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 contacts',
        '10,000 emails per month',
        'Basic AI content generation',
        'Email templates',
        'Basic automation',
        'Standard analytics',
        'Email support',
        '1 user'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 contacts',
        '50,000 emails per month',
        'Advanced AI content generation',
        'Premium templates',
        'Advanced automation workflows',
        'Advanced analytics & insights',
        'A/B testing',
        'Priority support',
        '5 users',
        'Custom branding'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high email volume',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Premium AI content generation',
        'Custom templates',
        'Complex automation workflows',
        'Real-time analytics dashboard',
        'Advanced A/B testing',
        'White-label solution',
        'Unlimited users',
        'Custom integrations',
        'Dedicated account manager'
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  const benefits = [
    {
      title: '3x Higher Open Rates',
      description: 'AI-optimized subject lines and send times increase engagement significantly',
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '5x More Conversions',
      description: 'Personalized content and smart segmentation drive better results',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Save 15+ Hours Weekly',
      description: 'Automate your entire email marketing workflow with AI assistance',
      icon: Clock,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ROI Tracking',
      description: 'Track revenue generated from each email campaign with detailed analytics',
      icon: DollarSign,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '25K+', label: 'Active Users', icon: Users },
    { number: '100M+', label: 'Emails Sent', icon: Send },
    { number: '45%', label: 'Avg Open Rate', icon: Eye },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Marketing Pro - AI-Powered Email Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your email marketing with AI-powered content generation, smart segmentation, and automated workflows. Increase open rates and conversions. Start your free trial today!" />
        <meta name="keywords" content="email marketing, AI email automation, email campaigns, email templates, marketing automation, email analytics" />
        <meta property="og:title" content="Zion AI Email Marketing Pro - AI-Powered Email Automation" />
        <meta property="og:description" content="Boost your email marketing ROI with AI. Generate content, segment audiences, and automate workflows for better results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-email-marketing-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI Email Marketing
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Pro Platform
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your email marketing with AI-powered content generation, 
                  smart segmentation, and automated workflows that drive real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    14-day free trial
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 mx-auto">
                      <Mail className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">AI-Powered Email Campaigns</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Subject Line Optimization</span>
                        <span className="text-green-400 font-semibold">+45%</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Open Rate Improvement</span>
                        <span className="text-green-400 font-semibold">+38%</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Click-Through Rate</span>
                        <span className="text-green-400 font-semibold">+52%</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Conversion Rate</span>
                        <span className="text-green-400 font-semibold">+67%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform combines automation with intelligence to deliver 
                exceptional email marketing results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Email Types Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pre-Built Email Campaigns
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with our AI-optimized email templates and campaigns 
                that are proven to drive results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emailTypes.map((emailType, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${emailType.color} rounded-lg mb-4`}>
                      <emailType.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{emailType.title}</h3>
                    <p className="text-gray-300 mb-4">{emailType.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Avg Open Rate</span>
                      <span className="text-lg font-bold text-green-400">{emailType.openRate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have transformed their email marketing with our AI platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg mb-4`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as your email list grows.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border ${
                    plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-xl text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses who are already using our AI-powered email marketing 
              platform to increase engagement and drive more sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiEmailMarketingProPage;