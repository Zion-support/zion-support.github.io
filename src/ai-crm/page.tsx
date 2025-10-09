'use client';
import React from 'react';
import { Brain, Users, Target, TrendingUp, Shield, Clock, BarChart, CheckCircle, ArrowRight, Star, Award, Globe, Phone, Mail, Calendar, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICRMPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns.',
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Lead prioritization', 'Conversion optimization']
    },
    {
      icon: Users,
      title: 'Intelligent Customer Segmentation',
      description: 'AI automatically segments customers based on behavior, preferences, and value potential.',
      benefits: ['Dynamic segmentation', 'Behavioral insights', 'Personalization', 'Targeted campaigns']
    },
    {
      icon: Target,
      title: 'Predictive Sales Forecasting',
      description: 'Accurate sales predictions using AI that analyzes historical data and market trends.',
      benefits: ['Revenue forecasting', 'Pipeline analysis', 'Risk assessment', 'Goal tracking']
    },
    {
      icon: TrendingUp,
      title: 'Automated Follow-ups',
      description: 'AI schedules and personalizes follow-up communications based on customer engagement patterns.',
      benefits: ['Smart scheduling', 'Personalized content', 'Engagement tracking', 'Response optimization']
    }
  ];

  const capabilities = [
    {
      title: 'Smart Contact Management',
      description: 'AI automatically enriches contact data and maintains up-to-date information.',
      icon: Users,
      stats: '95% data accuracy'
    },
    {
      title: 'Intelligent Email Automation',
      description: 'Send personalized emails at the perfect time with AI-optimized content.',
      icon: Mail,
      stats: '40% higher open rates'
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into customer behavior and sales performance.',
      icon: BarChart,
      stats: 'Real-time insights'
    },
    {
      title: 'Mobile-First Design',
      description: 'Access your CRM anywhere with our responsive mobile application.',
      icon: Phone,
      stats: '100% mobile optimized'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/user/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Mobile app access',
        'Standard support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/user/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom fields',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/user/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Advanced reporting',
        '24/7 dedicated support',
        'White-label options',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'AI CRM increased our lead conversion by 65% and saved us 20 hours per week on manual tasks.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'VP of Sales',
      content: 'The predictive analytics helped us identify high-value prospects we would have missed otherwise.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      role: 'Marketing Manager',
      content: 'Automated follow-ups and personalized content have dramatically improved our customer engagement.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI-Powered CRM Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer relationships with intelligent automation, predictive analytics, and personalized experiences that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <button className="cyber-button-outline px-8 py-4 text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">65%</div>
              <div className="text-gray-300">Higher Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Increase in Email Opens</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">20h</div>
              <div className="text-gray-300">Time Saved Per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent CRM Features</h2>
            <p className="text-xl text-gray-300">Everything you need to manage and grow your customer relationships</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Capabilities</h2>
            <p className="text-xl text-gray-300">Advanced features that set us apart from traditional CRM systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <div className="text-cyan-400 font-semibold text-lg">{capability.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
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

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your CRM?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using AI-powered CRM to boost sales, improve customer relationships, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <button className="cyber-button-outline px-8 py-4 text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AICRMPage;
