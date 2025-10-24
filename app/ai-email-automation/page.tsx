import React from 'react'
import { ArrowRight, Send, Mail, Zap, CheckCircle, Shield, BarChart, Brain, BarChart3, Star, TrendingUp, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'

const AIEmailAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Email Generation',
      description: 'Generate personalized, high-converting emails using AI that understands your audience and brand voice.',
      benefits: ['Personalized content', 'A/B testing', 'Brand voice training', 'Multi-language support']
    },
    {
      icon: <Send className="w-8 h-8 text-emerald-400" />,
      title: 'Smart Automation',
      description: 'Create complex email workflows with AI-powered triggers, segmentation, and behavioral targeting.',
      benefits: ['Behavioral triggers', 'Smart segmentation', 'Dynamic content', 'Cross-channel sync']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Performance Analytics',
      description: 'Advanced analytics with AI insights to optimize email performance and improve ROI.',
      benefits: ['Open rate optimization', 'Click-through analysis', 'Revenue tracking', 'Predictive insights']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Automated Sequences',
      description: 'AI-powered email sequences that adapt based on recipient behavior and engagement patterns.',
      benefits: ['Adaptive sequences', 'Behavioral triggers', 'Personalization', 'Optimal timing']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Lead Scoring',
      description: 'AI automatically scores leads based on email engagement and behavior to prioritize follow-ups.',
      benefits: ['Lead scoring', 'Engagement tracking', 'Priority alerts', 'CRM integration']
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-400" />,
      title: 'Deliverability Optimization',
      description: 'AI ensures maximum deliverability with reputation monitoring and content optimization.',
      benefits: ['Reputation monitoring', 'Content optimization', 'Spam prevention', 'Compliance checks']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI email automation',
      features: [
        'Up to 10,000 emails/month',
        'AI email generation',
        'Basic automation',
        'Email analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 50,000 emails/month',
        'Advanced AI features',
        'Complex automation workflows',
        'Advanced analytics',
        'A/B testing',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Full-featured solution for large organizations',
      features: [
        'Unlimited emails',
        'All AI features',
        'Custom automation',
        'Advanced reporting',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false
    }
  ]

  const benefits = [
    'Increase email open rates by up to 40%',
    'Reduce email marketing costs by 60%',
    'Improve conversion rates with AI optimization',
    'Save 20+ hours per week on email management',
    'Scale email campaigns without proportional resource increases'
  ]

  return (
    <div className="min-h-s creenbg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="rel ativepy-20 px-4 overflow-hidden">
        <div className="abs oluteinset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="rel ativemax-w-7xl mx-auto text-center">
          <h1 className="tex t-4xlmd: text-6xl font-bold text-gray-900 mb-6">
            <span className="tex t-transparentbg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
              AI Email Automation
            </span>
          </h1>
          <p className="tex t-xltext-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation that generates, sends, and optimizes emails for maximum engagement and ROI.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cy an-600hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-8h-8" />
            </button>
            <button className="bor derborder-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-3xlmd: text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Email Features
            </h2>
            <p className="tex t-xltext-gray-600 max-w-2xl mx-auto">
              Everything you need to create, automate, and optimize your email marketing campaigns.
            </p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-wh itep-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="fle xitems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="tex t-xlfont-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="tex t-gray-600mb-4">{feature.description}</p>
                <ul className="spa ce-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="fle xitems-center text-sm text-gray-600">
                      <CheckCircle className="w-4h-4mr-2 t e xt-cyan-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20px-4 b g-white/5">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-3xlmd: text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="tex t-xltext-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cy an-500text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="tex t-2xlfont-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="tex t-gray-600mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="tex t-4xlfont-bold text-gray-900">{plan.price}</span>
                  <span className="tex t-gray-600">{plan.period}</span>
                </div>
                <ul className="spa ce-y-3mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="fle xitems-center text-gray-600">
                      <CheckCircle className="w-5h-5mr-3 t e xt-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-3xlmd: text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Email Automation?
            </h2>
            <p className="tex t-xltext-gray-600 max-w-2xl mx-auto">
              Our proven track record and innovative approach deliver measurable results.
            </p>
          </div>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="fle xitems-start space-x-3">
                <CheckCircle className="w-6h-6te x t-cyan-500 mt-1" />
                <p className="tex t-gray-700text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4 b g-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4x lmx-auto text-center">
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="tex t-xltext-cyan-100 mb-8">
            Start your free trial today and see the power of AI email automation.
          </p>
          <button className="bg-wh itehover:bg-gray-100 text-cyan-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Free Trial
            <ArrowRight className="w-8h-8" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default AIEmailAutomationPage;