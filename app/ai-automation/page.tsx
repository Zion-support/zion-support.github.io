import React from 'react';
import { CheckCircle, ArrowRight, Cpu, Zap, Shield, Globe, DollarSign, Star, Users, Clock, Brain, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Intelligent Automation',
      description: 'AI-powered automation that learns and adapts to your business processes and workflows.',
      benefits: ['Process learning', 'Adaptive workflows', 'Smart decision making', 'Continuous optimization']
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'Workflow Orchestration',
      description: 'Design and execute complex multi-step workflows with conditional logic and error handling.',
      benefits: ['Visual workflow builder', 'Conditional logic', 'Error handling', 'Parallel processing']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Real-Time Processing',
      description: 'Process data and execute tasks in real-time with sub-second response times.',
      benefits: ['Real-time execution', 'Event-driven triggers', 'Instant notifications', 'Live monitoring']
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit logs, and compliance features.',
      benefits: ['End-to-end encryption', 'Audit trails', 'Access controls', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      features: [
        '10 workflows',
        '1,000 executions/month',
        'Basic templates',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: [
        '50 workflows',
        '10,000 executions/month',
        'Advanced templates',
        'Priority support',
        'Custom integrations',
        'API access',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      features: [
        'Unlimited workflows',
        'Unlimited executions',
        'Custom templates',
        'Dedicated support',
        'White-label options',
        'Advanced analytics',
        'Custom development'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Data Processing',
      description: 'Automate data collection, transformation, and analysis across multiple sources.',
      examples: ['Data validation', 'ETL processes', 'Report generation', 'Data synchronization']
    },
    {
      title: 'Customer Onboarding',
      description: 'Streamline customer onboarding with automated workflows and personalized experiences.',
      examples: ['Account setup', 'Document processing', 'Welcome sequences', 'Compliance checks']
    },
    {
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns, lead nurturing, and customer engagement.',
      examples: ['Email campaigns', 'Lead scoring', 'Social media posting', 'A/B testing']
    },
    {
      title: 'IT Operations',
      description: 'Automate IT tasks, monitoring, and incident response for improved efficiency.',
      examples: ['System monitoring', 'Backup automation', 'Incident response', 'Deployment pipelines']
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '☁️', description: 'CRM automation' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' },
    { name: 'Slack', icon: '💼', description: 'Team notifications' },
    { name: 'Zendesk', icon: '🎫', description: 'Support automation' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity tools' },
    { name: 'AWS', icon: '☁️', description: 'Cloud services' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Automation Suite - Zion Tech Group</title>
        <meta name="description" content="Automate business processes with our AI automation suite. Intelligent workflows, real-time processing, and enterprise-grade security." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Automation <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Suite</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Automate your business processes with intelligent AI workflows. 
              Streamline operations, reduce manual work, and boost productivity across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Automating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Automation Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build intelligent workflows that adapt and optimize over time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Automate Every Business Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From data processing to customer onboarding, our AI automation handles it all
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect Everything</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate with 200+ popular business tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                plan.popular ? 'border-2 border-purple-500' : 'border border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Automate Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses using our AI automation suite to streamline operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Automating Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;