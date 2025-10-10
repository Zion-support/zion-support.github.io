'use client';
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Code,
  Shield,
  Users,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasPlans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Up to 3 micro SAAS tools',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Mobile app access',
        'Basic analytics'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Unlimited micro SAAS tools',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Team collaboration',
        'Advanced analytics',
        'API access',
        'White-label options'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Everything in Professional',
        'Custom AI training',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment',
        'Custom development'
      ],
      popular: false,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const aiServicesPlans = [
    {
      name: 'Basic',
      description: 'Essential AI services for small businesses',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'AI Analytics (Basic)',
        'AI Content Generation',
        'AI Customer Support (Basic)',
        'Email support',
        'Standard integrations',
        'Basic reporting'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Advanced',
      description: 'Comprehensive AI solutions for growing companies',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      features: [
        'All Basic features',
        'AI Workflow Automation',
        'AI Security Solutions',
        'AI Document Processing',
        'Priority support',
        'Advanced integrations',
        'Custom AI models',
        'Advanced analytics'
      ],
      popular: true,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      description: 'Full-scale AI transformation for large organizations',
      monthlyPrice: 1499,
      yearlyPrice: 14990,
      features: [
        'All Advanced features',
        'Custom AI development',
        'Dedicated AI team',
        '24/7 support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false,
      color: 'from-red-500 to-orange-600'
    }
  ];

  const itServicesPlans = [
    {
      name: 'Managed Services',
      description: 'Comprehensive IT management and support',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        '24/7 IT support',
        'Cloud migration',
        'Security monitoring',
        'Backup & recovery',
        'Performance optimization',
        'Monthly reporting'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Infrastructure',
      description: 'Complete infrastructure design and implementation',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'All Managed Services',
        'Infrastructure design',
        'Cloud architecture',
        'DevOps implementation',
        'Security auditing',
        'Compliance management',
        'Custom development'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Transformation',
      description: 'End-to-end digital transformation',
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        'All Infrastructure features',
        'Digital transformation',
        'Custom software development',
        'AI integration',
        'Dedicated team',
        'Project management',
        'Training & support'
      ],
      popular: false,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const addOns = [
    {
      name: 'AI Training & Consulting',
      description: 'Expert guidance on AI implementation and optimization',
      price: '$299/hour',
      features: ['Custom AI strategy', 'Implementation guidance', 'Team training', 'Best practices']
    },
    {
      name: 'Custom Development',
      description: 'Bespoke software solutions tailored to your needs',
      price: '$150/hour',
      features: ['Custom applications', 'API development', 'Integration services', 'Quality assurance']
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support with guaranteed response times',
      price: '$199/month',
      features: ['15-minute response', 'Dedicated support team', 'Phone & chat support', 'Emergency escalation']
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: '$2,999/project',
      features: ['Vulnerability assessment', 'Penetration testing', 'Compliance review', 'Security recommendations']
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial with no credit card required.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-sm rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Micro SAAS Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
              <Zap className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Micro SAAS Solutions
          </h2>
          <p className="text-xl text-gray-300">
            AI-powered micro SaaS tools to streamline your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {microSaasPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-400 ring-2 ring-purple-400/50' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-400 ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
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

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* AI Services Pricing */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <Brain className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive AI solutions to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicesPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-indigo-400 ring-2 ring-indigo-400/50' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400 ml-1">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
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

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IT Services Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
              <Cloud className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            IT Services
          </h2>
          <p className="text-xl text-gray-300">
            Complete IT solutions for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itServicesPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-400 ring-2 ring-blue-400/50' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-400 ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
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

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300">
              Enhance your plan with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                <div className="text-2xl font-bold text-white mb-4">{addon.price}</div>
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white/20 text-white py-2 px-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-300">
            Our experts are here to help you find the perfect solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
            <p className="text-gray-300 mb-4">+1 302 464 0950</p>
            <p className="text-sm text-gray-400">Available 24/7</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Email</h3>
            <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
            <p className="text-sm text-gray-400">Response within 2 hours</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Address</h3>
            <p className="text-gray-300 mb-4">364 E Main St STE 1008</p>
            <p className="text-sm text-gray-400">Middletown, DE 19709</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and experience the power of our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;