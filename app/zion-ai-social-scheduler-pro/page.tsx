'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Calendar, Share2, Zap, 
  Sparkles, Brain, Clock, Users, Award, Shield, Globe, 
  BarChart, TrendingUp, MessageCircle, Heart, Target, 
  Instagram, Twitter, Facebook, Linkedin, Youtube, 
  Settings, Bell, Send, Eye, ThumbsUp, MessageSquare
} from 'lucide-react';

const ZionAiSocialSchedulerProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI determines optimal posting times based on your audience engagement patterns and platform algorithms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track performance across all platforms with detailed insights and AI-powered recommendations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Auto-Reposting',
      description: 'Automatically repost your best-performing content to maximize reach and engagement',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500', users: '2B+' },
    { name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-cyan-500', users: '450M+' },
    { name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-indigo-600', users: '3B+' },
    { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-700 to-blue-800', users: '900M+' },
    { name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600', users: '2.7B+' },
    { name: 'TikTok', icon: MessageSquare, color: 'from-gray-800 to-black', users: '1B+' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support',
        '1 user'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        '200 posts per month',
        'Advanced AI content generation',
        'Smart scheduling with AI',
        'Advanced analytics & insights',
        'Priority support',
        '5 users',
        'Content calendar',
        'Hashtag research'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited social media accounts',
        'Unlimited posts',
        'Premium AI content generation',
        'AI-powered optimal timing',
        'Real-time analytics dashboard',
        'White-label solution',
        'Unlimited users',
        'Team collaboration',
        'Custom integrations',
        'Dedicated account manager'
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Save 10+ Hours Per Week',
      description: 'Automate your entire social media workflow with AI-powered content creation and scheduling',
      icon: Clock,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Increase Engagement by 300%',
      description: 'AI-optimized posting times and content that resonates with your audience',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Consistent Brand Voice',
      description: 'AI learns your brand voice and maintains consistency across all platforms',
      icon: Heart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with detailed analytics and AI-powered insights',
      icon: BarChart,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users', icon: Users },
    { number: '10M+', label: 'Posts Scheduled', icon: Send },
    { number: '95%', label: 'Time Saved', icon: Clock },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Social Scheduler Pro - AI-Powered Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Automate your social media with AI-powered content generation, smart scheduling, and analytics. Manage all platforms from one dashboard. Start your free trial today!" />
        <meta name="keywords" content="social media scheduler, AI content generation, social media management, Instagram scheduler, Twitter scheduler, Facebook scheduler" />
        <meta property="og:title" content="Zion AI Social Scheduler Pro - AI-Powered Social Media Management" />
        <meta property="og:description" content="Transform your social media strategy with AI. Generate content, schedule posts, and analyze performance across all platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-social-scheduler-pro" />
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
                  AI Social Scheduler
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Pro Edition
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your social media strategy with AI-powered content generation, 
                  smart scheduling, and advanced analytics across all platforms.
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
                      <Share2 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">Manage All Platforms</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {platforms.slice(0, 4).map((platform, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                          <platform.icon className={`h-6 w-6 text-white mr-3`} />
                          <span className="text-white font-medium">{platform.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-4 text-gray-300">
                      +2 more platforms
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
                Powerful Features for Modern Social Media
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform combines automation with intelligence to deliver 
                exceptional results across all your social media channels.
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

        {/* Platforms Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connect All Your Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage Instagram, Twitter, Facebook, LinkedIn, YouTube, TikTok, and more 
                from a single, powerful dashboard.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${platform.color} rounded-lg mb-4 mx-auto`}>
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                    <p className="text-sm text-gray-400">{platform.users} users</p>
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
                Why Our Customers Love Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses and creators who have transformed their social media strategy.
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
                Start with our free trial and upgrade as your social media presence grows.
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
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses and creators who are already using our AI-powered 
              social media scheduler to grow their audience and engagement.
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

export default ZionAiSocialSchedulerProPage;