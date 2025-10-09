'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Brain, Cog, Target, BarChart, Shield, Clock, Users, TrendingUp, Star } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Mapping',
      description: 'AI analyzes your workflows and identifies optimization opportunities automatically.',
      benefits: ['90% faster process discovery', 'Real-time workflow analysis', 'Automated documentation']
    },
    {
      icon: Cog,
      title: 'Smart Automation Rules',
      description: 'Create complex automation rules using natural language and AI-powered logic.',
      benefits: ['Natural language configuration', 'Self-learning algorithms', 'Exception handling']
    },
    {
      icon: Target,
      title: 'Predictive Automation',
      description: 'Anticipate needs and trigger actions before problems occur.',
      benefits: ['Proactive issue resolution', 'Predictive maintenance', 'Smart scheduling']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive insights into automation performance and ROI.',
      benefits: ['Real-time dashboards', 'ROI tracking', 'Performance optimization']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate ticket routing, response generation, and escalation procedures.',
      metrics: '85% faster response times',
      icon: Users
    },
    {
      title: 'Financial Process Automation',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      metrics: '95% accuracy in data entry',
      icon: TrendingUp
    },
    {
      title: 'HR Workflow Automation',
      description: 'Streamline recruitment, onboarding, and employee management processes.',
      metrics: '70% reduction in manual tasks',
      icon: Clock
    },
    {
      title: 'IT Operations Automation',
      description: 'Automate system monitoring, incident response, and maintenance tasks.',
      metrics: '99.9% uptime achievement',
      icon: Shield
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with automation',
      features: [
        'Up to 10 automation workflows',
        'Basic AI process mapping',
        'Email support',
        'Standard integrations',
        'Basic analytics dashboard'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with complex automation needs',
      features: [
        'Up to 50 automation workflows',
        'Advanced AI process mapping',
        'Priority support',
        'Advanced integrations',
        'Comprehensive analytics',
        'Custom workflow templates',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with extensive automation requirements',
      features: [
        'Unlimited automation workflows',
        'AI-powered process optimization',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security features',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Process Automation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Transform your business with intelligent automation that learns, adapts, and optimizes
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Our AI automation platform eliminates manual tasks, reduces errors, and accelerates your business processes. 
              From simple workflows to complex enterprise operations, we make automation intelligent and effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered automation platform combines machine learning, natural language processing, 
              and advanced workflow orchestration to deliver unprecedented efficiency gains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI automation solutions are transforming businesses across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-cyan-400 font-semibold">{useCase.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your automation needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                tier.popular 
                  ? 'border-cyan-400/60 ring-2 ring-cyan-400/20 scale-105' 
                  : 'border-cyan-500/20 hover:border-cyan-400/40'
              }`}>
                {tier.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.cta === 'Contact Sales' ? '/contact' : '/contact'}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI automation platform to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-400">
                Leading provider of AI-powered automation solutions for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Services</h3>
              <ul className="space-y-2">
                <li><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Services</Link></li>
                <li><Link href="/ai-automation" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Automation</Link></li>
                <li><Link href="/ai-marketing" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Marketing</Link></li>
                <li><Link href="/ai-healthcare" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Healthcare</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors">Support Center</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAutomationPage;