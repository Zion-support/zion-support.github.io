'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Users, BarChart, Target, Zap, CheckCircle, Phone, Mail, ArrowRight, Brain, Shield, Clock, DollarSign } from 'lucide-react';

const AICRMPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Lead Scoring',
      description: 'Intelligent lead scoring using machine learning to identify high-value prospects and prioritize sales efforts.',
      benefits: ['95% accuracy', 'Real-time scoring', 'Behavioral analysis']
    },
    {
      icon: Target,
      title: 'Automated Follow-ups',
      description: 'AI-powered email sequences, follow-ups, and personalized messaging that converts prospects into customers.',
      benefits: ['3x higher open rates', 'Personalized content', 'Perfect timing']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and reporting to track performance, identify trends, and optimize sales strategies.',
      benefits: ['Real-time insights', 'Predictive analytics', 'ROI tracking']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive sales tasks, follow-ups, and administrative work to focus on closing deals.',
      benefits: ['80% time savings', 'Consistent processes', 'Error reduction']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit logs, and compliance with SOC 2, GDPR, and other standards.',
      benefits: ['Data encryption', 'Audit trails', 'Compliance ready']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with shared pipelines, notes, and real-time updates across all team members.',
      benefits: ['Unified pipeline', 'Team insights', 'Real-time sync']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI algorithms',
        'Multi-channel automation',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'All channels + voice',
        'Custom integrations',
        'Real-time dashboard',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Increase in Sales' },
    { number: '80%', label: 'Time Savings' },
    { number: '95%', label: 'Lead Accuracy' },
    { number: '50+', label: 'Integrations' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI-Powered CRM Platform - Zion Tech Group"
        description="Revolutionary AI-powered CRM that increases sales by 300% and saves 80% of sales time. Lead scoring, automated outreach, and advanced analytics."
        keywords={['AI CRM', 'customer relationship management', 'lead scoring', 'sales automation', 'CRM software']}
        canonicalUrl="https://ziontechgroup.com/ai-crm"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI-Powered CRM Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Boost sales by 300% with intelligent CRM automation
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered CRM platform combines intelligent lead scoring, automated outreach, 
                and advanced analytics to help sales teams close more deals in less time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful CRM Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to 3x Your Sales Performance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1,000+ sales teams already using our AI CRM platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AICRMPage;