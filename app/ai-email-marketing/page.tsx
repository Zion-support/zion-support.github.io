import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Mail, BarChart3, Zap, Shield, Smartphone, Globe, ArrowRight, Star, DollarSign, Calendar, Target, Brain, TrendingUp, MessageSquare, Users, FileText, PieChart, Smartphone as Mobile, Database, Send } from 'lucide-react';
import Layout from '../layout';

export default function AIEmailMarketingPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI that adapts to your brand voice and audience preferences.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Smart Audience Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns for highly targeted campaigns.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Intelligent Send-Time Optimization',
      description: 'AI determines the optimal send time for each subscriber based on their individual engagement patterns and timezone.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Advanced Analytics & Insights',
      description: 'Get detailed insights into campaign performance, subscriber behavior, and ROI with predictive analytics and recommendations.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-500" />,
      title: 'Automated Email Sequences',
      description: 'Create sophisticated drip campaigns, welcome series, and nurture sequences that adapt based on subscriber actions and engagement.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox with AI-powered deliverability monitoring, spam score analysis, and reputation management.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5,000 subscribers',
        'AI content generation',
        'Basic automation',
        'Email templates',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Complex automation workflows',
        'A/B testing',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
        'Custom AI model training',
        'White-label solution',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Marketing Director, E-commerce Co.',
      content: 'AI Email Marketing increased our open rates by 45% and click-through rates by 60%. The AI content generation is incredibly effective.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'David Park',
      company: 'Founder, SaaS Startup',
      content: 'The automation features saved us 15 hours per week. Our email campaigns are now more personalized and effective than ever.',
      rating: 5,
      avatar: 'DP'
    },
    {
      name: 'Maria Garcia',
      company: 'CMO, Retail Brand',
      content: 'The analytics and insights helped us optimize our campaigns and increase revenue by 40%. Highly recommended for any business.',
      rating: 5,
      avatar: 'MG'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: '45% Higher Open Rates',
      description: 'AI-optimized subject lines and send times boost engagement'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Save 15+ Hours/Week',
      description: 'Automated content generation and campaign management'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: '60% Better CTR',
      description: 'Smart segmentation and personalization increase clicks'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      title: '300% Average ROI',
      description: 'Most customers see positive ROI within the first month'
    }
  ];

  return (
    <Layout
      title="AI Email Marketing - Intelligent Campaign Management | Zion Tech Group"
      description="Revolutionary AI-powered email marketing platform that automates content generation, audience segmentation, and campaign optimization. Boost open rates by 45% and save 15+ hours per week. Start your free trial today."
      keywords="AI email marketing, email automation, email campaigns, email analytics, email personalization, email deliverability"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              AI-Powered Marketing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Email Marketing
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                That Converts Better
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your email marketing with our revolutionary AI-powered platform. 
              Generate compelling content, optimize send times, and boost engagement by up to 45%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">45%</div>
                <div className="text-gray-300 text-sm">Higher Open Rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300 text-sm">Hours Saved/Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-gray-300 text-sm">Better CTR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose AI Email Marketing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of email marketing with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Marketers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, send, and optimize email campaigns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your subscriber count and needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500 bg-purple-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Trusted by Marketers Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers are saying about AI Email Marketing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of marketers already using AI Email Marketing to boost engagement and drive more sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}