import React from 'react';
import Layout from '../components/Layout';
import { 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  MessageCircle,
  Phone,
  Building,
  Code,
  Database
} from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small teams getting started',
      icon: Users,
      features: [
        'Up to 5 team members',
        'Basic AI services',
        'Email support',
        'Standard SLA',
        'Basic analytics',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for growing businesses',
      icon: Building,
      features: [
        'Up to 25 team members',
        'Advanced AI services',
        'Priority support',
        '99.9% SLA',
        'Advanced analytics',
        'Full API access',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 999,
      period: 'month',
      description: 'For large organizations with complex needs',
      icon: Globe,
      features: [
        'Unlimited team members',
        'All AI services',
        '24/7 dedicated support',
        '99.99% SLA',
        'Custom analytics',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'On-site training',
        'Custom development'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Credits',
      price: 0.10,
      unit: 'per credit',
      description: 'Extra AI processing credits for high-volume usage'
    },
    {
      name: 'Premium Support',
      price: 199,
      unit: 'per month',
      description: 'Dedicated support with faster response times'
    },
    {
      name: 'Custom Development',
      price: 150,
      unit: 'per hour',
      description: 'Custom features and integrations tailored to your needs'
    }
  ];

  return (
    <Layout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for Zion Tech Group's AI services, cloud solutions, and enterprise technology services. Choose the plan that fits your needs."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core AI services, cloud infrastructure, and expert support.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with additional services and support options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">${addon.price}</span>
                  <span className="text-gray-600"> {addon.unit}</span>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <button className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer custom pricing for large organizations?
              </h3>
              <p className="text-gray-600">
                Yes, we offer custom pricing and enterprise agreements for organizations with specific needs. Contact our sales team to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of businesses already using our platform to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center">
              <Star className="mr-2 h-5 w-5" />
              Start Free Trial
            </button>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}