'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

export default function AISmartInventoryOptimizer() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'AI-powered demand prediction with 95% accuracy using machine learning algorithms and historical data analysis.',
      benefit: 'Reduce stockouts by 40%'
    },
    {
      icon: AlertTriangle,
      title: 'Smart Alerts',
      description: 'Real-time notifications for low stock, overstock, and reorder points with intelligent recommendations.',
      benefit: 'Prevent stockouts automatically'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into inventory turnover, carrying costs, and optimization opportunities.',
      benefit: 'Improve cash flow by 25%'
    },
    {
      icon: Package,
      title: 'Multi-location Management',
      description: 'Centralized inventory management across multiple warehouses, stores, and distribution centers.',
      benefit: 'Unified inventory visibility'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic demand forecasting',
        'Email alerts',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'SMS + Email alerts',
        'Advanced analytics',
        'API integration',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'Custom AI models',
        'Multi-channel alerts',
        'Custom dashboards',
        'White-label options',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce inventory costs by up to 30%',
    'Increase inventory turnover by 40%',
    'Eliminate stockouts and overstock',
    'Automate reorder processes',
    'Improve supplier relationships',
    'Enhance customer satisfaction'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Smart Inventory Optimizer - Zion Tech Group | Reduce Costs by 30%</title>
        <meta name="description" content="AI-powered inventory optimization platform that reduces costs by 30%, prevents stockouts, and automates reorder processes. Starting at $99/month." />
        <meta name="keywords" content="inventory management, AI optimization, demand forecasting, stock management, supply chain, inventory analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-smart-inventory-optimizer" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Smart Inventory Optimizer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your inventory management with AI-powered optimization that reduces costs by 30%, 
            prevents stockouts, and automates reorder processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Start Free Trial
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#demo"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-lg"
            >
              Watch Demo
            </Link>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Forecast Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600">Turnover Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Powerful AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced machine learning algorithms that learn from your data to optimize inventory decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Inventory Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses that have revolutionized their inventory operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative rounded-xl p-8 ${plan.popular ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border border-gray-200'} hover:shadow-lg transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have reduced inventory costs and improved efficiency with our AI-powered solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Start Free Trial
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>💰 Pricing starts at $99/month • 14-day free trial</p>
          </div>
        </div>
      </section>
    </div>
  );
}