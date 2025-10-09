'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Zap, Brain, Settings, BarChart, Clock, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Cog, Workflow, Target } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns from your business processes and continuously optimizes workflows for maximum efficiency.',
      benefits: ['95% accuracy', 'Self-learning', 'Adaptive optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Decision Making',
      description: 'Make instant decisions based on data patterns, user behavior, and business rules without human intervention.',
      benefits: ['Instant responses', 'Data-driven decisions', '24/7 operation']
    },
    {
      icon: Settings,
      title: 'Custom Workflow Builder',
      description: 'Drag-and-drop interface to create complex automation workflows without coding knowledge.',
      benefits: ['No coding required', 'Visual interface', 'Pre-built templates']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting to track automation performance and identify optimization opportunities.',
      benefits: ['Real-time metrics', 'ROI tracking', 'Performance insights']
    },
    {
      icon: Clock,
      title: 'Scheduled Automation',
      description: 'Schedule automated tasks to run at specific times, intervals, or based on triggers and conditions.',
      benefits: ['Flexible scheduling', 'Event triggers', 'Conditional logic']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit logs, and compliance with industry standards.',
      benefits: ['Data encryption', 'Audit trails', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 automation workflows',
        'Basic AI features',
        'Standard integrations',
        'Email support',
        'Basic analytics',
        '5GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automation workflows',
        'Advanced AI algorithms',
        'All integrations',
        'Priority support',
        'Advanced analytics',
        '50GB data storage',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
        'Custom AI models',
        'All features',
        'Dedicated support',
        'Custom development',
        'Unlimited storage',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '90%', label: 'Time Savings' },
    { number: '75%', label: 'Error Reduction' },
    { number: '500+', label: 'Integrations' },
    { number: '24/7', label: 'Operation' }
  ];

  const useCases = [
    {
      title: 'Customer Onboarding',
      description: 'Automate the entire customer onboarding process from signup to first value delivery with personalized workflows.',
      icon: Users
    },
    {
      title: 'Invoice Processing',
      description: 'Automatically process invoices, validate data, route for approval, and update accounting systems.',
      icon: BarChart
    },
    {
      title: 'Lead Management',
      description: 'Automate lead scoring, assignment, follow-up sequences, and CRM updates based on lead behavior.',
      icon: Target
    },
    {
      title: 'Employee Onboarding',
      description: 'Streamline new hire processes with automated document collection, system access, and training assignments.',
      icon: Settings
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Automation Solutions - Zion Tech Group"
        description="Revolutionary AI automation that saves 90% of processing time and reduces errors by 75%. Intelligent workflows, 500+ integrations, and enterprise security."
        keywords={['AI automation', 'business process automation', 'intelligent workflows', 'process optimization', 'workflow automation']}
        canonicalUrl="https://ziontechgroup.com/ai-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Automation Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Automate any business process with intelligent AI
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered automation platform helps businesses eliminate manual tasks, 
                reduce errors by 75%, and save 90% of processing time with intelligent automation.
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
              Powerful Automation Features
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

          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Automate Any Business Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
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
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 2,000+ companies already using our AI automation platform
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

export default AIAutomationPage;