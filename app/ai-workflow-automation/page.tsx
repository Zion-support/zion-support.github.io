'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Workflow, Zap, Brain, BarChart, Clock, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Database, Globe } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns from your workflows and optimizes them continuously.',
      benefits: ['Process Learning', 'Automatic Optimization', 'Exception Handling', 'Performance Monitoring']
    },
    {
      icon: Brain,
      title: 'Smart Decision Making',
      description: 'AI-driven decision points that automatically route tasks and make intelligent choices based on data.',
      benefits: ['Intelligent Routing', 'Data-Driven Decisions', 'Risk Assessment', 'Quality Control']
    },
    {
      icon: BarChart,
      title: 'Workflow Analytics',
      description: 'Comprehensive analytics to track workflow performance, bottlenecks, and optimization opportunities.',
      benefits: ['Performance Metrics', 'Bottleneck Analysis', 'Efficiency Tracking', 'ROI Measurement']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on workflow design and management with role-based access control.',
      benefits: ['Role-based Access', 'Team Collaboration', 'Version Control', 'Approval Workflows']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399/month',
      description: 'Perfect for small teams',
      features: ['Up to 10 workflows', 'Basic automation', 'Email support', 'Standard templates'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 50 workflows', 'Advanced automation', 'Priority support', 'Custom integrations', 'Analytics dashboard'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,599/month',
      description: 'For large organizations',
      features: ['Unlimited workflows', 'Custom development', 'Advanced analytics', '24/7 support', 'Dedicated account manager'],
      popular: false
    }
  ];

  const stats = [
    { number: '90%', label: 'Time Savings' },
    { number: '75%', label: 'Error Reduction' },
    { number: '500+', label: 'Integrations' },
    { number: '24/7', label: 'Processing' }
  ];

  const useCases = [
    {
      title: 'Document Processing',
      description: 'Automate document intake, classification, and processing with AI-powered OCR and intelligent routing.',
      icon: Database
    },
    {
      title: 'Customer Onboarding',
      description: 'Streamline customer onboarding with automated workflows that handle verification, setup, and welcome processes.',
      icon: Users
    },
    {
      title: 'Invoice Processing',
      description: 'Automate invoice processing from receipt to payment with intelligent data extraction and approval workflows.',
      icon: Settings
    },
    {
      title: 'HR Operations',
      description: 'Automate HR processes including recruitment, onboarding, performance reviews, and employee lifecycle management.',
      icon: Globe
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Workflow Automation Solutions - Zion Tech Group"
        description="Streamline your business processes with AI-powered workflow automation. Reduce manual work by 90% and eliminate errors with intelligent process automation."
        keywords={['AI workflow automation', 'process automation', 'business process management', 'workflow optimization', 'automation platform']}
        canonicalUrl="https://ziontechgroup.com/ai-workflow-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Workflow Automation Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your business processes with AI-powered workflow automation that learns, adapts, and optimizes your operations for maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 inline" />
                Email Us
              </a>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Automation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
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
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
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
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
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
                Ready to Automate Your Workflows?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 800+ companies already using our workflow automation platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Email Us
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

export default AIWorkflowAutomationPage;