import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI integration',
        'Cloud hosting included',
        'Email support',
        'Up to 5 users',
        'Basic analytics',
        'Standard security'
      ],
      popular: false,
      icon: CpuChipIcon
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Custom integrations',
        'Priority support',
        'Up to 25 users',
        'Advanced analytics',
        'Enhanced security',
        'API access',
        'Custom training'
      ],
      popular: true,
      icon: CloudIcon
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Fully customized AI',
        'Dedicated infrastructure',
        '24/7 support',
        'Unlimited users',
        'Enterprise analytics',
        'Maximum security',
        'Full API access',
        'Custom development',
        'On-premise options',
        'SLA guarantee'
      ],
      popular: false,
      icon: ShieldCheckIcon
    }
  ];

  const addOns = [
    {
      name: 'Additional Users',
      price: '$50',
      period: '/user/month',
      description: 'Add more team members to your plan'
    },
    {
      name: 'Premium Support',
      price: '$500',
      period: '/month',
      description: 'Dedicated support with faster response times'
    },
    {
      name: 'Custom Integrations',
      price: '$2,000',
      period: '/integration',
      description: 'Connect with your existing systems'
    },
    {
      name: 'Training & Onboarding',
      price: '$1,500',
      period: '/session',
      description: 'Expert training for your team'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI solutions, cloud infrastructure, and digital transformation services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI pricing, cloud pricing, enterprise pricing, subscription plans" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Simple Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the Plan That Fits Your Business
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Scale up or down as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to grow with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Add-ons & Extras
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services and features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addOn, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{addOn.name}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-bold text-purple-400">{addOn.price}</span>
                  <span className="text-gray-300 ml-1">{addOn.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I change my plan later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us for a quote.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your plan and start transforming your business today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;