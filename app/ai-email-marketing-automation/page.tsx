'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, AlertCircle, CheckSquare, Timer, DollarSign, PieChart, Activity, Send, MailCheck, UserPlus, MousePointer, BarChart3, Filter, Settings, ShoppingCart, RefreshCw, Gift, HelpCircle, AlertTriangle } from 'lucide-react';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI algorithms',
      benefits: ['10x faster content creation', 'Higher open rates', 'Personalized messaging', 'A/B testing automation']
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation based on behavior, preferences, and engagement patterns',
      benefits: ['Dynamic segmentation', 'Behavioral triggers', 'Personalization at scale', 'Improved deliverability']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive email analytics with AI insights, predictive modeling, and ROI tracking',
      benefits: ['Real-time performance metrics', 'Predictive analytics', 'Revenue attribution', 'Campaign optimization']
    },
    {
      icon: Send,
      title: 'Automated Workflows',
      description: 'Create complex email sequences with AI-powered triggers and intelligent automation',
      benefits: ['Drip campaigns', 'Welcome sequences', 'Abandoned cart recovery', 'Re-engagement campaigns']
    },
    {
      icon: MailCheck,
      title: 'Deliverability Optimization',
      description: 'AI-powered deliverability optimization to ensure your emails reach the inbox',
      benefits: ['Inbox placement optimization', 'Spam score reduction', 'IP reputation management', 'Authentication setup']
    },
    {
      icon: UserPlus,
      title: 'Lead Nurturing',
      description: 'Intelligent lead nurturing with AI-driven personalization and conversion optimization',
      benefits: ['Lead scoring', 'Behavioral triggers', 'Conversion optimization', 'Lifecycle management']
    }
  ];

  const automationTypes = [
    {
      name: 'Welcome Series',
      description: 'Automated welcome emails for new subscribers',
      icon: UserPlus,
      benefits: ['Increase engagement by 50%', 'Build brand loyalty', 'Set expectations']
    },
    {
      name: 'Abandoned Cart',
      description: 'Recover lost sales with targeted follow-up emails',
      icon: ShoppingCart,
      benefits: ['Recover 15-30% of lost sales', 'Personalized recommendations', 'Urgency creation']
    },
    {
      name: 'Re-engagement',
      description: 'Win back inactive subscribers with smart campaigns',
      icon: RefreshCw,
      benefits: ['Reactivate dormant users', 'Prevent unsubscribes', 'Improve list health']
    },
    {
      name: 'Birthday & Anniversaries',
      description: 'Personalized emails for special occasions',
      icon: Gift,
      benefits: ['Increase customer loyalty', 'Drive repeat purchases', 'Personal touch']
    },
    {
      name: 'Product Recommendations',
      description: 'AI-powered product suggestions based on behavior',
      icon: Target,
      benefits: ['Increase average order value', 'Cross-sell opportunities', 'Personalized shopping']
    },
    {
      name: 'Post-Purchase',
      description: 'Follow-up emails after purchase completion',
      icon: CheckCircle,
      benefits: ['Improve customer satisfaction', 'Gather feedback', 'Upsell opportunities']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 contacts',
        'Unlimited emails',
        'Basic AI features',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and marketers',
      features: [
        'Up to 10,000 contacts',
        'Unlimited emails',
        'Advanced AI features',
        'Custom templates',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'Automation workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'Marketing Manager',
      company: 'E-commerce Plus',
      content: 'AI Email Marketing Automation increased our open rates by 40% and revenue by 60%. The AI content suggestions are game-changing.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Digital Marketing Director',
      company: 'Tech Solutions Inc.',
      content: 'The automation workflows saved us 15 hours per week and improved our conversion rates by 35%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'Email Marketing Specialist',
      company: 'Growth Agency',
      content: 'Best email marketing platform we\'ve used. The AI segmentation and personalization features are incredible.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: '15,000+', label: 'Active Users' },
    { icon: Send, value: '50M+', label: 'Emails Sent' },
    { icon: TrendingUp, value: '40%', label: 'Avg. Open Rate Increase' },
    { icon: DollarSign, value: '60%', label: 'Revenue Increase' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing platform with automation, personalization, and analytics. Increase open rates by 40% and revenue by 60%. Starting at $39/month." />
        <meta name="keywords" content="ai email marketing, email automation, email personalization, email analytics, drip campaigns, lead nurturing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Email Marketing
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Email Marketing Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation, personalization, and analytics. 
            Increase open rates by 40% and revenue by 60% with our intelligent platform.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Email Marketing Automation Demo"
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Automation Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <type.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''} cyber-card`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Email Marketing Automation - ${plan.name} Plan`}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using AI Email Marketing Automation to grow their revenue and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingAutomationPage;