'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Target, Users, BarChart, Shield, Globe, Smartphone, Mail, Phone, Calendar, FileText, CreditCard, Database, Settings, TrendingUp, Lock, Clock, Workflow } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex workflows without coding',
      benefits: ['No-code automation', 'Visual flow design', 'Conditional logic', 'Error handling']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'AI analyzes your workflows and suggests improvements for better performance',
      benefits: ['Performance analysis', 'Optimization suggestions', 'Bottleneck detection', 'Efficiency metrics']
    },
    {
      icon: Zap,
      title: '500+ Integrations',
      description: 'Connect with all your favorite tools and services seamlessly',
      benefits: ['Popular apps', 'Custom APIs', 'Real-time sync', 'Data transformation']
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'Intelligent scheduling that adapts to your business patterns and priorities',
      benefits: ['Adaptive timing', 'Priority management', 'Resource optimization', 'Conflict resolution']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance features for sensitive workflows',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance reporting']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics to monitor and optimize your automation performance',
      benefits: ['Performance metrics', 'Usage analytics', 'ROI tracking', 'Custom reports']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
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
      description: 'Ideal for growing teams',
      features: [
        'Up to 1,000 workflows',
        'Premium integrations',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Unlimited team members',
        'API access',
        'Custom triggers'
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
        'Custom development',
        '24/7 phone support',
        'Custom analytics',
        'Dedicated account manager',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      challenge: 'Manual order processing and inventory management',
      solution: 'Automated order fulfillment, inventory updates, and customer notifications',
      result: '90% reduction in manual work, 99.9% order accuracy, 50% faster processing'
    },
    {
      industry: 'Healthcare',
      challenge: 'Complex patient data management and appointment scheduling',
      solution: 'AI-powered patient intake, automated scheduling, and compliance workflows',
      result: '80% reduction in admin time, 100% compliance rate, 60% patient satisfaction increase'
    },
    {
      industry: 'Financial Services',
      challenge: 'Manual loan processing and compliance documentation',
      solution: 'Automated loan approval workflows with AI-powered risk assessment',
      result: '70% faster loan processing, 95% accuracy rate, 100% compliance'
    },
    {
      industry: 'Manufacturing',
      challenge: 'Complex production scheduling and quality control',
      solution: 'AI-optimized production workflows with automated quality checks',
      result: '40% increase in efficiency, 99% quality rate, 30% cost reduction'
    }
  ];

  const benefits = [
    {
      metric: '90%',
      description: 'Time savings on repetitive tasks',
      icon: Clock
    },
    {
      metric: '500+',
      description: 'App integrations available',
      icon: Globe
    },
    {
      metric: '99.9%',
      description: 'Workflow reliability',
      icon: Shield
    },
    {
      metric: '300%',
      description: 'ROI within 6 months',
      icon: TrendingUp
    }
  ];

  const workflowTypes = [
    {
      name: 'Marketing Automation',
      description: 'Automate email campaigns, social media posting, and lead nurturing',
      icon: Target,
      examples: ['Email sequences', 'Social media scheduling', 'Lead scoring', 'Campaign tracking']
    },
    {
      name: 'Sales Automation',
      description: 'Streamline sales processes from lead generation to deal closure',
      icon: Users,
      examples: ['Lead qualification', 'Follow-up sequences', 'CRM updates', 'Proposal generation']
    },
    {
      name: 'HR Automation',
      description: 'Automate recruitment, onboarding, and employee management processes',
      icon: Users,
      examples: ['Resume screening', 'Interview scheduling', 'Onboarding tasks', 'Performance reviews']
    },
    {
      name: 'Finance Automation',
      description: 'Automate invoicing, expense management, and financial reporting',
      icon: CreditCard,
      examples: ['Invoice generation', 'Expense approval', 'Payment processing', 'Financial reports']
    },
    {
      name: 'Customer Support',
      description: 'Automate ticket routing, response generation, and escalation processes',
      icon: Mail,
      examples: ['Ticket routing', 'Auto-responses', 'Escalation rules', 'Satisfaction surveys']
    },
    {
      name: 'Operations',
      description: 'Automate inventory management, order processing, and logistics',
      icon: Database,
      examples: ['Inventory tracking', 'Order fulfillment', 'Shipping updates', 'Quality checks']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Workflow Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Automate any business process with intelligent workflows. Save 90% of your time 
                on repetitive tasks with our AI-powered automation platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call: (302) 464-0950
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free Demo
                </Link>
              </div>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                    <div className="text-gray-300 text-sm">{benefit.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Cancel anytime</span>
                </div>
              </div>
              <a
                href="tel:+13024640950"
                className="w-full mt-6 cyber-button text-center block"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Types Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Automate Any Business Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowTypes.map((workflow, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <workflow.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{workflow.name}</h3>
                <p className="text-gray-300 mb-4">{workflow.description}</p>
                <ul className="space-y-2">
                  {workflow.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Automation Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <div className="mb-4">
                  <h4 className="text-cyan-400 font-medium mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{useCase.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-cyan-400 font-medium mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{useCase.solution}</p>
                </div>
                <div>
                  <h4 className="text-green-400 font-medium mb-2">Result:</h4>
                  <p className="text-gray-300 text-sm">{useCase.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="tel:+13024640950"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already saving 90% of their time with our automation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWorkflowAutomationPage;