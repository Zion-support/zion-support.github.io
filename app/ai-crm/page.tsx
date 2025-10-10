'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Users, Zap, Shield, Target, TrendingUp, Clock, Star, Mail, Phone, Calendar, BarChart3, Brain, Award } from 'lucide-react';

const AiCrmPage: React.FC = () => {
  const features = [
    'AI lead scoring with 95% accuracy',
    'Automated email sequences and follow-ups',
    'Sales forecasting with machine learning',
    'Integration with 200+ business tools',
    'Custom fields and workflow automation',
    'Advanced reporting and analytics suite',
    'Mobile-first responsive design',
    'Team collaboration and task management',
    'Pipeline management and deal tracking',
    'Customer communication history',
    'Automated data entry and enrichment',
    'Custom dashboard creation'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      users: 'Up to 10 users',
      features: [
        '1,000 contacts',
        'Basic AI features',
        'Email integration',
        'Standard reports',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      users: 'Up to 50 users',
      features: [
        '10,000 contacts',
        'Advanced AI features',
        'All integrations',
        'Custom reports',
        'Priority support',
        'API access',
        'Workflow automation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      users: 'Unlimited users',
      features: [
        'Unlimited contacts',
        'All AI features',
        'Custom integrations',
        'Advanced security',
        'Dedicated support',
        'White-label options',
        'Custom training'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '25,000+', label: 'Active Users' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Clock, value: '95%', label: 'Time Saved' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' }
  ];

  const benefits = [
    'Increase sales by up to 300% with AI-powered lead scoring',
    'Save 20+ hours per week with automated workflows',
    'Improve customer satisfaction with personalized interactions',
    'Reduce data entry by 90% with AI automation',
    'Boost team productivity with collaborative tools',
    'Make data-driven decisions with advanced analytics'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI-Powered CRM - Intelligent Customer Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your customer relationships with our AI-powered CRM. Automated lead scoring, sales forecasting, and intelligent workflows for growing businesses." />
        <meta name="keywords" content="AI CRM, customer relationship management, lead scoring, sales automation, CRM software, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-crm" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <Users className="w-20 h-20 text-green-400 mx-auto mb-6 neon-glow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 neon-text">CRM</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your customer relationships with intelligent automation. Our AI-powered CRM 
              provides automated lead scoring, sales forecasting, and personalized customer interactions 
              that help you close more deals and grow your business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6 rounded-xl">
                  <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1 neon-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button w-full sm:w-auto text-center">
                Start 21-Day Free Trial
              </button>
              <a 
                href="tel:+13024640950"
                className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Why Choose Our AI CRM?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of artificial intelligence in customer relationship management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage and grow your customer relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Simple Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative cyber-card p-8 ${
                    plan.popular ? 'border-2 border-green-400 shadow-2xl shadow-green-500/25 scale-105' : 'border border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.users}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-green-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Sales?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Start your free trial today and see how AI can revolutionize your customer relationships
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button w-full sm:w-auto text-center">
                  Start Free Trial
                </button>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiCrmPage;