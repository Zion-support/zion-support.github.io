'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  BarChart, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Clock, 
  Shield,
  Phone,
  MapPin,
  Send,
  Filter,
  PieChart,
  MessageSquare
} from 'lucide-react';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automatically create compelling email content, subject lines, and CTAs using advanced AI',
      benefits: ['Smart subject line generation', 'Personalized content creation', 'A/B testing automation', 'Brand voice consistency']
    },
    {
      icon: Target,
      title: 'Intelligent Segmentation',
      description: 'AI-powered audience segmentation based on behavior, preferences, and engagement patterns',
      benefits: ['Behavioral segmentation', 'Predictive analytics', 'Dynamic lists', 'Personalization engine']
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'AI determines optimal send times for each subscriber to maximize open rates and engagement',
      benefits: ['Optimal timing analysis', 'Time zone optimization', 'Send time personalization', 'Engagement prediction']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive email marketing analytics with AI-driven insights and recommendations',
      benefits: ['Performance tracking', 'ROI measurement', 'Predictive insights', 'Campaign optimization']
    }
  ];

  const automationWorkflows = [
    {
      name: 'Welcome Series',
      description: 'Automated onboarding sequence for new subscribers',
      triggers: ['New subscriber', 'Email confirmation', 'First purchase'],
      duration: '7 days',
      emails: 5,
      icon: '👋'
    },
    {
      name: 'Abandoned Cart',
      description: 'Recovery emails for customers who left items in cart',
      triggers: ['Cart abandonment', 'Product view', 'Price drop'],
      duration: '3 days',
      emails: 3,
      icon: '🛒'
    },
    {
      name: 'Re-engagement',
      description: 'Win back inactive subscribers with targeted campaigns',
      triggers: ['No opens 30 days', 'No clicks 60 days', 'Unsubscribe risk'],
      duration: '14 days',
      emails: 4,
      icon: '🔄'
    },
    {
      name: 'Birthday Campaign',
      description: 'Personalized birthday and anniversary campaigns',
      triggers: ['Birthday', 'Anniversary', 'Signup date'],
      duration: '1 day',
      emails: 1,
      icon: '🎂'
    },
    {
      name: 'Product Recommendations',
      description: 'AI-powered product suggestions based on purchase history',
      triggers: ['Purchase history', 'Browsing behavior', 'Seasonal trends'],
      duration: 'Ongoing',
      emails: 'Dynamic',
      icon: '🎯'
    },
    {
      name: 'Post-Purchase',
      description: 'Follow-up sequence after purchase completion',
      triggers: ['Purchase completed', 'Shipping confirmation', 'Delivery confirmation'],
      duration: '10 days',
      emails: 3,
      icon: '📦'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 subscribers',
        'Unlimited emails',
        'Basic AI features',
        '5 automation workflows',
        'Email support',
        'Basic analytics',
        'Template library',
        'A/B testing'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 50,000 subscribers',
        'Unlimited emails',
        'Advanced AI features',
        'Unlimited workflows',
        'Priority support',
        'Advanced analytics',
        'Custom templates',
        'Advanced A/B testing',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited subscribers',
        'Unlimited emails',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Custom analytics',
        'Custom integrations',
        'Advanced security',
        '24/7 phone support',
        'Custom workflows'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '1M+', label: 'Emails Sent Daily' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '45%', label: 'Average Open Rate' },
    { icon: <Target className="w-8 h-8 text-purple-500" />, value: '12%', label: 'Average Click Rate' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '300%', label: 'ROI Improvement' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group | Intelligent Email Campaign Platform</title>
        <meta name="description" content="Revolutionary AI-powered email marketing automation platform that creates personalized campaigns, optimizes send times, and maximizes engagement." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, email personalization, email analytics, marketing automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="cyber-scan-line mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              AI Email Marketing Automation
            </h1>
            <p className="text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Email Campaign Platform
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your email marketing with AI-powered automation, personalized content, and intelligent optimization. 
            Our platform creates, sends, and optimizes email campaigns that drive real results.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="quantum-card p-6 text-center energy-pulse">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="cyber-button w-full sm:w-auto text-center"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Automation Workflows */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Pre-Built Automation Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use email automation workflows that engage your audience at every stage of their journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationWorkflows.map((workflow, index) => (
              <div key={index} className="holographic-stream p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{workflow.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{workflow.name}</h3>
                  <p className="text-gray-300 mb-4">{workflow.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Triggers:</span>
                    <span className="text-white">{workflow.triggers.join(', ')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{workflow.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Emails:</span>
                    <span className="text-white">{workflow.emails}</span>
                  </div>
                </div>

                <button className="w-full border border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Powerful AI-Driven Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI email marketing platform uses advanced machine learning to optimize every aspect of your campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="neural-network p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your email marketing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'border-cyan-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
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
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Why Choose AI Email Marketing Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of email marketing with our AI-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quantum-field p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">300% ROI Improvement</h3>
              <p className="text-gray-300">AI-optimized campaigns deliver significantly higher returns on your email marketing investment.</p>
            </div>

            <div className="quantum-field p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">45% Average Open Rate</h3>
              <p className="text-gray-300">AI-powered subject lines and send time optimization dramatically increase email open rates.</p>
            </div>

            <div className="quantum-field p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance to protect your subscriber data and maintain deliverability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="quantum-tunnel p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using AI Email Marketing Automation to grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="holographic-stream p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="holographic-stream p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Quick Contact</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Tell us about your email marketing needs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full cyber-button text-center py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingAutomationPage;