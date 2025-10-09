'use client';
import React from 'react';
import { CheckCircle, Star, Package, TrendingUp, AlertTriangle, BarChart, Brain, Zap, Target } from 'lucide-react';

const AIInventoryManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict future demand with 95% accuracy using machine learning algorithms',
      benefits: ['95% demand prediction accuracy', 'Reduce stockouts by 80%', 'Optimize inventory levels']
    },
    {
      icon: Package,
      title: 'Smart Reorder Points',
      description: 'Automatically calculate optimal reorder points based on demand patterns and lead times',
      benefits: ['40% reduction in carrying costs', 'Zero stockouts', 'Automated reordering']
    },
    {
      icon: TrendingUp,
      title: 'Price Optimization',
      description: 'Dynamically adjust prices based on demand, competition, and inventory levels',
      benefits: ['25% increase in profit margins', 'Real-time pricing', 'Competitive analysis']
    },
    {
      icon: AlertTriangle,
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns in sales, theft, or supplier issues using AI',
      benefits: ['Early theft detection', 'Supplier quality monitoring', 'Fraud prevention']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and insights on inventory performance and trends',
      benefits: ['Real-time dashboards', 'Custom reports', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Multi-location Management',
      description: 'Seamlessly manage inventory across multiple warehouses and locations',
      benefits: ['Centralized control', 'Location optimization', 'Transfer automation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses with basic inventory needs',
      features: [
        'Up to 1,000 SKUs',
        'Basic demand forecasting',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        'API integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with complex inventory operations',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Multi-location support',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Automated reordering',
        'Price optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with extensive inventory management needs',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom workflows',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Retail Chains',
      description: 'Optimize inventory across multiple stores with AI-powered demand forecasting',
      icon: '🏪',
      metrics: ['30% reduction in excess inventory', '25% increase in sales', '40% fewer stockouts']
    },
    {
      title: 'E-commerce',
      description: 'Manage complex product catalogs with intelligent inventory optimization',
      icon: '🛒',
      metrics: ['50% faster order fulfillment', '35% reduction in carrying costs', '60% higher customer satisfaction']
    },
    {
      title: 'Manufacturing',
      description: 'Streamline raw material and finished goods inventory with predictive analytics',
      icon: '🏭',
      metrics: ['45% reduction in waste', '30% faster production cycles', '25% cost savings']
    },
    {
      title: 'Healthcare',
      description: 'Ensure critical medical supplies are always available with AI forecasting',
      icon: '🏥',
      metrics: ['90% reduction in stockouts', '35% cost savings', '100% compliance']
    }
  ];

  const benefits = [
    {
      title: 'Reduce Inventory Costs',
      description: 'Lower carrying costs by 30-50% through optimized stock levels',
      icon: '💰',
      percentage: '40%'
    },
    {
      title: 'Eliminate Stockouts',
      description: 'Prevent lost sales with accurate demand forecasting',
      icon: '📦',
      percentage: '95%'
    },
    {
      title: 'Improve Cash Flow',
      description: 'Free up working capital by reducing excess inventory',
      icon: '💹',
      percentage: '35%'
    },
    {
      title: 'Increase Efficiency',
      description: 'Automate manual processes and reduce human error',
      icon: '⚡',
      percentage: '60%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Inventory Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Transform your inventory operations with AI-powered forecasting, optimization, and automation
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
                ✉️ Get Free Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              See the measurable impact of AI-powered inventory management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{benefit.percentage}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to optimize your inventory operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
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

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your inventory complexity and business size
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              See how AI inventory management transforms different industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600">
                      <Zap className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of businesses already using AI to transform their inventory management
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInventoryManagementPage;