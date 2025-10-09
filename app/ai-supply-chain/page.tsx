import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Truck, Package, BarChart, Zap, Target, Clock, Shield, Brain } from 'lucide-react';

const AISupplyChainPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered demand forecasting and supply chain optimization for maximum efficiency.',
      benefits: ['Demand prediction', 'Inventory optimization', 'Risk assessment', 'Cost reduction']
    },
    {
      icon: Truck,
      title: 'Logistics Optimization',
      description: 'Intelligent route planning and transportation optimization for faster, cheaper delivery.',
      benefits: ['Route optimization', 'Load balancing', 'Fuel efficiency', 'Delivery tracking']
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Smart inventory control with automated reordering and stock level optimization.',
      benefits: ['Auto reordering', 'Stock optimization', 'Waste reduction', 'Space utilization']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive supply chain analytics with real-time monitoring and insights.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Cost analysis', 'Efficiency tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,999',
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 locations',
        'Basic forecasting',
        'Standard integrations',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 locations',
        'Advanced AI features',
        'Multi-warehouse support',
        'Priority support',
        'Advanced integrations',
        'Custom workflows',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Unlimited locations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: 'Demand Forecasting',
      description: 'AI analyzes historical data, market trends, and external factors to predict future demand.',
      icon: '📈',
      results: ['30% improvement in forecast accuracy', '25% reduction in stockouts', '20% decrease in excess inventory']
    },
    {
      title: 'Supplier Optimization',
      description: 'Intelligent supplier selection and relationship management for optimal cost and quality.',
      icon: '🤝',
      results: ['35% reduction in procurement costs', '40% improvement in supplier performance', '50% faster supplier onboarding']
    },
    {
      title: 'Risk Management',
      description: 'AI identifies and mitigates supply chain risks before they impact operations.',
      icon: '⚠️',
      results: ['60% reduction in supply disruptions', '45% faster risk response', '30% improvement in resilience']
    },
    {
      title: 'Sustainability Optimization',
      description: 'AI optimizes supply chain for environmental impact and sustainability goals.',
      icon: '🌱',
      results: ['40% reduction in carbon footprint', '35% improvement in sustainability metrics', '25% cost savings through green practices']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimization - Zion Tech Group</title>
        <meta name="description" content="Optimize your supply chain with AI-powered forecasting, logistics optimization, and intelligent inventory management. Reduce costs and improve efficiency." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, demand forecasting, logistics optimization, inventory management, supply chain analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Supply Chain Optimization
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Transform your supply chain with AI-powered forecasting, logistics optimization, and intelligent inventory management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  ✉️ Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI-Powered Supply Chain Features
              </h2>
              <p className="text-xl text-gray-600">
                Leverage artificial intelligence to optimize every aspect of your supply chain
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Discover how AI transforms every aspect of supply chain management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-green-600">
                        <Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your supply chain complexity and scale
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {plan.price}
                      {plan.period !== 'pricing' && <span className="text-lg text-gray-500">/{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:+13024640950"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact our AI supply chain experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-green-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainPage;