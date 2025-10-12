import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Zap, Brain, Settings, Clock, Target, Users, BarChart3, Shield, Globe, Database } from 'lucide-react'

export default function AIAutomationPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and complex workflows to increase efficiency and reduce errors.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Intelligent Decision Making',
      description: 'AI-powered systems that make smart decisions based on data patterns and business rules.'
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: 'Process Optimization',
      description: 'Continuously optimize business processes using machine learning and data analytics.'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: '24/7 Operations',
      description: 'Run automated processes around the clock without human intervention or supervision.'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Goal-Oriented Automation',
      description: 'Set specific business objectives and let AI automation work towards achieving them.'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human workers and AI systems for optimal productivity.'
    }
  ]

  const automationTypes = [
    'Customer service automation',
    'Data processing and analysis',
    'Email and communication workflows',
    'Inventory management',
    'Financial reporting',
    'Lead generation and qualification',
    'Content creation and management',
    'Quality assurance testing'
  ]

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase productivity by 300%',
    'Eliminate human errors',
    'Scale operations without additional staff',
    'Improve customer response times',
    'Enable 24/7 business operations'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 automated workflows',
        'Basic AI capabilities',
        'Email support',
        'Standard integrations',
        'Monthly reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 automated workflows',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Real-time monitoring',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited workflows',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'On-premise deployment'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation. Streamline workflows, reduce costs, and increase productivity with intelligent process automation." />
        <meta name="keywords" content="AI automation, workflow automation, process optimization, intelligent automation, business automation, machine learning" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Automation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with intelligent automation that works 24/7. 
            Streamline workflows, reduce costs, and increase productivity with AI-powered process automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Automation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Automation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Automation Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
                <p className="text-gray-300 text-sm">{type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20'
                    : 'border-slate-700 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our AI automation platform to streamline operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}