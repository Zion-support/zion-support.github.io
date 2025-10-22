import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { useState } from 'react'
export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const CheckCircleIcon = CheckCircle
  const SparklesIcon = Sparkles
  const basicFeatures = [
    'Basic AI integration',
    'Standard support',
    'Core functionality'
  ]
  const proFeatures = [
    'Advanced AI features',
    'Priority support',
    'Custom integrations'
  ]
  const enterpriseFeatures = [
    'Full AI suite',
    '24/7 dedicated support',
    'Custom development'
  ]
  const popularServices = [
    { id: 1, name: 'AI Solutions', price: 99, shortDescription: 'Advanced AI solutions', route: '/ai-solutions', demoUrl: '/demo/ai-solutions' },
    { id: 2, name: 'Cloud Services', price: 149, shortDescription: 'Scalable cloud infrastructure', route: '/cloud-solutions', demoUrl: '/demo/cloud-solutions' },
    { id: 3, name: 'Data Analytics', price: 199, shortDescription: 'Comprehensive data analytics', route: '/data-analytics', demoUrl: '/demo/data-analytics' }
  ]
  const getServicePricing = (service: any) => {
    return billingCycle === 'monthly' ? service.price : service.price * 12 * 0.9
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Professional pricing solutions for modern businesses." />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional pricing solutions for modern businesses.
          </p>
        </div>
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                ${billingCycle === 'yearly' ? '99' : '9'}/month
              </div>
              <p className="text-gray-400">Perfect for small businesses</p>
            </div>
            <ul className="space-y-4 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
            >
              Get Started
            </Link>
          </div>
          {/* Pro Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                ${billingCycle === 'yearly' ? '199' : '19'}/month
              </div>
              <p className="text-gray-400">Perfect for growing businesses</p>
            </div>
            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
            >
              Get Started
            </Link>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                Custom
              </div>
              <p className="text-gray-400">Perfect for large organizations</p>
            </div>
            <ul className="space-y-4 mb-8">
              {enterpriseFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
            >
              Contact Sales
            </Link>
          </div>
        </div>
        {/* Popular Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${getServicePricing(service)}
                </div>
                <p className="text-gray-300 mb-4">Professional {service.name.toLowerCase()} solution</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us for a custom quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
            >
              Get Custom Quote
              <SparklesIcon className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Link} from 'react-router-dom'
import {CheckCircle, Star, ArrowRight, Zap} from 'lucide-react'
const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [,
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false,},
    {name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [,
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
      ],
      popular: true,},
    {name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [,
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false,}]
  return(<>)
      <Helmet />
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Choose the perfect plan for your business needs. All plans include our core AI and IT services.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {plans.map((plan, index) => (
                <div
                  key={index}className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-400/50 scale-105'
                      : 'border-white/10 hover: border-cyan-400/30',} `}
                >{plan.popular && (</div>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">Most Popular </div>
                    </div>
                  )} <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description</p>}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price</span>}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature} </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600',
                      : 'bg-white/10 text-white hover:bg-white/20',} `}>{plan.popular ? 'Get Started' : 'Choose Plan'</button>} </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">We offer tailored AI and IT solutions for enterprise clients. Contact us for a personalized quote.</p>
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default PricingPage