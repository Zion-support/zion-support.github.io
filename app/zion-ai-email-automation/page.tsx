'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Target, BarChart3, CheckCircle, ArrowRight, Star, Brain, Smartphone, Globe, Shield, MessageSquare, Settings, DollarSign, Award, Rocket, TrendingUp, Cpu, Database, Eye, Mic, Workflow, Heart, Lock, Monitor, Package, Wifi, Printer, Router, Box, Headphones, MessageCircle, CheckSquare, ShoppingCart, Link as LinkIcon, Server, Phone, MapPin, Search, Zap, Users, Calendar, FileText } from 'lucide-react';
import Navigation from '../components/EnhancedNavigation';
import Footer from '../components/Footer';

const ZionAIEmailAutomation: React.FC = () => {
  const features = [
    'AI-powered email personalization',
    'Advanced segmentation algorithms',
    'Behavioral trigger automation',
    'A/B testing optimization',
    'Subject line AI generation',
    'Send time optimization',
    'Content performance analysis',
    'Drip campaign automation',
    'Lead scoring integration',
    'Email deliverability optimization',
    'Dynamic content insertion',
    'Multi-channel campaign coordination',
    'Advanced analytics and reporting',
    'Spam score monitoring',
    'Email template optimization',
    'Customer journey mapping',
    'Predictive analytics',
    'Automated follow-up sequences',
    'Email list health monitoring',
    'Integration with 100+ platforms'
  ];

  const benefits = [
    'Increase email open rates by 250%',
    'Boost click-through rates by 180%',
    'Improve conversion rates by 300%',
    'Save 15+ hours per week on email marketing',
    'Reduce unsubscribe rates by 60%',
    'Increase revenue per email by 200%',
    'Automate complex email sequences',
    'Better customer engagement',
    'Higher ROI on email campaigns',
    'Competitive advantage in email marketing'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 subscribers',
        'Basic AI personalization',
        '5 email templates',
        'Basic automation',
        'Email support',
        'Standard analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50,000 subscribers',
        'Advanced AI features',
        'Unlimited templates',
        'Advanced automation',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
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

  const emailTypes = [
    { name: 'Welcome Series', icon: Mail, description: 'Onboard new subscribers effectively' },
    { name: 'Abandoned Cart', icon: ShoppingCart, description: 'Recover lost sales automatically' },
    { name: 'Newsletter', icon: FileText, description: 'Engage with regular updates' },
    { name: 'Promotional', icon: Target, description: 'Drive sales with targeted offers' },
    { name: 'Transactional', icon: CheckCircle, description: 'Confirm orders and updates' },
    { name: 'Re-engagement', icon: Heart, description: 'Win back inactive subscribers' },
    { name: 'Birthday/Anniversary', icon: Calendar, description: 'Personalized special occasions' },
    { name: 'Product Recommendations', icon: Box, description: 'AI-powered product suggestions' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Automation - AI-Powered Email Marketing | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email automation platform that increases open rates by 250%, click-through rates by 180%, and saves 15+ hours per week on email marketing." />
        <meta name="keywords" content="AI email automation, email marketing, email personalization, email campaigns, marketing automation, email optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-email-automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">AI Email Automation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
                Zion AI Email Automation
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email marketing with AI-powered automation that increases open rates by 250%, 
                click-through rates by 180%, and saves 15+ hours per week.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
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
                  <span>Setup in 3 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Types Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Automate Every Email Type
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI handles all types of email campaigns with intelligent automation and personalization.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {emailTypes.map((type, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 text-sm">{type.description}</p>
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
                  Advanced AI Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Powerful AI algorithms that understand your audience and optimize every email for maximum impact.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
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
                  Proven Results
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See dramatic improvements in your email marketing performance with our AI automation.
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
                  Flexible Pricing Plans
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your subscriber count and business needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 ${
                    tier.popular ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/25' : ''
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white'
                          : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-12 border border-blue-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Email Marketing?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of marketers who have revolutionized their email campaigns with AI. 
                  Start your free trial today and see the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-6 text-gray-400">
                  <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
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

export default ZionAIEmailAutomation;