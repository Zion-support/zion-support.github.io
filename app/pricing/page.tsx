import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Micro SAAS Starter',
      description: 'Perfect for small businesses and startups',
      price: '$79',
      period: '/month',
      icon: '🚀',
      popular: false,
      features: [
        'Up to 5 AI-powered tools',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '1 user account',
        'Basic documentation'
      ],
      benefits: ['Get started quickly', 'Affordable pricing', 'Essential features included'],
      category: 'Micro SAAS',
      cta: 'Start Free Trial',
      link: '/micro-saas'
    },
    {
      name: 'Micro SAAS Professional',
      description: 'Ideal for growing businesses',
      price: '$199',
      period: '/month',
      icon: '💼',
      popular: true,
      features: [
        'Up to 15 AI-powered tools',
        'Advanced analytics dashboard',
        'Priority support',
        'Advanced integrations',
        'Up to 10 user accounts',
        'API access',
        'Custom workflows',
        'Advanced reporting'
      ],
      benefits: ['Scale with your business', 'Priority support', 'Advanced features'],
      category: 'Micro SAAS',
      cta: 'Start Free Trial',
      link: '/micro-saas'
    },
    {
      name: 'Micro SAAS Enterprise',
      description: 'For large organizations',
      price: '$499',
      period: '/month',
      icon: '🏢',
      popular: false,
      features: [
        'Unlimited AI-powered tools',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'Custom integrations',
        'Unlimited user accounts',
        'Full API access',
        'Custom workflows',
        'White-label options',
        'Dedicated account manager'
      ],
      benefits: ['Enterprise-grade features', 'Dedicated support', 'Custom solutions'],
      category: 'Micro SAAS',
      cta: 'Contact Sales',
      link: '/contact'
    },
    {
      name: 'AI Services Basic',
      description: 'Essential AI solutions for small projects',
      price: '$1,500',
      period: '/month',
      icon: '🤖',
      popular: false,
      features: [
        'Basic machine learning models',
        'Standard NLP processing',
        'Basic computer vision',
        'Email support',
        'Monthly model updates',
        'Basic analytics'
      ],
      benefits: ['Get started with AI', 'Proven solutions', 'Cost-effective'],
      category: 'AI Services',
      cta: 'Get Started',
      link: '/ai-services'
    },
    {
      name: 'AI Services Professional',
      description: 'Advanced AI solutions for medium businesses',
      price: '$5,000',
      period: '/month',
      icon: '🧠',
      popular: true,
      features: [
        'Advanced machine learning models',
        'Custom NLP solutions',
        'Advanced computer vision',
        'Priority support',
        'Weekly model updates',
        'Advanced analytics',
        'Custom model training',
        'API access'
      ],
      benefits: ['Advanced AI capabilities', 'Custom solutions', 'Priority support'],
      category: 'AI Services',
      cta: 'Get Started',
      link: '/ai-services'
    },
    {
      name: 'AI Services Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: '$15,000',
      period: '/month',
      icon: '⚡',
      popular: false,
      features: [
        'Custom AI model development',
        'Advanced NLP solutions',
        'Enterprise computer vision',
        '24/7 dedicated support',
        'Real-time model updates',
        'Enterprise analytics',
        'Custom model training',
        'Full API access',
        'Dedicated AI team',
        'White-label solutions'
      ],
      benefits: ['Complete AI transformation', 'Dedicated team', 'Custom solutions'],
      category: 'AI Services',
      cta: 'Contact Sales',
      link: '/contact'
    },
    {
      name: 'IT Services Basic',
      description: 'Essential IT support for small businesses',
      price: '$1,200',
      period: '/month',
      icon: '💻',
      popular: false,
      features: [
        'Basic cloud management',
        'Standard security monitoring',
        'Email support',
        'Monthly reports',
        'Basic backup solutions',
        'Standard maintenance'
      ],
      benefits: ['Reliable IT support', 'Cost-effective', 'Essential features'],
      category: 'IT Services',
      cta: 'Get Started',
      link: '/it-services'
    },
    {
      name: 'IT Services Professional',
      description: 'Comprehensive IT solutions for growing businesses',
      price: '$3,500',
      period: '/month',
      icon: '🔧',
      popular: true,
      features: [
        'Advanced cloud management',
        'Comprehensive security monitoring',
        'Priority support',
        'Weekly reports',
        'Advanced backup solutions',
        'Proactive maintenance',
        'Performance optimization',
        '24/7 monitoring'
      ],
      benefits: ['Comprehensive IT support', 'Proactive management', 'Priority support'],
      category: 'IT Services',
      cta: 'Get Started',
      link: '/it-services'
    },
    {
      name: 'IT Services Enterprise',
      description: 'Complete IT transformation for large organizations',
      price: '$8,000',
      period: '/month',
      icon: '🏢',
      popular: false,
      features: [
        'Enterprise cloud management',
        'Advanced security solutions',
        '24/7 dedicated support',
        'Real-time reporting',
        'Enterprise backup solutions',
        'Proactive maintenance',
        'Performance optimization',
        '24/7 monitoring',
        'Dedicated IT team',
        'Custom solutions'
      ],
      benefits: ['Complete IT transformation', 'Dedicated team', 'Enterprise features'],
      category: 'IT Services',
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const addOnServices = [
    {
      name: 'Quantum Computing Solutions',
      description: 'Advanced quantum computing capabilities for complex problem solving',
      price: 'Custom Pricing',
      features: ['Quantum algorithms', 'Quantum security', 'Optimization', 'Simulation'],
      category: 'Quantum Computing'
    },
    {
      name: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      price: 'Starting at $2,500/month',
      features: ['Self-healing infrastructure', 'Automated operations', 'Intelligent monitoring', 'Adaptive learning'],
      category: 'Autonomous Systems'
    },
    {
      name: 'Blockchain & Web3',
      description: 'Decentralized applications, smart contracts, and Web3 solutions',
      price: 'Starting at $8,000/project',
      features: ['Smart contracts', 'DeFi protocols', 'NFT marketplaces', 'Web3 applications'],
      category: 'Blockchain & Web3'
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection and compliance',
      price: 'Starting at $2,500/month',
      features: ['Threat detection', 'Penetration testing', 'Zero Trust security', 'SOC services'],
      category: 'Cybersecurity'
    }
  ];

  const categories = [...new Set(pricingPlans.map(plan => plan.category))];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI, IT, and micro SAAS services. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. No hidden fees, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600">
                Flexible pricing options for every business size
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 m-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-xl text-gray-500 ml-1">{plan.period}</span>
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

                  <div className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-blue-600">
                        <Zap className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={plan.link}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600">
                Specialized solutions for specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you offer custom pricing for enterprise clients?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer custom pricing and solutions for enterprise clients with specific requirements. Contact our sales team for a personalized quote.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What support options are available?
                </h3>
                <p className="text-gray-600">
                  We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise plans.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial for all Micro SAAS plans. No credit card required to get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing a Plan?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experts are here to help you find the perfect solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;