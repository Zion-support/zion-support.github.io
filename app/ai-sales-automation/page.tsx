'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle, Star, ArrowRight, Target, TrendingUp, Users, Zap, Brain, Shield, BarChart, Globe, Smartphone, Mail, Phone, Calendar, FileText, CreditCard, Database, Settings, Lock, Clock } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Intelligent Lead Scoring',
      description: 'AI-powered lead scoring that identifies high-value prospects and prioritizes follow-ups',
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Real-time updates', 'Custom criteria']
    },
    {
      icon: Mail,
      title: 'Automated Outreach',
      description: 'Personalized email sequences and follow-ups that convert prospects into customers',
      benefits: ['Personalized content', 'Optimal timing', 'A/B testing', 'Performance tracking']
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRM systems for unified sales management',
      benefits: ['Salesforce integration', 'HubSpot sync', 'Custom fields', 'Real-time updates']
    },
    {
      icon: Brain,
      title: 'AI Sales Assistant',
      description: 'Virtual sales assistant that provides recommendations and automates routine tasks',
      benefits: ['Next best action', 'Meeting prep', 'Follow-up reminders', 'Deal insights']
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Advanced analytics and reporting to optimize your sales performance',
      benefits: ['Pipeline analysis', 'Conversion tracking', 'Forecast accuracy', 'ROI measurement']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automated workflows that streamline your sales process and reduce manual work',
      benefits: ['Task automation', 'Approval workflows', 'Notification systems', 'Process optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 1,000 leads/month',
        'Basic lead scoring',
        'Email automation',
        '1 CRM integration',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        'Up to 10,000 leads/month',
        'Advanced lead scoring',
        'Multi-channel automation',
        '3 CRM integrations',
        'Advanced analytics',
        'Priority support',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'AI sales assistant',
        'Full automation suite',
        'Unlimited integrations',
        'Custom analytics',
        '24/7 phone support',
        'Custom development',
        'Dedicated account manager',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'B2B Software',
      challenge: 'Low conversion rates and long sales cycles',
      solution: 'AI-powered lead scoring and personalized outreach sequences',
      result: '250% increase in conversion rates, 40% shorter sales cycles'
    },
    {
      industry: 'Real Estate',
      challenge: 'Managing hundreds of leads and follow-ups manually',
      solution: 'Automated lead nurturing and intelligent follow-up scheduling',
      result: '180% increase in qualified leads, 60% reduction in manual work'
    },
    {
      industry: 'Financial Services',
      challenge: 'Compliance requirements and complex sales processes',
      solution: 'AI system with compliance checks and automated documentation',
      result: '100% compliance rate, 70% faster deal closure, 50% cost reduction'
    },
    {
      industry: 'Healthcare',
      challenge: 'Complex B2B sales with multiple decision makers',
      solution: 'AI-powered stakeholder mapping and personalized communication',
      result: '300% increase in deal size, 80% improvement in stakeholder engagement'
    }
  ];

  const benefits = [
    {
      metric: '300%',
      description: 'Increase in sales conversion',
      icon: TrendingUp
    },
    {
      metric: '50%',
      description: 'Reduction in sales cycle time',
      icon: Clock
    },
    {
      metric: '85%',
      description: 'Improvement in lead quality',
      icon: Target
    },
    {
      metric: '200%',
      description: 'Increase in sales productivity',
      icon: Users
    }
  ];

  const salesProcess = [
    {
      step: 'Lead Generation',
      description: 'AI identifies and qualifies high-value prospects from multiple sources',
      icon: Target
    },
    {
      step: 'Lead Scoring',
      description: 'Advanced algorithms score leads based on behavior, demographics, and engagement',
      icon: BarChart
    },
    {
      step: 'Personalized Outreach',
      description: 'AI creates and sends personalized messages at optimal times for each prospect',
      icon: Mail
    },
    {
      step: 'Follow-up Automation',
      description: 'Intelligent follow-up sequences that nurture leads through the sales funnel',
      icon: ArrowRight
    },
    {
      step: 'Deal Management',
      description: 'AI assists with deal progression, forecasting, and closing strategies',
      icon: CreditCard
    },
    {
      step: 'Performance Analytics',
      description: 'Comprehensive analytics to optimize sales performance and ROI',
      icon: TrendingUp
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
                AI Sales Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Boost your sales by 300% with intelligent lead scoring, automated outreach, 
                and AI-powered sales assistance. Transform your sales process with cutting-edge automation.
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

      {/* Sales Process Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            AI-Powered Sales Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesProcess.map((process, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <process.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.step}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
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
            Ready to 3x Your Sales Performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of sales teams already using our AI-powered automation solutions
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

export default AISalesAutomationPage;