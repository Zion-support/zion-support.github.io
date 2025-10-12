import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cloud, Code, Smartphone, Database, BarChart3, MessageSquare, FileText, Camera, Cpu, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT services',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: [
        'AI Content Generation (10,000 words/month)',
        'Basic Chatbot Builder',
        'Email Support',
        'Standard Analytics',
        '5GB Cloud Storage',
        'Basic Security Features',
        '1 Micro SAAS Tool',
        'Basic IT Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI and IT needs',
      icon: <Star className="w-8 h-8 text-blue-400" />,
      features: [
        'AI Content Generation (50,000 words/month)',
        'Advanced Chatbot Builder',
        'Priority Support',
        'Advanced Analytics Dashboard',
        '50GB Cloud Storage',
        'Enhanced Security Suite',
        'API Access',
        'Custom Integrations',
        '3 Micro SAAS Tools',
        'IT Consulting (5 hours/month)',
        'Cloud Migration Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with comprehensive needs',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      features: [
        'Unlimited AI Content Generation',
        'Custom AI Solutions',
        '24/7 Dedicated Support',
        'Enterprise Analytics',
        'Unlimited Cloud Storage',
        'Advanced Security & Compliance',
        'Custom API Development',
        'Dedicated Account Manager',
        'On-premise Deployment',
        'SLA Guarantee',
        'Unlimited Micro SAAS Tools',
        'Full IT Infrastructure Management',
        '5G Implementation',
        'Custom Development'
      ],
      popular: false
    }
  ]

  const addOns = [
    {
      name: '5G Implementation',
      price: '$5,000',
      description: 'Complete 5G network setup and optimization',
      icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'Cybersecurity Audit',
      price: '$2,500',
      description: 'Comprehensive security assessment and recommendations',
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      name: 'Custom AI Training',
      price: '$10,000',
      description: 'Train AI models on your specific data and requirements',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      name: 'Cloud Migration',
      price: '$7,500',
      description: 'Migrate your infrastructure to our cloud platform',
      icon: <Cloud className="w-6 h-6 text-cyan-400" />
    }
  ]

  const aiServices = [
    {
      name: 'AI Content Generator Pro',
      price: '$299/month',
      features: ['SEO optimization', 'Multi-language support', 'Brand voice training'],
      icon: <FileText className="w-6 h-6 text-cyan-400" />
    },
    {
      name: 'AI Chatbot Enterprise',
      price: '$499/month',
      features: ['24/7 availability', 'Multi-channel integration', 'Sentiment analysis'],
      icon: <MessageSquare className="w-6 h-6 text-green-400" />
    },
    {
      name: 'AI Analytics Dashboard',
      price: '$399/month',
      features: ['Real-time insights', 'Predictive modeling', 'Custom reports'],
      icon: <BarChart3 className="w-6 h-6 text-yellow-400" />
    },
    {
      name: 'AI 3D Generation Studio',
      price: '$799/month',
      features: ['3D model generation', 'Animation creation', 'VR/AR support'],
      icon: <Camera className="w-6 h-6 text-purple-400" />
    }
  ]

  const itServices = [
    {
      name: 'Cloud Migration Services',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Data security', 'Performance optimization'],
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'DevOps Solutions',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup'],
      icon: <Code className="w-6 h-6 text-green-400" />
    },
    {
      name: 'Cybersecurity Services',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification'],
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      name: 'Mobile App Development',
      price: 'Starting at $8,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization'],
      icon: <Smartphone className="w-6 h-6 text-purple-400" />
    }
  ]

  const microSaasServices = [
    {
      name: 'AI Task Manager',
      price: '$19/month',
      features: ['AI prioritization', 'Deadline prediction', 'Productivity analytics'],
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      name: 'AI Expense Tracker',
      price: '$15/month',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking'],
      icon: <Database className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'AI Password Manager',
      price: '$12/month',
      features: ['Password generation', 'Security analysis', 'Breach monitoring'],
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      name: 'AI Social Manager',
      price: '$35/month',
      features: ['Content creation', 'Auto scheduling', 'Engagement analytics'],
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, plans, AI services, IT services, cost, subscription" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Transparent
            </span>{' '}
            Pricing
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI and IT services 
            with no hidden fees or surprises.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'border-cyan-500/50 ring-2 ring-cyan-500/20'
                  : 'border-slate-700 hover:border-cyan-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* AI Services Pricing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Services Pricing</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced AI solutions with transparent, competitive pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{service.name}</h3>
                </div>
                <p className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/ai-services"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services Pricing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">IT Services Pricing</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional IT solutions with project-based and ongoing support pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{service.name}</h3>
                </div>
                <p className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/it-services"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Micro SAAS Pricing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Micro SAAS Pricing</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Affordable AI-powered tools for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{service.name}</h3>
                </div>
                <p className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/micro-saas"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with these premium add-on services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {addon.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{addon.name}</h3>
                </div>
                <p className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</p>
                <p className="text-gray-300 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial available?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing for large organizations?</h3>
              <p className="text-gray-300">Yes, our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and get a tailored quote.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI and IT solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}