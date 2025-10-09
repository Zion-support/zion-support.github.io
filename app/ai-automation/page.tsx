'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Zap, Brain, Settings, BarChart, CheckCircle, Phone, Mail, Users, TrendingUp, Globe } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that understands context, makes decisions, and adapts to changing conditions without human intervention.',
      benefits: ['90% time savings', '99.9% accuracy', '24/7 operation']
    },
    {
      icon: Zap,
      title: 'Smart Workflow Orchestration',
      description: 'Automatically coordinate complex workflows across multiple systems and departments with intelligent decision-making.',
      benefits: ['500+ integrations', 'Real-time monitoring', 'Auto-scaling']
    },
    {
      icon: Settings,
      title: 'Self-Healing Systems',
      description: 'Automated systems that detect issues, diagnose problems, and implement fixes without human intervention.',
      benefits: ['99.9% uptime', 'Instant recovery', 'Predictive maintenance']
    },
    {
      icon: BarChart,
      title: 'Intelligent Analytics',
      description: 'AI-driven analytics that automatically identify patterns, predict outcomes, and optimize processes in real-time.',
      benefits: ['Real-time insights', 'Predictive analytics', 'Auto-optimization']
    }
  ];

  const useCases = [
    {
      title: 'Financial Process Automation',
      description: 'Automate invoice processing, expense management, and financial reporting with AI-powered decision making.',
      icon: TrendingUp,
      benefits: ['95% accuracy', '80% time savings', 'Real-time compliance']
    },
    {
      title: 'Customer Service Automation',
      description: 'Intelligent chatbots and automated ticket routing that resolve 90% of customer issues without human intervention.',
      icon: Users,
      benefits: ['90% resolution rate', '24/7 availability', 'Multi-language support']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'AI-powered inventory management, demand forecasting, and logistics optimization for maximum efficiency.',
      icon: Globe,
      benefits: ['30% cost reduction', '99% on-time delivery', 'Predictive analytics']
    },
    {
      title: 'HR Process Automation',
      description: 'Automate recruitment, onboarding, performance reviews, and employee lifecycle management with AI.',
      icon: Users,
      benefits: ['50% faster hiring', 'Automated screening', 'Bias-free decisions']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI automation',
      features: [
        'Up to 10 automated workflows',
        'Basic AI decision making',
        'Email support',
        'Standard integrations',
        'Monthly reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with complex automation needs',
      features: [
        'Up to 50 automated workflows',
        'Advanced AI decision making',
        'Priority support',
        '500+ integrations',
        'Real-time monitoring',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with enterprise-scale automation requirements',
      features: [
        'Unlimited workflows',
        'AI-powered optimization',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '90%', label: 'Time Savings' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '500+', label: 'Integrations' },
    { number: '24/7', label: 'Operation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                AI Automation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Automate any business process with intelligent AI that learns, adapts, and optimizes
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your business with AI-powered automation that handles complex workflows, 
                makes intelligent decisions, and continuously improves performance. Save 90% of your time 
                while achieving 99.9% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powerful AI Automation Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI automation platform combines machine learning, natural language processing, 
                and intelligent decision-making to automate any business process.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI automation is transforming businesses across industries
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your automation needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-lg p-8 shadow-lg ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Start your AI automation journey today. Our experts will help you identify 
              the best processes to automate and implement them quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p>✓ Free consultation • ✓ No setup fees • ✓ 30-day money-back guarantee</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAutomationPage;