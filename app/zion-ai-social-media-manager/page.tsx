'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Target, BarChart3, CheckCircle, ArrowRight, Star, Brain, Smartphone, Globe, Shield, Settings, DollarSign, Award, Rocket, TrendingUp, Cpu, Database, Eye, Mic, Workflow, Heart, Lock, Monitor, Package, Wifi, Printer, Router, Box, Headphones, MessageCircle, CheckSquare, ShoppingCart, Link as LinkIcon, Server, Mail, Phone, MapPin, Search, Zap, Users, Calendar, FileText } from 'lucide-react';
import Navigation from '../components/EnhancedNavigation';
import Footer from '../components/Footer';

const ZionAISocialMediaManager: React.FC = () => {
  const features = [
    'AI-powered content creation',
    'Multi-platform posting automation',
    'Hashtag optimization and research',
    'Optimal posting time analysis',
    'Engagement rate optimization',
    'Social media analytics dashboard',
    'Competitor analysis and monitoring',
    'Influencer identification and outreach',
    'Crisis management automation',
    'Content calendar optimization',
    'Social listening and sentiment analysis',
    'Automated response management',
    'Cross-platform content adaptation',
    'Performance prediction algorithms',
    'Trend identification and leveraging',
    'Audience growth strategies',
    'Brand mention monitoring',
    'Social proof automation',
    'ROI tracking and reporting',
    'Integration with 50+ social platforms'
  ];

  const benefits = [
    'Increase social media engagement by 400%',
    'Grow followers by 300% in 6 months',
    'Save 20+ hours per week on social media',
    'Improve brand awareness by 250%',
    'Boost website traffic by 200%',
    'Increase lead generation by 180%',
    'Automate repetitive social tasks',
    'Better content performance',
    'Higher ROI on social media',
    'Competitive advantage in social media'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 social accounts',
        'Basic AI content creation',
        '5 platforms supported',
        'Basic analytics',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$249',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 social accounts',
        'Advanced AI features',
        'All major platforms',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'A/B testing',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited social accounts',
        'Full AI capabilities',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Custom deployment',
        'SLA guarantee',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  const socialPlatforms = [
    { name: 'Facebook', icon: MessageSquare, description: 'Connect with your audience' },
    { name: 'Instagram', icon: Camera, description: 'Visual storytelling platform' },
    { name: 'Twitter', icon: MessageSquare, description: 'Real-time engagement' },
    { name: 'LinkedIn', icon: Users, description: 'Professional networking' },
    { name: 'TikTok', icon: Video, description: 'Short-form video content' },
    { name: 'YouTube', icon: Play, description: 'Video marketing platform' },
    { name: 'Pinterest', icon: Pin, description: 'Visual discovery engine' },
    { name: 'Snapchat', icon: Camera, description: 'Ephemeral content' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Manager - AI-Powered Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management platform that increases engagement by 400%, grows followers by 300%, and saves 20+ hours per week on social media management." />
        <meta name="keywords" content="AI social media management, social media automation, content creation, social media analytics, social media marketing" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-social-media-manager" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
                <Brain className="w-5 h-5 text-pink-400" />
                <span className="text-pink-400 font-medium">AI Social Media Management</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
                Zion AI Social Media Manager
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your social media presence with AI-powered management that increases engagement by 400%, 
                grows followers by 300%, and saves 20+ hours per week.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Platforms Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Manage All Social Platforms
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI works across all major social media platforms to maximize your reach and engagement.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {socialPlatforms.map((platform, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <platform.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                    <p className="text-gray-300 text-sm">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Powerful AI Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Advanced AI algorithms that understand social media trends and optimize your content for maximum engagement.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Measurable Results
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See dramatic improvements in your social media performance with our AI management.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Choose Your Plan
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Start managing your social media with AI today with our flexible pricing plans.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 ${
                    tier.popular ? 'ring-2 ring-pink-500 shadow-lg shadow-pink-500/25' : ''
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
                          : 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-12 border border-pink-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Social Media?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses who have revolutionized their social media presence with AI. 
                  Start your free trial today and see the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-6 text-gray-400">
                  <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ZionAISocialMediaManager;