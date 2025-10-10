'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Workflow, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Intelligent Process Automation',
      description: 'AI-powered workflow automation that learns from your processes and optimizes them automatically.',
      benefits: ['90% time savings', 'Error reduction', 'Process optimization']
    },
    {
      icon: Zap,
      title: '500+ Integrations',
      description: 'Connect with 500+ popular business tools and platforms for seamless automation.',
      benefits: ['Wide compatibility', 'Easy setup', 'Unified workflow']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Monitor workflow performance in real-time with detailed analytics and insights.',
      benefits: ['Live tracking', 'Performance metrics', 'Instant alerts']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration with role-based access and approval workflows.',
      benefits: ['Role management', 'Approval chains', 'Team coordination']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit trails, and compliance features.',
      benefits: ['Data protection', 'Audit compliance', 'Secure access']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to track workflow performance and identify optimization opportunities.',
      benefits: ['Performance insights', 'ROI tracking', 'Optimization suggestions']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 workflows',
        'Basic integrations',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100 workflows',
        '500+ integrations',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
        'All integrations',
        'White-label options',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 20+ Hours/Week',
      description: 'Automate repetitive tasks and focus on high-value activities'
    },
    {
      icon: Zap,
      title: '90% Process Efficiency',
      description: 'Dramatically improve process efficiency with intelligent automation'
    },
    {
      icon: Users,
      title: 'Better Team Coordination',
      description: 'Streamline team workflows and improve collaboration'
    },
    {
      icon: Star,
      title: 'Scalable Solutions',
      description: 'Scale your automation as your business grows'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Workflow Automation - Zion Tech Group"
        description="Automate any business process with intelligent workflows, 90% time savings, and 500+ integrations. Transform your business operations with AI-powered automation."
        keywords={['AI workflow automation', 'business process automation', 'workflow optimization', 'process automation', 'business automation']}
        canonicalUrl="https://ziontechgroup.com/ai-workflow-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Automate any business process with intelligent workflows
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business operations with AI-powered workflow automation that learns, 
              adapts, and optimizes your processes for maximum efficiency and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                ✉️ Get Quote
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
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
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
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
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our AI Workflow Automation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI workflow automation platform today. Contact us for a free consultation 
              and custom implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                ✉️ Email Us
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIWorkflowAutomationPage;