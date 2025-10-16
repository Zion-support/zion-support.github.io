'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  CubeIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
  ShieldCheckIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const AIInventoryOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: CubeIcon,
      title: 'Smart Inventory Tracking',
      description: 'Real-time inventory tracking with AI-powered demand forecasting and automated reorder points for optimal stock levels.'
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning algorithms predict demand patterns, seasonal trends, and supply chain disruptions with 90% accuracy.'
    },
    {
      icon: ClockIcon,
      title: 'Automated Reordering',
      description: 'Intelligent reorder automation based on sales velocity, lead times, and supplier reliability to prevent stockouts and overstock.'
    },
    {
      icon: CogIcon,
      title: 'Supply Chain Optimization',
      description: 'End-to-end supply chain visibility with automated supplier management and cost optimization recommendations.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Management',
      description: 'Proactive risk assessment for supply chain disruptions, quality issues, and market volatility with mitigation strategies.'
    },
    {
      icon: TruckIcon,
      title: 'Logistics Integration',
      description: 'Seamless integration with shipping providers, warehouse management systems, and logistics platforms for complete visibility.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and retailers',
      features: [
        'Up to 1,000 SKUs',
        'Basic demand forecasting',
        'Email notifications',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        '1 warehouse location'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Multi-channel alerts',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Up to 5 warehouse locations',
        'Supplier management',
        'Cost optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'AI-powered insights',
        'Custom integrations',
        'Real-time analytics',
        '24/7 dedicated support',
        'White-label options',
        'Unlimited locations',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '30%', label: 'Inventory Reduction' },
    { number: '95%', label: 'Stockout Prevention' },
    { number: '25%', label: 'Cost Savings' },
    { number: '90%', label: 'Forecast Accuracy' }
  ];

  const benefits = [
    'Reduce inventory carrying costs by up to 30%',
    'Prevent stockouts with 95% accuracy',
    'Optimize supplier relationships and pricing',
    'Improve cash flow and working capital',
    'Enhance customer satisfaction with better availability',
    'Streamline warehouse operations and reduce waste'
  ];

  return (
    <>
      <SEOHead 
        title="AI Inventory Optimizer - Smart Inventory Management | Zion Tech Group"
        description="Revolutionary AI-powered inventory management solution with predictive analytics, automated reordering, and supply chain optimization. Reduce costs by 30%!"
        keywords="AI inventory management, inventory optimization, demand forecasting, supply chain management, automated reordering, inventory analytics"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <CubeIcon className="w-4 h-4 mr-2" />
                AI-Powered Inventory Management
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  AI Inventory Optimizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your inventory management with AI-powered forecasting, automated reordering, and supply chain optimization. 
                Reduce inventory costs by 30% while preventing stockouts with 95% accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Powerful Features for <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Smart Inventory</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to optimize your inventory management and supply chain operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Proven <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their inventory management with our AI-powered solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 group">
                  <CheckCircleIcon className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors text-lg">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Simple, Transparent <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your inventory needs. All plans include our core AI features and 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                    : 'border-slate-700 hover:border-orange-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Optimize Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Inventory Management</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI Inventory Optimizer to reduce costs and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25">
                Start Your Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIInventoryOptimizerPage;