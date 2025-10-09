'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle, Star, ArrowRight, MessageCircle, Headphones, Clock, Users, Zap, Brain, Shield, BarChart, Globe, Smartphone, Mail, Phone, Calendar, FileText, CreditCard, Database, Settings, TrendingUp, Lock } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context and provide accurate responses 24/7',
      benefits: ['Instant responses', 'Multi-language support', 'Context awareness', 'Escalation handling']
    },
    {
      icon: Headphones,
      title: 'Omnichannel Support',
      description: 'Seamless support across email, chat, phone, and social media platforms',
      benefits: ['Unified inbox', 'Cross-channel history', 'Consistent experience', 'Real-time sync']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced analytics and insights to improve customer satisfaction and agent performance',
      benefits: ['Sentiment analysis', 'Trend identification', 'Performance metrics', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Smart automation for ticket routing, priority assignment, and resolution processes',
      benefits: ['Smart routing', 'Priority scoring', 'Auto-escalation', 'Workflow optimization']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR compliance and data protection',
      benefits: ['Data encryption', 'GDPR compliance', 'Access controls', 'Audit trails']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics to optimize your support operations',
      benefits: ['Real-time dashboards', 'Custom reports', 'Performance tracking', 'ROI measurement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        '2 AI chatbots',
        'Email & chat support',
        'Basic analytics',
        'Standard integrations',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        '5 AI chatbots',
        'Omnichannel support',
        'Advanced analytics',
        'Premium integrations',
        'Priority support',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Unlimited AI chatbots',
        'Full omnichannel support',
        'Custom analytics',
        'All integrations',
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
      industry: 'E-commerce',
      challenge: 'High volume of customer inquiries during peak seasons',
      solution: 'AI chatbots handle 80% of inquiries automatically, reducing response time by 90%',
      result: '300% increase in customer satisfaction, 60% reduction in support costs'
    },
    {
      industry: 'SaaS',
      challenge: 'Complex technical support requiring deep product knowledge',
      solution: 'AI-powered knowledge base with intelligent search and contextual responses',
      result: '85% first-contact resolution rate, 50% reduction in support tickets'
    },
    {
      industry: 'Healthcare',
      challenge: 'Compliance requirements and sensitive patient data handling',
      solution: 'HIPAA-compliant AI system with secure data handling and audit trails',
      result: '100% compliance rate, 70% faster response times, improved patient satisfaction'
    },
    {
      industry: 'Financial Services',
      challenge: 'Regulatory compliance and complex financial product support',
      solution: 'AI system trained on financial regulations with automated compliance checks',
      result: 'Zero compliance violations, 90% accuracy in financial advice, 40% cost reduction'
    }
  ];

  const benefits = [
    {
      metric: '90%',
      description: 'Reduction in response time',
      icon: Clock
    },
    {
      metric: '85%',
      description: 'First-contact resolution rate',
      icon: CheckCircle
    },
    {
      metric: '300%',
      description: 'Increase in customer satisfaction',
      icon: Star
    },
    {
      metric: '60%',
      description: 'Reduction in support costs',
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
                AI Customer Support
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Revolutionize your customer support with AI-powered chatbots, omnichannel communication, 
                and intelligent automation. Deliver exceptional customer experiences 24/7.
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
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered customer support solutions
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

export default AICustomerSupportPage;