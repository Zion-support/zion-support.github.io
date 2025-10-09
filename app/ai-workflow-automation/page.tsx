'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Workflow, Zap, Brain, BarChart, Clock, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Database, Globe } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex workflows without coding. Connect apps, set conditions, and automate processes.',
      benefits: ['No coding required', 'Visual interface', 'Pre-built templates']
    },
    {
      icon: Zap,
      title: '500+ Integrations',
      description: 'Connect with popular business tools including CRM, email, project management, and productivity applications.',
      benefits: ['500+ apps', 'Real-time sync', 'Custom connectors']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Smart automation that learns from your patterns and suggests optimizations to improve efficiency.',
      benefits: ['Machine learning', 'Smart suggestions', 'Pattern recognition']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Track workflow performance, identify bottlenecks, and optimize processes with detailed analytics.',
      benefits: ['Performance metrics', 'Bottleneck detection', 'Optimization insights']
    },
    {
      icon: Clock,
      title: 'Real-time Execution',
      description: 'Execute workflows instantly with real-time triggers and sub-second response times.',
      benefits: ['Instant execution', 'Real-time triggers', 'High performance']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, audit trails, and compliance features.',
      benefits: ['Data encryption', 'Audit trails', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals and small teams getting started with workflow automation',
      features: [
        'Up to 100 workflows',
        'Basic integrations',
        'Standard templates',
        'Email support',
        'Basic analytics',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced automation needs',
      features: [
        'Unlimited workflows',
        'All integrations',
        'Advanced templates',
        'Priority support',
        'Advanced analytics',
        'Unlimited team members',
        'Custom connectors',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Unlimited everything',
        'Custom integrations',
        'White-label solution',
        'Dedicated support',
        'Custom analytics',
        'On-premise deployment',
        'SLA guarantees',
        'Custom development'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '90%', label: 'Time Savings' },
    { number: '500+', label: 'Integrations' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Automation' }
  ];

  const useCases = [
    {
      title: 'Customer Onboarding',
      description: 'Automate the entire customer onboarding process from signup to first value delivery with personalized workflows.',
      icon: Users
    },
    {
      title: 'Lead Management',
      description: 'Automatically capture, score, and route leads to the right sales team members based on criteria and behavior.',
      icon: Brain
    },
    {
      title: 'Invoice Processing',
      description: 'Streamline invoice processing with automated data extraction, approval workflows, and payment processing.',
      icon: BarChart
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Workflow Automation Platform - Zion Tech Group"
        description="Automate any business process with intelligent workflows, 90% time savings, and 500+ integrations. No coding required with our visual workflow builder."
        keywords={['AI workflow automation', 'business process automation', 'workflow builder', 'automation platform', 'process optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-workflow-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate any business process with intelligent workflows that save 90% of your time and work 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                <span>Get Free Demo</span>
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Powerful Automation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
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
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Popular Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 p-8 rounded-lg ${
                    plan.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-cyan-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI workflow automation to save time and increase productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIWorkflowAutomationPage;