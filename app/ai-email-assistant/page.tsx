'use client';
import React from 'react';
import { Mail, Send, Zap, CheckCircle, Star, ArrowRight, Brain, Users, Shield, TrendingUp, Clock, Target } from 'lucide-react';
import Link from 'next/link';

const AIEmailAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Email Generation',
      description: 'AI-powered email writing that adapts to your tone, style, and audience for maximum impact.',
      benefits: ['Personalized content', 'Tone optimization', 'Subject line generation', 'Call-to-action suggestions']
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Advanced segmentation and personalization features that increase open rates and engagement.',
      benefits: ['Behavioral targeting', 'Demographic segmentation', 'Personalization tokens', 'A/B testing']
    },
    {
      icon: Send,
      title: 'Automated Campaigns',
      description: 'Set up sophisticated email sequences that nurture leads and drive conversions automatically.',
      benefits: ['Drip campaigns', 'Welcome sequences', 'Follow-up automation', 'Trigger-based emails']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and optimize your email marketing strategy.',
      benefits: ['Open rate tracking', 'Click-through analysis', 'Conversion metrics', 'ROI reporting']
    }
  ];

  const emailTypes = [
    {
      title: 'Marketing Emails',
      description: 'Create compelling promotional emails that drive sales and engagement.',
      icon: Target,
      examples: ['Product launches', 'Sales promotions', 'Newsletter campaigns', 'Event invitations']
    },
    {
      title: 'Transactional Emails',
      description: 'Automated emails for customer interactions and account management.',
      icon: Mail,
      examples: ['Order confirmations', 'Password resets', 'Account updates', 'Payment receipts']
    },
    {
      title: 'Nurture Sequences',
      description: 'Build relationships with prospects through targeted email sequences.',
      icon: Users,
      examples: ['Welcome series', 'Onboarding flows', 'Educational content', 'Re-engagement campaigns']
    },
    {
      title: 'Customer Support',
      description: 'AI-powered responses to common inquiries and support requests.',
      icon: Shield,
      examples: ['FAQ responses', 'Ticket routing', 'Escalation management', 'Satisfaction surveys']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 emails/month',
        'Basic AI features',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50,000 emails/month',
        'Advanced AI features',
        'Custom templates',
        'Advanced analytics',
        'Priority support',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited emails',
        'Full AI suite',
        'Custom integrations',
        'Advanced reporting',
        'Dedicated support',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Green',
      role: 'Marketing Director, E-commerce Store',
      content: 'AI Email Assistant increased our email open rates by 45% and click-through rates by 60%. Incredible results!',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO, SaaS Company',
      content: 'The AI-powered personalization has transformed our email marketing. Our customers love the relevant content.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Email Marketing Manager, Agency',
      content: 'This tool saves us hours every week. The AI suggestions are spot-on and our campaigns perform better than ever.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              AI-Powered Email Marketing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Email Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email marketing with AI that writes, personalizes, and optimizes 
              your campaigns for maximum engagement and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300">Higher open rates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">More click-throughs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3x</div>
              <div className="text-gray-300">Faster campaign creation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Deliverability rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Powerful Email Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, send, and optimize high-performing email campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Perfect For Every Email Type</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From marketing campaigns to transactional emails, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emailTypes.map((emailType, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <emailType.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{emailType.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{emailType.description}</p>
                <ul className="space-y-2">
                  {emailType.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Simple Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email volume and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-colors ${
                    plan.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What Marketers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of marketers who have transformed their email campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free 14-day trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailAssistantPage;