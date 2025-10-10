'use client';
import React from 'react';
import { Mail, Brain, Target, BarChart, Users, Zap, Calendar, TrendingUp, DollarSign, CheckCircle, ArrowRight, Star, Award, Shield, Smartphone, Monitor, Laptop, Send, Filter, Clock, PieChart, MessageSquare, Settings, Globe } from 'lucide-react';

const AiEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automatically create compelling email content, subject lines, and CTAs using advanced AI',
      benefits: ['Personalized subject lines', 'Dynamic content creation', 'A/B testing automation', 'Brand voice consistency']
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation based on behavior, preferences, and engagement patterns',
      benefits: ['Behavioral targeting', 'Demographic analysis', 'Engagement scoring', 'Predictive segmentation']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics with AI insights to optimize your email campaigns',
      benefits: ['Real-time performance tracking', 'Predictive analytics', 'ROI optimization', 'Custom reporting']
    },
    {
      icon: Zap,
      title: 'Automation Workflows',
      description: 'Create complex email sequences that adapt based on subscriber behavior and preferences',
      benefits: ['Drip campaigns', 'Behavioral triggers', 'Lifecycle automation', 'Cross-channel integration']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-optimized send times based on individual subscriber engagement patterns',
      benefits: ['Optimal timing prediction', 'Time zone optimization', 'Frequency capping', 'Send time personalization']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous AI optimization of campaigns for maximum deliverability and engagement',
      benefits: ['Deliverability monitoring', 'Engagement optimization', 'Spam score reduction', 'Inbox placement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses starting their email marketing journey',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI content generation',
        'Simple automation workflows',
        'Email support',
        'Basic analytics',
        'Template library'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses with advanced email marketing needs',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Complex automation workflows',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'Custom templates',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with sophisticated email marketing requirements',
      features: [
        'Unlimited subscribers',
        'Premium AI features',
        'Advanced automation',
        '24/7 phone support',
        'Custom analytics',
        'White-label options',
        'Dedicated IP',
        'Custom integrations',
        'Account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Manager',
      company: 'RetailMax',
      content: 'Our email open rates increased by 180% and click-through rates by 250% using AI Email Marketing Automation. The AI content suggestions are incredibly accurate!',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'SaaS Solutions',
      content: 'The automation workflows have saved us countless hours while improving our conversion rates. ROI increased by 400% in just 6 months.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'E-commerce Director',
      company: 'Fashion Forward',
      content: 'The AI segmentation and personalization features have transformed our email marketing. Customer engagement is at an all-time high.',
      rating: 5
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: 'E-commerce',
      description: 'Abandoned cart recovery, product recommendations, and customer lifecycle emails',
      benefits: ['Cart abandonment sequences', 'Product recommendations', 'Order follow-ups', 'Customer retention']
    },
    {
      icon: MessageSquare,
      title: 'SaaS',
      description: 'User onboarding, feature announcements, and subscription management',
      benefits: ['Welcome series', 'Feature updates', 'Usage analytics', 'Renewal campaigns']
    },
    {
      icon: Globe,
      title: 'Content Marketing',
      description: 'Newsletter automation, content promotion, and audience nurturing',
      benefits: ['Content distribution', 'Engagement tracking', 'Subscriber growth', 'Content optimization']
    },
    {
      icon: Settings,
      title: 'B2B Sales',
      description: 'Lead nurturing, sales follow-ups, and account-based marketing',
      benefits: ['Lead scoring', 'Sales sequences', 'Account targeting', 'Pipeline management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              AI-Powered Email Marketing
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Email Marketing Automation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your email marketing with AI-powered content generation, smart segmentation, 
            and automated workflows that drive engagement and conversions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">15K+</div>
              <div className="text-sm text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">250%</div>
              <div className="text-sm text-gray-300">Avg. Open Rate Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">400%</div>
              <div className="text-sm text-gray-300">ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Deliverability Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, automate, and optimize your email marketing campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI email marketing automation works across all industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2 text-left">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their email marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your free trial today and see the difference AI can make for your email campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEmailMarketingAutomationPage;