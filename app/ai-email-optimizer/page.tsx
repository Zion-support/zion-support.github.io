'use client';
import React from 'react';
import { Mail, TrendingUp, BarChart, Zap, CheckCircle, ArrowRight, Star, Clock, Target, Brain, Shield, Send } from 'lucide-react';
import Link from 'next/link';

const AIEmailOptimizer: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Subject Line Optimization',
      description: 'Generate high-converting subject lines using machine learning algorithms',
      benefits: ['40% higher open rates', 'A/B testing automation', 'Personalized recommendations']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive email performance analytics with AI-powered insights',
      benefits: ['Real-time tracking', 'Predictive analytics', 'ROI optimization']
    },
    {
      icon: Send,
      title: 'Smart Send Time Optimization',
      description: 'AI determines the optimal send time for each recipient',
      benefits: ['Personalized timing', 'Time zone optimization', 'Engagement maximization']
    },
    {
      icon: TrendingUp,
      title: 'Content Optimization',
      description: 'AI-powered email content analysis and improvement suggestions',
      benefits: ['Content scoring', 'Readability optimization', 'CTA placement']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Intelligent email automation with behavioral triggers',
      benefits: ['Behavioral triggers', 'Drip campaigns', 'Lead nurturing']
    },
    {
      icon: Shield,
      title: 'Deliverability Optimization',
      description: 'AI-powered deliverability monitoring and improvement',
      benefits: ['Spam score reduction', 'Reputation monitoring', 'Inbox placement']
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
        'Basic AI optimization',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 emails/month',
        'Advanced AI features',
        'Comprehensive analytics',
        'Priority support',
        'A/B testing',
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
        'Unlimited emails',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'Email Marketing Manager',
      company: 'E-commerce Solutions',
      content: 'AI Email Optimizer increased our open rates by 45% and click-through rates by 60%. The ROI has been incredible.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      role: 'Marketing Director',
      company: 'SaaS Company',
      content: 'The AI subject line optimization is game-changing. We can now create compelling subject lines in seconds instead of hours.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'Digital Agency',
      content: 'The deliverability optimization has improved our email reputation significantly. Our emails now reach the inbox consistently.',
      rating: 5
    }
  ];

  const metrics = [
    { label: 'Open Rate Improvement', value: '+45%', color: 'text-cyan-400' },
    { label: 'Click-Through Rate', value: '+60%', color: 'text-green-400' },
    { label: 'Conversion Rate', value: '+35%', color: 'text-purple-400' },
    { label: 'Revenue Increase', value: '+80%', color: 'text-yellow-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                <Mail className="w-4 h-4 mr-2" />
                AI-Powered Email Optimization
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                AI Email Optimizer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Maximize your email marketing ROI with AI-powered optimization, 
                intelligent send times, and advanced analytics. Boost open rates, 
                click-through rates, and conversions automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Free 14-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Email Performance</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400">28.5%</div>
                      <div className="text-sm text-gray-400">Open Rate</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400">4.2%</div>
                      <div className="text-sm text-gray-400">Click Rate</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">AI Score</span>
                      <span className="text-green-400 font-medium">Excellent (92)</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-300">
                    <div className="flex justify-between mb-1">
                      <span>Deliverability</span>
                      <span className="text-green-400">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Spam Score</span>
                      <span className="text-green-400">0.2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              See the average improvements our customers achieve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Email Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI technology to optimize every aspect of your email marketing 
              campaigns and achieve unprecedented results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your email volume and business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500 bg-gradient-to-br from-slate-800/70 to-cyan-900/20' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              See how businesses are transforming their email marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using AI Email Optimizer Pro to maximize their email ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailOptimizer;