'use client';
import React from 'react';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  Zap, 
  Shield, 
  Users, 
  Clock,
  DollarSign,
  Target,
  Globe,
  Settings
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const aiServicesPricing = [
    {
      name: 'AI Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'Basic AI consultation',
        'Simple automation setup',
        'Email support',
        'Monthly reporting',
        'Up to 5 AI models'
      ],
      limitations: [
        'Limited customization',
        'Basic analytics',
        'Standard response time'
      ],
      popular: false
    },
    {
      name: 'AI Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI solutions',
        'Custom model development',
        'Priority support',
        'Real-time analytics',
        'Up to 20 AI models',
        'API access',
        'Custom integrations'
      ],
      limitations: [
        'Limited to 20 models',
        'Standard SLA'
      ],
      popular: true
    },
    {
      name: 'AI Enterprise',
      price: '$1999',
      period: '/month',
      description: 'For large organizations with enterprise AI requirements',
      features: [
        'Unlimited AI models',
        'Custom AI development',
        '24/7 phone support',
        'Dedicated account manager',
        'White-label options',
        'Advanced security',
        'Custom SLA',
        'On-premise deployment'
      ],
      limitations: [],
      popular: false
    }
  ];

  const itServicesPricing = [
    {
      name: 'IT Basic',
      price: '$199',
      period: '/month',
      description: 'Essential IT services for small businesses',
      features: [
        'Basic cloud setup',
        'Email support',
        'Monthly maintenance',
        'Security monitoring',
        'Backup solutions'
      ],
      limitations: [
        'Limited customization',
        'Standard response time',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'IT Professional',
      price: '$499',
      period: '/month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        'Advanced cloud solutions',
        'Priority support',
        'Real-time monitoring',
        'Custom integrations',
        'API management',
        'Advanced security',
        'Performance optimization'
      ],
      limitations: [
        'Limited to 50 users',
        'Standard SLA'
      ],
      popular: true
    },
    {
      name: 'IT Enterprise',
      price: '$1299',
      period: '/month',
      description: 'Enterprise-grade IT services and support',
      features: [
        'Unlimited users',
        'Custom infrastructure',
        '24/7 phone support',
        'Dedicated team',
        'Advanced security suite',
        'Custom SLA',
        'On-premise solutions',
        'Disaster recovery'
      ],
      limitations: [],
      popular: false
    }
  ];

  const microSaasPricing = [
    {
      name: 'Micro SaaS Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic SaaS features',
        'Email support',
        'Standard templates',
        'Basic analytics',
        'Up to 100 users'
      ],
      limitations: [
        'Limited customization',
        'Basic integrations',
        'Standard response time'
      ],
      popular: false
    },
    {
      name: 'Micro SaaS Pro',
      price: '$149',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Advanced SaaS features',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'Up to 500 users',
        'API access',
        'Custom integrations'
      ],
      limitations: [
        'Limited to 500 users',
        'Standard SLA'
      ],
      popular: true
    },
    {
      name: 'Micro SaaS Enterprise',
      price: '$399',
      period: '/month',
      description: 'Enterprise-grade SaaS solutions',
      features: [
        'Unlimited users',
        'Custom development',
        '24/7 phone support',
        'Dedicated account manager',
        'White-label options',
        'Advanced security',
        'Custom SLA',
        'On-premise deployment'
      ],
      limitations: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: '24/7 Support',
      price: '$199',
      period: '/month',
      description: 'Round-the-clock technical support',
      features: ['Phone support', 'Live chat', 'Priority response', 'Dedicated support team']
    },
    {
      name: 'Custom Development',
      price: '$150',
      period: '/hour',
      description: 'Custom features and integrations',
      features: ['Custom features', 'API development', 'Third-party integrations', 'UI/UX design']
    },
    {
      name: 'Training & Onboarding',
      price: '$99',
      period: '/hour',
      description: 'Team training and system onboarding',
      features: ['Team training', 'System onboarding', 'Best practices', 'Ongoing support']
    },
    {
      name: 'Security Audit',
      price: '$2999',
      period: '/one-time',
      description: 'Comprehensive security assessment',
      features: ['Security assessment', 'Vulnerability testing', 'Compliance check', 'Recommendations']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Simple, <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. All plans include our core features and can be customized to your requirements.
          </p>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicesPricing.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center text-gray-500">
                      <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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

      {/* IT Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicesPricing.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center text-gray-500">
                      <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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

      {/* Micro SaaS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPricing.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center text-gray-500">
                      <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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

      {/* Add-ons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your experience with our additional services and support options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={addon.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{addon.price}</span>
                    <span className="text-gray-400 ml-1">{addon.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className="w-full py-2 px-4 rounded-lg font-semibold text-center transition-all duration-300 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 inline-block"
                >
                  Add to Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our pricing and services
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
              <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Is there a free trial available?</h3>
              <p className="text-gray-300">Yes, we offer a 14-day free trial for all our services. No credit card required to get started.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Contact us today to discuss your needs and find the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;